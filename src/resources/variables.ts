// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Variables extends APIResource {
  /**
   * Returns a paginated list of variables for a given environment.
   */
  list(query: VariableListParams, options?: RequestOptions): APIPromise<VariableListResponse> {
    return this._client.get('/v1/variables', { query, ...options });
  }
}

/**
 * An environment variable object.
 */
export interface Variable {
  /**
   * The date and time the variable was created.
   */
  inserted_at: string;

  /**
   * The key of the variable.
   */
  key: string;

  /**
   * The type of the variable.
   */
  type: 'public' | 'secret';

  /**
   * The date and time the variable was last updated.
   */
  updated_at: string;

  /**
   * The value of the variable.
   */
  value: string;

  /**
   * The description of the variable.
   */
  description?: string | null;
}

/**
 * A paginated list of Variable. Contains a list of entries and page information.
 */
export interface VariableListResponse {
  entries: Array<Variable>;

  /**
   * The information about a paginated result
   */
  page_info: Shared.PageInfo;
}

export interface VariableListParams {
  /**
   * The environment slug to list variables for
   */
  environment: string;

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

export declare namespace Variables {
  export {
    type Variable as Variable,
    type VariableListResponse as VariableListResponse,
    type VariableListParams as VariableListParams,
  };
}
