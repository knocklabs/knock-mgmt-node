// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMapi from 'knock-mapi';

const client = new KnockMapi({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messageTypes', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieve', async () => {
    const responsePromise = client.messageTypes.retrieve('email');
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
      client.messageTypes.retrieve(
        'email',
        { annotate: true, environment: 'development', hide_uncommitted_changes: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMapi.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list', async () => {
    const responsePromise = client.messageTypes.list();
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
      client.messageTypes.list(
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
    ).rejects.toThrow(KnockMapi.NotFoundError);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.messageTypes.upsert('email', {
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('upsert: required and optional params', async () => {
    const response = await client.messageTypes.upsert('email', {
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
                type: 'text',
                label: 'Label',
                settings: {
                  default: 'A placeholder',
                  description: 'A description of the text field',
                  max_length: 100,
                  min_length: 10,
                  required: true,
                },
                value: 'Hello, world!',
              },
            ],
            key: 'default',
            name: 'Default',
          },
        ],
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
    const responsePromise = client.messageTypes.validate('email', {
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('validate: required and optional params', async () => {
    const response = await client.messageTypes.validate('email', {
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
                type: 'text',
                label: 'Label',
                settings: {
                  default: 'A placeholder',
                  description: 'A description of the text field',
                  max_length: 100,
                  min_length: 10,
                  required: true,
                },
                value: 'Hello, world!',
              },
            ],
            key: 'default',
            name: 'Default',
          },
        ],
      },
      annotate: true,
      hide_uncommitted_changes: true,
    });
  });
});
