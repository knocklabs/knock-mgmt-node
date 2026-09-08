// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emailLayouts', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailLayouts.retrieve(
        'email_layout_key',
        {
          annotate: true,
          branch: 'feature-branch',
          environment: 'development',
          hide_uncommitted_changes: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailLayouts.list(
        {
          after: 'after',
          annotate: true,
          before: 'before',
          branch: 'feature-branch',
          environment: 'development',
          hide_uncommitted_changes: true,
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('preview: only required params', async () => {
    const responsePromise = client.emailLayouts.preview({
      email_layout: {
        html_layout: '<html><body>Hello {{ recipient.name }}! {{ content }}</body></html>',
        name: 'Transactional',
        text_layout: 'Hello {{ recipient.name }}! {{ content }}',
      },
      recipient: 'user_123',
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
  test.skip('preview: required and optional params', async () => {
    const response = await client.emailLayouts.preview({
      email_layout: {
        html_layout: '<html><body>Hello {{ recipient.name }}! {{ content }}</body></html>',
        name: 'Transactional',
        text_layout: 'Hello {{ recipient.name }}! {{ content }}',
        branding_overrides: {
          dark_icon_url: 'https://cdn.example.com/icon-dark.png',
          dark_logo_url: 'https://cdn.example.com/logo-dark.png',
          dark_primary_color: '#1A1A2E',
          dark_primary_color_contrast: '#FFFFFF',
          icon_url: 'https://cdn.example.com/icon-light.png',
          logo_url: 'https://cdn.example.com/logo-light.png',
          primary_color: '#4F46E5',
          primary_color_contrast: '#FFFFFF',
          primary_text_color: '#111827',
          secondary_text_color: '#6B7280',
        },
        footer_links: [{ text: 'Example', url: 'http://example.com' }],
        is_mjml: true,
      },
      recipient: 'user_123',
      branch: 'feature-branch',
      environment: 'development',
      actor: { id: 'project_1', collection: 'projects' },
      data: { order_id: 'bar' },
      tenant: 'tenant',
      workflow: { key: 'key', categories: ['string'] },
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.emailLayouts.upsert('email_layout_key', {
      email_layout: {
        html_layout: '<html><body>Hello, world!</body></html>',
        name: 'Transactional',
        text_layout: 'Hello, world!',
        branding_overrides: {
          dark_icon_url: 'https://cdn.example.com/icon-dark.png',
          dark_logo_url: 'https://cdn.example.com/logo-dark.png',
          dark_primary_color: '#1A1A2E',
          dark_primary_color_contrast: '#FFFFFF',
          icon_url: 'https://cdn.example.com/icon-light.png',
          logo_url: 'https://cdn.example.com/logo-light.png',
          primary_color: '#4F46E5',
          primary_color_contrast: '#FFFFFF',
          primary_text_color: '#111827',
          secondary_text_color: '#6B7280',
        },
        footer_links: [{ text: 'Example', url: 'http://example.com' }],
        is_mjml: true,
      },
      allow_empty: true,
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
      environment: 'development',
      force: true,
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('validate: required and optional params', async () => {
    const response = await client.emailLayouts.validate('email_layout_key', {
      email_layout: {
        html_layout: '<html><body>Hello, world!</body></html>',
        name: 'Transactional',
        text_layout: 'Hello, world!',
        branding_overrides: {
          dark_icon_url: 'https://cdn.example.com/icon-dark.png',
          dark_logo_url: 'https://cdn.example.com/logo-dark.png',
          dark_primary_color: '#1A1A2E',
          dark_primary_color_contrast: '#FFFFFF',
          icon_url: 'https://cdn.example.com/icon-light.png',
          logo_url: 'https://cdn.example.com/logo-light.png',
          primary_color: '#4F46E5',
          primary_color_contrast: '#FFFFFF',
          primary_text_color: '#111827',
          secondary_text_color: '#6B7280',
        },
        footer_links: [{ text: 'Example', url: 'http://example.com' }],
        is_mjml: true,
      },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
