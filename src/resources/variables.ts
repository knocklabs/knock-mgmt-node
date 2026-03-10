// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Variables extends APIResource {
  /**
   * Returns a list of variables. When an environment is specified, returns
   * per-environment variables. Otherwise, returns project-scoped variables with
   * per-environment overrides.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const variable of client.variables.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
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
   * The timestamp of when the variable was created.
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
   * The timestamp of when the variable was last updated.
   */
  updated_at: string;

  /**
   * The description of the variable.
   */
  description?: string | null;

  /**
   * A map of environment slugs to their override values. Only present for
   * project-scoped responses.
   */
  environment_values?: { [key: string]: string | null };

  /**
   * The default value of the variable. For secret variables, this is obfuscated.
   */
  value?: string | null;
}

export interface VariableListParams extends EntriesCursorParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * Filter variables by type. Supports 'public' or 'secret'.
   */
  type?: 'public' | 'secret';
}

export declare namespace Variables {
  export {
    type Variable as Variable,
    type VariablesEntriesCursor as VariablesEntriesCursor,
    type VariableListParams as VariableListParams,
  };
}
