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
   * Updates a partial of a given key, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates on partials in the “development” environment.
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
   * Note: this endpoint only operates on partials in the “development” environment.
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
    | Shared.MessageTypeListField
    | Shared.MessageTypeSelectField
    | Shared.MessageTypeBooleanField
    | Shared.MessageTypeJsonField
    | Shared.MessageTypeNumberField
    | Shared.MessageTypeTextField
    | Shared.MessageTypeImageField
    | Shared.MessageTypeColorField
    | Shared.MessageTypeURLField
    | Shared.MessageTypeMarkdownField
    | Shared.MessageTypeMultiSelectField
    | Shared.MessageTypeButtonField
    | Shared.MessageTypeTextareaField
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
    | Shared.MessageTypeListField
    | Shared.MessageTypeSelectField
    | Shared.MessageTypeBooleanField
    | Shared.MessageTypeJsonField
    | Shared.MessageTypeNumberField
    | Shared.MessageTypeTextField
    | Shared.MessageTypeImageField
    | Shared.MessageTypeColorField
    | Shared.MessageTypeURLField
    | Shared.MessageTypeMarkdownField
    | Shared.MessageTypeMultiSelectField
    | Shared.MessageTypeButtonField
    | Shared.MessageTypeTextareaField
  >;

  /**
   * Indicates whether the partial can be used in the visual editor. Only applies to
   * HTML partials.
   */
  visual_block_enabled?: boolean;
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
    type PartialPreviewResponse as PartialPreviewResponse,
    type PartialUpsertResponse as PartialUpsertResponse,
    type PartialValidateResponse as PartialValidateResponse,
    type PartialResourcesEntriesCursor as PartialResourcesEntriesCursor,
    type PartialRetrieveParams as PartialRetrieveParams,
    type PartialListParams as PartialListParams,
    type PartialPreviewParams as PartialPreviewParams,
    type PartialUpsertParams as PartialUpsertParams,
    type PartialValidateParams as PartialValidateParams,
  };
}
