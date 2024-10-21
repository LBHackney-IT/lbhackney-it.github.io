# Minimum QA testing requirements in Hackney’s Software Development Lifecycle

### Context
This document aims at outlining what are the minimum testing and quality assurance processes that should be done for each project as part of the Software Development Lifecycle.

Each product will be asked to demonstrate sufficient testing performed as per the minimum testing activities described in this document.

[HackIT Testing Standards](./testing_standards.md)


### APIs and Backend services
Process diagram:
Click image to open in a new tab.
[![](../docs-images/DevelopmentLifecycle.png)](../docs-images/DevelopmentLifecycle.png)


All APIs and Backend services must be built following the test driven development approach, as described in our [API Playbook](../../api-playbook/Testing/tdd.md).

**Tests written by:** Software engineers
**Tests executed by:** Software engineers (as part of local testing) and CI/CD pipeline, as part of Continuous Integration

**Code testing**

- [Unit testing for all components that make an API](../../api-playbook/Testing/mock_unit_tests.md)
- [Integration testing using Docker and localstack for provisioning local AWS resources to run the tests against.](../../api-playbook/Testing/integration_tests.md)
- Contact testing using a PACT broker (TBC)

**Other automated testing**

- [Vulnerability scanning using SonarCloud](../../api-playbook/Development%20Lifecycle/API%20Practices%20and%20tools/sonarcloud.md)
- [Terraform-compliance checks](../../api-playbook/Development%20Lifecycle/API%20Practices%20and%20tools/terraform_compliance.md)

### Frontend services
Process diagram:
Click image to open in a new tab.
[![](../docs-images/MFEFrontendDevelopmentLifecycle.png)](../docs-images/MFEFrontendDevelopmentLifecycle.png)

All Frontend services must have corresponding unit tests implemented as part of a Test Driven Development approach.

**Tests written by:** Software engineers
**Tests executed by:** Software engineers (as part of local testing) and CI/CD pipeline, as part of Continuous Integration

**Code testing**
- Unit testing

**Other automated tests**

- [Vulnerability scanning using SonarCloud](../../api-playbook/Development%20Lifecycle/API%20Practices%20and%20tools/sonarcloud.md)

### Product testing
Process diagram:
Click image to open in a new tab.
[![](../docs-images/qa_process.png)](../docs-images/qa_process.png)

All products must implement E2E testing, using tools such as Cypress, to validate that features are correctly implemented and the frontend and backend are successfully integrated. This step is crucial for the continuous delivery phase.

**Tests written by:** QA engineers
**Tests executed by:** QA engineers (as part of local testing) and CI/CD pipeline, as part of Continuous Integration

- [E2E automated tests using Cypress (or similar)](../../frontend-development/testing.md)
    - Run everytime a deployment occurs against an environment
- [Manual exploratory testing](https://docs.google.com/document/d/1R7JEXdbjhAESbO5JAp7kvlrxxY19MOxBhpwOQ1pdUpQ/edit?usp=sharing)
- [Accessibility testing](../../api-playbook/Development%20Lifecycle/API%20Practices%20and%20tools/accessibility_testing.md)


