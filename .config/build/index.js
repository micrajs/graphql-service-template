require('dotenv-flow').config();
const { build } = require('esbuild');
const { cwd, mergeSchemas } = require('./utilities');

Promise.all([
  build({
    bundle: true,
    entryPoints: [cwd('src/index.ts')],
    external: ['express'],
    outfile: cwd('.micra/index.js'),
    platform: 'node',
    sourcemap: true,
    target: ['node14.15'],
    tsconfig: cwd('tsconfig.build.json'),
  }).then(() => console.log('\nBuild complete!')),

  mergeSchemas(),
]);
