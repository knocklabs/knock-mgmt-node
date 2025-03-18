# EmailLayouts

Types:

- <code><a href="./src/resources/email-layouts.ts">EmailLayout</a></code>
- <code><a href="./src/resources/email-layouts.ts">EmailLayoutListResponse</a></code>
- <code><a href="./src/resources/email-layouts.ts">EmailLayoutUpsertResponse</a></code>
- <code><a href="./src/resources/email-layouts.ts">EmailLayoutValidateResponse</a></code>

Methods:

- <code title="get /v1/email_layouts/{email_layout_key}">client.emailLayouts.<a href="./src/resources/email-layouts.ts">retrieve</a>(emailLayoutKey, { ...params }) -> EmailLayout</code>
- <code title="get /v1/email_layouts">client.emailLayouts.<a href="./src/resources/email-layouts.ts">list</a>({ ...params }) -> EmailLayoutListResponse</code>
- <code title="put /v1/email_layouts/{email_layout_key}">client.emailLayouts.<a href="./src/resources/email-layouts.ts">upsert</a>(emailLayoutKey, { ...params }) -> EmailLayoutUpsertResponse</code>
- <code title="put /v1/email_layouts/{email_layout_key}/validate">client.emailLayouts.<a href="./src/resources/email-layouts.ts">validate</a>(emailLayoutKey, { ...params }) -> EmailLayoutValidateResponse</code>

# Commits

Types:

- <code><a href="./src/resources/commits.ts">CommitRetrieveResponse</a></code>
- <code><a href="./src/resources/commits.ts">CommitListResponse</a></code>
- <code><a href="./src/resources/commits.ts">CommitCommitAllResponse</a></code>
- <code><a href="./src/resources/commits.ts">CommitPromoteAllResponse</a></code>
- <code><a href="./src/resources/commits.ts">CommitPromoteOneResponse</a></code>

Methods:

- <code title="get /v1/commits/{id}">client.commits.<a href="./src/resources/commits.ts">retrieve</a>(id) -> CommitRetrieveResponse</code>
- <code title="get /v1/commits">client.commits.<a href="./src/resources/commits.ts">list</a>({ ...params }) -> CommitListResponse</code>
- <code title="put /v1/commits">client.commits.<a href="./src/resources/commits.ts">commitAll</a>({ ...params }) -> CommitCommitAllResponse</code>
- <code title="put /v1/commits/promote">client.commits.<a href="./src/resources/commits.ts">promoteAll</a>({ ...params }) -> CommitPromoteAllResponse</code>
- <code title="put /v1/commits/{id}/promote">client.commits.<a href="./src/resources/commits.ts">promoteOne</a>(id) -> CommitPromoteOneResponse</code>

# Partials

Types:

- <code><a href="./src/resources/partials.ts">PartialRetrieveResponse</a></code>
- <code><a href="./src/resources/partials.ts">PartialListResponse</a></code>
- <code><a href="./src/resources/partials.ts">PartialUpsertResponse</a></code>
- <code><a href="./src/resources/partials.ts">PartialValidateResponse</a></code>

Methods:

- <code title="get /v1/partials/{partial_key}">client.partials.<a href="./src/resources/partials.ts">retrieve</a>(partialKey, { ...params }) -> PartialRetrieveResponse</code>
- <code title="get /v1/partials">client.partials.<a href="./src/resources/partials.ts">list</a>({ ...params }) -> PartialListResponse</code>
- <code title="put /v1/partials/{partial_key}">client.partials.<a href="./src/resources/partials.ts">upsert</a>(partialKey, { ...params }) -> PartialUpsertResponse</code>
- <code title="put /v1/partials/{partial_key}/validate">client.partials.<a href="./src/resources/partials.ts">validate</a>(partialKey, { ...params }) -> PartialValidateResponse</code>

# Translations

Types:

- <code><a href="./src/resources/translations.ts">TranslationRetrieveResponse</a></code>
- <code><a href="./src/resources/translations.ts">TranslationListResponse</a></code>
- <code><a href="./src/resources/translations.ts">TranslationUpsertResponse</a></code>
- <code><a href="./src/resources/translations.ts">TranslationValidateResponse</a></code>

Methods:

- <code title="get /v1/translations/{locale_code}">client.translations.<a href="./src/resources/translations.ts">retrieve</a>(localeCode, { ...params }) -> TranslationRetrieveResponse</code>
- <code title="get /v1/translations">client.translations.<a href="./src/resources/translations.ts">list</a>({ ...params }) -> TranslationListResponse</code>
- <code title="put /v1/translations/{locale_code}">client.translations.<a href="./src/resources/translations.ts">upsert</a>(localeCode, { ...params }) -> TranslationUpsertResponse</code>
- <code title="put /v1/translations/{locale_code}/validate">client.translations.<a href="./src/resources/translations.ts">validate</a>(localeCode, { ...params }) -> TranslationValidateResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowActivateResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRunResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowUpsertResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowValidateResponse</a></code>

Methods:

- <code title="get /v1/workflows/{workflow_key}">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieve</a>(workflowKey, { ...params }) -> WorkflowRetrieveResponse</code>
- <code title="get /v1/workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> WorkflowListResponse</code>
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

- <code><a href="./src/resources/message-types.ts">MessageTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeListResponse</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeUpsertResponse</a></code>
- <code><a href="./src/resources/message-types.ts">MessageTypeValidateResponse</a></code>

Methods:

- <code title="get /v1/message_types/{message_type_key}">client.messageTypes.<a href="./src/resources/message-types.ts">retrieve</a>(messageTypeKey, { ...params }) -> MessageTypeRetrieveResponse</code>
- <code title="get /v1/message_types">client.messageTypes.<a href="./src/resources/message-types.ts">list</a>({ ...params }) -> MessageTypeListResponse</code>
- <code title="put /v1/message_types/{message_type_key}">client.messageTypes.<a href="./src/resources/message-types.ts">upsert</a>(messageTypeKey, { ...params }) -> MessageTypeUpsertResponse</code>
- <code title="put /v1/message_types/{message_type_key}/validate">client.messageTypes.<a href="./src/resources/message-types.ts">validate</a>(messageTypeKey, { ...params }) -> MessageTypeValidateResponse</code>

# Whoami

Types:

- <code><a href="./src/resources/whoami.ts">WhoamiVerifyResponse</a></code>

Methods:

- <code title="get /v1/whoami">client.whoami.<a href="./src/resources/whoami.ts">verify</a>() -> WhoamiVerifyResponse</code>
