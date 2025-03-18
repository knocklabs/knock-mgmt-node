// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessageTypes extends APIResource {
  /**
   * Retrieve a message type by its key, in a given environment.
   */
  retrieve(
    messageTypeKey: string,
    query: MessageTypeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageTypeRetrieveResponse> {
    return this._client.get(path`/v1/message_types/${messageTypeKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of message types available in a given environment.
   */
  list(
    query: MessageTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageTypeListResponse> {
    return this._client.get('/v1/message_types', { query, ...options });
  }

  /**
   * Updates a message type, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates in the `development` environment.
   */
  upsert(
    messageTypeKey: string,
    params: MessageTypeUpsertParams,
    options?: RequestOptions,
  ): APIPromise<MessageTypeUpsertResponse> {
    const { annotate, commit, commit_message, environment, hide_uncommitted_changes, ...body } = params;
    return this._client.put(path`/v1/message_types/${messageTypeKey}`, {
      query: { annotate, commit, commit_message, environment, hide_uncommitted_changes },
      body,
      ...options,
    });
  }

  /**
   * Validates a message type payload without persisting it.
   *
   * Note: this endpoint only operates on message types in the `development`
   * environment.
   */
  validate(
    messageTypeKey: string,
    params: MessageTypeValidateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTypeValidateResponse> {
    const { annotate, hide_uncommitted_changes, ...body } = params;
    return this._client.put(path`/v1/message_types/${messageTypeKey}/validate`, {
      query: { annotate, hide_uncommitted_changes },
      body,
      ...options,
    });
  }
}

/**
 * A message type object
 */
export interface MessageTypeRetrieveResponse {
  /**
   * When the message type was created
   */
  created_at: string;

  /**
   * The environment of the message type
   */
  environment: string;

  /**
   * The unique key string for the message type object. Must be at minimum 3
   * characters and at maximum 255 characters in length. Must be in the format of
   * ^[a-z0-9_-]+$.
   */
  key: string;

  /**
   * A name for the message type. Must be at maximum 255 characters in length.
   */
  name: string;

  /**
   * The owner of the message type
   */
  owner: 'system' | 'user';

  /**
   * An HTML/liquid template for the message type preview
   */
  preview: string;

  /**
   * The semantic version of the message type
   */
  semver: string;

  /**
   * The SHA hash of the message type
   */
  sha: string;

  /**
   * When the message type was last updated
   */
  updated_at: string;

  /**
   * Whether the message type is valid
   */
  valid: boolean;

  /**
   * The variants of the message type
   */
  variants: Array<MessageTypeRetrieveResponse.Variant>;

  /**
   * When the message type was archived
   */
  archived_at?: string;

  /**
   * When the message type was deleted
   */
  deleted_at?: string | null;

  /**
   * An arbitrary string attached to a message type object. Useful for adding notes
   * about the message type for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string | null;

  /**
   * The icon name of the message type
   */
  icon_name?: string;
}

export namespace MessageTypeRetrieveResponse {
  /**
   * A variant of a message type
   */
  export interface Variant {
    /**
     * The field types available for the variant
     */
    fields: Array<
      | Variant.BooleanField
      | Variant.ButtonField
      | Variant.MarkdownField
      | Variant.MultiSelectField
      | Variant.SelectField
      | Variant.TextField
      | Variant.TextareaField
    >;

    /**
     * The unique key string for the variant. Must be at minimum 3 characters and at
     * maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
     */
    key: string;

    /**
     * A name for the variant. Must be at maximum 255 characters in length.
     */
    name: string;
  }

  export namespace Variant {
    /**
     * A boolean field used in a message type
     */
    export interface BooleanField {
      /**
       * The unique key of the field
       */
      key: string;

      /**
       * The type of the field
       */
      type: 'boolean';

      /**
       * The value of the boolean field
       */
      value: boolean;

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * Settings for the boolean field
       */
      settings?: BooleanField.Settings;
    }

    export namespace BooleanField {
      /**
       * Settings for the boolean field
       */
      export interface Settings {
        /**
         * The default value of the boolean field
         */
        default?: boolean;

        description?: string;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }
    }

    /**
     * A button field used in a message type
     */
    export interface ButtonField {
      /**
       * A text field used in a message type
       */
      action: ButtonField.Action;

      /**
       * The unique key of the field
       */
      key: string;

      /**
       * A text field used in a message type
       */
      text: ButtonField.Text;

      /**
       * The type of the field
       */
      type: 'button';

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * Settings for the button field
       */
      settings?: ButtonField.Settings;
    }

    export namespace ButtonField {
      /**
       * A text field used in a message type
       */
      export interface Action {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: Action.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace Action {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A text field used in a message type
       */
      export interface Text {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: Text.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace Text {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * Settings for the button field
       */
      export interface Settings {
        description?: string;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }
    }

    /**
     * A markdown field used in a message type
     */
    export interface MarkdownField {
      /**
       * The unique key of the field
       */
      key: string;

      /**
       * The type of the field
       */
      type: 'markdown';

      /**
       * The value of the markdown field
       */
      value: string;

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * Settings for the markdown field
       */
      settings?: MarkdownField.Settings;
    }

    export namespace MarkdownField {
      /**
       * Settings for the markdown field
       */
      export interface Settings {
        /**
         * The default value of the markdown field
         */
        default?: string;

        description?: string;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }
    }

    /**
     * A multi-select field used in a message type
     */
    export interface MultiSelectField {
      /**
       * The unique key of the field
       */
      key: string;

      /**
       * Settings for the multi_select field
       */
      settings: MultiSelectField.Settings;

      /**
       * The type of the field
       */
      type: 'multi_select';

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * The selected values
       */
      value?: Array<string> | null;
    }

    export namespace MultiSelectField {
      /**
       * Settings for the multi_select field
       */
      export interface Settings {
        /**
         * The default values for the multi-select field
         */
        default?: Array<string> | null;

        description?: string;

        /**
         * The available options for the multi-select field
         */
        options?: Array<Settings.Option>;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }

      export namespace Settings {
        export interface Option {
          /**
           * The value for the option
           */
          value: string;

          /**
           * The display label for the option
           */
          label?: string;
        }
      }
    }

    /**
     * A select field used in a message type
     */
    export interface SelectField {
      /**
       * The unique key of the field
       */
      key: string;

      /**
       * Settings for the select field
       */
      settings: SelectField.Settings;

      /**
       * The type of the field
       */
      type: 'select';

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * The selected value
       */
      value?: string | null;
    }

    export namespace SelectField {
      /**
       * Settings for the select field
       */
      export interface Settings {
        /**
         * The default value for the select field
         */
        default?: string | null;

        description?: string;

        /**
         * The available options for the select field
         */
        options?: Array<Settings.Option>;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }

      export namespace Settings {
        export interface Option {
          /**
           * The value for the option
           */
          value: string;

          /**
           * The display label for the option
           */
          label?: string;
        }
      }
    }

    /**
     * A text field used in a message type
     */
    export interface TextField {
      /**
       * The unique key of the field
       */
      key: string;

      /**
       * The type of the field
       */
      type: 'text';

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * Settings for the text field
       */
      settings?: TextField.Settings;

      /**
       * The value of the text field
       */
      value?: string | null;
    }

    export namespace TextField {
      /**
       * Settings for the text field
       */
      export interface Settings {
        /**
         * The default value of the text field
         */
        default?: string | null;

        description?: string;

        max_length?: number;

        min_length?: number;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }
    }

    /**
     * A textarea field used in a message type
     */
    export interface TextareaField {
      /**
       * The unique key of the field
       */
      key: string;

      /**
       * The type of the field
       */
      type: 'textarea';

      /**
       * The label of the field
       */
      label?: string | null;

      /**
       * Settings for the textarea field
       */
      settings?: TextareaField.Settings;

      /**
       * The value of the textarea field
       */
      value?: string | null;
    }

    export namespace TextareaField {
      /**
       * Settings for the textarea field
       */
      export interface Settings {
        /**
         * The default value of the textarea field
         */
        default?: string | null;

        description?: string;

        max_length?: number;

        min_length?: number;

        /**
         * Whether the field is required
         */
        required?: boolean;
      }
    }
  }
}

/**
 * A paginated list of MessageType. Contains a list of entries and page
 * information.
 */
export interface MessageTypeListResponse {
  entries: Array<MessageTypeListResponse.Entry>;

  /**
   * The information about a paginated result
   */
  page_info: MessageTypeListResponse.PageInfo;
}

export namespace MessageTypeListResponse {
  /**
   * A message type object
   */
  export interface Entry {
    /**
     * When the message type was created
     */
    created_at: string;

    /**
     * The environment of the message type
     */
    environment: string;

    /**
     * The unique key string for the message type object. Must be at minimum 3
     * characters and at maximum 255 characters in length. Must be in the format of
     * ^[a-z0-9_-]+$.
     */
    key: string;

    /**
     * A name for the message type. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * The owner of the message type
     */
    owner: 'system' | 'user';

    /**
     * An HTML/liquid template for the message type preview
     */
    preview: string;

    /**
     * The semantic version of the message type
     */
    semver: string;

    /**
     * The SHA hash of the message type
     */
    sha: string;

    /**
     * When the message type was last updated
     */
    updated_at: string;

    /**
     * Whether the message type is valid
     */
    valid: boolean;

    /**
     * The variants of the message type
     */
    variants: Array<Entry.Variant>;

    /**
     * When the message type was archived
     */
    archived_at?: string;

    /**
     * When the message type was deleted
     */
    deleted_at?: string | null;

    /**
     * An arbitrary string attached to a message type object. Useful for adding notes
     * about the message type for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string | null;

    /**
     * The icon name of the message type
     */
    icon_name?: string;
  }

  export namespace Entry {
    /**
     * A variant of a message type
     */
    export interface Variant {
      /**
       * The field types available for the variant
       */
      fields: Array<
        | Variant.BooleanField
        | Variant.ButtonField
        | Variant.MarkdownField
        | Variant.MultiSelectField
        | Variant.SelectField
        | Variant.TextField
        | Variant.TextareaField
      >;

      /**
       * The unique key string for the variant. Must be at minimum 3 characters and at
       * maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
       */
      key: string;

      /**
       * A name for the variant. Must be at maximum 255 characters in length.
       */
      name: string;
    }

    export namespace Variant {
      /**
       * A boolean field used in a message type
       */
      export interface BooleanField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'boolean';

        /**
         * The value of the boolean field
         */
        value: boolean;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the boolean field
         */
        settings?: BooleanField.Settings;
      }

      export namespace BooleanField {
        /**
         * Settings for the boolean field
         */
        export interface Settings {
          /**
           * The default value of the boolean field
           */
          default?: boolean;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A button field used in a message type
       */
      export interface ButtonField {
        /**
         * A text field used in a message type
         */
        action: ButtonField.Action;

        /**
         * The unique key of the field
         */
        key: string;

        /**
         * A text field used in a message type
         */
        text: ButtonField.Text;

        /**
         * The type of the field
         */
        type: 'button';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the button field
         */
        settings?: ButtonField.Settings;
      }

      export namespace ButtonField {
        /**
         * A text field used in a message type
         */
        export interface Action {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Action.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Action {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * A text field used in a message type
         */
        export interface Text {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Text.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Text {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * Settings for the button field
         */
        export interface Settings {
          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A markdown field used in a message type
       */
      export interface MarkdownField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'markdown';

        /**
         * The value of the markdown field
         */
        value: string;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the markdown field
         */
        settings?: MarkdownField.Settings;
      }

      export namespace MarkdownField {
        /**
         * Settings for the markdown field
         */
        export interface Settings {
          /**
           * The default value of the markdown field
           */
          default?: string;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A multi-select field used in a message type
       */
      export interface MultiSelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the multi_select field
         */
        settings: MultiSelectField.Settings;

        /**
         * The type of the field
         */
        type: 'multi_select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected values
         */
        value?: Array<string> | null;
      }

      export namespace MultiSelectField {
        /**
         * Settings for the multi_select field
         */
        export interface Settings {
          /**
           * The default values for the multi-select field
           */
          default?: Array<string> | null;

          description?: string;

          /**
           * The available options for the multi-select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A select field used in a message type
       */
      export interface SelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the select field
         */
        settings: SelectField.Settings;

        /**
         * The type of the field
         */
        type: 'select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected value
         */
        value?: string | null;
      }

      export namespace SelectField {
        /**
         * Settings for the select field
         */
        export interface Settings {
          /**
           * The default value for the select field
           */
          default?: string | null;

          description?: string;

          /**
           * The available options for the select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A text field used in a message type
       */
      export interface TextField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: TextField.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace TextField {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A textarea field used in a message type
       */
      export interface TextareaField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'textarea';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the textarea field
         */
        settings?: TextareaField.Settings;

        /**
         * The value of the textarea field
         */
        value?: string | null;
      }

      export namespace TextareaField {
        /**
         * Settings for the textarea field
         */
        export interface Settings {
          /**
           * The default value of the textarea field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }
    }
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
 * Wraps the MessageType response under the message_type key.
 */
export interface MessageTypeUpsertResponse {
  /**
   * A message type object
   */
  message_type: MessageTypeUpsertResponse.MessageType;
}

export namespace MessageTypeUpsertResponse {
  /**
   * A message type object
   */
  export interface MessageType {
    /**
     * When the message type was created
     */
    created_at: string;

    /**
     * The environment of the message type
     */
    environment: string;

    /**
     * The unique key string for the message type object. Must be at minimum 3
     * characters and at maximum 255 characters in length. Must be in the format of
     * ^[a-z0-9_-]+$.
     */
    key: string;

    /**
     * A name for the message type. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * The owner of the message type
     */
    owner: 'system' | 'user';

    /**
     * An HTML/liquid template for the message type preview
     */
    preview: string;

    /**
     * The semantic version of the message type
     */
    semver: string;

    /**
     * The SHA hash of the message type
     */
    sha: string;

    /**
     * When the message type was last updated
     */
    updated_at: string;

    /**
     * Whether the message type is valid
     */
    valid: boolean;

    /**
     * The variants of the message type
     */
    variants: Array<MessageType.Variant>;

    /**
     * When the message type was archived
     */
    archived_at?: string;

    /**
     * When the message type was deleted
     */
    deleted_at?: string | null;

    /**
     * An arbitrary string attached to a message type object. Useful for adding notes
     * about the message type for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string | null;

    /**
     * The icon name of the message type
     */
    icon_name?: string;
  }

  export namespace MessageType {
    /**
     * A variant of a message type
     */
    export interface Variant {
      /**
       * The field types available for the variant
       */
      fields: Array<
        | Variant.BooleanField
        | Variant.ButtonField
        | Variant.MarkdownField
        | Variant.MultiSelectField
        | Variant.SelectField
        | Variant.TextField
        | Variant.TextareaField
      >;

      /**
       * The unique key string for the variant. Must be at minimum 3 characters and at
       * maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
       */
      key: string;

      /**
       * A name for the variant. Must be at maximum 255 characters in length.
       */
      name: string;
    }

    export namespace Variant {
      /**
       * A boolean field used in a message type
       */
      export interface BooleanField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'boolean';

        /**
         * The value of the boolean field
         */
        value: boolean;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the boolean field
         */
        settings?: BooleanField.Settings;
      }

      export namespace BooleanField {
        /**
         * Settings for the boolean field
         */
        export interface Settings {
          /**
           * The default value of the boolean field
           */
          default?: boolean;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A button field used in a message type
       */
      export interface ButtonField {
        /**
         * A text field used in a message type
         */
        action: ButtonField.Action;

        /**
         * The unique key of the field
         */
        key: string;

        /**
         * A text field used in a message type
         */
        text: ButtonField.Text;

        /**
         * The type of the field
         */
        type: 'button';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the button field
         */
        settings?: ButtonField.Settings;
      }

      export namespace ButtonField {
        /**
         * A text field used in a message type
         */
        export interface Action {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Action.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Action {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * A text field used in a message type
         */
        export interface Text {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Text.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Text {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * Settings for the button field
         */
        export interface Settings {
          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A markdown field used in a message type
       */
      export interface MarkdownField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'markdown';

        /**
         * The value of the markdown field
         */
        value: string;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the markdown field
         */
        settings?: MarkdownField.Settings;
      }

      export namespace MarkdownField {
        /**
         * Settings for the markdown field
         */
        export interface Settings {
          /**
           * The default value of the markdown field
           */
          default?: string;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A multi-select field used in a message type
       */
      export interface MultiSelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the multi_select field
         */
        settings: MultiSelectField.Settings;

        /**
         * The type of the field
         */
        type: 'multi_select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected values
         */
        value?: Array<string> | null;
      }

      export namespace MultiSelectField {
        /**
         * Settings for the multi_select field
         */
        export interface Settings {
          /**
           * The default values for the multi-select field
           */
          default?: Array<string> | null;

          description?: string;

          /**
           * The available options for the multi-select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A select field used in a message type
       */
      export interface SelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the select field
         */
        settings: SelectField.Settings;

        /**
         * The type of the field
         */
        type: 'select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected value
         */
        value?: string | null;
      }

      export namespace SelectField {
        /**
         * Settings for the select field
         */
        export interface Settings {
          /**
           * The default value for the select field
           */
          default?: string | null;

          description?: string;

          /**
           * The available options for the select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A text field used in a message type
       */
      export interface TextField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: TextField.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace TextField {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A textarea field used in a message type
       */
      export interface TextareaField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'textarea';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the textarea field
         */
        settings?: TextareaField.Settings;

        /**
         * The value of the textarea field
         */
        value?: string | null;
      }

      export namespace TextareaField {
        /**
         * Settings for the textarea field
         */
        export interface Settings {
          /**
           * The default value of the textarea field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }
    }
  }
}

/**
 * Wraps the MessageType response under the message_type key.
 */
export interface MessageTypeValidateResponse {
  /**
   * A message type object
   */
  message_type: MessageTypeValidateResponse.MessageType;
}

export namespace MessageTypeValidateResponse {
  /**
   * A message type object
   */
  export interface MessageType {
    /**
     * When the message type was created
     */
    created_at: string;

    /**
     * The environment of the message type
     */
    environment: string;

    /**
     * The unique key string for the message type object. Must be at minimum 3
     * characters and at maximum 255 characters in length. Must be in the format of
     * ^[a-z0-9_-]+$.
     */
    key: string;

    /**
     * A name for the message type. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * The owner of the message type
     */
    owner: 'system' | 'user';

    /**
     * An HTML/liquid template for the message type preview
     */
    preview: string;

    /**
     * The semantic version of the message type
     */
    semver: string;

    /**
     * The SHA hash of the message type
     */
    sha: string;

    /**
     * When the message type was last updated
     */
    updated_at: string;

    /**
     * Whether the message type is valid
     */
    valid: boolean;

    /**
     * The variants of the message type
     */
    variants: Array<MessageType.Variant>;

    /**
     * When the message type was archived
     */
    archived_at?: string;

    /**
     * When the message type was deleted
     */
    deleted_at?: string | null;

    /**
     * An arbitrary string attached to a message type object. Useful for adding notes
     * about the message type for internal purposes. Maximum of 280 characters allowed.
     */
    description?: string | null;

    /**
     * The icon name of the message type
     */
    icon_name?: string;
  }

  export namespace MessageType {
    /**
     * A variant of a message type
     */
    export interface Variant {
      /**
       * The field types available for the variant
       */
      fields: Array<
        | Variant.BooleanField
        | Variant.ButtonField
        | Variant.MarkdownField
        | Variant.MultiSelectField
        | Variant.SelectField
        | Variant.TextField
        | Variant.TextareaField
      >;

      /**
       * The unique key string for the variant. Must be at minimum 3 characters and at
       * maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
       */
      key: string;

      /**
       * A name for the variant. Must be at maximum 255 characters in length.
       */
      name: string;
    }

    export namespace Variant {
      /**
       * A boolean field used in a message type
       */
      export interface BooleanField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'boolean';

        /**
         * The value of the boolean field
         */
        value: boolean;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the boolean field
         */
        settings?: BooleanField.Settings;
      }

      export namespace BooleanField {
        /**
         * Settings for the boolean field
         */
        export interface Settings {
          /**
           * The default value of the boolean field
           */
          default?: boolean;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A button field used in a message type
       */
      export interface ButtonField {
        /**
         * A text field used in a message type
         */
        action: ButtonField.Action;

        /**
         * The unique key of the field
         */
        key: string;

        /**
         * A text field used in a message type
         */
        text: ButtonField.Text;

        /**
         * The type of the field
         */
        type: 'button';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the button field
         */
        settings?: ButtonField.Settings;
      }

      export namespace ButtonField {
        /**
         * A text field used in a message type
         */
        export interface Action {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Action.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Action {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * A text field used in a message type
         */
        export interface Text {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Text.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Text {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * Settings for the button field
         */
        export interface Settings {
          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A markdown field used in a message type
       */
      export interface MarkdownField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'markdown';

        /**
         * The value of the markdown field
         */
        value: string;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the markdown field
         */
        settings?: MarkdownField.Settings;
      }

      export namespace MarkdownField {
        /**
         * Settings for the markdown field
         */
        export interface Settings {
          /**
           * The default value of the markdown field
           */
          default?: string;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A multi-select field used in a message type
       */
      export interface MultiSelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the multi_select field
         */
        settings: MultiSelectField.Settings;

        /**
         * The type of the field
         */
        type: 'multi_select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected values
         */
        value?: Array<string> | null;
      }

      export namespace MultiSelectField {
        /**
         * Settings for the multi_select field
         */
        export interface Settings {
          /**
           * The default values for the multi-select field
           */
          default?: Array<string> | null;

          description?: string;

          /**
           * The available options for the multi-select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A select field used in a message type
       */
      export interface SelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the select field
         */
        settings: SelectField.Settings;

        /**
         * The type of the field
         */
        type: 'select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected value
         */
        value?: string | null;
      }

      export namespace SelectField {
        /**
         * Settings for the select field
         */
        export interface Settings {
          /**
           * The default value for the select field
           */
          default?: string | null;

          description?: string;

          /**
           * The available options for the select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A text field used in a message type
       */
      export interface TextField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: TextField.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace TextField {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A textarea field used in a message type
       */
      export interface TextareaField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'textarea';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the textarea field
         */
        settings?: TextareaField.Settings;

        /**
         * The value of the textarea field
         */
        value?: string | null;
      }

      export namespace TextareaField {
        /**
         * Settings for the textarea field
         */
        export interface Settings {
          /**
           * The default value of the textarea field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }
    }
  }
}

export interface MessageTypeRetrieveParams {
  /**
   * Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * The environment slug to retrieve the message type for
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export interface MessageTypeListParams {
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
   * The environment slug to list message types for
   */
  environment?: string;

  /**
   * Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;

  /**
   * The number of entries to fetch
   */
  limit?: number;
}

export interface MessageTypeUpsertParams {
  /**
   * Body param: A request to create a message type
   */
  message_type: MessageTypeUpsertParams.MessageType;

  /**
   * Query param: Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Query param: Whether to commit the resource at the same time as modifying it
   */
  commit?: boolean;

  /**
   * Query param: The message to commit the resource with
   */
  commit_message?: string;

  /**
   * Query param: The environment slug to upsert the message type for
   */
  environment?: string;

  /**
   * Query param: Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export namespace MessageTypeUpsertParams {
  /**
   * A request to create a message type
   */
  export interface MessageType {
    /**
     * An arbitrary string attached to a message type object. Useful for adding notes
     * about the message type for internal purposes. Maximum of 280 characters allowed.
     */
    description: string | null;

    /**
     * A name for the message type. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * An HTML/liquid template for the message type preview
     */
    preview: string;

    /**
     * The icon name of the message type
     */
    icon_name?: string;

    /**
     * The semantic version of the message type
     */
    semver?: string;

    /**
     * The SHA hash of the message type
     */
    sha?: string;

    /**
     * When the message type was last updated
     */
    updated_at?: string;

    /**
     * The variants of the message type
     */
    variants?: Array<MessageType.Variant>;
  }

  export namespace MessageType {
    /**
     * A variant of a message type
     */
    export interface Variant {
      /**
       * The field types available for the variant
       */
      fields: Array<
        | Variant.BooleanField
        | Variant.ButtonField
        | Variant.MarkdownField
        | Variant.MultiSelectField
        | Variant.SelectField
        | Variant.TextField
        | Variant.TextareaField
      >;

      /**
       * The unique key string for the variant. Must be at minimum 3 characters and at
       * maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
       */
      key: string;

      /**
       * A name for the variant. Must be at maximum 255 characters in length.
       */
      name: string;
    }

    export namespace Variant {
      /**
       * A boolean field used in a message type
       */
      export interface BooleanField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'boolean';

        /**
         * The value of the boolean field
         */
        value: boolean;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the boolean field
         */
        settings?: BooleanField.Settings;
      }

      export namespace BooleanField {
        /**
         * Settings for the boolean field
         */
        export interface Settings {
          /**
           * The default value of the boolean field
           */
          default?: boolean;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A button field used in a message type
       */
      export interface ButtonField {
        /**
         * A text field used in a message type
         */
        action: ButtonField.Action;

        /**
         * The unique key of the field
         */
        key: string;

        /**
         * A text field used in a message type
         */
        text: ButtonField.Text;

        /**
         * The type of the field
         */
        type: 'button';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the button field
         */
        settings?: ButtonField.Settings;
      }

      export namespace ButtonField {
        /**
         * A text field used in a message type
         */
        export interface Action {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Action.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Action {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * A text field used in a message type
         */
        export interface Text {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Text.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Text {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * Settings for the button field
         */
        export interface Settings {
          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A markdown field used in a message type
       */
      export interface MarkdownField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'markdown';

        /**
         * The value of the markdown field
         */
        value: string;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the markdown field
         */
        settings?: MarkdownField.Settings;
      }

      export namespace MarkdownField {
        /**
         * Settings for the markdown field
         */
        export interface Settings {
          /**
           * The default value of the markdown field
           */
          default?: string;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A multi-select field used in a message type
       */
      export interface MultiSelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the multi_select field
         */
        settings: MultiSelectField.Settings;

        /**
         * The type of the field
         */
        type: 'multi_select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected values
         */
        value?: Array<string> | null;
      }

      export namespace MultiSelectField {
        /**
         * Settings for the multi_select field
         */
        export interface Settings {
          /**
           * The default values for the multi-select field
           */
          default?: Array<string> | null;

          description?: string;

          /**
           * The available options for the multi-select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A select field used in a message type
       */
      export interface SelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the select field
         */
        settings: SelectField.Settings;

        /**
         * The type of the field
         */
        type: 'select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected value
         */
        value?: string | null;
      }

      export namespace SelectField {
        /**
         * Settings for the select field
         */
        export interface Settings {
          /**
           * The default value for the select field
           */
          default?: string | null;

          description?: string;

          /**
           * The available options for the select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A text field used in a message type
       */
      export interface TextField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: TextField.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace TextField {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A textarea field used in a message type
       */
      export interface TextareaField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'textarea';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the textarea field
         */
        settings?: TextareaField.Settings;

        /**
         * The value of the textarea field
         */
        value?: string | null;
      }

      export namespace TextareaField {
        /**
         * Settings for the textarea field
         */
        export interface Settings {
          /**
           * The default value of the textarea field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }
    }
  }
}

export interface MessageTypeValidateParams {
  /**
   * Body param: A request to create a message type
   */
  message_type: MessageTypeValidateParams.MessageType;

  /**
   * Query param: Whether to annotate the resource
   */
  annotate?: boolean;

  /**
   * Query param: Whether to hide uncommitted changes
   */
  hide_uncommitted_changes?: boolean;
}

export namespace MessageTypeValidateParams {
  /**
   * A request to create a message type
   */
  export interface MessageType {
    /**
     * An arbitrary string attached to a message type object. Useful for adding notes
     * about the message type for internal purposes. Maximum of 280 characters allowed.
     */
    description: string | null;

    /**
     * A name for the message type. Must be at maximum 255 characters in length.
     */
    name: string;

    /**
     * An HTML/liquid template for the message type preview
     */
    preview: string;

    /**
     * The icon name of the message type
     */
    icon_name?: string;

    /**
     * The semantic version of the message type
     */
    semver?: string;

    /**
     * The SHA hash of the message type
     */
    sha?: string;

    /**
     * When the message type was last updated
     */
    updated_at?: string;

    /**
     * The variants of the message type
     */
    variants?: Array<MessageType.Variant>;
  }

  export namespace MessageType {
    /**
     * A variant of a message type
     */
    export interface Variant {
      /**
       * The field types available for the variant
       */
      fields: Array<
        | Variant.BooleanField
        | Variant.ButtonField
        | Variant.MarkdownField
        | Variant.MultiSelectField
        | Variant.SelectField
        | Variant.TextField
        | Variant.TextareaField
      >;

      /**
       * The unique key string for the variant. Must be at minimum 3 characters and at
       * maximum 255 characters in length. Must be in the format of ^[a-z0-9_-]+$.
       */
      key: string;

      /**
       * A name for the variant. Must be at maximum 255 characters in length.
       */
      name: string;
    }

    export namespace Variant {
      /**
       * A boolean field used in a message type
       */
      export interface BooleanField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'boolean';

        /**
         * The value of the boolean field
         */
        value: boolean;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the boolean field
         */
        settings?: BooleanField.Settings;
      }

      export namespace BooleanField {
        /**
         * Settings for the boolean field
         */
        export interface Settings {
          /**
           * The default value of the boolean field
           */
          default?: boolean;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A button field used in a message type
       */
      export interface ButtonField {
        /**
         * A text field used in a message type
         */
        action: ButtonField.Action;

        /**
         * The unique key of the field
         */
        key: string;

        /**
         * A text field used in a message type
         */
        text: ButtonField.Text;

        /**
         * The type of the field
         */
        type: 'button';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the button field
         */
        settings?: ButtonField.Settings;
      }

      export namespace ButtonField {
        /**
         * A text field used in a message type
         */
        export interface Action {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Action.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Action {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * A text field used in a message type
         */
        export interface Text {
          /**
           * The unique key of the field
           */
          key: string;

          /**
           * The type of the field
           */
          type: 'text';

          /**
           * The label of the field
           */
          label?: string | null;

          /**
           * Settings for the text field
           */
          settings?: Text.Settings;

          /**
           * The value of the text field
           */
          value?: string | null;
        }

        export namespace Text {
          /**
           * Settings for the text field
           */
          export interface Settings {
            /**
             * The default value of the text field
             */
            default?: string | null;

            description?: string;

            max_length?: number;

            min_length?: number;

            /**
             * Whether the field is required
             */
            required?: boolean;
          }
        }

        /**
         * Settings for the button field
         */
        export interface Settings {
          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A markdown field used in a message type
       */
      export interface MarkdownField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'markdown';

        /**
         * The value of the markdown field
         */
        value: string;

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the markdown field
         */
        settings?: MarkdownField.Settings;
      }

      export namespace MarkdownField {
        /**
         * Settings for the markdown field
         */
        export interface Settings {
          /**
           * The default value of the markdown field
           */
          default?: string;

          description?: string;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A multi-select field used in a message type
       */
      export interface MultiSelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the multi_select field
         */
        settings: MultiSelectField.Settings;

        /**
         * The type of the field
         */
        type: 'multi_select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected values
         */
        value?: Array<string> | null;
      }

      export namespace MultiSelectField {
        /**
         * Settings for the multi_select field
         */
        export interface Settings {
          /**
           * The default values for the multi-select field
           */
          default?: Array<string> | null;

          description?: string;

          /**
           * The available options for the multi-select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A select field used in a message type
       */
      export interface SelectField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * Settings for the select field
         */
        settings: SelectField.Settings;

        /**
         * The type of the field
         */
        type: 'select';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * The selected value
         */
        value?: string | null;
      }

      export namespace SelectField {
        /**
         * Settings for the select field
         */
        export interface Settings {
          /**
           * The default value for the select field
           */
          default?: string | null;

          description?: string;

          /**
           * The available options for the select field
           */
          options?: Array<Settings.Option>;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }

        export namespace Settings {
          export interface Option {
            /**
             * The value for the option
             */
            value: string;

            /**
             * The display label for the option
             */
            label?: string;
          }
        }
      }

      /**
       * A text field used in a message type
       */
      export interface TextField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'text';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the text field
         */
        settings?: TextField.Settings;

        /**
         * The value of the text field
         */
        value?: string | null;
      }

      export namespace TextField {
        /**
         * Settings for the text field
         */
        export interface Settings {
          /**
           * The default value of the text field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }

      /**
       * A textarea field used in a message type
       */
      export interface TextareaField {
        /**
         * The unique key of the field
         */
        key: string;

        /**
         * The type of the field
         */
        type: 'textarea';

        /**
         * The label of the field
         */
        label?: string | null;

        /**
         * Settings for the textarea field
         */
        settings?: TextareaField.Settings;

        /**
         * The value of the textarea field
         */
        value?: string | null;
      }

      export namespace TextareaField {
        /**
         * Settings for the textarea field
         */
        export interface Settings {
          /**
           * The default value of the textarea field
           */
          default?: string | null;

          description?: string;

          max_length?: number;

          min_length?: number;

          /**
           * Whether the field is required
           */
          required?: boolean;
        }
      }
    }
  }
}

export declare namespace MessageTypes {
  export {
    type MessageTypeRetrieveResponse as MessageTypeRetrieveResponse,
    type MessageTypeListResponse as MessageTypeListResponse,
    type MessageTypeUpsertResponse as MessageTypeUpsertResponse,
    type MessageTypeValidateResponse as MessageTypeValidateResponse,
    type MessageTypeRetrieveParams as MessageTypeRetrieveParams,
    type MessageTypeListParams as MessageTypeListParams,
    type MessageTypeUpsertParams as MessageTypeUpsertParams,
    type MessageTypeValidateParams as MessageTypeValidateParams,
  };
}
