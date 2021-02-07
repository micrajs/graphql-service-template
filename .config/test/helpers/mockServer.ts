import '../../../src/global.d';
import request from 'supertest';
import type { Application } from 'express';
import type { SuperTest, Test, Response } from 'supertest';
import type { GraphQLConfig } from '../../../src/app/graphql/types';

export type GraphQLResponse<T> = {
  response: Response;
  data: T | null;
  error: any | null;
};
export type GraphqlRequest = <T>(
  data: string | Record<string, any>,
) => Promise<GraphQLResponse<T>>;
export type MockedServer = SuperTest<Test> & {
  query: GraphqlRequest;
  mutation: GraphqlRequest;
};

export const mockServer = (app: Application) => {
  const server = request(app);
  const graphqlConfig = config<any, GraphQLConfig>('graphql');

  async function graphqlRequest<T = Record<string, any>>(
    data: string | Record<string, any> = {},
  ): Promise<GraphQLResponse<T>> {
    const payload = typeof data !== 'string' ? data : { query: data };
    const response = await server
      .post(graphqlConfig.graphqlPath ?? '/graphql')
      .send(payload);

    return {
      response,
      data: response.body.data ?? null,
      error: response.body.errors ?? null,
    };
  }

  return {
    ...server,
    query: graphqlRequest,
    mutation: graphqlRequest,
  };
};
