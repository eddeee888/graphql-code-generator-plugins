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
  };
}

export type SourcesMap = Record<string, { source: Source; moduleName: string }>;

export interface RunConfig {
  schema: GraphQLSchema;
  sourcesMap: SourcesMap;
  baseOutputDir: string;
  resolverTypesPath: string;
  relativeTargetDir: string;
  mainFile: string;
  mode: 'merged' | 'modules';
}

export interface RunResult {
  dirs: Record<string, true>;
  files: Record<string, StandardFile | ResolverFile>;
}

export type RootObjectType = 'Query' | 'Mutation' | 'Subscription';

export type HandleGraphQLType<T, O = string> = (
  params: { type: T; outputDir: O },
  runConfig: RunConfig,
  result: RunResult
) => void;
