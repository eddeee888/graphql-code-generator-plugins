export interface TypedPresetConfig {
  /**
   * Path to the TypeScript configuration file (tsconfig.json) used by the project.
   * This is used to resolve TypeScript compilation settings and module resolution.
   *
   * @example
   * ```typescript
   * {
   *   tsConfigFilePath: './tsconfig.json'
   * }
   * ```
   */
  tsConfigFilePath: string;

  /**
   * Configuration for the GraphQL tag function used in your project.
   * This defines how GraphQL queries are tagged and imported in your codebase.
   */
  gqlTag: {
    /**
     * The name of the GraphQL tag function.
     *
     * @example 'gql'
     * @example 'graphql'
     */
    name: string;

    /**
     * The module path from which the GraphQL tag function is imported.
     *
     * @example '@apollo/client' for Apollo Client
     * @example 'graphql' for the graphql-tag library
     */
    importFrom: string;

    /**
     * Specifies whether the import path should be treated as absolute or relative.
     *
     * 'absolute': The import is treated as an absolute import
     * @example `import { graphql } from 'src/gql'`
     * @example `import { gql } from '@apollo/client'`
     *
     * 'relative': The import is treated as a relative file path from the preset base path.
     * The preset automatically constructs the relative path to the import.
     * @example `import { graphql }` from '../../gql'`
     */
    importType: 'absolute' | 'relative';
  };

  /**
   * The module path from which GraphQL hooks are imported.
   * This is typically the same as the GraphQL client library being used.
   *
   * @example '@apollo/client' for Apollo Client v3
   * @example '@apollo/client/react' for Apollo Client v4
   */
  hooksImportFrom: string;
}
