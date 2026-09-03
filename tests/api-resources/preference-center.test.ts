// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preferenceCenter', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.preferenceCenter.retrieve({ environment: 'development' });
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
    const response = await client.preferenceCenter.retrieve({ environment: 'development' });
  });

  // Mock server tests are disabled
  test.skip('reset: only required params', async () => {
    const responsePromise = client.preferenceCenter.reset({ environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reset: required and optional params', async () => {
    const response = await client.preferenceCenter.reset({ environment: 'development' });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.preferenceCenter.upsert({
      environment: 'development',
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
      environment: 'development',
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
      enabled: true,
    });
  });
});
