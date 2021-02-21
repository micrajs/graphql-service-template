import { join } from 'path';
import { readFileSync } from 'fs';
import { resolvers } from 'resolvers';
import app from '@micra/application';
import { context } from 'app/graphql/data/context';
import { formatError } from 'app/graphql/data/format-error';
import type { GraphQLConfig } from '@micra/apollo-express-kernel';

app.config.set<GraphQLConfig>('graphql', {
  graphqlPath: env('GRAPHQL_PATH', '/graphql'),

  options: {
    context,
    formatError,
    resolvers,
    engine: false,
    introspection: env('APP_ENV', 'prod') === 'dev',
    mockEntireSchema: false,
    mocks: false,
    playground: env('APP_ENV', 'prod') === 'dev',
    tracing: env('APP_ENV', 'prod') === 'dev',
    /**
     * This is the main schema. This file is auto-generated on
     * build-time and contains the combined content of all
     * *.gql and *.graphql files in the project.
     */
    typeDefs: readFileSync(
      join(process.cwd(), env('PATH_TO_SCHEMA', '.micra/schema.gql')),
      'utf-8',
    ),
  },
});
