// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class AuditLogs extends APIResource {
  /**
   * Returns a paginated list of audit log entries for the current account, across
   * every environment and branch, including account-level entries that have no
   * environment. Entries are ordered from most recent first.
   *
   * The list includes user-visible changes and environment merges. Commits are
   * returned by the commits endpoint. Entries outside the account's data retention
   * window are omitted.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditLogListResponse of client.auditLogs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuditLogListResponsesEntriesCursor, AuditLogListResponse> {
    return this._client.getAPIList('/v1/audit_logs', EntriesCursor<AuditLogListResponse>, {
      query,
      ...options,
    });
  }
}

export type AuditLogListResponsesEntriesCursor = EntriesCursor<AuditLogListResponse>;

/**
 * An account audit log entry. Commit rows are returned by the commits endpoint.
 * The entry does not include the stored change diff.
 */
export interface AuditLogListResponse {
  /**
   * The unique identifier for the audit log entry.
   */
  id: string;

  /**
   * The action that was performed, such as `workflow.updated` or `seat.removed`.
   */
  action: string;

  /**
   * The Knock user who performed the action.
   */
  actor: AuditLogListResponse.Actor | null;

  /**
   * The agent session that performed the action, when the source is an agent.
   */
  agent_session_id: string | null;

  /**
   * The slug of the environment or branch where the action happened. Null for
   * account-level actions.
   */
  environment: string | null;

  /**
   * The timestamp of when the action happened.
   */
  inserted_at: string;

  /**
   * The IP address of the request that performed the action.
   */
  ip_address: string | null;

  /**
   * The location derived from the request IP address.
   */
  location: AuditLogListResponse.Location | null;

  /**
   * The project the action belongs to. Null for account-level actions.
   */
  project_id: string | null;

  /**
   * The id of the request that performed the action.
   */
  request_id: string | null;

  /**
   * Where the action originated.
   */
  request_source: 'dashboard' | 'mapi' | 'agent' | null;

  /**
   * The resource the action changed. `type` and `identifier` follow the commit
   * resource for promotable resources, including `reusable_request`. `identifier` is
   * null when the resource has no public handle or the row no longer exists.
   */
  resource: AuditLogListResponse.Resource;
}

export namespace AuditLogListResponse {
  /**
   * The Knock user who performed the action.
   */
  export interface Actor {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The email address of the user.
     */
    email: string;

    /**
     * The name of the user.
     */
    name?: string | null;
  }

  /**
   * The location derived from the request IP address.
   */
  export interface Location {
    /**
     * The city.
     */
    city?: string | null;

    /**
     * The country code.
     */
    country_code?: string | null;

    /**
     * The region code.
     */
    region_code?: string | null;
  }

  /**
   * The resource the action changed. `type` and `identifier` follow the commit
   * resource for promotable resources, including `reusable_request`. `identifier` is
   * null when the resource has no public handle or the row no longer exists.
   */
  export interface Resource {
    /**
     * The stored id of the resource. External user and object ids are not UUIDs.
     */
    id: string;

    /**
     * The type of the resource.
     */
    type:
      | 'account'
      | 'account_user'
      | 'api_key'
      | 'asset'
      | 'audience'
      | 'broadcast'
      | 'channel'
      | 'channel_group'
      | 'email_layout'
      | 'environment'
      | 'environment_defaults'
      | 'event_action_mapping'
      | 'external_audience'
      | 'goal'
      | 'guide'
      | 'guide_group'
      | 'invite'
      | 'member'
      | 'message_type'
      | 'object'
      | 'partial'
      | 'permission_group'
      | 'preference_category'
      | 'preference_center'
      | 'preference_center_domain'
      | 'reusable_request'
      | 'service_token'
      | 'signing_key'
      | 'source'
      | 'subscription'
      | 'tag'
      | 'translation'
      | 'user'
      | 'variable'
      | 'view'
      | 'webhook'
      | 'workflow'
      | 'unknown';

    /**
     * The public handle for the resource, such as a key, slug, email, or
     * `locale/namespace` for a translation.
     */
    identifier?: string | null;
  }
}

export interface AuditLogListParams extends EntriesCursorParams {
  /**
   * Filter by action. Accepts one action or an array of actions, matched exactly.
   */
  action?: string | Array<string>;

  /**
   * Filter by the id of the user who performed the action. Accepts one id or an
   * array of ids.
   */
  actor_id?: string | Array<string>;

  /**
   * The environment slug. When omitted, the list is account-wide and does not use
   * the account's default environment. When set, limits entries to that environment
   * or branch and omits account-level entries.
   */
  environment?: string;

  /**
   * Filter by resource type. Accepts one type or an array of types. `channel`
   * includes channel environment settings, and `source` includes source environment
   * settings.
   */
  resource_type?:
    | 'account'
    | 'account_user'
    | 'api_key'
    | 'asset'
    | 'audience'
    | 'broadcast'
    | 'channel'
    | 'channel_group'
    | 'email_layout'
    | 'environment'
    | 'environment_defaults'
    | 'event_action_mapping'
    | 'external_audience'
    | 'goal'
    | 'guide'
    | 'guide_group'
    | 'invite'
    | 'member'
    | 'message_type'
    | 'object'
    | 'partial'
    | 'permission_group'
    | 'preference_category'
    | 'preference_center'
    | 'preference_center_domain'
    | 'reusable_request'
    | 'service_token'
    | 'signing_key'
    | 'source'
    | 'subscription'
    | 'tag'
    | 'translation'
    | 'user'
    | 'variable'
    | 'view'
    | 'webhook'
    | 'workflow'
    | Array<
        | 'account'
        | 'account_user'
        | 'api_key'
        | 'asset'
        | 'audience'
        | 'broadcast'
        | 'channel'
        | 'channel_group'
        | 'email_layout'
        | 'environment'
        | 'environment_defaults'
        | 'event_action_mapping'
        | 'external_audience'
        | 'goal'
        | 'guide'
        | 'guide_group'
        | 'invite'
        | 'member'
        | 'message_type'
        | 'object'
        | 'partial'
        | 'permission_group'
        | 'preference_category'
        | 'preference_center'
        | 'preference_center_domain'
        | 'reusable_request'
        | 'service_token'
        | 'signing_key'
        | 'source'
        | 'subscription'
        | 'tag'
        | 'translation'
        | 'user'
        | 'variable'
        | 'view'
        | 'webhook'
        | 'workflow'
      >;

  /**
   * Only return entries inserted at or after this RFC 3339 timestamp.
   */
  since?: string;

  /**
   * Only return entries inserted at or before this RFC 3339 timestamp.
   */
  until?: string;
}

export declare namespace AuditLogs {
  export {
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListResponsesEntriesCursor as AuditLogListResponsesEntriesCursor,
    type AuditLogListParams as AuditLogListParams,
  };
}
