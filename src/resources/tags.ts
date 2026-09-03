// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Tags are a project-level catalog of labels that can be applied to workflows, partials, guides, and broadcasts.
 */
export class Tags extends APIResource {
  /**
   * Returns all tags in the project's catalog, ordered by name. Tags are
   * project-scoped and not tied to an environment.
   *
   * @example
   * ```ts
   * const tags = await client.tags.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/v1/tags', options);
  }

  /**
   * Deletes a tag by name.
   *
   * @example
   * ```ts
   * await client.tags.delete('name');
   * ```
   */
  delete(name: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/tags/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a tag by name. If a tag with the same name already exists, updates its
   * description and color. Omitted description and color fields are set to null.
   *
   * @example
   * ```ts
   * const response = await client.tags.upsert('name', {
   *   tag: {},
   * });
   * ```
   */
  upsert(name: string, body: TagUpsertParams, options?: RequestOptions): APIPromise<TagUpsertResponse> {
    return this._client.put(path`/v1/tags/${name}`, { body, ...options });
  }
}

/**
 * A named tag in a project's resource-tag catalog.
 */
export interface Tag {
  /**
   * The timestamp of when the tag was created.
   */
  created_at: string;

  /**
   * The unique name of the tag within a project.
   */
  name: string;

  /**
   * The timestamp of when the tag was last updated.
   */
  updated_at: string;

  /**
   * An optional hex color for the tag (e.g. #3B82F6).
   */
  color?: string | null;

  /**
   * An optional description of the tag.
   */
  description?: string | null;
}

/**
 * A list of tags in the project's catalog.
 */
export interface TagListResponse {
  /**
   * Tags, ordered by name.
   */
  entries: Array<Tag>;
}

/**
 * Wraps the Tag response under the `tag` key.
 */
export interface TagUpsertResponse {
  /**
   * A named tag in a project's resource-tag catalog.
   */
  tag: Tag;
}

export interface TagUpsertParams {
  /**
   * A request to create or update a tag. The tag name is taken from the path. On
   * conflict, omitted description and color fields are set to null.
   */
  tag: TagUpsertParams.Tag;
}

export namespace TagUpsertParams {
  /**
   * A request to create or update a tag. The tag name is taken from the path. On
   * conflict, omitted description and color fields are set to null.
   */
  export interface Tag {
    /**
     * An optional hex color for the tag (e.g. #3B82F6).
     */
    color?: string | null;

    /**
     * An optional description of the tag.
     */
    description?: string | null;
  }
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagUpsertResponse as TagUpsertResponse,
    type TagUpsertParams as TagUpsertParams,
  };
}
