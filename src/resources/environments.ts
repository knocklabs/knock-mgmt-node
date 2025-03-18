// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Returns a single environment by its slug.
   */
  retrieve(environmentSlug: string, options?: RequestOptions): APIPromise<Environment> {
    return this._client.get(path`/v1/environments/${environmentSlug}`, options);
  }

  /**
   * Returns a paginated list of environments. The environments will be returned in
   * order of their index, with the `development` environment first.
   */
  list(
    query: EnvironmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EnvironmentsEntriesCursor, Environment> {
    return this._client.getAPIList('/v1/environments', EntriesCursor<Environment>, { query, ...options });
  }
}

export type EnvironmentsEntriesCursor = EntriesCursor<Environment>;

/**
 * An environment object.
 */
export interface Environment {
  /**
   * The timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * A friendly name for the environment. Cannot exceed 255 characters.
   */
  name: string;

  /**
   * The order of the environment. 0 is the first environment, 1 is the second, etc.
   */
  order: number;

  /**
   * The owner of the environment.
   */
  owner: 'system' | 'user';

  /**
   * A unique slug for the environment. Cannot exceed 255 characters.
   */
  slug: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  updated_at: string;

  /**
   * The timestamp of when the resource was deleted.
   */
  deleted_at?: string | null;

  /**
   * Whether PII data is hidden from the environment.
   */
  hide_pii_data?: boolean;

  /**
   * The color of the environment label to display in the dashboard.
   */
  label_color?: string | null;

  /**
   * The last time the environment was committed to.
   */
  last_commit_at?: string | null;
}

export interface EnvironmentListParams extends EntriesCursorParams {}

export declare namespace Environments {
  export {
    type Environment as Environment,
    type EnvironmentsEntriesCursor as EnvironmentsEntriesCursor,
    type EnvironmentListParams as EnvironmentListParams,
  };
}
