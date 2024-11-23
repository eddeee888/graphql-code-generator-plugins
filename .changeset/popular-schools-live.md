---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add mappersRelativeTargetDir config option

`string` (Default: `./`)

By default, mappers must be siblings with the schema they represent. For example, if the schema file is `/path/to/schema.graphql`, the mapper file is `/path/to/schema.mappers.ts`. This extension allows mappers to reside in a different directory relative to the schema file using the pattern `<schemaPath>/<mappersRelativeTargetDir>/<schemaName><mappersFileExtension>`.
