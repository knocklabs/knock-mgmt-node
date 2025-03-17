// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EmailLayouts extends APIResource {
  /**
   * Retrieve an email layout by its key, in a given environment.
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
   */
  list(
    query: EmailLayoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailLayoutListResponse> {
    return this._client.get('/v1/email_layouts', { query, ...options });
  }

  /**
   * Updates an email layout, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates in the “development” environment.
   */
  upsert(
    emailLayoutKey: string,
    params: EmailLayoutUpsertParams,
    options?: RequestOptions,
  ): APIPromise<EmailLayoutUpsertResponse> {
    const { annotate, commit, commit_message, environment, hide_uncommitted_changes, ...body } = params;
    return this._client.put(path`/v1/email_layouts/${emailLayoutKey}`, {
      query: { annotate, commit, commit_message, environment, hide_uncommitted_changes },
      body,
      ...options,
    });
  }

  /**
   * Validates an email layout payload without persisting it.
   *
   * Note: this endpoint only operates in the “development” environment.
   */
  validate(
    emailLayoutKey: string,
    params: EmailLayoutValidateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailLayoutValidateResponse> {
    const { annotate, environment, hide_uncommitted_changes } = params ?? {};
    return this._client.put(path`/v1/email_layouts/${emailLayoutKey}/validate`, {
      query: { annotate, environment, hide_uncommitted_changes },
      ...options,
    });
  }
}

/**
 * A versioned email layout used within an environment
 */
export interface EmailLayout {
  /**
   * The creation date of the email layout
   */
  created_at: string;

  /**
   * The complete HTML content of the email layout
   */
  html_layout: string;

  /**
   * The unique key for this email layout
   */
  key: string;

  /**
   * The friendly name of this email layout
   */
  name: string;

  /**
   * The SHA of the email layout
   */
  sha: string;

  /**
   * The complete plain text content of the email layout
   */
  text_layout: string;

  /**
   * The environment of the email layout
   */
  environment?: string;

  /**
   * A list of one or more items to show in the footer of the email layout
   */
  footer_links?: Array<EmailLayout.FooterLink>;

  /**
   * The last update date of the email layout
   */
  updated_at?: string;
}

export namespace EmailLayout {
  export interface FooterLink {
    /**
     * The text to display as the link
     */
    text: string;

    /**
     * The URL to link to
     */
    url: string;
  }
}

/**
 * A paginated list of email layouts
 */
export interface EmailLayoutListResponse {
  entries: Array<EmailLayout>;

  /**
   * The information about a paginated result
   */
  page_info: EmailLayoutListResponse.PageInfo;
}

export namespace EmailLayoutListResponse {
  /**
   * The information about a paginated result
   */
  export interface PageInfo {
    __typename: string;

    page_size: number;

    after?: string | null;

    before?: string | null;
  }
}

/**
 * Wraps the EmailLayout response under the email_layout key.
 */
export interface EmailLayoutUpsertResponse {
  /**
   * A versioned email layout used within an environment
   */
  email_layout: EmailLayoutUpsertResponse.EmailLayout;
}

export namespace EmailLayoutUpsertResponse {
  /**
   * A versioned email layout used within an environment
   */
  export interface EmailLayout {
    /**
     * The creation date of the email layout
     */
    created_at: string;

    /**
     * The complete HTML content of the email layout
     */
    html_layout: string;

    /**
     * The unique key for this email layout
     */
    key: string;

    /**
     * The friendly name of this email layout
     */
    name: string;

    /**
     * The SHA of the email layout
     */
    sha: string;

    /**
     * The complete plain text content of the email layout
     */
    text_layout: string;

    /**
     * The environment of the email layout
     */
    environment?: string;

    /**
     * A list of one or more items to show in the footer of the email layout
     */
    footer_links?: Array<EmailLayout.FooterLink>;

    /**
     * The last update date of the email layout
     */
    updated_at?: string;
  }

  export namespace EmailLayout {
    export interface FooterLink {
      /**
       * The text to display as the link
       */
      text: string;

      /**
       * The URL to link to
       */
      url: string;
    }
  }
}

/**
 * Wraps the EmailLayout response under the email_layout key.
 */
export interface EmailLayoutValidateResponse {
  /**
   * A versioned email layout used within an environment
   */
  email_layout: EmailLayoutValidateResponse.EmailLayout;
}

export namespace EmailLayoutValidateResponse {
  /**
   * A versioned email layout used within an environment
   */
  export interface EmailLayout {
    /**
     * The creation date of the email layout
     */
    created_at: string;

    /**
     * The complete HTML content of the email layout
     */
    html_layout: string;

    /**
     * The unique key for this email layout
     */
    key: string;

    /**
     * The friendly name of this email layout
     */
    name: string;

    /**
     * The SHA of the email layout
     */
    sha: string;

    /**
     * The complete plain text content of the email layout
     */
    text_layout: string;

    /**
     * The environment of the email layout
     */
    environment?: string;

    /**
     * A list of one or more items to show in the footer of the email layout
     */
    footer_links?: Array<EmailLayout.FooterLink>;

    /**
     * The last update date of the email layout
     */
    updated_at?: string;
  }

  export namespace EmailLayout {
    export interface FooterLink {
      /**
       * The text to display as the link
       */
      text: string;

      /**
       * The URL to link to
       */
      url: string;
    }
  }
}

export interface EmailLayoutRetrieveParams {
  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * The environment slug to show the email layout for
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export interface EmailLayoutListParams {
  /**
   * The cursor to fetch entries after
   */
  after?: string;

  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * The cursor to fetch entries before
   */
  before?: string;

  /**
   * The environment slug to list email layouts for
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;

  /**
   * The number of entries to fetch
   */
  limit?: number;
}

export interface EmailLayoutUpsertParams {
  /**
   * Body param: A request to update or create an email layout
   */
  email_layout: EmailLayoutUpsertParams.EmailLayout;

  /**
   * Query param: Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Query param: Whether to commit the resource at the same time as modifying it
   */
  commit?: boolean;

  /**
   * Query param: The message to commit the resource with
   */
  commit_message?: string;

  /**
   * Query param: The environment slug to upsert the email layout for
   */
  environment?: string;

  /**
   * Query param: Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export namespace EmailLayoutUpsertParams {
  /**
   * A request to update or create an email layout
   */
  export interface EmailLayout {
    /**
     * The complete HTML content of the email layout
     */
    html_layout: string;

    /**
     * The friendly name of this email layout
     */
    name: string;

    /**
     * The complete plain text content of the email layout
     */
    text_layout: string;

    /**
     * A list of one or more items to show in the footer of the email layout
     */
    footer_links?: Array<EmailLayout.FooterLink>;
  }

  export namespace EmailLayout {
    export interface FooterLink {
      /**
       * The text to display as the link
       */
      text: string;

      /**
       * The URL to link to
       */
      url: string;
    }
  }
}

export interface EmailLayoutValidateParams {
  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * The environment slug to validate the email layout for
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export declare namespace EmailLayouts {
  export {
    type EmailLayout as EmailLayout,
    type EmailLayoutListResponse as EmailLayoutListResponse,
    type EmailLayoutUpsertResponse as EmailLayoutUpsertResponse,
    type EmailLayoutValidateResponse as EmailLayoutValidateResponse,
    type EmailLayoutRetrieveParams as EmailLayoutRetrieveParams,
    type EmailLayoutListParams as EmailLayoutListParams,
    type EmailLayoutUpsertParams as EmailLayoutUpsertParams,
    type EmailLayoutValidateParams as EmailLayoutValidateParams,
  };
}
