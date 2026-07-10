// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Partials allow you to reuse content across templates.
 */
export class Partials extends APIResource {
  /**
   * Get a partial by its key.
   *
   * @example
   * ```ts
   * const partialResource = await client.partials.retrieve(
   *   'partial_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  retrieve(
    partialKey: string,
    query: PartialRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PartialResource> {
    return this._client.get(path`/v1/partials/${partialKey}`, { query, ...options });
  }

  /**
   * List all partials for a given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const partialResource of client.partials.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PartialListParams,
    options?: RequestOptions,
  ): PagePromise<PartialResourcesEntriesCursor, PartialResource> {
    return this._client.getAPIList('/v1/partials', EntriesCursor<PartialResource>, { query, ...options });
  }

  /**
   * Updates a partial of a given key, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates on partials in the “development” environment.
   *
   * @example
   * ```ts
   * const response = await client.partials.upsert(
   *   'partial_key',
   *   {
   *     environment: 'development',
   *     partial: {
   *       content: '<p>Hello, world!</p>',
   *       name: 'My Partial',
   *       type: 'html',
   *     },
   *   },
   * );
   * ```
   */
  upsert(
    partialKey: string,
    params: PartialUpsertParams,
    options?: RequestOptions,
  ): APIPromise<PartialUpsertResponse> {
    const { environment, allow_empty, annotate, branch, commit, commit_message, force, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}`, {
      query: { environment, allow_empty, annotate, branch, commit, commit_message, force },
      body,
      ...options,
    });
  }

  /**
   * Validates a partial payload without persisting it.
   *
   * Note: this endpoint only operates on partials in the “development” environment.
   *
   * @example
   * ```ts
   * const response = await client.partials.validate(
   *   'partial_key',
   *   {
   *     environment: 'development',
   *     partial: {
   *       content: '<p>Hello, world!</p>',
   *       name: 'My Partial',
   *       type: 'html',
   *     },
   *   },
   * );
   * ```
   */
  validate(
    partialKey: string,
    params: PartialValidateParams,
    options?: RequestOptions,
  ): APIPromise<PartialValidateResponse> {
    const { environment, branch, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}/validate`, {
      query: { environment, branch },
      body,
      ...options,
    });
  }
}

export type PartialResourcesEntriesCursor = EntriesCursor<PartialResource>;

/**
 * A partial is a reusable piece of content that can be used in a template.
 */
export interface PartialResource {
  /**
   * The partial content.
   */
  content: string;

  /**
   * The timestamp of when the partial was created.
   */
  inserted_at: string;

  /**
   * The unique key string for the partial object. Must be at minimum 3 characters
   * and at maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
   */
  key: string;

  /**
   * A name for the partial. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * The partial type. One of 'html', 'json', 'markdown', 'text'.
   */
  type: 'html' | 'text' | 'json' | 'markdown';

  /**
   * The timestamp of when the partial was last updated.
   */
  updated_at: string;

  /**
   * Whether the partial and its content are in a valid state.
   */
  valid: boolean;

  /**
   * An arbitrary string attached to a partial object. Useful for adding notes about
   * the partial for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string;

  /**
   * The slug of the environment in which the partial exists.
   */
  environment?: string;

  /**
   * The name of the icon to be used in the visual editor.
   */
  icon_name?: string;

  /**
   * The field types available for the partial.
   */
  input_schema?: Array<
    | PartialResource.MessageTypeListField
    | Shared.MessageTypeSelectField
    | Shared.MessageTypeBooleanField
    | Shared.MessageTypeJsonField
    | PartialResource.MessageTypeNumberField
    | Shared.MessageTypeTextField
    | Shared.MessageTypeImageField
    | PartialResource.MessageTypeColorField
    | Shared.MessageTypeURLField
    | Shared.MessageTypeMarkdownField
    | Shared.MessageTypeMultiSelectField
    | Shared.MessageTypeButtonField
    | Shared.MessageTypeTextareaField
  >;

  /**
   * Indicates whether the partial can be used in the visual editor. Only applies to
   * HTML partials.
   */
  visual_block_enabled?: boolean;
}

export namespace PartialResource {
  /**
   * A list field used in a message type.
   */
  export interface MessageTypeListField {
    /**
     * The unique key of the field.
     */
    key: string;

    /**
     * The label of the field.
     */
    label: string | null;

    /**
     * The type of the field.
     */
    type: 'list';

    /**
     * Settings for the list field.
     */
    settings?: MessageTypeListField.Settings;
  }

  export namespace MessageTypeListField {
    /**
     * Settings for the list field.
     */
    export interface Settings {
      /**
       * The default value of the list field.
       */
      default?: Array<unknown> | null;

      description?: string | null;

      /**
       * A JSON schema used to validate the structure of each item in the list. Must be a
       * valid JSON schema.
       */
      item_schema?: unknown | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }

  /**
   * A numeric field used in a message type or partial input schema, with optional
   * min/max bounds and a unit label for display.
   */
  export interface MessageTypeNumberField {
    /**
     * The unique key of the field.
     */
    key: string;

    /**
     * The label of the field.
     */
    label: string | null;

    /**
     * The type of the field.
     */
    type: 'number';

    /**
     * Settings for the number field.
     */
    settings?: MessageTypeNumberField.Settings;
  }

  export namespace MessageTypeNumberField {
    /**
     * Settings for the number field.
     */
    export interface Settings {
      /**
       * The default numeric value.
       */
      default?: number | null;

      description?: string | null;

      /**
       * Optional inclusive maximum allowed value.
       */
      max?: number | null;

      /**
       * Optional inclusive minimum allowed value.
       */
      min?: number | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;

      /**
       * Optional short label shown after the input (e.g. px, kg).
       */
      unit_label?: string | null;
    }
  }

  /**
   * A hex color field (#RGB or #RRGGBB) used in a message type or partial input
   * schema.
   */
  export interface MessageTypeColorField {
    /**
     * The unique key of the field.
     */
    key: string;

    /**
     * The label of the field.
     */
    label: string | null;

    /**
     * The type of the field.
     */
    type: 'color';

    /**
     * Settings for the color field.
     */
    settings?: MessageTypeColorField.Settings;
  }

  export namespace MessageTypeColorField {
    /**
     * Settings for the color field.
     */
    export interface Settings {
      /**
       * The default hex color value.
       */
      default?: string | null;

      description?: string | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialUpsertResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: PartialResource;
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialValidateResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: PartialResource;
}

export interface PartialRetrieveParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface PartialListParams extends EntriesCursorParams {
  /**
   * The environment slug.
   */
  environment: string;

  /**
   * Whether to annotate the resource. Only used in the Knock CLI.
   */
  annotate?: boolean;

  /**
   * The slug of a branch to use. This option can only be used when `environment` is
   * `"development"`.
   */
  branch?: string;

  /**
   * Whether to hide uncommitted changes. When true, only committed changes will be
   * returned. When false, both committed and uncommitted changes will be returned.
   */
  hide_uncommitted_changes?: boolean;
}

export interface PartialUpsertParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialUpsertParams.Partial;

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
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
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
   * Query param: When set to true, forces the upsert to override existing content
   * regardless of environment restrictions. This bypasses the development-only
   * environment check and origin environment checks.
   */
  force?: boolean;
}

export namespace PartialUpsertParams {
  /**
   * A partial object with attributes to update or create a partial.
   */
  export interface Partial {
    /**
     * The partial content.
     */
    content: string;

    /**
     * A name for the partial. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * The partial type. One of 'html', 'json', 'markdown', 'text'.
     */
    type: 'html' | 'text' | 'json' | 'markdown';

    /**
     * An arbitrary string attached to a partial object. Useful for adding notes about
     * the partial for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string;

    /**
     * The name of the icon to be used in the visual editor.
     */
    icon_name?: string;

    /**
     * The field types available for the partial.
     */
    input_schema?: Array<
      | Partial.MessageTypeListField
      | Shared.MessageTypeSelectField
      | Shared.MessageTypeBooleanField
      | Shared.MessageTypeJsonField
      | Partial.MessageTypeNumberField
      | Shared.MessageTypeTextField
      | Shared.MessageTypeImageField
      | Partial.MessageTypeColorField
      | Shared.MessageTypeURLField
      | Shared.MessageTypeMarkdownField
      | Shared.MessageTypeMultiSelectField
      | Shared.MessageTypeButtonField
      | Shared.MessageTypeTextareaField
    >;

    /**
     * Indicates whether the partial can be used in the visual editor. Only applies to
     * HTML partials.
     */
    visual_block_enabled?: boolean;
  }

  export namespace Partial {
    /**
     * A list field used in a message type.
     */
    export interface MessageTypeListField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * The type of the field.
       */
      type: 'list';

      /**
       * Settings for the list field.
       */
      settings?: MessageTypeListField.Settings;
    }

    export namespace MessageTypeListField {
      /**
       * Settings for the list field.
       */
      export interface Settings {
        /**
         * The default value of the list field.
         */
        default?: Array<unknown> | null;

        description?: string | null;

        /**
         * A JSON schema used to validate the structure of each item in the list. Must be a
         * valid JSON schema.
         */
        item_schema?: unknown | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A numeric field used in a message type or partial input schema, with optional
     * min/max bounds and a unit label for display.
     */
    export interface MessageTypeNumberField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * The type of the field.
       */
      type: 'number';

      /**
       * Settings for the number field.
       */
      settings?: MessageTypeNumberField.Settings;
    }

    export namespace MessageTypeNumberField {
      /**
       * Settings for the number field.
       */
      export interface Settings {
        /**
         * The default numeric value.
         */
        default?: number | null;

        description?: string | null;

        /**
         * Optional inclusive maximum allowed value.
         */
        max?: number | null;

        /**
         * Optional inclusive minimum allowed value.
         */
        min?: number | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;

        /**
         * Optional short label shown after the input (e.g. px, kg).
         */
        unit_label?: string | null;
      }
    }

    /**
     * A hex color field (#RGB or #RRGGBB) used in a message type or partial input
     * schema.
     */
    export interface MessageTypeColorField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * The type of the field.
       */
      type: 'color';

      /**
       * Settings for the color field.
       */
      settings?: MessageTypeColorField.Settings;
    }

    export namespace MessageTypeColorField {
      /**
       * Settings for the color field.
       */
      export interface Settings {
        /**
         * The default hex color value.
         */
        default?: string | null;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }
  }
}

export interface PartialValidateParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A partial object with attributes to update or create a partial.
   */
  partial: PartialValidateParams.Partial;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;
}

export namespace PartialValidateParams {
  /**
   * A partial object with attributes to update or create a partial.
   */
  export interface Partial {
    /**
     * The partial content.
     */
    content: string;

    /**
     * A name for the partial. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * The partial type. One of 'html', 'json', 'markdown', 'text'.
     */
    type: 'html' | 'text' | 'json' | 'markdown';

    /**
     * An arbitrary string attached to a partial object. Useful for adding notes about
     * the partial for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string;

    /**
     * The name of the icon to be used in the visual editor.
     */
    icon_name?: string;

    /**
     * The field types available for the partial.
     */
    input_schema?: Array<
      | Partial.MessageTypeListField
      | Shared.MessageTypeSelectField
      | Shared.MessageTypeBooleanField
      | Shared.MessageTypeJsonField
      | Partial.MessageTypeNumberField
      | Shared.MessageTypeTextField
      | Shared.MessageTypeImageField
      | Partial.MessageTypeColorField
      | Shared.MessageTypeURLField
      | Shared.MessageTypeMarkdownField
      | Shared.MessageTypeMultiSelectField
      | Shared.MessageTypeButtonField
      | Shared.MessageTypeTextareaField
    >;

    /**
     * Indicates whether the partial can be used in the visual editor. Only applies to
     * HTML partials.
     */
    visual_block_enabled?: boolean;
  }

  export namespace Partial {
    /**
     * A list field used in a message type.
     */
    export interface MessageTypeListField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * The type of the field.
       */
      type: 'list';

      /**
       * Settings for the list field.
       */
      settings?: MessageTypeListField.Settings;
    }

    export namespace MessageTypeListField {
      /**
       * Settings for the list field.
       */
      export interface Settings {
        /**
         * The default value of the list field.
         */
        default?: Array<unknown> | null;

        description?: string | null;

        /**
         * A JSON schema used to validate the structure of each item in the list. Must be a
         * valid JSON schema.
         */
        item_schema?: unknown | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A numeric field used in a message type or partial input schema, with optional
     * min/max bounds and a unit label for display.
     */
    export interface MessageTypeNumberField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * The type of the field.
       */
      type: 'number';

      /**
       * Settings for the number field.
       */
      settings?: MessageTypeNumberField.Settings;
    }

    export namespace MessageTypeNumberField {
      /**
       * Settings for the number field.
       */
      export interface Settings {
        /**
         * The default numeric value.
         */
        default?: number | null;

        description?: string | null;

        /**
         * Optional inclusive maximum allowed value.
         */
        max?: number | null;

        /**
         * Optional inclusive minimum allowed value.
         */
        min?: number | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;

        /**
         * Optional short label shown after the input (e.g. px, kg).
         */
        unit_label?: string | null;
      }
    }

    /**
     * A hex color field (#RGB or #RRGGBB) used in a message type or partial input
     * schema.
     */
    export interface MessageTypeColorField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * The type of the field.
       */
      type: 'color';

      /**
       * Settings for the color field.
       */
      settings?: MessageTypeColorField.Settings;
    }

    export namespace MessageTypeColorField {
      /**
       * Settings for the color field.
       */
      export interface Settings {
        /**
         * The default hex color value.
         */
        default?: string | null;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }
  }
}

export declare namespace Partials {
  export {
    type PartialResource as PartialResource,
    type PartialUpsertResponse as PartialUpsertResponse,
    type PartialValidateResponse as PartialValidateResponse,
    type PartialResourcesEntriesCursor as PartialResourcesEntriesCursor,
    type PartialRetrieveParams as PartialRetrieveParams,
    type PartialListParams as PartialListParams,
    type PartialUpsertParams as PartialUpsertParams,
    type PartialValidateParams as PartialValidateParams,
  };
}
