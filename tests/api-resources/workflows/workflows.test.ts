// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.workflows.retrieve('workflow_key');
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
      client.workflows.retrieve(
        'workflow_key',
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
    const responsePromise = client.workflows.list();
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
      client.workflows.list(
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
  test.skip('activate: only required params', async () => {
    const responsePromise = client.workflows.activate('workflow_key', { status: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('activate: required and optional params', async () => {
    const response = await client.workflows.activate('workflow_key', {
      status: true,
      branch: 'feature-branch',
      environment: 'development',
    });
  });

  // Mock server tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.workflows.run('workflow_key', { recipients: [{ id: 'user_1' }] });
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
    const response = await client.workflows.run('workflow_key', {
      recipients: [
        {
          id: 'user_1',
          email: 'jane@example.com',
          name: 'Jane Doe',
        },
      ],
      branch: 'feature-branch',
      environment: 'development',
      actor: 'user_1',
      cancellation_key: 'cancellation_key',
      data: { park_id: 'bar' },
      tenant: 'tenant',
    });
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.workflows.upsert('workflow_key', {
      workflow: {
        name: 'My Workflow',
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
    const response = await client.workflows.upsert('workflow_key', {
      workflow: {
        name: 'My Workflow',
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
        categories: ['string'],
        conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
        description: 'description',
        goal_attachment: { goal_key: 'trial-conversion', attribution_window_days: 7 },
        settings: { is_commercial: false, override_preferences: false },
        tags: ['string'],
        trigger_data_json_schema: { foo: 'bar' },
        trigger_frequency: 'every_trigger',
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
    const responsePromise = client.workflows.validate('workflow_key', {
      workflow: {
        name: 'My Workflow',
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
    const response = await client.workflows.validate('workflow_key', {
      workflow: {
        name: 'My Workflow',
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
        categories: ['string'],
        conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
        description: 'description',
        goal_attachment: { goal_key: 'trial-conversion', attribution_window_days: 7 },
        settings: { is_commercial: false, override_preferences: false },
        tags: ['string'],
        trigger_data_json_schema: { foo: 'bar' },
        trigger_frequency: 'every_trigger',
      },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
