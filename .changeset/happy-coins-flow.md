---
'@eddeee888/gcg-typescript-resolver-files': patch
---

Relax `presetConfig.typesPluginsConfig.namingConvention` enforcement. Warn if used.

In v0.7.0, we've made `presetConfig.typesPluginsConfig.namingConvention` to throw if used. In this release, we've relaxed it because certain options may still work e.g. `upperCaseFirst `. If `namingConvention` is used, we warn instead.

Currently, the preset naively uses the schema type spelling/casing as the generated type. Therefore, it's important to have `namingConvention` option as `keep`. In the future, we can revisit to make sure generated resolvers have the same `namingConvention` support as the generated type file.
