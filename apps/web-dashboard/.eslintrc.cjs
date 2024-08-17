/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@first-project/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
