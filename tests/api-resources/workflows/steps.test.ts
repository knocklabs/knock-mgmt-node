// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steps', () => {
  // Mock server doesn't support callbacks yet
  test.skip('previewTemplate: only required params', async () => {
    const responsePromise = client.workflows.steps.previewTemplate('step_ref', {
      workflow_key: 'workflow_key',
      environment: 'development',
      recipient: 'dnedry',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server doesn't support callbacks yet
  test.skip('previewTemplate: required and optional params', async () => {
    const response = await client.workflows.steps.previewTemplate('step_ref', {
      workflow_key: 'workflow_key',
      environment: 'development',
      recipient: 'dnedry',
      branch: 'feature-branch',
      actor: 'dnedry',
      data: { park_id: 'bar' },
      tenant: 'acme-corp',
    });
  });
});
