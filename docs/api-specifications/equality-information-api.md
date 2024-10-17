---
id: equality-information-api
title: Equality Information API
---

## Purpose
To identify all information to be captured with regards to the equality information domain related to a person.

This will be the core platform API to be used by other areas within the housing domain for the current needs, however with the scope of extending this to other datasets. With no Citizens Index in place due to the cyber-attack, we will be posed with the question of a single view of all resident information and their interactions with the council. Also, it will enable Hackney to handle fairly all residents requests based on this data.

As part of our solution we are proposing for a housing stream to develop the first version of this service as a pilot. This will help to target services more effectively, achieve better outcomes and enhance performance monitoring while reducing cost and risk. This means that we can offer a deeper, more citizen-centric self-service capability, enabling even more service transactions to be carried out online.

Having a single equality information domain related to a person domain will enable us to remove the silos mechanism for resident information collection and help us to present extended and needed resident information. Also, it will help the contact centre and officers in better and informed decision making for managing the ongoing service demands.

## Vision
- A single, centralized data source, holding all equality information data about people, updated by multiple services.
- A reusable microservice API used for managing that data.
- Single data source to help us achieve consistency in data structure related to person’s equality information data and remove duplication of resident data we hold.
- Reducing development efforts
- Flexibility to store ‘extended’ data, related to a person, that might be sensitive and only accessible by a single service area
- Remove the need for the difficult task of data matching in the future (where multiple records of the same person across systems need to be matched) as all data will be saved in the same location with the same ID across person and equality information.

## Our users and their needs

** As a service user I would like to see the resident equalities information so that: **
- I can make an informed decision with regards to the resident query I am dealing with.
- I have the extended information about the council tenant.
- I can perform my tasks - creating tenure management processes, make informed decisions about tenures and more

** As a service user, I would like: **
- View and update existing equalities records of people
- An easy way to find out information about a person so that I don’t have to search multiple systems in order to find details about the same person recorded by separate systems

** As a consumer of this API I would like to see: **
- The name of the person so that this data is available for any housing service (at present) that requires it.
- The nationality of the person so that this data is available to any service that requires it.
- The gender of the person so that this data is available for any service that requires it.
- The ethnic origin of the person, so that I have this data available for any service that requires it.
- The title of the person, so that I have this data available for any service that requires it.
- The DOB of the person so that I have this data available for any service that requires it.

** As a developer, I want to: **
- build and reuse a single Equalities Information API microservice so that development efforts can be focused on other requirements
- Ensure data updated, retrieved and inserted is consistent across services and reliable
- Have an easy way to retrieve any equalities information data related to a person so that I don’t need to make additional calls to find references for related systems

** As an application  support analyst **
-  I need to understand the queries being used by the API so that I can deal with support requests accordingly and resolve the potential issues in the underlying data,

** As a data analyst**
-  I need to connect to the API via Qlik so that data is easy to interpret and available for further reporting purpose.and analysis.

## Workshop outcome
### Workshop 1 & 2

**Summary**
Our first workshop has been around getting a decision to remove the equalities information fields that we had in the person's API and data model, based on a recommendation from Information Management team.

In the second workshop, we discussed the necessity of the equalities information microservice and the data that should be stored in managed by its API.

### Endpoints to be created for the equality information microservice

1. GET **/equality-information/{equality-information-id}**
2. GET **/equality-information/{target-id}**
3. PATCH **/equality-information/{equality-information-id}**
4. POST **/equality-information/{equality-information-id}**

**Example payload**
```
{
    "id": "45b919fa-22b4-11ec-9621-0242ac130002",
    "targetId": "49b092d6-22b4-11ec-9621-0242ac130002",
    "gender": {
      "genderValue": "m",
      "genderValueIfOther": "",
      "genderDifferentToBirthSex": True
    },
    "nationality": "british",
    "ethnicity": {
      "ethnicGroupValue": "white",
      "ethnicGroupValueIfOther": ""
    },
    "religionOrBelief": {
      "religionOrBeliefValue": "christian",
      "religionOrBeliefValueIfOther": ""
    },
    "sexualOrientation": {
      "sexualOrientationValue": "heterosexual",
      "sexualOrientationValueIfOther": ""
    },
    "marriageOrCivilPartnership": {
      "married": True,
      "civilPartnership": True
    },
    "pregnancyOrMaternity": [
      {
        "pregnancyDate": "2017-01-04", -- date entered by the user
        "pregnancyValidUntil": "2019-10-04" -- datePregnancy + 2 years and 9 months
      }
    ],
    "nationalInsuranceNumber": "NI111111A",
    "languages": [
        {
            "language": "french",
            "isPrimary": false
        },
        {
            "language": "english",
            "isPrimary": true
        }
    ],
    "caringResponsibilities": {
      "provideUnpaidCare": True,
      "hoursSpentProvidingUnpaidCare": "fiveToNineHours"
    },
    "disabled": True,
    "communicationRequirements": [
        "signLanguage",
        "interpreterNeeded",
        "largePrint"
    ],
    "economicSituation": {
      "economicSituationValue": "employedFullTime",
      "economicSituationValueIfOther": ""
    },
    "homeSituation": {
      "homeSituationValue": "temporaryAccommodationPlacedByHackneyCouncil",
      "homeSituationValueIfOther": ""
    },
    "armedForces": "aServingMemberOfTheArmedForces"
}
```

The following fields will store codes that come from the reference data:
* genderValue
* nationality
* ethnicGroupValue
* religionOrBeliefValue
* sexualOrientationValue
* language
* hoursSpentProvidingUnpaidCare
* economicSituation
* homeSituation
* armedForces
