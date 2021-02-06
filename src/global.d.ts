/// <reference types="@micra/application/lib/sync/application" />

declare namespace jest {
  type It = import('@jest/types').Global.It & {
    scoped: import('@jest/types').Global.It;
  }
}

declare module 'mock-express-response' {
  export default class MockExpressResponse {
    new (options?: Record<string, any>): import('express').Response & {
      _getJSON(): Record<string, any>;
      _getString(): string;
    };
  };
}
