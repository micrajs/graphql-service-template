declare namespace Application {
  interface Services {
    /**
     * server/request:
     * This is only available in the test environment.
     */
    'server/request': import('./helpers/mockServer').MockedServer;
  }
}

declare namespace jest {
  interface It {
    /**
     * scoped:
     * Execute a test function within a scoped container. This allows
     * you to mutate the service container without leaking
     * the changes to other tests.
     */
    scoped: import('@jest/types').Global.It;
  }
}

declare module 'mock-express-request' {
  const MockExpressRequest: import('@micra/core').Static<
    import('express').Request,
    [Record<string, any> | undefined]
  >;
  export default MockExpressRequest;
}

declare module 'mock-express-response' {
  const MockExpressRequest: import('@micra/core').Static<
    import('express').Response & {
      _getJSON(): Record<string, any>;
      _getString(): string;
    },
    [Record<string, any> | undefined]
  >;
  export default MockExpressRequest;
}

/**
 * Scope function
 */
declare const scope: ApplicationScope;
type ApplicationScope = <Args extends Array<any> = []>(
  callback: (...args: Args) => any,
) => (...args: Args) => any;

/**
 * Global:
 * Extension of the global Global object.
 * This will be available in the
 * server.
 */
declare namespace NodeJS {
  interface Global {
    scope: ApplicationScope;
  }
}
