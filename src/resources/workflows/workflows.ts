// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WorkflowsAPI from './workflows';
import * as ChannelsAPI from '../channels';
import * as Shared from '../shared';
import * as TemplatesAPI from '../templates';
import * as StepsAPI from './steps';
import { StepPreviewTemplateParams, StepPreviewTemplateResponse, Steps } from './steps';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Workflows extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

  /**
   * Retrieve a workflow by its key and namespace, in a given environment.
   */
  retrieve(
    workflowKey: string,
    query: WorkflowRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Workflow> {
    return this._client.get(path`/v1/workflows/${workflowKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of workflows available in a given environment. The
   * workflows are returned in alpha sorted order by its key.
   */
  list(query: WorkflowListParams, options?: RequestOptions): APIPromise<WorkflowListResponse> {
    return this._client.get('/v1/workflows', { query, ...options });
  }

  /**
   * Activates (or deactivates) a workflow in a given environment.
   *
   * Note: This immediately enables or disables a workflow in a given environment
   * without needing to go through environment promotion.
   */
  activate(
    workflowKey: string,
    params: WorkflowActivateParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowActivateResponse> {
    const { environment, ...body } = params;
    return this._client.put(path`/v1/workflows/${workflowKey}/activate`, {
      query: { environment },
      body,
      ...options,
    });
  }

  /**
   * Runs the latest version of a committed workflow in a given environment using the
   * params provided.
   */
  run(
    workflowKey: string,
    params: WorkflowRunParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowRunResponse> {
    const { environment, ...body } = params;
    return this._client.put(path`/v1/workflows/${workflowKey}/run`, {
      query: { environment },
      body,
      ...options,
    });
  }

  /**
   * Updates a workflow of a given key, or creates a new one if it does not yet
   * exist.
   *
   * Note: this endpoint only operates on workflows in the `development` environment.
   */
  upsert(
    workflowKey: string,
    params: WorkflowUpsertParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowUpsertResponse> {
    const { environment, commit, commit_message, ...body } = params;
    return this._client.put(path`/v1/workflows/${workflowKey}`, {
      query: { environment, commit, commit_message },
      body,
      ...options,
    });
  }

  /**
   * Validates a workflow payload without persisting it. Some read-only fields will
   * be empty as they are generated by the system when persisted.
   *
   * Note: Validating a workflow is only done in the development environment context.
   */
  validate(
    workflowKey: string,
    params: WorkflowValidateParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowValidateResponse> {
    const { environment, ...body } = params;
    return this._client.put(path`/v1/workflows/${workflowKey}/validate`, {
      query: { environment },
      body,
      ...options,
    });
  }
}

/**
 * A condition to be evaluated
 */
export interface Condition {
  /**
   * The operator to use in the evaluation of the condition.
   */
  operator:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'contains_all'
    | 'empty'
    | 'not_empty'
    | 'is_audience_member'
    | 'is_not_audience_member';

  /**
   * The variable to be evaluated. Variables can be either static values or dynamic
   * properties. Static values will always be JSON decoded so will support strings,
   * lists, objects, numbers, and booleans. Dynamic values should be path
   * expressions.
   */
  variable: string;

  /**
   * The argument to be evaluated. Arguments can be either static values or dynamic
   * properties. Static values will always be JSON decoded so will support strings,
   * lists, objects, numbers, and booleans. Dynamic values should be path
   * expressions.
   */
  argument?: string | null;
}

/**
 * A group of conditions to be evaluated
 */
export type ConditionGroup = ConditionGroup.ConditionGroupAllMatch | ConditionGroup.ConditionGroupAnyMatch;

export namespace ConditionGroup {
  /**
   * A group of conditions that must all be met.
   */
  export interface ConditionGroupAllMatch {
    all: Array<WorkflowsAPI.Condition>;
  }

  /**
   * A group of conditions that any must be met. Can contain nested alls.
   */
  export interface ConditionGroupAnyMatch {
    any: Array<WorkflowsAPI.Condition | ConditionGroupAnyMatch.ConditionGroupAllMatch>;
  }

  export namespace ConditionGroupAnyMatch {
    /**
     * A group of conditions that must all be met.
     */
    export interface ConditionGroupAllMatch {
      all: Array<WorkflowsAPI.Condition>;
    }
  }
}

/**
 * A duration of time, represented as a unit and a value.
 */
export interface Duration {
  unit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months';

  value: number;
}

/**
 * A send window time for a notification. Describes a single day.
 */
export interface SendWindow {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

  type: 'send' | 'do_not_send';

  from?: string | null;

  until?: string | null;
}

/**
 * A workflow object.
 */
export interface Workflow {
  /**
   * Whether the workflow is active in the current environment. (read-only)
   */
  active: boolean;

  /**
   * A timestamp of when the workflow was created. (read-only)
   */
  created_at: string;

  /**
   * The slug of the environment in which the workflow exists. (read-only)
   */
  environment: string;

  /**
   * The unique key string for the workflow object. Must be at minimum 3 characters
   * and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
   */
  key: string;

  /**
   * A name for the workflow. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * The SHA hash of the workflow data. (read-only)
   */
  sha: string;

  /**
   * A list of workflow step objects in the workflow, which may contain any of:
   * channel step, delay step, batch step, fetch step.
   */
  steps: Array<WorkflowStep>;

  /**
   * A timestamp of when the workflow was last updated. (read-only)
   */
  updated_at: string;

  /**
   * Whether the workflow and its steps are in a valid state. (read-only)
   */
  valid: boolean;

  /**
   * A list of categories that the workflow belongs to.
   */
  categories?: Array<string>;

  /**
   * A group of conditions to be evaluated
   */
  conditions?: ConditionGroup | null;

  /**
   * A timestamp of when the workflow was deleted. (read-only)
   */
  deleted_at?: string;

  /**
   * An arbitrary string attached to a workflow object. Useful for adding notes about
   * the workflow for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string;

  /**
   * A map of workflow settings.
   */
  settings?: Workflow.Settings;

  /**
   * A JSON schema for the expected structure of the workflow trigger's data payload.
   * Used to validate trigger requests. (optional)
   */
  trigger_data_json_schema?: Record<string, unknown>;

  /**
   * The frequency at which the workflow should be triggered. One of:
   * "once_per_recipient", "once_per_recipient_per_tenant", "every_trigger". Defaults
   * to "every_trigger".
   */
  trigger_frequency?: 'every_trigger' | 'once_per_recipient' | 'once_per_recipient_per_tenant';
}

export namespace Workflow {
  /**
   * A map of workflow settings.
   */
  export interface Settings {
    /**
     * Whether the workflow is commercial. Defaults to false.
     */
    is_commercial?: boolean;

    /**
     * Whether to ignore recipient preferences for a given type of notification. If
     * true, will send for every channel in the workflow even if the recipient has
     * opted out of a certain kind. Defaults to false.
     */
    override_preferences?: boolean;
  }
}

/**
 * A workflow batch step
 */
export interface WorkflowBatchStep {
  /**
   * An arbitrary string attached to a workflow step. Useful for adding notes about
   * the workflow for internal purposes.
   */
  description: string | null;

  /**
   * A name for the workflow step.
   */
  name: string;

  /**
   * The reference key of the workflow step. Must be unique per workflow.
   */
  ref: string;

  /**
   * The settings for the batch step.
   */
  settings: WorkflowBatchStep.Settings;

  /**
   * The type of the workflow step.
   */
  type: 'batch';
}

export namespace WorkflowBatchStep {
  /**
   * The settings for the batch step.
   */
  export interface Settings {
    /**
     * The execution mode of the batch step. One of: “accumulate” or “flush_leading”.
     * When set to “flush_leading”, the first item in the batch will be executed
     * immediately, and the rest will be batched.
     */
    batch_execution_mode?: 'accumulate' | 'flush_leading' | null;

    /**
     * The maximum number of batch items allowed in a batch. Between: 2 and 1000.
     */
    batch_items_max_limit?: number | null;

    /**
     * The maximum number of batch items allowed to be rendered into a template.
     * Between: 1 and 100. Defaults to 10.
     */
    batch_items_render_limit?: number | null;

    /**
     * The data property to use to batch notifications per recipient.
     */
    batch_key?: string | null;

    /**
     * The order describing whether to return the first or last ten batch items in the
     * activities variable. One of: “asc” or “desc”.
     */
    batch_order?: 'asc' | 'desc' | null;

    /**
     * The data path to resolve the batch window. The resolved value must be an
     * ISO-8601 timestamp.
     */
    batch_until_field_path?: string | null;

    /**
     * A duration of time, represented as a unit and a value.
     */
    batch_window?: WorkflowsAPI.Duration | null;

    /**
     * A duration of time, represented as a unit and a value.
     */
    batch_window_extension_limit?: WorkflowsAPI.Duration | null;

    /**
     * The type of the batch window used. One of: “fixed” or “sliding”.
     */
    batch_window_type?: 'fixed' | 'sliding' | null;
  }
}

/**
 * A branch step within a workflow.
 */
export interface WorkflowBranchStep {
  /**
   * A list of workflow branches to be evaluated.
   */
  branches: Array<WorkflowBranchStep.Branch>;

  description: string;

  name: string;

  ref: string;

  type: 'branch';
}

export namespace WorkflowBranchStep {
  export interface Branch {
    /**
     * A group of conditions to be evaluated
     */
    conditions?: WorkflowsAPI.ConditionGroup | null;

    name?: string;

    /**
     * A list of steps that will be executed if the branch is chosen.
     */
    steps?: Array<WorkflowsAPI.WorkflowStep>;

    /**
     * If the workflow should halt at the end of the branch.
     */
    terminates?: boolean;
  }
}

/**
 * A channel step within a workflow.
 */
export interface WorkflowChannelStep {
  /**
   * A name for the workflow step.
   */
  name: string;

  /**
   * The reference key of the workflow step. Must be unique per workflow.
   */
  ref: string;

  /**
   * The message template set up with the channel step. The shape of the template
   * depends on the type of the channel you'll be sending to. See below for
   * definitions of each channel type template: email, in-app, SMS, push, chat, and
   * webhook.
   */
  template:
    | TemplatesAPI.EmailTemplate
    | TemplatesAPI.InAppFeedTemplate
    | TemplatesAPI.SMSTemplate
    | TemplatesAPI.PushTemplate
    | TemplatesAPI.ChatTemplate
    | TemplatesAPI.WebhookTemplate;

  /**
   * The type of the workflow step.
   */
  type: 'channel';

  /**
   * The key of the channel group to which the channel step will be sending a
   * notification. A channel step can have either a channel key or a channel group
   * key, but not both.
   */
  channel_group_key?: string | null;

  /**
   * The key of the channel to which the channel step will be sending a notification.
   * A channel step can have either a channel key or a channel group key, but not
   * both.
   */
  channel_key?: string | null;

  /**
   * A map of channel overrides for the channel step.
   */
  channel_overrides?:
    | ChannelsAPI.EmailChannelSettings
    | ChannelsAPI.InAppFeedChannelSettings
    | ChannelsAPI.SMSChannelSettings
    | ChannelsAPI.PushChannelSettings
    | ChannelsAPI.ChatChannelSettings
    | null;

  /**
   * A group of conditions to be evaluated
   */
  conditions?: ConditionGroup | null;

  /**
   * An arbitrary string attached to a workflow step. Useful for adding notes about
   * the workflow for internal purposes.
   */
  description?: string | null;

  /**
   * A list of send window objects. Must include one send window object per day of
   * the week.
   */
  send_windows?: Array<SendWindow> | null;
}

/**
 * A delay step within a workflow.
 */
export interface WorkflowDelayStep {
  /**
   * A group of conditions to be evaluated
   */
  conditions: ConditionGroup | null;

  /**
   * An arbitrary string attached to a workflow step. Useful for adding notes about
   * the workflow for internal purposes.
   */
  description: string | null;

  /**
   * A name for the workflow step.
   */
  name: string;

  /**
   * The reference key of the workflow step. Must be unique per workflow.
   */
  ref: string;

  /**
   * The settings for the delay step. Both fields can be set to compute a delay where
   * `delay_for` is an offset from the `delay_until_field_path`.
   */
  settings: WorkflowDelayStep.Settings;

  /**
   * The type of the workflow step.
   */
  type: 'delay';
}

export namespace WorkflowDelayStep {
  /**
   * The settings for the delay step. Both fields can be set to compute a delay where
   * `delay_for` is an offset from the `delay_until_field_path`.
   */
  export interface Settings {
    /**
     * A duration of time, represented as a unit and a value.
     */
    delay_for?: WorkflowsAPI.Duration | null;

    /**
     * When set will use the path to resolve the delay into a timestamp from the
     * property referenced
     */
    delay_until_field_path?: string;
  }
}

/**
 * A workflow fetch step
 */
export interface WorkflowFetchStep {
  /**
   * A name for the workflow step.
   */
  name: string;

  /**
   * The reference key of the workflow step. Must be unique per workflow.
   */
  ref: string;

  /**
   * A request template.
   */
  settings: TemplatesAPI.RequestTemplate;

  /**
   * The type of the workflow step.
   */
  type: 'fetch';

  /**
   * A group of conditions to be evaluated
   */
  conditions?: ConditionGroup | null;

  /**
   * An arbitrary string attached to a workflow step. Useful for adding notes about
   * the workflow for internal purposes.
   */
  description?: string | null;
}

/**
 * A step within a workflow. All workflow steps, regardless of its type, share a
 * common set of core attributes (`type`, `ref`, `name`, `description`,
 * `conditions`).
 */
export type WorkflowStep =
  | WorkflowChannelStep
  | WorkflowDelayStep
  | WorkflowBatchStep
  | WorkflowFetchStep
  | WorkflowThrottleStep
  | WorkflowBranchStep
  | WorkflowTriggerWorkflowStep;

/**
 * A workflow throttle step
 */
export interface WorkflowThrottleStep {
  /**
   * A name for the workflow step.
   */
  name: string;

  /**
   * The reference key of the workflow step. Must be unique per workflow.
   */
  ref: string;

  /**
   * The settings for the throttle step.
   */
  settings: WorkflowThrottleStep.Settings;

  /**
   * The type of the workflow step.
   */
  type: 'throttle';

  /**
   * A group of conditions to be evaluated
   */
  conditions?: ConditionGroup | null;

  /**
   * An arbitrary string attached to a workflow step. Useful for adding notes about
   * the workflow for internal purposes.
   */
  description?: string | null;
}

export namespace WorkflowThrottleStep {
  /**
   * The settings for the throttle step.
   */
  export interface Settings {
    /**
     * The data property to use to throttle notifications per recipient.
     */
    throttle_key?: string | null;

    /**
     * The maximum number of workflows to allow within the duration window. Defaults
     * to 1.
     */
    throttle_limit?: number | null;

    /**
     * A duration of time, represented as a unit and a value.
     */
    throttle_window?: WorkflowsAPI.Duration | null;

    /**
     * The data path to resolve the throttle window. The resolved value must be an
     * ISO-8601 timestamp.
     */
    throttle_window_field_path?: string | null;
  }
}

/**
 * A workflow trigger workflow step.
 */
export interface WorkflowTriggerWorkflowStep {
  /**
   * A name for the workflow step.
   */
  name: string;

  /**
   * The reference key of the workflow step. Must be unique per workflow.
   */
  ref: string;

  /**
   * The settings for the workflow trigger workflow step.
   */
  settings: WorkflowTriggerWorkflowStep.Settings;

  /**
   * The type of the workflow step.
   */
  type: 'trigger_workflow';

  /**
   * A group of conditions to be evaluated
   */
  conditions?: ConditionGroup | null;

  /**
   * A description for the workflow step.
   */
  description?: string;
}

export namespace WorkflowTriggerWorkflowStep {
  /**
   * The settings for the workflow trigger workflow step.
   */
  export interface Settings {
    /**
     * The actor to trigger the workflow with. Supports liquid.
     */
    actor?: string;

    /**
     * The cancellation key to trigger the workflow with. Supports liquid.
     */
    cancellation_key?: string;

    /**
     * The data to be supplied to the workflow. Supports liquid.
     */
    data?: string;

    /**
     * The recipients or recipient to trigger the workflow for. Supports liquid.
     */
    recipients?: string;

    /**
     * The tenant to trigger the workflow with. Supports liquid.
     */
    tenant?: string;

    /**
     * The key of the workflow to trigger. Supports liquid.
     */
    workflow_key?: string;
  }
}

/**
 * A paginated list of Workflow. Contains a list of entries and page information.
 */
export interface WorkflowListResponse {
  entries: Array<Workflow>;

  /**
   * The information about a paginated result
   */
  page_info: Shared.PageInfo;
}

/**
 * Wraps the Workflow response under the workflow key.
 */
export interface WorkflowActivateResponse {
  /**
   * A workflow object.
   */
  workflow: Workflow;
}

/**
 * A response to a run workflow request.
 */
export interface WorkflowRunResponse {
  /**
   * The ID of the workflow run.
   */
  workflow_run_id: string;
}

/**
 * Wraps the Workflow response under the workflow key.
 */
export interface WorkflowUpsertResponse {
  /**
   * A workflow object.
   */
  workflow: Workflow;
}

/**
 * Wraps the Workflow response under the workflow key.
 */
export interface WorkflowValidateResponse {
  /**
   * A workflow object.
   */
  workflow: Workflow;
}

export interface WorkflowRetrieveParams {
  /**
   * A slug of the environment from which to query workflows.
   */
  environment: string;

  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export interface WorkflowListParams {
  /**
   * A slug of the environment from which to query workflows.
   */
  environment: string;

  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;

  /**
   * The number of entries to fetch
   */
  limit?: number;
}

export interface WorkflowActivateParams {
  /**
   * Query param: The environment slug. (Defaults to `development`.)
   */
  environment: string;

  /**
   * Body param: Whether to activate or deactivate the workflow. Set to “true” by
   * default, which will activate the workflow.
   */
  status: boolean;
}

export interface WorkflowRunParams {
  /**
   * Query param: The environment slug. (Defaults to `development`.)
   */
  environment: string;

  /**
   * Body param: A list of recipients to run the workflow for.
   */
  recipients: Array<string | WorkflowRunParams.UnionMember1>;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  actor?: string | WorkflowRunParams.UnionMember1 | null;

  /**
   * Body param: A key to cancel the workflow run.
   */
  cancellation_key?: string | null;

  /**
   * Body param: A map of data to be used in the workflow run.
   */
  data?: Record<string, unknown>;

  /**
   * Body param: The tenant to associate the workflow run with.
   */
  tenant?: string;
}

export namespace WorkflowRunParams {
  /**
   * An object reference
   */
  export interface UnionMember1 {
    id: string;

    collection: string;
  }

  /**
   * An object reference
   */
  export interface UnionMember1 {
    id: string;

    collection: string;
  }
}

export interface WorkflowUpsertParams {
  /**
   * Query param: A slug of the environment in which to upsert the workflow.
   */
  environment: string;

  /**
   * Body param: A workflow request for upserting a workflow.
   */
  workflow: WorkflowUpsertParams.Workflow;

  /**
   * Query param: Whether to commit the resource at the same time as modifying it
   */
  commit?: boolean;

  /**
   * Query param: The message to commit the resource with
   */
  commit_message?: string;
}

export namespace WorkflowUpsertParams {
  /**
   * A workflow request for upserting a workflow.
   */
  export interface Workflow {
    /**
     * A name for the workflow. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * A list of workflow step objects in the workflow, which may contain any of:
     * channel step, delay step, batch step, fetch step.
     */
    steps: Array<WorkflowsAPI.WorkflowStep>;

    /**
     * A list of categories that the workflow belongs to.
     */
    categories?: Array<string>;

    /**
     * A group of conditions to be evaluated
     */
    conditions?: WorkflowsAPI.ConditionGroup | null;

    /**
     * An arbitrary string attached to a workflow object. Useful for adding notes about
     * the workflow for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string;

    /**
     * A map of workflow settings.
     */
    settings?: Workflow.Settings;

    /**
     * A JSON schema for the expected structure of the workflow trigger's data payload.
     * Used to validate trigger requests. (optional)
     */
    trigger_data_json_schema?: Record<string, unknown>;

    /**
     * The frequency at which the workflow should be triggered. One of:
     * "once_per_recipient", "once_per_recipient_per_tenant", "every_trigger". Defaults
     * to "every_trigger".
     */
    trigger_frequency?: 'every_trigger' | 'once_per_recipient' | 'once_per_recipient_per_tenant';
  }

  export namespace Workflow {
    /**
     * A map of workflow settings.
     */
    export interface Settings {
      /**
       * Whether the workflow is commercial. Defaults to false.
       */
      is_commercial?: boolean;

      /**
       * Whether to ignore recipient preferences for a given type of notification. If
       * true, will send for every channel in the workflow even if the recipient has
       * opted out of a certain kind. Defaults to false.
       */
      override_preferences?: boolean;
    }
  }
}

export interface WorkflowValidateParams {
  /**
   * Query param: A slug of the environment in which to validate the workflow.
   */
  environment: string;

  /**
   * Body param: A workflow request for upserting a workflow.
   */
  workflow: WorkflowValidateParams.Workflow;
}

export namespace WorkflowValidateParams {
  /**
   * A workflow request for upserting a workflow.
   */
  export interface Workflow {
    /**
     * A name for the workflow. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * A list of workflow step objects in the workflow, which may contain any of:
     * channel step, delay step, batch step, fetch step.
     */
    steps: Array<WorkflowsAPI.WorkflowStep>;

    /**
     * A list of categories that the workflow belongs to.
     */
    categories?: Array<string>;

    /**
     * A group of conditions to be evaluated
     */
    conditions?: WorkflowsAPI.ConditionGroup | null;

    /**
     * An arbitrary string attached to a workflow object. Useful for adding notes about
     * the workflow for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string;

    /**
     * A map of workflow settings.
     */
    settings?: Workflow.Settings;

    /**
     * A JSON schema for the expected structure of the workflow trigger's data payload.
     * Used to validate trigger requests. (optional)
     */
    trigger_data_json_schema?: Record<string, unknown>;

    /**
     * The frequency at which the workflow should be triggered. One of:
     * "once_per_recipient", "once_per_recipient_per_tenant", "every_trigger". Defaults
     * to "every_trigger".
     */
    trigger_frequency?: 'every_trigger' | 'once_per_recipient' | 'once_per_recipient_per_tenant';
  }

  export namespace Workflow {
    /**
     * A map of workflow settings.
     */
    export interface Settings {
      /**
       * Whether the workflow is commercial. Defaults to false.
       */
      is_commercial?: boolean;

      /**
       * Whether to ignore recipient preferences for a given type of notification. If
       * true, will send for every channel in the workflow even if the recipient has
       * opted out of a certain kind. Defaults to false.
       */
      override_preferences?: boolean;
    }
  }
}

Workflows.Steps = Steps;

export declare namespace Workflows {
  export {
    type Condition as Condition,
    type ConditionGroup as ConditionGroup,
    type Duration as Duration,
    type SendWindow as SendWindow,
    type Workflow as Workflow,
    type WorkflowBatchStep as WorkflowBatchStep,
    type WorkflowBranchStep as WorkflowBranchStep,
    type WorkflowChannelStep as WorkflowChannelStep,
    type WorkflowDelayStep as WorkflowDelayStep,
    type WorkflowFetchStep as WorkflowFetchStep,
    type WorkflowStep as WorkflowStep,
    type WorkflowThrottleStep as WorkflowThrottleStep,
    type WorkflowTriggerWorkflowStep as WorkflowTriggerWorkflowStep,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowActivateResponse as WorkflowActivateResponse,
    type WorkflowRunResponse as WorkflowRunResponse,
    type WorkflowUpsertResponse as WorkflowUpsertResponse,
    type WorkflowValidateResponse as WorkflowValidateResponse,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowActivateParams as WorkflowActivateParams,
    type WorkflowRunParams as WorkflowRunParams,
    type WorkflowUpsertParams as WorkflowUpsertParams,
    type WorkflowValidateParams as WorkflowValidateParams,
  };

  export {
    Steps as Steps,
    type StepPreviewTemplateResponse as StepPreviewTemplateResponse,
    type StepPreviewTemplateParams as StepPreviewTemplateParams,
  };
}
