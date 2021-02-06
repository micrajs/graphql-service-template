import app from '@micra/application';
import { context } from 'app/graphql/data/context';
import { formatError } from 'app/graphql/data/format-error';
import type { GraphQLConfig } from 'app/graphql/types';

app.config.set<GraphQLConfig>('graphql', {
  pathToSchema: env('PATH_TO_SCHEMA', '/'),

  graphqlPath: '/graphql',

  options: {
    context,
    formatError,
    engine: false,
    introspection: env('APP_ENV', 'prod') === 'dev',
    mockEntireSchema: false,
    mocks: false,
    playground: env('APP_ENV', 'prod') === 'dev',
    tracing: env('APP_ENV', 'prod') === 'dev',
  },
});
