// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Partials extends APIResource {
  /**
   * Get a partial by its key.
   */
  retrieve(partialKey: string, query: PartialRetrieveParams, options?: RequestOptions): APIPromise<Partial> {
    return this._client.get(path`/v1/partials/${partialKey}`, { query, ...options });
  }

  /**
   * List all partials for a given environment.
   */
  list(query: PartialListParams, options?: RequestOptions): APIPromise<PartialListResponse> {
    return this._client.get('/v1/partials', { query, ...options });
  }

  /**
   * Updates a partial of a given key, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates on partials in the “development” environment.
   */
  upsert(
    partialKey: string,
    params: PartialUpsertParams,
    options?: RequestOptions,
  ): APIPromise<PartialUpsertResponse> {
    const { environment, annotate, commit, commit_message, hide_uncommitted_changes, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}`, {
      query: { environment, annotate, commit, commit_message, hide_uncommitted_changes },
      body,
      ...options,
    });
  }

  /**
   * Validates a partial payload without persisting it.
   *
   * Note: this endpoint only operates on partials in the “development” environment.
   */
  validate(
    partialKey: string,
    params: PartialValidateParams,
    options?: RequestOptions,
  ): APIPromise<PartialValidateResponse> {
    const { environment, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}/validate`, {
      query: { environment },
      body,
      ...options,
    });
  }
}

/**
 * A partial is a reusable piece of content that can be used in a template.
 */
export interface Partial {
  /**
   * The partial content.
   */
  content: string;

  /**
   * The date and time the partial was created.
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
   * The date and time the partial was last updated.
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
   * Indicates whether the partial can be used in the visual editor. Only applies to
   * HTML partials.
   */
  visual_block_enabled?: boolean;
}

/**
 * A paginated list of Partial. Contains a list of entries and page information.
 */
export interface PartialListResponse {
  entries: Array<Partial>;

  /**
   * The information about a paginated result
   */
  page_info: Shared.PageInfo;
}

/**
 * Wraps the Partial response under the partial key.
 */
export interface PartialUpsertResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: Partial;
}

/**
 * Wraps the Partial response under the partial key.
 */
export interface PartialValidateResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: Partial;
}

export interface PartialRetrieveParams {
  /**
   * A slug of the environment from which to query the partial.
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

export interface PartialListParams {
  /**
   * A slug of the environment from which to query partials.
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

export interface PartialUpsertParams {
  /**
   * Query param: A slug of the environment in which to upsert the partial.
   */
  environment: string;

  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialUpsertParams.Partial;

  /**
   * Query param: Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Query param: Whether to commit the resource at the same time as modifying it
   */
  commit?: boolean;

  /**
   * Query param: The message to commit the resource with
   */
  commit_message?: string;

  /**
   * Query param: Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export namespace PartialUpsertParams {
  /**
   * A partial object with attributes to update or create a partial.
   */
  export interface Partial {
    /**
     * The content of the partial.
     */
    content: string;

    /**
     * The name of the partial.
     */
    name: string;

    /**
     * The type of the partial.
     */
    type: 'html' | 'text' | 'json' | 'markdown';

    /**
     * The description of the partial.
     */
    description?: string | null;

    /**
     * The name of the icon to be used in the visual editor. Only relevant when
     * `visual_block_enabled` is `true`.
     */
    icon_name?: string | null;

    /**
     * Indicates whether the partial can be used in the visual editor. Only applies to
     * HTML partials.
     */
    visual_block_enabled?: boolean | null;
  }
}

export interface PartialValidateParams {
  /**
   * Query param: A slug of the environment in which to validate the partial.
   */
  environment: string;

  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialValidateParams.Partial;
}

export namespace PartialValidateParams {
  /**
   * A partial object with attributes to update or create a partial.
   */
  export interface Partial {
    /**
     * The content of the partial.
     */
    content: string;

    /**
     * The name of the partial.
     */
    name: string;

    /**
     * The type of the partial.
     */
    type: 'html' | 'text' | 'json' | 'markdown';

    /**
     * The description of the partial.
     */
    description?: string | null;

    /**
     * The name of the icon to be used in the visual editor. Only relevant when
     * `visual_block_enabled` is `true`.
     */
    icon_name?: string | null;

    /**
     * Indicates whether the partial can be used in the visual editor. Only applies to
     * HTML partials.
     */
    visual_block_enabled?: boolean | null;
  }
}

export declare namespace Partials {
  export {
    type Partial as Partial,
    type PartialListResponse as PartialListResponse,
    type PartialUpsertResponse as PartialUpsertResponse,
    type PartialValidateResponse as PartialValidateResponse,
    type PartialRetrieveParams as PartialRetrieveParams,
    type PartialListParams as PartialListParams,
    type PartialUpsertParams as PartialUpsertParams,
    type PartialValidateParams as PartialValidateParams,
  };
}
