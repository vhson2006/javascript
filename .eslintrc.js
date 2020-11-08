module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  env: {
    "es6": true,
    "jest": true,
    "browser": true
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  ignorePatterns: [ "dist/*", "node_modules/*", "webpack.config.js", ".eslintrc.js" ] 
};
