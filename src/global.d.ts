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

declare module 'mock-express-response' {
  export default class MockExpressResponse {
    new(
      options?: Record<string, any>,
    ): import('express').Response & {
      _getJSON(): Record<string, any>;
      _getString(): string;
    };
  }
}
