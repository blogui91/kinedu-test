const OFF = 0,
  WARN = 1,
  ERROR = 2;
module.exports = {
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": false,
    "ecmaFeatures": {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true
    }
  },
  globals: {
  },
  "plugins": ["react"],
  "env": {
    "es6": true,
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": [WARN, {
      "extensions": [".js", ".jsx"]
    }],
    "react/jsx-indent": [OFF],
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
  "settings": {
    "import/resolver": {
      webpack: "webpack.config.js",
    },
  },
};
