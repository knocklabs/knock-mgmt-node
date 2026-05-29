// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DataSourcesAPI from './data-sources';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Sources receive external events that can trigger Knock actions.
 */
export class DataSources extends APIResource {
  /**
   * Returns a source with environment-specific settings, preprocess scripts, and
   * event mappings.
   *
   * @example
   * ```ts
   * const source = await client.dataSources.retrieve('key', {
   *   environment: 'development',
   * });
   * ```
   */
  retrieve(key: string, query: DataSourceRetrieveParams, options?: RequestOptions): APIPromise<Source> {
    return this._client.get(path`/v1/sources/${key}`, { query, ...options });
  }

  /**
   * Returns known unique events received by a source in the requested environment.
   *
   * @example
   * ```ts
   * const sourceEventsResponse =
   *   await client.dataSources.listEvents('key');
   * ```
   */
  listEvents(
    key: string,
    query: DataSourceListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourceEventsResponse> {
    return this._client.get(path`/v1/sources/${key}/events`, { query, ...options });
  }

  /**
   * Returns event logs received by a source in the requested environment. Supports
   * filtering by date/time, event, and log ID.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sourceLog of client.dataSources.listLogs(
   *   'key',
   *   { environment: 'development' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listLogs(
    key: string,
    query: DataSourceListLogsParams,
    options?: RequestOptions,
  ): PagePromise<SourceLogsEntriesCursor, SourceLog> {
    return this._client.getAPIList(path`/v1/sources/${key}/logs`, EntriesCursor<SourceLog>, {
      query,
      ...options,
    });
  }

  /**
   * Returns the source provider templates available for creating sources.
   *
   * @example
   * ```ts
   * const sourceProvidersResponse =
   *   await client.dataSources.listProviders();
   * ```
   */
  listProviders(options?: RequestOptions): APIPromise<SourceProvidersResponse> {
    return this._client.get('/v1/source_providers', options);
  }

  /**
   * Returns connected sources for the project.
   *
   * @example
   * ```ts
   * const sourcesResponse =
   *   await client.dataSources.listSources();
   * ```
   */
  listSources(
    query: DataSourceListSourcesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourcesResponse> {
    return this._client.get('/v1/sources', { query, ...options });
  }

  /**
   * Sends an arbitrary payload through the source's parse, preprocess, and mapping
   * pipeline in the requested environment. This endpoint cannot be run in production
   * environments.
   *
   * @example
   * ```ts
   * const sourceRehearseResponse =
   *   await client.dataSources.rehearse('key', {
   *     environment: 'development',
   *     payload: { body: 'bar', headers: 'bar' },
   *   });
   * ```
   */
  rehearse(
    key: string,
    params: DataSourceRehearseParams,
    options?: RequestOptions,
  ): APIPromise<SourceRehearseResponse> {
    const { environment, ...body } = params;
    return this._client.post(path`/v1/sources/${key}/rehearse`, { query: { environment }, body, ...options });
  }

  /**
   * Returns a source provider template available for creating sources.
   *
   * @example
   * ```ts
   * const sourceProviderResponse =
   *   await client.dataSources.retrieveProvider('key');
   * ```
   */
  retrieveProvider(
    key: string,
    query: DataSourceRetrieveProviderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourceProviderResponse> {
    return this._client.get(path`/v1/source_providers/${key}`, { query, ...options });
  }

  /**
   * Returns source activity and workflow-trigger mappings that need action in the
   * requested environment.
   *
   * @example
   * ```ts
   * const sourceStatusResponse =
   *   await client.dataSources.retrieveStatus('key');
   * ```
   */
  retrieveStatus(
    key: string,
    query: DataSourceRetrieveStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourceStatusResponse> {
    return this._client.get(path`/v1/sources/${key}/status`, { query, ...options });
  }

  /**
   * Creates or updates a source with environment-specific settings, preprocess
   * scripts, and event mappings.
   *
   * @example
   * ```ts
   * const response = await client.dataSources.upsert('key', {
   *   environment: 'development',
   *   source: { name: 'Universal HTTP Source' },
   * });
   * ```
   */
  upsert(
    key: string,
    params: DataSourceUpsertParams,
    options?: RequestOptions,
  ): APIPromise<DataSourceUpsertResponse> {
    const { environment, annotate, ...body } = params;
    return this._client.put(path`/v1/sources/${key}`, { query: { environment, annotate }, body, ...options });
  }
}

export type SourceLogsEntriesCursor = EntriesCursor<SourceLog>;

/**
 * A source that receives external events and maps them to Knock actions.
 */
export interface Source {
  /**
   * The timestamp of when the source was created.
   */
  created_at: string;

  /**
   * Per-environment settings keyed by environment slug.
   */
  environment_settings: { [key: string]: SourceEnvironmentSettings };

  /**
   * The unique key for the source within the project.
   */
  key: string;

  /**
   * The human-readable name of the source.
   */
  name: string;

  /**
   * The timestamp of when the source was last updated.
   */
  updated_at: string;

  /**
   * An optional URL for a custom image representing the source.
   */
  custom_image_url?: string | null;

  /**
   * An optional description of the source.
   */
  description?: string | null;
}

/**
 * Environment-specific settings for a source.
 */
export interface SourceEnvironmentSettings {
  /**
   * Event action mappings configured for this source in the environment.
   */
  mappings: Array<SourceEventActionMapping>;

  /**
   * Source settings for this environment, including endpoint, verification behavior,
   * and preprocess script.
   */
  settings: SourceEnvironmentSettings.Settings;

  /**
   * The timestamp of when these environment settings were last updated.
   */
  updated_at: string;
}

export namespace SourceEnvironmentSettings {
  /**
   * Source settings for this environment, including endpoint, verification behavior,
   * and preprocess script.
   */
  export interface Settings {
    /**
     * The public endpoint that receives source events for this environment.
     */
    endpoint?: string;

    enforce_idempotency?: boolean | null;

    enforce_verification?: boolean;

    event_type_path?: string | null;

    handle_identifies?: boolean | null;

    idempotency_key_path?: string | null;

    /**
     * A script that runs before source events are mapped.
     */
    preprocess_script?: DataSourcesAPI.SourcePreprocessScript | null;

    timestamp_path?: string | null;

    [k: string]: unknown;
  }
}

/**
 * A known unique event received by a source.
 */
export interface SourceEvent {
  /**
   * The decoded event name.
   */
  event: string;

  /**
   * The timestamp of when this event was last received.
   */
  last_received_at: string | null;
}

/**
 * An action mapping attached to a source event.
 */
export interface SourceEventActionMapping {
  /**
   * The action that is performed when this mapping matches a source event.
   */
  action_type:
    | 'workflows_trigger'
    | 'users_identify'
    | 'users_delete'
    | 'objects_set'
    | 'objects_delete'
    | 'objects_subscribe'
    | 'objects_unsubscribe'
    | 'tenants_set'
    | 'tenants_delete'
    | 'audiences_add_member'
    | 'audiences_remove_member';

  /**
   * The timestamp of when the mapping was created.
   */
  created_at: string;

  /**
   * The decoded event type that triggers the action.
   */
  event_type: string;

  /**
   * Whether the mapping has been deleted. When true, this indicates the trigger is
   * present in the workflow's published version and may be active until the workflow
   * is committed and published.
   */
  is_deleted: boolean;

  /**
   * The timestamp of when the mapping was last updated.
   */
  updated_at: string;

  /**
   * The action-specific parameters for the mapping.
   */
  action_parameters?: { [key: string]: unknown } | null;

  /**
   * The timestamp of when the mapping was deactivated.
   */
  inactive_at?: string | null;
}

/**
 * A list of known unique source events.
 */
export interface SourceEventsResponse {
  /**
   * The known unique events for the requested source and environment.
   */
  entries: Array<SourceEvent>;
}

/**
 * A log entry for an event received by a source.
 */
export interface SourceLog {
  /**
   * The source log ID.
   */
  id: string;

  /**
   * The decoded source event name.
   */
  event: string;

  /**
   * The actions executed after receiving the source event. Only present when
   * `includes` contains `actions`.
   */
  actions?: Array<SourceLogAction>;

  /**
   * The data payload parsed by the source.
   */
  data?: { [key: string]: unknown } | null;

  /**
   * The timestamp of when the source log was created.
   */
  inserted_at?: string | null;

  /**
   * The output returned by the preprocess script.
   */
  preprocess_output?: { [key: string]: unknown } | null;

  /**
   * Indicates the origin of the log; if the log is a product of a test event. This
   * is typically null for regular source events received from the data source.
   */
  source?: string | null;

  /**
   * The verification status for the received event.
   */
  verification_status?: string | null;
}

/**
 * An action executed after receiving a source event.
 */
export interface SourceLogAction {
  /**
   * The action log ID.
   */
  id: string;

  /**
   * The configured mapping parameters used to derive the action payload.
   */
  action_parameters?: { [key: string]: unknown } | null;

  /**
   * The parsed values generated from the mapping parameters for this action.
   */
  action_payload?: { [key: string]: unknown } | null;

  /**
   * The result returned by the action.
   */
  action_result?: { [key: string]: unknown } | null;

  /**
   * The status of the action.
   */
  action_status?: string | null;

  /**
   * The type of action that was executed.
   */
  action_type?: string;

  /**
   * The timestamp of when the action log was created.
   */
  inserted_at?: string | null;
}

/**
 * A paginated list of source logs. Include `actions` in the `includes` query
 * parameter to return action details for each log.
 */
export interface SourceLogsResponse {
  /**
   * The source logs for the requested source and environment.
   */
  entries: Array<SourceLog>;

  /**
   * The information about a paginated result.
   */
  page_info: Shared.PageInfo;
}

/**
 * A script that runs before source events are mapped.
 */
export interface SourcePreprocessScript {
  /**
   * The programming language used by the preprocess script.
   */
  language: 'javascript';

  /**
   * The source code for the preprocess script.
   */
  source: string;
}

/**
 * A source provider available for creating sources.
 */
export interface SourceProviderResponse {
  /**
   * Default source settings for this provider.
   */
  default_settings: SourceProviderResponse.DefaultSettings;

  /**
   * Provider key.
   */
  key: string;

  /**
   * Provider display metadata.
   */
  provider: SourceProviderResponse.Provider;

  /**
   * Provider version.
   */
  version: string;

  /**
   * Default event action mappings for the provider. Only present when `includes`
   * contains `default_action_mappings`.
   */
  default_action_mappings?: Array<SourceProviderResponse.DefaultActionMapping>;

  /**
   * Example payloads keyed by event type.
   */
  example_payloads?: { [key: string]: Array<SourceProviderResponse.ExamplePayload> } | null;

  /**
   * JSON Schema fields needed to configure the source. Only present when `includes`
   * contains `static_fields`.
   */
  static_fields?: { [key: string]: unknown };
}

export namespace SourceProviderResponse {
  /**
   * Default source settings for this provider.
   */
  export interface DefaultSettings {
    /**
     * Whether the source should enforce webhook verification.
     */
    enforce_verification: boolean;

    /**
     * Path to find the event type from the data.
     */
    event_type_path: string;

    /**
     * Path to find the idempotency key from the data.
     */
    idempotency_key_path?: string | null;

    /**
     * Verification script source code. Only present when `includes` contains
     * `preprocessing_script`.
     */
    preprocessing_script?: DefaultSettings.PreprocessingScript | null;

    /**
     * Path to find the timestamp from the data.
     */
    timestamp_path?: string | null;
  }

  export namespace DefaultSettings {
    /**
     * Verification script source code. Only present when `includes` contains
     * `preprocessing_script`.
     */
    export interface PreprocessingScript {
      /**
       * Script language.
       */
      language: 'javascript';

      /**
       * Verification script source code.
       */
      source: string;
    }
  }

  /**
   * Provider display metadata.
   */
  export interface Provider {
    /**
     * Provider categories for filtering and grouping.
     */
    categories: Array<
      'Billing' | 'Infrastructure' | 'Analytics' | 'CRM' | 'Ecommerce' | 'Communications' | 'Identity'
    >;

    /**
     * Provider display description.
     */
    description: string;

    /**
     * Provider display name.
     */
    name: string;

    /**
     * Provider webhook documentation URL.
     */
    webhook_docs_url: string;

    /**
     * Provider website URL.
     */
    website_url: string | null;

    /**
     * Provider branding assets. Only present when `includes` contains `branding`.
     */
    branding?: Provider.Branding | null;

    /**
     * Knock tutorial URL for setting up the provider.
     */
    knock_tutorial_url?: string | null;

    /**
     * Provider webhook configuration URL.
     */
    webhook_config_deep_link?: string | null;
  }

  export namespace Provider {
    /**
     * Provider branding assets. Only present when `includes` contains `branding`.
     */
    export interface Branding {
      /**
       * Provider icon image URL or path.
       */
      icon_image: string;

      wordmark_images: Branding.WordmarkImages;

      colors?: Branding.Colors | null;
    }

    export namespace Branding {
      export interface WordmarkImages {
        /**
         * Wordmark image URL or path for dark backgrounds.
         */
        dark: string;

        /**
         * Wordmark image URL or path for light backgrounds.
         */
        light: string;
      }

      export interface Colors {
        /**
         * Primary brand color.
         */
        primary: string;

        /**
         * Secondary brand color.
         */
        secondary: string;
      }
    }
  }

  export interface DefaultActionMapping {
    /**
     * Action-specific data paths and options.
     */
    action_parameters: { [key: string]: unknown };

    /**
     * The action performed when the mapping matches a source event.
     */
    action_type:
      | 'workflows_trigger'
      | 'users_identify'
      | 'users_delete'
      | 'objects_set'
      | 'objects_delete'
      | 'objects_subscribe'
      | 'objects_unsubscribe'
      | 'tenants_set'
      | 'tenants_delete'
      | 'audiences_add_member'
      | 'audiences_remove_member';

    /**
     * Event type to match.
     */
    event_type: string;
  }

  export interface ExamplePayload {
    /**
     * Example payload body.
     */
    body?: { [key: string]: unknown } | null;

    /**
     * Example payload headers.
     */
    headers?: { [key: string]: unknown } | null;
  }
}

/**
 * Source providers available for creating sources.
 */
export interface SourceProvidersResponse {
  /**
   * Source providers.
   */
  entries: Array<SourceProvidersResponse.Entry>;
}

export namespace SourceProvidersResponse {
  /**
   * A source provider summary.
   */
  export interface Entry {
    /**
     * Provider key.
     */
    key: string;

    /**
     * Provider display metadata.
     */
    provider: Entry.Provider;

    /**
     * Provider version.
     */
    version: string;
  }

  export namespace Entry {
    /**
     * Provider display metadata.
     */
    export interface Provider {
      /**
       * Provider display description.
       */
      description: string;

      /**
       * Provider display name.
       */
      name: string;
    }
  }
}

/**
 * Request body for rehearsing a source event.
 */
export interface SourceRehearseRequest {
  /**
   * An arbitrary payload to send through the source's parse, preprocess, and mapping
   * pipeline.
   */
  payload: { [key: string]: unknown };
}

/**
 * The result of a simulated source event rehearsal.
 */
export interface SourceRehearseResponse {
  /**
   * The total number of action logs produced by the rehearsal.
   */
  action_logs_count: number;

  /**
   * The number of failed action logs produced by the rehearsal.
   */
  failed_action_logs_count: number;

  /**
   * The ID of the source event log created by the rehearsal.
   */
  log_id: string | null;

  /**
   * Whether the rehearsal completed without action errors.
   */
  status: 'ok' | 'error';

  /**
   * The number of successful action logs produced by the rehearsal.
   */
  successful_action_logs_count: number;

  /**
   * Errors returned while rehearsing the source event.
   */
  errors?: Array<SourceRehearseResponse.Error> | null;
}

export namespace SourceRehearseResponse {
  export interface Error {
    field: string;

    message: string;
  }
}

/**
 * A source request for setting a source and its environment-specific
 * configuration.
 */
export interface SourceRequest {
  /**
   * The human-readable name of the source.
   */
  name: string;

  /**
   * An optional URL for a custom image representing the source.
   */
  custom_image_url?: string | null;

  /**
   * An optional description of the source.
   */
  description?: string | null;

  /**
   * Per-environment settings keyed by environment slug.
   */
  environment_settings?: { [key: string]: SourceRequest.EnvironmentSettings };

  /**
   * When creating a source, bootstraps configuration from a preconfigured provider
   * template. Ignored when updating an existing source.
   */
  preconfigured_provider?: string;
}

export namespace SourceRequest {
  /**
   * Environment-specific source settings to configure.
   */
  export interface EnvironmentSettings {
    /**
     * Event action mappings to configure for this source in the environment.
     */
    mappings?: Array<EnvironmentSettings.Mapping>;

    /**
     * Writable source settings for this environment.
     */
    settings?: EnvironmentSettings.Settings;
  }

  export namespace EnvironmentSettings {
    /**
     * An action mapping to configure for a source event.
     */
    export interface Mapping {
      /**
       * The action that is performed when this mapping matches a source event.
       */
      action_type:
        | 'workflows_trigger'
        | 'users_identify'
        | 'users_delete'
        | 'objects_set'
        | 'objects_delete'
        | 'objects_subscribe'
        | 'objects_unsubscribe'
        | 'tenants_set'
        | 'tenants_delete'
        | 'audiences_add_member'
        | 'audiences_remove_member';

      /**
       * The decoded event type that triggers the action.
       */
      event_type: string;

      /**
       * The action-specific parameters for the mapping.
       */
      action_parameters?: { [key: string]: unknown } | null;

      /**
       * The timestamp to deactivate the mapping.
       */
      inactive_at?: string | null;

      /**
       * Whether to delete the mapping. Workflow trigger mappings must be marked deleted
       * before they can be removed.
       */
      is_deleted?: boolean;
    }

    /**
     * Writable source settings for this environment.
     */
    export interface Settings {
      enforce_verification?: boolean;

      event_type_path?: string | null;

      idempotency_key_path?: string | null;

      /**
       * A script that runs before source events are mapped.
       */
      preprocess_script?: DataSourcesAPI.SourcePreprocessScript | null;

      timestamp_path?: string | null;

      [k: string]: unknown;
    }
  }
}

/**
 * Status information for a source in an environment.
 */
export interface SourceStatusResponse {
  /**
   * The number of source events received in the last 30 days.
   */
  events_count: number;

  /**
   * The timestamp of the most recently received source event.
   */
  last_event_received: string | null;

  /**
   * The total number of event action mappings for the source environment.
   */
  mappings_count: number;

  /**
   * Workflow trigger event action mappings that need a workflow commit before their
   * changes are applied.
   */
  mappings_requiring_commit: Array<SourceStatusResponse.MappingsRequiringCommit>;
}

export namespace SourceStatusResponse {
  export interface MappingsRequiringCommit {
    /**
     * The action that is performed when this mapping matches a source event.
     */
    action_type: 'workflows_trigger';

    /**
     * The decoded event type that triggers the action.
     */
    event_type: string;

    /**
     * Whether the mapping is pending deletion.
     */
    is_deleted: boolean;

    /**
     * The key of the workflow resource referenced by the mapping.
     */
    resource_key: string;

    /**
     * Whether the mapping is pending deletion or update.
     */
    status: 'deleted' | 'updated';

    /**
     * The timestamp of when the mapping was deactivated.
     */
    inactive_at?: string | null;
  }
}

/**
 * Sources connected to the project.
 */
export interface SourcesResponse {
  /**
   * Sources.
   */
  entries: Array<SourcesResponse.Entry>;
}

export namespace SourcesResponse {
  /**
   * A source summary.
   */
  export interface Entry {
    /**
     * Source key.
     */
    key: string;

    /**
     * Source display name.
     */
    name: string;

    /**
     * Custom image URL for the source.
     */
    custom_image_url?: string | null;

    /**
     * Source description.
     */
    description?: string | null;
  }
}

/**
 * Wraps the Source response under the `source` key.
 */
export interface DataSourceUpsertResponse {
  /**
   * A source that receives external events and maps them to Knock actions.
   */
  source: Source;
}

export interface DataSourceRetrieveParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;
}

export interface DataSourceListEventsParams {
  /**
   * The environment slug.
   */
  environment?: string;
}

export interface DataSourceListLogsParams extends EntriesCursorParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * The log ID to filter by.
   */
  id?: string;

  /**
   * Returns event logs that were produced on this date.
   */
  date?: string;

  /**
   * Only return source logs at or before this timestamp.
   */
  ending_at?: string;

  /**
   * The event name to filter by.
   */
  event?: string;

  /**
   * Associated resources to include in the response. Accepts `actions` to include
   * the actions executed after receiving each source event.
   */
  includes?: Array<'actions'>;

  /**
   * Only return source logs at or after this timestamp.
   */
  starting_at?: string;
}

export interface DataSourceListSourcesParams {
  /**
   * The environment slug.
   */
  environment?: string;
}

export interface DataSourceRehearseParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: An arbitrary payload to send through the source's parse, preprocess,
   * and mapping pipeline.
   */
  payload: { [key: string]: unknown };
}

export interface DataSourceRetrieveProviderParams {
  /**
   * Associated resources to include in the response. Accepts `branding`,
   * `default_action_mappings`, `example_payloads`, `preprocessing_script`,
   * `static_fields`.
   */
  includes?: Array<
    'branding' | 'default_action_mappings' | 'example_payloads' | 'preprocessing_script' | 'static_fields'
  >;
}

export interface DataSourceRetrieveStatusParams {
  /**
   * The environment slug.
   */
  environment?: string;
}

export interface DataSourceUpsertParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A source request for setting a source and its environment-specific
   * configuration.
   */
  source: SourceRequest;

  /**
   * Query param: Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;
}

export declare namespace DataSources {
  export {
    type Source as Source,
    type SourceEnvironmentSettings as SourceEnvironmentSettings,
    type SourceEvent as SourceEvent,
    type SourceEventActionMapping as SourceEventActionMapping,
    type SourceEventsResponse as SourceEventsResponse,
    type SourceLog as SourceLog,
    type SourceLogAction as SourceLogAction,
    type SourceLogsResponse as SourceLogsResponse,
    type SourcePreprocessScript as SourcePreprocessScript,
    type SourceProviderResponse as SourceProviderResponse,
    type SourceProvidersResponse as SourceProvidersResponse,
    type SourceRehearseRequest as SourceRehearseRequest,
    type SourceRehearseResponse as SourceRehearseResponse,
    type SourceRequest as SourceRequest,
    type SourceStatusResponse as SourceStatusResponse,
    type SourcesResponse as SourcesResponse,
    type DataSourceUpsertResponse as DataSourceUpsertResponse,
    type SourceLogsEntriesCursor as SourceLogsEntriesCursor,
    type DataSourceRetrieveParams as DataSourceRetrieveParams,
    type DataSourceListEventsParams as DataSourceListEventsParams,
    type DataSourceListLogsParams as DataSourceListLogsParams,
    type DataSourceListSourcesParams as DataSourceListSourcesParams,
    type DataSourceRehearseParams as DataSourceRehearseParams,
    type DataSourceRetrieveProviderParams as DataSourceRetrieveProviderParams,
    type DataSourceRetrieveStatusParams as DataSourceRetrieveStatusParams,
    type DataSourceUpsertParams as DataSourceUpsertParams,
  };
}
