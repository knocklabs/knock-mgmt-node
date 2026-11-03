// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Goals define event conditions that are tracked and attributed to messaging resources.
 */
export class Attachments extends APIResource {
  /**
   * Attaches the goal to a workflow, guide, or broadcast in the given environment,
   * or updates its attribution window. The attachment goes live without a commit:
   * the resource is published in the background, so the response doesn't wait on it.
   * Workflows and guides must have been committed in the environment, and broadcasts
   * must not have been sent. A resource holds one goal, so this replaces any other
   * goal attached to it.
   *
   * @example
   * ```ts
   * const attachment = await client.goals.attachments.update(
   *   'resource_key',
   *   {
   *     goal_key: 'goal_key',
   *     resource_type: 'workflow',
   *     attachment: {},
   *   },
   * );
   * ```
   */
  update(
    resourceKey: string,
    params: AttachmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AttachmentUpdateResponse> {
    const { goal_key, resource_type, environment, ...body } = params;
    return this._client.put(path`/v1/goals/${goal_key}/attachments/${resource_type}/${resourceKey}`, {
      query: { environment },
      body,
      ...options,
    });
  }

  /**
   * Returns the workflows, guides, and broadcasts the goal is attached to in the
   * given environment.
   *
   * @example
   * ```ts
   * const attachments = await client.goals.attachments.list(
   *   'goal_key',
   * );
   * ```
   */
  list(
    goalKey: string,
    query: AttachmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AttachmentListResponse> {
    return this._client.get(path`/v1/goals/${goalKey}/attachments`, { query, ...options });
  }

  /**
   * Detaches the goal from a workflow, guide, or broadcast in the given environment.
   * The change goes live without a commit: the resource is published in the
   * background, so the response doesn't wait on it. Returns 404 when the goal isn't
   * attached to the resource.
   *
   * @example
   * ```ts
   * const attachment = await client.goals.attachments.delete(
   *   'resource_key',
   *   { goal_key: 'goal_key', resource_type: 'workflow' },
   * );
   * ```
   */
  delete(
    resourceKey: string,
    params: AttachmentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AttachmentDeleteResponse> {
    const { goal_key, resource_type, environment } = params;
    return this._client.delete(path`/v1/goals/${goal_key}/attachments/${resource_type}/${resourceKey}`, {
      query: { environment },
      ...options,
    });
  }
}

/**
 * A goal attached to a workflow, guide, or broadcast in one environment. An
 * attachment goes live without a commit.
 */
export interface GoalResourceAttachment {
  /**
   * The number of days after a message is sent in which a goal completion is
   * attributed to it.
   */
  attribution_window_days: number;

  /**
   * The key of the attached goal.
   */
  goal_key: string;

  /**
   * The key of the workflow, guide, or broadcast.
   */
  resource_key: string;

  /**
   * The type of resource the goal is attached to.
   */
  resource_type: 'workflow' | 'guide' | 'broadcast';
}

/**
 * Wraps the GoalResourceAttachment response under the `attachment` key.
 */
export interface AttachmentUpdateResponse {
  /**
   * A goal attached to a workflow, guide, or broadcast in one environment. An
   * attachment goes live without a commit.
   */
  attachment: GoalResourceAttachment;
}

/**
 * The goal's attachments in the environment.
 */
export interface AttachmentListResponse {
  /**
   * The goal's attachments in the environment.
   */
  attachments: Array<GoalResourceAttachment>;
}

/**
 * The response from detaching a goal.
 */
export interface AttachmentDeleteResponse {
  /**
   * The result of the detach operation.
   */
  result: string;
}

export interface AttachmentUpdateParams {
  /**
   * Path param: The key of the goal.
   */
  goal_key: string;

  /**
   * Path param: The type of resource: `workflow`, `guide`, or `broadcast`.
   */
  resource_type: 'workflow' | 'guide' | 'broadcast';

  /**
   * Body param: Settings for the goal attachment.
   */
  attachment: AttachmentUpdateParams.Attachment;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export namespace AttachmentUpdateParams {
  /**
   * Settings for the goal attachment.
   */
  export interface Attachment {
    /**
     * The number of days after a message is sent in which a goal completion is
     * attributed to it. Must be between 1 and 30. When omitted, re-saving the attached
     * goal keeps its window; otherwise 7.
     */
    attribution_window_days?: number;
  }
}

export interface AttachmentListParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface AttachmentDeleteParams {
  /**
   * Path param: The key of the goal.
   */
  goal_key: string;

  /**
   * Path param: The type of resource: `workflow`, `guide`, or `broadcast`.
   */
  resource_type: 'workflow' | 'guide' | 'broadcast';

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export declare namespace Attachments {
  export {
    type GoalResourceAttachment as GoalResourceAttachment,
    type AttachmentUpdateResponse as AttachmentUpdateResponse,
    type AttachmentListResponse as AttachmentListResponse,
    type AttachmentDeleteResponse as AttachmentDeleteResponse,
    type AttachmentUpdateParams as AttachmentUpdateParams,
    type AttachmentListParams as AttachmentListParams,
    type AttachmentDeleteParams as AttachmentDeleteParams,
  };
}
