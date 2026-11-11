// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Warehouses are the databases in your data warehouse that Knock reads from.
 */
export class Warehouses extends APIResource {
  /**
   * Retrieve a warehouse by its key.
   *
   * @example
   * ```ts
   * const warehouse = await client.warehouses.retrieve(
   *   'warehouse_key',
   * );
   * ```
   */
  retrieve(
    warehouseKey: string,
    query: WarehouseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Warehouse> {
    return this._client.get(path`/v1/warehouses/${warehouseKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of the project's warehouses. Warehouses are shared by
   * every environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const warehouse of client.warehouses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WarehouseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WarehousesEntriesCursor, Warehouse> {
    return this._client.getAPIList('/v1/warehouses', EntriesCursor<Warehouse>, { query, ...options });
  }
}

export type WarehousesEntriesCursor = EntriesCursor<Warehouse>;

/**
 * A warehouse is one database in your data warehouse that Knock reads from.
 * Warehouses belong to the project and are shared by every environment.
 */
export interface Warehouse {
  /**
   * The status of the warehouse's connection.
   */
  connection_status:
    | 'not_configured'
    | 'key_not_installed'
    | 'failed'
    | 'connecting'
    | 'untested'
    | 'connected';

  /**
   * When the warehouse was created.
   */
  created_at: string;

  /**
   * The unique key of the warehouse.
   */
  key: string;

  /**
   * The name of the warehouse.
   */
  name: string;

  /**
   * The type of data warehouse.
   */
  type: 'redshift' | 'snowflake' | 'postgres' | 'bigquery';

  /**
   * When the warehouse was last updated.
   */
  updated_at: string;

  /**
   * The error from the last connection test, with a `code` and a `message`. Null
   * when the last test passed.
   */
  connection_error?: { [key: string]: unknown } | null;

  /**
   * How Knock connects to the warehouse. The fields depend on the warehouse type,
   * such as `host`, `port`, `database`, and `username`, or `project_id`, `region`,
   * and `service_account_email` for BigQuery. Credentials such as passwords are
   * never returned.
   */
  connection_settings?: { [key: string]: unknown } | null;

  /**
   * When the connection was last tested.
   */
  last_tested_at?: string | null;
}

export interface WarehouseRetrieveParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface WarehouseListParams extends EntriesCursorParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export declare namespace Warehouses {
  export {
    type Warehouse as Warehouse,
    type WarehousesEntriesCursor as WarehousesEntriesCursor,
    type WarehouseRetrieveParams as WarehouseRetrieveParams,
    type WarehouseListParams as WarehouseListParams,
  };
}
