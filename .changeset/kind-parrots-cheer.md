---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Fix emitLegacyCommonJSImports issues

- Fix issue where warning always logged if `presetConfig.emitLegacyCommonJSImports` is used
- Throw error when `presetConfig.typesPluginsConfig.emitLegacyCommonJSImports` is used
- Replace automatic file detection in `printImportLine` with 3 options: `file`, `module` and `preserve`:
  - This is to fix rare cases where absolute alias path is used in `externalResolvers` option e.g. `src/module/file` was missing `.js` because it was being detected as a module. `externalResolvers` is set by the user and also used internally for scalar types, so we can use `preserve` instead to keep the module value as-is.
  - Options:
    - `file`: import is a file. For ESM, .js extension is added. For CJS, no extension is added.
    - `module`: import is a module from `node_modules` or aliased e.g. `graphql-scalars` or `@org/your-module`. No extension is added.
    - `preserve`: preserve what the config declares. This is only used when taking user's config or preset-controlled config e.g. `externalExternals` because the import could be either file or module
