const fg = require('fast-glob');
const { join, sep } = require('path');
const { writeFileSync, readFileSync, existsSync, unlinkSync, mkdirSync } = require('fs');

const cwd = (...path) => join(process.cwd(), ...path);

const mergeSchemas = async () => {
  const pathToSchema = cwd(process.env.PATH_TO_SCHEMA ?? '.micra/schema.gql');
  const ROOT_SCHEMA_CONTENTS =
    'type Query { _empty: String }\n\ntype Mutation { _empty: String }\n\n';

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
  };

  console.log('Merging schema files...');
  const files = fg.sync([cwd('src/**/*.graphql'), cwd('src/**/*.gql')]);

  console.log(`|- Merging ${files.length} schema file(s)...`);
  const schema = files.reduce((partialSchema, file) => {
    if (existsSync(file)) {
      const moduleSchema = readFileSync(file, 'utf-8');
      return partialSchema + moduleSchema;
    }

    return partialSchema;
  }, ROOT_SCHEMA_CONTENTS);

  if (existsSync(cwd('src/schema.gql'))) {
    unlinkSync(cwd('src/schema.gql'));
  }

  console.log('|- Creating single schema in:', pathToSchema);
  makeSurePathExists(pathToSchema);
  writeFileSync(pathToSchema, `${schema}`);

  console.log('|- Schema files joined');
};

module.exports = { cwd, mergeSchemas };
