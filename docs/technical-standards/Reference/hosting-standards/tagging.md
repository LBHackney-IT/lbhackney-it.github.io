# Tagging

We will tag all AWS objects, so we know they have a purpose and have a defined owner to manage cost, maintenance and support.

## What must be in place

1. All objects in our cloud hosting providers (primarily AWS) *must* be tagged in line with the requirements set out below.

To ensure we can consistently search for, and report on, the tags we use, you should use the following tags. In all cases, only use acronyms if you’re confident that someone from another part of the council would understand them. If in doubt, avoid acronyms and use the full term.

### Mandatory tags

- `Application`: The full name of the application or service. This should match the name used in the Service Catalogue, e.g.  `Repairs Hub`, `Common Fate`.
- `TeamEmail`: The email address of the team responsible for the operation of the service. Must be a valid email group, not an individual.
- `Environment`: The name of the environment, must be one of `dev`, `stg`, `prod`, `pre-prod` or `mgmt`[^environment-tags-source].

### Mandatory tags for data-holding resources

The following potentially data-holding resources must have the `Confidentiality` tag:
- EC2 instance
- EBS volume
- RDS instance
- RDS cluster
- DynamoDB table
You will not be able to deploy the above resources if they are not tagged with the Confidentiality tag. 
- `Confidentiality`: Data confidentiality of the infrastructure. Must be one of `Internal`, `Restricted`, or `Public`.

### Optional tags

- `AutomationBuildUrl`: URL of the automation build, must be a valid URL.
- `BackupPolicy`: The backup policy to apply to the resource. If present must be one of `Dev`, `Stg`, `Prod`.
- `Confidentiality`: Data confidentiality of the infrastructure. Only mandatory for infrastructure which holds data, e.g. EC2, RDS, EBS, DynamoDB, Glue, and S3. Optional for all other infrastructure. Must be one of `Internal`, `Restricted`, or `Public`[^confidentiality-tags-source].
- `Department`: The service area this system serves.
- `WeekendShutdown`: If present, regardless of the value provided the resource will be shut down over the weekend.
- `OutOfHoursShutdown`: If present, regardless of the value provided the resource will be shut down out of working hours.

## Monitoring

The user creating the object will be notified when an object is untagged with increasing urgency.

## Resolution/Escalation if the baseline isn't met

1. Creation of untagged objects will be prevented by technical controls where possible.
2. Newly created untagged objects will be forcefully and automatically shutdown/disabled if they remain untagged for 7 calendar days.
3. Existing untagged objects will not be editable until the mandatory tags have been added.

## More information

See the [How to tag your infrastructure](../../How-to%20guides/tagging.md) guide.

[^confidentiality-tags-source]: https://github.com/LBHackney-IT/aws-tags-lbh/blob/main/variables.tf#L83
[^environment-tags-source]: https://github.com/LBHackney-IT/aws-tags-lbh/blob/main/variables.tf#L150
