// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows/workflows';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Goals define event conditions that are tracked and attributed to messaging resources.
 */
export class Goals extends APIResource {
  /**
   * Retrieve a goal by its key in a given environment.
   *
   * @example
   * ```ts
   * const goal = await client.goals.retrieve('goal_key');
   * ```
   */
  retrieve(
    goalKey: string,
    query: GoalRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Goal> {
    return this._client.get(path`/v1/goals/${goalKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of goals for the given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const goal of client.goals.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GoalListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GoalsEntriesCursor, Goal> {
    return this._client.getAPIList('/v1/goals', EntriesCursor<Goal>, { query, ...options });
  }

  /**
   * Archives a given goal across all environments. Refuses if any workflow, guide,
   * or broadcast is attached to the goal.
   *
   * @example
   * ```ts
   * const response = await client.goals.archive('goal_key');
   * ```
   */
  archive(
    goalKey: string,
    params: GoalArchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GoalArchiveResponse> {
    const { environment } = params ?? {};
    return this._client.delete(path`/v1/goals/${goalKey}`, { query: { environment }, ...options });
  }

  /**
   * Clones a goal into a destination environment.
   *
   * @example
   * ```ts
   * const response = await client.goals.clone('goal_key', {
   *   clone: {
   *     environment: 'production',
   *     key: 'trial-conversion-copy',
   *     name: 'Trial Conversion Copy',
   *   },
   * });
   * ```
   */
  clone(goalKey: string, params: GoalCloneParams, options?: RequestOptions): APIPromise<GoalCloneResponse> {
    const { environment, ...body } = params;
    return this._client.post(path`/v1/goals/${goalKey}/clone`, { query: { environment }, body, ...options });
  }

  /**
   * Updates a goal of a given key, or creates a new one if it does not yet exist.
   * The goal is published immediately; this endpoint does not accept a commit
   * parameter.
   *
   * @example
   * ```ts
   * const response = await client.goals.upsert('goal_key', {
   *   goal: {
   *     condition: { event: { event_type: 'recipient' } },
   *     name: 'Trial Conversion',
   *   },
   * });
   * ```
   */
  upsert(
    goalKey: string,
    params: GoalUpsertParams,
    options?: RequestOptions,
  ): APIPromise<GoalUpsertResponse> {
    const { annotate, environment, ...body } = params;
    return this._client.put(path`/v1/goals/${goalKey}`, {
      query: { annotate, environment },
      body,
      ...options,
    });
  }

  /**
   * Validates a goal payload without persisting it.
   *
   * @example
   * ```ts
   * const response = await client.goals.validate('goal_key', {
   *   goal: {
   *     condition: { event: { event_type: 'recipient' } },
   *     name: 'Trial Conversion',
   *   },
   * });
   * ```
   */
  validate(
    goalKey: string,
    params: GoalValidateParams,
    options?: RequestOptions,
  ): APIPromise<GoalValidateResponse> {
    const { branch, environment, ...body } = params;
    return this._client.put(path`/v1/goals/${goalKey}/validate`, {
      query: { branch, environment },
      body,
      ...options,
    });
  }
}

export type GoalsEntriesCursor = EntriesCursor<Goal>;

/**
 * A goal defines an event condition that is tracked and attributed to messaging
 * resources.
 */
export interface Goal {
  /**
   * A goal condition consisting of a polymorphic event and optional match
   * conditions.
   */
  condition: GoalCondition;

  /**
   * The timestamp of when the goal was created. (read-only).
   */
  created_at: string;

  /**
   * The slug of the environment in which the goal exists. (read-only).
   */
  environment: string;

  /**
   * The unique key string for the goal. Must be at minimum 1 character and at
   * maximum 255 characters in length.
   */
  key: string;

  /**
   * A name for the goal. Must be at minimum 1 character and at maximum 255
   * characters in length.
   */
  name: string;

  /**
   * The SHA hash of the goal data. (read-only).
   */
  sha: string;

  /**
   * The timestamp of when the goal was last updated. (read-only).
   */
  updated_at: string;

  /**
   * An optional description for the goal. Maximum of 280 characters allowed.
   */
  description?: string | null;
}

/**
 * A goal condition consisting of a polymorphic event and optional match
 * conditions.
 */
export interface GoalCondition {
  /**
   * The event to track. Supports recipient, integration_source, and audience event
   * types.
   */
  event:
    | GoalCondition.WorkflowWaitForEventRecipientEvent
    | GoalCondition.WorkflowWaitForEventIntegrationSourceEvent
    | GoalCondition.WorkflowWaitForEventAudienceEvent;

  /**
   * A list of condition groups. Required for recipient events; each group uses an
   * operator (and/or) with nested conditions.
   */
  match_conditions?: Array<WorkflowsAPI.ConditionGroup>;
}

export namespace GoalCondition {
  /**
   * A recipient updated event to wait for from the workflow recipient.
   */
  export interface WorkflowWaitForEventRecipientEvent {
    /**
     * The type of event to wait for.
     */
    event_type: 'recipient';

    /**
     * Recipient lifecycle event to wait for. Always "updated" today.
     */
    event_key?: 'updated';
  }

  /**
   * An integration source event to wait for.
   */
  export interface WorkflowWaitForEventIntegrationSourceEvent {
    /**
     * The name of the event to wait for.
     */
    event_key: string;

    /**
     * The type of event to wait for.
     */
    event_type: 'integration_source';

    /**
     * The key of the integration source that emits the event to wait for.
     */
    integration_source_key: string;
  }

  /**
   * An audience membership event to wait for when a recipient enters or exits an
   * audience.
   */
  export interface WorkflowWaitForEventAudienceEvent {
    /**
     * The key of the audience to wait for membership changes.
     */
    audience_key: string;

    /**
     * The audience membership transition to wait for.
     */
    event_key: 'enter' | 'exit';

    /**
     * The type of event to wait for.
     */
    event_type: 'audience';
  }
}

/**
 * A goal payload for upsert or validate.
 */
export interface GoalRequest {
  /**
   * A goal condition consisting of a polymorphic event and optional match
   * conditions.
   */
  condition: GoalCondition;

  /**
   * A name for the goal. Must be at minimum 1 character and at maximum 255
   * characters in length.
   */
  name: string;

  /**
   * An optional description for the goal. Maximum of 280 characters allowed.
   */
  description?: string | null;
}

/**
 * The response from archiving a goal.
 */
export interface GoalArchiveResponse {
  /**
   * The result of the archive operation.
   */
  result: string;
}

/**
 * Wraps the Goal response under the `goal` key.
 */
export interface GoalCloneResponse {
  /**
   * A goal defines an event condition that is tracked and attributed to messaging
   * resources.
   */
  goal: Goal;
}

/**
 * Wraps the Goal response under the `goal` key.
 */
export interface GoalUpsertResponse {
  /**
   * A goal defines an event condition that is tracked and attributed to messaging
   * resources.
   */
  goal: Goal;
}

/**
 * Wraps the Goal response under the `goal` key.
 */
export interface GoalValidateResponse {
  /**
   * A goal defines an event condition that is tracked and attributed to messaging
   * resources.
   */
  goal: Goal;
}

export interface GoalRetrieveParams {
  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. When `environment` is omitted, the branch is
   * resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface GoalListParams extends EntriesCursorParams {
  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. When `environment` is omitted, the branch is
   * resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface GoalArchiveParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface GoalCloneParams {
  /**
   * Body param: The destination key, name, and environment for the cloned goal.
   */
  clone: GoalCloneParams.Clone;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export namespace GoalCloneParams {
  /**
   * The destination key, name, and environment for the cloned goal.
   */
  export interface Clone {
    /**
     * The destination environment slug.
     */
    environment: string;

    /**
     * The key for the cloned goal.
     */
    key: string;

    /**
     * The name for the cloned goal.
     */
    name: string;
  }
}

export interface GoalUpsertParams {
  /**
   * Body param: A goal payload for upsert or validate.
   */
  goal: GoalRequest;

  /**
   * Query param: Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export interface GoalValidateParams {
  /**
   * Body param: A goal payload for upsert or validate.
   */
  goal: GoalRequest;

  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export declare namespace Goals {
  export {
    type Goal as Goal,
    type GoalCondition as GoalCondition,
    type GoalRequest as GoalRequest,
    type GoalArchiveResponse as GoalArchiveResponse,
    type GoalCloneResponse as GoalCloneResponse,
    type GoalUpsertResponse as GoalUpsertResponse,
    type GoalValidateResponse as GoalValidateResponse,
    type GoalsEntriesCursor as GoalsEntriesCursor,
    type GoalRetrieveParams as GoalRetrieveParams,
    type GoalListParams as GoalListParams,
    type GoalArchiveParams as GoalArchiveParams,
    type GoalCloneParams as GoalCloneParams,
    type GoalUpsertParams as GoalUpsertParams,
    type GoalValidateParams as GoalValidateParams,
  };
}
