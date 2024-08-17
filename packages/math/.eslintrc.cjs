/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@first-project/eslint-config/service.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
