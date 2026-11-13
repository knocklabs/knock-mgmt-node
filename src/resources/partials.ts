// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Partials allow you to reuse content across templates.
 */
export class Partials extends APIResource {
  /**
   * Get a partial by its key.
   *
   * @example
   * ```ts
   * const partialResource = await client.partials.retrieve(
   *   'partial_key',
   * );
   * ```
   */
  retrieve(
    partialKey: string,
    query: PartialRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartialResource> {
    return this._client.get(path`/v1/partials/${partialKey}`, { query, ...options });
  }

  /**
   * List all partials for a given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const partialResource of client.partials.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PartialListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PartialResourcesEntriesCursor, PartialResource> {
    return this._client.getAPIList('/v1/partials', EntriesCursor<PartialResource>, { query, ...options });
  }

  /**
   * Archives a partial by key across all environments, not only the one in the
   * request. The token needs the `partials:manage` permission in every environment
   * that holds a copy of the partial.
   *
   * Archiving renames the partial's key in every environment, so a new partial can
   * use the key. Templates that reference the archived partial keep using it until
   * their workflow is next committed, and it can't be added to new templates.
   * Restore it with the unarchive endpoint, using its original key.
   *
   * Returns a 422 with the code `partial_in_use` while a workflow or an unsent
   * broadcast in any environment uses the partial. Remove it from them first.
   * Returns a 404 when no live partial has the key, including when it's already
   * archived.
   *
   * @example
   * ```ts
   * const partial = await client.partials.delete('partial_key');
   * ```
   */
  delete(
    partialKey: string,
    params: PartialDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartialDeleteResponse> {
    const { environment } = params ?? {};
    return this._client.delete(path`/v1/partials/${partialKey}`, { query: { environment }, ...options });
  }

  /**
   * Discards the uncommitted changes to a partial in a given environment, returning
   * it to its last committed version. Other environments aren't changed.
   *
   * Returns the partial unchanged when it has no uncommitted changes. Returns a 422
   * when the partial has never been committed, or can't be changed in the
   * environment.
   *
   * @example
   * ```ts
   * const response = await client.partials.discard(
   *   'partial_key',
   * );
   * ```
   */
  discard(
    partialKey: string,
    params: PartialDiscardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartialDiscardResponse> {
    const { branch, environment } = params ?? {};
    return this._client.put(path`/v1/partials/${partialKey}/discard`, {
      query: { branch, environment },
      ...options,
    });
  }

  /**
   * Renders a partial in isolation, without requiring the partial to be persisted in
   * Knock.
   *
   * Useful for iterating on a partial locally and seeing how it renders against
   * sample data.
   *
   * @example
   * ```ts
   * const response = await client.partials.preview({
   *   partial: {
   *     content: '<p>Hello, {{ name }}!</p>',
   *     name: 'My Partial',
   *     type: 'html',
   *   },
   * });
   * ```
   */
  preview(params: PartialPreviewParams, options?: RequestOptions): APIPromise<PartialPreviewResponse> {
    const { branch, environment, ...body } = params;
    return this._client.post('/v1/partials/preview', { query: { branch, environment }, body, ...options });
  }

  /**
   * Restores an archived partial by its original key, with every copy archived
   * alongside it in other environments. The token needs the `partials:manage`
   * permission in every environment that holds a copy of the archived partial.
   *
   * When the key was archived more than once, the most recent archive in the
   * environment is restored.
   *
   * Returns a 404 when the key isn't archived in the environment, including when an
   * earlier or concurrent request already restored it. Returns a 422 with the code
   * `key_in_use` when a live partial uses the key.
   *
   * @example
   * ```ts
   * const response = await client.partials.unarchive(
   *   'partial_key',
   * );
   * ```
   */
  unarchive(
    partialKey: string,
    params: PartialUnarchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartialUnarchiveResponse> {
    const { environment } = params ?? {};
    return this._client.put(path`/v1/partials/${partialKey}/unarchive`, {
      query: { environment },
      ...options,
    });
  }

  /**
   * Updates a partial of a given key, or creates a new one if it does not yet exist.
   *
   * The write targets the environment in the request. Accounts that allow writes in
   * every environment can create and update in that environment. Pass force to write
   * outside the request's origin environment. When writes are limited to
   * development, this endpoint accepts the development environment unless force is
   * set.
   *
   * @example
   * ```ts
   * const response = await client.partials.upsert(
   *   'partial_key',
   *   {
   *     partial: {
   *       content: '<p>Hello, world!</p>',
   *       name: 'My Partial',
   *       type: 'html',
   *     },
   *   },
   * );
   * ```
   */
  upsert(
    partialKey: string,
    params: PartialUpsertParams,
    options?: RequestOptions,
  ): APIPromise<PartialUpsertResponse> {
    const { allow_empty, annotate, branch, commit, commit_message, environment, force, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}`, {
      query: { allow_empty, annotate, branch, commit, commit_message, environment, force },
      body,
      ...options,
    });
  }

  /**
   * Validates a partial payload without persisting it.
   *
   * Validation uses the environment in the request. Accounts that allow writes in
   * every environment can validate in that environment. When writes are limited to
   * development, this endpoint accepts the development environment.
   *
   * @example
   * ```ts
   * const response = await client.partials.validate(
   *   'partial_key',
   *   {
   *     partial: {
   *       content: '<p>Hello, world!</p>',
   *       name: 'My Partial',
   *       type: 'html',
   *     },
   *   },
   * );
   * ```
   */
  validate(
    partialKey: string,
    params: PartialValidateParams,
    options?: RequestOptions,
  ): APIPromise<PartialValidateResponse> {
    const { branch, environment, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}/validate`, {
      query: { branch, environment },
      body,
      ...options,
    });
  }
}

export type PartialResourcesEntriesCursor = EntriesCursor<PartialResource>;

/**
 * A partial object with attributes to update or create a partial.
 */
export interface PartialRequest {
  /**
   * The partial content.
   */
  content: string;

  /**
   * A name for the partial. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * The partial type. One of 'html', 'json', 'markdown', 'text'.
   */
  type: 'html' | 'text' | 'json' | 'markdown';

  /**
   * An arbitrary string attached to a partial object. Useful for adding notes about
   * the partial for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string;

  /**
   * The name of the icon to be used in the visual editor.
   */
  icon_name?: string;

  /**
   * The field types available for the partial.
   */
  input_schema?: Array<
    | Shared.MessageTypeBooleanField
    | Shared.MessageTypeButtonField
    | Shared.MessageTypeColorField
    | Shared.MessageTypeImageField
    | Shared.MessageTypeJsonField
    | Shared.MessageTypeListField
    | Shared.MessageTypeMarkdownField
    | Shared.MessageTypeMultiSelectField
    | Shared.MessageTypeNumberField
    | Shared.MessageTypeSelectField
    | Shared.MessageTypeTextField
    | Shared.MessageTypeTextareaField
    | Shared.MessageTypeURLField
  >;

  /**
   * Indicates whether the partial can be used in the visual editor. Only applies to
   * HTML partials.
   */
  visual_block_enabled?: boolean;
}

/**
 * A partial is a reusable piece of content that can be used in a template.
 */
export interface PartialResource {
  /**
   * The partial content.
   */
  content: string;

  /**
   * The timestamp of when the partial was created.
   */
  inserted_at: string;

  /**
   * The unique key string for the partial object. Must be at minimum 3 characters
   * and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
   */
  key: string;

  /**
   * A name for the partial. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * The partial type. One of 'html', 'json', 'markdown', 'text'.
   */
  type: 'html' | 'text' | 'json' | 'markdown';

  /**
   * The timestamp of when the partial was last updated.
   */
  updated_at: string;

  /**
   * Whether the partial and its content are in a valid state.
   */
  valid: boolean;

  /**
   * An arbitrary string attached to a partial object. Useful for adding notes about
   * the partial for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string;

  /**
   * The slug of the environment in which the partial exists.
   */
  environment?: string;

  /**
   * The name of the icon to be used in the visual editor.
   */
  icon_name?: string;

  /**
   * The field types available for the partial.
   */
  input_schema?: Array<
    | Shared.MessageTypeBooleanField
    | Shared.MessageTypeButtonField
    | Shared.MessageTypeColorField
    | Shared.MessageTypeImageField
    | Shared.MessageTypeJsonField
    | Shared.MessageTypeListField
    | Shared.MessageTypeMarkdownField
    | Shared.MessageTypeMultiSelectField
    | Shared.MessageTypeNumberField
    | Shared.MessageTypeSelectField
    | Shared.MessageTypeTextField
    | Shared.MessageTypeTextareaField
    | Shared.MessageTypeURLField
  >;

  /**
   * Indicates whether the partial can be used in the visual editor. Only applies to
   * HTML partials.
   */
  visual_block_enabled?: boolean;
}

/**
 * The response from archiving a partial.
 */
export interface PartialDeleteResponse {
  /**
   * The result of the archive operation.
   */
  result: string;
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialDiscardResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: PartialResource;
}

/**
 * A response to a partial preview request.
 */
export interface PartialPreviewResponse {
  /**
   * The result of the preview.
   */
  result: 'success' | 'error';

  /**
   * The partial type that was rendered.
   */
  type: 'html' | 'text' | 'json' | 'markdown';

  /**
   * The rendered partial content. Present when result is `success`.
   */
  content?: string | null;

  /**
   * A list of errors encountered during rendering. Present when result is `error`.
   */
  errors?: Array<PartialPreviewResponse.Error> | null;
}

export namespace PartialPreviewResponse {
  export interface Error {
    /**
     * A human-readable description of the error.
     */
    message: string;

    /**
     * The partial field that caused the error, if available.
     */
    field?: string | null;
  }
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialUnarchiveResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: PartialResource;
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialUpsertResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: PartialResource;
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialValidateResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: PartialResource;
}

export interface PartialRetrieveParams {
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

export interface PartialListParams extends EntriesCursorParams {
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

export interface PartialDeleteParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface PartialDiscardParams {
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

export interface PartialPreviewParams {
  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialRequest;

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

  /**
   * Body param: The data to pass to the partial when rendering. Top-level keys are
   * exposed as variables in the partial template.
   */
  data?: { [key: string]: unknown };

  /**
   * Body param: Email layout configuration. Only applicable for `html` partials.
   * When omitted, the rendered partial is returned unwrapped.
   */
  layout?: PartialPreviewParams.Layout | null;
}

export namespace PartialPreviewParams {
  /**
   * Email layout configuration. Only applicable for `html` partials. When omitted,
   * the rendered partial is returned unwrapped.
   */
  export interface Layout {
    /**
     * The key of an existing email layout to use.
     */
    key?: string | null;
  }
}

export interface PartialUnarchiveParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface PartialUpsertParams {
  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialRequest;

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

export interface PartialValidateParams {
  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialRequest;

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

export declare namespace Partials {
  export {
    type PartialRequest as PartialRequest,
    type PartialResource as PartialResource,
    type PartialDeleteResponse as PartialDeleteResponse,
    type PartialDiscardResponse as PartialDiscardResponse,
    type PartialPreviewResponse as PartialPreviewResponse,
    type PartialUnarchiveResponse as PartialUnarchiveResponse,
    type PartialUpsertResponse as PartialUpsertResponse,
    type PartialValidateResponse as PartialValidateResponse,
    type PartialResourcesEntriesCursor as PartialResourcesEntriesCursor,
    type PartialRetrieveParams as PartialRetrieveParams,
    type PartialListParams as PartialListParams,
    type PartialDeleteParams as PartialDeleteParams,
    type PartialDiscardParams as PartialDiscardParams,
    type PartialPreviewParams as PartialPreviewParams,
    type PartialUnarchiveParams as PartialUnarchiveParams,
    type PartialUpsertParams as PartialUpsertParams,
    type PartialValidateParams as PartialValidateParams,
  };
}
