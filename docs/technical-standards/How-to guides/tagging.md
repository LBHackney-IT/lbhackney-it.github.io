# How to tag your infrastructure

This guide shows you how to configure tagging to meet the  [tagging standard](../Reference/hosting-standards/tagging.md) using infrastructure as code.

## Terraform

To add consistent tags to every resource created by a particular provider within a repo, use [the `default_tags` block in your terraform provider block](https://www.hashicorp.com/blog/default-tags-in-the-terraform-aws-provider). This will cascade any tags you specify to all resources created by terraform. For example:

```hcl
provider "aws" {
  region = "eu-west-2"
  default_tags {
    tags = {
      Application = "Developer Playbook"
      TeamEmail   = "developers@hackney.gov.uk"
      Environment = "production"
    }
  }
}
```

See how we use this in [LBHackney-IT/ce-dns](https://github.com/LBHackney-IT/ce-dns/blob/main/providers.tf) for a real-world example, including passing variables into the tag block.

### Dynamic tags in Terraform

Tags such as `AutomationBuildUrl` change every time we run the build in CI. Terraform doesn't support reading environment variables directly in the provider, so we need to pass these in as Terraform variables.

Here's an example for how to add `AutomationBuildUrl`:

1. Create a variable to hold the value in `variables.tf`:
    > ℹ️ We use snake_case for variable names to match the Terraform convention
    ```hcl
    variable "automation_build_url" {
      description = "The URL of the CI build that deployed or modified this infrastructure"
      type        = string
      nullable = false
    }
    ```

2. Use the environment variable in `providers.tf` where you're defining your tags:
    ```hcl
    provider "aws" {
      default_tags {
        # ...
        AutomationBuildUrl: var.automation_build_url
    }
    ```

3. Then reference the environment variables in `tfvars/production.tfvars`, `tfvars/staging.tfvars`, and any other environments you have.
    - For CircleCI this will look like:
      ```hcl
      automation_build_url = $CIRCLE_BUILD_URL
      ```
    - For GitHub Actions this will look like:

      ```hcl
      automation_build_url = ${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}
      ```

## Serverless Framework

In order to add tagging to AWS resources managed by Serverless Framework:

1. Install the `serverless-plugin-resource-tagging` Node module, e.g. `npm install serverless-plugin-resource-tagging` or `yarn add serverless-plugin-resource-tagging`.
2. Add the plugin to the `plugins` list in `serverless.yml` in your project and add the tags under `stackTags`, e.g.:
    ```yaml
    provider:
      # ...
      stackTags:
          Application: "Developer Playbook"
          TeamEmail: "developers@hackney.gov.uk"
          Environment: "production"

          # For CircleCI
          AutomationBuildUrl: ${env:CIRCLE_BUILD_URL}

          # For GitHub Actions
          AutomationBuildUrl: ${env:GITHUB_SERVER_URL}/${env:GITHUB_REPOSITORY}/actions/runs/${env:GITHUB_RUN_ID}

      plugins:
        - serverless-plugin-resource-tagging
    ```

Refer to the [tagging standard](../Reference/hosting-standards/tagging.md) for a full list of mandatory and optional tags.
