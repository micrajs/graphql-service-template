import { context } from 'app/graphql/data/context';
import { mockBaseContext } from 'helpers/testing/mockBaseContext';
import type { MockRequestOptions } from 'helpers/testing/mockBaseContext';

export const mockContext = (options?: MockRequestOptions) => context(mockBaseContext(options));
