// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../pagination';
import { RequestOptions } from '../internal/request-options';

export class Variables extends APIResource {
  /**
   * Returns a paginated list of variables for a given environment.
   */
  list(query: VariableListParams, options?: RequestOptions): PagePromise<VariablesEntriesCursor, Variable> {
    return this._client.getAPIList('/v1/variables', EntriesCursor<Variable>, { query, ...options });
  }
}

export type VariablesEntriesCursor = EntriesCursor<Variable>;

/**
 * An environment variable object.
 */
export interface Variable {
  /**
   * The timestamp of when the resource was created.
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
   * The timestamp of when the resource was last updated.
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

export interface VariableListParams extends EntriesCursorParams {
  /**
   * The environment slug. (Defaults to `development`.).
   */
  environment: string;
}

export declare namespace Variables {
  export {
    type Variable as Variable,
    type VariablesEntriesCursor as VariablesEntriesCursor,
    type VariableListParams as VariableListParams,
  };
}
