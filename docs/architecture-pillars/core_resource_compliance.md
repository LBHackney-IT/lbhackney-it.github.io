---
id: core_resource_compliance
title: Core AWS resources compliance checks 
---

### Context
At Hackney, we follow an infrastructure-as-code (IaC) approach and use Terraform to provision most of our AWS cloud resources. For our APIs, which are Lambda functions exposed via AWS API Gateway, we use the Serverless framework as it significantly speeds up the delivery and resource creation.  For more information please refer to [our playbook](https://playbook.hackney.gov.uk/API-Playbook/).

From a Development perspective, each project manages its own Terraform files(or Serverless configuration) to provision resources for our microservices and frontend applications. Terraform is then applied automatically as part of the CI/CD pipeline workflow during deployment. 

As Terraform files live in the same repository as the service, for which they are used to create cloud resources, we use our Pull Request process to identify any potential issues with changes to AWS resources or the configuration for adding new ones. Despite having a very thorough pull request process, there is still room for error if something gets missed during a review. 

To ensure we have security assurance in every step, we started using terraform-compliance -  a security and compliance test framework, and Serverless Safeguards to assess if changes are compliant with a predefined set of compliance rules and terminate deployment in case of a failure. 

This document aims to outline the core compliance checks that **must** be performed for the various AWS resources provisioned as part of the Software Delivery Lifecycle **only** and not the wider platform. 


## Resources

### EC2
Terraform compliance checks:
1. EC2 instances must be placed in a private subnet.
2. Default tags are present. [INSERT LINK TO DEFAULT TAGS]

### API Gateway
Serverless safeguards policies:
1. Require Lambda authorizer for all API endpoints exposed by API Gateway with the exception of Swagger endpoints. 
    -  Example implementation [here](https://github.com/LBHackney-IT/asset-information-api/pull/51/files).
2. Ensure cors is enabled.
3. WAF is enabled.

### DynamoDB
1. PITR is enabled.
2. Back up tags are present.
3. Maximum number of GSIs is two.
4. Encryption is enabled.
5. Default tags are present. [INSERT LINK TO DEFAULT TAGS]

### SNS
1. Encryption is enabled
2. Topic is FIFO
3. Default tags are present. [INSERT LINK TO DEFAULT TAGS]

### OpenSearch (ElasticSearch)
1. Deployed in a VPC
2. Deployed to a private subnet.
3. Clusters are encrypted at rest.
4. Minimum instance size is 2.
5. Instance type is small or medium.
6. Default tags are present. [INSERT LINK TO DEFAULT TAGS]

### SQS
1. Encryption is enabled.
2. Dead letter queue is set up.
3. Queue is FIFO.
4. Default tags are present. [INSERT LINK TO DEFAULT TAGS]

### RDS
1. Database is not publicly accessible.
2. Deployed to a private subnet.
3. Database engine is PostgreSQL
4. Database size is t3.micro, t3.small, t3.medium or t3.large
5. Database has multi-az deployment enabled (for production)
6. Encryption is enabled.
7. Default tags are present. [INSERT LINK TO DEFAULT TAGS]

### CloudFront
1. Distribution has WAF enabled.
2. Production uses Hackney’s certificate.
3. Price class is “PriceClass_100”.
4. Default tags are present. [INSERT LINK TO DEFAULT TAGS]
5. The following headers are whitelisted:
    - Origin
    - Access-Control-Request-Headers
    - Access-Control-Request-Method
6. Query strings are forwarded.


