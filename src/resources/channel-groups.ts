// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as ChannelsAPI from './channels';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChannelGroups extends APIResource {
  /**
   * Returns a paginated list of channel groups. Note: the list of channel groups is
   * across the entire account, not scoped to an environment.
   */
  list(
    query: ChannelGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChannelGroupListResponse> {
    return this._client.get('/v1/channel_groups', { query, ...options });
  }
}

/**
 * A group of channels with rules for when they are applicable.
 */
export interface ChannelGroup {
  /**
   * Rules for determining which channels should be used.
   */
  channel_rules: Array<ChannelGroupRule>;

  /**
   * The type of channels contained in this group.
   */
  channel_type: 'email' | 'in_app' | 'in_app_feed' | 'in_app_guide' | 'sms' | 'push' | 'chat' | 'http';

  /**
   * The timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * Unique identifier for the channel group within a project.
   */
  key: string;

  /**
   * The human-readable name of the channel group.
   */
  name: string;

  /**
   * Determines how the channel rules are applied ('any' means any rule can match,
   * 'all' means all rules must match).
   */
  operator: 'any' | 'all';

  /**
   * Whether this channel group was created by the system or a user.
   */
  source: 'system' | 'user';

  /**
   * The timestamp of when the resource was last updated.
   */
  updated_at: string;
}

/**
 * A rule that determines if a channel should be executed as part of a channel
 * group.
 */
export interface ChannelGroupRule {
  /**
   * A configured channel, which is a way to route messages to a provider.
   */
  channel: ChannelsAPI.Channel;

  /**
   * The timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * The order index of this rule within the channel group.
   */
  index: number;

  /**
   * The type of rule (if = conditional, unless = negative conditional, always =
   * always apply).
   */
  rule_type: 'if' | 'unless' | 'always';

  /**
   * The timestamp of when the resource was last updated.
   */
  updated_at: string;

  /**
   * For conditional rules, the argument to compare against.
   */
  argument?: string | null;

  /**
   * For conditional rules, the operator to apply.
   */
  operator?:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'contains_all'
    | 'empty'
    | 'not_empty'
    | 'is_audience_member'
    | 'is_not_audience_member'
    | null;

  /**
   * For conditional rules, the variable to evaluate.
   */
  variable?: string | null;
}

/**
 * A paginated list of ChannelGroup. Contains a list of entries and page
 * information.
 */
export interface ChannelGroupListResponse {
  /**
   * A list of entries.
   */
  entries: Array<ChannelGroup>;

  /**
   * The information about a paginated result.
   */
  page_info: Shared.PageInfo;
}

export interface ChannelGroupListParams {
  /**
   * The cursor to fetch entries after.
   */
  after?: string;

  /**
   * The cursor to fetch entries before.
   */
  before?: string;

  /**
   * The number of entries to fetch per-page.
   */
  limit?: number;
}

export declare namespace ChannelGroups {
  export {
    type ChannelGroup as ChannelGroup,
    type ChannelGroupRule as ChannelGroupRule,
    type ChannelGroupListResponse as ChannelGroupListResponse,
    type ChannelGroupListParams as ChannelGroupListParams,
  };
}
