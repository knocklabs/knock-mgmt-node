// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Email layouts wrap your email templates and provide a consistent look and feel.
 */
export class EmailLayouts extends APIResource {
  /**
   * Retrieve an email layout by its key, in a given environment.
   *
   * @example
   * ```ts
   * const emailLayout = await client.emailLayouts.retrieve(
   *   'email_layout_key',
   * );
   * ```
   */
  retrieve(
    emailLayoutKey: string,
    query: EmailLayoutRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailLayout> {
    return this._client.get(path`/v1/email_layouts/${emailLayoutKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of email layouts available in a given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const emailLayout of client.emailLayouts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmailLayoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailLayoutsEntriesCursor, EmailLayout> {
    return this._client.getAPIList('/v1/email_layouts', EntriesCursor<EmailLayout>, { query, ...options });
  }

  /**
   * Renders an email layout preview, without requiring a layout to be persisted
   * within Knock. This is useful for previewing layouts in isolation, before saving
   * them.
   *
   * @example
   * ```ts
   * const response = await client.emailLayouts.preview({
   *   email_layout: {
   *     html_layout:
   *       '<html><body>Hello {{ recipient.name }}! {{ content }}</body></html>',
   *     name: 'Transactional',
   *     text_layout:
   *       'Hello {{ recipient.name }}! {{ content }}',
   *   },
   *   recipient: 'user_123',
   * });
   * ```
   */
  preview(
    params: EmailLayoutPreviewParams,
    options?: RequestOptions,
  ): APIPromise<EmailLayoutPreviewResponse> {
    const { branch, environment, ...body } = params;
    return this._client.post('/v1/email_layouts/preview', {
      query: { branch, environment },
      body,
      ...options,
    });
  }

  /**
   * Updates an email layout, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates in the "development" environment.
   *
   * @example
   * ```ts
   * const response = await client.emailLayouts.upsert(
   *   'email_layout_key',
   *   {
   *     email_layout: {
   *       html_layout:
   *         '<html><body>Hello, world!</body></html>',
   *       name: 'Transactional',
   *       text_layout: 'Hello, world!',
   *     },
   *   },
   * );
   * ```
   */
  upsert(
    emailLayoutKey: string,
    params: EmailLayoutUpsertParams,
    options?: RequestOptions,
  ): APIPromise<EmailLayoutUpsertResponse> {
    const { allow_empty, annotate, branch, commit, commit_message, environment, force, ...body } = params;
    return this._client.put(path`/v1/email_layouts/${emailLayoutKey}`, {
      query: { allow_empty, annotate, branch, commit, commit_message, environment, force },
      body,
      ...options,
    });
  }

  /**
   * Validates an email layout payload without persisting it.
   *
   * Note: this endpoint only operates in the "development" environment.
   *
   * @example
   * ```ts
   * const response = await client.emailLayouts.validate(
   *   'email_layout_key',
   *   {
   *     email_layout: {
   *       html_layout:
   *         '<html><body>Hello, world!</body></html>',
   *       name: 'Transactional',
   *       text_layout: 'Hello, world!',
   *     },
   *   },
   * );
   * ```
   */
  validate(
    emailLayoutKey: string,
    params: EmailLayoutValidateParams,
    options?: RequestOptions,
  ): APIPromise<EmailLayoutValidateResponse> {
    const { branch, environment, ...body } = params;
    return this._client.put(path`/v1/email_layouts/${emailLayoutKey}/validate`, {
      query: { branch, environment },
      body,
      ...options,
    });
  }
}

export type EmailLayoutsEntriesCursor = EntriesCursor<EmailLayout>;

/**
 * Overrides to apply against account branding variables in an email layout,
 * including dark mode-specific values.
 */
export interface BrandingOverrides {
  /**
   * A URL for a dark mode icon override.
   */
  dark_icon_url?: string | null;

  /**
   * A URL for a dark mode logo override.
   */
  dark_logo_url?: string | null;

  /**
   * The dark mode primary brand color in hex format.
   */
  dark_primary_color?: string | null;

  /**
   * The dark mode contrast color for the primary brand color in hex format.
   */
  dark_primary_color_contrast?: string | null;

  /**
   * A URL for a light mode icon override.
   */
  icon_url?: string | null;

  /**
   * A URL for a light mode logo override.
   */
  logo_url?: string | null;

  /**
   * The light mode primary brand color in hex format.
   */
  primary_color?: string | null;

  /**
   * The light mode contrast color for the primary brand color in hex format.
   */
  primary_color_contrast?: string | null;

  /**
   * The light mode primary text color in hex format.
   */
  primary_text_color?: string | null;

  /**
   * The light mode secondary text color in hex format.
   */
  secondary_text_color?: string | null;
}

/**
 * A versioned email layout used within an environment.
 */
export interface EmailLayout {
  /**
   * The timestamp of when the email layout was created.
   */
  created_at: string;

  /**
   * The complete HTML or MJML content of the email layout.
   */
  html_layout: string;

  /**
   * The unique key for this email layout.
   */
  key: string;

  /**
   * The human-readable name of this email layout.
   */
  name: string;

  /**
   * The SHA of the email layout.
   */
  sha: string;

  /**
   * The complete plaintext content of the email layout.
   */
  text_layout: string;

  /**
   * Overrides to apply against account branding variables in an email layout,
   * including dark mode-specific values.
   */
  branding_overrides?: BrandingOverrides | null;

  /**
   * The environment of the email layout.
   */
  environment?: string;

  /**
   * A list of one or more items to show in the footer of the email layout.
   */
  footer_links?: Array<EmailLayout.FooterLink>;

  /**
   * Whether this layout uses MJML format. When true, html_layout must contain <mjml>
   * tags.
   */
  is_mjml?: boolean;

  /**
   * The timestamp of when the email layout was last updated.
   */
  updated_at?: string;
}

export namespace EmailLayout {
  export interface FooterLink {
    /**
     * The text to display as the link.
     */
    text: string;

    /**
     * The URL to link to.
     */
    url: string;
  }
}

/**
 * A request to update or create an email layout.
 */
export interface EmailLayoutRequest {
  /**
   * The complete HTML or MJML content of the email layout.
   */
  html_layout: string;

  /**
   * The friendly name of this email layout.
   */
  name: string;

  /**
   * The complete plain text content of the email layout.
   */
  text_layout: string;

  /**
   * Overrides to apply against account branding variables in an email layout,
   * including dark mode-specific values.
   */
  branding_overrides?: BrandingOverrides | null;

  /**
   * A list of one or more items to show in the footer of the email layout.
   */
  footer_links?: Array<EmailLayoutRequest.FooterLink>;

  /**
   * Whether this layout uses MJML format. When true, html_layout must contain <mjml>
   * tags.
   */
  is_mjml?: boolean | null;
}

export namespace EmailLayoutRequest {
  export interface FooterLink {
    /**
     * The text to display as the link.
     */
    text: string;

    /**
     * The URL to link to.
     */
    url: string;
  }
}

/**
 * A response to an email layout preview request.
 */
export interface EmailLayoutPreviewResponse {
  /**
   * The result of the preview.
   */
  result: 'success' | 'error';

  /**
   * A list of errors encountered during rendering. Present when result is "error".
   */
  errors?: Array<EmailLayoutPreviewResponse.Error> | null;

  /**
   * The rendered email layout, ready to be previewed.
   */
  layout?: EmailLayoutPreviewResponse.Layout | null;
}

export namespace EmailLayoutPreviewResponse {
  /**
   * A rendering error with optional location information.
   */
  export interface Error {
    /**
     * A human-readable description of the error.
     */
    message: string;

    /**
     * The layout field that caused the error, if available.
     */
    field?: string | null;

    /**
     * The line number where the error occurred, if available.
     */
    line?: number | null;
  }

  /**
   * The rendered email layout, ready to be previewed.
   */
  export interface Layout {
    /**
     * The fully rendered HTML body of the email layout.
     */
    html_body?: string | null;

    /**
     * The fully rendered plain text body of the email layout.
     */
    text_body?: string | null;
  }
}

/**
 * Wraps the EmailLayout response under the `email_layout` key.
 */
export interface EmailLayoutUpsertResponse {
  /**
   * A versioned email layout used within an environment.
   */
  email_layout: EmailLayout;
}

/**
 * Wraps the EmailLayout response under the `email_layout` key.
 */
export interface EmailLayoutValidateResponse {
  /**
   * A versioned email layout used within an environment.
   */
  email_layout: EmailLayout;
}

export interface EmailLayoutRetrieveParams {
  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. When `environment` is omitted, the branch is
   * resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface EmailLayoutListParams extends EntriesCursorParams {
  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. When `environment` is omitted, the branch is
   * resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface EmailLayoutPreviewParams {
  /**
   * Body param: A request to update or create an email layout.
   */
  email_layout: EmailLayoutRequest;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  recipient: Shared.RecipientReference;

  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  actor?: Shared.RecipientReference | null;

  /**
   * Body param: The data to pass to the layout for rendering.
   */
  data?: { [key: string]: unknown };

  /**
   * Body param: The tenant to associate with the preview. Must not contain
   * whitespace.
   */
  tenant?: string | null;

  /**
   * Body param: Optional workflow context for variable hydration. When provided,
   * recipient/actor/tenant are resolved via Knock.
   */
  workflow?: EmailLayoutPreviewParams.Workflow | null;
}

export namespace EmailLayoutPreviewParams {
  /**
   * Optional workflow context for variable hydration. When provided,
   * recipient/actor/tenant are resolved via Knock.
   */
  export interface Workflow {
    /**
     * The workflow key.
     */
    key: string;

    /**
     * Workflow categories.
     */
    categories?: Array<string> | null;
  }
}

export interface EmailLayoutUpsertParams {
  /**
   * Body param: A request to update or create an email layout.
   */
  email_layout: EmailLayoutRequest;

  /**
   * Query param: When used with commit, creates a new version with identical content
   * and commits it if there are no unpublished changes.
   */
  allow_empty?: boolean;

  /**
   * Query param: Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: Whether to commit the resource at the same time as modifying it.
   */
  commit?: boolean;

  /**
   * Query param: The message to commit the resource with, only used if `commit` is
   * `true`.
   */
  commit_message?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Query param: When set to true, forces the upsert to override existing content
   * regardless of environment restrictions. This bypasses the development-only
   * environment check and origin environment checks.
   */
  force?: boolean;
}

export interface EmailLayoutValidateParams {
  /**
   * Body param: A request to update or create an email layout.
   */
  email_layout: EmailLayoutRequest;

  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export declare namespace EmailLayouts {
  export {
    type BrandingOverrides as BrandingOverrides,
    type EmailLayout as EmailLayout,
    type EmailLayoutRequest as EmailLayoutRequest,
    type EmailLayoutPreviewResponse as EmailLayoutPreviewResponse,
    type EmailLayoutUpsertResponse as EmailLayoutUpsertResponse,
    type EmailLayoutValidateResponse as EmailLayoutValidateResponse,
    type EmailLayoutsEntriesCursor as EmailLayoutsEntriesCursor,
    type EmailLayoutRetrieveParams as EmailLayoutRetrieveParams,
    type EmailLayoutListParams as EmailLayoutListParams,
    type EmailLayoutPreviewParams as EmailLayoutPreviewParams,
    type EmailLayoutUpsertParams as EmailLayoutUpsertParams,
    type EmailLayoutValidateParams as EmailLayoutValidateParams,
  };
}
