// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource partials', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.partials.retrieve('partial_key', { environment: 'development' });
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
    const response = await client.partials.retrieve('partial_key', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.partials.list({ environment: 'development' });
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
    const response = await client.partials.list({
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
    const responsePromise = client.partials.upsert('partial_key', {
      environment: 'development',
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
      environment: 'development',
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
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.partials.validate('partial_key', {
      environment: 'development',
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
      environment: 'development',
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
    });
  });
});
