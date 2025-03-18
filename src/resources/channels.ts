// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Channels extends APIResource {
  /**
   * Returns a paginated list of channels. Note: the list of channels is across the
   * entire account, not scoped to an environment.
   */
  list(
    query: ChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChannelListResponse> {
    return this._client.get('/v1/channels', { query, ...options });
  }
}

/**
 * A configured channel, which is a way to route messages to a provider.
 */
export interface Channel {
  /**
   * Timestamp when the channel was created
   */
  created_at: string;

  /**
   * Unique identifier for the channel within a project (immutable once created)
   */
  key: string;

  /**
   * The human-readable name of the channel
   */
  name: string;

  /**
   * The ID of the provider that this channel uses to deliver messages
   */
  provider: string;

  /**
   * The type of channel, determining what kind of messages it can send
   */
  type: 'email' | 'in_app' | 'in_app_feed' | 'in_app_guide' | 'sms' | 'push' | 'chat' | 'http';

  /**
   * Timestamp when the channel was last updated
   */
  updated_at: string;

  /**
   * Controls whether the channel is visible as system-level or user-level
   */
  visibility: 'system' | 'user';

  /**
   * Timestamp when the channel was archived (soft deleted), null if active
   */
  archived_at?: string | null;

  /**
   * Optional URL to a custom icon for the channel
   */
  custom_icon_url?: string | null;

  /**
   * Optional description of the channel's purpose or usage
   */
  description?: string | null;
}

/**
 * Chat channel settings
 */
export interface ChatChannelSettings {
  /**
   * Whether to resolve chat provider user IDs using a Knock user's email address.
   * Only relevant for Slack channels for the time being.
   */
  email_based_user_id_resolution?: boolean;

  /**
   * Whether to track link clicks on chat notifications.
   */
  link_tracking?: boolean;
}

/**
 * Email channel settings
 */
export interface EmailChannelSettings {
  /**
   * The BCC address on email notifications. Supports liquid. Defaults to
   * `from_address`.
   */
  bcc_address?: string | null;

  /**
   * The CC address on email notifications. Supports liquid. Defaults to
   * `from_address`.
   */
  cc_address?: string | null;

  /**
   * The email address from which this channel will send. Supports liquid.
   */
  from_email?: string | null;

  /**
   * The name from which this channel will send. Supports liquid
   */
  from_name?: string | null;

  /**
   * A JSON template for any custom overrides to merge into the API payload that is
   * sent to the email provider. Supports liquid.
   */
  json_overrides?: string | null;

  /**
   * Whether to track link clicks on email notifications.
   */
  link_tracking?: boolean;

  /**
   * Whether to track opens on email notifications.
   */
  open_tracking?: boolean;

  /**
   * The Reply-to address on email notifications. Supports liquid. Defaults to
   * `from_address`.
   */
  reply_to_address?: string | null;

  /**
   * The email address to which this channel will send. Defaults to
   * `recipient.email`. Supports liquid.
   */
  to_address?: string;
}

/**
 * In-app feed channel settings
 */
export interface InAppFeedChannelSettings {
  /**
   * Whether to track link clicks on in-app feed notifications.
   */
  link_tracking?: boolean;
}

/**
 * Push channel settings
 */
export interface PushChannelSettings {
  /**
   * Whether to deregister a push-token when a push send hard bounces. This is to
   * prevent the same token from being used for future pushes.
   */
  token_deregistration?: boolean;
}

/**
 * SMS channel settings
 */
export interface SMSChannelSettings {
  /**
   * Whether to track link clicks on SMS notifications.
   */
  link_tracking?: boolean;
}

/**
 * A paginated list of Channel. Contains a list of entries and page information.
 */
export interface ChannelListResponse {
  entries: Array<Channel>;

  /**
   * The information about a paginated result
   */
  page_info: Shared.PageInfo;
}

export interface ChannelListParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The number of entries to fetch
   */
  limit?: number;
}

export declare namespace Channels {
  export {
    type Channel as Channel,
    type ChatChannelSettings as ChatChannelSettings,
    type EmailChannelSettings as EmailChannelSettings,
    type InAppFeedChannelSettings as InAppFeedChannelSettings,
    type PushChannelSettings as PushChannelSettings,
    type SMSChannelSettings as SMSChannelSettings,
    type ChannelListResponse as ChannelListResponse,
    type ChannelListParams as ChannelListParams,
  };
}
