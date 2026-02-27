// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessageTypesAPI from './message-types';
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
   * const partial = await client.partials.retrieve(
   *   'partial_key',
   *   { environment: 'development' },
   * );
   * ```
   */
  retrieve(partialKey: string, query: PartialRetrieveParams, options?: RequestOptions): APIPromise<Partial> {
    return this._client.get(path`/v1/partials/${partialKey}`, { query, ...options });
  }

  /**
   * List all partials for a given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const partial of client.partials.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: PartialListParams, options?: RequestOptions): PagePromise<PartialsEntriesCursor, Partial> {
    return this._client.getAPIList('/v1/partials', EntriesCursor<Partial>, { query, ...options });
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
    const { environment, annotate, branch, commit, commit_message, ...body } = params;
    return this._client.put(path`/v1/partials/${partialKey}`, {
      query: { environment, annotate, branch, commit, commit_message },
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

export type PartialsEntriesCursor = EntriesCursor<Partial>;

/**
 * A partial is a reusable piece of content that can be used in a template.
 */
export interface Partial {
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
    | Partial.MessageTypeBooleanField
    | Partial.MessageTypeButtonField
    | Partial.MessageTypeImageField
    | Partial.MessageTypeJsonField
    | Partial.MessageTypeMarkdownField
    | Partial.MessageTypeMultiSelectField
    | Partial.MessageTypeSelectField
    | MessageTypesAPI.MessageTypeTextField
    | Partial.MessageTypeTextareaField
    | Partial.MessageTypeURLField
  >;

  /**
   * Indicates whether the partial can be used in the visual editor. Only applies to
   * HTML partials.
   */
  visual_block_enabled?: boolean;
}

export namespace Partial {
  /**
   * A boolean field used in a message type.
   */
  export interface MessageTypeBooleanField {
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
    type: 'boolean';

    /**
     * Settings for the boolean field.
     */
    settings?: MessageTypeBooleanField.Settings;
  }

  export namespace MessageTypeBooleanField {
    /**
     * Settings for the boolean field.
     */
    export interface Settings {
      /**
       * The default value of the boolean field.
       */
      default?: boolean;

      description?: string | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }

  /**
   * A button field used in a message type.
   */
  export interface MessageTypeButtonField {
    /**
     * A text field used in a message type.
     */
    action: MessageTypesAPI.MessageTypeTextField;

    /**
     * The unique key of the field.
     */
    key: string;

    /**
     * The label of the field.
     */
    label: string | null;

    /**
     * A text field used in a message type.
     */
    text: MessageTypesAPI.MessageTypeTextField;

    /**
     * The type of the field.
     */
    type: 'button';

    /**
     * Settings for the button field.
     */
    settings?: MessageTypeButtonField.Settings;
  }

  export namespace MessageTypeButtonField {
    /**
     * Settings for the button field.
     */
    export interface Settings {
      description?: string | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }

  /**
   * An image field used in a message type.
   */
  export interface MessageTypeImageField {
    /**
     * A text field used in a message type.
     */
    action: MessageTypesAPI.MessageTypeTextField;

    /**
     * A text field used in a message type.
     */
    alt: MessageTypesAPI.MessageTypeTextField;

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
    type: 'image';

    /**
     * A URL field used in a message type.
     */
    url: MessageTypeImageField.URL;

    /**
     * Settings for the image field.
     */
    settings?: MessageTypeImageField.Settings;
  }

  export namespace MessageTypeImageField {
    /**
     * A URL field used in a message type.
     */
    export interface URL {
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
      type: 'url';

      /**
       * Settings for the url field.
       */
      settings?: URL.Settings;
    }

    export namespace URL {
      /**
       * Settings for the url field.
       */
      export interface Settings {
        /**
         * The default value of the URL field.
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

    /**
     * Settings for the image field.
     */
    export interface Settings {
      description?: string | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }

  /**
   * A JSON field used in a message type.
   */
  export interface MessageTypeJsonField {
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
    type: 'json';

    /**
     * Settings for the json field.
     */
    settings?: MessageTypeJsonField.Settings;
  }

  export namespace MessageTypeJsonField {
    /**
     * Settings for the json field.
     */
    export interface Settings {
      /**
       * The default value of the JSON field.
       */
      default?: unknown | null;

      description?: string | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;

      /**
       * A JSON schema used to validate the structure of the JSON provided. Must be a
       * valid JSON schema.
       */
      schema?: unknown | null;
    }
  }

  /**
   * A markdown field used in a message type.
   */
  export interface MessageTypeMarkdownField {
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
    type: 'markdown';

    /**
     * Settings for the markdown field.
     */
    settings?: MessageTypeMarkdownField.Settings;
  }

  export namespace MessageTypeMarkdownField {
    /**
     * Settings for the markdown field.
     */
    export interface Settings {
      /**
       * The default value of the markdown field.
       */
      default?: string;

      description?: string | null;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }

  /**
   * A multi-select field used in a message type.
   */
  export interface MessageTypeMultiSelectField {
    /**
     * The unique key of the field.
     */
    key: string;

    /**
     * The label of the field.
     */
    label: string | null;

    /**
     * Settings for the multi_select field.
     */
    settings: MessageTypeMultiSelectField.Settings;

    /**
     * The type of the field.
     */
    type: 'multi_select';
  }

  export namespace MessageTypeMultiSelectField {
    /**
     * Settings for the multi_select field.
     */
    export interface Settings {
      /**
       * The default values for the multi-select field.
       */
      default?: Array<string> | null;

      description?: string | null;

      /**
       * The available options for the multi-select field.
       */
      options?: Array<Settings.Option>;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }

    export namespace Settings {
      export interface Option {
        /**
         * The value for the option.
         */
        value: string;

        /**
         * The display label for the option.
         */
        label?: string;
      }
    }
  }

  /**
   * A select field used in a message type.
   */
  export interface MessageTypeSelectField {
    /**
     * The unique key of the field.
     */
    key: string;

    /**
     * The label of the field.
     */
    label: string | null;

    /**
     * Settings for the select field.
     */
    settings: MessageTypeSelectField.Settings;

    /**
     * The type of the field.
     */
    type: 'select';
  }

  export namespace MessageTypeSelectField {
    /**
     * Settings for the select field.
     */
    export interface Settings {
      /**
       * The default value for the select field.
       */
      default?: string | null;

      description?: string | null;

      /**
       * The available options for the select field.
       */
      options?: Array<Settings.Option>;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }

    export namespace Settings {
      export interface Option {
        /**
         * The value for the option.
         */
        value: string;

        /**
         * The display label for the option.
         */
        label?: string;
      }
    }
  }

  /**
   * A textarea field used in a message type.
   */
  export interface MessageTypeTextareaField {
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
    type: 'textarea';

    /**
     * Settings for the textarea field.
     */
    settings?: MessageTypeTextareaField.Settings;
  }

  export namespace MessageTypeTextareaField {
    /**
     * Settings for the textarea field.
     */
    export interface Settings {
      /**
       * The default value of the textarea field.
       */
      default?: string | null;

      description?: string | null;

      max_length?: number;

      min_length?: number;

      placeholder?: string | null;

      /**
       * Whether the field is required.
       */
      required?: boolean;
    }
  }

  /**
   * A URL field used in a message type.
   */
  export interface MessageTypeURLField {
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
    type: 'url';

    /**
     * Settings for the url field.
     */
    settings?: MessageTypeURLField.Settings;
  }

  export namespace MessageTypeURLField {
    /**
     * Settings for the url field.
     */
    export interface Settings {
      /**
       * The default value of the URL field.
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
  partial: Partial;
}

/**
 * Wraps the Partial response under the `partial` key.
 */
export interface PartialValidateResponse {
  /**
   * A partial is a reusable piece of content that can be used in a template.
   */
  partial: Partial;
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
      | Partial.MessageTypeBooleanField
      | Partial.MessageTypeButtonField
      | Partial.MessageTypeImageField
      | Partial.MessageTypeJsonField
      | Partial.MessageTypeMarkdownField
      | Partial.MessageTypeMultiSelectField
      | Partial.MessageTypeSelectField
      | MessageTypesAPI.MessageTypeTextField
      | Partial.MessageTypeTextareaField
      | Partial.MessageTypeURLField
    >;

    /**
     * Indicates whether the partial can be used in the visual editor. Only applies to
     * HTML partials.
     */
    visual_block_enabled?: boolean;
  }

  export namespace Partial {
    /**
     * A boolean field used in a message type.
     */
    export interface MessageTypeBooleanField {
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
      type: 'boolean';

      /**
       * Settings for the boolean field.
       */
      settings?: MessageTypeBooleanField.Settings;
    }

    export namespace MessageTypeBooleanField {
      /**
       * Settings for the boolean field.
       */
      export interface Settings {
        /**
         * The default value of the boolean field.
         */
        default?: boolean;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A button field used in a message type.
     */
    export interface MessageTypeButtonField {
      /**
       * A text field used in a message type.
       */
      action: MessageTypesAPI.MessageTypeTextField;

      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * A text field used in a message type.
       */
      text: MessageTypesAPI.MessageTypeTextField;

      /**
       * The type of the field.
       */
      type: 'button';

      /**
       * Settings for the button field.
       */
      settings?: MessageTypeButtonField.Settings;
    }

    export namespace MessageTypeButtonField {
      /**
       * Settings for the button field.
       */
      export interface Settings {
        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * An image field used in a message type.
     */
    export interface MessageTypeImageField {
      /**
       * A text field used in a message type.
       */
      action: MessageTypesAPI.MessageTypeTextField;

      /**
       * A text field used in a message type.
       */
      alt: MessageTypesAPI.MessageTypeTextField;

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
      type: 'image';

      /**
       * A URL field used in a message type.
       */
      url: MessageTypeImageField.URL;

      /**
       * Settings for the image field.
       */
      settings?: MessageTypeImageField.Settings;
    }

    export namespace MessageTypeImageField {
      /**
       * A URL field used in a message type.
       */
      export interface URL {
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
        type: 'url';

        /**
         * Settings for the url field.
         */
        settings?: URL.Settings;
      }

      export namespace URL {
        /**
         * Settings for the url field.
         */
        export interface Settings {
          /**
           * The default value of the URL field.
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

      /**
       * Settings for the image field.
       */
      export interface Settings {
        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A JSON field used in a message type.
     */
    export interface MessageTypeJsonField {
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
      type: 'json';

      /**
       * Settings for the json field.
       */
      settings?: MessageTypeJsonField.Settings;
    }

    export namespace MessageTypeJsonField {
      /**
       * Settings for the json field.
       */
      export interface Settings {
        /**
         * The default value of the JSON field.
         */
        default?: unknown | null;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;

        /**
         * A JSON schema used to validate the structure of the JSON provided. Must be a
         * valid JSON schema.
         */
        schema?: unknown | null;
      }
    }

    /**
     * A markdown field used in a message type.
     */
    export interface MessageTypeMarkdownField {
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
      type: 'markdown';

      /**
       * Settings for the markdown field.
       */
      settings?: MessageTypeMarkdownField.Settings;
    }

    export namespace MessageTypeMarkdownField {
      /**
       * Settings for the markdown field.
       */
      export interface Settings {
        /**
         * The default value of the markdown field.
         */
        default?: string;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A multi-select field used in a message type.
     */
    export interface MessageTypeMultiSelectField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * Settings for the multi_select field.
       */
      settings: MessageTypeMultiSelectField.Settings;

      /**
       * The type of the field.
       */
      type: 'multi_select';
    }

    export namespace MessageTypeMultiSelectField {
      /**
       * Settings for the multi_select field.
       */
      export interface Settings {
        /**
         * The default values for the multi-select field.
         */
        default?: Array<string> | null;

        description?: string | null;

        /**
         * The available options for the multi-select field.
         */
        options?: Array<Settings.Option>;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }

      export namespace Settings {
        export interface Option {
          /**
           * The value for the option.
           */
          value: string;

          /**
           * The display label for the option.
           */
          label?: string;
        }
      }
    }

    /**
     * A select field used in a message type.
     */
    export interface MessageTypeSelectField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * Settings for the select field.
       */
      settings: MessageTypeSelectField.Settings;

      /**
       * The type of the field.
       */
      type: 'select';
    }

    export namespace MessageTypeSelectField {
      /**
       * Settings for the select field.
       */
      export interface Settings {
        /**
         * The default value for the select field.
         */
        default?: string | null;

        description?: string | null;

        /**
         * The available options for the select field.
         */
        options?: Array<Settings.Option>;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }

      export namespace Settings {
        export interface Option {
          /**
           * The value for the option.
           */
          value: string;

          /**
           * The display label for the option.
           */
          label?: string;
        }
      }
    }

    /**
     * A textarea field used in a message type.
     */
    export interface MessageTypeTextareaField {
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
      type: 'textarea';

      /**
       * Settings for the textarea field.
       */
      settings?: MessageTypeTextareaField.Settings;
    }

    export namespace MessageTypeTextareaField {
      /**
       * Settings for the textarea field.
       */
      export interface Settings {
        /**
         * The default value of the textarea field.
         */
        default?: string | null;

        description?: string | null;

        max_length?: number;

        min_length?: number;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A URL field used in a message type.
     */
    export interface MessageTypeURLField {
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
      type: 'url';

      /**
       * Settings for the url field.
       */
      settings?: MessageTypeURLField.Settings;
    }

    export namespace MessageTypeURLField {
      /**
       * Settings for the url field.
       */
      export interface Settings {
        /**
         * The default value of the URL field.
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
      | Partial.MessageTypeBooleanField
      | Partial.MessageTypeButtonField
      | Partial.MessageTypeImageField
      | Partial.MessageTypeJsonField
      | Partial.MessageTypeMarkdownField
      | Partial.MessageTypeMultiSelectField
      | Partial.MessageTypeSelectField
      | MessageTypesAPI.MessageTypeTextField
      | Partial.MessageTypeTextareaField
      | Partial.MessageTypeURLField
    >;

    /**
     * Indicates whether the partial can be used in the visual editor. Only applies to
     * HTML partials.
     */
    visual_block_enabled?: boolean;
  }

  export namespace Partial {
    /**
     * A boolean field used in a message type.
     */
    export interface MessageTypeBooleanField {
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
      type: 'boolean';

      /**
       * Settings for the boolean field.
       */
      settings?: MessageTypeBooleanField.Settings;
    }

    export namespace MessageTypeBooleanField {
      /**
       * Settings for the boolean field.
       */
      export interface Settings {
        /**
         * The default value of the boolean field.
         */
        default?: boolean;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A button field used in a message type.
     */
    export interface MessageTypeButtonField {
      /**
       * A text field used in a message type.
       */
      action: MessageTypesAPI.MessageTypeTextField;

      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * A text field used in a message type.
       */
      text: MessageTypesAPI.MessageTypeTextField;

      /**
       * The type of the field.
       */
      type: 'button';

      /**
       * Settings for the button field.
       */
      settings?: MessageTypeButtonField.Settings;
    }

    export namespace MessageTypeButtonField {
      /**
       * Settings for the button field.
       */
      export interface Settings {
        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * An image field used in a message type.
     */
    export interface MessageTypeImageField {
      /**
       * A text field used in a message type.
       */
      action: MessageTypesAPI.MessageTypeTextField;

      /**
       * A text field used in a message type.
       */
      alt: MessageTypesAPI.MessageTypeTextField;

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
      type: 'image';

      /**
       * A URL field used in a message type.
       */
      url: MessageTypeImageField.URL;

      /**
       * Settings for the image field.
       */
      settings?: MessageTypeImageField.Settings;
    }

    export namespace MessageTypeImageField {
      /**
       * A URL field used in a message type.
       */
      export interface URL {
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
        type: 'url';

        /**
         * Settings for the url field.
         */
        settings?: URL.Settings;
      }

      export namespace URL {
        /**
         * Settings for the url field.
         */
        export interface Settings {
          /**
           * The default value of the URL field.
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

      /**
       * Settings for the image field.
       */
      export interface Settings {
        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A JSON field used in a message type.
     */
    export interface MessageTypeJsonField {
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
      type: 'json';

      /**
       * Settings for the json field.
       */
      settings?: MessageTypeJsonField.Settings;
    }

    export namespace MessageTypeJsonField {
      /**
       * Settings for the json field.
       */
      export interface Settings {
        /**
         * The default value of the JSON field.
         */
        default?: unknown | null;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;

        /**
         * A JSON schema used to validate the structure of the JSON provided. Must be a
         * valid JSON schema.
         */
        schema?: unknown | null;
      }
    }

    /**
     * A markdown field used in a message type.
     */
    export interface MessageTypeMarkdownField {
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
      type: 'markdown';

      /**
       * Settings for the markdown field.
       */
      settings?: MessageTypeMarkdownField.Settings;
    }

    export namespace MessageTypeMarkdownField {
      /**
       * Settings for the markdown field.
       */
      export interface Settings {
        /**
         * The default value of the markdown field.
         */
        default?: string;

        description?: string | null;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A multi-select field used in a message type.
     */
    export interface MessageTypeMultiSelectField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * Settings for the multi_select field.
       */
      settings: MessageTypeMultiSelectField.Settings;

      /**
       * The type of the field.
       */
      type: 'multi_select';
    }

    export namespace MessageTypeMultiSelectField {
      /**
       * Settings for the multi_select field.
       */
      export interface Settings {
        /**
         * The default values for the multi-select field.
         */
        default?: Array<string> | null;

        description?: string | null;

        /**
         * The available options for the multi-select field.
         */
        options?: Array<Settings.Option>;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }

      export namespace Settings {
        export interface Option {
          /**
           * The value for the option.
           */
          value: string;

          /**
           * The display label for the option.
           */
          label?: string;
        }
      }
    }

    /**
     * A select field used in a message type.
     */
    export interface MessageTypeSelectField {
      /**
       * The unique key of the field.
       */
      key: string;

      /**
       * The label of the field.
       */
      label: string | null;

      /**
       * Settings for the select field.
       */
      settings: MessageTypeSelectField.Settings;

      /**
       * The type of the field.
       */
      type: 'select';
    }

    export namespace MessageTypeSelectField {
      /**
       * Settings for the select field.
       */
      export interface Settings {
        /**
         * The default value for the select field.
         */
        default?: string | null;

        description?: string | null;

        /**
         * The available options for the select field.
         */
        options?: Array<Settings.Option>;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }

      export namespace Settings {
        export interface Option {
          /**
           * The value for the option.
           */
          value: string;

          /**
           * The display label for the option.
           */
          label?: string;
        }
      }
    }

    /**
     * A textarea field used in a message type.
     */
    export interface MessageTypeTextareaField {
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
      type: 'textarea';

      /**
       * Settings for the textarea field.
       */
      settings?: MessageTypeTextareaField.Settings;
    }

    export namespace MessageTypeTextareaField {
      /**
       * Settings for the textarea field.
       */
      export interface Settings {
        /**
         * The default value of the textarea field.
         */
        default?: string | null;

        description?: string | null;

        max_length?: number;

        min_length?: number;

        placeholder?: string | null;

        /**
         * Whether the field is required.
         */
        required?: boolean;
      }
    }

    /**
     * A URL field used in a message type.
     */
    export interface MessageTypeURLField {
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
      type: 'url';

      /**
       * Settings for the url field.
       */
      settings?: MessageTypeURLField.Settings;
    }

    export namespace MessageTypeURLField {
      /**
       * Settings for the url field.
       */
      export interface Settings {
        /**
         * The default value of the URL field.
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
    type Partial as Partial,
    type PartialUpsertResponse as PartialUpsertResponse,
    type PartialValidateResponse as PartialValidateResponse,
    type PartialsEntriesCursor as PartialsEntriesCursor,
    type PartialRetrieveParams as PartialRetrieveParams,
    type PartialListParams as PartialListParams,
    type PartialUpsertParams as PartialUpsertParams,
    type PartialValidateParams as PartialValidateParams,
  };
}
