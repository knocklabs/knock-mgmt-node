// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource goals', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.goals.retrieve('goal_key', { environment: 'development' });
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
    const response = await client.goals.retrieve('goal_key', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.goals.list({ environment: 'development' });
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
    const response = await client.goals.list({
      environment: 'development',
      after: 'after',
      annotate: true,
      before: 'before',
      branch: 'feature-branch',
      limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.goals.archive('goal_key', { environment: 'development' });
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
    const response = await client.goals.archive('goal_key', { environment: 'development' });
  });

  // Mock server tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.goals.clone('goal_key', {
      environment: 'development',
      clone: {
        environment: 'production',
        key: 'trial-conversion-copy',
        name: 'Trial Conversion Copy',
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
  test.skip('clone: required and optional params', async () => {
    const response = await client.goals.clone('goal_key', {
      environment: 'development',
      clone: {
        environment: 'production',
        key: 'trial-conversion-copy',
        name: 'Trial Conversion Copy',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.goals.upsert('goal_key', {
      environment: 'development',
      goal: {
        condition: { event: { event_type: 'recipient' } },
        name: 'Trial Conversion',
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
    const response = await client.goals.upsert('goal_key', {
      environment: 'development',
      goal: {
        condition: {
          event: { event_type: 'recipient', event_key: 'updated' },
          match_conditions: [
            {
              all: [
                {
                  operator: 'equal_to',
                  variable: 'recipient.property',
                  argument: 'some_property',
                },
              ],
            },
          ],
        },
        name: 'Trial Conversion',
        description: 'Tracks when a trial user converts to paid',
      },
      annotate: true,
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.goals.validate('goal_key', {
      environment: 'development',
      goal: {
        condition: { event: { event_type: 'recipient' } },
        name: 'Trial Conversion',
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
    const response = await client.goals.validate('goal_key', {
      environment: 'development',
      goal: {
        condition: {
          event: { event_type: 'recipient', event_key: 'updated' },
          match_conditions: [
            {
              all: [
                {
                  operator: 'equal_to',
                  variable: 'recipient.property',
                  argument: 'some_property',
                },
              ],
            },
          ],
        },
        name: 'Trial Conversion',
        description: 'Tracks when a trial user converts to paid',
      },
      branch: 'feature-branch',
    });
  });
});
