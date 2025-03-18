// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Knock from '@knocklabs/mgmt';

const client = new Knock({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emailLayouts', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieve', async () => {
    const responsePromise = client.emailLayouts.retrieve('email_layout_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailLayouts.retrieve(
        'email_layout_key',
        { annotate: true, environment: 'development', hide_uncommitted_changes: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list', async () => {
    const responsePromise = client.emailLayouts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailLayouts.list(
        {
          after: 'after',
          annotate: true,
          before: 'before',
          environment: 'development',
          hide_uncommitted_changes: true,
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Knock.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.emailLayouts.upsert('email_layout_key', {
      email_layout: {
        html_layout: '<html><body>Hello, world!</body></html>',
        name: 'Transactional',
        text_layout: 'Hello, world!',
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('upsert: required and optional params', async () => {
    const response = await client.emailLayouts.upsert('email_layout_key', {
      email_layout: {
        html_layout: '<html><body>Hello, world!</body></html>',
        name: 'Transactional',
        text_layout: 'Hello, world!',
        footer_links: [{ text: 'Example', url: 'http://example.com' }],
      },
      annotate: true,
      commit: true,
      commit_message: 'commit_message',
      environment: 'development',
      hide_uncommitted_changes: true,
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('validate: only required params', async () => {
    const responsePromise = client.emailLayouts.validate('email_layout_key', {
      email_layout: {
        html_layout: '<html><body>Hello, world!</body></html>',
        name: 'Transactional',
        text_layout: 'Hello, world!',
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('validate: required and optional params', async () => {
    const response = await client.emailLayouts.validate('email_layout_key', {
      email_layout: {
        html_layout: '<html><body>Hello, world!</body></html>',
        name: 'Transactional',
        text_layout: 'Hello, world!',
        footer_links: [{ text: 'Example', url: 'http://example.com' }],
      },
      annotate: true,
      environment: 'development',
      hide_uncommitted_changes: true,
    });
  });
});
