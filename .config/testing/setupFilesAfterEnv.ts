import './helpers/itScoped';
import '../../src/app/environment';
import '../../src/config';
import app from '@micra/application';
import { unlinkSync, existsSync } from 'fs';
import { mockServer } from './helpers/mockServer';
import { PATH_TO_GLOBAL_SCHEMA } from './helpers/constants';

beforeAll(async () => {
  await app.start();

  app.container.value(
    'server/request',
    mockServer(use<any>('server')),
  );
});

afterAll(() => {
  if (existsSync(PATH_TO_GLOBAL_SCHEMA)) {
    unlinkSync(PATH_TO_GLOBAL_SCHEMA);
  }
});
