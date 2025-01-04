---
'@eddeee888/gcg-typescript-resolver-files': minor
---

Add moduleNamingMode option to determine the module name for each schema file

- **`last`**: The module name is derived from the **last** directory (within the schema directory) in the file's path.
- **`first`**: The module name is derived from the **first** directory (within the schema directory) in the file's path.
- **any number**: The module name is derived from the **nth zero-indexed** directory (within the schema directory) in the file's path. Supports negative numbers which select the **nth** directory from the back of the file's path.
