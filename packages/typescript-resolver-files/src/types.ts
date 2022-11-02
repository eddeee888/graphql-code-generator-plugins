import type { GraphQLSchema } from 'graphql';
import type { Source } from '@graphql-tools/utils';

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

export type SourcesMap = Record<string, { source: Source; moduleName: string }>;
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
    externalResolvers: Record<string, string>;
  };
  result: {
    dirs: Record<string, true>;
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
  resolverName: string;
  normalizedResolverName: string;
  resolverType: {
    namedImport: string;
    type: string;
  };
  fieldFilePath: string;
  relativeModulePath: string;
  belongsToRootObject: RootObjectType | null;
}

export type GraphQLTypeHandler = (
  params: GraphQLTypeHandlerParams,
  ctx: RunContext
) => void;
