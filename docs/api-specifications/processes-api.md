---
id: processes-api
title: Processes API
---


## Context
As part of Manage My Home, there is a need to build a workflow engine that will allow housing officers and other members of staff to initiate new workflows, upload documents, assign them and capture form information. In addition, where possible, various aspects of the workflow should be automated in order to reduce the dependency on housing officers' time to carry out repeatable steps.

## Vision
- Store the state of a workflow process in order to be able to resume it at another time
- Store the allowed next steps in the process
- Enable assignment of a process between patches
- Enable capture of form data
- Allow documents to be attached to a process
- Enable developers to quickly create and configure new and existing processes

## User Needs
As a service user, I would like to be able to:
- Initiate a workflow process so that I can keep track of progress
- Assign a process to a specific patch so that I can enable assingment of a process between patches
- Capture form data related to the process so that I can view data related to the process
- Upload documents to the process so that I can add additional documents related to the process

As a consumer of this API, I would like to:
- Initialise a new process so that processes can be stored in one place
- Get the status of an existing process so that I can keep track of progress
- Update an existing process so that the process has the most update details
- Progress an existing process so that the process has the most update-to-date progress

As a developer, I would like to:
- Easily manage the configuration of processes so that development time is reduced
- Identify and re-use as much common code as possible across the processes so that consistenct and reusablily are achieved
- Include sufficient levels of test coverage over the processes so that Test Driven standards are met


#### API Endpoints with Payload:

###### GET Endpoint:

```json

GET /api/v1/process/process-name/{id}/

{
  "process": {
    "id": "dc3eb7a0-73b2-4ad4-a267-622510fa06cb",
    "targetId": "f83540f9-034a-7bfe-9348-7094dd0e0f46",
    "targetType": "tenure",
    "relatedEntities": [
    {
     "id":"6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
     "type": "tenure",
     "subType":"tenant",
     "description": "This is a description"
    }
    ],
    "processName": "Change of Name",
    "currentState": {
      "stateName": "DocumentsAttached",
      "permittedTriggers": [
        "SubmitApplication"
      ],
      "assignment": {
        "type": "patch",
        "value": "string"
      },
      "processData": {
        "formData": "{}",
        "documents": [
          "00578577-91c6-4244-a72c-c757fefe8d87",
          "c5f358f8-a57f-4b0a-bc49-c8ccc4e955d5",
          "bb6b92c9-537b-4fae-95a8-c17d9a190aa8",
          "7d791694-e72d-44d5-aeee-9d2c400abdd5",
          "5658204f-f8f4-44c4-ad11-3345d295ac33"
        ]
      },
      "createdAt": "2021-09-24T09:30:00Z",
      "updatedAt": "2021-09-24T09:30:00Z"
    },
    "previousStates": [
      {
        "stateName": "ApplicationStarted",
        "permittedTriggers": [
          "AttachDocuments"
        ],
        "assignment": {
          "type": "googleGroup",
          "value": "housingofficers"
        },
        "processData": {
          "formData": {
            "title": "Mr",
            "firstName": "Patrick",
            "middleName": "",
            "surname": "Williams"
          },
          "documents": null
        },
        "createdAt": "2021-09-24T09:30:00Z",
        "updatedAt": "2021-09-24T09:30:00Z"
      },
      {
        "stateName": "DocumentsAttached",
        "permittedTriggers": [
          "SubmitApplication"
        ],
        "assignment": {
          "type": "email",
          "value": "estatesafety@hackney.gov.uk"
        },
        "processData": {
          "formData": "{}",
          "documents": [
            "00578577-91c6-4244-a72c-c757fefe8d87",
            "c5f358f8-a57f-4b0a-bc49-c8ccc4e955d5",
            "bb6b92c9-537b-4fae-95a8-c17d9a190aa8",
            "7d791694-e72d-44d5-aeee-9d2c400abdd5",
            "5658204f-f8f4-44c4-ad11-3345d295ac33"
          ]
        },
        "createdAt": "2021-09-24T09:30:00Z",
        "updatedAt": "2021-09-24T09:30:00Z"
      }
    ]
  }
}
```

###### POST Endpoint:

```json
POST /api/v1/process/{process-name}
{
  "targetId": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
  "targetType": "tenure",
  "relatedEntities": [
  {
     "id":"6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
     "type": "tenure",
     "subType":"tenant",
     "description": "This is a description"
  }
  ],
  "formData": {
    "field1": true,
    "field2": "string",
    "field3": 1,
    "field4": "string",
    "field5": false
  },
  "documents": [
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"
  ]
}
```

** Swagger Hub Hackney: ** https://app.swaggerhub.com/apis/Hackney/ProcessesApi/2.0.0

```json
POST /api/v2/process/{process-name}
{
  "targetId": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
  "targetType": "tenure",
  "relatedEntities": [
  {
     "id":"6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
     "type": "tenure",
     "subType":"tenant",
     "description": "This is a description"
  }
  ],
  "formData": {
    "field1": true,
    "field2": "string",
    "field3": 1,
    "field4": "string",
    "field5": false
  },
  "documents": [
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"
  ],
  "patchAssignment": {
    "patchId": "fb0007b8-ee9e-4845-9fc2-d2b662ff4f84",
    "patchName": "CP7",
    "responsibleEntityId": "00578577-91c6-4244-a72c-c757fefe8d87",
    "responsibileName": "Stephen Lewis"
  }
}
```

###### PATCH Endpoint:

```json
PATCH /api/v1/process/{process-name}/{id}/{process-trigger}

{
  "formData": {
    "field1": true,
    "field2": "string",
    "field3": 1,
    "field4": "string",
    "field5": false
  },
  "documents": [
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"
  ]
}

```

###### PATCH by id Endpoint:

```json
PATCH /api/v1/process/{process-name}/{id}/

{
  "formData": {
    "field1": true,
    "field2": "string",
    "field3": 1,
    "field4": "string",
    "field5": false
  },
  "documents": [
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",
    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"
  ],
  "assignment": {
    "type": "email",
    "value": "estatesafety@hackney.gov.uk"
  }
}

```
