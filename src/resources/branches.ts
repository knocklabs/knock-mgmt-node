// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Branches extends APIResource {
  /**
   * Creates a new branch off of the development environment with the given slug.
   *
   * @example
   * ```ts
   * const branch = await client.branches.create(
   *   'feature-branch',
   *   { environment: 'development' },
   * );
   * ```
   */
  create(branchSlug: string, params: BranchCreateParams, options?: RequestOptions): APIPromise<Branch> {
    const { environment } = params;
    return this._client.post(path`/v1/branches/${branchSlug}`, { query: { environment }, ...options });
  }

  /**
   * Returns a single branch by the `branch_slug`.
   *
   * @example
   * ```ts
   * const branch = await client.branches.retrieve(
   *   'feature-branch',
   *   { environment: 'development' },
   * );
   * ```
   */
  retrieve(branchSlug: string, query: BranchRetrieveParams, options?: RequestOptions): APIPromise<Branch> {
    return this._client.get(path`/v1/branches/${branchSlug}`, { query, ...options });
  }

  /**
   * Returns a paginated list of branches. The branches will be returned in order of
   * their last commit time (newest first).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const branch of client.branches.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: BranchListParams, options?: RequestOptions): PagePromise<BranchesEntriesCursor, Branch> {
    return this._client.getAPIList('/v1/branches', EntriesCursor<Branch>, { query, ...options });
  }

  /**
   * Deletes a branch by the `branch_slug`.
   *
   * @example
   * ```ts
   * await client.branches.delete('feature-branch', {
   *   environment: 'development',
   * });
   * ```
   */
  delete(branchSlug: string, params: BranchDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { environment } = params;
    return this._client.delete(path`/v1/branches/${branchSlug}`, {
      query: { environment },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BranchesEntriesCursor = EntriesCursor<Branch>;

/**
 * A branch object.
 */
export interface Branch {
  /**
   * The timestamp of when the branch was created.
   */
  created_at: string;

  /**
   * A unique slug for the branch. Cannot exceed 255 characters.
   */
  slug: string;

  /**
   * The timestamp of when the branch was last updated.
   */
  updated_at: string;

  /**
   * The timestamp of when the branch was deleted.
   */
  deleted_at?: string | null;

  /**
   * The timestamp of the most-recent commit in the branch.
   */
  last_commit_at?: string | null;
}

export interface BranchCreateParams {
  /**
   * The environment slug.
   */
  environment: string;
}

export interface BranchRetrieveParams {
  /**
   * The environment slug.
   */
  environment: string;
}

export interface BranchListParams extends EntriesCursorParams {
  /**
   * The environment slug.
   */
  environment: string;
}

export interface BranchDeleteParams {
  /**
   * The environment slug.
   */
  environment: string;
}

export declare namespace Branches {
  export {
    type Branch as Branch,
    type BranchesEntriesCursor as BranchesEntriesCursor,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchListParams as BranchListParams,
    type BranchDeleteParams as BranchDeleteParams,
  };
}
