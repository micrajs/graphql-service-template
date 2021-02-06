import 'reflect-metadata';
import { createNamespace, getNamespace } from 'cls-hooked';
import { DotEnv } from '@micra/dot-env';
import app from '@micra/application';

app.registerEnv(DotEnv);

createNamespace('request');

/**
 *
 */
global.use = <K extends keyof Application.Services>(
  namespace: K,
): Application.Services[K] => {
  const requestScope = getNamespace('request');
  if (requestScope?.active) {
    return requestScope.get('use')(namespace);
  }

  if (process.env.NODE_ENV === 'test') {
    const testScope = getNamespace('test');
    if (testScope?.active) {
      return testScope.get('use')(namespace);
    }
  }

  return app.container.use(namespace);
};
