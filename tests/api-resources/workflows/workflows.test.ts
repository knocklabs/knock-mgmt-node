// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.workflows.retrieve('workflow_key', { environment: 'development' });
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
    const response = await client.workflows.retrieve('workflow_key', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('list: only required params', async () => {
    const responsePromise = client.workflows.list({ environment: 'development' });
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
    const response = await client.workflows.list({
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
  test.skip('activate: only required params', async () => {
    const responsePromise = client.workflows.activate('workflow_key', {
      environment: 'development',
      status: true,
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
  test.skip('activate: required and optional params', async () => {
    const response = await client.workflows.activate('workflow_key', {
      environment: 'development',
      status: true,
      branch: 'feature-branch',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('run: only required params', async () => {
    const responsePromise = client.workflows.run('workflow_key', {
      environment: 'development',
      recipients: ['dnedry'],
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
  test.skip('run: required and optional params', async () => {
    const response = await client.workflows.run('workflow_key', {
      environment: 'development',
      recipients: ['dnedry'],
      branch: 'feature-branch',
      actor: { id: 'project_1', collection: 'projects' },
      cancellation_key: 'cancellation_key',
      data: { park_id: 'bar' },
      tenant: 'tenant',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.workflows.upsert('workflow_key', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('upsert: required and optional params', async () => {
    const response = await client.workflows.upsert('workflow_key', {
      environment: 'development',
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
                from: '18:11:19.117Z',
                until: '18:11:19.117Z',
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
        settings: { is_commercial: false, override_preferences: false },
        trigger_data_json_schema: { foo: 'bar' },
        trigger_frequency: 'every_trigger',
      },
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('validate: only required params', async () => {
    const responsePromise = client.workflows.validate('workflow_key', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('validate: required and optional params', async () => {
    const response = await client.workflows.validate('workflow_key', {
      environment: 'development',
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
                from: '18:11:19.117Z',
                until: '18:11:19.117Z',
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
        settings: { is_commercial: false, override_preferences: false },
        trigger_data_json_schema: { foo: 'bar' },
        trigger_frequency: 'every_trigger',
      },
      branch: 'feature-branch',
    });
  });
});
