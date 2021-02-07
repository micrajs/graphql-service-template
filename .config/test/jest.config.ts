import { join } from 'path';

const config = (...path: string[]) => join(__dirname, '../', ...(path || []));
const root = (...path: string[]) => join(__dirname, '../../', ...(path || []));

export default {
  preset: 'ts-jest',
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: root('tsconfig.json'),
    },
  },
  runner: 'groups',
  rootDir: root('src'),
  testRegex: '.*(/tests/|/.*/tests/).*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [
    config('test/helpers/mockJointSchema.ts'),
    config('test/setupFiles.ts'),
  ],
  setupFilesAfterEnv: [
    config('test/setupFilesAfterEnv.ts'),
    config('test/helpers/clearJointSchema.ts'),
  ],
};
