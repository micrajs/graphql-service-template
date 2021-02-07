import { unlinkSync, existsSync } from 'fs';
import { PATH_TO_GLOBAL_SCHEMA } from './constants';

if (existsSync(PATH_TO_GLOBAL_SCHEMA)) {
  unlinkSync(PATH_TO_GLOBAL_SCHEMA);
}
