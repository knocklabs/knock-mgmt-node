// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource guides', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.guides.retrieve('guide_key');
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
      client.guides.retrieve(
        'guide_key',
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
    const responsePromise = client.guides.list();
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
      client.guides.list(
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
    const responsePromise = client.guides.activate('guide_key');
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
    const response = await client.guides.activate('guide_key', {
      status: true,
      branch: 'feature-branch',
      environment: 'development',
    });
  });

  // Mock server tests are disabled
  test.skip('activate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.guides.activate(
        'guide_key',
        {
          status: true,
          branch: 'feature-branch',
          environment: 'development',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.guides.archive('guide_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.guides.upsert('guide_key', {
      guide: {
        channel_key: 'in-app-guide',
        name: 'Getting Started Guide',
        steps: [
          {
            ref: 'welcome-step',
            schema_key: 'tooltip',
            schema_semver: '1.0.0',
            schema_variant_key: 'default',
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
    const response = await client.guides.upsert('guide_key', {
      guide: {
        channel_key: 'in-app-guide',
        name: 'Getting Started Guide',
        steps: [
          {
            ref: 'welcome-step',
            schema_key: 'tooltip',
            schema_semver: '1.0.0',
            schema_variant_key: 'default',
            name: 'Welcome to the App',
            values: { text_field: 'bar' },
          },
        ],
        activation_url_patterns: [
          {
            directive: 'allow',
            pathname: '/dashboard/*',
            search: 'tab=settings',
          },
        ],
        archived_at: '2019-12-27T18:11:19.117Z',
        deleted_at: '2019-12-27T18:11:19.117Z',
        description: 'A guide to help users get started with the application',
        goal_attachment: { goal_key: 'trial-conversion', attribution_window_days: 7 },
        guide_audience_conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
        tags: ['string'],
        target_audience_key: 'target_audience_key',
        target_property_conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
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
    const responsePromise = client.guides.validate('guide_key', {
      guide: {
        channel_key: 'in-app-guide',
        name: 'Getting Started Guide',
        steps: [
          {
            ref: 'welcome-step',
            schema_key: 'tooltip',
            schema_semver: '1.0.0',
            schema_variant_key: 'default',
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
    const response = await client.guides.validate('guide_key', {
      guide: {
        channel_key: 'in-app-guide',
        name: 'Getting Started Guide',
        steps: [
          {
            ref: 'welcome-step',
            schema_key: 'tooltip',
            schema_semver: '1.0.0',
            schema_variant_key: 'default',
            name: 'Welcome to the App',
            values: { text_field: 'bar' },
          },
        ],
        activation_url_patterns: [
          {
            directive: 'allow',
            pathname: '/dashboard/*',
            search: 'tab=settings',
          },
        ],
        archived_at: '2019-12-27T18:11:19.117Z',
        deleted_at: '2019-12-27T18:11:19.117Z',
        description: 'A guide to help users get started with the application',
        goal_attachment: { goal_key: 'trial-conversion', attribution_window_days: 7 },
        guide_audience_conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
        tags: ['string'],
        target_audience_key: 'target_audience_key',
        target_property_conditions: {
          all: [
            {
              operator: 'equal_to',
              variable: 'recipient.property',
              argument: 'some_property',
            },
          ],
        },
      },
      branch: 'feature-branch',
      environment: 'development',
    });
  });
});
