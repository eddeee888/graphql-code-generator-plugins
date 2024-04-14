---
'@eddeee888/gcg-server-config': minor
'@eddeee888/gcg-typescript-resolver-files': patch
---

Move union and interface config from server config to server preset

This config is fairly opinionated and may not make sense being on server config. However, it is definitely the default mode of operation we want to use for server preset to avoid having extra files, simplifying the setup.
