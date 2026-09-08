// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource partials', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.partials.retrieve('partial_key');
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
      client.partials.retrieve(
        'partial_key',
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
    const responsePromise = client.partials.list();
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
      client.partials.list(
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
    const responsePromise = client.partials.preview({
      partial: {
        content: '<p>Hello, {{ name }}!</p>',
        name: 'My Partial',
        type: 'html',
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
  test.skip('preview: required and optional params', async () => {
    const response = await client.partials.preview({
      partial: {
        content: '<p>Hello, {{ name }}!</p>',
        name: 'My Partial',
        type: 'html',
        description: 'This is a test partial',
        icon_name: 'icon_name',
        input_schema: [
          {
            key: 'text_field',
            label: 'My text field',
            type: 'text',
            settings: {
              default: 'A placeholder',
              description: 'A description of the text field',
              max_length: 100,
              min_length: 10,
              placeholder: 'A placeholder for the field.',
              required: true,
            },
          },
        ],
        visual_block_enabled: true,
      },
      branch: 'feature-branch',
      environment: 'development',
      data: { name: 'bar' },
      layout: { key: 'key' },
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.partials.upsert('partial_key', {
      partial: {
        content: '<p>Hello, world!</p>',
        name: 'My Partial',
        type: 'html',
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
    const response = await client.partials.upsert('partial_key', {
      partial: {
        content: '<p>Hello, world!</p>',
        name: 'My Partial',
        type: 'html',
        description: 'This is a test partial',
        icon_name: 'icon_name',
        input_schema: [
          {
            key: 'text_field',
            label: 'My text field',
            type: 'text',
            settings: {
              default: 'A placeholder',
              description: 'A description of the text field',
              max_length: 100,
              min_length: 10,
              placeholder: 'A placeholder for the field.',
              required: true,
            },
          },
        ],
        visual_block_enabled: true,
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
    const responsePromise = client.partials.validate('partial_key', {
      partial: {
        content: '<p>Hello, world!</p>',
        name: 'My Partial',
        type: 'html',
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
    const response = await client.partials.validate('partial_key', {
      partial: {
        content: '<p>Hello, world!</p>',
        name: 'My Partial',
        type: 'html',
        description: 'This is a test partial',
        icon_name: 'icon_name',
        input_schema: [
          {
            key: 'text_field',
            label: 'My text field',
            type: 'text',
            settings: {
              default: 'A placeholder',
              description: 'A description of the text field',
              max_length: 100,
              min_length: 10,
              placeholder: 'A placeholder for the field.',
              required: true,
            },
          },
        ],
        visual_block_enabled: true,
      },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
