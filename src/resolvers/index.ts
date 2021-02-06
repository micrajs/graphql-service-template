const graphql = use('graphql');

graphql.resolver({
  Query: {
    async hello() {
      return 'world';
    },
  },
});
