import type { GraphQLConfig as KernelGraphQLConfig } from '@micra/apollo-express-kernel';

export interface GraphQLConfig extends KernelGraphQLConfig {
  pathToSchema: string;
}
