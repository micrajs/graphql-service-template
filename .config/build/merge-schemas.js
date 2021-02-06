require('dotenv-flow').config();
const fg = require('fast-glob');
const { join, sep } = require('path');
const { writeFileSync, readFileSync, existsSync, unlinkSync, mkdirSync } = require('fs');

const root = (...path) => join(__dirname, '../..', ...path);
const pathToSchema = root(process.argv[2] || process.env.PATH_TO_SCHEMA || '.micra', 'schema.gql');
const makeSurePathExists = (fullPath) => {
  const [initial, ...pieces] = fullPath.split(sep);
  pieces.pop();
  pieces.reduce((partial, piece) => {
    const path = `${partial}${sep}${piece}`;

    if (!existsSync(path)) {
      mkdirSync(path);
    }

    return path;
  }, initial);
}

console.log('Merging schema files...');
const files = fg.sync([root('src/**/*.graphql'), root('src/**/*.gql')]);

console.log(`\tMerging ${files.length} schema file(s)...`);
const schema = files.reduce((partialSchema, file) => {
  if (existsSync(file)) {
    const moduleSchema = readFileSync(file, 'utf-8');
    return partialSchema + moduleSchema;
  }

  return partialSchema;
}, 'type Query { _empty: String }\ntype Mutation { _empty: String }\n\n');

if (existsSync(root('src/schema.gql'))) {
  unlinkSync(root('src/schema.gql'));
}

console.log('\tCreating single schema in:', pathToSchema);
makeSurePathExists(pathToSchema);
writeFileSync(pathToSchema, `${schema}`);

console.log('\tSchema files joined');
