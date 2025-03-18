// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.workflows.retrieve('workflow_key', {
      environment: 'development',
      annotate: true,
      hide_uncommitted_changes: true,
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: required and optional params', async () => {
    const response = await client.workflows.list({
      environment: 'development',
      after: 'after',
      annotate: true,
      before: 'before',
      hide_uncommitted_changes: true,
      limit: 0,
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('activate: required and optional params', async () => {
    const response = await client.workflows.activate('workflow_key', {
      environment: 'development',
      status: true,
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('run: required and optional params', async () => {
    const response = await client.workflows.run('workflow_key', {
      environment: 'development',
      recipients: ['dnedry'],
      actor: { id: 'project_1', collection: 'projects' },
      cancellation_key: 'cancellation_key',
      data: { park_id: 'bar' },
      tenant: 'tenant',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.workflows.upsert('workflow_key', {
      environment: 'environment',
      workflow: {
        name: 'My Workflow',
        steps: [
          {
            name: 'Channel 1',
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('upsert: required and optional params', async () => {
    const response = await client.workflows.upsert('workflow_key', {
      environment: 'environment',
      workflow: {
        name: 'My Workflow',
        steps: [
          {
            name: 'Channel 1',
            ref: 'channel_1',
            template: {
              markdown_body: 'Hello **{{ recipient.name }}**',
              action_buttons: [{ action: 'https://example.com', label: 'Button 1' }],
              action_url: '{{ vars.app_url }}',
            },
            type: 'channel',
            channel_group_key: 'email',
            channel_key: 'in-app-feed',
            channel_overrides: {
              bcc_address: 'bcc@example.com',
              cc_address: 'cc@example.com',
              from_email: 'hello@example.com',
              from_name: 'John Doe',
              json_overrides: '{"subject": "Hello, world!"}',
              link_tracking: true,
              open_tracking: true,
              reply_to_address: 'reply@example.com',
              to_address: 'hello@example.com',
            },
            conditions: {
              all: [{ operator: 'equal_to', variable: 'recipient.property', argument: 'some_property' }],
            },
            description: 'Delay for 10 seconds',
            send_windows: [{ day: 'monday', type: 'send', from: 'from', until: 'until' }],
          },
        ],
        categories: ['string'],
        conditions: {
          all: [{ operator: 'equal_to', variable: 'recipient.property', argument: 'some_property' }],
        },
        description: 'description',
        settings: { is_commercial: false, override_preferences: false },
        trigger_data_json_schema: { foo: 'bar' },
        trigger_frequency: 'every_trigger',
      },
      commit: true,
      commit_message: 'commit_message',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('validate: only required params', async () => {
    const responsePromise = client.workflows.validate('workflow_key', {
      environment: 'development',
      workflow: {
        name: 'My Workflow',
        steps: [
          {
            name: 'Channel 1',
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('validate: required and optional params', async () => {
    const response = await client.workflows.validate('workflow_key', {
      environment: 'development',
      workflow: {
        name: 'My Workflow',
        steps: [
          {
            name: 'Channel 1',
            ref: 'channel_1',
            template: {
              markdown_body: 'Hello **{{ recipient.name }}**',
              action_buttons: [{ action: 'https://example.com', label: 'Button 1' }],
              action_url: '{{ vars.app_url }}',
            },
            type: 'channel',
            channel_group_key: 'email',
            channel_key: 'in-app-feed',
            channel_overrides: {
              bcc_address: 'bcc@example.com',
              cc_address: 'cc@example.com',
              from_email: 'hello@example.com',
              from_name: 'John Doe',
              json_overrides: '{"subject": "Hello, world!"}',
              link_tracking: true,
              open_tracking: true,
              reply_to_address: 'reply@example.com',
              to_address: 'hello@example.com',
            },
            conditions: {
              all: [{ operator: 'equal_to', variable: 'recipient.property', argument: 'some_property' }],
            },
            description: 'Delay for 10 seconds',
            send_windows: [{ day: 'monday', type: 'send', from: 'from', until: 'until' }],
          },
        ],
        categories: ['string'],
        conditions: {
          all: [{ operator: 'equal_to', variable: 'recipient.property', argument: 'some_property' }],
        },
        description: 'description',
        settings: { is_commercial: false, override_preferences: false },
        trigger_data_json_schema: { foo: 'bar' },
        trigger_frequency: 'every_trigger',
      },
    });
  });
});
