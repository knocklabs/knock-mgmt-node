// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class APIKeys extends APIResource {
  /**
   * Given an authenticated service token, exchanges it for an API key that can be
   * used to make requests to the public API. Returns the environment's secret key by
   * default. Pass `type=public` to get its public key instead, for client-side
   * integrations.
   *
   * @example
   * ```ts
   * const response = await client.apiKeys.exchange();
   * ```
   */
  exchange(
    params: APIKeyExchangeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyExchangeResponse> {
    const { environment, type } = params ?? {};
    return this._client.post('/v1/api_keys/exchange', { query: { environment, type }, ...options });
  }
}

/**
 * Returns an API key that can be used to make requests to the public API.
 */
export interface APIKeyExchangeResponse {
  /**
   * The API key exchanged from the service token, of the requested `type`.
   */
  api_key: string;
}

export interface APIKeyExchangeParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;

  /**
   * The type of API key to return: `secret` or `public`.
   */
  type?: 'secret' | 'public';
}

export declare namespace APIKeys {
  export {
    type APIKeyExchangeResponse as APIKeyExchangeResponse,
    type APIKeyExchangeParams as APIKeyExchangeParams,
  };
}
