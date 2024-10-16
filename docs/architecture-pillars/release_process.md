---
id: release_process
title: Managing API Releases
---

As per Hackney’s ways of working, we always try to opt for building reusable [platform APIs](https://playbook.hackney.gov.uk/API-Playbook/platform_api_vs_service_api) instead of service APIs. This approach has proven to have reduced development time, reduced duplication of effort and increased consistency across our API platform.

### Ownership of reusable components
As microservices are shared across multiple consuming services, there is no one single team responsible for maintaining those. 

All engineers have shared ownership and responsibility for the maintenance of our APIs, including:
- Actioning security vulnerabilities.
- Extending functionality, following our [API specification assessment process](https://playbook.hackney.gov.uk/api-specifications/assessment_process/).

Reusable components might have a team who are actively maintaining them as they are doing continuous work in extending the functionality as part of product development. In this case, [Hackney’s PR process](https://playbook.hackney.gov.uk/ways-of-working/) applies.

### Releasing changes
Hackney’s high level development lifecycle 

(place diagram from here  https://lucid.app/lucidchart/f3bd9a5f-0b2c-48e9-b5bf-ea15c2392e04/edit?viewport_loc=-1529%2C-1021%2C3893%2C1889%2CRXcrrlyFfDqh&invitationId=inv_475de4cd-58a9-48d9-b5cf-d44eac3c9663#) 



#### Product changes deployment
All new APIs and changes to existing APIs that are to be deployed across our AWS environments must adhere to our [API compliance](https://playbook-development.hackney.gov.uk/API-Playbook/api_compliance) requirements.

#### Releasing reusable components
As reusable components are shared amongst teams, all production deployments should be first announced on a common channel to raise awareness and allow for teams to provide feedback if they believe a deployment should be delayed. 

To avoid introducing blockers for teams wishing to release their code, feature flag implementation should be used, which is described later in this document.

**Note:** All changes to the API design and contract of a reusable platform API should first be presented at the Data meetup as part of our [API specification assessment process](https://playbook.hackney.gov.uk/api-specifications/assessment_process/).

### Managing changes to APIs already in production

#### API Versioning
An API’s **major version** should be incremented if a breaking change is introduced. Breaking changes include:
- Making an existing data property as required.
- Amending the API contract by removing or amending the name of an existing property.
- Other changes to the functionality that will change the output or requires input previously not required.

To increment an API’s version, create a new folder with the version name and introduce the new API endpoint(s) under the new version. To reduce duplication of code, please use a shared NuGet package to extract common code/functionality instead of replicating it across API versions. You can find more information on what NuGet packages are and how we use them [here](https://playbook-development.hackney.gov.uk/API-Playbook/nuget_packages).

**Note:** Not all existing API endpoints need to be re-created under the new version. Only API endpoints with breaking changes should have their version incremented.

#### Feature flags
Feature flags are a useful way of limiting what functionality is available to consuming services once the code has been deployed to an environment. 
- A change to a reusable component might be needed that might not be a breaking change, so it won’t require an incremented version, however, it might require prerequisites to be completed before it can be released.
- A change might be made by one of the teams, but it should not be released prior to a certain date.

As multiple teams share and make implementation changes to our reusable components, making use of feature flags allows for teams to manage when their change is released.

A code change might be committed to the common repository’s main branch and released as part of a deployment done by another team also seeking to release their changes. To avoid releasing code to a production environment, before the team who has implemented the change is comfortable with doing so, the change should be put behind a feature flag. In this way:
- Teams do not introduce blockers to other teams wishing to release or delay the release of their changes.
- Code changes could be present in the production environment but not available to the API consumers and thus not causing potential service outages.   

Feature flags implementation is documented [here](https://playbook-development.hackney.gov.uk/API-Playbook/feature-toggle).


