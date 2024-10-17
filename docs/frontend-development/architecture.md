---
id: architecture
title: Architecture
---

We use the `single-spa` framework for managing MFE's within Hackney. Single-SPA offers a wide variety of tools to build MFEs, of which we have mostly followed the recommended approach.

1. React & Typescript
2. Runtime composition via SystemJS (Import-maps)
3. Global UMD shared dependencies
4. Utility Module (common) for shared components / utilities
5. Route based (Vertical) splitting
6. Individual git repos and CICD pipelines

## Root Config
The Root Config is the main entry point for the app and is responsible for the orchestration of the MFEs. It contains the import-map, which informs the app of the locations of each MFE, and what namespace to mount them in.

## Applications
These are the individual React MFEs. Primarily hold the views and components required to generate full pages. An Application can contain it's own router and maintain sub-routes related to the MFE.

## Utility Modules
A utility module is very similar to an Application, except it does not have any specific views, and is intended to be available globally from the root config. Utility modules should provide access to shared code, such as utility methods and generic React components.
