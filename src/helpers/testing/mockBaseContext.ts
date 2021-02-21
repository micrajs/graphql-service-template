/* eslint-disable import/no-extraneous-dependencies */
import MockExpressRequest from 'mock-express-request';
import MockExpressResponse from 'mock-express-response';
import type { Response } from 'express';
import type { DefaultContext } from 'app/graphql/types';

export interface MockRequestOptions {
  headers?: Record<string, any>;
  connection?: Record<string, any>;
  app?: Record<string, any>;
  query?: Record<string, any>;
  cookies?: Record<string, any>;
  body?: Record<string, any>;
  res?: Response;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTION';
  url?: string;
}

export const mockBaseContext = (
  requestOptions: MockRequestOptions = {},
): DefaultContext => ({
  req: new MockExpressRequest({
    url: config('graphql').graphqlPath ?? '/graphql',
    ...requestOptions,
  }),
  res: new MockExpressResponse({}),
});
