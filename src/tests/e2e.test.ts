describe('e2e tests', () => {
  it('should receive world from the query hello', async () => {
    const request = use('server/request');

    const response = await request.query<{ hello: string }>(`
      query {
        hello
      }
    `);

    expect(response.data?.hello).not.toBeNull();
    expect(response.data?.hello).toBe('world');
  });
});
