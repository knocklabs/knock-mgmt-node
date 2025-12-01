// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Return information about the current calling scope. Will either be a service
   * token or from an OAuth context.
   *
   * @example
   * ```ts
   * const response = await client.auth.verify();
   * ```
   */
  verify(options?: RequestOptions): APIPromise<AuthVerifyResponse> {
    return this._client.get('/v1/whoami', options);
  }
}

/**
 * Information about the current calling scope.
 */
export interface AuthVerifyResponse {
  /**
   * Account plan features and limits.
   */
  account_features: AuthVerifyResponse.AccountFeatures;

  /**
   * The display name of the account.
   */
  account_name: string;

  /**
   * The unique slug identifier for the account.
   */
  account_slug: string;

  /**
   * The type of authentication context - either a service token or OAuth user
   * context.
   */
  type: 'service_token' | 'oauth_context';

  /**
   * The name of the service token if authenticated via service token, null for OAuth
   * contexts.
   */
  service_token_name?: string | null;

  /**
   * The ID of the authenticated user if in OAuth context, null for service token
   * contexts.
   */
  user_id?: string | null;
}

export namespace AuthVerifyResponse {
  /**
   * Account plan features and limits.
   */
  export interface AccountFeatures {
    /**
     * Whether batch rendering limits can be configured.
     */
    batch_items_render_limit_allowed?: boolean;

    /**
     * Whether custom branding can be applied to notifications.
     */
    custom_branding_allowed?: boolean;

    /**
     * Number of days data is retained, null for unlimited retention.
     */
    data_retention_days?: number | null;

    /**
     * Whether data warehouse integration extensions are available.
     */
    data_warehouse_extension_allowed?: boolean;

    /**
     * Whether Datadog integration extension is available.
     */
    datadog_extension_allowed?: boolean;

    /**
     * Whether directory sync functionality is available.
     */
    dsync_allowed?: boolean;

    /**
     * Monthly limit for guide notification recipients, null for unlimited.
     */
    guides_monthly_notified_recipients_limit?: number | null;

    /**
     * Whether per-tenant scope for guide messages is allowed.
     */
    guides_per_tenant_scope_allowed?: boolean;

    /**
     * Whether Heap integration extension is available.
     */
    heap_extension_allowed?: boolean;

    /**
     * Whether Knock branding is required to be displayed.
     */
    knock_branding_required?: boolean;

    /**
     * Whether Litmus email preview integration is available.
     */
    litmus_email_preview_allowed?: boolean;

    /**
     * Monthly limit for messages sent, null for unlimited.
     */
    message_sent_limit?: number | null;

    /**
     * Whether New Relic integration extension is available.
     */
    new_relic_extension_allowed?: boolean;

    /**
     * Whether Segment integration extension is available.
     */
    segment_extension_allowed?: boolean;

    /**
     * Whether self-service account management features are available.
     */
    self_serve_allowed?: boolean;

    /**
     * Whether single sign-on (SSO) is enabled for the account.
     */
    sso_allowed?: boolean;

    /**
     * Whether tenant-level preferences are supported.
     */
    tenant_preferences_allowed?: boolean;

    /**
     * Whether multi-language translations are supported.
     */
    translations_allowed?: boolean;
  }
}

export declare namespace Auth {
  export { type AuthVerifyResponse as AuthVerifyResponse };
}
