import { context } from 'app/graphql/data/context';
import { mockBaseContext } from 'testing/helpers/mockBaseContext';

describe('context tests', () => {
  it('should return the base context', async () => {
    const baseContext = mockBaseContext();
    const response = await context(baseContext);

    expect(response).toMatchObject(baseContext);
  });
});
