// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows/workflows';

export class Audiences extends APIResource {}

/**
 * An audience defines a set of users that can be targeted for notifications. Can
 * be either a `StaticAudience` (members explicitly added/removed) or a
 * `DynamicAudience` (members determined by segment conditions).
 */
export type Audience = StaticAudience | DynamicAudience;

/**
 * A dynamic audience where membership is determined by segment conditions
 * evaluated at runtime.
 */
export interface DynamicAudience {
  /**
   * The timestamp of when the audience was created.
   */
  created_at: string;

  /**
   * The slug of the environment in which the audience exists.
   */
  environment: string;

  /**
   * The unique key of the audience.
   */
  key: string;

  /**
   * The name of the audience.
   */
  name: string;

  /**
   * A list of segments that define the dynamic audience membership criteria. Each
   * segment contains one or more conditions joined by AND. Multiple segments are
   * joined by OR.
   */
  segments: Array<DynamicAudience.Segment>;

  /**
   * The type of audience. Always `dynamic` for dynamic audiences.
   */
  type: 'dynamic';

  /**
   * The timestamp of when the audience was last updated.
   */
  updated_at: string;

  /**
   * A description of the audience.
   */
  description?: string | null;

  /**
   * The SHA hash of the audience data.
   */
  sha?: string | null;
}

export namespace DynamicAudience {
  export interface Segment {
    /**
     * A list of conditions within this segment, joined by AND.
     */
    conditions: Array<WorkflowsAPI.Condition>;
  }
}

/**
 * A static audience where members are explicitly added or removed via the API.
 */
export interface StaticAudience {
  /**
   * The timestamp of when the audience was created.
   */
  created_at: string;

  /**
   * The slug of the environment in which the audience exists.
   */
  environment: string;

  /**
   * The unique key of the audience.
   */
  key: string;

  /**
   * The name of the audience.
   */
  name: string;

  /**
   * The type of audience. Always `static` for static audiences.
   */
  type: 'static';

  /**
   * The timestamp of when the audience was last updated.
   */
  updated_at: string;

  /**
   * A description of the audience.
   */
  description?: string | null;

  /**
   * The SHA hash of the audience data.
   */
  sha?: string | null;
}

export declare namespace Audiences {
  export {
    type Audience as Audience,
    type DynamicAudience as DynamicAudience,
    type StaticAudience as StaticAudience,
  };
}
