---
title: Production Environment Tools & PII Handling
sidebar_position: 1
---

# Production Environment Tools & PII Handling
# 1. Purpose

This standard defines minimum security and privacy expectations for developers when using third-party tools (like Postman) to access Hackney’s production environments or interact with Personally Identifiable Information (PII).

The goal is to reduce the risk of exposing sensitive resident data through insecure or inappropriate tooling.

# 2. Scope

Applies to all Hackney Council staff, contractors, and third parties who access production environments or handle production data containing PII.

Covers all development, testing, debugging, or API interaction tools used in production contexts.

# 3. Requirements

## Tool Usage in Production Environments

### Prohibited Use of Unvetted Tools

Developers **must not** use third-party tools to access production environments or handle production PII unless they have a clear and documented understanding of how the tool manages, stores, and transmits data, and are satisfied that its use aligns with Hackney’s security and data protection standards.

Where a new tool is approved for use, supporting evidence of this assessment **must** be recorded in the [Hackney Service Catalogue](https://docs.google.com/spreadsheets/d/1QoinQ9Yvlr4gvUoROYAA8vDWOWyXw7-vokZmPEH296A/edit?gid=1633075159#gid=1633075159) in columns Q to U.

### Approval Process for New Tools

Before using any new tool in a production environment — particularly where it may interact with PII — developers **must** complete the [Developer Tool Assessment Checklist](https://forms.gle/j9fWxAHvHdMrZ8wq8).

Once the checklist is submitted:

- The developer **must** notify the Head of Engineering, who will review the responses for overall suitability.
- If the tool is approved, the developer **must** add it to the [Hackney Service Catalogue](https://docs.google.com/spreadsheets/d/1QoinQ9Yvlr4gvUoROYAA8vDWOWyXw7-vokZmPEH296A/edit?gid=1633075159#gid=1633075159) along with all supporting evidence, such as privacy policies, configuration screenshots, or network behavior logs. This is so that its use is documented and visible to relevant teams.

### Assessment Criteria for Tool Approval

When assessing a tool for use in production environments with PII, the following minimum requirements apply:

1. The tool **must not** store request or response data in external or cloud environments unless this has been formally reviewed and approved.
2. If the tool stores data locally, it **must** provide controls to securely manage and delete this data.
3. The tool **must** encrypt data in transit (e.g. using HTTPS/TLS) when communicating with production systems.
4. If the tool stores data at rest (locally or remotely), it **must** use encryption for that stored data.
5. The tool **must not** retain sensitive data longer than necessary for the task being performed. Where the tool is cloud-based or connects to external services, it **must** provide a clear and accessible privacy policy explaining data retention periods, storage locations and third party access.
6. The tool **must** provide mechanisms to restrict access to sensitive data, such as user authentication and role-based access control, especially for tools used by multiple developers in differing teams.
7. Where the tool collects telemetry, usage data, or analytics, this functionality **must** be disabled.
   - If this is not possible, the tool **must** be reviewed and approved before use with production systems or data.
8. Where audit logging exists within a tool, logging of sensitive data (such as request and response bodies) **must** be disabled.
   - If this is not possible, the tool **must** be reviewed and approved before use with production systems or data.

# Communication and Developer Awareness

## Responsibility for Communication

The Head of Engineering **must** ensure this standard is communicated across all development teams, including internal staff, contractors, and third-party developers.

# Appendix A - Example: Postman

## Risk Summary

Postman automatically stores API request and response data locally and in the cloud (depending on settings), including headers, parameters, and body content that may contain PII.

| Tool    | Risk Description                                                                                                                               | Assessment                         |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| Postman | Persistent storage of API requests, headers, and bodies by default. Risk of exposing PII locally or to Postman’s cloud infrastructure.         | Not approved for use with production PII |

This result would then be recorded in the [Risk Log](https://docs.google.com/spreadsheets/d/1UGbxoImySTqDLUWc1Ifbp61iN3uLjfRBaK4lvyZ55Bo/edit?gid=0#gid=0)
