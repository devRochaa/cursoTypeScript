/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true, // Garante que esse é o config principal
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    // regras personalizadas
    //"@typescript-eslint/no-explicit-any": ""
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.cjs'
  ]
};
