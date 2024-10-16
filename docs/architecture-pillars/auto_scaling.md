---
id: auto_scaling
title: Auto-scaling for AWS resources used in Software Engineering
---

### Context

To achieve cost optimization, all AWS services provisioned as part of the software delivery lifecycle, where capacity is pre-configured at the point of provisioning, must have an associated auto-scaling policy to ensure that we are only paying for what we use. 

Cloud resources auto-scaling is the process of automatically scaling up or down based on traffic patterns and usage.

Enabling auto-scaling will reduce the possibility of over-provisioning due to incorrect predictions of what capacity will be required.  

This document outlines the common AWS resources used as part of delivering software that will require an auto-scaling policy to be applied. 

**Note:** EC2 has been excluded from the list as we strive to use serverless technologies when delivering digital services. EC2 is only used for our bastion hosts, which are already provisioned with minimal capacity.

### RDS

AWS RDS currently supports only [storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) as an automated way to scale database instances. 

Auto-scaling applies to an RDS database instance when the following factors are true: 
- Free available space is less than 10 percent of the allocated storage.
- The low-storage condition lasts at least five minutes.
- At least six hours have passed since the last storage modification, or storage optimization has completed on the instance, whichever is longer.

To provide cost optimization, RDS database instances should be provisioned with a smaller allocated storage space and an auto-scaling option enabled. The provisioned storage capacity **should not** be based on predictions for future service needs - it should instead reflect the foreseeable future data storage needs and scale up automatically only if required.


**Considerations:**
- Always set a reasonable maximum and minimum storage capacity to be used for auto-scaling to avoid scenarios where data storage needs have grown exponentially for a reason different to genuine service needs. 
    - Example for such scenario is large logs stored in Postgres due to failing DMS task resulting in database storage used increasing continuously. In such situations, alarms should be in place to prompt investigation.
- If you are not sure how much storage space will be required for a database, please start with the default amount suggested by AWS for the given database instance type and enable auto-scaling.

### DynamoDB
You can use the [AWS Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html) service to set up automated scaling policies for DynamoDB.

DynamoDB autoscaling can be applied to both -  a table and a Global Secondary Index (GSI).

At Hackney, DynamoDB tables uses provisioned capacity mode, which means that we are billed based on read and write capacity units that a table is provisioned with. 

To achieve cost optimization, all DynamoDB tables must have a scaling policy associated that will increase or decrease the RCUs and WCUs based on the traffic patterns.

A guide to enabling auto-scaling for DynamoDB tables using Terraform can be found [here](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appautoscaling_policy).

### AWS Lambda
Hackney does not use provisioned concurrency for the majority of the Lambda functions used. This means that Lambda handles concurrency and scaling automatically, as described in the [official documentation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html). For this reason, there is no need to apply auto-scaling as this is already handled by default.

For any Lambda functions using provisioned concurrency, an auto-scaling policy must be applied, AWS Application Auto Scaling service can be used to automate the scaling process as described [here](https://docs.aws.amazon.com/autoscaling/application/userguide/services-that-can-integrate-lambda.html).




