// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Attaches a goal to a workflow, guide, or broadcast for attribution tracking.
 */
export interface GoalAttachment {
  /**
   * The key of the goal to attach.
   */
  goal_key: string;

  /**
   * The number of days to attribute conversions after the notification is sent. Must
   * be between 1 and 30. Defaults to 7.
   */
  attribution_window_days?: number;
}

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
  action: MessageTypeTextField;

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
  text: MessageTypeTextField;

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

/**
 * An image field used in a message type.
 */
export interface MessageTypeImageField {
  /**
   * A text field used in a message type.
   */
  action: MessageTypeTextField;

  /**
   * A text field used in a message type.
   */
  alt: MessageTypeTextField;

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
 * A text field used in a message type.
 */
export interface MessageTypeTextField {
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
  type: 'text';

  /**
   * Settings for the text field.
   */
  settings?: MessageTypeTextField.Settings;
}

export namespace MessageTypeTextField {
  /**
   * Settings for the text field.
   */
  export interface Settings {
    /**
     * The default value of the text field.
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

/**
 * A recipient reference, used when referencing a recipient by either their ID (for
 * a user), or by a reference for an object.
 */
export type RecipientReference = string | RecipientReference.ObjectRecipientReference;

export namespace RecipientReference {
  /**
   * An object reference.
   */
  export interface ObjectRecipientReference {
    /**
     * The ID of the object.
     */
    id: string;

    /**
     * The collection of the object.
     */
    collection: string;
  }
}
