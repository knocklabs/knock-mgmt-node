// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource translations', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.translations.retrieve('locale_code');
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
      client.translations.retrieve(
        'locale_code',
        {
          annotate: true,
          branch: 'feature-branch',
          environment: 'development',
          format: 'json',
          hide_uncommitted_changes: true,
          namespace: 'namespace',
          tenant: 'tenant',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.translations.list();
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
      client.translations.list(
        {
          after: 'after',
          annotate: true,
          before: 'before',
          branch: 'feature-branch',
          environment: 'development',
          format: 'json',
          hide_uncommitted_changes: true,
          limit: 0,
          locale_code: 'locale_code',
          namespace: 'namespace',
          tenant: 'tenant',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.translations.upsert('locale_code', {
      namespace: 'namespace',
      translation: { content: '{"hello":"Hello, world!"}', format: 'json' },
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
    const response = await client.translations.upsert('locale_code', {
      namespace: 'namespace',
      translation: { content: '{"hello":"Hello, world!"}', format: 'json' },
      allow_empty: true,
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
      environment: 'development',
      force: true,
      format: 'json',
      tenant: 'tenant',
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.translations.validate('locale_code', {
      translation: { content: '{"hello":"Hello, world!"}', format: 'json' },
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
    const response = await client.translations.validate('locale_code', {
      translation: { content: '{"hello":"Hello, world!"}', format: 'json' },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
