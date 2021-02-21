import app from '@micra/application';
import { getNamespace } from 'cls-hooked';
import type { RequestHandler } from 'express';

/**
 * isScope:
 * This middleware is responsible for running each request within a scoped
 * container. This allows the scoped container to have request-specific
 * data without leaking it between requests.
 */
export const inScope: RequestHandler = (req, res, next) => {
  const scope = getNamespace('request');
  return scope?.run(() => {
    const container = app.container.clone();
    container.value('request', req);
    container.value('response', res);

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
