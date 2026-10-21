// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows/workflows';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Reusable requests are HTTP steps that workflows can link to and share across an account.
 */
export class ReusableRequests extends APIResource {
  /**
   * Retrieves a reusable request by its key.
   *
   * @example
   * ```ts
   * const reusableRequest =
   *   await client.reusableRequests.retrieve('fetch-user');
   * ```
   */
  retrieve(
    reusableRequestKey: string,
    query: ReusableRequestRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReusableRequest> {
    return this._client.get(path`/v1/reusable_requests/${reusableRequestKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of reusable requests for an environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const reusableRequest of client.reusableRequests.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReusableRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReusableRequestsEntriesCursor, ReusableRequest> {
    return this._client.getAPIList('/v1/reusable_requests', EntriesCursor<ReusableRequest>, {
      query,
      ...options,
    });
  }

  /**
   * Archives a reusable request by key across all environments.
   *
   * @example
   * ```ts
   * const response = await client.reusableRequests.archive(
   *   'fetch-user',
   * );
   * ```
   */
  archive(
    reusableRequestKey: string,
    params: ReusableRequestArchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReusableRequestArchiveResponse> {
    const { environment } = params ?? {};
    return this._client.delete(path`/v1/reusable_requests/${reusableRequestKey}`, {
      query: { environment },
      ...options,
    });
  }

  /**
   * Unarchives a reusable request by key, with every copy archived alongside it in
   * other environments.
   *
   * Returns a 404 when the key isn't archived, including when an earlier or
   * concurrent request already restored it. Returns a 422 with the code `key_in_use`
   * when a live reusable request uses the key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reusableRequests.updateUnarchive(
   *     'fetch-user',
   *   );
   * ```
   */
  updateUnarchive(
    reusableRequestKey: string,
    params: ReusableRequestUpdateUnarchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReusableRequestUpdateUnarchiveResponse> {
    const { environment } = params ?? {};
    return this._client.put(path`/v1/reusable_requests/${reusableRequestKey}/unarchive`, {
      query: { environment },
      ...options,
    });
  }

  /**
   * Updates a reusable request of a given key, or creates a new one if it does not
   * yet exist.
   *
   * The write targets the environment in the request. Accounts that allow writes in
   * every environment can create and update in that environment. Pass force to write
   * outside the request's origin environment. When writes are limited to
   * development, this endpoint accepts the development environment unless force is
   * set.
   *
   * @example
   * ```ts
   * const response = await client.reusableRequests.upsert(
   *   'fetch-user',
   *   {
   *     reusable_request: {
   *       settings: { method: 'get' },
   *       type: 'http_fetch',
   *     },
   *   },
   * );
   * ```
   */
  upsert(
    reusableRequestKey: string,
    params: ReusableRequestUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ReusableRequestUpsertResponse> {
    const { allow_empty, annotate, branch, commit, commit_message, environment, force, ...body } = params;
    return this._client.put(path`/v1/reusable_requests/${reusableRequestKey}`, {
      query: { allow_empty, annotate, branch, commit, commit_message, environment, force },
      body,
      ...options,
    });
  }

  /**
   * Validates a reusable request payload without persisting it.
   *
   * Validation uses the environment in the request. Accounts that allow writes in
   * every environment can validate in that environment. When writes are limited to
   * development, this endpoint accepts the development environment.
   *
   * @example
   * ```ts
   * const response = await client.reusableRequests.validate(
   *   'fetch-user',
   *   {
   *     reusable_request: {
   *       settings: { method: 'get' },
   *       type: 'http_fetch',
   *     },
   *   },
   * );
   * ```
   */
  validate(
    reusableRequestKey: string,
    params: ReusableRequestValidateParams,
    options?: RequestOptions,
  ): APIPromise<ReusableRequestValidateResponse> {
    const { branch, environment, ...body } = params;
    return this._client.put(path`/v1/reusable_requests/${reusableRequestKey}/validate`, {
      query: { branch, environment },
      body,
      ...options,
    });
  }
}

export type ReusableRequestsEntriesCursor = EntriesCursor<ReusableRequest>;

/**
 * A reusable HTTP request that workflows can link to.
 */
export interface ReusableRequest {
  /**
   * The timestamp of when the reusable request was created.
   */
  created_at: string;

  /**
   * The slug of the environment in which the reusable request exists.
   */
  environment: string;

  /**
   * The unique key for the reusable request. Must be 3 to 255 characters and match
   * ^[a-z0-9_-]+$.
   */
  key: string;

  /**
   * The HTTP request a reusable request runs.
   */
  settings: ReusableRequestSettings;

  /**
   * The reusable request type. Only http_fetch is supported.
   */
  type: 'http_fetch';

  /**
   * The timestamp of when the reusable request was last updated.
   */
  updated_at: string;

  /**
   * A group of conditions to be evaluated.
   */
  conditions?: WorkflowsAPI.ConditionGroup | null;

  /**
   * An internal note about the reusable request.
   */
  description?: string | null;

  /**
   * A name for the reusable request.
   */
  name?: string | null;

  /**
   * The SHA hash of the reusable request.
   */
  sha?: string | null;
}

/**
 * A reusable request object with attributes to update or create a reusable
 * request.
 */
export interface ReusableRequestRequest {
  /**
   * The HTTP request a reusable request runs.
   */
  settings: ReusableRequestSettings;

  /**
   * The reusable request type. Only http_fetch is supported.
   */
  type: 'http_fetch';

  /**
   * A group of conditions to be evaluated.
   */
  conditions?: WorkflowsAPI.ConditionGroup | null;

  /**
   * An internal note about the reusable request.
   */
  description?: string | null;

  /**
   * A name for the reusable request.
   */
  name?: string | null;
}

/**
 * The HTTP request a reusable request runs.
 */
export interface ReusableRequestSettings {
  /**
   * The HTTP method of the request.
   */
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';

  /**
   * The body of the request. Only used for POST or PUT requests.
   */
  body?: string | null;

  /**
   * A JSON schema for inputs the request accepts.
   */
  data_input_schema?: { [key: string]: unknown } | null;

  /**
   * A JSON string of input values for the request.
   */
  data_input_values_str?: string | null;

  /**
   * The headers of the request. Can be a template string or a list of key-value
   * pairs.
   */
  headers?: string | Array<ReusableRequestSettings.RequestTemplateHeadersArray>;

  /**
   * The query params of the request. Can be a template string or a list of key-value
   * pairs.
   */
  query_params?: string | Array<ReusableRequestSettings.RequestTemplateQueryParamsArray>;

  /**
   * A JSON path into the response that is merged into the workflow data.
   */
  response_path?: string | null;

  /**
   * The signing key used to sign the request.
   */
  signing_key?: string | null;

  /**
   * The URL of the request.
   */
  url?: string;
}

export namespace ReusableRequestSettings {
  export interface RequestTemplateHeadersArray {
    /**
     * The key of the header.
     */
    key: string;

    /**
     * The value of the header.
     */
    value: string;
  }

  export interface RequestTemplateQueryParamsArray {
    /**
     * The key of the query param.
     */
    key: string;

    /**
     * The value of the query param.
     */
    value: string;
  }
}

/**
 * The response from archiving a reusable request.
 */
export interface ReusableRequestArchiveResponse {
  /**
   * The result of the archive operation.
   */
  result: string;
}

/**
 * Wraps the ReusableRequest response under the `reusable_request` key.
 */
export interface ReusableRequestUpdateUnarchiveResponse {
  /**
   * A reusable HTTP request that workflows can link to.
   */
  reusable_request: ReusableRequest;
}

/**
 * Wraps the ReusableRequest response under the `reusable_request` key.
 */
export interface ReusableRequestUpsertResponse {
  /**
   * A reusable HTTP request that workflows can link to.
   */
  reusable_request: ReusableRequest;
}

/**
 * Wraps the ReusableRequest response under the `reusable_request` key.
 */
export interface ReusableRequestValidateResponse {
  /**
   * A reusable HTTP request that workflows can link to.
   */
  reusable_request: ReusableRequest;
}

export interface ReusableRequestRetrieveParams {
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

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface ReusableRequestListParams extends EntriesCursorParams {
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

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface ReusableRequestArchiveParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface ReusableRequestUpdateUnarchiveParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface ReusableRequestUpsertParams {
  /**
   * Body param: A reusable request object with attributes to update or create a
   * reusable request.
   */
  reusable_request: ReusableRequestRequest;

  /**
   * Query param: When used with commit, creates a new version with identical content
   * and commits it if there are no unpublished changes.
   */
  allow_empty?: boolean;

  /**
   * Query param: Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
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
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Query param: When set to true, forces the upsert to override existing content
   * regardless of environment restrictions. This bypasses the development-only
   * environment check and origin environment checks.
   */
  force?: boolean;
}

export interface ReusableRequestValidateParams {
  /**
   * Body param: A reusable request object with attributes to update or create a
   * reusable request.
   */
  reusable_request: ReusableRequestRequest;

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

export declare namespace ReusableRequests {
  export {
    type ReusableRequest as ReusableRequest,
    type ReusableRequestRequest as ReusableRequestRequest,
    type ReusableRequestSettings as ReusableRequestSettings,
    type ReusableRequestArchiveResponse as ReusableRequestArchiveResponse,
    type ReusableRequestUpdateUnarchiveResponse as ReusableRequestUpdateUnarchiveResponse,
    type ReusableRequestUpsertResponse as ReusableRequestUpsertResponse,
    type ReusableRequestValidateResponse as ReusableRequestValidateResponse,
    type ReusableRequestsEntriesCursor as ReusableRequestsEntriesCursor,
    type ReusableRequestRetrieveParams as ReusableRequestRetrieveParams,
    type ReusableRequestListParams as ReusableRequestListParams,
    type ReusableRequestArchiveParams as ReusableRequestArchiveParams,
    type ReusableRequestUpdateUnarchiveParams as ReusableRequestUpdateUnarchiveParams,
    type ReusableRequestUpsertParams as ReusableRequestUpsertParams,
    type ReusableRequestValidateParams as ReusableRequestValidateParams,
  };
}
