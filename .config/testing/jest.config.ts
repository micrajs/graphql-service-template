import { cwd } from '../build/utilities';

export default {
  preset: 'ts-jest',
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: cwd('tsconfig.json'),
    },
  },
  runner: 'groups',
  rootDir: cwd('src'),
  testRegex: '.*(/tests/|/.*/tests/).*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [cwd('.config/testing/setupFiles.ts')],
  setupFilesAfterEnv: [cwd('.config/testing/setupFilesAfterEnv.ts')],
};
