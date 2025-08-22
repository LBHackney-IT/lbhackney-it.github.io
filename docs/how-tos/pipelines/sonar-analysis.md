# Sonar code analysis tool

## Structure
The the sonar code analysis tool that we use in Hackney consists of 3 parts:
1. The `SonarScanner` is a tool that scans the code and lists/identifies vulnerabilities, bugs and bad code practices.
2. The `SonarQube` is a self-hosted server that receives, analyzes, and displays the scanner's report. Also computes metrics, and allows for creating 3rd party integrations using webhooks.
3. The `SonarCloud` is a cloud-hosted SaaS product that provides an entire platform built on `SonarQube` _(so no self-hosting needed)_.

# Purpose
The fully-configured SonarCloud integration allows doing static code analysis, tracking issues and state of code over a span of time, and provides quick feedback on any potential issues. Issues like: security, potential bugs, code duplication and detecting poor tests code coverage.

