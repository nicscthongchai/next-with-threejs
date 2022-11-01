const prettierOptions = require('./.prettierrc.js');

module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    'react-hooks/exhaustive-deps': 'off',
  },
};
