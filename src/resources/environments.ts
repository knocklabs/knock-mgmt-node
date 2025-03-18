// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
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
  ): APIPromise<EnvironmentListResponse> {
    return this._client.get('/v1/environments', { query, ...options });
  }
}

/**
 * An environment object
 */
export interface Environment {
  /**
   * The date and time the environment was created
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
   * The owner of the environment
   */
  owner: 'system' | 'user';

  /**
   * A unique slug for the environment. Cannot exceed 255 characters.
   */
  slug: string;

  /**
   * The last time the environment was updated
   */
  updated_at: string;

  /**
   * The date and time the environment was deleted
   */
  deleted_at?: string | null;

  /**
   * Whether PII data is hidden from the environment
   */
  hide_pii_data?: boolean;

  /**
   * The color of the environment label to display in the dashboard
   */
  label_color?: string | null;

  /**
   * The last time the environment was committed to
   */
  last_commit_at?: string | null;
}

/**
 * A paginated list of Environment. Contains a list of entries and page
 * information.
 */
export interface EnvironmentListResponse {
  entries: Array<Environment>;

  /**
   * The information about a paginated result
   */
  page_info: Shared.PageInfo;
}

export interface EnvironmentListParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The number of entries to fetch
   */
  limit?: number;
}

export declare namespace Environments {
  export {
    type Environment as Environment,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentListParams as EnvironmentListParams,
  };
}
