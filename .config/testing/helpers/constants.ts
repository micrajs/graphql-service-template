import { join } from 'path';

process.env.PATH_TO_SCHEMA = 'src/schema.gql';
export const PATH_TO_GLOBAL_SCHEMA = join(process.cwd(), process.env.PATH_TO_SCHEMA);
