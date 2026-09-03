// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Resources for managing your Knock account.
 */
export class Billing extends APIResource {
  /**
   * Returns a snapshot of the current draft invoice for the account, including
   * amount due, plan, per-metric usage, and remaining credit blocks.
   *
   * @example
   * ```ts
   * const billingSummary =
   *   await client.billing.retrieveSummary();
   * ```
   */
  retrieveSummary(options?: RequestOptions): APIPromise<BillingSummary> {
    return this._client.get('/v1/billing/summary', options);
  }
}

/**
 * A snapshot of the current draft Orb invoice for the account, including plan,
 * per-metric usage, and remaining credit blocks.
 */
export interface BillingSummary {
  /**
   * The amount due on the draft invoice, as a decimal string.
   */
  amount_due: string;

  /**
   * Unexpired Orb credit blocks for custom pricing units on the draft invoice,
   * including scheduled and depleted allotments.
   */
  credits: Array<BillingSummary.Credit>;

  /**
   * The invoice currency code, such as USD.
   */
  currency: string | null;

  /**
   * The Orb draft invoice id, if present.
   */
  invoice_id: string | null;

  /**
   * The end of the current usage period, hoisted from the first usage line item.
   */
  period_end: string | null;

  /**
   * The start of the current usage period, hoisted from the first usage line item.
   */
  period_start: string | null;

  /**
   * The Knock plan currently assigned to the account.
   */
  plan: BillingSummary.Plan;

  /**
   * The date the draft invoice is scheduled to be issued.
   */
  target_date: string;

  /**
   * Per-metric usage line items from the draft invoice.
   */
  usage: Array<BillingSummary.Usage>;
}

export namespace BillingSummary {
  /**
   * An unexpired Orb credit block, including scheduled and depleted allotments.
   */
  export interface Credit {
    /**
     * The Orb credit block id.
     */
    id: string;

    /**
     * The Orb custom pricing-unit identifier, such as mnr_credits or ai_credits.
     */
    currency: string;

    /**
     * When the block becomes effective.
     */
    effective_at: string | null;

    /**
     * When the block expires.
     */
    expires_at: string | null;

    /**
     * The display name for the credit currency.
     */
    name: string;

    /**
     * The block's original allocation.
     */
    quantity: number;

    /**
     * The block's remaining balance.
     */
    remaining: number;

    /**
     * Derived block status: scheduled when not yet effective, depleted when remaining
     * is zero or less, otherwise active.
     */
    status: 'active' | 'depleted' | 'scheduled';
  }

  /**
   * The Knock plan currently assigned to the account.
   */
  export interface Plan {
    /**
     * The unique identifier of the plan.
     */
    id: string;

    /**
     * The human-readable plan name.
     */
    display_name: string;

    /**
     * The plan type.
     */
    type: 'free' | 'starter' | 'growth' | 'enterprise';
  }

  /**
   * Usage for a single Orb billable metric on the current draft invoice.
   */
  export interface Usage {
    /**
     * The billed dollar amount for this metric after credits and adjustments.
     */
    amount: string;

    /**
     * Prepaid credits applied to this metric during the current service period.
     */
    credits_applied: number;

    /**
     * The Orb billable metric id.
     */
    metric_id: string;

    /**
     * The Orb billable metric name.
     */
    name: string;

    /**
     * The Orb price currency for this line item, used to correlate usage with credit
     * blocks.
     */
    pricing_currency: string | null;

    /**
     * Orb line-item usage quantity for this period. This is not replaced by
     * credits_applied.
     */
    quantity: number;

    /**
     * Whether the GraphQL usage quantity is raw usage or credits applied. Prefer
     * quantity and credits_applied for new clients.
     */
    quantity_type: 'usage' | 'credits';
  }
}

export declare namespace Billing {
  export { type BillingSummary as BillingSummary };
}
