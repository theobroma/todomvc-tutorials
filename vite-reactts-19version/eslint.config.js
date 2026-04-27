import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig, // Must be last to override other configs
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error', // Report prettier issues as ESLint errors
      'no-console': 'warn',
      'no-debugger': 'error',
      // prettier-ignore
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-body-style': ['warn', 'as-needed'],
      'no-duplicate-imports': 'error',

      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/no-autofocus': 'warn',

      'react/jsx-key': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-props-no-spreading': 0,
      'react/self-closing-comp': 'warn',
      // 'react/no-unstable-nested-components': 'warn',

      'react-hooks/todo': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // другие полезные правила:
      'react-hooks/capitalized-calls': 'error', // не вызывайте функции с заглавной буквы (нужно использовать JSX)
      'react-hooks/hooks': 'error', // во многом пере-реализует некомпиляторное правило «rules-of-hooks»
      'react-hooks/rule-suppression': 'error', // проверяет корректность подавления других правил
      'react-hooks/syntax': 'error', // проверяет некорректный синтаксис
      'react-hooks/unsupported-syntax': 'error', // по умолчанию `warn`, используйте `error`, чтобы ронять сборку

      'react-compiler/react-compiler': 'error', // Включаємо правило для React Compiler
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
);
