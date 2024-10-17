---
id: configuration
title: Configuration

---

## Purpose


There is a need to be able to define and expose configuration and feature toggles for use by both frontend and backend systems, to facilitate continuous integration and deployment of applications within Manage My Home.

There may be situations where features are developed within individual microfrontends that are not ready to be released into production, or that depend on features that are developed by a corresponding backend service. By using feature toggling, we can externalise and enable functionality safely in an environment, without the need for redeployment.

Additionally, configuration can be externalised which will reduce the requirement to re-deploy individual micro-frontends in the event that configuration needs to change.

As part of the solution, we will develop the API that is needed to expose configuration and capability for feature toggling in order that this can be consumed by any interested applications.


There are a few options regarding what the boundary is for defining and retrieving configuration:

1. Per project (e.g. Manage My Home, Repairs, Finance)
2. Per Domain (Person, Tenure, Asset, Charges, etc)
3. Per micro-frontend (Person, Tenure, Asset, etc)
4. Something else?


## Vision:
- A single place to store configuration that can be consumed by multiple services
- Enable and disable features without having to redeploy
- Externalise configuration and centralise in one place to reduce maintenance overheads
- Each “type” will have its own configuration/data structure, which will be specific depending on individual needs

## Our users and their needs:

** As a consumer I need to have an API specification (e.g. Swagger doc, README), so that: **  
- I can have a clear understanding of the endpoints which are available
- I know what the requests and responses should look like
- Endpoints:
- Get Configuration

Used to retrieve a list of configurations

                        URL: /configuration/?type=person,tenure,mmh
                        Method: GET
                        Querystring Parameters:
                        type: Person, Tenure, etc… (this should be a list of strings)
                        Response: 200

## Example Payload:

                        [
                          {
                            "Type": "Person",
                            "Configuration": {
                              "ApiUrl": "http://www.hackney.gov.uk/person"
                            },
                            "FeatureToggles": {
                              "CreatePerson": true,
                              "EditPerson": false
                            }
                          },
                          {
                            "Type": "ContactDetails",
                            "Configuration": {
                              "ApiUrl": "http://www.hackney.gov.uk/contactdetails"
                            },
                            "FeatureToggles": {
                              "AddContactDetails": true
                            }
                          },
                          {
                            "Type": "Tenure",
                            "Configuration": {
                              "ApiUrl": "http://www.hackney.gov.uk/tenure"
                            },
                            "FeatureToggles": {
                              "CreateTenure": true
                            }
                          },
                          {
                            "Domain": "Asset",
                            "Configuration": {
                              "ApiUrl": "http://www.hackney.gov.uk/asset"
                            },
                            "FeatureToggles": {
                              "ViewAsset": false
                            }
                          }
                        ]
