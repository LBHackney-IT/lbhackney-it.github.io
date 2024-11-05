---
sidebar_position: 1
---
# Add a user to GitHub

This runbook describes how to add internal and outside collaborators to the  [LBHackney-IT GitHub organisation](https://github.com/LBHackney-IT).

> ⚠️ Access to `LBHackney-IT` GitHub organisation is controlled by Google Group membership, so adding users directly within GitHub will not work.

There are two workflows: one for users with Hackney accounts and one for those that don't ([outside collaborators](#outside-collaborators)). Always prefer the Hackney Google account route where possible.

## Staff and users with Hackney Google account

### Prerequisites

1. The `Manager` role in [SAML-Github-Users](https://groups.google.com/a/hackney.gov.uk/g/saml-github-users/members), which includes the Head of Engineering and Lead Engineers.

### Steps

1. In the [`SAML-Github-Users` Google Group](https://groups.google.com/a/hackney.gov.uk/g/saml-github-users/members) add the user as a "Group member" with the following welcome message:

    > Hi, you've been added to this group so you can access our GitHub organisation.
    >
    > There are some steps you need to take now (if you've already done a couple of these, even better):
    >
    > 1. Create or login to your GitHub account. Its fine to use an existing/personal account if you have one.
    > 2. Visit https://github.com/settings/emails and add your Hackney email address.
    > 3. Visit https://github.com/settings/security and setup 2 factor authentication.
    > 4. Click https://github.com/orgs/LBHackney-IT/sso and follow the steps to login to your Hackney Google account and associate it with your GitHub account.
    >
    > Once you've done that, tell the person who's getting you set up your GitHub username and they'll add you to the appropriate groups so you can get started.

2. Once the user has completed those steps grant them access to repositories by adding them to one or more teams, following [Manage GitHub teams](./manage_github_teams.md).

## Outside collaborators

Where someone doesn't (and shouldn't) have a Hackney Google account, we can add them as "Outside collaborators"

> ⚠️ This method is more restrictive and cumbersome than the one above. Only use it where a contributor should not have a Hackney Google account, e.g. a short-term agency engagement accessing a single repository.

### Prerequisites

1. You must have the `Admin` role on the repository/repositories you're adding the person to.
2. The user's GitHub account must have 2 factor authentication enabled.

### Steps

> ℹ️ Outside collaborators are added per-repository, so you may need to complete these steps multiple times for the same person.

1. In the repository the user needs access to, visit `Settings` ->  `Collaborators and teams`, then in `Manage access` click `Add people`.
2. Find the user by their GitHub username.
    - GitHub will highlight that the user is an external collaborator.
3. Pick the lowest-privilege role which enables the user to perform their tasks. Typically this will be `Write` or `Maintain`, but must _not_ be `Admin`.
