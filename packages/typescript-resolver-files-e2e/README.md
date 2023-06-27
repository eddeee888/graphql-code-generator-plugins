# typescript-resolver-files-e2e

This is the e2e tests for `typescript-resolver-files`

## Generate a new test suite

```shell
nx g @graphql-code-generator-plugins/workspace-plugin:typescript-resolver-files-add-e2e-test <test-name-in-kebab-case>
```

## Testing

```shell
nx e2e typescript-resolver-files-e2e # Cleans up all generated files, generates files for each test, then assert.

nx e2e-run typescript-resolver-files-e2e -c clean-run # Cleans up all generated files, generates files for each test.

nx e2e-run typescript-resolver-files-e2e # Generates files for each test.

nx graphql-codegen typescript-resolver-files-e2e -c <test-name> # Generates files for a test.

nx e2e-cleanup typescript-resolver-files-e2e # Cleans up all generated files.

nx e2e-cleanup typescript-resolver-files-e2e -c <test-name> # Cleans up all generated files for a test.
```
