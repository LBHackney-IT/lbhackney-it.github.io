# Hackney Development System

The [Hackney Development System](https://playbook.hackney.gov.uk/) is the home of the Hackney development team's documentation, and details how we work as well as technical and architectural documentation.

Project-specific documentation doesn't generally live here, and will be found alongside the code in the relevant repositories. There are exceptions, for example the API specifications section seeks to provide a central directory of Hackney's APIs.

## Architecture

This website is built using [Docusaurus](https://docusaurus.io/) and is hosted on GitHub Pages using GitHub Actions to build and publish.

Before 2024 this site was built and deployed as a series of small static sites with independent repositories, build tooling, and styling.

The site is now a single repository and build pipeline, which reduces the maintenance burden to upgrade dependencies and gives us more flexibility to alter and add to the structure.

### Local search

This site provides a search bar provided by an in-browser JavaScript library. This differs from the Docusaurus-supported default which relies on an Algolia account. We choose local-only search so we don't have to manage the Algolia account or rely on a third party service.

### Google Analytics

In order to measure the effectiveness of our documentation and identify stale or ineffective content we use Google Analytics, which records to a property in our Google Workspace.

### Ownership

Most of the content on this site belongs to Hackney's development community as a whole. Some sections, for example the Data Platform Playbook, belong to another group

We use [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) to ensure the relevant owner approves a change before it can be merged.

### Deployment

The default branch of the repository is automatically built and deployed as a GitHub Pages site, using GitHub Actions. The deployment and test workflows are in [`.github/workflows/`](.github/workflows/).

## Contributing

Pull requeststs are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to run the site locally and make changes.
