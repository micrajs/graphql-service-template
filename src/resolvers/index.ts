import combineResolvers from 'ts-deepmerge';
import { helloResolvers } from 'resolvers/hello';

export const resolvers = combineResolvers(
  helloResolvers,
);
