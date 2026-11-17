// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedback', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.feedback.create({
      message: 'Please name the missing variable in workflow validation errors.',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.feedback.create({
      message: 'Please name the missing variable in workflow validation errors.',
      context: {
        actual: 'actual',
        expected: 'An error that identifies the missing variable.',
        impact: 'impact',
        model: 'claude-opus-5-5',
        product: 'product',
        task: 'task',
        tool: 'upsertWorkflow',
        type: 'friction',
      },
    });
  });
});
