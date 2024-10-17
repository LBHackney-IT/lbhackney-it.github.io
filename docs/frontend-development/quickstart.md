---
id: quickstart
title: Quickstart
---

## Dependencies

- Node 14+
- NPM

## Getting started

Follow these instructions to get Micro frontends up and running quickly.
These were written and tested on a Mac OSX.

The `.env` parameters are available in AWS parameter store, ask in Slack for details.

First request to be added to the appropriate Google Group in slack, which will enable you to login.
This group should match the value of the `AUTH_ALLOWED_GROUPS` env var in `mtfh-frontend-common`.

Add the following to `/etc/hosts` (to enable authentication to work in development)

```
127.0.0.1   local.hackney.gov.uk
```

You will also need to create a GitHub access token to use in the process, which gives the CLI access to any
private repositories.

1. Go to http://github.com/settings/tokens
2. Generate a new token
3. Name it whatever you like, and set an expiry
4. Select all the `repo` scopes
5. Save the token some where secure and temporary so you can use it in the next steps

Next run the following commands in a new folder on your local development machine.

```
npm i -g @hackney/mtfh-cli
mtfh-cli install
cd mtfh-frontend-common
touch .env
cd ../mtfh-frontend-search
touch .env
cd ..
mtfh-cli run mtfh
```

Visit `local.hackney.gov.uk:9000` in your browser.

Note that a CORS issue prevents login working locally in the Firefox browser.
