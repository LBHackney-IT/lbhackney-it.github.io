# Preferred Tech Stack

## APIs:

- .NET Core 3.1 (C#);
- AWS Lambda;
- Serverless framework.
  * [See more](./serverless_lambda.md);
- AWS API Gateway;
- Hackney Lambda authoriser (for authentication).
  * [See more](../API-Practices and tools/lambda_authoriser);
- FxCop for static code analysis.
  - [See more](./static_code_analysis.md);
- dotnet-format for linting.
  - [See more](../API-Practices and tools/linting);
- AWS Canaries for availability monitoring.
  - [See more](../../../DevOps%20practices/Monitoring/uptime_monitoring.md);

## Testing:

- [nUnit](https://nunit.org/);
- [FluentAssertions](https://fluentassertions.com/introduction);
- [Moq](https://github.com/Moq/moq4/wiki/Quickstart);
- Bogus (Faker) for faking test data;
- [AutoFixture](https://github.com/AutoFixture/AutoFixture);
- WebApplicationFactory (Microsoft.AspNetCore.Mvc.Testing).
  * For bootstrapping the application (API) in memory and run end-to-end tests;
- Docker & docker-compose.
    * For spinning up DB image containers and running tests against that database ;
    * _During local development and during test run as part of CI/CD_;

_For more guidance on testing, go to the [testing](../../../Testing/tdd.md) section_.

## Common:

- Swagger documentation.
  * For API design prior to implementation;
  * Automated Swagger docs for each API endpoint deployed;
  - [See more](../../API Documentation/swagger_documentation.md);
- CircleCI for CI/CD.
  - [See more](../../../DevOps%20practices/deployment_pipeline.md);
- GitHub for version control.
  * [HackIT Github](https://github.com/LBHackney-IT);
- AWS for cloud hosting;
- AWS CloudWatch for monitoring;
- Terraform for Infrastructure as Code (IaC) (e.g. setting up AWS DMS).
  - [See more](../../../DevOps%20practices/infrastructure.md);
- AWS Parameter Store for secrets (connection string and similar);
