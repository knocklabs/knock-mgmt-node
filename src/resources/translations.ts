// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Translations extends APIResource {
  /**
   * Retrieve a translation by its locale and namespace, in a given environment.
   */
  retrieve(
    localeCode: string,
    query: TranslationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TranslationRetrieveResponse> {
    return this._client.get(path`/v1/translations/${localeCode}`, { query, ...options });
  }

  /**
   * Returns a paginated list of translations available in a given environment. The
   * translations are returned in alpha-sorted order by locale code.
   */
  list(
    query: TranslationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TranslationListResponse> {
    return this._client.get('/v1/translations', { query, ...options });
  }

  /**
   * Updates a translation of a given locale code + namespace, or creates a new one
   * if it does not yet exist.
   *
   * Note: this endpoint only operates on translations in the “development”
   * environment.
   */
  upsert(
    localeCode: string,
    params: TranslationUpsertParams,
    options?: RequestOptions,
  ): APIPromise<TranslationUpsertResponse> {
    const { namespace, annotate, environment, format, hide_uncommitted_changes, ...body } = params;
    return this._client.put(path`/v1/translations/${localeCode}`, {
      query: { namespace, annotate, environment, format, hide_uncommitted_changes },
      body,
      ...options,
    });
  }

  /**
   * Validates a translation payload without persisting it.
   *
   * Note: this endpoint only operates on translations in the “development”
   * environment.
   */
  validate(
    localeCode: string,
    params: TranslationValidateParams,
    options?: RequestOptions,
  ): APIPromise<TranslationValidateResponse> {
    const { annotate, environment, hide_uncommitted_changes, ...body } = params;
    return this._client.put(path`/v1/translations/${localeCode}/validate`, {
      query: { annotate, environment, hide_uncommitted_changes },
      body,
      ...options,
    });
  }
}

/**
 * Wraps the Translation response under the translation key.
 */
export interface TranslationRetrieveResponse {
  /**
   * A translation object.
   */
  translation: TranslationRetrieveResponse.Translation;
}

export namespace TranslationRetrieveResponse {
  /**
   * A translation object.
   */
  export interface Translation {
    /**
     * A JSON-encoded string containing the key-value pairs of translation references
     * and translation strings.
     */
    content: string;

    /**
     * Indicates whether content is a JSON encoded object string or a string in the PO
     * format.
     */
    format: 'json' | 'po';

    /**
     * The date and time the translation was created.
     */
    inserted_at: string;

    /**
     * The locale code for the translation object.
     */
    locale_code: string;

    /**
     * An optional namespace for the translation to help categorize your translations.
     */
    namespace: string;

    /**
     * The date and time the translation was last updated.
     */
    updated_at: string;
  }
}

/**
 * A paginated list of Translation. Contains a list of entries and page
 * information.
 */
export interface TranslationListResponse {
  entries: Array<TranslationListResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: TranslationListResponse.PageInfo;
}

export namespace TranslationListResponse {
  /**
   * A translation object.
   */
  export interface Entry {
    /**
     * A JSON-encoded string containing the key-value pairs of translation references
     * and translation strings.
     */
    content: string;

    /**
     * Indicates whether content is a JSON encoded object string or a string in the PO
     * format.
     */
    format: 'json' | 'po';

    /**
     * The date and time the translation was created.
     */
    inserted_at: string;

    /**
     * The locale code for the translation object.
     */
    locale_code: string;

    /**
     * An optional namespace for the translation to help categorize your translations.
     */
    namespace: string;

    /**
     * The date and time the translation was last updated.
     */
    updated_at: string;
  }

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
 * Wraps the Translation response under the translation key.
 */
export interface TranslationUpsertResponse {
  /**
   * A translation object.
   */
  translation: TranslationUpsertResponse.Translation;
}

export namespace TranslationUpsertResponse {
  /**
   * A translation object.
   */
  export interface Translation {
    /**
     * A JSON-encoded string containing the key-value pairs of translation references
     * and translation strings.
     */
    content: string;

    /**
     * Indicates whether content is a JSON encoded object string or a string in the PO
     * format.
     */
    format: 'json' | 'po';

    /**
     * The date and time the translation was created.
     */
    inserted_at: string;

    /**
     * The locale code for the translation object.
     */
    locale_code: string;

    /**
     * An optional namespace for the translation to help categorize your translations.
     */
    namespace: string;

    /**
     * The date and time the translation was last updated.
     */
    updated_at: string;
  }
}

/**
 * Wraps the Translation response under the translation key.
 */
export interface TranslationValidateResponse {
  /**
   * A translation object.
   */
  translation: TranslationValidateResponse.Translation;
}

export namespace TranslationValidateResponse {
  /**
   * A translation object.
   */
  export interface Translation {
    /**
     * A JSON-encoded string containing the key-value pairs of translation references
     * and translation strings.
     */
    content: string;

    /**
     * Indicates whether content is a JSON encoded object string or a string in the PO
     * format.
     */
    format: 'json' | 'po';

    /**
     * The date and time the translation was created.
     */
    inserted_at: string;

    /**
     * The locale code for the translation object.
     */
    locale_code: string;

    /**
     * An optional namespace for the translation to help categorize your translations.
     */
    namespace: string;

    /**
     * The date and time the translation was last updated.
     */
    updated_at: string;
  }
}

export interface TranslationRetrieveParams {
  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * The environment slug to list translations for
   */
  environment?: string;

  /**
   * Optionally specify the returned content format. Supports 'json' and 'po'.
   * Defaults to 'json'.
   */
  format?: 'json' | 'po';

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;

  /**
   * A specific namespace to filter translations for.
   */
  namespace?: string;
}

export interface TranslationListParams {
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
   * The environment slug to list translations for
   */
  environment?: string;

  /**
   * Optionally specify the returned content format. Supports 'json' and 'po'.
   * Defaults to 'json'.
   */
  format?: 'json' | 'po';

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;

  /**
   * The number of entries to fetch
   */
  limit?: number;

  /**
   * A specific locale code to filter translations for.
   */
  locale_code?: string;

  /**
   * A specific namespace to filter translations for.
   */
  namespace?: string;
}

export interface TranslationUpsertParams {
  /**
   * Query param: An optional namespace that identifies the translation.
   */
  namespace: string;

  /**
   * Body param: A translation object with a content attribute used to update or
   * create a translation.
   */
  translation: TranslationUpsertParams.Translation;

  /**
   * Query param: Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Query param: The environment slug to list translations for
   */
  environment?: string;

  /**
   * Query param: Optionally specify the returned content format. Supports 'json' and
   * 'po'. Defaults to 'json'.
   */
  format?: 'json' | 'po';

  /**
   * Query param: Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export namespace TranslationUpsertParams {
  /**
   * A translation object with a content attribute used to update or create a
   * translation.
   */
  export interface Translation {
    /**
     * A JSON-encoded string containing the key-value pairs of translation references
     * and translation strings.
     */
    content: string;

    /**
     * Indicates whether content is a JSON encoded object string or a string in the PO
     * format.
     */
    format: 'json' | 'po';
  }
}

export interface TranslationValidateParams {
  /**
   * Body param: A translation object with a content attribute used to update or
   * create a translation.
   */
  translation: TranslationValidateParams.Translation;

  /**
   * Query param: Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Query param: The environment slug to list translations for
   */
  environment?: string;

  /**
   * Query param: Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export namespace TranslationValidateParams {
  /**
   * A translation object with a content attribute used to update or create a
   * translation.
   */
  export interface Translation {
    /**
     * A JSON-encoded string containing the key-value pairs of translation references
     * and translation strings.
     */
    content: string;

    /**
     * Indicates whether content is a JSON encoded object string or a string in the PO
     * format.
     */
    format: 'json' | 'po';
  }
}

export declare namespace Translations {
  export {
    type TranslationRetrieveResponse as TranslationRetrieveResponse,
    type TranslationListResponse as TranslationListResponse,
    type TranslationUpsertResponse as TranslationUpsertResponse,
    type TranslationValidateResponse as TranslationValidateResponse,
    type TranslationRetrieveParams as TranslationRetrieveParams,
    type TranslationListParams as TranslationListParams,
    type TranslationUpsertParams as TranslationUpsertParams,
    type TranslationValidateParams as TranslationValidateParams,
  };
}
