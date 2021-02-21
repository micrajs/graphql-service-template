declare namespace Application {
  interface Services {
    'graphql/schema': string;
  }

  interface Config {
    graphql: import('@micra/apollo-express-kernel').GraphQLConfig;
  }

  interface EnvironmentVariables {
    GRAPHQL_PATH: string;
    PATH_TO_SCHEMA: string;
  }
}
