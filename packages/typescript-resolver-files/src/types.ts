import type { GraphQLSchema } from 'graphql';

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

export interface RunConfig {
  baseOutputDir: string;
  resolverTypesPath: string;
  schema: GraphQLSchema;
}

export interface RunResult {
  dirs: string[];
  files: Record<string, StandardFile | ResolverFile>;
}

export type RootObjectType = 'Query' | 'Mutation' | 'Subscription';

export type HandleGraphQLType<T> = (
  type: T,
  params: RunConfig,
  result: RunResult
) => void;
