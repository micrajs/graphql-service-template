import { ApolloServer } from 'apollo-server-express';
import { join } from 'path';
import { MicraGraphQLContainer } from '@micra/micra-graphql-container';
import { readFileSync } from 'fs';
import { ServiceProvider } from '@micra/service-provider';

export class GraphQLServiceProvider extends ServiceProvider {
  register() {
    this.container.value('graphql/apollo', ApolloServer);
    this.container.singleton('graphql', MicraGraphQLContainer);
  }

  boot() {
    const graphql = use('graphql');
    const graphqlConfig = config('graphql');

    /**
     * Here you can require all resolvers defined in the
     * src/resolvers folder.
     */
    require('resolvers');

    /**
     * This is the main schema. This file is auto-generated on
     * build-time and contains the combined content of all
     * *.gql and *.graphql files in the project.
     */
    graphql.schema(
      readFileSync(
        join(__dirname, '../..', graphqlConfig.pathToSchema),
        'utf-8',
      ),
    );
  }
}
