import type { Request, Response } from 'express';
import type { ContextFunction, Config } from 'apollo-server-core';

export type FormatError = Config['formatError'];

export interface DefaultContext {
  req: Request;
  res: Response;
}

export type CreateContext = ContextFunction<
  DefaultContext,
  Application.Context
>;
