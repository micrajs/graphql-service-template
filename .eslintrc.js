const { join } = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: join(__dirname, 'tsconfig.json'),
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['src/testing/**/*.tsx', 'src/testing/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    'arrow-body-style': 1,
    'eol-last': ['error', 'always'],
    '@typescript-eslint/no-empty-interface': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    quotes: 'error',
    'prettier/prettier': 'error',
    'prefer-arrow-callback': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    // 'import/no-default-export': ['error'],
    'no-bitwise': 'off',
    'no-fallthrough': 'off',
    'no-use-before-define': 'off',
    'no-restricted-imports': ['error', { paths: [''], patterns: ['./*', '../*'] }],
    'global-require': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
