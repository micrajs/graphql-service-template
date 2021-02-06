import type { CreateContext } from 'app/graphql/data/types';

export const context: CreateContext = async ({ req, res }) => {
  // TODO: Implement context creator.

  return { req, res };
};
