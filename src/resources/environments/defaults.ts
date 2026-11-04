// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Environments are isolated instances of your account that map to your infrastructure.
 */
export class Defaults extends APIResource {
  /**
   * Creates or replaces the default settings for an environment. The change applies
   * to the environment immediately, including production. It is not committed or
   * promoted, and concurrent writes are last-write-wins. The `preference_set`
   * replaces any existing set in full, and `null` clears it.
   *
   * @example
   * ```ts
   * const environmentDefaults =
   *   await client.environments.defaults.update('production', {
   *     preference_set: {},
   *   });
   * ```
   */
  update(
    environmentSlug: string,
    body: DefaultUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentDefaults> {
    return this._client.put(path`/v1/environments/${environmentSlug}/defaults`, { body, ...options });
  }

  /**
   * Returns the default settings for an environment. When no defaults have been set,
   * `preference_set` and both timestamps are `null`.
   *
   * @example
   * ```ts
   * const environmentDefaults =
   *   await client.environments.defaults.list('production');
   * ```
   */
  list(environmentSlug: string, options?: RequestOptions): APIPromise<EnvironmentDefaults> {
    return this._client.get(path`/v1/environments/${environmentSlug}/defaults`, options);
  }
}

/**
 * The default settings for an environment.
 */
export interface EnvironmentDefaults {
  /**
   * The timestamp of when the defaults were first set. Null when no defaults have
   * been set.
   */
  created_at: string | null;

  /**
   * A preference set applied to every recipient in the environment unless the
   * recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys
   * are not supported, because defaults are always replaced in full.
   */
  preference_set: EnvironmentDefaultsPreferenceSet | null;

  /**
   * The timestamp of when the defaults were last updated. Null when no defaults have
   * been set.
   */
  updated_at: string | null;
}

/**
 * A preference set applied to every recipient in the environment unless the
 * recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys
 * are not supported, because defaults are always replaced in full.
 */
export interface EnvironmentDefaultsPreferenceSet {
  /**
   * A map of category key to a boolean or an object containing `channel_types`,
   * `channels`, and `conditions`.
   */
  categories?: unknown;

  /**
   * A map of channel type to a boolean or an object containing `conditions`. Valid
   * channel types are `email`, `sms`, `push`, `chat`, `in_app_feed`, and `http`.
   */
  channel_types?: unknown;

  /**
   * A map of channel ID to a boolean or an object containing `conditions`.
   */
  channels?: unknown;

  /**
   * Whether the recipient is subscribed to commercial messages, as a boolean or a
   * settings object.
   */
  commercial_subscribed?: boolean | unknown;

  /**
   * A map of workflow key to a boolean or an object containing `channel_types`,
   * `channels`, and `conditions`.
   */
  workflows?: unknown;
}

export interface DefaultUpdateParams {
  /**
   * A preference set applied to every recipient in the environment unless the
   * recipient overrides it. The `__persistence_strategy__` and `__strategy__` keys
   * are not supported, because defaults are always replaced in full.
   */
  preference_set: EnvironmentDefaultsPreferenceSet | null;
}

export declare namespace Defaults {
  export {
    type EnvironmentDefaults as EnvironmentDefaults,
    type EnvironmentDefaultsPreferenceSet as EnvironmentDefaultsPreferenceSet,
    type DefaultUpdateParams as DefaultUpdateParams,
  };
}
