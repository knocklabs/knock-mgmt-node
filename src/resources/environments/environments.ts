// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DefaultsAPI from './defaults';
import {
  DefaultUpdateParams,
  Defaults,
  EnvironmentDefaults,
  EnvironmentDefaultsPreferenceSet,
} from './defaults';
import { APIPromise } from '../../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Environments are isolated instances of your account that map to your infrastructure.
 */
export class Environments extends APIResource {
  defaults: DefaultsAPI.Defaults = new DefaultsAPI.Defaults(this._client);

  /**
   * Creates an environment. The slug is derived from the `name`. Without
   * `preceding_environment`, the environment is placed just before Production.
   * Creating an environment also creates its public and secret API keys and copies
   * the project's variables, channel and source settings, and preference center into
   * it. Everything committed in the preceding environment is then promoted into it
   * asynchronously, so its content may not be available as soon as this request
   * returns. Requires environments to be enabled on the account.
   *
   * @example
   * ```ts
   * const environment = await client.environments.create({
   *   name: 'Staging',
   * });
   * ```
   */
  create(body: EnvironmentCreateParams, options?: RequestOptions): APIPromise<Environment> {
    return this._client.post('/v1/environments', { body, ...options });
  }

  /**
   * Returns a single environment by the `environment_slug`.
   *
   * @example
   * ```ts
   * const environment = await client.environments.retrieve(
   *   'development',
   * );
   * ```
   */
  retrieve(environmentSlug: string, options?: RequestOptions): APIPromise<Environment> {
    return this._client.get(path`/v1/environments/${environmentSlug}`, options);
  }

  /**
   * Updates an environment. Omitted fields are left unchanged, and at least one
   * field is required. What can change depends on the environment's `owner`.
   * Environments you create (`user`) can change `name`, `label_color` and
   * `hide_pii_data`. Renaming one also changes its slug, and the response holds the
   * new slug. Later requests must use the new slug, and permission groups that
   * reference the environment are updated to match. Production can change its
   * `name`, but its slug stays `production`. Other Knock-defined environments, such
   * as Development, can only change `label_color` and `hide_pii_data`. Sending them
   * a `name` other than their current one returns an error.
   *
   * @example
   * ```ts
   * const environment = await client.environments.update(
   *   'staging',
   * );
   * ```
   */
  update(
    environmentSlug: string,
    body: EnvironmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Environment> {
    return this._client.put(path`/v1/environments/${environmentSlug}`, { body, ...options });
  }

  /**
   * Returns a paginated list of visible environments in catalog order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environment of client.environments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EnvironmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EnvironmentsEntriesCursor, Environment> {
    return this._client.getAPIList('/v1/environments', EntriesCursor<Environment>, { query, ...options });
  }

  /**
   * Deletes an environment you created (`owner` is `user`). Every API key in the
   * environment is revoked first, so any integration still using those keys stops
   * working. A deleted environment can't be restored from the API or the dashboard.
   * Knock-defined environments, such as Development and Production, can't be
   * deleted. To delete a branch, use the delete branch endpoint.
   *
   * @example
   * ```ts
   * await client.environments.delete('staging');
   * ```
   */
  delete(environmentSlug: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/environments/${environmentSlug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EnvironmentsEntriesCursor = EntriesCursor<Environment>;

/**
 * An environment object.
 */
export interface Environment {
  /**
   * The timestamp of when the environment was created.
   */
  created_at: string;

  /**
   * A human-readable name for the environment. Cannot exceed 255 characters.
   */
  name: string;

  /**
   * The order of the environment. The lowest number is the first environment, the
   * highest number is the last environment. The order will not always be sequential.
   */
  order: number;

  /**
   * Who created the environment. `system` environments, such as Development and
   * Production, are defined by Knock: they can't be deleted, and only Production can
   * be renamed. `user` environments were created by you and can be renamed or
   * deleted.
   */
  owner: 'system' | 'user';

  /**
   * A unique slug for the environment. Cannot exceed 255 characters.
   */
  slug: string;

  /**
   * The timestamp of when the environment was last updated.
   */
  updated_at: string;

  /**
   * Whether the environment is part of the account catalog.
   */
  visibility: 'visible' | 'hidden';

  /**
   * The timestamp of when the environment was deleted.
   */
  deleted_at?: string | null;

  /**
   * Whether PII data is hidden from the environment. Read more in the
   * [data obfuscation docs](https://docs.knock.app/manage-your-account/data-obfuscation).
   */
  hide_pii_data?: boolean;

  /**
   * The color of the environment label to display in the dashboard.
   */
  label_color?: string | null;

  /**
   * The timestamp of the most-recent commit in the environment.
   */
  last_commit_at?: string | null;
}

export interface EnvironmentCreateParams {
  /**
   * A human-readable name for the environment. The environment's slug is derived
   * from it and must be unique in the project.
   */
  name: string;

  /**
   * Whether to hide PII data in the dashboard for the environment. Read more in the
   * [data obfuscation docs](https://docs.knock.app/manage-your-account/data-obfuscation).
   */
  hide_pii_data?: boolean;

  /**
   * A 3- or 6-digit hex color code for the environment label in the dashboard. A
   * color is picked at random when omitted.
   */
  label_color?: string | null;

  /**
   * The slug of the environment the new environment comes directly after. Cannot be
   * the last environment (Production). Defaults to the environment just before
   * Production.
   */
  preceding_environment?: string | null;
}

export interface EnvironmentUpdateParams {
  /**
   * Whether to hide PII data in the dashboard for the environment. Read more in the
   * [data obfuscation docs](https://docs.knock.app/manage-your-account/data-obfuscation).
   */
  hide_pii_data?: boolean;

  /**
   * A 3- or 6-digit hex color code for the environment label in the dashboard.
   */
  label_color?: string;

  /**
   * A new name for the environment. Renaming an environment you created also changes
   * its slug. Production keeps its slug. Other Knock-defined environments can't be
   * renamed, and a name other than their current one returns an error.
   */
  name?: string;
}

export interface EnvironmentListParams extends EntriesCursorParams {}

Environments.Defaults = Defaults;

export declare namespace Environments {
  export {
    type Environment as Environment,
    type EnvironmentsEntriesCursor as EnvironmentsEntriesCursor,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
  };

  export {
    Defaults as Defaults,
    type EnvironmentDefaults as EnvironmentDefaults,
    type EnvironmentDefaultsPreferenceSet as EnvironmentDefaultsPreferenceSet,
    type DefaultUpdateParams as DefaultUpdateParams,
  };
}
