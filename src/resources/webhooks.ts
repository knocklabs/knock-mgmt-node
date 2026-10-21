// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a new outbound webhook in the given environment. The response includes
   * the `secret_key` which is only revealed at creation time.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   webhook: {
   *     event_types: ['message.sent', 'message.delivered'],
   *     url: 'https://example.com/webhooks',
   *   },
   * });
   * ```
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    const { branch, environment, ...body } = params;
    return this._client.post('/v1/webhooks', { query: { branch, environment }, body, ...options });
  }

  /**
   * Retrieves a single outbound webhook by its ID.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: WebhookRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Webhook> {
    return this._client.get(path`/v1/webhooks/${id}`, { query, ...options });
  }

  /**
   * Updates an existing outbound webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     webhook: {
   *       event_types: ['message.sent', 'message.delivered'],
   *       url: 'https://example.com/webhooks',
   *     },
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    const { branch, environment, ...body } = params;
    return this._client.put(path`/v1/webhooks/${id}`, { query: { branch, environment }, body, ...options });
  }

  /**
   * Returns a paginated list of outbound webhooks for a given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhook of client.webhooks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhooksEntriesCursor, Webhook> {
    return this._client.getAPIList('/v1/webhooks', EntriesCursor<Webhook>, { query, ...options });
  }

  /**
   * Archives an outbound webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(
    id: string,
    params: WebhookDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookDeleteResponse> {
    const { branch, environment } = params ?? {};
    return this._client.delete(path`/v1/webhooks/${id}`, { query: { branch, environment }, ...options });
  }
}

export type WebhooksEntriesCursor = EntriesCursor<Webhook>;

/**
 * An outbound webhook that receives event notifications.
 */
export interface Webhook {
  /**
   * The unique identifier for the webhook.
   */
  id: string;

  /**
   * Whether the webhook is currently active.
   */
  active: boolean;

  /**
   * The timestamp of when the webhook was created.
   */
  created_at: string;

  /**
   * The list of event types that this webhook is subscribed to, in dotted format
   * (e.g. `message.sent`).
   */
  event_types: Array<string>;

  /**
   * The timestamp of when the webhook was last updated.
   */
  updated_at: string;

  /**
   * The URL that the webhook will send events to.
   */
  url: string;

  /**
   * An optional description of the webhook.
   */
  description?: string | null;

  /**
   * The secret key used to sign webhook payloads. Only returned when a webhook is
   * first created.
   */
  secret_key?: string | null;
}

/**
 * The request body for creating or updating an outbound webhook.
 */
export interface WebhookRequest {
  /**
   * The list of event types that this webhook should be subscribed to, in dotted
   * format (e.g. `message.sent`).
   */
  event_types: Array<string>;

  /**
   * The URL that the webhook will send events to.
   */
  url: string;

  /**
   * Whether the webhook should be active.
   */
  active?: boolean | null;

  /**
   * An optional description of the webhook.
   */
  description?: string | null;
}

/**
 * Wraps the Webhook response under the `webhook` key.
 */
export interface WebhookCreateResponse {
  /**
   * An outbound webhook that receives event notifications.
   */
  webhook: Webhook;
}

/**
 * Wraps the Webhook response under the `webhook` key.
 */
export interface WebhookUpdateResponse {
  /**
   * An outbound webhook that receives event notifications.
   */
  webhook: Webhook;
}

/**
 * The response from archiving a webhook.
 */
export interface WebhookDeleteResponse {
  /**
   * The result of the archive operation.
   */
  result: string;
}

export interface WebhookCreateParams {
  /**
   * Body param: The request body for creating or updating an outbound webhook.
   */
  webhook: WebhookRequest;

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

export interface WebhookRetrieveParams {
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

export interface WebhookUpdateParams {
  /**
   * Body param: The request body for creating or updating an outbound webhook.
   */
  webhook: WebhookRequest;

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

export interface WebhookListParams extends EntriesCursorParams {
  /**
   * Filter webhooks by active status.
   */
  active?: boolean;

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

  /**
   * Filter webhooks by event type in dotted format (e.g. `message.sent`).
   */
  event_type?: string;
}

export interface WebhookDeleteParams {
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

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookRequest as WebhookRequest,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhooksEntriesCursor as WebhooksEntriesCursor,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
  };
}
