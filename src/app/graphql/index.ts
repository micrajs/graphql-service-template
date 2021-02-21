import { join } from 'path';
import { MicraGraphQLContainer } from '@micra/micra-graphql-container';
import { readFileSync } from 'fs';
import { ServiceProvider } from '@micra/service-provider';

export class GraphQLServiceProvider extends ServiceProvider {
  boot() {
    /**
     * Here you can require all resolvers defined in the
     * src/resolvers folder.
     */
    require('resolvers');
  }
}
