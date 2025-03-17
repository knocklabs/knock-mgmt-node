// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Steps extends APIResource {
  /**
   * Generates a rendered template for a given channel step in a workflow.
   */
  previewTemplate(
    stepRef: string,
    params: StepPreviewTemplateParams,
    options?: RequestOptions,
  ): APIPromise<StepPreviewTemplateResponse> {
    const { workflow_key, environment, ...body } = params;
    return this._client.post(path`/v1/workflows/${workflow_key}/steps/${stepRef}/preview_template`, {
      query: { environment },
      body,
      ...options,
    });
  }
}

/**
 * A response to a preview workflow template request.
 */
export interface StepPreviewTemplateResponse {
  /**
   * The content type of the preview.
   */
  content_type: 'email' | 'in_app_feed' | 'push' | 'chat' | 'sms' | 'http';

  /**
   * The result of the preview.
   */
  result: 'success' | 'error';

  /**
   * The rendered template, ready to be previewed.
   */
  template:
    | StepPreviewTemplateResponse.EmailTemplate
    | StepPreviewTemplateResponse.InAppFeedTemplate
    | StepPreviewTemplateResponse.PushTemplate
    | StepPreviewTemplateResponse.ChatTemplate
    | StepPreviewTemplateResponse.SMSTemplate
    | StepPreviewTemplateResponse.RequestTemplate;
}

export namespace StepPreviewTemplateResponse {
  /**
   * An email message template.
   */
  export interface EmailTemplate {
    /**
     * The subject of the email.
     */
    subject: string;

    /**
     * An HTML template for the email body. Either `html_body` or `visual_blocks` must
     * be provided.
     */
    html_body?: string;

    /**
     * The settings for the email template. Can be omitted.
     */
    settings?: EmailTemplate.Settings | null;

    /**
     * A text template for the email body. Only present if opted out from
     * autogenerating it from the HTML template.
     */
    text_body?: string | null;

    /**
     * The visual blocks of the email. Either `html_body` or `visual_blocks` must be
     * provided.
     */
    visual_blocks?: Array<
      | EmailTemplate.ButtonSetBlock
      | EmailTemplate.DividerBlock
      | EmailTemplate.HTMLBlock
      | EmailTemplate.MarkdownBlock
      | EmailTemplate.PartialBlock
    >;
  }

  export namespace EmailTemplate {
    /**
     * The settings for the email template. Can be omitted.
     */
    export interface Settings {
      /**
       * The object path in the data payload (of the workflow trigger call) to resolve
       * attachments.
       */
      attachment_key?: string | null;

      /**
       * The key of the email layout which the step is using.
       */
      layout_key?: string | null;

      /**
       * A liquid template that will be injected into the layout above the message
       * template content.
       */
      pre_content?: string | null;
    }

    /**
     * A button set block in an email template.
     */
    export interface ButtonSetBlock {
      /**
       * The ID of the block.
       */
      id: string;

      buttons: Array<ButtonSetBlock.Button>;

      /**
       * The type of the block.
       */
      type: string;

      /**
       * The version of the block.
       */
      version: number;

      /**
       * The layout attributes of the block.
       */
      layout_attrs?: ButtonSetBlock.LayoutAttrs;
    }

    export namespace ButtonSetBlock {
      /**
       * A button in a button set block.
       */
      export interface Button {
        action: string;

        label: string;

        variant: string;

        size_attrs?: Button.SizeAttrs;

        style_attrs?: Button.StyleAttrs;
      }

      export namespace Button {
        export interface SizeAttrs {
          is_fullwidth?: boolean;

          size?: 'sm' | 'md' | 'lg';
        }

        export interface StyleAttrs {
          background_color?: string;

          border_color?: string;

          border_radius?: number;

          border_width?: number;

          text_color?: string;
        }
      }

      /**
       * The layout attributes of the block.
       */
      export interface LayoutAttrs {
        column_gap: number;

        horizontal_align: 'left' | 'center' | 'right';

        padding_bottom: number;

        padding_left: number;

        padding_right: number;

        padding_top: number;
      }
    }

    /**
     * A divider block in an email template.
     */
    export interface DividerBlock {
      /**
       * The ID of the block.
       */
      id: string;

      /**
       * The type of the block.
       */
      type: string;

      /**
       * The version of the block.
       */
      version: number;

      /**
       * The layout attributes of the block.
       */
      layout_attrs?: DividerBlock.LayoutAttrs;
    }

    export namespace DividerBlock {
      /**
       * The layout attributes of the block.
       */
      export interface LayoutAttrs {
        padding_bottom: number;

        padding_left: number;

        padding_right: number;

        padding_top: number;
      }
    }

    /**
     * An HTML block in an email template.
     */
    export interface HTMLBlock {
      /**
       * The ID of the block.
       */
      id: string;

      /**
       * The HTML content of the block.
       */
      content: string;

      /**
       * The type of the block.
       */
      type: string;

      /**
       * The version of the block.
       */
      version: number;
    }

    /**
     * A markdown block in an email template.
     */
    export interface MarkdownBlock {
      /**
       * The ID of the block.
       */
      id: string;

      /**
       * The markdown content of the block.
       */
      content: string;

      /**
       * The type of the block.
       */
      type: string;

      /**
       * The flavor of markdown to use for the block.
       */
      variant: string;

      /**
       * The version of the block.
       */
      version: number;

      /**
       * The layout attributes of the block.
       */
      layout_attrs?: MarkdownBlock.LayoutAttrs;
    }

    export namespace MarkdownBlock {
      /**
       * The layout attributes of the block.
       */
      export interface LayoutAttrs {
        padding_bottom: number;

        padding_left: number;

        padding_right: number;

        padding_top: number;
      }
    }

    /**
     * A partial block in an email template, used to render a reusable partial
     * component.
     */
    export interface PartialBlock {
      /**
       * The ID of the block.
       */
      id: string;

      /**
       * The attributes to pass to the partial block.
       */
      attrs: Record<string, unknown>;

      /**
       * The key of the partial block to invoke.
       */
      key: string;

      /**
       * The name of the partial block.
       */
      name: string;

      /**
       * The type of the block.
       */
      type: string;

      /**
       * The version of the block.
       */
      version: number;

      /**
       * The layout attributes of the block.
       */
      layout_attrs?: PartialBlock.LayoutAttrs;
    }

    export namespace PartialBlock {
      /**
       * The layout attributes of the block.
       */
      export interface LayoutAttrs {
        padding_bottom: number;

        padding_left: number;

        padding_right: number;

        padding_top: number;
      }
    }
  }

  /**
   * An in-app feed template.
   */
  export interface InAppFeedTemplate {
    /**
     * The markdown body of the in-app feed.
     */
    markdown_body: string;

    /**
     * The action buttons of the in-app feed.
     */
    action_buttons?: Array<InAppFeedTemplate.ActionButton>;

    /**
     * The URL to navigate to when the in-app feed is tapped. Can be omitted for
     * multi-action templates, where the action buttons will be used instead.
     */
    action_url?: string | null;
  }

  export namespace InAppFeedTemplate {
    /**
     * A single-action button to be rendered in an in-app feed cell.
     */
    export interface ActionButton {
      /**
       * The action of the action button.
       */
      action: string;

      /**
       * The label of the action button.
       */
      label: string;
    }
  }

  /**
   * A push notification template.
   */
  export interface PushTemplate {
    /**
     * The body of the push notification.
     */
    text_body: string;

    /**
     * The title of the push notification.
     */
    title: string;

    /**
     * The settings for the push template. Can be omitted.
     */
    settings?: PushTemplate.Settings | null;
  }

  export namespace PushTemplate {
    /**
     * The settings for the push template. Can be omitted.
     */
    export interface Settings {
      /**
       * The delivery type of the push notification. Defaults to `content`. Set as silent
       * to send a data-only notification. When set to `data`, no body will be sent.
       */
      delivery_type?: 'silent' | 'content';

      /**
       * A JSON object overrides the payload sent to the push provider.
       */
      payload_overrides?: string;
    }
  }

  /**
   * A chat template.
   */
  export interface ChatTemplate {
    /**
     * The markdown body of the chat template.
     */
    markdown_body: string;

    /**
     * A JSON template for the chat notification message payload. Only present if not
     * using the markdown body.
     */
    json_body?: string | null;

    /**
     * The summary of the chat template.
     */
    summary?: string;
  }

  /**
   * An SMS template.
   */
  export interface SMSTemplate {
    /**
     * The message of the SMS.
     */
    text_body: string;

    /**
     * The settings for the SMS template.
     */
    settings?: SMSTemplate.Settings | null;
  }

  export namespace SMSTemplate {
    /**
     * The settings for the SMS template.
     */
    export interface Settings {
      /**
       * A JSON object overrides the payload sent to the SMS provider.
       */
      payload_overrides?: string | null;

      /**
       * An override for the phone number to send the SMS to. When not set, defaults to
       * `recipient.phone_number`.
       */
      to_number?: string | null;
    }
  }

  /**
   * A request template.
   */
  export interface RequestTemplate {
    /**
     * The HTTP method of the request.
     */
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';

    /**
     * The URL of the request.
     */
    url: string;

    /**
     * A body of the request. Only used for POST or PUT requests.
     */
    body?: string | null;

    /**
     * A list of key-value pairs for the request headers. Each object should contain
     * key and value fields with string values.
     */
    headers?: Array<RequestTemplate.Header>;

    /**
     * A list of key-value pairs for the request query params. Each object should
     * contain key and value fields with string values.
     */
    query_params?: Array<RequestTemplate.QueryParam>;
  }

  export namespace RequestTemplate {
    export interface Header {
      /**
       * The key of the header.
       */
      key: string;

      /**
       * The value of the header.
       */
      value: string;
    }

    export interface QueryParam {
      /**
       * The key of the query param.
       */
      key: string;

      /**
       * The value of the query param.
       */
      value: string;
    }
  }
}

export interface StepPreviewTemplateParams {
  /**
   * Path param: The key of the workflow.
   */
  workflow_key: string;

  /**
   * Query param: The environment slug. (Defaults to `development`.)
   */
  environment: string;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  recipient: string | StepPreviewTemplateParams.UnionMember1;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  actor?: string | StepPreviewTemplateParams.UnionMember1 | null;

  /**
   * Body param: The data to pass to the workflow template for rendering.
   */
  data?: Record<string, unknown>;

  /**
   * Body param: The tenant to associate the workflow with.
   */
  tenant?: string | null;
}

export namespace StepPreviewTemplateParams {
  /**
   * An object reference
   */
  export interface UnionMember1 {
    id: string;

    collection: string;
  }

  /**
   * An object reference
   */
  export interface UnionMember1 {
    id: string;

    collection: string;
  }
}

export declare namespace Steps {
  export {
    type StepPreviewTemplateResponse as StepPreviewTemplateResponse,
    type StepPreviewTemplateParams as StepPreviewTemplateParams,
  };
}
