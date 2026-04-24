// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AudiencesAPI from './audiences';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Audiences define sets of users that can be targeted for notifications.
 */
export class Audiences extends APIResource {
  /**
   * Retrieve an audience by its key in a given environment.
   *
   * @example
   * ```ts
   * const audience = await client.audiences.retrieve(
   *   'audience_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  retrieve(audienceKey: string, query: AudienceRetrieveParams, options?: RequestOptions): APIPromise<Audience> {
    return this._client.get(path`/v1/audiences/${audienceKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of audiences for the given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const audience of client.audiences.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: AudienceListParams, options?: RequestOptions): PagePromise<AudiencesEntriesCursor, Audience> {
    return this._client.getAPIList('/v1/audiences', EntriesCursor<Audience>, { query, ...options });
  }

  /**
   * Archives a given audience across all environments.
   *
   * @example
   * ```ts
   * const response = await client.audiences.archive(
   *   'audience_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  archive(audienceKey: string, params: AudienceArchiveParams, options?: RequestOptions): APIPromise<AudienceArchiveResponse> {
    const { environment } = params
    return this._client.delete(path`/v1/audiences/${audienceKey}`, { query: { environment }, ...options });
  }

  /**
   * Updates an audience of a given key, or creates a new one if it does not yet
   * exist.
   *
   * @example
   * ```ts
   * const response = await client.audiences.upsert(
   *   'audience_key',
   *   {
   *     environment: 'development',
   *     audience: { name: 'Premium users', type: 'dynamic' },
   *   },
   * );
   * ```
   */
  upsert(audienceKey: string, params: AudienceUpsertParams, options?: RequestOptions): APIPromise<AudienceUpsertResponse> {
    const { environment, annotate, branch, commit, commit_message, force, ...body } = params
    return this._client.put(path`/v1/audiences/${audienceKey}`, { query: { environment, annotate, branch, commit, commit_message, force }, body, ...options });
  }

  /**
   * Validates an audience payload without persisting it.
   *
   * @example
   * ```ts
   * const response = await client.audiences.validate(
   *   'audience_key',
   *   {
   *     environment: 'development',
   *     audience: { name: 'Premium users', type: 'dynamic' },
   *   },
   * );
   * ```
   */
  validate(audienceKey: string, params: AudienceValidateParams, options?: RequestOptions): APIPromise<AudienceValidateResponse> {
    const { environment, branch, ...body } = params
    return this._client.put(path`/v1/audiences/${audienceKey}/validate`, { query: { environment, branch }, body, ...options });
  }
}

export type AudiencesEntriesCursor = EntriesCursor<Audience>

/**
 * An audience defines a set of users that can be targeted for notifications. Can
 * be either a `StaticAudience` (members explicitly added/removed) or a
 * `DynamicAudience` (members determined by segment conditions).
 */
export type Audience = StaticAudience | DynamicAudience

/**
 * A condition to evaluate for audience membership.
 */
export interface AudienceCondition {
  /**
   * The operator to use when evaluating the condition.
   */
  operator: 'equal_to' | 'not_equal_to' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'contains' | 'not_contains' | 'contains_all' | 'not_contains_all' | 'is_timestamp_before' | 'is_timestamp_on_or_after' | 'is_timestamp_between' | 'is_between' | 'empty' | 'not_empty' | 'exists' | 'not_exists' | 'is_timestamp' | 'is_audience_member' | 'is_not_audience_member';

  /**
   * The property to be evaluated. Properties are dynamic values using path
   * expressions like `recipient.plan` or `recipient.created_at`.
   */
  property: string;

  /**
   * The argument to compare against. Can be a static value (string, number, boolean)
   * or a dynamic path expression.
   */
  argument?: string | null;
}

/**
 * A dynamic audience where membership is determined by segment conditions
 * evaluated at runtime.
 */
export interface DynamicAudience {
  /**
   * The timestamp of when the audience was created.
   */
  created_at: string;

  /**
   * The slug of the environment in which the audience exists.
   */
  environment: string;

  /**
   * The unique key of the audience.
   */
  key: string;

  /**
   * The name of the audience.
   */
  name: string;

  /**
   * A list of segments that define the dynamic audience membership criteria. Each
   * segment contains one or more conditions joined by AND. Multiple segments are
   * joined by OR.
   */
  segments: Array<DynamicAudience.Segment>;

  /**
   * The type of audience. Always `dynamic` for dynamic audiences.
   */
  type: 'dynamic';

  /**
   * The timestamp of when the audience was last updated.
   */
  updated_at: string;

  /**
   * A description of the audience.
   */
  description?: string | null;

  /**
   * The SHA hash of the audience data.
   */
  sha?: string | null;
}

export namespace DynamicAudience {
  export interface Segment {
    /**
     * A list of conditions within this segment, joined by AND.
     */
    conditions: Array<AudiencesAPI.AudienceCondition>;
  }
}

/**
 * A static audience where members are explicitly added or removed via the API.
 */
export interface StaticAudience {
  /**
   * The timestamp of when the audience was created.
   */
  created_at: string;

  /**
   * The slug of the environment in which the audience exists.
   */
  environment: string;

  /**
   * The unique key of the audience.
   */
  key: string;

  /**
   * The name of the audience.
   */
  name: string;

  /**
   * The type of audience. Always `static` for static audiences.
   */
  type: 'static';

  /**
   * The timestamp of when the audience was last updated.
   */
  updated_at: string;

  /**
   * A description of the audience.
   */
  description?: string | null;

  /**
   * The SHA hash of the audience data.
   */
  sha?: string | null;
}

/**
 * The response from archiving an audience.
 */
export interface AudienceArchiveResponse {
  /**
   * The result of the archive operation.
   */
  result: string;
}

/**
 * Wraps the Audience response under the `audience` key.
 */
export interface AudienceUpsertResponse {
  /**
   * An audience defines a set of users that can be targeted for notifications. Can
   * be either a `StaticAudience` (members explicitly added/removed) or a
   * `DynamicAudience` (members determined by segment conditions).
   */
  audience: Audience;
}

/**
 * Wraps the Audience response under the `audience` key.
 */
export interface AudienceValidateResponse {
  /**
   * An audience defines a set of users that can be targeted for notifications. Can
   * be either a `StaticAudience` (members explicitly added/removed) or a
   * `DynamicAudience` (members determined by segment conditions).
   */
  audience: Audience;
}

export interface AudienceRetrieveParams {
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

export interface AudienceListParams extends EntriesCursorParams {
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

export interface AudienceArchiveParams {
  /**
   * The environment slug.
   */
  environment: string;
}

export interface AudienceUpsertParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: An audience object with attributes to create or update an audience.
   * Use `type: static` for audiences with explicitly managed members, or
   * `type: dynamic` for audiences with segment-based membership.
   */
  audience: AudienceUpsertParams.StaticAudienceRequest | AudienceUpsertParams.DynamicAudienceRequest;

  /**
   * Query param: Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;

  /**
   * Query param: Whether to commit the resource at the same time as modifying it.
   */
  commit?: boolean;

  /**
   * Query param: The message to commit the resource with, only used if `commit` is
   * `true`.
   */
  commit_message?: string;

  /**
   * Query param: When set to true, forces the upsert to override existing content
   * regardless of environment restrictions. This bypasses the development-only
   * environment check and origin environment checks.
   */
  force?: boolean;
}

export namespace AudienceUpsertParams {
  /**
   * Request body for creating/updating a static audience.
   */
  export interface StaticAudienceRequest {
    /**
     * The name of the audience.
     */
    name: string;

    /**
     * The type of audience. Set to `static` for static audiences.
     */
    type: 'static';

    /**
     * A description of the audience.
     */
    description?: string | null;
  }

  /**
   * Request body for creating/updating a dynamic audience.
   */
  export interface DynamicAudienceRequest {
    /**
     * The name of the audience.
     */
    name: string;

    /**
     * The type of audience. Set to `dynamic` for dynamic audiences.
     */
    type: 'dynamic';

    /**
     * A description of the audience.
     */
    description?: string | null;

    /**
     * A list of segments that define the dynamic audience membership criteria. Each
     * segment contains one or more conditions joined by AND. Multiple segments are
     * joined by OR.
     */
    segments?: Array<DynamicAudienceRequest.Segment>;
  }

  export namespace DynamicAudienceRequest {
    export interface Segment {
      /**
       * A list of conditions within this segment, joined by AND.
       */
      conditions: Array<AudiencesAPI.AudienceCondition>;
    }
  }
}

export interface AudienceValidateParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: An audience object with attributes to create or update an audience.
   * Use `type: static` for audiences with explicitly managed members, or
   * `type: dynamic` for audiences with segment-based membership.
   */
  audience: AudienceValidateParams.StaticAudienceRequest | AudienceValidateParams.DynamicAudienceRequest;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;
}

export namespace AudienceValidateParams {
  /**
   * Request body for creating/updating a static audience.
   */
  export interface StaticAudienceRequest {
    /**
     * The name of the audience.
     */
    name: string;

    /**
     * The type of audience. Set to `static` for static audiences.
     */
    type: 'static';

    /**
     * A description of the audience.
     */
    description?: string | null;
  }

  /**
   * Request body for creating/updating a dynamic audience.
   */
  export interface DynamicAudienceRequest {
    /**
     * The name of the audience.
     */
    name: string;

    /**
     * The type of audience. Set to `dynamic` for dynamic audiences.
     */
    type: 'dynamic';

    /**
     * A description of the audience.
     */
    description?: string | null;

    /**
     * A list of segments that define the dynamic audience membership criteria. Each
     * segment contains one or more conditions joined by AND. Multiple segments are
     * joined by OR.
     */
    segments?: Array<DynamicAudienceRequest.Segment>;
  }

  export namespace DynamicAudienceRequest {
    export interface Segment {
      /**
       * A list of conditions within this segment, joined by AND.
       */
      conditions: Array<AudiencesAPI.AudienceCondition>;
    }
  }
}

export declare namespace Audiences {
  export {
    type Audience as Audience,
    type AudienceCondition as AudienceCondition,
    type DynamicAudience as DynamicAudience,
    type StaticAudience as StaticAudience,
    type AudienceArchiveResponse as AudienceArchiveResponse,
    type AudienceUpsertResponse as AudienceUpsertResponse,
    type AudienceValidateResponse as AudienceValidateResponse,
    type AudiencesEntriesCursor as AudiencesEntriesCursor,
    type AudienceRetrieveParams as AudienceRetrieveParams,
    type AudienceListParams as AudienceListParams,
    type AudienceArchiveParams as AudienceArchiveParams,
    type AudienceUpsertParams as AudienceUpsertParams,
    type AudienceValidateParams as AudienceValidateParams
  };
}
