// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Headless accounts let an agent create a Knock account on its own and hand it to a person to claim.
 */
export class HeadlessAccounts extends APIResource {
  /**
   * Creates an account that has no owner yet, and returns a service token the agent
   * uses to work in it. The account is deleted after 24 hours unless a person claims
   * it. This endpoint needs no authentication and is rate limited.
   *
   * @example
   * ```ts
   * const headlessAccount =
   *   await client.headlessAccounts.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<HeadlessAccountCreateResponse> {
    return this._client.post('/v1/headless_accounts', options);
  }

  /**
   * Starts handing the account to a person. Returns a link and a six-digit code for
   * the agent to show that person. They open the link, sign in with the email given
   * here, and type the code to become the account's owner. The service token keeps
   * working afterwards. Starting a new claim replaces the previous link and code.
   *
   * @example
   * ```ts
   * const response = await client.headlessAccounts.claim({
   *   email: 'founder@example.com',
   * });
   * ```
   */
  claim(
    body: HeadlessAccountClaimParams,
    options?: RequestOptions,
  ): APIPromise<HeadlessAccountClaimResponse> {
    return this._client.post('/v1/headless_accounts/claim', { body, ...options });
  }

  /**
   * Returns whether the headless account is still being set up, waiting to be
   * claimed, claimed by a person, or past its claim window. Agents poll this
   * endpoint to find out when a person has claimed the account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.headlessAccounts.retrieveStatus();
   * ```
   */
  retrieveStatus(options?: RequestOptions): APIPromise<HeadlessAccountRetrieveStatusResponse> {
    return this._client.get('/v1/headless_accounts/status', options);
  }
}

/**
 * A headless account an agent created, with the service token the agent uses to
 * work in it.
 */
export interface HeadlessAccountCreateResponse {
  /**
   * A service token for the Management API. It is only returned once and keeps
   * working after a person claims the account.
   */
  token: string;

  /**
   * When the account and its token are deleted unless a person claims the account
   * first.
   */
  expires_at: string;

  /**
   * The account is still being set up. Poll the status endpoint.
   */
  status: 'provisioning';
}

/**
 * A claim an agent started for a person, with the link and code to show them.
 */
export interface HeadlessAccountClaimResponse {
  /**
   * The dashboard link the person opens and signs in with the email given when the
   * claim started.
   */
  claim_url: string;

  /**
   * When the link and code stop working.
   */
  expires_at: string;

  /**
   * A six-digit code to show the person, who types it on the claim page. Show it
   * separately from the link.
   */
  user_code: string;
}

/**
 * Where a headless account stands, from the point of view of the agent.
 */
export interface HeadlessAccountRetrieveStatusResponse {
  /**
   * When an unclaimed account is deleted, or null once it has been claimed.
   */
  expires_at: string | null;

  /**
   * Whether the account is still being set up, waiting to be claimed, claimed by a
   * person, or expired because its claim window closed or its setup never finished.
   */
  status: 'provisioning' | 'unclaimed' | 'claimed' | 'expired';
}

export interface HeadlessAccountClaimParams {
  /**
   * The email of the person who will own the account. Only they can finish the
   * claim.
   */
  email: string;
}

export declare namespace HeadlessAccounts {
  export {
    type HeadlessAccountCreateResponse as HeadlessAccountCreateResponse,
    type HeadlessAccountClaimResponse as HeadlessAccountClaimResponse,
    type HeadlessAccountRetrieveStatusResponse as HeadlessAccountRetrieveStatusResponse,
    type HeadlessAccountClaimParams as HeadlessAccountClaimParams,
  };
}
