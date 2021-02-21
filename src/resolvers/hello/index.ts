export const helloResolvers = {
  Query: {
    async hello() {
      return 'world' as const;
    },
  },
};
