// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messageTypes', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.messageTypes.retrieve('email', { environment: 'development' });
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
    const response = await client.messageTypes.retrieve('email', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.messageTypes.list({ environment: 'development' });
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
    const response = await client.messageTypes.list({
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
    const responsePromise = client.messageTypes.upsert('email', {
      environment: 'development',
      message_type: {
        description: 'This is a message type',
        name: 'My Message Type',
        preview: '<div>Hello, world!</div>',
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
    const response = await client.messageTypes.upsert('email', {
      environment: 'development',
      message_type: {
        description: 'This is a message type',
        name: 'My Message Type',
        preview: '<div>Hello, world!</div>',
        icon_name: 'icon_name',
        semver: '1.0.0',
        variants: [
          {
            fields: [
              {
                key: 'text_field',
                label: 'My text field',
                type: 'text',
                settings: {
                  default: 'A placeholder',
                  description: 'A description of the text field',
                  max_length: 100,
                  min_length: 10,
                  required: true,
                },
              },
            ],
            key: 'default',
            name: 'Default',
          },
        ],
      },
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.messageTypes.validate('email', {
      environment: 'development',
      message_type: {
        description: 'This is a message type',
        name: 'My Message Type',
        preview: '<div>Hello, world!</div>',
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
    const response = await client.messageTypes.validate('email', {
      environment: 'development',
      message_type: {
        description: 'This is a message type',
        name: 'My Message Type',
        preview: '<div>Hello, world!</div>',
        icon_name: 'icon_name',
        semver: '1.0.0',
        variants: [
          {
            fields: [
              {
                key: 'text_field',
                label: 'My text field',
                type: 'text',
                settings: {
                  default: 'A placeholder',
                  description: 'A description of the text field',
                  max_length: 100,
                  min_length: 10,
                  required: true,
                },
              },
            ],
            key: 'default',
            name: 'Default',
          },
        ],
      },
      branch: 'feature-branch',
    });
  });
});
