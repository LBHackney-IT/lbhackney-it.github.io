---
id: notifications-api
title: Notifications API
---

## Purpose
To identify all information to be captured with regards to the Notifications domain.  For the purpose of this specification a notification is defined as a means of notifying a user (tenant, officer, etc) that an event has occurred that is relevant to them.

## Context
To provide a tool to allow email and text message confirmations to be sent to Hackney residents, businesses and other clients.

## Functions
- Email notifications - Email notifications will be sent to the email address supplied in the request (email templates, personalisation, etc required)
- Text message notifications - Text message notifications will be sent to the number supplied in the request (text message template, personalisation, etc required).
- Send Letters (Pending) - Letters will be sent to the address specified in the request.
- Facilitate the display of notifications on screen (eg, lists, notification count badges, Google Chrome popup)
- Facilitate sending letters (template, personalisation, etc required)
- Certain notifications would require follow-on actions.  Be able to identify those and provide navigation to the follow on action.  For example if a resident receives a notification (email or text) for a survey there should be a link to the survey in the notification.


## Vision
1. A single, centralized data source, holding all the notification data for possible services authorization.
2. A reusable microservice API used for managing notification data.
3. Avoidance of any duplication of data, a normalised view and consistency across the board.
Reducing development costs across all streams/domains.


## User Needs
1. As a service user I would like to receive email notifications so that I am confident that my request has been actioned.
2. As a service user I would like to receive text message notifications so that I am confident that my request has been actioned.
3. As a service user I would like to receive written letters so that I can be confident that my request has been actioned.
I can take necessary action 
4. As a member of the Finance team, I want to be notified of missed Service Charge payments so I can take necessary action
5. As a member of the Finance team, I want to be notified of Estimates to be approved via a Notifications screen and be able to confirm I have seen it via a pop-up so there is an audit that I have seen the notification and take necessary action.
6. As a member of the Finance team, I want to be notified of Actuals to be approved and be able to confirm I have seen it via a pop-up so there is an audit that I have seen the notification and take necessary action.
7. As a member of the Finance team, I want to be notified of a newly added property so I can ensure that the relevant charges are applied.
8 .As a member of the Finance team, I want to be notified of a newly added tenure so that I can ensure that the appropriate tenure charges are applied.
9. As a member of the Finance team, I want to be notified of a pending Suspense Account transfer and be able to confirm I have seen it via a pop-up so there is an audit that I have seen the notification and take necessary action.
10. As a repairs manager, I want to be notified of a work order pending variation approval, so I know to approve it.
11. As a repairs contractor, I want to be notified when a work order is approved, so I know to proceed with the work
12. As a DLO supervisor, I want to be notified when a work order requires follow on work, so I know to raise a new work order
13. As an RCC supervisor, I want to be notified of a high cost authorisation pending approval, so I know to approve it.
14. As a resident, I want to be informed when a communal component (e.g lifts, boilers) goes out of service and its repair status
15. As a resident, I want to be reminded when a visit is due to take place to ensure I’m at home
16. As a resident, I want to be notified that a satisfaction survey is available at the end of certain activities (e.g. repair, gas servicing, new tenancy created)
17. As a resident, I want to be notified when a work team cannot access my property, so I know to make it accessible*
18. As a Finance team/Repairs Team, I want to be notified when a property is involved in a legal disrepair action
19. As a Finance officer, I want to be notified that there is court action underway, 
20. As a Finance officer, I want to be notified if an account is paid off so that the case can be closed
21. As an officer , I want to be notified of the death of a tenant so that due process may apply. 
22. As a Tenant/Leaseholder I want to be notified/reminded of process activities that require my attention to completed so that i can take the necessary action.
23. All workstreams: I want to be notified when I am due to make a visit so that I can schedule a visit, 
24. As a housing officer, I want to be notified when a new cautionary contact record is entered for the property if I’m due to visit that property so that I can take the necessary precautions.
25. As an officer/Manager, I want to be notified when certain thresholds are passed within processes (e.g. no update to a housing management process in 2 weeks),as well as presenting this in the work tray, so that I can be kept updated without visiting the worktray.
26. As a housing officer, I want to be notified that a household has a member who is subject to  cautionary contact so I can take the necessary precautions.
27. As a Developer, I would like to be able to receive and save the notification information to DB,
28. As a Developer I would like to display all notification request
29. As a Developer I would like to update the record with user  actions.
30. As a Developer I would like to send feedback to the relevant service that sent the notification.
31. As a developer, I want to have an interface to manage sending notifications so that I can focus on implementing my code and not worry about how to handle customer notifications.

## Endpoints to be created
1. POST **/notifications**

    **Function:** Creates a notification and sends via Gov Uk Notify

	**Request Payload:**
    ```
    {
        “targetId”:”7e6041e2-01b6-4c41-9ccd-5b0932616b50”,
        “targetType”:”FailedDirectDebits,MissedServiceChargePayments,Estimates,Actuals”, 
        “notificationType”:”Screen,Email, Text, Letter”,
        “user”:”test.user@hackney.gov.uk”,
        “message”: “3 missed service charge payments have exceeded the tolerance period”,
        “serviceKey” : “sample-15f6815b-....”,  // required except for screen notifications
        “templateId” : “c6a75cc9-1193-...” // required except for screen notifications
        “mobileNumber”:”0123 456 7890”, // required if notificationType is Text
        “email”:”test@example.com”, // required if notificationType is Email
        "personalisationParams": // dynamic but must match the template requirements on gov notify
        {
            "name": "value",
            "name": "value",
            “firstName” : “Joe”,
            “lastName” : ”Bloggs”,
            “addressLine1” : ””,  // at least 3 address lines are required
            “addressLine2” : ””,
            “addressLine3” : ””,
            “addressLine4” : ””,
            “addressLine5” : ””,
            “addressLine6” : ””,
            “addressLine7” : ””
        },
        “requireAction”: “true”,
        “requireEmailNotification”: false,
        “requireSmsNotification”: false,
        “requireLetter”: false
    }
    ```

2. GET **/notifications?notificationType=[Screen, Email, Text]&targetId=[targetId]**

    **Function:** Gets a set of notifications for a particular channel (eg. screen) and target type

    **Response Payload:**
    ```
    [
        {
            "id": "2adbbec5-cf23-414d-beb3-e6d07968e7b9",
            "targetId": "Ida1029365-62b1-42e4-b71f-3793ac6ea48f",
            "targetType": "FailedDirectDebits",
            "notificationType": "Screen",
            "user": null,
            "message": "Direct Debit failed",
            "serviceKey": null,
            "templateId": null,
            "mobileNumber": "09887673562",
            "email": "test@test.com",
            "requireAction": false,
            "requireEmailNotification": false,
            "requireSmsNotification": false,
            "requireLetter": false,
            "isReadStatus": false,
            "sentMessageDetails": null,
            "actionNote": null,
            "performedActionDoneBy": null,
            "performedActionType": null,
            "isRemovable": true,
            "personalisationParams": 
            {
                "firstName": "First Name",
                "lastName": "Last Name",
                "city": "city"
            },
            "performedActionDate": null,
            "createdDate": "2021-11-12T10:19:45.6224673Z"
        }
    ]
    ```
3. GET **/message-status/{service}/{notificationId}**
    **Function:** Gets the status of a message sent within the retention period (7 days)
    **Response Payload**
    ```
    {
        "id": "76ebfdb5-c4d6-41a4-974b-67daf74028e3",
        "completedAt": "2021-11-12T17:27:47.917033Z",
        "emailAddress": "edward.anoghena@nudgedigital.co.uk",
        "body": "Message",
        "subject": "Welcome",
        "line1": null,
        "line2": null,
        "line3": null,
        "line4": null,
        "line5": null,
        "line6": null,
        "phoneNumber": null,
        "postage": null,
        "reference": null,
        "sentAt": "2021-11-12T17:27:47.869406Z",
        "status": "delivered",
        "type": "email",
        "createdByName": null,
        "template": 
        {
            "id": "9500a44b-8a7f-4fff-a3b8-45763f84874e",
            "path": "https://api.notifications.service.gov.uk/v2/template/9500a44b-8a7f-4fff-a3b8-45763f84874e/version/1",
            "version": 1
        }
    }
    ```

5. PATCH **/notifications/{id}**
    **Function:** Updates the action details of a notification
    **Request Payload:**
    ```
    {
        “id”:”7e6041e2-01b6-4c41-9ccd-5b0932616b50”,
        “actionType”: “Initiated, Approved, Validate, Rejected, IsRead”,
        “actionNote”:””
    }
    ```
6. DELETE **/notifications/{id}**
    **Function:** Deletes the specified notification

## Other considerations
- General consideration for how we treat personal information included in processes that were not completed/orphaned.
- Some sort of service governance API to check when systems don’t meet specified guidelines and use the notifications service for example to alert users.
- We should consider throttling this service to prevent spamming. 
- Include sending emails with attachments
- Additional considerations on how documents should be managed.
    - Build PDFs that will then be sent to Notify 
    - Arrange for those PDFs to be stored - e.g. in the Document Store
    - Return the Document Store UID to be recorded against the appropriate record (the same as the content emails and SMSs)


## Dependent Entities
- Tenants & Leaseholders
- Income Services
- Revenue & Benefits
