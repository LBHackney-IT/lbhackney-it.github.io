# Pull Request process

## Context
Hackney uses GitHub as a place to version-control and store source code. Various teams apply and follow different branching strategies - a way of managing branches within repositories and have different approaches towards deployment based on those branches.

As of July 2021, there are no HackIT standards for “Pull Requests” (PR) processes and branch protection rules. The aim of this document is to provide guidance on PR processes and the benefits of implementing those.


## What is a pull request?

A pull request is a way to get feedback and suggestions from fellow team members on a new piece of code you are proposing to add to the source code or the removal/amendment of such. More on pull requests can be found here:
https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

The smaller the PR is, the easier it is to review, the quicker the required changes can be merged onto the master branch.Please refrain from submitting a long PR as it is likely to be rejected by the reviewers.

## What is a branch protection rule?

A branch protection rule is a GitHub feature that allows repository admins to enforce rules around interactions with a given branch. This could be always requiring a review from a code owner before being allowed to merge or preventing direct merges to a branch without a pull request first. More on branch protection rules can be found here:

https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings

## User needs

** As a developer and one of the active maintainers of a repository, **

- I would like to know when a new change is introduced to the repository so that:
- I have awareness of any changes made.
- No changes that my team is not aware of are promoted to production.
- I can review the code and ensure it complies with the Hackney development standards and playbooks.
- I would like no code to be merged into a main branch without a review, so that:
- I can ensure that the main branches of a repository only contain code that is quality checked and compliant with the Hackney development standards and playbooks.

** As a developer, who would like to contribute to a repository actively maintained by another team, **

- I would like to know what information to provide in my pull request, so that:
- Reviewers have sufficient information and context when providing feedback.
- I can reduce the time needed to provide feedback for a pull request.

## Pull requests and branches - Our ways of working

- Every main branch should have a protection rule associated with it disallowing direct merges and always requiring a pull request first so that source code is protected against accidental direct merges and each new or amended existing piece of code is first reviewed by fellow team members to ensure code is complaint with Hackney’s development standards and playbooks.

- A main branch could be “master” or it could be a combination of “master” and “release” and similar depending on branching strategy.

- Every project team should have a GitHub team created so that team members can collectively be added as pull requests reviewers and as code owners of the repositories they are actively maintaining.
Project teams should have a separate GitHub team based on discipline - FE or BE - to avoid “spamming” developers, when a PR might not be relevant for them.

- Every main branch should have a protection rule to require a review from a code owner before merge so that the active maintainers of the repository are aware of any changes introduced during a collaboration process with other teams.

- Code owners should be the members of the team, who is actively maintaining the repository source code.
All team members, part of the team actively maintaining a repository, should be added to a GitHub team (per project) and the GitHub team should be added to the ‘CODEOWNERS’ GitHub file.

- Process of maintaining the list of people and teams defined in the ‘CODEOWNERS’ file is the responsibility of the actively maintaining team

- In the event when one team is taking over from another team, it is the new actively maintaining team that needs to update the ‘CODEOWNERS’ file to reflect the change.

Every pull request raised should make use of the pull request template in the repository (if there is one) so that the pull request description contains sufficient information regarding the change, giving more context to the reviewers.
Currently API repositories have a pull request template - this is to be expanded further.

Every pull request, related to a Jira ticket (if applicable), should make use of our Jira ‘Smart commits’ integration so that every member of the project team has an easy way to identify active branches and pull requests related to a ticket.
Smart commits work by including the Jira ticket number in the branch/PR name.

Further information on ‘Smart commits’ and how to use them can be found here:

https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html

Every pull request should be small in size (unless there is a use case for a bigger pull request) so that reviewing a PR is made easier by not needing too much time to review it and potential issues can be identified in an easier manner.
- Each developer, who has a reason for submitting a longer PR, should specify the reason for this in the pull request template.

## Pull requests - guidance for contributors

** If you are the active maintainer of a repository **

- Ensure your main branches have the listed above protection rules set accordingly.
- Each pull request has at least two approvals before merging (flexible depending on team size but needs to be agreed by EA/SA).
- Each pull request from a different team has been reviewed by at least one member if your team and changes are communicated to all team members.

** If you are contributing to a repository actively maintained by another team **

- Ensure that you communicate with them your intended change, prior to implementing it.
- How do we communicate the intended change? Agree and document a process around this. - TBC
- Ensure that for any changes you introduce, you keep the code base consistent.
- Ensure that you provide a sufficient amount of information in your pull request.
- Ensure at least one member of the team actively maintaining the repository has approved your PR before merging your code.

## Help us improve
We are always looking at ways we can improve. If you have any ideas or suggestions please share your feedback on our ways of working [GitHub Repo](https://github.com/LBHackney-IT/ways-of-working).
