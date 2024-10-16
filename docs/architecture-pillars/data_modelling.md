---
id: data_modelling
title: Data Modelling Principles
---

###  Context
Hackney is in the process of building multiple data entities as part of building a new housing system. During this process, we have produced multiple data entities and identified arrears to replicate across all entities for consistency. This includes common naming conventions for data properties, criteria for choosing suitable data entities and structure of entities. 

By introducing a common way to model existing and future entities, we can achieve consistency, which will help with future development and maintenance of data quality.

### Vision
- Produce data entities and properties with consistent naming standards **so that** we can introduce consistency in our data entities and store data with a focus on data quality.
- Clear criteria for choosing data sources **so that** services use consistent data sources, which will speed up future development work due to familiarity with technology and provide better ROI and future maintenance.
- Produce set standards for modelling data entities, including the understanding of when and how to use a data subset, compliant with our event-driven architecture approach **so that** performance of services will be improved and data reused will be maintained efficiently. 
- Able to help in understanding the logical representation of the data **so that** both technical and business stakeholders can understand the purpose of a given data entity and the type of data stored.
- Able to avoid any data duplication and denormalisation **so that** data we store can easily be maintained and is promoting data quality and consistency.


### Principles

**1. No complex Relationship**

Data entities created should introduce no complex relationships to ensure easy data maintenance and promote flexibility.

**2. Able to get multiple , heterogenous item types using single request**

Having a data entity, which maintains a subset of data from a different data entity is advised to avoid making multiple API requests to retrieve related data. This can improve performance, reduce development effort and cost associated with running the service. 

**3. Thinking about making the data model works for other areas of Hackney (reusability)**

Always attempt to make the data entity reusable, while modelling it, where appropriate. This includes modelling it in a generic way, by avoiding property names and objects specific to a single service / service area. A good practice is using a “target type” and “target ID”, which can link up a data model to multiple targets (e.g. a person or an organization), instead of using naming conventions such as “person ID”. This applies to entities related to a core entity - e.g. contact details related to a person or organization.

**4. Keep related data together**

By keeping the related data together will enable us to avoid any kind of data duplication which means effective data flows. 

**5. Design and add data needed for the specific use cases. Enrich afterwards when needed**

When data entity design proves complex and involves potential future use cases, which will require long business processes to finalize, it is always best to take an iterative approach and start by modelling the data entity as per any of the known use cases. In this way, a data entity can start being used practically, before evolving as new information and use cases are identified. 

**6. Data design to be domain driven**

Creating and model data entities based on a given domain promotes reusability as it makes the entity suitable for reuse by multiple services, instead of building a single data entity as per the needs of a single service, which can result in data duplication, difficult maintenance and poor data quality over time. 

**7. OK to maintain subsets of data from another domain (if no permissions implications)**

In order to improve performance, reduce the number of API calls to retrieve related data and reduce cost that comes with it, it is advisable to have data entities, which maintain a subset of related data from another entity. This is done where appropriate from a security and permissions point of view. If maintaining a subset of data, the data entity needs to be regularly updated to ensure the subset is always up-to-date following event driven architecture principles.

**8. Clear and consistent naming conventions**
 
Having a clear and consistent naming convention will enable us to have consistency on all data entities created across the board with better column names. This will also help us to have our focus explicitly on the data quality.

**9. Keeping information security and GDPR in mind while designing the data model.**

Always promote security and privacy by design when modelling data entities to ensure that if data is of sensitive nature, it is kept separately, even if it is related. This will ensure easier access control and compliance with GDPR principles. Seeking logical separation with appropriate authorization to access the data in place is advised to reduce risk scope and provide better protection over sensitive data, while still maintaining data relationships for related data to provide an easy way to interact with it.



