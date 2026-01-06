// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource guides', () => {
  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.guides.retrieve('guide_key', { environment: 'development' });
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
    const response = await client.guides.retrieve('guide_key', {
      environment: 'development',
      annotate: true,
      branch: 'feature-branch',
      hide_uncommitted_changes: true,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('list: only required params', async () => {
    const responsePromise = client.guides.list({ environment: 'development' });
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
    const response = await client.guides.list({
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
    const responsePromise = client.guides.activate('guide_key', { environment: 'development', status: true });
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
    const response = await client.guides.activate('guide_key', {
      environment: 'development',
      status: true,
      branch: 'feature-branch',
    });
  });

  // Prism doesn't support callbacks yet
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

  // Prism doesn't support callbacks yet
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.guides.upsert('guide_key', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('upsert: required and optional params', async () => {
    const response = await client.guides.upsert('guide_key', {
      environment: 'development',
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
        activation_url_patterns: [{ directive: 'allow', pathname: '/dashboard/*' }],
        archived_at: '2019-12-27T18:11:19.117Z',
        deleted_at: '2019-12-27T18:11:19.117Z',
        description: 'A guide to help users get started with the application',
        target_audience_id: null,
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
      annotate: true,
      branch: 'feature-branch',
      commit: true,
      commit_message: 'commit_message',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('validate: only required params', async () => {
    const responsePromise = client.guides.validate('guide_key', {
      environment: 'development',
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

  // Prism doesn't support callbacks yet
  test.skip('validate: required and optional params', async () => {
    const response = await client.guides.validate('guide_key', {
      environment: 'development',
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
        activation_url_patterns: [{ directive: 'allow', pathname: '/dashboard/*' }],
        archived_at: '2019-12-27T18:11:19.117Z',
        deleted_at: '2019-12-27T18:11:19.117Z',
        description: 'A guide to help users get started with the application',
        target_audience_id: null,
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
    });
  });
});
