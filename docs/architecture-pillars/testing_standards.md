---
id: testing_standards
title: HackIT Testing Standards
---

### Context

Hackney does not currently have formally defined testing standards. Various testing approaches have been adopted by teams at different stages of development, some of which are standards recorded in HackIT’s playbooks.

Backend development at HackIT follows the TDD (test driven development) as a standard approach for developing APIs. Accessibility and unit testing has been implemented for many frontend applications, but there is no set standard for how this is done.

This paper aims to define a set of testing standards, covering FE (front end), BE (backend), security and overall testing strategies like end-to-end tests. The paper will give an overview of the standards we have set and will work on setting, with links to detailed implementation guides.

### Vision
- To test continuously to ensure that the product is continuously progressing.
- To have a set of standards for the testing cycle and tools to be used in order to have a consistent approach across the board.
- Have a set of minimum BE and FE testing standards to be followed, including testing methodologies, coverage and types of testing so that teams implementing new features for existing products or working on new ones have a clear understanding of the HackIT’s testing requirements for our in-house built services.
- Have a set of minimum security testing to be performed for every application so that we can ensure that every existing and new application has been tested for security vulnerabilities and to have confidence in the level of security applied.
- Have a clear definition of all testing processes to be followed so that teams have a guideline to follow and so service assessors are aware of the minimum testing approaches that a service should have implemented when performing a service standards assessment.
- Have all-around well-tested code so that we can have confidence in any new changes introduced and reduce the development time, effort and project-associated cost to fix defects identified at a later stage.

### Our users and their needs
As a **Technical Design Authority**, I need
- To have sufficient information to contribute effectively and time sensitively so that I am not delaying any delivery of important work unnecessarily.
- To understand the implications of the design for best practice so that I understand the risks that we are taking on
- To have assurance that services we are delivering are accessible
- To understand the principles the design adheres to so that I can check it’s consistent with our policies

As a **developer**, I want
- Confidence in the codebase
- To know my code is broken as soon as possible
- To know that my changes are not introducing and data contract issues between Backend and frontend
- To know the level of testing I am expected to perform so that I have confidence that any changes I introduce are compliant with Hackney’s development and testing standards

As a **tester** 
- I want to be confident that the application is working as expected

As a **security analyst**, I need to
- Have the assurance of security testing so that I can H confidence in the security set up of a service
- Have easy access to testing results so that I can check those if I want to verify the testing scope and success rates for a service
- Be confident that the codebase is proof against cyber threats
- Know if the penetration testing has been conducted on the named service so that it can satisfy the needs of the assurance process.

As an **technical architect**, I want to
- Ensure that all backend components are tested so that I can have confidence in new functionality introduced.
- Ensure that end to end test cases are present so I can ensure that components work well together.
- Eutomate as much of the testing scope as possible so that chances of accidentally missing a test are low and increase the confidence in deployments.
- Ensure that components with issues are not deployed.
- Ensure that IaC that is not compliant with our standards is not created.
- Ensure that changes commited are aligned and formatted so repositories are kept tidy.
- Ensure that no secrets have been published to our repositories so that no security threats are introduced.

### 7 principles of testing

1. Testing shows the presence of defects, not their absence.

As a tester we should take a risk-based approach to our testing activities. This is because all code and code change carries risk, but we should be cognisant of where that risk becomes critical to the health and stability of the application.

As a tester, I should perform testing activities as often as possible and drive a continuous testing approach that is contextually appropriate for the application under test

2. Exhaustive testing is impossible
As a tester, I do not always have time to perform a thorough level of testing on every ticket. I must balance the quality and risk of my testing activities against the velocity and needs of the business and application.

3. Early testing saves time and money

As a tester, I should ensure that I am 'shifting left' for my testing activities where contextually appropriate. 

As a tester, I need to ensure all code has been tested pre-deployment so that defects can be identified early and before entering a Production environment to reduce impact on users and save time and effort in rectifying the problem.

4. Defects cluster together

As a tester, I should be aware of any changes to the application under test. I should use exploratory testing techniques in order to expose any initial defects along with any related issues or edge cases that may come about as a result.

5. Beware of the pesticide paradox

As a tester I need to ensure that new functionality is reflected in existing tests, as well as introducing new tests, so that existing tests will be capable of capturing new defects that may have been introduced.

6. Testing is context dependent
As a tester, I do not need to perform every type of testing activity on a particular artefact under test.

As a tester, I need to test relevant commits that trigger significant events like deployments, and not all code commits so that time is not spent on testing work in progress. 

7. Absence-of-errors is a fallacy

As a tester. I should inherently distrust any application. Even when proven otherwise I will not allow my judgement to be clouded by confirmation bias around said system.
