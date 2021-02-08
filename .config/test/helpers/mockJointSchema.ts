import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import glob from 'fast-glob';
import { PATH_TO_GLOBAL_SCHEMA } from './constants';
import { join } from 'path';

// Make sure there's no joint schema
if (existsSync(PATH_TO_GLOBAL_SCHEMA)) {
  unlinkSync(PATH_TO_GLOBAL_SCHEMA);
}

const src = (...path: string[]) => join(__dirname, '../../..', 'src', ...path);

// Gather all the GQL schema contents
writeFileSync(
  PATH_TO_GLOBAL_SCHEMA,
  glob
    .sync([src('**/*.gql'), src('**/*.graphql')])
    .map((schema: string) => readFileSync(schema, 'utf-8'))
    .join('\n') + '\ntype Query { _empty: String }\n',
  'utf-8',
);
