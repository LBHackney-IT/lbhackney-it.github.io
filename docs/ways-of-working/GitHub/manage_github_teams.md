---
sidebar_position: 2
---
# Manage GitHub teams

This page describes how to create and manage teams, as well as deciding and managing team membership.

## Why and how we use teams

Managing individuals' access to specific repositories doesn't scale well. Instead, we group people into teams and manage those teams' access to repositories. This makes it much easier to get new starters set up correctly and manage people moving between teams.

Teams are managed in the [LBHackney-IT Teams list](https://github.com/orgs/LBHackney-IT/teams).

> ℹ️ Teams should reflect our organisation structure, so may require occasional refactoring to align them.

There are currently two main types of team in use:

1. Profession teams, e.g. [`Development Team`](https://github.com/orgs/LBHackney-IT/teams/development-team). Every member of the profession belongs in these groups, and they're used for things that are owned by the professional as a whole, for example this documentation site.

2. Project teams, e.g.  [`Targeted Services`](https://github.com/orgs/LBHackney-IT/teams/targeted-services). These project teams have a sub-team for leads, which provides elevated privileges to do more sensitive repository management.

## Adding a new user

Typically a new joiner will need to be added to at least two teams:

- The profession they belong to (e.g. [Development Team](https://github.com/orgs/LBHackney-IT/teams/development-team)), and
- One or more product teams they belong to (or the `leads` sub-team of that product).

### Adding a regular contributor

1. In the [Teams list](https://github.com/orgs/LBHackney-IT/teams) click on the team you want to add them to.
2. Click `Add a member`
3. Search for the user's GitHub username.
4. Click `Invite`.

### Adding a lead

Leads are added in a subtly different way, in order to grant them the `Admin` role to repositories the team is responsible for.

> ℹ️ A "lead" in this context is someone trusted to manage the project, and doesn't reflect a specific job title.

1. In the [Teams list](https://github.com/orgs/LBHackney-IT/teams) find the team you want to add them to.
2. Click the disclosure arrow on the right hand side (next to `X teams`, and click the relevant "... leads" team).
    ![Screenshot showing the above steps to select the leads team.](../img/github_add_to_leads_team.png)
3. Click `Add a member`
4. Search for the user's GitHub username.
5. Click `Invite`.

> ℹ️ The lead doesn't need to be added to the parent team, because the permissions are inherited.
