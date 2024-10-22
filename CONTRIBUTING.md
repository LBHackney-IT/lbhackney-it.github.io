# How to contribute to this site

This website is built using [Docusaurus](https://docusaurus.io/) and is hosted on GitHub Pages using GitHub Actions to build and publish.


## Getting set up

### Prerequisites

You'll need the following to run the site locally and make changes easily:

1. Modern Node (check the `node-version` in [the deployment pipeline](./.github/workflows/deploy.yml) to see what we're targeting).
2. [EditorConfig](https://editorconfig.org/) configured for your editor (optional). EditorConfig ensures your changes are consistent with the repository standards before you raise a pull request.

> ℹ️ For VSCode there's an official [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) plugin.


### Install dependencies

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

> ⚠️ The local development server doesn't build the search index. To test this locally, you'll need to build and serve the site (see below).

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service or using:

```bash
npm run serve
```

## Deployment

Deployment is done automatically through GitHub Actions to GitHub Pages.

### Break-glass deployment steps

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```
