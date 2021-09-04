'use strict'

module.exports = {
  arrowParens: 'avoid',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'never',
      },
    },
    {
      files: '*.yml',
      options: {
        proseWrap: 'never',
        singleQuote: false,
      },
    },
  ],
}
