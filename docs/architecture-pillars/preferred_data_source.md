---
id: preferred_data_source
title: Preferred types of databases and when to use
---

### Creating a new database

**Before creating a new database**, please consult one of the Senior Engineers and/or confirm at the Data meetup if this type of data is stored elsewhere already.
- Data might already exist and can be reused as per our approaches.
- Existing data entities could potentially be re-iterated and expanded to include additional data properties, instead of creating a new data source making it less restrictive for reusability. 
- Check our [SwaggerHub page](https://app.swaggerhub.com/organizations/Hackney) and [Developer Hub](https://developer-api.hackney.gov.uk/), which lists all of our APIs.

**If a new data store is required:**
- Perform an evaluation if SQL or NoSQL is more suitable for your project’s needs.
    - [Guidance provided further down in this document.](#choosing-the-right-type-of-database-technology)
- Design the API that will interact with the data and present it at the Data Meetup as per our [API specifications assessment process.](https://playbook.hackney.gov.uk/api-specifications/assessment_process/) 
- Use Terraform to provision the new database resource in AWS. 
    - Use one of the [Terraform common repository](https://github.com/LBHackney-IT/aws-hackney-common-terraform) templates (if applicable)


### Choosing the right type of database technology
Assuming knowledge of the main differences between a SQL and a NoSQL database, those are some of the questions which will help us to choose the right type of database for our domain/service when the choice is not obvious:

**1. Do we have a lot of updates and very frequent updates per second?**
- *Yes: PostgreSQL* - A NoSQL DB is probably not the best solution because updates are more expensive than the reads, as we have to read and write a document.
- *No: DynamoDB*.

**2. Is our data highly structured and predictable?**
- *Yes: PostgreSQL* - RDBMS are used when we know in advance the structure of the data and it does not change often (rigid structures) and/or is not in active agile development.
- *No: DynamoDB* - When our data structure changes and there is a need to have flexibility, NoSQL is a good choice, especially for continuously evolving data entities as part of agile development.

**3. Do we need to support a lot of queries on different entity’s properties (*this question excludes search functionalities*)?**
- *Yes: PostgreSQL* -  Queries on properties different  than Id and PartitionKey are anti-pattern for scaling out and so not suitable for NoSQL DB, those queries should be executed occasionally. 
- *No: DynamoDB* 

**4. Do we need low latency/sub-second data access? (this question excludes search functionalities)?**
- *Yes: DynamoDB* - When there is a need for low latency data access, NoSQL tends to be really fast and in the order of ~10ms
- *No: PostgreSQL*

**5. Do we need to be able to scale in the future?**
- *Yes: DynamoDB* - NoSQL databases are horizontally scalable.
- *No: PostgreSQL* - RDBMS are not horizontally scalable, they can be scaled only vertically.

**6. Is high availability important and can eventual consistency be tolerated?**
- *Yes: DynamoDB* - Provides better availability than a SQL database, but we have eventual consistency.
- *No: PostgreSQL* - Provides strong consistency but availability is not as good as a NoSQL database with multiple independent nodes.

If the above information is not sufficient to make a choice, please raise this as a question during one of the weekly Data meetups.

### Preferred database technology

For NoSQL data sources, our preference is to use **DynamoDB** as the database technology.

For SQL, relational databases, our preference is to use **RDS PostgreSQL** as the database technology.

