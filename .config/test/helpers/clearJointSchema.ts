import { unlinkSync } from 'fs';
import { PATH_TO_GLOBAL_SCHEMA } from './constants';

unlinkSync(PATH_TO_GLOBAL_SCHEMA);
