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

export interface RunResult {
  dirs: string[];
  files: Record<string, StandardFile | ResolverFile>;
}

export type RootObjectType = 'Query' | 'Mutation' | 'Subscription';

export interface HandleGraphQLTypeParams<T> {
  baseOutputDir: string;
  resolverTypesPath: string;
  type: T;
}

export type HandleGraphQLType<T> = (
  params: HandleGraphQLTypeParams<T>,
  result: RunResult
) => void;
