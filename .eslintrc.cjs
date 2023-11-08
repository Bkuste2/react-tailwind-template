module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["@rocketseat/eslint-config/react", "plugin:storybook/recommended"],
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ]
  },
}
