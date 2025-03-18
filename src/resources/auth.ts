// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Return information about the current service token.
   */
  verify(options?: RequestOptions): APIPromise<AuthVerifyResponse> {
    return this._client.get('/v1/whoami', options);
  }
}

/**
 * Information about the current service token.
 */
export interface AuthVerifyResponse {
  account_name: string;

  account_slug: string;

  service_token_name: string;
}

export declare namespace Auth {
  export { type AuthVerifyResponse as AuthVerifyResponse };
}
