// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dataSources', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.dataSources.retrieve('key', { environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.dataSources.retrieve('key', { environment: 'development', annotate: true });
  });

  // Mock server tests are disabled
  test.skip('listEvents', async () => {
    const responsePromise = client.dataSources.listEvents('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataSources.listEvents(
        'key',
        { environment: 'development' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listLogs: only required params', async () => {
    const responsePromise = client.dataSources.listLogs('key', { environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listLogs: required and optional params', async () => {
    const response = await client.dataSources.listLogs('key', {
      environment: 'development',
      id: 'id',
      after: 'after',
      before: 'before',
      date: 'date',
      ending_at: '2019-12-27T18:11:19.117Z',
      event: 'event',
      include: ['actions'],
      limit: 0,
      starting_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('listProviders', async () => {
    const responsePromise = client.dataSources.listProviders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSources', async () => {
    const responsePromise = client.dataSources.listSources();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSources: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataSources.listSources(
        {
          annotate: true,
          environment: 'development',
          include: ['environment_settings'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('rehearse: only required params', async () => {
    const responsePromise = client.dataSources.rehearse('key', {
      environment: 'development',
      payload: { body: 'bar', headers: 'bar' },
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
  test.skip('rehearse: required and optional params', async () => {
    const response = await client.dataSources.rehearse('key', {
      environment: 'development',
      payload: { body: 'bar', headers: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveProvider', async () => {
    const responsePromise = client.dataSources.retrieveProvider('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveProvider: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataSources.retrieveProvider(
        'key',
        { include: ['branding'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.dataSources.retrieveStatus('key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataSources.retrieveStatus(
        'key',
        { environment: 'development' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.dataSources.upsert('key', {
      environment: 'development',
      source: { name: 'Universal HTTP Source' },
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
    const response = await client.dataSources.upsert('key', {
      environment: 'development',
      source: {
        name: 'Universal HTTP Source',
        custom_image_url: null,
        description: 'Receives events over HTTP.',
        environment_settings: {
          development: {
            mappings: [
              {
                action_type: 'workflows_trigger',
                event_type: 'event_type',
                action_parameters: { foo: 'bar' },
                inactive_at: '2019-12-27T18:11:19.117Z',
                is_deleted: true,
              },
            ],
            settings: {
              enforce_verification: false,
              event_type_path: 'body.event',
              idempotency_key_path: 'body.messageId',
              preprocess_script: { language: 'javascript', source: 'return event;' },
              timestamp_path: 'body.timestamp',
            },
          },
        },
        preconfigured_provider: 'preconfigured_provider',
      },
      annotate: true,
    });
  });
});
