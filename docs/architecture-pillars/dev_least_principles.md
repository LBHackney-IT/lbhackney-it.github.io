---
id: dev_least_principles
title: Developer Least Priviledge Principles
---

### Context

The least privilege principle means that the users should be given the least amount of access and responsibilities necessary to complete their tasks. Least privilege is also referred to as role-based or need-to-know access permission. 

Users such as Developers do not need full permissions to carry out their tasks on AWS accounts. The solution for this is to automate as much as possible via the pipelines.

This paper will provide details of the different types of technical and non-technical roles within projects in HackIT and the access level that should be associated with it.

### Vision

- A well-defined pipeline which carries out all the relevant tasks a developer needs to carry out his job well so that removing existing elevated permissions does not create any blockers for developers to perform their tasks.
- A clear mapping of roles and responsibilities and the access required for those so that we have a definition to follow when providing access and ensuring that we are only giving access where needed.
- Tightened access control for all roles so that no users have access beyond what is needed to perform their day-to-day job and we are compliant with secure data access principles.
- A process to increase security laterally on all layers of AWS accounts so that we are not vulnerable to any cyber attack and reduce the attack scope to the minimum.
- Have a process to ensure that the least privilege principle is followed/enforced thoroughly throughout implementation of various services so that we can be confident that all services we develop are secure. 

### Our users and their needs

**As a developer, I need to**
- Ensure all the resources I need to deliver a task is handled by the pipeline so that I do not need to create them manually.
- Ensure no secrets are passed via the pipeline to build the infrastructure so that I do not let the council be vulnerable to the attacks.
- Know what are the least privilege principles to follow when implementing a service so that I can code with those in mind.
- Ensure that I fill in the threat matrix assessment so that I can assure the stakeholders that the service developed and deployed do not cause any security threat to the organisation.

**As a solution architect, I need to**
- Ensure that tools used to access services in our environments have credentials associated with them sufficient only to perform their task and not more so that in an unlikely scenario, where credentials get compromised, the attack scope will be minimal.
- Ensure that the implementation, where more than one service is involved, ensures secure communication between services so that I know data is passed securely.
- Ensure that the communication method between services and the authentication and authorization involved is implemented following the least privilege principle to reduce the potential attack scope if an incident occurs. 

**As a Cyber silver, I need assurante that,**
- Services are built in a secure manner so that I can have confidence in our technical implementations and have low risk of potential incidents. 
- The process of verifying that services developed are following the least privilege principle is enforced so that I can have confidence in the services produced and the code we have publicly available.

### Roles and permissions associated

#### Administrators

- Those include (as per HackIT 2.0):
    - Development Manager
    - Lead Developers
    - Senior DevOps engineers

##### Access Matrix 

| Environment name | Access level |
|----------------- | ------------ |
|   Development    | Full access  |
|   Staging        | Full access  |
|   Production     | Full access  |

#### Developers

##### Access Matrix 

| Environment name |        Access level          |
|----------------- | ---------------------------- |
|   Development    | Read only on all resources   |
|                  | Write on parameter store     |
|                  | Read and write data access   |
|   Staging        | Read only on all resources   |
|                  | Write on parameter store     |
|                  | Read and write data access   |
|   Production     | Read only for most resources |
|                  |    No data access            |
|                  | No read or write access to secrets |


#### Application support

##### Access Matrix 

| Environment name |        Access level          |
|----------------- | ---------------------------- |
|   Development    | None                         |
|   Staging        | Read only on all resources   |
|                  | Write on parameter store     |
|                  | Data access to data sources  |
|   Production     | Read only                    |
|                  |Read only access data access- It should be agreed |



#### Business users
##### Access Matrix 

| Environment name | Access level |
|----------------- | -------------|
|   Staging        | None         |
|   Production     | None         |



### Automation
In order to apply the above permissions matrix without introducing blockers for team members to perform their job, the responsibility of deployment should be transferred to our automation tools. Those include our CI/CD pipelines (CircleCI/Github Actions).

- Automation users should have credentials, allowing them to only create / maintain resources relevant to the purpose of creating the user.
- Attaching full admin permissions should be avoided - instead, role assumption is preferred. 
- Credentials should be rotated on a regular basis (frequency TBC).
- Developers should take responsibility for not printing out any environment variables set within our pipeline configuration.

### Limited data access

**Direct data access (database level)**
No services or users should directly access data via the database. Exceptions apply:
- Microservices built to interact with the given dataset (i.e. Platform APIs)
- Read and write for Development and read only for Staging for Developers (debugging purposes)
- Read only for Staging and Production for Application support officers (for support purposes)

**Data access via API**
- Consuming services should only access the data sets and fields they need to fulfill a certain requirement.
- Consuming services should record reasons for accessing data and details of what fields they will be used for. This is to ensure that data is reused within agreed compliance rules.

### Accessing services and cloud platform accounts

**Please Note:** This section is to be re-visited once the new IDAM solution is in place.

#### Internal facing services - use of Google groups
Access to services should be maintained and segregated by the use of Google groups - this could be on a team level (based on function or project) or individuals with specific roles (i.e. managers). Rules need to be designed for the creation of any new google groups.

**Frontend features access control**

Google groups can be used to limit access to certain front end features. When a user logs in to a given digital service we have developed, the frontend obtains information about the users, such as which Google groups the user belongs to. If specific features need to have limited access, the developers can use the above information to code the feature to allow access only if the logged in user is part of a specified Google group. 

**API authentication**

The new API authorizer makes use of the token generated when users sign it to our services using Google. The front end passes the token to the APIs as part of the request. The API authorizer retrieves information about the user and compares if the Google one or more of the groups the user belongs to is listed as a Google group allowed to access the given API.


**Backend authorisation**

As previously agreed by the technical architecture meetup community, each microservice will manage its own authorisation rules. Some APIs (e.g. Repairs) already do that - the front end passes an HTTP header with a token, containing information about the end user, such as their email address and Google groups they belong to. The backend can choose to limit features/data returned by checking which Google groups a user belongs to and apply rules to restrict certain features or filter what data is returned based on this information. 

### AWS access - use of Google groups

Our AWS platform is integrated with Google for authenticating users. In order for new members to gain access to our AWS accounts, they need to be added to the relevant Google group. Adding a user to a Google group automatically gives them access to all accounts the given Google group is assigned to. In this scenario, Google groups are used to manage access of technical members, such as developers to AWS. This is different to giving developers, and other team members, end-user access to a digital service. 

For this reason, separate Google groups are required to manage access to AWS as not all team members, who have access to a digital service, should have access to AWS and vice versa. 


### How do we measure this Policy is applied?
- Use [IAM Access Analyser](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html) to keep track of who accesses which resources. This can be implemented with an AWS account or at the organisation level within the zone of trust.
- Create developer AWS roles only allowing the access level defined in the [Roles and permissions associated] (#roles-and-permissions-associated) section of this document
- Apply Service Control policies across the organisation for extra layer of security.
- Steps for applying the principle	
    - Identify
    - Protect
    - Detect
    - Respond
    - Recover
- Integrate steps to prove compliance as part of the Service standard assessment process. 
