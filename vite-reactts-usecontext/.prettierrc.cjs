module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 90,
  tabWidth: 2,
  endOfLine: 'auto',
  // Since prettier 3.0, manually specifying plugins is required
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  // This plugin's options
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@components|@context|@enums|@hooks|@types|@utils)(/.*)$',
    '',
    '^[.]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
};
