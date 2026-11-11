// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Warehouse syncs read rows from a warehouse on a schedule and write them to Knock.
 */
export class WarehouseSyncs extends APIResource {
  /**
   * Retrieve a warehouse sync by its key in a given environment.
   *
   * @example
   * ```ts
   * const warehouseSync = await client.warehouseSyncs.retrieve(
   *   'warehouse_sync_key',
   * );
   * ```
   */
  retrieve(
    warehouseSyncKey: string,
    query: WarehouseSyncRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseSync> {
    return this._client.get(path`/v1/warehouse_syncs/${warehouseSyncKey}`, { query, ...options });
  }

  /**
   * Creates a warehouse sync, or saves a new draft of it if it exists. Fields left
   * out keep their current values. Pass `commit=true` to publish the draft. A draft
   * that fails to publish stays saved.
   *
   * @example
   * ```ts
   * const warehouseSync = await client.warehouseSyncs.update(
   *   'warehouse_sync_key',
   *   { warehouse_sync: {} },
   * );
   * ```
   */
  update(
    warehouseSyncKey: string,
    params: WarehouseSyncUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseSyncUpdateResponse> {
    const { commit, commit_message, environment, ...body } = params;
    return this._client.put(path`/v1/warehouse_syncs/${warehouseSyncKey}`, {
      query: { commit, commit_message, environment },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of warehouse syncs for the given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const warehouseSync of client.warehouseSyncs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WarehouseSyncListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WarehouseSyncsEntriesCursor, WarehouseSync> {
    return this._client.getAPIList('/v1/warehouse_syncs', EntriesCursor<WarehouseSync>, {
      query,
      ...options,
    });
  }

  /**
   * Returns the most recent runs of a warehouse sync, newest first.
   *
   * @example
   * ```ts
   * const response = await client.warehouseSyncs.retrieveRuns(
   *   'warehouse_sync_key',
   * );
   * ```
   */
  retrieveRuns(
    warehouseSyncKey: string,
    query: WarehouseSyncRetrieveRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseSyncRetrieveRunsResponse> {
    return this._client.get(path`/v1/warehouse_syncs/${warehouseSyncKey}/runs`, { query, ...options });
  }

  /**
   * Starts a run of the published warehouse sync now, instead of waiting for its
   * schedule. Refused while a run is in progress.
   *
   * @example
   * ```ts
   * const response = await client.warehouseSyncs.updateRun(
   *   'warehouse_sync_key',
   * );
   * ```
   */
  updateRun(
    warehouseSyncKey: string,
    params: WarehouseSyncUpdateRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseSyncUpdateRunResponse> {
    const { environment } = params ?? {};
    return this._client.put(path`/v1/warehouse_syncs/${warehouseSyncKey}/run`, {
      query: { environment },
      ...options,
    });
  }

  /**
   * Pauses or resumes a warehouse sync, or changes how often it runs. Settings take
   * effect right away and don't need a publish.
   *
   * @example
   * ```ts
   * const response = await client.warehouseSyncs.updateSettings(
   *   'warehouse_sync_key',
   * );
   * ```
   */
  updateSettings(
    warehouseSyncKey: string,
    params: WarehouseSyncUpdateSettingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarehouseSyncUpdateSettingsResponse> {
    const { environment, ...body } = params ?? {};
    return this._client.put(path`/v1/warehouse_syncs/${warehouseSyncKey}/settings`, {
      query: { environment },
      body,
      ...options,
    });
  }

  /**
   * Checks a warehouse sync payload the way an upsert would, without saving it.
   * Returns the payload as sent.
   *
   * @example
   * ```ts
   * const response = await client.warehouseSyncs.updateValidate(
   *   'warehouse_sync_key',
   *   { warehouse_sync: {} },
   * );
   * ```
   */
  updateValidate(
    warehouseSyncKey: string,
    params: WarehouseSyncUpdateValidateParams,
    options?: RequestOptions,
  ): APIPromise<WarehouseSyncUpdateValidateResponse> {
    const { environment, ...body } = params;
    return this._client.put(path`/v1/warehouse_syncs/${warehouseSyncKey}/validate`, {
      query: { environment },
      body,
      ...options,
    });
  }
}

export type WarehouseSyncsEntriesCursor = EntriesCursor<WarehouseSync>;

/**
 * A warehouse sync reads rows from a warehouse on a schedule and writes them to
 * Knock as users, tenants, objects, audience members, or subscriptions.
 */
export interface WarehouseSync {
  /**
   * When the sync was created. (read-only).
   */
  created_at: string;

  /**
   * Whether the sync runs on its schedule.
   */
  enabled: boolean;

  /**
   * The slug of the environment the sync belongs to. (read-only).
   */
  environment: string;

  /**
   * How often the sync runs, in minutes.
   */
  frequency_minutes: 10 | 15 | 60 | 360 | 720 | 1440;

  /**
   * Whether the sync has a draft that hasn't been published.
   */
  has_unpublished_changes: boolean;

  /**
   * The unique key of the sync in its environment.
   */
  key: string;

  /**
   * How columns map to Knock fields.
   */
  mappings: Array<WarehouseSyncMapping>;

  /**
   * The name of the sync. Must be at minimum 1 character and at maximum 255
   * characters in length.
   */
  name: string;

  /**
   * The SHA hash of the sync's definition. (read-only).
   */
  sha: string;

  /**
   * The status of the sync.
   */
  status: 'draft' | 'publishing' | 'delivery_failed' | 'paused' | 'needs_attention' | 'live';

  /**
   * What each row becomes in Knock. Can't change after creation.
   */
  target_type: 'user' | 'tenant' | 'object' | 'static_audience_membership' | 'subscription';

  /**
   * When the returned version was saved. (read-only).
   */
  updated_at: string;

  /**
   * The ID of the version returned. Send it back when saving to make sure nobody
   * saved since.
   */
  version_id: string;

  /**
   * The key of the warehouse the sync reads from. Can't change after creation.
   */
  warehouse_key: string;

  /**
   * How the sync detects changed and deleted rows.
   */
  change_tracking?: WarehouseSyncChangeTracking;

  /**
   * An optional description of the sync. Maximum of 280 characters allowed.
   */
  description?: string | null;

  /**
   * The last run failure, cleared when a run succeeds.
   */
  last_failure?: WarehouseSync.LastFailure | null;

  /**
   * When the sync was last published.
   */
  last_published_at?: string | null;

  /**
   * The column that uniquely identifies each row.
   */
  primary_key_column?: string | null;

  /**
   * Why the last publish didn't go live, when it failed.
   */
  publish_error?: string | null;

  /**
   * The rows a warehouse sync reads: a table or view (`relation`), or the result of
   * a SQL query (`sql`).
   */
  source?: WarehouseSyncSource;

  /**
   * The collection or audience the sync writes to. `object` and `subscription` syncs
   * set `collection`, and `static_audience_membership` syncs set `audience_key`.
   * Null for `user` and `tenant` syncs.
   */
  target?: WarehouseSyncTarget | null;
}

export namespace WarehouseSync {
  /**
   * The last run failure, cleared when a run succeeds.
   */
  export interface LastFailure {
    /**
     * What went wrong.
     */
    message?: string;

    /**
     * Where the run failed: reading the warehouse (`extract`), sending rows to Knock
     * (`load`), or applying them (`apply`).
     */
    stage?: 'extract' | 'load' | 'apply';
  }
}

/**
 * How the sync detects changed and deleted rows.
 */
export interface WarehouseSyncChangeTracking {
  /**
   * A boolean column that marks a row as deleted. Requires `last_modified_column`.
   */
  is_deleted_column?: string | null;

  /**
   * A timestamp column that changes whenever a row changes. With it, each run reads
   * only rows changed since the last run.
   */
  last_modified_column?: string | null;
}

/**
 * Maps one column from the warehouse to one field in Knock.
 */
export interface WarehouseSyncMapping {
  /**
   * The column to read. Can be a dotted path into an object column, such as
   * `PROPERTIES.plan`.
   */
  source_column: string;

  /**
   * The Knock field to write the value to.
   */
  target_field: string;

  /**
   * What to do when the column is `NULL`. `set_null` clears the Knock field, and
   * `preserve` keeps its current value.
   */
  on_null?: 'set_null' | 'preserve';
}

/**
 * A warehouse sync payload for upsert or validate. Fields left out keep their
 * current values. `warehouse_key`, `target_type`, and `target` are required to
 * create a sync and can't change after. Change `enabled` and `frequency_minutes`
 * with the settings endpoint.
 */
export interface WarehouseSyncRequest {
  /**
   * How the sync detects changed and deleted rows.
   */
  change_tracking?: WarehouseSyncChangeTracking;

  /**
   * An optional description of the sync. Maximum of 280 characters allowed.
   */
  description?: string | null;

  /**
   * How columns map to Knock fields.
   */
  mappings?: Array<WarehouseSyncMapping>;

  /**
   * The name of the sync. Must be at minimum 1 character and at maximum 255
   * characters in length.
   */
  name?: string;

  /**
   * The column that uniquely identifies each row.
   */
  primary_key_column?: string | null;

  /**
   * The rows a warehouse sync reads: a table or view (`relation`), or the result of
   * a SQL query (`sql`).
   */
  source?: WarehouseSyncSource;

  /**
   * The collection or audience the sync writes to. `object` and `subscription` syncs
   * set `collection`, and `static_audience_membership` syncs set `audience_key`.
   * Null for `user` and `tenant` syncs.
   */
  target?: WarehouseSyncTarget | null;

  /**
   * What each row becomes in Knock. Can't change after creation.
   */
  target_type?: 'user' | 'tenant' | 'object' | 'static_audience_membership' | 'subscription';

  /**
   * The `version_id` of the sync you last read. When it isn't the current version,
   * someone saved since, and the request is refused.
   */
  version_id?: string;

  /**
   * The key of the warehouse the sync reads from. Can't change after creation.
   */
  warehouse_key?: string;
}

/**
 * The rows a warehouse sync reads: a table or view (`relation`), or the result of
 * a SQL query (`sql`).
 */
export interface WarehouseSyncSource {
  /**
   * Whether the sync reads a table or view, or a SQL query.
   */
  mode: 'relation' | 'sql';

  /**
   * The name of the table or view. Required when `mode` is `relation`.
   */
  name?: string | null;

  /**
   * The SQL query to read. Required when `mode` is `sql`.
   */
  query?: string | null;

  /**
   * The schema of the table or view. Required when `mode` is `relation`.
   */
  schema?: string | null;
}

/**
 * The collection or audience the sync writes to. `object` and `subscription` syncs
 * set `collection`, and `static_audience_membership` syncs set `audience_key`.
 * Null for `user` and `tenant` syncs.
 */
export interface WarehouseSyncTarget {
  /**
   * The key of the static audience the rows become members of.
   */
  audience_key?: string | null;

  /**
   * The object collection the rows are written to.
   */
  collection?: string | null;
}

/**
 * Wraps the WarehouseSync response under the `warehouse_sync` key.
 */
export interface WarehouseSyncUpdateResponse {
  /**
   * A warehouse sync reads rows from a warehouse on a schedule and writes them to
   * Knock as users, tenants, objects, audience members, or subscriptions.
   */
  warehouse_sync: WarehouseSync;
}

/**
 * A paginated list of WarehouseSyncRun. Contains a list of entries and page
 * information.
 */
export interface WarehouseSyncRetrieveRunsResponse {
  /**
   * A list of entries.
   */
  entries: Array<WarehouseSyncRetrieveRunsResponse.Entry>;

  /**
   * The information about a paginated result.
   */
  page_info: Shared.PageInfo;
}

export namespace WarehouseSyncRetrieveRunsResponse {
  /**
   * One run of a warehouse sync: reading changed rows from the warehouse, then
   * applying them in Knock.
   */
  export interface Entry {
    /**
     * The ID of the run.
     */
    id: string;

    /**
     * The status of the run.
     */
    status: 'running' | 'completed' | 'completed_with_errors' | 'failed';

    /**
     * When the run ended.
     */
    ended_at?: string | null;

    /**
     * Why the run failed.
     */
    error?: Entry.Error | null;

    /**
     * The ID of the delivery of rows to Knock. Null when the run hasn't sent rows yet,
     * failed before sending them, or found no changes.
     */
    load_id?: string | null;

    /**
     * How many rows failed before reaching Knock.
     */
    records_errored?: number | null;

    /**
     * How many changed rows were read from the warehouse.
     */
    records_processed?: number | null;

    /**
     * How many rows were applied in Knock.
     */
    rows_applied?: number | null;

    /**
     * How many rows failed to apply in Knock.
     */
    rows_failed?: number | null;

    /**
     * When the run started.
     */
    started_at?: string | null;

    /**
     * When the run was queued.
     */
    submitted_at?: string | null;
  }

  export namespace Entry {
    /**
     * Why the run failed.
     */
    export interface Error {
      /**
       * What went wrong.
       */
      message?: string;

      /**
       * Where the run failed.
       */
      stage?: 'extract' | 'load' | 'apply';
    }
  }
}

/**
 * Wraps the WarehouseSync response under the `warehouse_sync` key.
 */
export interface WarehouseSyncUpdateRunResponse {
  /**
   * A warehouse sync reads rows from a warehouse on a schedule and writes them to
   * Knock as users, tenants, objects, audience members, or subscriptions.
   */
  warehouse_sync: WarehouseSync;
}

/**
 * Wraps the WarehouseSync response under the `warehouse_sync` key.
 */
export interface WarehouseSyncUpdateSettingsResponse {
  /**
   * A warehouse sync reads rows from a warehouse on a schedule and writes them to
   * Knock as users, tenants, objects, audience members, or subscriptions.
   */
  warehouse_sync: WarehouseSync;
}

/**
 * Wraps the WarehouseSyncRequest response under the `warehouse_sync` key.
 */
export interface WarehouseSyncUpdateValidateResponse {
  /**
   * A warehouse sync payload for upsert or validate. Fields left out keep their
   * current values. `warehouse_key`, `target_type`, and `target` are required to
   * create a sync and can't change after. Change `enabled` and `frequency_minutes`
   * with the settings endpoint.
   */
  warehouse_sync: WarehouseSyncRequest;
}

export interface WarehouseSyncRetrieveParams {
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

export interface WarehouseSyncUpdateParams {
  /**
   * Body param: A warehouse sync payload for upsert or validate. Fields left out
   * keep their current values. `warehouse_key`, `target_type`, and `target` are
   * required to create a sync and can't change after. Change `enabled` and
   * `frequency_minutes` with the settings endpoint.
   */
  warehouse_sync: WarehouseSyncRequest;

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
}

export interface WarehouseSyncListParams extends EntriesCursorParams {
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

export interface WarehouseSyncRetrieveRunsParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface WarehouseSyncUpdateRunParams {
  /**
   * The environment slug. When omitted, the account's default environment is used.
   */
  environment?: string;
}

export interface WarehouseSyncUpdateSettingsParams {
  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Body param: Whether the sync runs on its schedule.
   */
  enabled?: boolean;

  /**
   * Body param: How often the sync runs, in minutes.
   */
  frequency_minutes?: 10 | 15 | 60 | 360 | 720 | 1440;
}

export interface WarehouseSyncUpdateValidateParams {
  /**
   * Body param: A warehouse sync payload for upsert or validate. Fields left out
   * keep their current values. `warehouse_key`, `target_type`, and `target` are
   * required to create a sync and can't change after. Change `enabled` and
   * `frequency_minutes` with the settings endpoint.
   */
  warehouse_sync: WarehouseSyncRequest;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;
}

export declare namespace WarehouseSyncs {
  export {
    type WarehouseSync as WarehouseSync,
    type WarehouseSyncChangeTracking as WarehouseSyncChangeTracking,
    type WarehouseSyncMapping as WarehouseSyncMapping,
    type WarehouseSyncRequest as WarehouseSyncRequest,
    type WarehouseSyncSource as WarehouseSyncSource,
    type WarehouseSyncTarget as WarehouseSyncTarget,
    type WarehouseSyncUpdateResponse as WarehouseSyncUpdateResponse,
    type WarehouseSyncRetrieveRunsResponse as WarehouseSyncRetrieveRunsResponse,
    type WarehouseSyncUpdateRunResponse as WarehouseSyncUpdateRunResponse,
    type WarehouseSyncUpdateSettingsResponse as WarehouseSyncUpdateSettingsResponse,
    type WarehouseSyncUpdateValidateResponse as WarehouseSyncUpdateValidateResponse,
    type WarehouseSyncsEntriesCursor as WarehouseSyncsEntriesCursor,
    type WarehouseSyncRetrieveParams as WarehouseSyncRetrieveParams,
    type WarehouseSyncUpdateParams as WarehouseSyncUpdateParams,
    type WarehouseSyncListParams as WarehouseSyncListParams,
    type WarehouseSyncRetrieveRunsParams as WarehouseSyncRetrieveRunsParams,
    type WarehouseSyncUpdateRunParams as WarehouseSyncUpdateRunParams,
    type WarehouseSyncUpdateSettingsParams as WarehouseSyncUpdateSettingsParams,
    type WarehouseSyncUpdateValidateParams as WarehouseSyncUpdateValidateParams,
  };
}
