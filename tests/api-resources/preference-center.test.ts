// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preferenceCenter', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.preferenceCenter.retrieve();
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
      client.preferenceCenter.retrieve({ environment: 'development' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('reset', async () => {
    const responsePromise = client.preferenceCenter.reset();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.preferenceCenter.reset({ environment: 'development' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.preferenceCenter.upsert({
      config: {
        body: 'Select which communications you’d like to receive from us.',
        rows: [
          {
            description: 'Receive promotional and non-essential notifications.',
            name: 'Commercial messages',
            type: 'commercial_subscribed',
          },
        ],
        show_account_name: true,
        title: 'Manage preferences',
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
    const response = await client.preferenceCenter.upsert({
      config: {
        body: 'Select which communications you’d like to receive from us.',
        rows: [
          {
            description: 'Receive promotional and non-essential notifications.',
            name: 'Commercial messages',
            type: 'commercial_subscribed',
          },
        ],
        show_account_name: true,
        title: 'Manage preferences',
      },
      environment: 'development',
      enabled: true,
    });
  });
});
