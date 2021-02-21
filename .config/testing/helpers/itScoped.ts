import '../testing.register.d';
import type { Global } from '@jest/types';

/**
 * scoped:
 * Execute a test function within a scoped container. This allows
 * you to mutate the service container without leaking
 * the changes to other tests.
 */
it.scoped = function ItScoped(testName, fn, timeout) {
  return it(testName, scope(fn), timeout);
} as Global.It;

it.scoped.each = function (table, ...taggedTemplateData) {
  const response = it.each(
    table as TemplateStringsArray,
    ...taggedTemplateData,
  );
  const scopedEach: ReturnType<jest.Each> = (testName, fn, timeout) =>
    response(testName, scope(fn), timeout);
  return scopedEach;
};

it.scoped.only = function ItOnlyScoped(
  testName: Global.TestName,
  fn: Global.TestFn,
  timeout?: number,
) {
  return it.only(testName, scope(fn), timeout);
} as Global.It['only'];

it.scoped.only.each = function (table, ...taggedTemplateData) {
  const response = it.only.each(
    table as TemplateStringsArray,
    ...taggedTemplateData,
  );
  const scopedEach: ReturnType<jest.Each> = (testName, fn, timeout) =>
    response(testName, scope(fn), timeout);
  return scopedEach;
};

it.scoped.skip = function ItSkipScoped(testName, fn, timeout) {
  return it.skip(testName, scope(fn), timeout);
} as Global.It['skip'];

it.scoped.skip.each = function (table, ...taggedTemplateData) {
  const response = it.skip.each(
    table as TemplateStringsArray,
    ...taggedTemplateData,
  );
  const scopedEach: ReturnType<jest.Each> = (testName, fn, timeout) =>
    response(testName, scope(fn), timeout);
  return scopedEach;
};

it.scoped.todo = function ItTodoScoped(testName) {
  return it.todo(testName);
} as Global.It['todo'];
