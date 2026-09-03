// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Assets are uploaded files available to your Knock account.
 */
export class Assets extends APIResource {
  /**
   * Returns a paginated list of active account assets. Assets are account-wide and
   * do not require an environment parameter.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const asset of client.assets.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AssetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AssetsEntriesCursor, Asset> {
    return this._client.getAPIList('/v1/assets', EntriesCursor<Asset>, { query, ...options });
  }
}

export type AssetsEntriesCursor = EntriesCursor<Asset>;

/**
 * An uploaded asset file for an account.
 */
export interface Asset {
  /**
   * The unique ID for this asset.
   */
  id: string;

  /**
   * The type of asset.
   */
  asset_type: string;

  /**
   * The timestamp of when this asset was created.
   */
  created_at: string;

  /**
   * The MIME type for this asset.
   */
  mime_type: string;

  /**
   * The timestamp of when this asset was last updated.
   */
  updated_at: string;

  /**
   * The public URL for this asset.
   */
  url: string;

  /**
   * The human-readable filename for this asset.
   */
  filename?: string | null;
}

export interface AssetListParams extends EntriesCursorParams {}

export declare namespace Assets {
  export {
    type Asset as Asset,
    type AssetsEntriesCursor as AssetsEntriesCursor,
    type AssetListParams as AssetListParams,
  };
}
