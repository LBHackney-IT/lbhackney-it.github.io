---
id:    listener_tech_stack
title: Listener Tech Stack
---

## Listener application:

- .NET Core 3.1 (C#);
- AWS Lambda;
- Serverless framework.
  - [See more](../How%20to%20build%20an%20API/Preferred%20tech%20stack/serverless_lambda.md);
- FxCop for static code analysis.
  - [See more](../How%20to%20build%20an%20API/Preferred%20tech%20stack/static_code_analysis.md);
- [Hackney.Core.xxx](https://github.com/LBHackney-IT/lbh-core).
  * Common Hackney NuGet packages providing common functionality;
- dotnet-format for linting.
  - [See more](../API%20Practices%20and%20tools/linting.md);

## Testing:

- [xUnit](https://xunit.net/);
- [FluentAssertions](https://fluentassertions.com/introduction);
- [Moq](https://github.com/Moq/moq4/wiki/Quickstart);
- [AutoFixture](https://github.com/AutoFixture/AutoFixture);
- [BDDfy](https://github.com/TestStack/TestStack.BDDfy).
  * For end-to-end tests;
- Host (Microsoft.Extensions.Hosting).
  * For bootstrapping the application in memory to run end-to-end tests;
- Docker & docker-compose.
    * For spinning up DB image containers and running tests against that database.;
    * _During local development and during test run as part of CI/CD_;

_For more guidance on testing, go to the [testing](../../Testing/tdd.md) section_

## Common:

- CircleCI for CI/CD.
  - [See more](../../DevOps%20practices/deployment_pipeline.md);
- GitHub for version control.
  * [HackIT Github](https://github.com/LBHackney-IT);
- AWS for cloud hosting;
- AWS CloudWatch for monitoring;
- Terraform for Infrastructure as Code (IaC) (e.g. setting up AWS DMS).
  - [See more](../../DevOps%20practices/infrastructure.md);
- AWS Parameter Store for secrets (connection string and similar);
