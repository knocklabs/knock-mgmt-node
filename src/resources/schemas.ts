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
   * const schema = await client.schemas.retrieve('item_type');
   * ```
   */
  retrieve(
    itemType: string,
    query: SchemaRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/v1/schemas/${itemType}`, { query, ...options });
  }

  /**
   * Retrieve the configuration for all managed item schemas (`user`, `tenant`, and
   * `object`) in a given environment. Branch-qualified reads return the schemas
   * inherited from the parent environment.
   *
   * @example
   * ```ts
   * const schemas = await client.schemas.list();
   * ```
   */
  list(
    query: SchemaListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SchemaListResponse> {
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
   * const response = await client.schemas.upsert('item_type');
   * ```
   */
  upsert(
    itemType: string,
    params: SchemaUpsertParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { branch, collection, environment, body } = params ?? {};
    return this._client.put(path`/v1/schemas/${itemType}`, {
      query: { branch, collection, environment },
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
   * const response = await client.schemas.validate('item_type');
   * ```
   */
  validate(
    itemType: string,
    params: SchemaValidateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { branch, collection, environment, body } = params ?? {};
    return this._client.put(path`/v1/schemas/${itemType}/validate`, {
      query: { branch, collection, environment },
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
   * The slug of a branch to use. When `environment` is omitted, the branch is
   * resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * The object collection, required when `item_type` is `object`.
   */
  collection?: string;

  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface SchemaListParams {
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
   * Filter schemas by item type (`user`, `tenant`, or `object`).
   */
  item_type?: string;
}

export interface SchemaUpsertParams {
  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: The object collection, required when `item_type` is `object`.
   */
  collection?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Body param
   */
  body?: unknown;
}

export interface SchemaValidateParams {
  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: The object collection, required when `item_type` is `object`.
   */
  collection?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

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
