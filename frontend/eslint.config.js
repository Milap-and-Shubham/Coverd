import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import vitest from 'eslint-lugin-vitest'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}','**/*.test.js', '**/*.spec.js', '**/*.test.jsx', '**/*.spec.jsx'],
    plugins: {
        vitest
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        browser,
        ...vitest.environments.env.globals,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      ...vitest.configs.recommended.rules,
    },
  },
])
