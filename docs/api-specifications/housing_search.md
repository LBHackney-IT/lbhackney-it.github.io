---
id: housing_search
title: Housing Search API
---
## Purpose

To define how a new proposed search service will work. The microservice will be reusable across different housing services and will provide searching functionality for both people and properties. The service will make use of ElasticSearch as a search engine (for performance benefits and to support free-text and fuzzy search) and will aggregate assets and people data for ease of search purposes.

ElasticSearch’s data store will be updated at real time - this will be implemented using event driven architecture, where each microservice serving a specific data domain will create an event each time new data is added or updated.

ElasticSearch will be updated by a Lambda function, holding business logic, that has subscribed to events and thus will have data kept up-to-date in real time.

## Vision

- A reliable and efficient search service, that allows for free-text and fuzzy search for people and properties.
- A microservice that does not impact user experience with poor performance related to searching data from multiple data domains.

## User Needs

**As a service:**
- I want the ability to view the details of the results returned in a search
- So that I can easily look through the different results and make the correct selection and proceed to the profile that I was looking for

**As a TA officer:**
- I want the ability to filter the details of the results returned in an asset search
- So that I can easily look through the different results and find accommodation matching my requirements

### Searching 

Searching is achieved by providing `searchText` as a string parameter.

**Search by :**
1. Person - First name, Middle name, Last name
2. Asset - Address line 1, Postcode, Asset type
3. Tenure - Payment Reference, FullAddress of TenuredAsset , Household Members FullName  
4. Transactions - Sender name, Transaction Type, Payment Reference, Bank Account Number, Transaction Date, Transaction Amount
5. Staff - first Name, last name, email

### Filtering

Filter parameters will be added to
`/search/assets/all` and searchText will be optional giving the ability to filter of specific fields without the need to search by text. 
We propose to enforce a rule of at least one parameter to mitigate against the API being abused and returning every asset.

**Filter by :** 
1. Asset - assetStatus, numberOfBedrooms, numberOfBedSpaces, numberOfCots, groundFloor, privateBathroom, privateKitchen, stepFree, isTemporaryAccomodation, parentAssetId

### Considerations
#### Transactions
* The search must be flexible enough to allow for the successful finding of information without assuming the form of the query. An officer may know the PRN, or the address, or just the sender name.
* A result should act as a navigation tool to deeper more meaningful information.
* Search will most likely be the first thing a user does in order to find information.
* Search should be available for any data set (property, transaction, document).
* Bank account search should be available for transactions so that if this is the form of the query (a resident has phoned in and asked why their payment has gone missing) then the officer can find the payment in either 'all transactions' or 'suspense account' sections. The bank account data coming from Civica / Cedar may already be redacted. In which case, the last 3-4 digits of the account number should be searchable.
* The name linked to the transaction is the name linked to the account of the sender. This could be a person or a company.

## API Specification

https://app.swaggerhub.com/apis/Hackney/housingSearchApi/1.0.0

## Architecture diagram 

https://drive.google.com/file/d/1UYnYkGrOn83KXZgoCcVwb8tVg5MNehRz/view

The search indexes will be kept in sync via events. In particular there will be a listener per each search index which will subscribe to the relevant publishers.
Benefits of having an event driven architecture

- Scalability :
- Flexible approach:
- Fault Tolerance :
- Durability:
- Event flow tracking

## Benefits of using ElasticSearch and indexes

Allows to search on fields which do not exist only on platform APIs. It allows to do aggregate searches without dependencies which means it is adaptable for any services wishes to use. Major advantage is that it provides huge improvements on performance of these search queries.These are other benefits offered by Elastic search are as follows

1. Easy Filtering
2. Advanced searches
3. Better performance for read queries.
4. Drives distributed architecture
5. Schema free
6. High Scalable

**Dependencies :**

**By person**
- Person Information
- Tenure
- Asset Information
- Transactions
- Alerts

**By Asset**
- Asset Information
- Tenure
- Alert

**By Tenure**
- Tenure
- Person Information
- Alert

**By Staff**
- Person Information
- Contact Details
- Patches & Areas

**By Processes**
- Processes Information
- Tenure
- Asset
- Person

### Workshop 26/04/2022

We discussed the need for filter parameters without searchText so that we can refine lists based purely on the filter params.
It was decided to use the `/search/assets/all` to produce this outcome.
Reference doc can be found [here](https://docs.google.com/document/d/1ZMa2dKqV5XfgFiyA0RL9hCqy1QLoo53VnOJPpGxQA_s/edit#heading=h.dx6cih64yr6k)