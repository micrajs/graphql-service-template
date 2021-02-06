declare namespace Application {
  interface Resolvers {
    Query: {
      hello: import('@micra/micra-graphql-container').Resolver<'world'>;
    };
  }
}
