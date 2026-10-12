// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reusableRequests', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.reusableRequests.retrieve('fetch-user');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reusableRequests.retrieve(
        'fetch-user',
        {
          annotate: true,
          branch: 'feature-branch',
          environment: 'development',
          hide_uncommitted_changes: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.reusableRequests.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reusableRequests.list(
        {
          after: 'after',
          annotate: true,
          before: 'before',
          branch: 'feature-branch',
          environment: 'development',
          hide_uncommitted_changes: true,
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.reusableRequests.archive('fetch-user');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('archive: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reusableRequests.archive(
        'fetch-user',
        { environment: 'development' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.reusableRequests.upsert('fetch-user', {
      reusable_request: {
        settings: { method: 'get' },
        type: 'http_fetch',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.reusableRequests.upsert('fetch-user', {
      reusable_request: {
        settings: {
          method: 'get',
          body: null,
          data_input_schema: { foo: 'bar' },
          data_input_values_str: 'data_input_values_str',
          headers: [{ key: 'X-API-Key', value: '1234567890' }],
          query_params: [{ key: 'key', value: 'value' }],
          response_path: null,
          signing_key: null,
          url: 'https://example.com',
        },
        type: 'http_fetch',
        conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
        description: 'Loads a user from the API.',
        name: 'Fetch user',
      },
      allow_empty: true,
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
      environment: 'development',
      force: true,
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.reusableRequests.validate('fetch-user', {
      reusable_request: {
        settings: { method: 'get' },
        type: 'http_fetch',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('validate: required and optional params', async () => {
    const response = await client.reusableRequests.validate('fetch-user', {
      reusable_request: {
        settings: {
          method: 'get',
          body: null,
          data_input_schema: { foo: 'bar' },
          data_input_values_str: 'data_input_values_str',
          headers: [{ key: 'X-API-Key', value: '1234567890' }],
          query_params: [{ key: 'key', value: 'value' }],
          response_path: null,
          signing_key: null,
          url: 'https://example.com',
        },
        type: 'http_fetch',
        conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
        description: 'Loads a user from the API.',
        name: 'Fetch user',
      },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
