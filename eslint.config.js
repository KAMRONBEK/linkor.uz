// https://docs.expo.dev/guides/using-eslint/
const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

module.exports = [
  js.configs.recommended,
  {
    ignores: ['dist/*'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        __DEV__: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLInputElement: 'readonly',
        TextInput: 'readonly',
        setTimeout: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'import': importPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Import organization
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Enforce absolute paths for all source code
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../src/**', '../../src/**', '../../../src/**'],
              message: 'Use absolute imports instead of relative imports to src/. Use @/backend/*, @/frontend/*, @/shared/*, @/atoms/*, @/molecules/*, etc.',
            },
            // Enforce barrel exports - prevent direct imports when barrel exists
            {
              group: ['@/shared/hooks/**', '@/shared/constants/**', '@/shared/types/**'],
              message: 'Use barrel export from @/shared instead of direct imports to subdirectories.',
            },
            {
              group: ['@/atoms/**', '@/molecules/**', '@/organisms/**'],
              message: 'Use barrel exports from @/atoms, @/molecules, @/organisms instead of direct imports to subdirectories.',
            },
            {
              group: ['@/frontend/components/navigation/**', '@/frontend/constants/**', '@/frontend/hooks/**'],
              message: 'Use barrel exports from @/nav-components, @/constants, @/hooks instead of direct imports to subdirectories.',
            },
          ],
        },
      ],

      // React rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Clean code practices
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'prefer-template': 'warn',
      'object-shorthand': 'error',
      'arrow-body-style': ['error', 'as-needed'],

      // Naming conventions
      'camelcase': ['warn', { properties: 'never', allow: ['unstable_settings'] }],
      'no-unused-vars': 'off', // Use TypeScript version instead
    },
  },
  {
    // Config files - allow relative imports and console statements
    files: ['scripts/**/*.js', 'babel.config.js', 'eslint.config.js', '.prettierrc.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-restricted-imports': 'off',
    },
  },
  {
    // Atomic Design Enforcement - Atoms (cannot import molecules/organisms/templates/pages)
    files: ['src/frontend/components/atoms/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../src/**', '../../src/**', '../../../src/**'],
              message: 'Use absolute imports (@/backend/*, @/frontend/*, @/shared/*, etc.) instead of relative imports to src/.',
            },
            {
              group: ['../{molecules,organisms,templates,pages}/**', '../../{molecules,organisms,templates,pages}/**'],
              message: 'Atoms cannot import from molecules, organisms, templates, or pages. This violates atomic design principles.',
            },
          ],
        },
      ],
    },
  },
  {
    // Atomic Design Enforcement - Molecules (cannot import organisms/templates/pages)
    files: ['src/frontend/components/molecules/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../src/**', '../../src/**', '../../../src/**'],
              message: 'Use absolute imports (@/backend/*, @/frontend/*, @/shared/*, etc.) instead of relative imports to src/.',
            },
            {
              group: ['../{organisms,templates,pages}/**', '../../{organisms,templates,pages}/**'],
              message: 'Molecules cannot import from organisms, templates, or pages. This violates atomic design principles.',
            },
          ],
        },
      ],
    },
  },
  {
    // Atomic Design Enforcement - Organisms (cannot import templates/pages)
    files: ['src/frontend/components/organisms/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../src/**', '../../src/**', '../../../src/**'],
              message: 'Use absolute imports (@/backend/*, @/frontend/*, @/shared/*, etc.) instead of relative imports to src/.',
            },
            {
              group: ['../{templates,pages}/**', '../../{templates,pages}/**'],
              message: 'Organisms cannot import from templates or pages. This violates atomic design principles.',
            },
          ],
        },
      ],
    },
  },
  {
    // Backend separation - prevent frontend imports
    files: ['src/backend/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../src/**', '../../src/**'],
              message: 'Use absolute imports (@/backend/*, @/shared/*, etc.) instead of relative imports to src/.',
            },
            {
              group: ['../frontend/**', '../../frontend/**', '@/frontend/**'],
              message: 'Backend cannot import from frontend. This violates architectural boundaries.',
            },
          ],
        },
      ],
    },
  },
];
