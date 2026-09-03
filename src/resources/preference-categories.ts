// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Preference categories are a project-level catalog of categories that can be applied to workflows and broadcasts.
 */
export class PreferenceCategories extends APIResource {
  /**
   * Returns all preference categories in the project's catalog, ordered by name.
   * Preference categories are project-scoped and not tied to an environment.
   *
   * @example
   * ```ts
   * const preferenceCategories =
   *   await client.preferenceCategories.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PreferenceCategoryListResponse> {
    return this._client.get('/v1/preference_categories', options);
  }

  /**
   * Archives a preference category by name.
   *
   * @example
   * ```ts
   * await client.preferenceCategories.delete('name');
   * ```
   */
  delete(name: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/preference_categories/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a preference category by name. If a non-archived category with the same
   * name already exists, returns the existing category.
   *
   * @example
   * ```ts
   * const response = await client.preferenceCategories.upsert(
   *   'name',
   * );
   * ```
   */
  upsert(name: string, options?: RequestOptions): APIPromise<PreferenceCategoryUpsertResponse> {
    return this._client.put(path`/v1/preference_categories/${name}`, options);
  }
}

/**
 * A named preference category in a project's catalog.
 */
export interface PreferenceCategory {
  /**
   * The timestamp of when the preference category was created.
   */
  created_at: string;

  /**
   * The unique name of the preference category within a project.
   */
  name: string;

  /**
   * The timestamp of when the preference category was last updated.
   */
  updated_at: string;

  /**
   * The timestamp of when the preference category was archived.
   */
  archived_at?: string | null;
}

/**
 * A list of preference categories in the project's catalog.
 */
export interface PreferenceCategoryListResponse {
  /**
   * Preference categories, ordered by name.
   */
  entries: Array<PreferenceCategory>;
}

/**
 * Wraps the PreferenceCategory response under the `preference_category` key.
 */
export interface PreferenceCategoryUpsertResponse {
  /**
   * A named preference category in a project's catalog.
   */
  preference_category: PreferenceCategory;
}

export declare namespace PreferenceCategories {
  export {
    type PreferenceCategory as PreferenceCategory,
    type PreferenceCategoryListResponse as PreferenceCategoryListResponse,
    type PreferenceCategoryUpsertResponse as PreferenceCategoryUpsertResponse,
  };
}
