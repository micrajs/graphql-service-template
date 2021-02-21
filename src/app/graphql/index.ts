import { ServiceProvider } from '@micra/service-provider';

export class GraphQLServiceProvider extends ServiceProvider {
  boot(): void {
    /**
     * Here you can require all resolvers defined in the
     * src/resolvers folder.
     */
    require('resolvers');
  }
}
