// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource broadcasts', () => {
  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.broadcasts.retrieve('broadcast_key', { environment: 'development' });
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
    const response = await client.broadcasts.retrieve('broadcast_key', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('list: only required params', async () => {
    const responsePromise = client.broadcasts.list({ environment: 'development' });
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
    const response = await client.broadcasts.list({
      environment: 'development',
      after: 'after',
      annotate: true,
      before: 'before',
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
      limit: 0,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.broadcasts.cancel('broadcast_key', { environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('cancel: required and optional params', async () => {
    const response = await client.broadcasts.cancel('broadcast_key', {
      environment: 'development',
      branch: 'feature-branch',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('send: only required params', async () => {
    const responsePromise = client.broadcasts.send('broadcast_key', { environment: 'development' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('send: required and optional params', async () => {
    const response = await client.broadcasts.send('broadcast_key', {
      environment: 'development',
      branch: 'feature-branch',
      send_at: '2024-03-20T10:00:00Z',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.broadcasts.upsert('broadcast_key', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('upsert: required and optional params', async () => {
    const response = await client.broadcasts.upsert('broadcast_key', {
      environment: 'development',
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
              all: [{ operator: 'equal_to', variable: 'recipient.property', argument: 'some_property' }],
            },
            description: 'This is a description of the channel step',
            name: 'Channel 1',
            send_windows: [{ day: 'monday', type: 'send', from: '18:11:19.117Z', until: '18:11:19.117Z' }],
          },
        ],
        categories: ['announcement'],
        description: 'A broadcast to all users',
        scheduled_at: '2019-12-27T18:11:19.117Z',
        settings: { is_commercial: true, override_preferences: false },
        target_audience_key: 'all-users',
      },
      annotate: true,
      branch: 'feature-branch',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('validate: only required params', async () => {
    const responsePromise = client.broadcasts.validate('broadcast_key', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('validate: required and optional params', async () => {
    const response = await client.broadcasts.validate('broadcast_key', {
      environment: 'development',
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
              all: [{ operator: 'equal_to', variable: 'recipient.property', argument: 'some_property' }],
            },
            description: 'This is a description of the channel step',
            name: 'Channel 1',
            send_windows: [{ day: 'monday', type: 'send', from: '18:11:19.117Z', until: '18:11:19.117Z' }],
          },
        ],
        categories: ['announcement'],
        description: 'A broadcast to all users',
        scheduled_at: '2019-12-27T18:11:19.117Z',
        settings: { is_commercial: true, override_preferences: false },
        target_audience_key: 'all-users',
      },
      branch: 'feature-branch',
    });
  });
});
