// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource translations', () => {
  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.translations.retrieve('locale_code', { environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.translations.retrieve('locale_code', {
      environment: 'development',
      annotate: true,
      format: 'json',
      hide_uncommitted_changes: true,
      namespace: 'namespace',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('list: only required params', async () => {
    const responsePromise = client.translations.list({ environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('list: required and optional params', async () => {
    const response = await client.translations.list({
      environment: 'development',
      after: 'after',
      annotate: true,
      before: 'before',
      format: 'json',
      hide_uncommitted_changes: true,
      limit: 0,
      locale_code: 'locale_code',
      namespace: 'namespace',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.translations.upsert('locale_code', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('upsert: required and optional params', async () => {
    const response = await client.translations.upsert('locale_code', {
      environment: 'development',
      namespace: 'namespace',
      translation: { content: '{"hello":"Hello, world!"}', format: 'json' },
      annotate: true,
      commit: true,
      commit_message: 'commit_message',
      format: 'json',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('validate: only required params', async () => {
    const responsePromise = client.translations.validate('locale_code', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('validate: required and optional params', async () => {
    const response = await client.translations.validate('locale_code', {
      environment: 'development',
      translation: { content: '{"hello":"Hello, world!"}', format: 'json' },
    });
  });
});
