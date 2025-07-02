# Shared

Types:

- <code><a href="./src/resources/shared.ts">PageInfo</a></code>

# Templates

Types:

- <code><a href="./src/resources/templates.ts">ChatTemplate</a></code>
- <code><a href="./src/resources/templates.ts">EmailTemplate</a></code>
- <code><a href="./src/resources/templates.ts">InAppFeedTemplate</a></code>
- <code><a href="./src/resources/templates.ts">PushTemplate</a></code>
- <code><a href="./src/resources/templates.ts">RequestTemplate</a></code>
- <code><a href="./src/resources/templates.ts">SMSTemplate</a></code>
- <code><a href="./src/resources/templates.ts">WebhookTemplate</a></code>

# EmailLayouts

Types:

- <code><a href="./src/resources/email-layouts.ts">EmailLayout</a></code>
- <code><a href="./src/resources/email-layouts.ts">EmailLayoutUpsertResponse</a></code>
- <code><a href="./src/resources/email-layouts.ts">EmailLayoutValidateResponse</a></code>

Methods:

- <code title="get /v1/email_layouts/{email_layout_key}">client.emailLayouts.<a href="./src/resources/email-layouts.ts">retrieve</a>(emailLayoutKey, { ...params }) -> EmailLayout</code>
- <code title="get /v1/email_layouts">client.emailLayouts.<a href="./src/resources/email-layouts.ts">list</a>({ ...params }) -> EmailLayoutsEntriesCursor</code>
- <code title="put /v1/email_layouts/{email_layout_key}">client.emailLayouts.<a href="./src/resources/email-layouts.ts">upsert</a>(emailLayoutKey, { ...params }) -> EmailLayoutUpsertResponse</code>
- <code title="put /v1/email_layouts/{email_layout_key}/validate">client.emailLayouts.<a href="./src/resources/email-layouts.ts">validate</a>(emailLayoutKey, { ...params }) -> EmailLayoutValidateResponse</code>

# Commits

Types:

- <code><a href="./src/resources/commits.ts">Commit</a></code>
- <code><a href="./src/resources/commits.ts">CommitCommitAllResponse</a></code>
- <code><a href="./src/resources/commits.ts">CommitPromoteAllResponse</a></code>
- <code><a href="./src/resources/commits.ts">CommitPromoteOneResponse</a></code>

Methods:

- <code title="get /v1/commits/{id}">client.commits.<a href="./src/resources/commits.ts">retrieve</a>(id) -> Commit</code>
- <code title="get /v1/commits">client.commits.<a href="./src/resources/commits.ts">list</a>({ ...params }) -> CommitsEntriesCursor</code>
- <code title="put /v1/commits">client.commits.<a href="./src/resources/commits.ts">commitAll</a>({ ...params }) -> CommitCommitAllResponse</code>
- <code title="put /v1/commits/promote">client.commits.<a href="./src/resources/commits.ts">promoteAll</a>({ ...params }) -> CommitPromoteAllResponse</code>
- <code title="put /v1/commits/{id}/promote">client.commits.<a href="./src/resources/commits.ts">promoteOne</a>(id) -> CommitPromoteOneResponse</code>

# Partials

Types:

- <code><a href="./src/resources/partials.ts">Partial</a></code>
- <code><a href="./src/resources/partials.ts">PartialUpsertResponse</a></code>
- <code><a href="./src/resources/partials.ts">PartialValidateResponse</a></code>

Methods:

- <code title="get /v1/partials/{partial_key}">client.partials.<a href="./src/resources/partials.ts">retrieve</a>(partialKey, { ...params }) -> Partial</code>
- <code title="get /v1/partials">client.partials.<a href="./src/resources/partials.ts">list</a>({ ...params }) -> PartialsEntriesCursor</code>
- <code title="put /v1/partials/{partial_key}">client.partials.<a href="./src/resources/partials.ts">upsert</a>(partialKey, { ...params }) -> PartialUpsertResponse</code>
- <code title="put /v1/partials/{partial_key}/validate">client.partials.<a href="./src/resources/partials.ts">validate</a>(partialKey, { ...params }) -> PartialValidateResponse</code>

# Translations

Types:

- <code><a href="./src/resources/translations.ts">Translation</a></code>
- <code><a href="./src/resources/translations.ts">TranslationRetrieveResponse</a></code>
- <code><a href="./src/resources/translations.ts">TranslationUpsertResponse</a></code>
- <code><a href="./src/resources/translations.ts">TranslationValidateResponse</a></code>

Methods:

- <code title="get /v1/translations/{locale_code}">client.translations.<a href="./src/resources/translations.ts">retrieve</a>(localeCode, { ...params }) -> TranslationRetrieveResponse</code>
- <code title="get /v1/translations">client.translations.<a href="./src/resources/translations.ts">list</a>({ ...params }) -> TranslationsEntriesCursor</code>
- <code title="put /v1/translations/{locale_code}">client.translations.<a href="./src/resources/translations.ts">upsert</a>(localeCode, { ...params }) -> TranslationUpsertResponse</code>
- <code title="put /v1/translations/{locale_code}/validate">client.translations.<a href="./src/resources/translations.ts">validate</a>(localeCode, { ...params }) -> TranslationValidateResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">Condition</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">ConditionGroup</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">Duration</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">SendWindow</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">Workflow</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowBatchStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowBranchStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowChannelStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowDelayStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowFetchStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowThrottleStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowTriggerWorkflowStep</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowActivateResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRunResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowUpsertResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowValidateResponse</a></code>

Methods:

- <code title="get /v1/workflows/{workflow_key}">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieve</a>(workflowKey, { ...params }) -> Workflow</code>
- <code title="get /v1/workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> WorkflowsEntriesCursor</code>
- <code title="put /v1/workflows/{workflow_key}/activate">client.workflows.<a href="./src/resources/workflows/workflows.ts">activate</a>(workflowKey, { ...params }) -> WorkflowActivateResponse</code>
- <code title="put /v1/workflows/{workflow_key}/run">client.workflows.<a href="./src/resources/workflows/workflows.ts">run</a>(workflowKey, { ...params }) -> WorkflowRunResponse</code>
- <code title="put /v1/workflows/{workflow_key}">client.workflows.<a href="./src/resources/workflows/workflows.ts">upsert</a>(workflowKey, { ...params }) -> WorkflowUpsertResponse</code>
- <code title="put /v1/workflows/{workflow_key}/validate">client.workflows.<a href="./src/resources/workflows/workflows.ts">validate</a>(workflowKey, { ...params }) -> WorkflowValidateResponse</code>

## Steps

Types:

- <code><a href="./src/resources/workflows/steps.ts">StepPreviewTemplateResponse</a></code>

Methods:

- <code title="post /v1/workflows/{workflow_key}/steps/{step_ref}/preview_template">client.workflows.steps.<a href="./src/resources/workflows/steps.ts">previewTemplate</a>(stepRef, { ...params }) -> StepPreviewTemplateResponse</code>

# MessageTypes

Types:

- <code><a href="./src/resources/message-types.ts">MessageType</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeTextField</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeVariant</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeUpsertResponse</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeValidateResponse</a></code>

Methods:

- <code title="get /v1/message_types/{message_type_key}">client.messageTypes.<a href="./src/resources/message-types.ts">retrieve</a>(messageTypeKey, { ...params }) -> MessageType</code>
- <code title="get /v1/message_types">client.messageTypes.<a href="./src/resources/message-types.ts">list</a>({ ...params }) -> MessageTypesEntriesCursor</code>
- <code title="put /v1/message_types/{message_type_key}">client.messageTypes.<a href="./src/resources/message-types.ts">upsert</a>(messageTypeKey, { ...params }) -> MessageTypeUpsertResponse</code>
- <code title="put /v1/message_types/{message_type_key}/validate">client.messageTypes.<a href="./src/resources/message-types.ts">validate</a>(messageTypeKey, { ...params }) -> MessageTypeValidateResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthVerifyResponse</a></code>

Methods:

- <code title="get /v1/whoami">client.auth.<a href="./src/resources/auth.ts">verify</a>() -> AuthVerifyResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyExchangeResponse</a></code>

Methods:

- <code title="post /v1/api_keys/exchange">client.apiKeys.<a href="./src/resources/api-keys.ts">exchange</a>({ ...params }) -> APIKeyExchangeResponse</code>

# ChannelGroups

Types:

- <code><a href="./src/resources/channel-groups.ts">ChannelGroup</a></code>
- <code><a href="./src/resources/channel-groups.ts">ChannelGroupRule</a></code>

Methods:

- <code title="get /v1/channel_groups">client.channelGroups.<a href="./src/resources/channel-groups.ts">list</a>({ ...params }) -> ChannelGroupsEntriesCursor</code>

# Channels

Types:

- <code><a href="./src/resources/channels.ts">Channel</a></code>
- <code><a href="./src/resources/channels.ts">ChatChannelSettings</a></code>
- <code><a href="./src/resources/channels.ts">EmailChannelSettings</a></code>
- <code><a href="./src/resources/channels.ts">InAppFeedChannelSettings</a></code>
- <code><a href="./src/resources/channels.ts">PushChannelSettings</a></code>
- <code><a href="./src/resources/channels.ts">SMSChannelSettings</a></code>

Methods:

- <code title="get /v1/channels">client.channels.<a href="./src/resources/channels.ts">list</a>({ ...params }) -> ChannelsEntriesCursor</code>

# Environments

Types:

- <code><a href="./src/resources/environments.ts">Environment</a></code>

Methods:

- <code title="get /v1/environments/{environment_slug}">client.environments.<a href="./src/resources/environments.ts">retrieve</a>(environmentSlug) -> Environment</code>
- <code title="get /v1/environments">client.environments.<a href="./src/resources/environments.ts">list</a>({ ...params }) -> EnvironmentsEntriesCursor</code>

# Variables

Types:

- <code><a href="./src/resources/variables.ts">Variable</a></code>

Methods:

- <code title="get /v1/variables">client.variables.<a href="./src/resources/variables.ts">list</a>({ ...params }) -> VariablesEntriesCursor</code>

# Guides

Types:

- <code><a href="./src/resources/guides.ts">Guide</a></code>
- <code><a href="./src/resources/guides.ts">GuideActivationLocationRule</a></code>
- <code><a href="./src/resources/guides.ts">GuideStep</a></code>
- <code><a href="./src/resources/guides.ts">GuideActivateResponse</a></code>
- <code><a href="./src/resources/guides.ts">GuideUpsertResponse</a></code>
- <code><a href="./src/resources/guides.ts">GuideValidateResponse</a></code>

Methods:

- <code title="get /v1/guides/{guide_key}">client.guides.<a href="./src/resources/guides.ts">retrieve</a>(guideKey, { ...params }) -> Guide</code>
- <code title="get /v1/guides">client.guides.<a href="./src/resources/guides.ts">list</a>({ ...params }) -> GuidesEntriesCursor</code>
- <code title="put /v1/guides/{guide_key}/activate">client.guides.<a href="./src/resources/guides.ts">activate</a>(guideKey, { ...params }) -> GuideActivateResponse</code>
- <code title="put /v1/guides/{guide_key}">client.guides.<a href="./src/resources/guides.ts">upsert</a>(guideKey, { ...params }) -> GuideUpsertResponse</code>
- <code title="put /v1/guides/{guide_key}/validate">client.guides.<a href="./src/resources/guides.ts">validate</a>(guideKey, { ...params }) -> GuideValidateResponse</code>
