// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Members extends APIResource {
  /**
   * Returns a single member by their ID.
   *
   * @example
   * ```ts
   * const member = await client.members.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Member> {
    return this._client.get(path`/v1/members/${id}`, options);
  }

  /**
   * Returns a paginated list of members for the current account. Optionally filter
   * by role.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const member of client.members.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembersEntriesCursor, Member> {
    return this._client.getAPIList('/v1/members', EntriesCursor<Member>, { query, ...options });
  }

  /**
   * Removes a member from the account.
   *
   * @example
   * ```ts
   * await client.members.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/members/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MembersEntriesCursor = EntriesCursor<Member>;

/**
 * A member of the account.
 */
export interface Member {
  /**
   * The unique identifier of the member.
   */
  id: string;

  /**
   * The timestamp of when the member joined the account.
   */
  created_at: string;

  /**
   * The member's role in the account.
   */
  role: 'owner' | 'admin' | 'member' | 'production_only_member' | 'billing' | 'support';

  /**
   * The timestamp of when the member was last updated.
   */
  updated_at: string;

  /**
   * Information about a user within the Knock dashboard. Not to be confused with an
   * external user (recipient) of a workflow.
   */
  user: MemberUser;
}

/**
 * Information about a user within the Knock dashboard. Not to be confused with an
 * external user (recipient) of a workflow.
 */
export interface MemberUser {
  /**
   * The user's unique identifier.
   */
  id: string;

  /**
   * The timestamp of when the user was created.
   */
  created_at: string;

  /**
   * The user's email address.
   */
  email: string;

  /**
   * The timestamp of when the user was last updated.
   */
  updated_at: string;

  /**
   * The URL of the user's avatar image.
   */
  avatar_url?: string | null;

  /**
   * The user's display name.
   */
  name?: string | null;
}

export interface MemberListParams extends EntriesCursorParams {
  /**
   * Filter members by email address (exact match).
   */
  email?: string;

  /**
   * Filter members by role. One of: owner, admin, member, production_only_member,
   * billing, support.
   */
  role?: string;
}

export declare namespace Members {
  export {
    type Member as Member,
    type MemberUser as MemberUser,
    type MembersEntriesCursor as MembersEntriesCursor,
    type MemberListParams as MemberListParams,
  };
}
