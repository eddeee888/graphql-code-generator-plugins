import type { GraphQLSchema } from 'graphql';
import type { SourcesMap } from './utils';

interface BaseVirtualFile {
  __filetype: string;
  content: string;
  mainImportIdentifier: string;
}

export interface StandardFile extends BaseVirtualFile {
  __filetype: 'file';
}

export interface ResolverFile extends BaseVirtualFile {
  __filetype: 'resolver';
  meta: {
    belongsToRootObject: RootObjectType | null;
    resolverVariableStatement: string;
    normalizedResolverName: string;
  };
}

export interface ImportLineMeta {
  isTypeImport: boolean;
  module: string;
  namedImports: (string | { propertyName: string; identifierName: string })[];
  defaultImport?: string;
}

export interface RunContext {
  config: {
    schema: GraphQLSchema;
    sourcesMap: SourcesMap;
    baseOutputDir: string;
    resolverTypesPath: string;
    relativeTargetDir: string;
    mainFile: string;
    mode: 'merged' | 'modules';
    whitelistedModules: string[];
    blacklistedModules: string[];
    externalResolvers: Record<string, string>;
  };
  result: {
    files: Record<string, StandardFile | ResolverFile>;
    externalImports: Record<
      string,
      {
        importLineMeta: ImportLineMeta;
        identifierUsages: {
          identifierName: string;
          normalizedResolverName: string;
        }[];
      }
    >;
  };
}

export type RootObjectType = 'Query' | 'Mutation' | 'Subscription';

export interface GraphQLTypeHandlerParams {
  fieldFilePath: string;
  resolverName: string;
  belongsToRootObject: RootObjectType | null;
  normalizedResolverName: string;
  resolversTypeMeta: {
    // typeNamedImport: name of the type to be imported from `module`.
    // If it's a root object type field, this is the root type (e.g. Query, Mutation, Subscription).
    // Otherwise, it's the object type e.g. User, Profile, etc.
    typeNamedImport: `${string}Resolvers`;
    // path to typescript-resolvers file
    module: string;
    // typeString: valid type specified for a field or object type
    typeString:
      | `${string}Resolvers`
      | `${RootObjectType}Resolvers['${string}']`;
  };
}

export type GraphQLTypeHandler = (
  params: GraphQLTypeHandlerParams,
  ctx: RunContext
) => void;
