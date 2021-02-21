import { context } from 'app/graphql/data/context';
import { mockBaseContext } from 'helpers/testing/mockBaseContext';
import type { MockRequestOptions } from 'helpers/testing/mockBaseContext';
import type { CreateContext } from 'app/graphql/types';

export const mockContext = (
  options?: MockRequestOptions,
): ReturnType<CreateContext> => context(mockBaseContext(options));
