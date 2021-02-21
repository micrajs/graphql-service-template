import app from '@micra/application';
import { getNamespace } from 'cls-hooked';
import type { RequestHandler } from 'express';
import type { ServiceContainer, ServiceProvider } from '@micra/core';

export interface ScopedRequestServiceProviders extends ServiceProvider {
  registerRequest?(container: ServiceContainer): void;
  bootRequest?(container: ServiceContainer): void;
}

/**
 * isScope:
 * This middleware is responsible for running each request within a scoped
 * container. This allows the scoped container to have request-specific
 * data without leaking it between requests.
 */
export const inScope: RequestHandler = (req, res, next) => {
  const scope = getNamespace('request');

  if (!scope) {
    throw new Error(
      `Undefined "Request" namespace. Please make sure the cls-hooked namespace was created in the environment initialization:\n\nrequire('cls-hooked').createNamespace('request');\n`,
    );
  }

  return scope.run(() => {
    const container = app.container.clone();
    const providers = app.serviceProviders as ScopedRequestServiceProviders[];

    container.value('request', req);
    container.value('response', res);

    for (const provider of providers) {
      if (provider.registerRequest) {
        provider.registerRequest(container);
      }
    }

    for (const provider of providers) {
      if (provider.bootRequest) {
        provider.bootRequest(container);
      }
    }

    scope.set('use', (namespace: keyof Application.Services) => {
      try {
        return container.use(namespace);
      } catch (e) {
        return app.container.use(namespace);
      }
    });

    next();
  });
};
