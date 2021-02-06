declare namespace Application {
  interface Services {
    graphql: import('@micra/micra-graphql-container').GraphQLContainer;
  }

  interface Config {
    graphql: import('app/graphql/types').GraphQLConfig;
  }

  interface EnvironmentVariables {
    PATH_TO_SCHEMA: string;
  }

  interface Context {
    //
  }
}
