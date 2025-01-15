# How to tag your infrastructure

This guide shows you how to configure tagging to meet the  [tagging standard](../Reference/hosting-standards/tagging.md) using infrastructure as code.

## Terraform

TODO

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
