import 'app/server/config';
import 'app/graphql/config';
import app from '@micra/application';
import { TypeDIServiceContainer } from '@micra/typedi-service-container';
import { ApolloExpressKernel } from '@micra/apollo-express-kernel';
import { ServerServiceProvider } from 'app/server';
import { GraphQLServiceProvider } from 'app/graphql';
import type { AppConfig } from '@micra/application';

app.config.set<AppConfig>('app', {
  /**
   * Application kernel
   */
  kernel: ApolloExpressKernel,

  /**
   * Service container class to be used.
   */
  container: TypeDIServiceContainer,

  /**
   * Service providers
   */
  services: [
    // Core modules service providers
    ServerServiceProvider,
    GraphQLServiceProvider,

    // Domains service providers
  ],
});
