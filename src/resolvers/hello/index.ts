export const helloResolvers = {
  Query: {
    async hello(): Promise<'world'> {
      return 'world' as const;
    },
  },
};
