// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({ serviceToken: 'My Service Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource emailLayouts', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.emailLayouts.retrieve('email_layout_key', { environment: 'development' });
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
    const response = await client.emailLayouts.retrieve('email_layout_key', {
    environment: 'development',
    annotate: true,
    branch: 'feature-branch',
    hide_uncommitted_changes: true,
  });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.emailLayouts.list({ environment: 'development' });
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
    const response = await client.emailLayouts.list({
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
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.emailLayouts.upsert('email_layout_key', {
    environment: 'development',
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
    environment: 'development',
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
    annotate: true,
    branch: 'feature-branch',
    commit: true,
    commit_message: 'commit_message',
    force: true,
  });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.emailLayouts.validate('email_layout_key', {
    environment: 'development',
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
    environment: 'development',
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
  });
  });
});
