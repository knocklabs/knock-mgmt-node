// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessageTypesAPI from './message-types';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesCursor, type EntriesCursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A message type allows you to specify an in-app schema that defines the fields available for your in-app notifications.
 */
export class MessageTypes extends APIResource {
  /**
   * Retrieve a message type by its key, in a given environment.
   *
   * @example
   * ```ts
   * const messageType = await client.messageTypes.retrieve(
   *   'email',
   *   { environment: 'development' },
   * );
   * ```
   */
  retrieve(
    messageTypeKey: string,
    query: MessageTypeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MessageType> {
    return this._client.get(path`/v1/message_types/${messageTypeKey}`, { query, ...options });
  }

  /**
   * Returns a paginated list of message types available in a given environment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messageType of client.messageTypes.list({
   *   environment: 'development',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessageTypeListParams,
    options?: RequestOptions,
  ): PagePromise<MessageTypesEntriesCursor, MessageType> {
    return this._client.getAPIList('/v1/message_types', EntriesCursor<MessageType>, { query, ...options });
  }

  /**
   * Updates a message type, or creates a new one if it does not yet exist.
   *
   * Note: this endpoint only operates in the `development` environment.
   *
   * @example
   * ```ts
   * const response = await client.messageTypes.upsert('email', {
   *   environment: 'development',
   *   message_type: {
   *     description: 'This is a message type',
   *     name: 'My Message Type',
   *     preview: '<div>Hello, world!</div>',
   *   },
   * });
   * ```
   */
  upsert(
    messageTypeKey: string,
    params: MessageTypeUpsertParams,
    options?: RequestOptions,
  ): APIPromise<MessageTypeUpsertResponse> {
    const { environment, annotate, branch, commit, commit_message, ...body } = params;
    return this._client.put(path`/v1/message_types/${messageTypeKey}`, {
      query: { environment, annotate, branch, commit, commit_message },
      body,
      ...options,
    });
  }

  /**
   * Validates a message type payload without persisting it.
   *
   * Note: this endpoint only operates on message types in the `development`
   * environment.
   *
   * @example
   * ```ts
   * const response = await client.messageTypes.validate(
   *   'email',
   *   {
   *     environment: 'development',
   *     message_type: {
   *       description: 'This is a message type',
   *       name: 'My Message Type',
   *       preview: '<div>Hello, world!</div>',
   *     },
   *   },
   * );
   * ```
   */
  validate(
    messageTypeKey: string,
    params: MessageTypeValidateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTypeValidateResponse> {
    const { environment, branch, ...body } = params;
    return this._client.put(path`/v1/message_types/${messageTypeKey}/validate`, {
      query: { environment, branch },
      body,
      ...options,
    });
  }
}

export type MessageTypesEntriesCursor = EntriesCursor<MessageType>;

/**
 * A message type is a schema for a message that maps to a UI component or element
 * within your application.
 */
export interface MessageType {
  /**
   * The timestamp of when the message type was created.
   */
  created_at: string;

  /**
   * The environment of the message type.
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
   * The owner of the message type.
   */
  owner: 'system' | 'user';

  /**
   * An HTML/liquid template for the message type preview.
   */
  preview: string;

  /**
   * The semantic version of the message type.
   */
  semver: string;

  /**
   * The SHA hash of the message type.
   */
  sha: string;

  /**
   * The timestamp of when the message type was last updated.
   */
  updated_at: string;

  /**
   * Whether the message type is valid.
   */
  valid: boolean;

  /**
   * The variants of the message type.
   */
  variants: Array<MessageTypeVariant>;

  /**
   * The timestamp of when the message type was deleted.
   */
  archived_at?: string | null;

  /**
   * The timestamp of when the message type was deleted.
   */
  deleted_at?: string | null;

  /**
   * An arbitrary string attached to a message type object. Useful for adding notes
   * about the message type for internal purposes. Maximum of 280 characters allowed.
   */
  description?: string | null;

  /**
   * The icon name of the message type.
   */
  icon_name?: string;
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
 * A variant of a message type.
 */
export interface MessageTypeVariant {
  /**
   * The field types available for the variant.
   */
  fields: Array<
    | Shared.MessageTypeBooleanField
    | Shared.MessageTypeButtonField
    | Shared.MessageTypeImageField
    | Shared.MessageTypeJsonField
    | Shared.MessageTypeMarkdownField
    | Shared.MessageTypeMultiSelectField
    | Shared.MessageTypeSelectField
    | MessageTypeTextField
    | Shared.MessageTypeTextareaField
    | Shared.MessageTypeURLField
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

/**
 * Wraps the MessageType response under the `message_type` key.
 */
export interface MessageTypeUpsertResponse {
  /**
   * A message type is a schema for a message that maps to a UI component or element
   * within your application.
   */
  message_type: MessageType;
}

/**
 * Wraps the MessageType response under the `message_type` key.
 */
export interface MessageTypeValidateResponse {
  /**
   * A message type is a schema for a message that maps to a UI component or element
   * within your application.
   */
  message_type: MessageType;
}

export interface MessageTypeRetrieveParams {
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

export interface MessageTypeListParams extends EntriesCursorParams {
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

export interface MessageTypeUpsertParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A request to create a message type.
   */
  message_type: MessageTypeUpsertParams.MessageType;

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

export namespace MessageTypeUpsertParams {
  /**
   * A request to create a message type.
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
     * An HTML/liquid template for the message type preview.
     */
    preview: string;

    /**
     * The icon name of the message type.
     */
    icon_name?: string;

    /**
     * The semantic version of the message type.
     */
    semver?: string;

    /**
     * The variants of the message type.
     */
    variants?: Array<MessageTypesAPI.MessageTypeVariant>;
  }
}

export interface MessageTypeValidateParams {
  /**
   * Query param: The environment slug.
   */
  environment: string;

  /**
   * Body param: A request to create a message type.
   */
  message_type: MessageTypeValidateParams.MessageType;

  /**
   * Query param: The slug of a branch to use. This option can only be used when
   * `environment` is `"development"`.
   */
  branch?: string;
}

export namespace MessageTypeValidateParams {
  /**
   * A request to create a message type.
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
     * An HTML/liquid template for the message type preview.
     */
    preview: string;

    /**
     * The icon name of the message type.
     */
    icon_name?: string;

    /**
     * The semantic version of the message type.
     */
    semver?: string;

    /**
     * The variants of the message type.
     */
    variants?: Array<MessageTypesAPI.MessageTypeVariant>;
  }
}

export declare namespace MessageTypes {
  export {
    type MessageType as MessageType,
    type MessageTypeTextField as MessageTypeTextField,
    type MessageTypeVariant as MessageTypeVariant,
    type MessageTypeUpsertResponse as MessageTypeUpsertResponse,
    type MessageTypeValidateResponse as MessageTypeValidateResponse,
    type MessageTypesEntriesCursor as MessageTypesEntriesCursor,
    type MessageTypeRetrieveParams as MessageTypeRetrieveParams,
    type MessageTypeListParams as MessageTypeListParams,
    type MessageTypeUpsertParams as MessageTypeUpsertParams,
    type MessageTypeValidateParams as MessageTypeValidateParams,
  };
}
