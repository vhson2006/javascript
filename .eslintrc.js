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
    // semi: ["error", "always"],
    // quotes: ["error", "double"],
    "import/prefer-default-export": "off",
  },
  ignorePatterns: [ "dist/*", "node_modules/*", "webpack.config.js", ".eslintrc.js" ] 
};
