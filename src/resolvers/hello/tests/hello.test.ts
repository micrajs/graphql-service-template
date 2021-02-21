import { helloResolvers } from 'resolvers/hello';

describe('hello resolver tests', () => {
  it('should return world', async () => {
    const result = await helloResolvers.Query.hello();

    expect(result).toBe('world');
  });
});
