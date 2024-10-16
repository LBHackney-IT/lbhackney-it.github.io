---
id: data_driven
title: HackIT Data Driven Guidelines
---

## Access to data
To comply with security best practices, Hackney’s preference is to follow the “least-privilege” access model.


### Per environment
**Development**
Should only contain dummy/test data. 
Access to it by all developers for debugging purposes.

**Staging**
Should only contain dummy/test data or obfuscated real data. 
Access to it by all developers for debugging purposes.

**Production**
Should contain real data
Limited direct access to the database - only few selected people for support purposes
Auditing enabled for access and queries against the data

### How will the data be accessed?
All access to data, aside from limited support purposes, should happen via APIs. 

For all consumers, all data interactions (CRUD) should happen via an existing API endpoint. 

- All of our APIs need to be protected via the Lambda authorizer built by Hackney.
    - More can be found in our Playbook [here](https://playbook.hackney.gov.uk/API-Playbook/lambda_authoriser).
- Requesting access to our APIs will be moved to the Developer Hub (TBC)
- As many of our APIs are reusable, a Data contract will need to be digitally signed to confirm purposes of accessing the data (TBC)

Exceptions to the above
- Any legacy applications that do not support API consumption (if this is your use case, please discuss this with Rashmi Shetty as the PO of our reusable components).

### Reporting data

As Hackney is moving towards a “no database direct access” way of working, this affects the way reporting tools will access data.
For reporting purposes, any BI tool needs to access the data via an API (*as an interim solution*). 
- A Specific Reporting API, providing a full list of records per entity, is available for this purpose. You can find more about how to use and access it here (TBC).
- Any new requests for additional endpoints, to access entities, which are not already covered by the Reporting API, should be sent to [Rashmi Shetty](rashmi.shetty@hackney.gov.uk)

### Future goals - reporting data
Currently, there is an ongoing data platform project that aims to build a data lake and an easier and more consistent way to digest data for reporting and analytics purposes.

The proposed Reporting APIs approach is an interim solution until the data lake is ready for use.

Future goals include:
- Leverage new Events Driven Architecture (EDA) approach to capture data updates
- Update data in Data lakes using the events published as part of our EDA approach
- Reporting tools connect to data lakes, instead of to APIs accessing operational databases.

### How to design data domain driven APIs

At Hackney, our preference is to build Platform APis as microservices. We also have the concept of Service API, used for very specific use cases. 

[Platform vs Service API](https://playbook.hackney.gov.uk/API-Playbook/platform_api_vs_service_api)

- All of our Platform APIs are micro services - they are independent and serve a single purpose, which is interacting with data from a single domain. 
- When designing Platform APIs, you first need to know the data domain you are building it for as this drives the design of your APIs.
- Platform APIs **should not** be built with a single project’s use case in mind.
- Platform APIs **should be** built with reusability with mind
    - This means always returning all available fields for a certain domain.
        - It is the responsibility of the consuming service to only consume and use the data they need!
    - Data should not be manipulated to fit a specific requirement.

### Choosing the right data source
- For NoSQL data sources, our preference is to use DynamoDB as the engine.
- For SQL, relational databases, our preference is to use PostgreSQL as the database engine.

As we have a hybrid approach, please refer to the criteria below for choosing the right database engine:

Assuming we know the main differences  between a SQL and a NoSQL database, those are some of the questions which will help us to choose the right type of database for our domain/service when the choice is not obvious:

**1. Do we have  a lot of updates and very frequent updates per second?**
- Yes: PostgreSQL - A NoSQL DB is probably not the best solution because updates are more expensive than the reads, as we have to read and write a document.
- No: DynamoDB.
**2. Do we need to support a lot of queries on different entity’s properties (this question excludes search functionalities)?**
- Yes: PostgreSQL -  Queries on properties different  than Id and PartitionKey are anti-pattern for scaling out and so not suitable for NoSQL DB, those queries should be executed occasionally. 
- No: DynamoDB 
**3. Do we need low latency/sub-second data access? (this question excludes search functionalities)?**
- Yes: DynamoDB - When there is a need for low latency data access, NoSQL tends to be really fast and in the order of ~10ms
- No: PostgreSQL
**4. Is our data highly structured and predictable?**
- Yes: PostgreSQL - RDBMS are used when we now in advance the structure of the data and it does not change often (rigid structures)
- No: DynamoDB - When our data structure changes and there is a need to have flexibility, NoSQL are a good choice
**5. Do we need to be able to scale in the future?**
- Yes: DynamoDB - NoSQL databases are horizontally scalable.
- No: PostgreSQL - RDBMS are not horizontally scalable, they can be scaled only vertically.

### Where should data live?
We use AWS as our cloud hosting provider and operate a multi-account strategy. 

Each AWS account is either service area specific (e.g. **Housing-Production**) or is service specific, for larger services. 

- Data should live within the AWS account, specifying the purpose of the data and the domain the data is related to.
    - For example, housing specific data should live within the Housing AWS accounts.
- This is so we can better manage the access to our data. Only people working on a project should have access to the data sources, holding the data related to that project (Production data should always have limited access). Everyone else should only access the data via APIs. 
