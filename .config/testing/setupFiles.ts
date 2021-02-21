import './testing.register.d';
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import glob from 'fast-glob';
import { createNamespace } from 'cls-hooked';
import { PATH_TO_GLOBAL_SCHEMA } from './helpers/constants';
import { join } from 'path';

// Make sure there's no joint schema
if (existsSync(PATH_TO_GLOBAL_SCHEMA)) {
  unlinkSync(PATH_TO_GLOBAL_SCHEMA);
}

const src = (...path: string[]) => join(__dirname, '../..', 'src', ...path);

// Gather all the GQL schema contents
writeFileSync(
  PATH_TO_GLOBAL_SCHEMA,
  glob
    .sync([src('**/*.gql'), src('**/*.graphql')])
    .map((schema: string) => readFileSync(schema, 'utf-8'))
    .join('\n') + '\ntype Query { _empty: String }\n',
  'utf-8',
);

/**
 * Scope
 * This function allows you to write tests that have to modify any global
 * service registered inside the service container without affecting
 * other tests. Simply wrap your test functions inside it.
 */
if (process.env.NODE_ENV === 'test') {
  const testScope = createNamespace('test');
  global.scope = <Args extends Array<any> = []>(
    callback: (...args: Args) => any,
  ) => {
    return async (...args: Args) => {
      return await testScope.runPromise(async () => {
        const scopeContainer = require('@micra/application').container.clone();
        scopeContainer.value('container', scopeContainer);
        testScope.set('use', scopeContainer.use.bind(scopeContainer));
        await callback(...args);
      });
    };
  };
}
