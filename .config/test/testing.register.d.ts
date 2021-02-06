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
