// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Variables extends APIResource {
  /**
   * Returns a single variable by key with per-environment value overrides.
   *
   * @example
   * ```ts
   * const variable = await client.variables.retrieve('key');
   * ```
   */
  retrieve(key: string, options?: RequestOptions): APIPromise<Variable> {
    return this._client.get(path`/v1/variables/${key}`, options);
  }

  /**
   * Returns a list of variables. When an environment is specified, returns
   * per-environment variables. Otherwise, returns project-scoped variables with
   * per-environment overrides.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const variable of client.variables.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VariableListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VariablesEntriesCursor, Variable> {
    return this._client.getAPIList('/v1/variables', EntriesCursor<Variable>, { query, ...options });
  }

  /**
   * Deletes a variable and all of its environment overrides. When an environment is
   * specified, only the override for that environment is cleared, so the default
   * value applies there.
   *
   * @example
   * ```ts
   * await client.variables.delete('key');
   * ```
   */
  delete(
    key: string,
    params: VariableDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { environment } = params ?? {};
    return this._client.delete(path`/v1/variables/${key}`, {
      query: { environment },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates or updates a variable by key, along with its per-environment overrides.
   * On an update, any attribute or environment that is omitted or null is left
   * unchanged, and an empty string unsets it. The response never includes the value
   * of a secret variable.
   *
   * @example
   * ```ts
   * const variable = await client.variables.upsert('key', {
   *   type: 'secret',
   * });
   * ```
   */
  upsert(key: string, body: VariableUpsertParams, options?: RequestOptions): APIPromise<Variable> {
    return this._client.put(path`/v1/variables/${key}`, { body, ...options });
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
   * The slug of a branch to use. When `environment` is omitted, the branch is
   * resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * The environment slug. When omitted, the account's default environment is used
   * for authorization while the response remains project-scoped.
   */
  environment?: string;

  /**
   * Filter variables by type. Supports 'public' or 'secret'.
   */
  type?: 'public' | 'secret';
}

export interface VariableDeleteParams {
  /**
   * The environment slug. When provided, only the variable's override for this
   * environment is cleared. When omitted, the whole variable is deleted, which
   * requires `variables:manage` in the account's default environment and in every
   * environment with an override.
   */
  environment?: string;
}

export interface VariableUpsertParams {
  /**
   * The type of the variable. Required, and it cannot be changed after the variable
   * is created.
   */
  type: 'public' | 'secret';

  /**
   * The description of the variable. When omitted or null on an update, the existing
   * description is kept. An empty string clears it.
   */
  description?: string | null;

  /**
   * A map of root environment slugs to override values. An environment that is
   * omitted or null is left unchanged. An empty string clears the override, so the
   * default value applies.
   */
  environment_values?: { [key: string]: string | null };

  /**
   * The default value of the variable. Required when creating a variable. When
   * omitted or null on an update, the existing value is kept. An empty string clears
   * the default value.
   */
  value?: string | null;
}

export declare namespace Variables {
  export {
    type Variable as Variable,
    type VariablesEntriesCursor as VariablesEntriesCursor,
    type VariableListParams as VariableListParams,
    type VariableDeleteParams as VariableDeleteParams,
    type VariableUpsertParams as VariableUpsertParams,
  };
}
