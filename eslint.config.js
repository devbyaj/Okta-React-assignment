import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        es6: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      'no-async-promise-executor': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-duplicate-imports': 2,
      'no-console': ['error', { allow: ['warn', 'error'] }],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@devbyaj/dev-ui',
              message:
                "Please use `import [package] from '@devbyaj/dev-ui/[package]'` instead.",
            },
          ],
          patterns: ['!@devbyaj/dev-ui/*'],
        },
      ],

      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          prefix: ['T'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
          prefix: [],
        },
      ],

      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            ['internal'],
            'parent',
            'sibling',
            'index',
            'object',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@devbyaj/dev-ui/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'routes',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'services/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'stores/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'utils/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'hooks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'components/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'types/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          distinctGroup: false,
        },
      ],

      'prettier/prettier': [
        'error',
        { jsxBracketSameLine: false, singleQuote: true, trailingComma: 'all' },
      ],

      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],

      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/react-in-jsx-scope': 'off', // React 17+ does not require importing React for JSX
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
  },
]);
