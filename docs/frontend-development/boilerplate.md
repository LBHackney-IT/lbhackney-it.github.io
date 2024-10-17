---
id: boilerplate
title: BoilerPlate
slug: /boilerplate
---

## Base configuration repo
A refresher on the benefits of microfrontends in the context of Hackney Council:
- Each team has the power to deploy microfrontends independently
- Teams can benefit from other teams and collectively contribute to wider Hackney standards

We propose using a tried a tested microfrontend framework called single-spa for scaffolding MFE applications.

The framework documentation can be found [here](https://single-spa.js.org/docs/getting-started-overview).

On a high level, the key thing to keep in mind is that a root config is responsible for rendering HTML pages and the associated javascript. Each MFE application is visible to the root config, which is responsible for displaying the relevant pages to a user.

The microfrontend's that are built will still be applications that developers are already used to.In another words if you would have built with a project with React JS, you can stay assured that you will be building with React JS.
(this would apply to other frontend frameworks as well!)

Setting up a MFE using single span is very easy, you can begin scaffolding an application with the CLI with the command below:

```
npx create-single-spa 
```

The CLI neatly allows you to scaffold the root config or the MFE applications.

Start by selecting the option most relevant to you:
- single-spa application / parcel
- in-browser utility module (styleguide, api cache, etc)
- single-spa root config

Select the FE frameworks of choice:
- react
- vue
- angular
- svelte

Select the preferred package manager:
- yarn
- npm
- pnpm

Enable typescipt:
- Yes
- No

Organisation name:
- e.g mtfh (modern tools for housing)


Project name:
- e.g tenure (for the tenure screen)


After choosing your options, the CLI will scaffold the project as per your needs

## Content
If you already are aware of the endpoints you might use, feel free to update the README.md for others to see how they can run your project locally.

```
ACTIVITIES_API_URL=
PERSON_API_URL=
```

[Click here](https://github.com/LBHackney-IT/mtfh-frontend-activity-history) for an example of a README.md you can take inspiration from.





