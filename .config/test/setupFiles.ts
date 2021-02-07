/**
 * This is where you can initialize your test environment.
 */
import '../../src/global.d';
import './testing.register.d';
import { createNamespace } from 'cls-hooked';
import { app } from '../../src/app/bootstrap';
import { mockServer } from './helpers/mockServer';
import type { ServiceContainer } from '@micra/core';

/**
 * Start application
 */
(async () => await app.start())();

/**
 * server/request
 * This helper allows you to execute an HTTP request to the server.
 */
app.container.value('server/request', mockServer(app.container.use('server')));

/**
 * Scope
 * This function allows you to write tests that have to modify any global
 * service registered inside the service container without affecting
 * other tests. Simply wrap your test functions inside it.
 */
const testScope = createNamespace('test');
global.scope = <Args extends Array<any> = []>(
  callback: (...args: Args) => any,
) => {
  return async (...args: Args) => {
    return await testScope.runPromise(async () => {
      const scopeContainer = app.container?.clone() as ServiceContainer;
      scopeContainer.value('container', scopeContainer);
      testScope.set('use', scopeContainer.use.bind(scopeContainer));
      await callback(...args);
    });
  };
};
