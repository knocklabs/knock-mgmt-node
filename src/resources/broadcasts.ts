// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows/workflows';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Broadcasts extends APIResource {
  /**
   * Get a broadcast by its key in a given environment.
   *
   * @example
   * ```ts
   * const broadcast = await client.broadcasts.retrieve(
   *   'broadcast_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  retrieve(
    broadcastKey: string,
    query: BroadcastRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Broadcast> {
    return this._client.get(path`/v1/broadcasts/${broadcastKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of broadcasts available in a given environment. The
   * broadcasts are returned ordered by creation time (newest first).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const broadcast of client.broadcasts.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BroadcastListParams,
    options?: RequestOptions,
  ): PagePromise<BroadcastsEntriesCursor, Broadcast> {
    return this._client.getAPIList('/v1/broadcasts', EntriesCursor<Broadcast>, { query, ...options });
  }

  /**
   * Cancels sending a scheduled broadcast. The broadcast will return to draft
   * status.
   *
   * @example
   * ```ts
   * const response = await client.broadcasts.cancel(
   *   'broadcast_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  cancel(
    broadcastKey: string,
    params: BroadcastCancelParams,
    options?: RequestOptions,
  ): APIPromise<BroadcastCancelResponse> {
    const { environment, branch } = params;
    return this._client.put(path`/v1/broadcasts/${broadcastKey}/cancel`, {
      query: { environment, branch },
      ...options,
    });
  }

  /**
   * Sends a broadcast immediately or schedules it to send at a future time.
   *
   * @example
   * ```ts
   * const response = await client.broadcasts.send(
   *   'broadcast_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  send(
    broadcastKey: string,
    params: BroadcastSendParams,
    options?: RequestOptions,
  ): APIPromise<BroadcastSendResponse> {
    const { environment, branch, ...body } = params;
    return this._client.put(path`/v1/broadcasts/${broadcastKey}/send`, {
      query: { environment, branch },
      body,
      ...options,
    });
  }

  /**
   * Updates a broadcast of a given key, or creates a new one if it does not yet
   * exist.
   *
   * @example
   * ```ts
   * const response = await client.broadcasts.upsert(
   *   'broadcast_key',
   *   {
   *     environment: 'development',
   *     broadcast: {
   *       name: 'My Broadcast',
   *       steps: [
   *         {
   *           ref: 'channel_1',
   *           template: {
   *             markdown_body: 'Hello **{{ recipient.name }}**',
   *           },
   *           type: 'channel',
   *         },
   *       ],
   *     },
   *   },
   * );
   * ```
   */
  upsert(
    broadcastKey: string,
    params: BroadcastUpsertParams,
    options?: RequestOptions,
  ): APIPromise<BroadcastUpsertResponse> {
    const { environment, annotate, branch, ...body } = params;
    return this._client.put(path`/v1/broadcasts/${broadcastKey}`, {
      query: { environment, annotate, branch },
      body,
      ...options,
    });
  }

  /**
   * Validates a broadcast payload without persisting it.
   *
   * @example
   * ```ts
   * const response = await client.broadcasts.validate(
   *   'broadcast_key',
   *   {
   *     environment: 'development',
   *     broadcast: {
   *       name: 'My Broadcast',
   *       steps: [
   *         {
   *           ref: 'channel_1',
   *           template: {
   *             markdown_body: 'Hello **{{ recipient.name }}**',
   *           },
   *           type: 'channel',
   *         },
   *       ],
   *     },
   *   },
   * );
   * ```
   */
  validate(
    broadcastKey: string,
    params: BroadcastValidateParams,
    options?: RequestOptions,
  ): APIPromise<BroadcastValidateResponse> {
    const { environment, branch, ...body } = params;
    return this._client.put(path`/v1/broadcasts/${broadcastKey}/validate`, {
      query: { environment, branch },
      body,
      ...options,
    });
  }
}

export type BroadcastsEntriesCursor = EntriesCursor<Broadcast>;

/**
 * A broadcast object.
 */
export interface Broadcast {
  /**
   * The timestamp of when the broadcast was created. (read-only).
   */
  created_at: string;

  /**
   * The slug of the environment in which the broadcast exists. (read-only).
   */
  environment: string;

  /**
   * The unique key string for the broadcast object. Must be at minimum 3 characters
   * and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
   */
  key: string;

  /**
   * A name for the broadcast. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * The SHA hash of the workflow data. (read-only).
   */
  sha: string;

  /**
   * The current status of the broadcast. One of: `draft`, `scheduled`, `sent`.
   */
  status: 'draft' | 'scheduled' | 'sent';

  /**
   * A list of broadcast step objects in the broadcast. Broadcasts only support
   * channel, branch, and delay steps.
   */
  steps: Array<
    | WorkflowsAPI.WorkflowWebhookStep
    | WorkflowsAPI.WorkflowInAppFeedStep
    | WorkflowsAPI.WorkflowChatStep
    | WorkflowsAPI.WorkflowSMSStep
    | WorkflowsAPI.WorkflowPushStep
    | WorkflowsAPI.WorkflowEmailStep
    | WorkflowsAPI.WorkflowBranchStep
    | WorkflowsAPI.WorkflowDelayStep
    | WorkflowsAPI.WorkflowRandomCohortStep
  >;

  /**
   * The timestamp of when the broadcast was last updated. (read-only).
   */
  updated_at: string;

  /**
   * Whether the broadcast and its steps are in a valid state. (read-only).
   */
  valid: boolean;

  /**
   * The timestamp of when the broadcast was archived.
   */
  archived_at?: string | null;

  /**
   * A list of categories that the broadcast belongs to.
   */
  categories?: Array<string>;

  /**
   * An arbitrary string attached to a broadcast object. Useful for adding notes
   * about the broadcast for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string;

  /**
   * The timestamp of when the broadcast is scheduled to be sent.
   */
  scheduled_at?: string | null;

  /**
   * The timestamp of when the broadcast was sent. (read-only).
   */
  sent_at?: string | null;

  /**
   * A map of broadcast settings.
   */
  settings?: Broadcast.Settings;

  /**
   * The key of the audience to target for this broadcast.
   */
  target_audience_key?: string;
}

export namespace Broadcast {
  /**
   * A map of broadcast settings.
   */
  export interface Settings {
    /**
     * Whether the broadcast is commercial. Defaults to true.
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
 * A broadcast request for upserting a broadcast.
 */
export interface BroadcastRequest {
  /**
   * A name for the broadcast. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * A list of broadcast step objects in the broadcast. Broadcasts only support
   * channel, branch, and delay steps.
   */
  steps: Array<
    | WorkflowsAPI.WorkflowWebhookStep
    | WorkflowsAPI.WorkflowInAppFeedStep
    | WorkflowsAPI.WorkflowChatStep
    | WorkflowsAPI.WorkflowSMSStep
    | WorkflowsAPI.WorkflowPushStep
    | WorkflowsAPI.WorkflowEmailStep
    | WorkflowsAPI.WorkflowBranchStep
    | WorkflowsAPI.WorkflowDelayStep
    | WorkflowsAPI.WorkflowRandomCohortStep
  >;

  /**
   * A list of categories that the broadcast belongs to.
   */
  categories?: Array<string>;

  /**
   * An arbitrary string attached to a broadcast object. Useful for adding notes
   * about the broadcast for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string;

  /**
   * The timestamp of when the broadcast is scheduled to be sent.
   */
  scheduled_at?: string | null;

  /**
   * A map of broadcast settings.
   */
  settings?: BroadcastRequest.Settings;

  /**
   * The key of the audience to target for this broadcast.
   */
  target_audience_key?: string;
}

export namespace BroadcastRequest {
  /**
   * A map of broadcast settings.
   */
  export interface Settings {
    /**
     * Whether the broadcast is commercial. Defaults to true.
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
 * Wraps the Broadcast response under the `broadcast` key.
 */
export interface BroadcastCancelResponse {
  /**
   * A broadcast object.
   */
  broadcast: Broadcast;
}

/**
 * Wraps the Broadcast response under the `broadcast` key.
 */
export interface BroadcastSendResponse {
  /**
   * A broadcast object.
   */
  broadcast: Broadcast;
}

/**
 * Wraps the Broadcast response under the `broadcast` key.
 */
export interface BroadcastUpsertResponse {
  /**
   * A broadcast object.
   */
  broadcast: Broadcast;
}

/**
 * Wraps the Broadcast response under the `broadcast` key.
 */
export interface BroadcastValidateResponse {
  /**
   * A broadcast object.
   */
  broadcast: Broadcast;
}

export interface BroadcastRetrieveParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface BroadcastListParams extends EntriesCursorParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface BroadcastCancelParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;
}

export interface BroadcastSendParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;

  /**
   * Body param: When to send the broadcast. If provided, the broadcast will be
   * scheduled to send at this time. Must be in ISO 8601 UTC format. If not provided,
   * the broadcast will be sent immediately.
   */
  send_at?: string;
}

export interface BroadcastUpsertParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A broadcast request for upserting a broadcast.
   */
  broadcast: BroadcastRequest;

  /**
   * Query param: Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;
}

export interface BroadcastValidateParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A broadcast request for upserting a broadcast.
   */
  broadcast: BroadcastRequest;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;
}

export declare namespace Broadcasts {
  export {
    type Broadcast as Broadcast,
    type BroadcastRequest as BroadcastRequest,
    type BroadcastCancelResponse as BroadcastCancelResponse,
    type BroadcastSendResponse as BroadcastSendResponse,
    type BroadcastUpsertResponse as BroadcastUpsertResponse,
    type BroadcastValidateResponse as BroadcastValidateResponse,
    type BroadcastsEntriesCursor as BroadcastsEntriesCursor,
    type BroadcastRetrieveParams as BroadcastRetrieveParams,
    type BroadcastListParams as BroadcastListParams,
    type BroadcastCancelParams as BroadcastCancelParams,
    type BroadcastSendParams as BroadcastSendParams,
    type BroadcastUpsertParams as BroadcastUpsertParams,
    type BroadcastValidateParams as BroadcastValidateParams,
  };
}
