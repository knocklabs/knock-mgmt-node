// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Retrieve the configuration for an item schema (`user`, `tenant`, or `object`) in
   * a given environment, including all of its configured properties.
   *
   * @example
   * ```ts
   * const schema = await client.schemas.retrieve('item_type', {
   *   environment: 'development',
   * });
   * ```
   */
  retrieve(itemType: string, query: SchemaRetrieveParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/schemas/${itemType}`, { query, ...options });
  }

  /**
   * Retrieve the configuration for all managed item schemas (`user`, `tenant`, and
   * `object`) in a given environment. Branch-qualified reads return the schemas
   * inherited from the parent environment.
   *
   * @example
   * ```ts
   * const schemas = await client.schemas.list({
   *   environment: 'development',
   * });
   * ```
   */
  list(query: SchemaListParams, options?: RequestOptions): APIPromise<SchemaListResponse> {
    return this._client.get('/v1/schemas', { query, ...options });
  }

  /**
   * Applies changes for the item schema properties in the request. Omitted
   * properties are left unchanged; hide a property with `visible: false` rather than
   * removing it. The required permissions depend on what changes: changing a
   * property's display settings (`visible`/`description`) requires
   * `item_schemas:manage`; changing a property's type or example, or adding a
   * property, requires `item_schemas:edit`. Adding a property that is already hidden
   * or already has a description requires both.
   *
   * @example
   * ```ts
   * const response = await client.schemas.upsert('item_type', {
   *   environment: 'development',
   * });
   * ```
   */
  upsert(itemType: string, params: SchemaUpsertParams, options?: RequestOptions): APIPromise<unknown> {
    const { environment, branch, collection, body } = params;
    return this._client.put(path`/v1/schemas/${itemType}`, {
      query: { environment, branch, collection },
      body: body,
      ...options,
    });
  }

  /**
   * Checks an item schema configuration payload and reports which permissions it
   * would require, without saving any changes.
   *
   * @example
   * ```ts
   * const response = await client.schemas.validate(
   *   'item_type',
   *   { environment: 'development' },
   * );
   * ```
   */
  validate(itemType: string, params: SchemaValidateParams, options?: RequestOptions): APIPromise<unknown> {
    const { environment, branch, collection, body } = params;
    return this._client.put(path`/v1/schemas/${itemType}/validate`, {
      query: { environment, branch, collection },
      body: body,
      ...options,
    });
  }
}

/**
 * A managed schema configuration for users, tenants, or objects.
 */
export interface ItemSchema {
  /**
   * The item type the schema applies to.
   */
  item_type: 'user' | 'tenant' | 'object';

  /**
   * The managed properties for the schema.
   */
  properties: Array<ItemSchema.Property>;

  /**
   * The object collection key. Only present for object schemas.
   */
  item_id?: string | null;
}

export namespace ItemSchema {
  /**
   * A property definition within an item schema.
   */
  export interface Property {
    /**
     * The property key.
     */
    key: string;

    /**
     * The description of the property.
     */
    description?: string | null;

    /**
     * The referenced item type when the property stores an item reference.
     */
    item_type?: string | null;

    /**
     * The property preview text.
     */
    preview_text?: string | null;

    /**
     * The primitive or referenced item type for the property.
     */
    type?: string | null;

    /**
     * Whether the property is visible in the schema management UI.
     */
    visible?: boolean;
  }
}

export type SchemaRetrieveResponse = unknown;

/**
 * A paginated list of ItemSchema. Contains a list of entries and page information.
 */
export interface SchemaListResponse {
  /**
   * A list of entries.
   */
  entries: Array<ItemSchema>;

  /**
   * The information about a paginated result.
   */
  page_info: Shared.PageInfo;
}

export type SchemaUpsertResponse = unknown;

export type SchemaValidateResponse = unknown;

export interface SchemaRetrieveParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * The object collection, required when `item_type` is `object`.
   */
  collection?: string;
}

export interface SchemaListParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * Filter schemas by item type (`user`, `tenant`, or `object`).
   */
  item_type?: string;
}

export interface SchemaUpsertParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;

  /**
   * Query param: The object collection, required when `item_type` is `object`.
   */
  collection?: string;

  /**
   * Body param
   */
  body?: unknown;
}

export interface SchemaValidateParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;

  /**
   * Query param: The object collection, required when `item_type` is `object`.
   */
  collection?: string;

  /**
   * Body param
   */
  body?: unknown;
}

export declare namespace Schemas {
  export {
    type ItemSchema as ItemSchema,
    type SchemaRetrieveResponse as SchemaRetrieveResponse,
    type SchemaListResponse as SchemaListResponse,
    type SchemaUpsertResponse as SchemaUpsertResponse,
    type SchemaValidateResponse as SchemaValidateResponse,
    type SchemaRetrieveParams as SchemaRetrieveParams,
    type SchemaListParams as SchemaListParams,
    type SchemaUpsertParams as SchemaUpsertParams,
    type SchemaValidateParams as SchemaValidateParams,
  };
}
