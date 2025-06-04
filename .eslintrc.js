module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [
    'vue',
  ],
  rules: {
    // Add project-specific rules here
  },
  ignorePatterns: ['dist/', 'node_modules/', 'build/', 'coverage/'],
};
