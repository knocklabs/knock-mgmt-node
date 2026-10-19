// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Assets are uploaded files available to your Knock account.
 */
export class Assets extends APIResource {
  /**
   * Records a library asset after the file has been uploaded to the key from an
   * upload request. The asset is always a library asset. Assets are account-wide and
   * do not require an environment parameter.
   *
   * @example
   * ```ts
   * const asset = await client.assets.create({
   *   filename: 'logo.png',
   *   key: 'acc_123/proj_123/018f02cd-9230-71d2-8f70-b40e5e2a4f6d.png',
   * });
   * ```
   */
  create(body: AssetCreateParams, options?: RequestOptions): APIPromise<Asset> {
    return this._client.post('/v1/assets', { body, ...options });
  }

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

  /**
   * Archives a library or template image asset by id. The stored file remains at its
   * URL. Other asset types, unknown ids, and already archived assets are not found.
   * Assets are account-wide and do not require an environment parameter.
   *
   * @example
   * ```ts
   * const asset = await client.assets.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(assetID: string, options?: RequestOptions): APIPromise<AssetDeleteResponse> {
    return this._client.delete(path`/v1/assets/${assetID}`, options);
  }

  /**
   * Returns a time-limited URL for uploading an asset file. PUT the file bytes to
   * upload_url with Content-Type and Content-Length from this response, then create
   * the asset with the returned key. This request does not store an asset. Assets
   * are account-wide and do not require an environment parameter.
   *
   * @example
   * ```ts
   * const response = await client.assets.uploads({
   *   content_length: 20480,
   *   mime_type: 'image/png',
   * });
   * ```
   */
  uploads(body: AssetUploadsParams, options?: RequestOptions): APIPromise<AssetUploadsResponse> {
    return this._client.post('/v1/assets/uploads', { body, ...options });
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

/**
 * The response from archiving an asset.
 */
export interface AssetDeleteResponse {
  /**
   * The result of the archive operation.
   */
  result: string;
}

/**
 * A time-limited permission to upload an asset file directly to storage.
 */
export interface AssetUploadsResponse {
  /**
   * The byte length the PUT must send as Content-Length.
   */
  content_length: number;

  /**
   * Seconds until the upload URL expires.
   */
  expires_in: number;

  /**
   * The storage key to send when creating the asset.
   */
  key: string;

  /**
   * The MIME type the PUT must send as Content-Type.
   */
  mime_type: string;

  /**
   * The URL to PUT the file bytes to. The signature covers Content-Type and
   * Content-Length, and the PUT must send both.
   */
  upload_url: string;

  /**
   * The filename from the request, when one was sent.
   */
  filename?: string | null;
}

export interface AssetCreateParams {
  /**
   * The display name for this asset.
   */
  filename: string;

  /**
   * The storage key from the upload request. The file must already be uploaded.
   */
  key: string;
}

export interface AssetListParams extends EntriesCursorParams {}

export interface AssetUploadsParams {
  /**
   * The file size in bytes. Maximum is 5 MB. The upload URL is signed for this
   * length.
   */
  content_length: number;

  /**
   * The MIME type of the file. One of image/jpeg, image/png, or image/gif.
   */
  mime_type: string;

  /**
   * The display name to echo back. The upload request does not store it. Send it
   * again when creating the asset.
   */
  filename?: string | null;
}

export declare namespace Assets {
  export {
    type Asset as Asset,
    type AssetDeleteResponse as AssetDeleteResponse,
    type AssetUploadsResponse as AssetUploadsResponse,
    type AssetsEntriesCursor as AssetsEntriesCursor,
    type AssetCreateParams as AssetCreateParams,
    type AssetListParams as AssetListParams,
    type AssetUploadsParams as AssetUploadsParams,
  };
}
