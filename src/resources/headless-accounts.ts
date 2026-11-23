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
   * it. This endpoint needs no authentication and is rate limited. It can require a
   * solved proof-of-work challenge; when it does and none is sent, the 400 response
   * carries a challenge to solve.
   *
   * @example
   * ```ts
   * const headlessAccount =
   *   await client.headlessAccounts.create();
   * ```
   */
  create(
    body: HeadlessAccountCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HeadlessAccountCreateResponse> {
    return this._client.post('/v1/headless_accounts', { body, ...options });
  }

  /**
   * Returns a proof-of-work challenge to solve before creating a headless account.
   * The difficulty can change, so get a new challenge for each account. This
   * endpoint needs no authentication.
   *
   * @example
   * ```ts
   * const response = await client.headlessAccounts.challenge();
   * ```
   */
  challenge(options?: RequestOptions): APIPromise<HeadlessAccountChallengeResponse> {
    return this._client.post('/v1/headless_accounts/challenge', options);
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
   * claimed, claimed by a person, or past its claim window, and the monthly usage
   * limits it has until it is claimed. Agents poll this endpoint to find out when a
   * person has claimed the account.
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
 * A proof-of-work challenge. Find a nonce for which the SHA-256 hash of
 * `<challenge>:<nonce>` starts with `difficulty` zero bits, then send both when
 * creating the account. A difficulty of 0 means no proof of work is needed right
 * now.
 */
export interface HeadlessAccountChallengeResponse {
  /**
   * The hash function to use.
   */
  algorithm: 'sha256';

  /**
   * The challenge to hash. It can be used for one account.
   */
  challenge: string;

  /**
   * How many leading zero bits the hash must have.
   */
  difficulty: number;

  /**
   * When the challenge stops being accepted.
   */
  expires_at: string;
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

  /**
   * How much the account can use per UTC calendar month until a person claims it.
   * Each limit is null when there is none, which is always the case once the account
   * is claimed.
   */
  usage_limits: HeadlessAccountRetrieveStatusResponse.UsageLimits;
}

export namespace HeadlessAccountRetrieveStatusResponse {
  /**
   * How much the account can use per UTC calendar month until a person claims it.
   * Each limit is null when there is none, which is always the case once the account
   * is claimed.
   */
  export interface UsageLimits {
    /**
     * How many messages the account can send.
     */
    message_limit: number | null;

    /**
     * How many workflow runs, one per recipient, the account can trigger.
     */
    workflow_run_limit: number | null;
  }
}

export interface HeadlessAccountCreateParams {
  /**
   * A challenge from the challenge endpoint and the nonce that solves it.
   */
  proof_of_work?: HeadlessAccountCreateParams.ProofOfWork;
}

export namespace HeadlessAccountCreateParams {
  /**
   * A challenge from the challenge endpoint and the nonce that solves it.
   */
  export interface ProofOfWork {
    /**
     * The challenge, as issued.
     */
    challenge: string;

    /**
     * The nonce that solves the challenge, at most 64 bytes.
     */
    nonce: string;
  }
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
    type HeadlessAccountChallengeResponse as HeadlessAccountChallengeResponse,
    type HeadlessAccountClaimResponse as HeadlessAccountClaimResponse,
    type HeadlessAccountRetrieveStatusResponse as HeadlessAccountRetrieveStatusResponse,
    type HeadlessAccountCreateParams as HeadlessAccountCreateParams,
    type HeadlessAccountClaimParams as HeadlessAccountClaimParams,
  };
}
