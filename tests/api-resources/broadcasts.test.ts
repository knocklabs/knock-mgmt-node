// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource broadcasts', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.broadcasts.retrieve('broadcast_key');
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
      client.broadcasts.retrieve(
        'broadcast_key',
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
    const responsePromise = client.broadcasts.list();
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
      client.broadcasts.list(
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
  test.skip('cancel', async () => {
    const responsePromise = client.broadcasts.cancel('broadcast_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.broadcasts.cancel(
        'broadcast_key',
        { branch: 'feature-branch', environment: 'development' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.broadcasts.run('broadcast_key', { recipient: { id: 'user_1' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.broadcasts.run('broadcast_key', {
      recipient: { id: 'user_1' },
      branch: 'feature-branch',
      environment: 'development',
      settings: { sandbox_mode: true, skip_delay: true },
      tenant: 'tenant_1',
    });
  });

  // Mock server tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.broadcasts.send('broadcast_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.broadcasts.send(
        'broadcast_key',
        {
          branch: 'feature-branch',
          environment: 'development',
          send_at: '2024-03-20T10:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.broadcasts.upsert('broadcast_key', {
      broadcast: {
        name: 'My Broadcast',
        steps: [
          {
            ref: 'channel_1',
            template: { markdown_body: 'Hello **{{ recipient.name }}**' },
            type: 'channel',
          },
        ],
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
    const response = await client.broadcasts.upsert('broadcast_key', {
      broadcast: {
        name: 'My Broadcast',
        steps: [
          {
            ref: 'channel_1',
            template: {
              markdown_body: 'Hello **{{ recipient.name }}**',
              action_buttons: [{ action: 'https://example.com', label: 'Button 1' }],
              action_url: '{{ vars.app_url }}',
            },
            type: 'channel',
            channel_group_key: null,
            channel_key: 'in-app-feed',
            channel_overrides: { link_tracking: true },
            channel_type: 'in_app_feed',
            conditions: {
              all: [
                {
                  operator: 'equal_to',
                  variable: 'recipient.property',
                  argument: 'some_property',
                },
              ],
            },
            description: 'This is a description of the channel step',
            name: 'Channel 1',
            send_windows: [
              {
                day: 'monday',
                type: 'send',
                from: '09:00',
                until: '17:00',
              },
            ],
          },
        ],
        categories: ['announcement'],
        description: 'A broadcast to all users',
        goal_attachment: { goal_key: 'trial-conversion', attribution_window_days: 7 },
        scheduled_at: '2019-12-27T18:11:19.117Z',
        settings: { is_commercial: true, override_preferences: false },
        tags: ['in-review'],
        target_audience_key: 'all-users',
      },
      annotate: true,
      branch: 'feature-branch',
      environment: 'development',
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.broadcasts.validate('broadcast_key', {
      broadcast: {
        name: 'My Broadcast',
        steps: [
          {
            ref: 'channel_1',
            template: { markdown_body: 'Hello **{{ recipient.name }}**' },
            type: 'channel',
          },
        ],
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
    const response = await client.broadcasts.validate('broadcast_key', {
      broadcast: {
        name: 'My Broadcast',
        steps: [
          {
            ref: 'channel_1',
            template: {
              markdown_body: 'Hello **{{ recipient.name }}**',
              action_buttons: [{ action: 'https://example.com', label: 'Button 1' }],
              action_url: '{{ vars.app_url }}',
            },
            type: 'channel',
            channel_group_key: null,
            channel_key: 'in-app-feed',
            channel_overrides: { link_tracking: true },
            channel_type: 'in_app_feed',
            conditions: {
              all: [
                {
                  operator: 'equal_to',
                  variable: 'recipient.property',
                  argument: 'some_property',
                },
              ],
            },
            description: 'This is a description of the channel step',
            name: 'Channel 1',
            send_windows: [
              {
                day: 'monday',
                type: 'send',
                from: '09:00',
                until: '17:00',
              },
            ],
          },
        ],
        categories: ['announcement'],
        description: 'A broadcast to all users',
        goal_attachment: { goal_key: 'trial-conversion', attribution_window_days: 7 },
        scheduled_at: '2019-12-27T18:11:19.117Z',
        settings: { is_commercial: true, override_preferences: false },
        tags: ['in-review'],
        target_audience_key: 'all-users',
      },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
