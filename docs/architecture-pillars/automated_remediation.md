---
id: automated_remediation
title: AWS Config for enabling automated remediation 
---

### Context
AWS Config is an AWS service that provides a method to assess if the configuration of AWS resources deployed in an account are compliant with a set of manually configured rules and allows us to keep track of all changes made. 

AWS provides a set of predefined rules that can be used, but also has the option of creating custom ones. The rules that are being evaluated are chosen by the customer on a per account/per resource basis based on the service and organisation needs and identify if the configuration of an existing or newly provisioned resource is compliant with common best practices - for example, if encryption is enabled for DynamoDB tables.

AWS Config official documentation that details additional features can be found [here](https://aws.amazon.com/config/).

In Hackney, we are adopting several mechanisms to ensure that deployed resources are compliant with our preferred configuration, e.g. no database should be publicly accessible. Those include:
- Following the [least privilege principle](./dev_least_principles.md), where engineers are unable to manually create AWS resources but must instead automate the creation via IaC (infrastructure as code) and CI/CD pipelines.
- Adopting [Terraform-compliance](https://playbook.hackney.gov.uk/API-Playbook/terraform_compliance) security and compliance testing framework for performing pre-deployment  checks to ensure only compliant resources are deployed.
- Using [serverless safeguards](https://playbook.hackney.gov.uk/API-Playbook/serverless_safegaurd)  to ensure AWS resources provisioned via the Serverless framework are also compliant. 

However, some of those must be set up on a per-project basis, thus not guaranteeing security risks prevention by the proposed mechanisms due to no current way to ensure 100% take up amongst project teams.

Enabling AWS Config with automated remediation can be done on account level, ensuring that our internal teams can set up a mechanism to enforce compliance even if not all project teams develop services following all of our standards in place that promote governance as service.

### Vision
- Have a defined list of compliance rules for commonly used AWS resources that is frequently reviewed and updated as and when required so that we have consistency for rules applied as well as a process to iterate that list when we change our use of existing or new AWS services.
- Continuously monitor and detect non-compliant AWS resources so that we have visibility over potential security risks and performance, availability and cost impacting resources in our environments .
- Automate remediation for breached rules so that our teams can focus on the other stages of a service delivery lifecycle and we have assurance that non-compliant resources would be corrected even if teams are unavailable to action a given compliance breach. 
- Provide assurance for our security setup so that stakeholders have a strong confidence in the setup of our environments.
- Ensure that resources provisioned are set up for performance, high availability and are cost optimised so that our services are more reliable and cost efficient.

### User needs
As an **architect**, I want to ensure
- that a solution’s design is implemented with the appropriate infrastructure resources configuration that is compliant with Hackney’s list of compliance requirements, which aim to promote better security, performance, reliability and availability at the lowest possible cost for a given service.

As an **engineer**, I want 
- a way to automate remediation of non-compliant AWS resources so that I can focus on the rest of the software lifecycle / platform activities. 

As a **security analyst**, I want
- assurance that services are configured as per agreed security requirements for infrastructure components.
visibility over compliance of infrastructure components with agreed security requirements.

As a **TDA member**, I want
- to give assurance to Hackney senior stakeholders, staff and residents that services built are compliant and if audited, all criteria would be satisfied.

### Method
Implement AWS Config rules and automated remediation, via Terraform, per account for the following types of resources (as part of the first iteration). 
- AWS S3 [add terraform module link]
    - Automatically block public access
- AWS RDS[add terraform module link]
    - Disable public access to RDS
    - Enable Multi AZ on RDS
    - Enable deletion protection
- AWS SNS [add terraform module link]
    - Encrypt SNS topics
- AWS Lambda [add terraform module link]
    - Enable X-Ray for request tracing monitoring
- AWS DynamoDB [add terraform module link]
    - Enable encryption
    - Enable PITR (Point in time recovery) for automated backups

*The list of resources will be expanded following the trial of the tool. The initial list was prepared based on AWS resources commonly used for the development of our services.*

## Considerations 
### Cost
As this is an AWS paid service and we have other compliance testing mechanisms in place (e.g. terraform-compliance), should we consider implementing AWS Config only for our Production environment?

### Implementation
As a first iteration, this paper proposes to implement AWS Config with the set of rules and remediations already provided by AWS, instead of building custom ones. Should the tool work well for us, as well as if we identify a need for a custom rule/remediation, then that should be considered. 

Further to this, can we use Control Tower to automatically enable those rules for new and existing AWS accounts instead of using terraform?
