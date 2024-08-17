/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@first-project/eslint-config/service.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
