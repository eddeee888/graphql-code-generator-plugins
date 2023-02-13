import type { GraphQLSchema } from 'graphql';
import type { ProjectOptions } from 'ts-morph';
import type { GraphQLObjectTypeResolversToGenerate } from '../getGraphQLObjectTypeResolversToGenerate';
import type { VirtualTypesFile } from '../generateVirtualTypesFile';
import type { ParseSourcesResult } from '../parseSources';
import type { ImportLineMeta, RootObjectType } from '../utils';

interface BaseVirtualFile {
  __filetype: string;
  content: string;
  mainImportIdentifier: string;
}

export interface StandardFile extends BaseVirtualFile {
  __filetype: 'file';
}

export interface GeneralResolverFile extends BaseVirtualFile {
  __filetype: 'generalResolver';
  meta: {
    variableStatement: string;
    normalizedResolverName: string;
  };
}

export interface RootObjectTypeFieldResolverFile extends BaseVirtualFile {
  __filetype: 'rootObjectTypeFieldResolver';
  meta: {
    belongsToRootObject: RootObjectType;
    variableStatement: string;
    normalizedResolverName: string;
  };
}

export interface ObjectTypeFile extends BaseVirtualFile {
  __filetype: 'objectType';
  meta: {
    variableStatement: string;
    normalizedResolverName: string;
    resolversToGenerate?: GraphQLObjectTypeResolversToGenerate[number];
  };
}

export type ResolverFile =
  | GeneralResolverFile
  | RootObjectTypeFieldResolverFile
  | ObjectTypeFile;

export interface GenerateResolverFilesContext {
  config: {
    schema: GraphQLSchema;
    sourceMap: ParseSourcesResult['sourceMap'];
    baseOutputDir: string;
    resolverTypesPath: string;
    resolverRelativeTargetDir: string;
    resolverMainFile: string;
    mode: 'merged' | 'modules';
    whitelistedModules: string[];
    blacklistedModules: string[];
    externalResolvers: Record<string, string>;
    graphQLObjectTypeResolversToGenerate: GraphQLObjectTypeResolversToGenerate;
    tsMorphProjectOptions: ProjectOptions;
    virtualTypesFile: VirtualTypesFile;
    fixObjectTypeResolvers: boolean;
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

export interface GraphQLTypeHandlerParams<BelongsToRootObject = null> {
  fieldFilePath: string;
  resolverName: string;
  belongsToRootObject: BelongsToRootObject;
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

export type GraphQLTypeHandler<BelongsToRootObject = null> = (
  params: GraphQLTypeHandlerParams<BelongsToRootObject>,
  ctx: GenerateResolverFilesContext
) => void;
