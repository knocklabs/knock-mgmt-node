// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import KnockMgmt from '@knocklabs/mgmt';

const client = new KnockMgmt({
  serviceToken: 'My Service Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource warehouseSyncs', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.warehouseSyncs.retrieve('warehouse_sync_key');
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
      client.warehouseSyncs.retrieve(
        'warehouse_sync_key',
        { environment: 'development', hide_uncommitted_changes: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.warehouseSyncs.list();
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
      client.warehouseSyncs.list(
        {
          after: 'after',
          before: 'before',
          environment: 'development',
          hide_uncommitted_changes: true,
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listRuns', async () => {
    const responsePromise = client.warehouseSyncs.listRuns('warehouse_sync_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRuns: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.warehouseSyncs.listRuns(
        'warehouse_sync_key',
        { environment: 'development' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('run', async () => {
    const responsePromise = client.warehouseSyncs.run('warehouse_sync_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('run: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.warehouseSyncs.run(
        'warehouse_sync_key',
        { environment: 'development' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateSettings', async () => {
    const responsePromise = client.warehouseSyncs.updateSettings('warehouse_sync_key');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateSettings: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.warehouseSyncs.updateSettings(
        'warehouse_sync_key',
        {
          environment: 'development',
          enabled: false,
          frequency_minutes: 1440,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(KnockMgmt.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.warehouseSyncs.upsert('warehouse_sync_key', { warehouse_sync: {} });
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
    const response = await client.warehouseSyncs.upsert('warehouse_sync_key', {
      warehouse_sync: {
        change_tracking: { is_deleted_column: 'is_deleted', last_modified_column: 'updated_at' },
        description: 'description',
        mappings: [
          {
            source_column: 'id',
            target_field: 'id',
            on_null: 'set_null',
          },
          {
            source_column: 'email',
            target_field: 'email',
            on_null: 'set_null',
          },
        ],
        name: 'Users',
        primary_key_column: 'id',
        source: {
          mode: 'sql',
          name: 'name',
          query: 'SELECT id, email, name, updated_at FROM analytics.users',
          schema: 'schema',
        },
        target: { audience_key: 'audience_key', collection: 'projects' },
        target_type: 'user',
        version_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        warehouse_key: 'analytics',
      },
      commit: true,
      commit_message: 'commit_message',
      environment: 'development',
    });
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.warehouseSyncs.validate('warehouse_sync_key', { warehouse_sync: {} });
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
    const response = await client.warehouseSyncs.validate('warehouse_sync_key', {
      warehouse_sync: {
        change_tracking: { is_deleted_column: 'is_deleted', last_modified_column: 'updated_at' },
        description: 'description',
        mappings: [
          {
            source_column: 'id',
            target_field: 'id',
            on_null: 'set_null',
          },
          {
            source_column: 'email',
            target_field: 'email',
            on_null: 'set_null',
          },
        ],
        name: 'Users',
        primary_key_column: 'id',
        source: {
          mode: 'sql',
          name: 'name',
          query: 'SELECT id, email, name, updated_at FROM analytics.users',
          schema: 'schema',
        },
        target: { audience_key: 'audience_key', collection: 'projects' },
        target_type: 'user',
        version_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        warehouse_key: 'analytics',
      },
      environment: 'development',
    });
  });
});
