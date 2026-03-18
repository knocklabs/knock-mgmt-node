// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audiences', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.audiences.retrieve('audience_key', { environment: 'development' });
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
    const response = await client.audiences.retrieve('audience_key', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.audiences.list({ environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.audiences.list({
      environment: 'development',
      after: 'after',
      annotate: true,
      before: 'before',
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.audiences.archive('audience_key', { environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('archive: required and optional params', async () => {
    const response = await client.audiences.archive('audience_key', { environment: 'development' });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.audiences.upsert('audience_key', {
      environment: 'development',
      audience: { name: 'Premium users', type: 'dynamic' },
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
    const response = await client.audiences.upsert('audience_key', {
      environment: 'development',
      audience: {
        name: 'Premium users',
        type: 'dynamic',
        description: 'Users on the premium plan',
        segments: [
          {
            conditions: [
              {
                operator: 'equal_to',
                property: 'recipient.plan',
                argument: 'premium',
              },
            ],
          },
        ],
      },
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
      force: true,
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.audiences.validate('audience_key', {
      environment: 'development',
      audience: { name: 'Premium users', type: 'dynamic' },
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
    const response = await client.audiences.validate('audience_key', {
      environment: 'development',
      audience: {
        name: 'Premium users',
        type: 'dynamic',
        description: 'Users on the premium plan',
        segments: [
          {
            conditions: [
              {
                operator: 'equal_to',
                property: 'recipient.plan',
                argument: 'premium',
              },
            ],
          },
        ],
      },
      branch: 'feature-branch',
    });
  });
});
