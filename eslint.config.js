import js from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const importSortGroups = [
  ['^\\u0000'],
  ['^react(-dom)?(/.*)?$'],
  ['^@?\\w'],
  ['^@/'],
  ['^\\.'],
]

export default defineConfig([
  globalIgnores(['dist', 'storybook-static', 'node_modules', '.idea']),

  // Type-aware linting for source files
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      // Disable overly strict unsafe-any rules
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      eqeqeq: ['error', 'always'],
      'no-console': 'warn',

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': ['error', { groups: importSortGroups }],
    },
  },

  // Config / tooling files — no type-aware rules needed
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['src/**'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': ['error', { groups: importSortGroups }],
    },
  },

  ...storybook.configs['flat/recommended'],
])
