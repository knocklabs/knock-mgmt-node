// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { type Logger, type LogLevel, parseLogLevel } from './internal/utils/log';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type EntriesCursorParams, EntriesCursorResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { APIKeyExchangeParams, APIKeyExchangeResponse, APIKeys } from './resources/api-keys';
import { Auth, AuthVerifyResponse } from './resources/auth';
import {
  ChannelGroup,
  ChannelGroupListParams,
  ChannelGroupRule,
  ChannelGroups,
  ChannelGroupsEntriesCursor,
} from './resources/channel-groups';
import {
  Channel,
  ChannelListParams,
  Channels,
  ChannelsEntriesCursor,
  ChatChannelSettings,
  EmailChannelSettings,
  InAppFeedChannelSettings,
  PushChannelSettings,
  SMSChannelSettings,
} from './resources/channels';
import {
  Commit,
  CommitCommitAllParams,
  CommitCommitAllResponse,
  CommitListParams,
  CommitPromoteAllParams,
  CommitPromoteAllResponse,
  CommitPromoteOneResponse,
  Commits,
  CommitsEntriesCursor,
} from './resources/commits';
import {
  EmailLayout,
  EmailLayoutListParams,
  EmailLayoutRetrieveParams,
  EmailLayoutUpsertParams,
  EmailLayoutUpsertResponse,
  EmailLayoutValidateParams,
  EmailLayoutValidateResponse,
  EmailLayouts,
  EmailLayoutsEntriesCursor,
} from './resources/email-layouts';
import {
  Environment,
  EnvironmentListParams,
  Environments,
  EnvironmentsEntriesCursor,
} from './resources/environments';
import {
  MessageType,
  MessageTypeListParams,
  MessageTypeRetrieveParams,
  MessageTypeTextField,
  MessageTypeUpsertParams,
  MessageTypeUpsertResponse,
  MessageTypeValidateParams,
  MessageTypeValidateResponse,
  MessageTypeVariant,
  MessageTypes,
  MessageTypesEntriesCursor,
} from './resources/message-types';
import {
  Partial,
  PartialListParams,
  PartialRetrieveParams,
  PartialUpsertParams,
  PartialUpsertResponse,
  PartialValidateParams,
  PartialValidateResponse,
  Partials,
  PartialsEntriesCursor,
} from './resources/partials';
import {
  ChatTemplate,
  EmailTemplate,
  InAppFeedTemplate,
  PushTemplate,
  RequestTemplate,
  SMSTemplate,
  Templates,
  WebhookTemplate,
} from './resources/templates';
import {
  Translation,
  TranslationListParams,
  TranslationRetrieveParams,
  TranslationRetrieveResponse,
  TranslationUpsertParams,
  TranslationUpsertResponse,
  TranslationValidateParams,
  TranslationValidateResponse,
  Translations,
  TranslationsEntriesCursor,
} from './resources/translations';
import { Variable, VariableListParams, Variables, VariablesEntriesCursor } from './resources/variables';
import { readEnv } from './internal/utils/env';
import { formatRequestDetails, loggerFor } from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import {
  Condition,
  ConditionGroup,
  Duration,
  SendWindow,
  Workflow,
  WorkflowActivateParams,
  WorkflowActivateResponse,
  WorkflowBatchStep,
  WorkflowBranchStep,
  WorkflowChannelStep,
  WorkflowDelayStep,
  WorkflowFetchStep,
  WorkflowListParams,
  WorkflowRetrieveParams,
  WorkflowRunParams,
  WorkflowRunResponse,
  WorkflowStep,
  WorkflowThrottleStep,
  WorkflowTriggerWorkflowStep,
  WorkflowUpsertParams,
  WorkflowUpsertResponse,
  WorkflowValidateParams,
  WorkflowValidateResponse,
  Workflows,
  WorkflowsEntriesCursor,
} from './resources/workflows/workflows';

export interface ClientOptions {
  /**
   * Defaults to process.env['KNOCK_SERVICE_TOKEN'].
   */
  serviceToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['KNOCK_MGMT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['KNOCK_MGMT_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Knock Mgmt API.
 */
export class KnockMgmt {
  serviceToken: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Knock Mgmt API.
   *
   * @param {string | undefined} [opts.serviceToken=process.env['KNOCK_SERVICE_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['KNOCK_MGMT_BASE_URL'] ?? https://control.knock.app] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('KNOCK_MGMT_BASE_URL'),
    serviceToken = readEnv('KNOCK_SERVICE_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (serviceToken === undefined) {
      throw new Errors.KnockMgmtError(
        "The KNOCK_SERVICE_TOKEN environment variable is missing or empty; either provide it, or instantiate the KnockMgmt client with an serviceToken option, like new KnockMgmt({ serviceToken: 'My Service Token' }).",
      );
    }

    const options: ClientOptions = {
      serviceToken,
      ...opts,
      baseURL: baseURL || `https://control.knock.app`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? KnockMgmt.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('KNOCK_MGMT_LOG'), "process.env['KNOCK_MGMT_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.serviceToken = serviceToken;
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ Authorization: `Bearer ${this.serviceToken}` }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: Record<string, unknown>): string {
    return Object.entries(query)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (value === null) {
          return `${encodeURIComponent(key)}=`;
        }
        throw new Errors.KnockMgmtError(
          `Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join('&');
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(path: string, query: Record<string, unknown> | null | undefined): string {
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as KnockMgmt, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    return (
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      this.fetch.call(undefined, url, fetchOptions).finally(() => {
        clearTimeout(timeout);
      })
    );
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    options: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    options = { ...options };
    const { method, path, query } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static KnockMgmt = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static KnockMgmtError = Errors.KnockMgmtError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  templates: API.Templates = new API.Templates(this);
  emailLayouts: API.EmailLayouts = new API.EmailLayouts(this);
  commits: API.Commits = new API.Commits(this);
  partials: API.Partials = new API.Partials(this);
  translations: API.Translations = new API.Translations(this);
  workflows: API.Workflows = new API.Workflows(this);
  messageTypes: API.MessageTypes = new API.MessageTypes(this);
  auth: API.Auth = new API.Auth(this);
  apiKeys: API.APIKeys = new API.APIKeys(this);
  channelGroups: API.ChannelGroups = new API.ChannelGroups(this);
  channels: API.Channels = new API.Channels(this);
  environments: API.Environments = new API.Environments(this);
  variables: API.Variables = new API.Variables(this);
}
KnockMgmt.Templates = Templates;
KnockMgmt.EmailLayouts = EmailLayouts;
KnockMgmt.Commits = Commits;
KnockMgmt.Partials = Partials;
KnockMgmt.Translations = Translations;
KnockMgmt.Workflows = Workflows;
KnockMgmt.MessageTypes = MessageTypes;
KnockMgmt.Auth = Auth;
KnockMgmt.APIKeys = APIKeys;
KnockMgmt.ChannelGroups = ChannelGroups;
KnockMgmt.Channels = Channels;
KnockMgmt.Environments = Environments;
KnockMgmt.Variables = Variables;
export declare namespace KnockMgmt {
  export type RequestOptions = Opts.RequestOptions;

  export import EntriesCursor = Pagination.EntriesCursor;
  export {
    type EntriesCursorParams as EntriesCursorParams,
    type EntriesCursorResponse as EntriesCursorResponse,
  };

  export {
    Templates as Templates,
    type ChatTemplate as ChatTemplate,
    type EmailTemplate as EmailTemplate,
    type InAppFeedTemplate as InAppFeedTemplate,
    type PushTemplate as PushTemplate,
    type RequestTemplate as RequestTemplate,
    type SMSTemplate as SMSTemplate,
    type WebhookTemplate as WebhookTemplate,
  };

  export {
    EmailLayouts as EmailLayouts,
    type EmailLayout as EmailLayout,
    type EmailLayoutUpsertResponse as EmailLayoutUpsertResponse,
    type EmailLayoutValidateResponse as EmailLayoutValidateResponse,
    type EmailLayoutsEntriesCursor as EmailLayoutsEntriesCursor,
    type EmailLayoutRetrieveParams as EmailLayoutRetrieveParams,
    type EmailLayoutListParams as EmailLayoutListParams,
    type EmailLayoutUpsertParams as EmailLayoutUpsertParams,
    type EmailLayoutValidateParams as EmailLayoutValidateParams,
  };

  export {
    Commits as Commits,
    type Commit as Commit,
    type CommitCommitAllResponse as CommitCommitAllResponse,
    type CommitPromoteAllResponse as CommitPromoteAllResponse,
    type CommitPromoteOneResponse as CommitPromoteOneResponse,
    type CommitsEntriesCursor as CommitsEntriesCursor,
    type CommitListParams as CommitListParams,
    type CommitCommitAllParams as CommitCommitAllParams,
    type CommitPromoteAllParams as CommitPromoteAllParams,
  };

  export {
    Partials as Partials,
    type Partial as Partial,
    type PartialUpsertResponse as PartialUpsertResponse,
    type PartialValidateResponse as PartialValidateResponse,
    type PartialsEntriesCursor as PartialsEntriesCursor,
    type PartialRetrieveParams as PartialRetrieveParams,
    type PartialListParams as PartialListParams,
    type PartialUpsertParams as PartialUpsertParams,
    type PartialValidateParams as PartialValidateParams,
  };

  export {
    Translations as Translations,
    type Translation as Translation,
    type TranslationRetrieveResponse as TranslationRetrieveResponse,
    type TranslationUpsertResponse as TranslationUpsertResponse,
    type TranslationValidateResponse as TranslationValidateResponse,
    type TranslationsEntriesCursor as TranslationsEntriesCursor,
    type TranslationRetrieveParams as TranslationRetrieveParams,
    type TranslationListParams as TranslationListParams,
    type TranslationUpsertParams as TranslationUpsertParams,
    type TranslationValidateParams as TranslationValidateParams,
  };

  export {
    Workflows as Workflows,
    type Condition as Condition,
    type ConditionGroup as ConditionGroup,
    type Duration as Duration,
    type SendWindow as SendWindow,
    type Workflow as Workflow,
    type WorkflowBatchStep as WorkflowBatchStep,
    type WorkflowBranchStep as WorkflowBranchStep,
    type WorkflowChannelStep as WorkflowChannelStep,
    type WorkflowDelayStep as WorkflowDelayStep,
    type WorkflowFetchStep as WorkflowFetchStep,
    type WorkflowStep as WorkflowStep,
    type WorkflowThrottleStep as WorkflowThrottleStep,
    type WorkflowTriggerWorkflowStep as WorkflowTriggerWorkflowStep,
    type WorkflowActivateResponse as WorkflowActivateResponse,
    type WorkflowRunResponse as WorkflowRunResponse,
    type WorkflowUpsertResponse as WorkflowUpsertResponse,
    type WorkflowValidateResponse as WorkflowValidateResponse,
    type WorkflowsEntriesCursor as WorkflowsEntriesCursor,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowActivateParams as WorkflowActivateParams,
    type WorkflowRunParams as WorkflowRunParams,
    type WorkflowUpsertParams as WorkflowUpsertParams,
    type WorkflowValidateParams as WorkflowValidateParams,
  };

  export {
    MessageTypes as MessageTypes,
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

  export { Auth as Auth, type AuthVerifyResponse as AuthVerifyResponse };

  export {
    APIKeys as APIKeys,
    type APIKeyExchangeResponse as APIKeyExchangeResponse,
    type APIKeyExchangeParams as APIKeyExchangeParams,
  };

  export {
    ChannelGroups as ChannelGroups,
    type ChannelGroup as ChannelGroup,
    type ChannelGroupRule as ChannelGroupRule,
    type ChannelGroupsEntriesCursor as ChannelGroupsEntriesCursor,
    type ChannelGroupListParams as ChannelGroupListParams,
  };

  export {
    Channels as Channels,
    type Channel as Channel,
    type ChatChannelSettings as ChatChannelSettings,
    type EmailChannelSettings as EmailChannelSettings,
    type InAppFeedChannelSettings as InAppFeedChannelSettings,
    type PushChannelSettings as PushChannelSettings,
    type SMSChannelSettings as SMSChannelSettings,
    type ChannelsEntriesCursor as ChannelsEntriesCursor,
    type ChannelListParams as ChannelListParams,
  };

  export {
    Environments as Environments,
    type Environment as Environment,
    type EnvironmentsEntriesCursor as EnvironmentsEntriesCursor,
    type EnvironmentListParams as EnvironmentListParams,
  };

  export {
    Variables as Variables,
    type Variable as Variable,
    type VariablesEntriesCursor as VariablesEntriesCursor,
    type VariableListParams as VariableListParams,
  };

  export type PageInfo = API.PageInfo;
}
