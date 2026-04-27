// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commits', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.commits.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.commits.list({ environment: 'development' });
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
    const response = await client.commits.list({
      environment: 'development',
      after: 'after',
      before: 'before',
      branch: 'feature-branch',
      limit: 0,
      promoted: true,
      resource_id: 'resource_id',
      resource_type: 'audience',
    });
  });

  // Mock server tests are disabled
  test.skip('commitAll: only required params', async () => {
    const responsePromise = client.commits.commitAll({ environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('commitAll: required and optional params', async () => {
    const response = await client.commits.commitAll({
      environment: 'development',
      branch: 'feature-branch',
      commit_message: 'commit_message',
      resource_id: 'resource_id',
      resource_type: 'audience',
    });
  });

  // Mock server tests are disabled
  test.skip('promoteAll: only required params', async () => {
    const responsePromise = client.commits.promoteAll({ to_environment: 'to_environment' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('promoteAll: required and optional params', async () => {
    const response = await client.commits.promoteAll({
      to_environment: 'to_environment',
      branch: 'branch',
      resource_id: 'resource_id',
      resource_type: 'audience',
    });
  });

  // Mock server tests are disabled
  test.skip('promoteOne', async () => {
    const responsePromise = client.commits.promoteOne('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
