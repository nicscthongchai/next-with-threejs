const pluginSortImports = require('@trivago/prettier-plugin-sort-imports');
const pluginTailwindcss = require('prettier-plugin-tailwindcss');

/** @type {import("prettier").Parser}  */
const parsers = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
};

/** @type {import("prettier").Plugin}  */
const combinedPlugin = {
  parsers: {
    typescript: parsers,
  },
};

module.exports = {
  plugins: [combinedPlugin],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  tabWidth: 2,
  useTabs: false,
  importOrder: [
    '^ui(.*)$',
    '^(src/)?abi(.*)$',
    '^(src/)?components(.*)$',
    '^(src/)?constant(s)?(.*)$',
    '^(src/)?containers(.*)$',
    '^(src/)?contexts(.*)$',
    '^(src/)?hooks(.*)$',
    '^next(.*)$',
    '^(src/)?pages(.*)$',
    '^(src/)?public(.*)$',
    '^(src/)?recoil(.*)$',
    '^(src/)?subscribers(.*)$',
    '^(src/)?types(.*)$',
    '^(src/)?utils(.*)$',
    '^(~)?[./]',
    '(.css|.scss)$',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};