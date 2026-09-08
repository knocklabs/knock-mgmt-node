// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PreferenceCenter extends APIResource {
  /**
   * Returns the preference center configuration for the given environment.
   *
   * @example
   * ```ts
   * const preferenceCenter =
   *   await client.preferenceCenter.retrieve();
   * ```
   */
  retrieve(
    query: PreferenceCenterRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferenceCenterRetrieveResponse> {
    return this._client.get('/v1/preference_center', { query, ...options });
  }

  /**
   * Resets the preference center configuration for the given environment to the
   * built-in default content. The `enabled` flag is preserved.
   *
   * @example
   * ```ts
   * const response = await client.preferenceCenter.reset();
   * ```
   */
  reset(
    params: PreferenceCenterResetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferenceCenterResetResponse> {
    const { environment } = params ?? {};
    return this._client.put('/v1/preference_center/reset', { query: { environment }, ...options });
  }

  /**
   * Creates or updates the preference center configuration for the given
   * environment.
   *
   * @example
   * ```ts
   * const response = await client.preferenceCenter.upsert({
   *   config: {
   *     body: 'Select which communications you’d like to receive from us.',
   *     rows: [
   *       {
   *         description:
   *           'Receive promotional and non-essential notifications.',
   *         name: 'Commercial messages',
   *         type: 'commercial_subscribed',
   *       },
   *     ],
   *     show_account_name: true,
   *     title: 'Manage preferences',
   *   },
   * });
   * ```
   */
  upsert(
    params: PreferenceCenterUpsertParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceCenterUpsertResponse> {
    const { environment, ...body } = params;
    return this._client.put('/v1/preference_center', { query: { environment }, body, ...options });
  }
}

/**
 * The preference center configuration for a single environment.
 */
export interface PreferenceCenterRetrieveResponse {
  /**
   * The preference center configuration document.
   */
  config?: unknown;

  /**
   * Whether the preference center is enabled for recipients.
   */
  enabled?: boolean;
}

/**
 * The preference center configuration for a single environment.
 */
export interface PreferenceCenterResetResponse {
  /**
   * The preference center configuration document.
   */
  config?: unknown;

  /**
   * Whether the preference center is enabled for recipients.
   */
  enabled?: boolean;
}

/**
 * The preference center configuration for a single environment.
 */
export interface PreferenceCenterUpsertResponse {
  /**
   * The preference center configuration document.
   */
  config?: unknown;

  /**
   * Whether the preference center is enabled for recipients.
   */
  enabled?: boolean;
}

export interface PreferenceCenterRetrieveParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface PreferenceCenterResetParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface PreferenceCenterUpsertParams {
  /**
   * Body param: The preference center configuration document.
   */
  config: unknown;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Body param: Whether the preference center is enabled for recipients.
   */
  enabled?: boolean;
}

export declare namespace PreferenceCenter {
  export {
    type PreferenceCenterRetrieveResponse as PreferenceCenterRetrieveResponse,
    type PreferenceCenterResetResponse as PreferenceCenterResetResponse,
    type PreferenceCenterUpsertResponse as PreferenceCenterUpsertResponse,
    type PreferenceCenterRetrieveParams as PreferenceCenterRetrieveParams,
    type PreferenceCenterResetParams as PreferenceCenterResetParams,
    type PreferenceCenterUpsertParams as PreferenceCenterUpsertParams,
  };
}
