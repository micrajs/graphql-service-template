type Resolver<T> = import('@micra/micra-graphql-container').Resolver<T>;

declare namespace Application {
  interface Resolvers {
    Query: {
      hello: Resolver<'world'>;
    };
  }
}
