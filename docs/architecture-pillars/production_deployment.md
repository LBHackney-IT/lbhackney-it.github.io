---
id: production_deployment
title: Production Deployment
---

### Context
This document outlines the infrastructure requirements and considerations for production services. It is intended to be used as a guide and as a reference point to ensure that live services deployed to a production environment are compliant with the infrastructure requirements for production deployments. 

The list groups aspects based on Hackney’s defined architecture pillars and **is concerned with** resources provisioned as part of service delivery **and not** the overall platform requirements.

All services deployed to production will be assessed against the points listed in the [Checklist](#checklist) section of this document. 

A guide outlining the steps for API testing for production deployment can be found [here](https://playbook.hackney.gov.uk/API-Playbook/production_testing).

### Checklist
**Please Note:** Not all points will be applicable to resource types used by different projects. It is the responsibility of each team lead to assess which points relate to resources used by the given project and ensure they are followed.

**Security**
1. [Data is encrypted at rest](#encryption) for:
    - AWS RDS
    - AWS SNS
    - AWS OpenSearch
    - AWS S3
    - AWS MSK (Amazon Managed Streaming for Apache Kafka)
    - AWS DynamoDB
    - AWS Redshift
2. [All API Gateway endpoints, with the exception of Swagger documentation, are secured via an authorizer](#api-endpoints-protection-via-an-authentication-mechanism) 
3. [No publicly accessible resources](#no-publicly-accessible-resources)
    - [AWS S3 blocks public access](#aws-s3)
    - [AWS Lambda do not have too permissive resource policies attached and are hosted in a VPC if applicable](#aws-lambda) 
    - [AWS RDS instances are blocking public access and are hosted in a private subnet](#aws-rds)
    - [AWS OpenSearch clusters are hosted in a private subnet](#aws-opensearch)

**High availability**
1. [Resources have been deployed across 3 availability zones](#multi-az-deployment)
2. [RDS databases have read replicas enabled to support failover](#read-replicas-for-rds-databases)

**Monitoring and alerting**
1. [AWS CloudWatch canaries to monitor availability are set up for APIs](#apis-availability)
2. [Logging and retention of logs are configured as per available policies](#logging)
3. [API alarms are set up to monitor for 5xx errors and canaries outcome](#api-cloudwatch-alarms)
4. [CloudWatch dashboards are set up for improved monitoring](#cloudwatch-dashboards)
5. [AWS X-Ray is enabled for APIs](#request-tracing)
6. [Alarms and notification mechanisms are in place for scenarios when a message fails to be delivered via SNS](#eda-for-apis---monitoring-and-data-loss-prevention)
7. [The EDA setup for APIs includes mechanisms to prevent data loss](#eda-for-apis---monitoring-and-data-loss-prevention)

**Reliability**
1. [DynamoDB PITR is enabled](#pitr-for-dynamodb)
2. [All AWS resources storing data have been assigned backup tags with the correct value](#back-up-tags)

**Cost optimization**
1. [Database technology is DynamoDB (for NoSQL), RDS Postgres (for SQL) or S3 (for file storage) unless otherwise evaluated and agreed upon.](#choosing-the-right-database-solution)
2. [DynamoDB tables do not have more than 2 GSIs](#use-of-indexes-in-dynamodb)

## High availability
### Multi AZ deployment
Each service must have components (e.g. AWS RDS database) deployed across multiple AWS availability zones to ensure high availability.
 
AWS based components, such as S3 and DynamoDB, which have built-in high availability features are an exception to this rule.

Building a service, which is deployed across multiple availability zones, makes it compliant with HackIT’s disaster recovery plan and requirements. [LINK TO DR PLAN AND REQUIREMENTS]

### Minimum number of availability zones 
Each production service must be deployed to 3 availability zones as per best practices to promote reliability and high availability.

## Read replicas for RDS databases
All Hackney RDS databases should have a read replica database configured for Production environments as per industry best practices and benefits outlined below. 

- A read replica is a secondary database instance that supports asynchronous replication for the data in a primary database. As the name suggests, unless promoted to a primary instance, the read replica supports only read requests.

- Read replicas for RDS instances provide improved performance and availability for any relational database hosted in AWS RDS.

At Hackney, many of the datasets that services are built around do not change as often, resulting in database requests being mainly of read-only nature. This also includes various ETL processes for extracting data for reporting purposes. 

_Improved performance_
Routing read requests to a read replica database instance reduces the load on the primary database instance. As per AWS official documentation, “Read replicas allow you to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads”. Read replicas should be set up for Production databases to ensure reduced risk of database server issues by reducing the read-heavy load. 

_Increased availability_
Read replicas are also part of improving the resilience of our architecture - in case of a failover, a read replica will get promoted to the primary instance, reducing the disruption to the digital services Hackney provides to the minimum.

## Security
### Encryption
All services that store data (permanently or as part of a transfer process such as events streaming) must encrypt the data at rest.

Encrypting data is important as it provides additional security in the event that a hacker obtains the data directly from the data centres infrastructure where it is stored - without the decryption keys, the data would not be accessible. Further to this, for resources encrypted with customer managed keys (CMKs), consuming resources will need to be provided with permissions to decrypt the data using those keys. This limits exposure to data if an isolated service is compromised. 

Encrypting data at rest also makes Hackney compliant with regulatory requirements.

Services that must have encryption at rest enabled:
- AWS S3
- AWS RDS
- AWS SNS
- AWS OpenSearch
- AWS DynamoDB
- AWS Redshift
- AWS MSK

### API endpoints protection via an authentication mechanism
Hackney uses a custom [Lambda authorizer](https://playbook.hackney.gov.uk/API-Playbook/generating_tokens) to provide authentication for API endpoints in AWS API Gateway.

The authorizer utilises the existing [Google auth solution](https://github.com/LBHackney-IT/LBH-Google-auth) to obtain information about the end user and determine if they should be allowed to invoke an API endpoint based on their Google group membership. The authorizer also supports service authentication flow. Full documentation can be found [here](https://playbook.hackney.gov.uk/API-Playbook/generating_tokens)  

To prevent user error, where a developer might accidentally forget to enable an authentication mechanism for an API endpoint, all APIs must include a [serverless safeguard](https://playbook.hackney.gov.uk/API-Playbook/serverless_safegaurd), which checks and stops deployment if an authorizer is not added to a given API Gateway endpoint, as part of their serverless.yml configuration. 

Example PR of changes required to implement the serverless safeguard to make the API authorizer required can be found [here](https://github.com/LBHackney-IT/lbh-base-api/pull/64).

## No publicly accessible resources
### AWS S3
All buckets **should be blocking** public access. The only exception to this rule is if the bucket is used to serve publicly available assets, such as website images.

For buckets used for website hosting, the website should be made available via AWS CloudFront and not directly via the S3 bucket as described in Hackney’s preferred architecture approaches for web services here.[INSERT LINK] 

### AWS Lambda
Lambda functions **must not** have resource policies that allow for public invocation of the function.

Further to this, if a Lambda function interacts with a database hosted in a private subnet, then the Lambda function **must be placed** in the same VPC and private subnet to ensure end-to-end security protection. 

### AWS RDS
All AWS RDS instances **must have** the “publicly accessible” property set to **false**.

In addition, all database instances **must be hosted** in a private subnet to not allow access via the internet and thus reduce the security risk and possible attack scope.

### AWS OpenSearch
All OpenSearch clusters  **must be hosted** in a private subnet to not allow access via the internet and thus reduce the security risk and possible attack scope.

## Monitoring and alerting
### Monitoring
#### APIs availability 
Hackney’s Base API template includes a health check controller that is used to set up AWS CloudWatch Synthetic Canaries for availability monitoring.

The health check is configured to test if the API is up and running, as well as to test and verify if a connection to the datastore that the API interacts with is successful. 

All existing and new APIs **must utilise the health check functionality and configure the canaries** to monitor the availability of the API and underlying datastore **every 5 minutes**. The provisioning of the AWS CloudWatch Canary is automated via Serverless - an example can be found here.

#### Logging
Most of the application logs for services in Hackney are stored in AWS CloudWatch (some exceptions apply for front end services, which utilise other third party tools such as Sentry for logging).

For logs stored in CloudWatch, log groups must have a retention period setup of a minimum of 6 months and a maximum of 8 months as per [CloudWatch logs retention policy](https://docs.google.com/document/d/1nqSI0_wWhEbZ-3c4dF4vJDlmt5mf0doX8togUv9lT7c/edit)

Logging requirements are outlined in the [Event & Log Management Policy and Standard](https://docs.google.com/document/d/1RhkbwSG4t_a6_4gzafvwX3H7P_KJC-MIpcwbAJ-7W5c/edit).

#### CloudWatch dashboards
CloudWatch dashboards provide a visual representation of various logs/alarms being monitored. Their main benefit is that they provide a consolidated view of resources monitored that relate to the same service and can include widgets that extract error logs, saving time for engineers that would otherwise have to search through a number of log groups to identify error logs.

Hackney is in the process of creating multiple terraform modules to speed up the creation of CloudWatch dashboards by grouping widgets related to common AWS resources used by projects.

Available terraform modules for APIs and Listeners dashboards can be found [here](https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/cloudwatch/dashboards).

All production services should make use of available dashboard modules and/or build their custom monitoring dashboard to promote faster incident resolution by providing a visual representation of the state of services and reduce the time taken to identify cause of issues.

#### Request tracing
AWS X-Ray is an AWS managed service that provides the functionality to debug and analyse distributed applications.

[AWS X-Ray official documentation](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)

X-Ray provides an end-to-end request view that includes all components of a request, such as the API Gateway, any other Lambda functions invoked as part of the API code execution and the connection to the underlying database.

The tool is used for identifying the root cause of an issue, discovering performance bottlenecks and seeing real-time data regarding high latency requests.
AWS X-Ray collects logs and makes use of a Service Map to visualise the dependencies and calls to other services made in an API request. 

Services should have X-Ray enabled to improve the monitoring process for services and provide engineers and support analysts to quickly identify which of the components invoked as part of the request is the cause of a given issue.

## Alerting
### API CloudWatch alarms
All APIs must have the following CloudWatch alarms set up to notify members of the team actively maintaining the API of any issues that have occurred.
1. CloudWatch Canary alarm - if a canary detects that an API is unavailable, an alarm must be triggered. 
    - Terraform module can be found [here](https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/cloudwatch/canary-alarm).
2. API 5xx error alarm - if an API encounters one or more 5xx errors, the alarm must be triggered.
T   - Terraform module can be found [here](https://github.com/LBHackney-IT/aws-hackney-common-terraform/blob/master/modules/cloudwatch/api-alarm/main.tf)


## EDA for APIs - monitoring and data loss prevention
Hackney uses a combination of SNS and SQS to implement events-driven architecture. The EDA approach is used to synchronise microservices and their respective data stores.

As part of the setup, a message is published to a single SNS topic and distributed to one or multiple consuming SQS queues. To ensure a message is delivered to all consumers, SNS **must have** ​​delivery status logging set to **enabled**. In the event of a failure to deliver a message, an alarm must be triggered and the relevant engineers, who provide support for the data synchronised via the given SNS topic, must be notified. 

In addition to this, to ensure no data loss occurs for message that fail to be processed by one or more of the listeners, engineers must be notified if a message is inserted in a dead-letter queue (DLQ) and any pending messages in the DQL, that have been reviewed, must be stored in S3 prior to the retention period expiry.

Full details of implementation can be found here. [Insert link]

## Reliability
### Back ups
#### PITR for DynamoDB
Point-in-time-recovery is a DynamoDB feature that allows for data in a table to be restored in the event of an incident.

All production services that store data in DynamoDB must have PITR enabled to ensure that even if data gets accidentally deleted or the table becomes corrupted, the data can be restored.
#### Back up tags
Hackney has set up automated centralised backing for the different types of AWS based data stores used in projects. 

All applicable production AWS services must include the backup tags in the resource configuration to ensure those are backed up. 

The full guide can be found here - [How to HackIT - AWS Backup](https://docs.google.com/document/d/1aUVOvCMOV9frrmcExMh2pZSGQPOdvNFMbFsNqHUQbWQ/edit?usp=sharing).

## Cost optimisation
### Choosing the right database solution
Hackney’s development team has preferred database technologies to use which contribute towards consistency, ensuring future maintenance and providing optimal cost. Those databases should be used for projects on a “yes, unless” basis, where exceptions could be made if a product has requirements that cannot be fulfilled by the suggested database solutions.

Guidance for choosing between SQL and NoSQL databases can be found here - [Data Driven](./data_driven_guidelines.md).

_What technology to use?_
For relational databases, please use **RDS Postgres**.

For NoSQL needs, please use **DynamoDB**.

For files storage, please use **S3**.

### Use of indexes in DynamoDB
In some scenarios, based on the data structure and record retrieval requirements, Global Secondary Indexes (GSIs) might be required for DynamoDB to avoid using ‘Scan’ operations, which are costly and not as performant.

However, GSIs should not be overused as there is a cost associated with creating those - each GSI is effectively a copy of the table with a different sort and range key. 

Each project using DynamoDB **should not use more than two** GSIs in DynamoDB. If retrieval requirements are not satisfied with up to two GSIs, then alternative methods of retrieving a record should be pursued, such as implementing a Search endpoint that utilises AWS OpenSearch.

