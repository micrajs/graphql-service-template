/// <reference types="@micra/application/lib/sync/application" />

declare namespace jest {
  type It = import('@jest/types').Global.It & {
    /**
     * scoped:
     * Execute a test function within a scoped container. This allows
     * you to mutate the service container without leaking
     * the changes to other tests.
     */
    scoped: import('@jest/types').Global.It;
  };
}

declare module 'mock-express-request' {
  declare const MockExpressRequest: import('@micra/core').Static<
    import('express').Request,
    [options?: Record<string, any>],
    >;
  export default MockExpressRequest;
}

declare module 'mock-express-response' {
  declare const MockExpressRequest: import('@micra/core').Static<
    import('express').Response & {
      _getJSON(): Record<string, any>;
      _getString(): string;
    },
    [options?: Record<string, any>],
    >;
  export default MockExpressRequest;
}
