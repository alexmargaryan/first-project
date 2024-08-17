const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "turbo",
  ],
  plugins: ["@typescript-eslint", "react-refresh", "prettier"],
  globals: {
    React: true,
    JSX: true,
  },
  env: { browser: true, es2020: true },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
    "vite.config.ts",
    ".eslintrc.js",
    ".eslintrc.cjs",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "no-empty-pattern": "warn",
  },
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};
