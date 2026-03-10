// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as MessageTypesAPI from './message-types';

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
  url: MessageTypeURLField;

  /**
   * Settings for the image field.
   */
  settings?: MessageTypeImageField.Settings;
}

export namespace MessageTypeImageField {
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

/**
 * The information about a paginated result.
 */
export interface PageInfo {
  /**
   * The number of entries to fetch per-page.
   */
  page_size: number;

  /**
   * The cursor to fetch entries after. Will only be present if there are more
   * entries to fetch.
   */
  after?: string | null;

  /**
   * The cursor to fetch entries before. Will only be present if there are more
   * entries to fetch before the current page.
   */
  before?: string | null;
}
