// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as TemplatesAPI from '../templates';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Workflows let you express your cross-channel notification logic.
 */
export class Steps extends APIResource {
  /**
   * Generates a rendered template for a given channel step in a workflow.
   *
   * @example
   * ```ts
   * const response =
   *   await client.workflows.steps.previewTemplate('step_ref', {
   *     workflow_key: 'workflow_key',
   *     recipient: 'dnedry',
   *   });
   * ```
   */
  previewTemplate(
    stepRef: string,
    params: StepPreviewTemplateParams,
    options?: RequestOptions,
  ): APIPromise<StepPreviewTemplateResponse> {
    const { workflow_key, branch, environment, ...body } = params;
    return this._client.post(path`/v1/workflows/${workflow_key}/steps/${stepRef}/preview_template`, {
      query: { branch, environment },
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
    | TemplatesAPI.EmailTemplate
    | TemplatesAPI.InAppFeedTemplate
    | TemplatesAPI.PushTemplate
    | TemplatesAPI.ChatTemplate
    | TemplatesAPI.SMSTemplate
    | TemplatesAPI.RequestTemplate;
}

export interface StepPreviewTemplateParams {
  /**
   * Path param: The key of the workflow.
   */
  workflow_key: string;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  recipient: Shared.RecipientReference;

  /**
   * Query param: The slug of a branch to use. When `environment` is omitted, the
   * branch is resolved from Development after the account default is injected. When
   * `environment` is supplied, it must be `"development"`.
   */
  branch?: string;

  /**
   * Query param: The environment slug. When omitted, the account's default
   * environment is used.
   */
  environment?: string;

  /**
   * Body param: A recipient reference, used when referencing a recipient by either
   * their ID (for a user), or by a reference for an object.
   */
  actor?: Shared.RecipientReference | null;

  /**
   * Body param: The data to pass to the workflow template for rendering.
   */
  data?: { [key: string]: unknown };

  /**
   * Body param: The tenant to associate the workflow with. Must not contain
   * whitespace.
   */
  tenant?: string | null;
}

export declare namespace Steps {
  export {
    type StepPreviewTemplateResponse as StepPreviewTemplateResponse,
    type StepPreviewTemplateParams as StepPreviewTemplateParams,
  };
}
