// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Commits extends APIResource {
  /**
   * Retrieve a single commit by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Commit> {
    return this._client.get(path`/v1/commits/${id}`, options);
  }

  /**
   * Returns a paginated list of commits in a given environment. The commits are
   * ordered from most recent first.
   */
  list(
    query: CommitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommitListResponse> {
    return this._client.get('/v1/commits', { query, ...options });
  }

  /**
   * Commit all changes across all resources in the development environment.
   */
  commitAll(
    params: CommitCommitAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommitCommitAllResponse> {
    const { commit_message, environment } = params ?? {};
    return this._client.put('/v1/commits', { query: { commit_message, environment }, ...options });
  }

  /**
   * Promote all changes across all resources to the target environment from its
   * preceding environment.
   */
  promoteAll(params: CommitPromoteAllParams, options?: RequestOptions): APIPromise<CommitPromoteAllResponse> {
    const { to_environment } = params;
    return this._client.put('/v1/commits/promote', { query: { to_environment }, ...options });
  }

  /**
   * Promotes one change to the subsequent environment.
   */
  promoteOne(id: string, options?: RequestOptions): APIPromise<CommitPromoteOneResponse> {
    return this._client.put(path`/v1/commits/${id}/promote`, options);
  }
}

/**
 * A commit is a change to a resource within an environment, made by an author.
 */
export interface Commit {
  /**
   * The unique identifier for the commit.
   */
  id: string;

  /**
   * The author of the commit.
   */
  commit_author: Commit.CommitAuthor;

  /**
   * The optional message about the commit.
   */
  commit_message: string;

  /**
   * The timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * The environment of the commit.
   */
  environment: string;

  /**
   * The resource object associated with the commit.
   */
  resource: Commit.Resource;

  /**
   * The timestamp of when the resource was last updated.
   */
  updated_at: string;
}

export namespace Commit {
  /**
   * The author of the commit.
   */
  export interface CommitAuthor {
    /**
     * The email address of the commit author.
     */
    email: string;

    /**
     * The name of the commit author.
     */
    name?: string | null;
  }

  /**
   * The resource object associated with the commit.
   */
  export interface Resource {
    /**
     * The unique identifier for the resource.
     */
    identifier: string;

    /**
     * The type of the resource object.
     */
    type: 'email_layout' | 'workflow' | 'translation' | 'partial' | 'message_type';
  }
}

/**
 * A paginated list of Commit. Contains a list of entries and page information.
 */
export interface CommitListResponse {
  /**
   * A list of entries.
   */
  entries: Array<Commit>;

  /**
   * The information about a paginated result.
   */
  page_info: Shared.PageInfo;
}

/**
 * The result of the commit operation.
 */
export interface CommitCommitAllResponse {
  result: string;
}

/**
 * The result of the commit operation.
 */
export interface CommitPromoteAllResponse {
  result: string;
}

/**
 * Wraps the Commit response under the `commit` key.
 */
export interface CommitPromoteOneResponse {
  /**
   * A commit is a change to a resource within an environment, made by an author.
   */
  commit: Commit;
}

export interface CommitListParams {
  /**
   * The cursor to fetch entries after.
   */
  after?: string;

  /**
   * The cursor to fetch entries before.
   */
  before?: string;

  /**
   * The environment slug. (Defaults to `development`.).
   */
  environment?: string;

  /**
   * The number of entries to fetch per-page.
   */
  limit?: number;

  /**
   * Whether to show only promoted or unpromoted changes between the given
   * environment and the subsequent environment.
   */
  promoted?: boolean;
}

export interface CommitCommitAllParams {
  /**
   * An optional message to include in a commit.
   */
  commit_message?: string;

  /**
   * A slug of the environment in which to commit all changes.
   */
  environment?: string;
}

export interface CommitPromoteAllParams {
  /**
   * A slug of the target environment to which you want to promote all changes from
   * its directly preceding environment.
   *
   * For example, if you have three environments “development”, “staging”, and
   * “production” (in that order), setting this param to “production” will promote
   * all commits not currently in production from staging.
   *
   * Note: This must be a non-development environment.
   */
  to_environment: string;
}

export declare namespace Commits {
  export {
    type Commit as Commit,
    type CommitListResponse as CommitListResponse,
    type CommitCommitAllResponse as CommitCommitAllResponse,
    type CommitPromoteAllResponse as CommitPromoteAllResponse,
    type CommitPromoteOneResponse as CommitPromoteOneResponse,
    type CommitListParams as CommitListParams,
    type CommitCommitAllParams as CommitCommitAllParams,
    type CommitPromoteAllParams as CommitPromoteAllParams,
  };
}
