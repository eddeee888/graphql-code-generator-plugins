---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Drop support for typesPluginsConfig.namingConvention - this is now always `keep`

In the preset, we have made the assumption that the type imported is the same format as given. So we have to force `keep`.
