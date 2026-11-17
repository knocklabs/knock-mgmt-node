// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Feedback lets you report bugs, friction, and feature requests to Knock.
 */
export class Feedback extends APIResource {
  /**
   * Sends bugs, friction, and feature requests to the Knock team. Agents can use
   * this to report issues they encounter while completing a task. Do not include
   * secrets or personally identifiable information.
   *
   * @example
   * ```ts
   * const feedback = await client.feedback.create({
   *   message:
   *     'Please name the missing variable in workflow validation errors.',
   * });
   * ```
   */
  create(body: FeedbackCreateParams, options?: RequestOptions): APIPromise<FeedbackCreateResponse> {
    return this._client.post('/v1/feedback', { body, ...options });
  }
}

/**
 * Wraps the Feedback response under the `feedback` key.
 */
export interface FeedbackCreateResponse {
  /**
   * Feedback received by Knock.
   */
  feedback: FeedbackCreateResponse.Feedback;
}

export namespace FeedbackCreateResponse {
  /**
   * Feedback received by Knock.
   */
  export interface Feedback {
    /**
     * The unique identifier of the feedback.
     */
    id: string;

    /**
     * The timestamp of when the feedback was received.
     */
    created_at: string;
  }
}

export interface FeedbackCreateParams {
  /**
   * Your feedback. Must contain non-whitespace text.
   */
  message: string;

  /**
   * Relevant details about the feedback, up to 64 KiB when JSON encoded. The listed
   * keys are recommended and any other keys are accepted.
   */
  context?: FeedbackCreateParams.Context | null;
}

export namespace FeedbackCreateParams {
  /**
   * Relevant details about the feedback, up to 64 KiB when JSON encoded. The listed
   * keys are recommended and any other keys are accepted.
   */
  export interface Context {
    /**
     * What happened, including any error text.
     */
    actual?: string | null;

    /**
     * What you expected to happen.
     */
    expected?: string | null;

    /**
     * The time spent, retries, or workarounds used.
     */
    impact?: string | null;

    /**
     * The name of the model used for the task.
     */
    model?: string | null;

    /**
     * The Knock product involved, such as workflows or guides.
     */
    product?: string | null;

    /**
     * What you were trying to do.
     */
    task?: string | null;

    /**
     * The tool, command, or endpoint affected.
     */
    tool?: string | null;

    /**
     * A category such as bug, friction, or feature.
     */
    type?: string | null;

    [k: string]: unknown;
  }
}

export declare namespace Feedback {
  export {
    type FeedbackCreateResponse as FeedbackCreateResponse,
    type FeedbackCreateParams as FeedbackCreateParams,
  };
}
