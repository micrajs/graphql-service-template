import cors from 'cors';
import express from 'express';
import app from '@micra/application';
import { errorHandler } from 'app/server/data/error-handler/errorHandler';
import { inScope } from 'app/server/data/middlewares/inScope';
import type { ServerConfig } from 'app/server/types';

app.config.set<ServerConfig>('server', {
  errorHandler,
  middlewares: [
    cors({
      origin: true,
      credentials: true,
    }),
    express.urlencoded({ extended: true }),
    express.json(),
    inScope,
  ],
});
