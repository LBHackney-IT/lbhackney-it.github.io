---
id: contracts_api
title: Contracts API
---
## Purpose

The temporary housing platform requires an agreement in place which provides a model representing the details to enbable the use of the property by Hackney contractually. 

As part of our solution, we are proposing to develop the Contracts API. This API will be designed to keep the asset and people models clean and provide a link between these objects as well as holding all the contractual information between the parties.

## Our users and their needs

** As a service user I need contract information so that: **

- I can identify the responsible people at the property to contact.
- I can identify the contract details such as rates, contract start and end dates.

## Workshops

This API was discussed at TDA 25/05/22 off the back of the need to move data off the asset data model.
- https://docs.google.com/document/d/1MYJfzbop_yJhVGlSihhDmAhga6yrbxgCsZWujkYs8AA/edit?usp=sharing

## Endpoints to be created

### Get Contracts:

**Endpoint Status**: PROPOSED

**Purpose:**  
Gets one or more Contracts from the Contract table.  Requests can be made by specifying a ref path parameter or searching for Tenures based on a series of parameters.

**Endpoint URL's:**
- /contracts

**Request Path Parameters:**
- targetId - the GUUID id of the target

**Response:**
- 200 OK
```
{
	"results": [
		{
			"id": "ff09ac20-e97e-468d-98b2-a972ba724ed2",
			"targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
			"targetType": "asset",
			"contractType": "contract type",
			"startDate": "2022-10-11T20:28:41.2041531Z",
			"endDate": "2023-10-11T20:28:41.2041531Z",
			"renewalDate": "2023-10-11T20:28:41.2041531Z",
			"approvalDate": "2023-10-11T20:28:41.2041531Z",
			"relatedPeople": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "person",
					"subType": "Landlord",
					"name": "John Smith",
					"email": "john.smith@email.com",
					"isResponsible": true,
					"description": "Landlord of the building",
					"phone": null
					"relatedId": "00000000-0000-0000-0000-000000000000",
				}
			],
			"charges": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "Rent",
					"subType": null,
					"frequency": "Monthly",
					"amount": 511.3
				}
			],
			"versionNumber": 0,
			"fundingSource": null,
			"costCentre": null,
			"lhaArea": null,
			"lhaRate": null,
			"isActive": true,
			"isVATRegistered": false,
			"stage": 1
		},
		{
			"id": "91e9a95c-e9a7-4002-8c9e-d07f0cb27aff",
			"targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
			"targetType": "asset",
			"contractType": "contract type",
			"startDate": "2022-10-11T20:28:41.2041531Z",
			"endDate": "2023-10-11T20:28:41.2041531Z",
			"renewalDate": "2023-10-11T20:28:41.2041531Z",
			"relatedPeople": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "person",
					"subType": "Landlord",
					"name": "John Smith",
					"email": "john.smith@email.com",
					"isResponsible": true,
					"description": "Landlord of the building",
					"phone": null
				}
			],
			"charges": [
				{
					"id": "8c8cea42-4f48-4bbe-8b1b-881526f8410b",
					"type": null,
					"subType": null,
					"frequency": "Daily",
					"amount": 34
				},
				{
					"id": "446cfa93-a688-4545-be6d-806ef0640dd6",
					"type": null,
					"subType": null,
					"frequency": "Weekly",
					"amount": 34
				},
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "Rent",
					"subType": null,
					"frequency": "Monthly",
					"amount": 511.35
				}
			],
			"versionNumber": 2,
			"fundingSource": null,
			"costCentre": null,
			"lhaArea": null,
			"lhaRate": null
		},
		{
			"id": "c9f62a09-32e6-468b-878f-d36183926113",
			"targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
			"targetType": "asset",
			"contractType": "contract type",
			"startDate": "2022-10-11T20:28:41.2041531Z",
			"endDate": "2023-10-11T20:28:41.2041531Z",
			"renewalDate": "2023-10-11T20:28:41.2041531Z",
			"relatedPeople": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "person",
					"subType": "Landlord",
					"name": "John Smith",
					"email": "john.smith@email.com",
					"isResponsible": true,
					"description": "Landlord of the building",
					"phone": null
				}
			],
			"charges": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "Rent",
					"subType": null,
					"frequency": "Monthly",
					"amount": 511.3
				}
			],
			"versionNumber": 0,
			"fundingSource": null,
			"costCentre": null,
			"lhaArea": null,
			"lhaRate": null
		},
		{
			"id": "2cd25622-99c5-493c-a41d-7688a3d4ad48",
			"targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
			"targetType": "asset",
			"contractType": "some type",
			"startDate": "2022-11-17T00:00:00Z",
			"endDate": "2022-11-28T00:00:00Z",
			"renewalDate": "2022-11-20T00:00:00Z",
			"relatedPeople": [],
			"charges": [],
			"versionNumber": 0,
			"fundingSource": null,
			"costCentre": null,
			"lhaArea": null,
			"lhaRate": null
		},
		{
			"id": "75985c70-c7fd-49d2-9e60-61c321abd8e2",
			"targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
			"targetType": "asset",
			"contractType": "contract type",
			"startDate": "2022-10-11T20:28:41.2041531Z",
			"endDate": "2023-10-11T20:28:41.2041531Z",
			"renewalDate": "2023-10-11T20:28:41.2041531Z",
			"relatedPeople": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "person",
					"subType": "Landlord",
					"name": "Bob Smith",
					"email": "john.smith@email.com",
					"isResponsible": true,
					"description": "Landlord of the building",
					"phone": null
				}
			],
			"charges": [
				{
					"id": "00000000-0000-0000-0000-000000000000",
					"type": "Rent",
					"subType": null,
					"frequency": "Monthly",
					"amount": 1.3
				}
			],
			"versionNumber": 0,
			"fundingSource": null,
			"costCentre": null,
			"lhaArea": null,
			"lhaRate": null
		}
	],
	"paginationDetails": {
		"nextToken": null
	}
}
```
- /contracts/{contractId}
 
 Get individual contract

**Response:**
- 200 OK

 ```json
 {
	"id": "c812a6c3-48d0-4df8-b7bb-ab0f91919b0a",
	"targetId": "017aba03-94f0-434f-8af5-6e9b9ce489b3",
	"targetType": "asset",
	"contractType": "SLA",
	"startDate": "2000-06-05T00:00:00Z",
	"endDate": "2022-11-17T00:00:00Z",
	"renewalDate": "2022-11-01T00:00:00Z",
	"approvalDate": "2023-10-11T20:28:41.2041531Z",
	"relatedPeople": [],
	"charges": [
		{
			"id": "95d2a92c-d646-4aab-8cf2-06d1671cf9be",
			"type": "rent",
			"subType": "ta-rent",
			"frequency": "Daily",
			"amount": 22
		},
		{
			"id": "7d2e85b3-4ec0-436e-8035-4d51975db8e7",
			"type": null,
			"subType": null,
			"frequency": "Weekly",
			"amount": 501
		},
		{
			"id": "7928de91-139e-46ab-adcb-855640b9ec3d",
			"type": null,
			"subType": null,
			"frequency": "Monthly",
			"amount": 105
		}
	],
	"versionNumber": 31,
	"fundingSource": null,
	"costCentre": null,
	"lhaArea": null,
	"lhaRate": null,
	"isActive": true,
	"isVATRegistered": false,
	"stage": 2
}
 ```

### POST Contracts:

**Endpoint Status**: PROPOSED

**Purpose:**
Create a new Contract

**Endpoint URL's:**
/contracts

**Request object:**
```
{
  "targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
  "targetType": "asset",
  "contractType": "contract type",
  "startDate": "2022-10-11T20:28:41.2041531Z",
  "endDate": "2023-10-11T20:28:41.2041531Z",
  "renewalDate": "2023-10-11T20:28:41.2041531Z",
  "approvalDate": "2023-10-11T20:28:41.2041531Z",
  "relatedPeople": [
    {
      "type": "person",
      "subType": "Landlord",
      "name": "Bob Smith",
      "email": "john.smith@email.com",
      "isResponsible": true,
      "description": "Landlord of the building",
	  "relatedId": "00000000-0000-0000-0000-000000000000"
    }
  ],
  "charges": [
    {
      "type": "Rent",
      "frequency": "Monthly",
      "amount": 1.3
    }
  ],
  "versionNumber": null,
  "fundingSource": null,
  "costCentre": null,
  "lhaArea": null,
  "lhaRate": null,
  "isActive": true,
  "isVATRegistered": false,
  "stage": null
}
```
**Response:**
- 201 Created
```
{
	"id": "75985c70-c7fd-49d2-9e60-61c321abd8e2",
	"targetId": "72847475-4ef3-4d24-9fd4-6820aeffef0c",
	"targetType": "asset",
	"contractType": "contract type",
	"startDate": "2022-10-11T20:28:41.2041531Z",
	"endDate": "2023-10-11T20:28:41.2041531Z",
	"renewalDate": "2023-10-11T20:28:41.2041531Z",
    "approvalDate": "2023-10-11T20:28:41.2041531Z",
	"relatedPeople": [
		{
			"id": "00000000-0000-0000-0000-000000000000",
			"type": "person",
			"subType": "Landlord",
			"name": "Bob Smith",
			"email": "john.smith@email.com",
			"isResponsible": true,
			"description": "Landlord of the building",
			"phone": null,
			"relatedId": "00000000-0000-0000-0000-000000000000"
		}
	],
	"charges": [
		{
			"id": "00000000-0000-0000-0000-000000000000",
			"type": "Rent",
			"subType": null,
			"frequency": "Monthly",
			"amount": 1.3
		}
	],
	"versionNumber": 0,
	"fundingSource": null,
	"costCentre": null,
	"lhaArea": null,
	"lhaRate": null,
    "isActive": true,
    "isVATRegistered": false,
    "stage": null
}
```

### PATCH Contracts:

**Endpoint Status**: PROPOSED

**Purpose:**
Updates a Contract

**Endpoint URL's:**
/contracts/{contractId}

**Request object:**
```
{
  "contractType": "contract type"
  "startDate": "19-03-2020",
  "endDate": "29-05-2023",
  "renewalDate": "29-05-2023",
  "approvalDate": "2023-10-11T20:28:41.2041531Z",
  "relatedPeople": [
    {
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "type": "person",
      "subType": "Landlord",
      "name": "John Smith",
      "email": "john.smith@email.com",
      "isResponsible": true,
      "description": "Landlord of the building",
	  "relatedId": "00000000-0000-0000-0000-000000000000"
    }
  ],
  "charges": [
    {
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "type": "Rent",
      "subType": "Cleaning fee",
      "frequency": "Monthly",
      "amount": 50.3
    }
  ],
  "fundingSource": null,
  "costCentre": null,
  "lhaArea": null,
  "lhaRate": null,
  "isActive": true,
  "isVATRegistered": true,
  "stage": 2
}
```

### PUT Contracts:

**Endpoint Status**: NOT YET PROPOSED

**Purpose:**
Updates a new Contract

**Endpoint URL's:**
- /contracts/{contractId}

### DELETE Contracts:

**Endpoint Status**: NOT YET PROPOSED

**Purpose:**
Removes a new Contract

**Endpoint URL's:**
- /contracts/{contractId}