// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/mgmt';

const client = new Knock({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steps', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('previewTemplate: required and optional params', async () => {
    const response = await client.workflows.steps.previewTemplate('step_ref', {
      workflow_key: 'workflow_key',
      environment: 'development',
      recipient: 'dnedry',
      actor: 'dnedry',
      data: { park_id: 'bar' },
      tenant: 'acme-corp',
    });
  });
});
