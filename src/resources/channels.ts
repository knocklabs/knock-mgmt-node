// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Channels extends APIResource {
  /**
   * Returns a channel with all environment-specific settings. Secret values in
   * provider settings are obfuscated unless they are Liquid templates (e.g.,
   * `{{ vars.api_key }}`).
   *
   * @example
   * ```ts
   * const channel = await client.channels.retrieve(
   *   'channel_key',
   * );
   * ```
   */
  retrieve(channelKey: string, options?: RequestOptions): APIPromise<Channel> {
    return this._client.get(path`/v1/channels/${channelKey}`, options);
  }

  /**
   * Returns a paginated list of channels. Note: the list of channels is across the
   * entire account, not scoped to an environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const channel of client.channels.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ChannelsEntriesCursor, Channel> {
    return this._client.getAPIList('/v1/channels', EntriesCursor<Channel>, { query, ...options });
  }
}

export type ChannelsEntriesCursor = EntriesCursor<Channel>;

/**
 * A configured channel, which is a way to route messages to a provider.
 */
export interface Channel {
  /**
   * The unique identifier for the channel.
   */
  id: string;

  /**
   * The timestamp of when the channel was created.
   */
  created_at: string;

  /**
   * Unique identifier for the channel within a project (immutable once created).
   */
  key: string;

  /**
   * The human-readable name of the channel.
   */
  name: string;

  /**
   * The ID of the provider that this channel uses to deliver messages. Learn more
   * about the providers available
   * [in our documentation](https://docs.knock.app/integrations/overview).
   */
  provider: string;

  /**
   * The type of channel, determining what kind of messages it can send.
   */
  type: 'email' | 'in_app' | 'in_app_feed' | 'in_app_guide' | 'sms' | 'push' | 'chat' | 'http';

  /**
   * The timestamp of when the channel was last updated.
   */
  updated_at: string;

  /**
   * The timestamp of when the channel was deleted.
   */
  archived_at?: string | null;

  /**
   * Optional URL to a custom icon for the channel. Only used for display purposes in
   * the dashboard.
   */
  custom_icon_url?: string | null;

  /**
   * Optional description of the channel's purpose or usage.
   */
  description?: string | null;

  /**
   * Per-environment settings for this channel, keyed by environment slug (e.g.,
   * 'development', 'production'). Only included when requested via the `include`
   * parameter or when retrieving a single channel.
   */
  environment_settings?: { [key: string]: ChannelEnvironmentSettings } | null;
}

/**
 * Environment-specific settings for a channel.
 */
export interface ChannelEnvironmentSettings {
  /**
   * The unique identifier for these environment settings.
   */
  id: string;

  /**
   * Whether the channel is in sandbox mode for this environment. Sandbox mode may
   * prevent actual message delivery.
   */
  is_sandbox: boolean;

  /**
   * Whether the channel configuration is valid and ready to send messages in this
   * environment.
   */
  is_valid: boolean;

  /**
   * Channel-type-specific settings (e.g., from_address for email). Structure varies
   * by channel type.
   */
  channel_settings?: { [key: string]: unknown } | null;

  /**
   * Provider-specific settings (e.g., API keys, credentials). Structure varies by
   * provider. Secret values are obfuscated unless they are Liquid templates.
   */
  provider_settings?: { [key: string]: unknown } | null;
}

/**
 * Chat channel settings. Only used as configuration as part of a workflow channel
 * step.
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
 * Email channel settings. Only used as configuration as part of a workflow channel
 * step.
 */
export interface EmailChannelSettings {
  /**
   * The BCC address on email notifications. Supports liquid.
   */
  bcc_address?: string | null;

  /**
   * The CC address on email notifications. Supports liquid.
   */
  cc_address?: string | null;

  /**
   * The email address from which this channel will send. Supports liquid.
   */
  from_address?: string | null;

  /**
   * The name from which this channel will send. Supports liquid.
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
   * The Reply-to address on email notifications. Supports liquid.
   */
  reply_to_address?: string | null;

  /**
   * The email address to which this channel will send. Defaults to
   * `recipient.email`. Supports liquid.
   */
  to_address?: string;
}

/**
 * In-app feed channel settings. Only used as configuration as part of a workflow
 * channel step.
 */
export interface InAppFeedChannelSettings {
  /**
   * Whether to track link clicks on in-app feed notifications.
   */
  link_tracking?: boolean;
}

/**
 * Push channel settings. Only used as configuration as part of a workflow channel
 * step.
 */
export interface PushChannelSettings {
  /**
   * Whether to deregister a push-token when a push send hard bounces. This is to
   * prevent the same token from being used for future pushes.
   */
  token_deregistration?: boolean;
}

/**
 * SMS channel settings. Only used as configuration as part of a workflow channel
 * step.
 */
export interface SMSChannelSettings {
  /**
   * Whether to track link clicks on SMS notifications.
   */
  link_tracking?: boolean;
}

export interface ChannelListParams extends EntriesCursorParams {
  /**
   * A channel id to filter the results by.
   */
  id?: string;

  /**
   * Associated resources to include in the response. Accepts `environment_settings`
   * to include per-environment channel configuration.
   */
  include?: Array<'environment_settings'>;
}

export declare namespace Channels {
  export {
    type Channel as Channel,
    type ChannelEnvironmentSettings as ChannelEnvironmentSettings,
    type ChatChannelSettings as ChatChannelSettings,
    type EmailChannelSettings as EmailChannelSettings,
    type InAppFeedChannelSettings as InAppFeedChannelSettings,
    type PushChannelSettings as PushChannelSettings,
    type SMSChannelSettings as SMSChannelSettings,
    type ChannelsEntriesCursor as ChannelsEntriesCursor,
    type ChannelListParams as ChannelListParams,
  };
}
