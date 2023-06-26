import type { GraphQLSchema } from 'graphql';
import { type SourceFile, Project } from 'ts-morph';
import type { GraphQLObjectTypeResolversToGenerate } from '../getGraphQLObjectTypeResolversToGenerate';
import type { ParseSourcesResult } from '../parseSources';
import type { ImportLineMeta } from '../utils';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import { ExtendObjectType } from '../getExtendObjectType/getExtendObjectType';

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
    moduleName: string;
    variableStatement: string;
    normalizedResolverName: string;
    isScalar: boolean;
  };
}

export interface RootObjectTypeFieldResolverFile extends BaseVirtualFile {
  __filetype: 'rootObjectTypeFieldResolver';
  meta: {
    moduleName: string;
    belongsToRootObject: string;
    variableStatement: string;
    normalizedResolverName: string;
  };
}

export interface ObjectTypeFile extends BaseVirtualFile {
  __filetype: 'objectType';
  meta: {
    moduleName: string;
    variableStatement: string;
    normalizedResolverName: string;
    resolversToGenerate?: GraphQLObjectTypeResolversToGenerate[number];
    isScalar: false;
  };
}

export type ResolverFile =
  | GeneralResolverFile
  | RootObjectTypeFieldResolverFile
  | ObjectTypeFile;

export interface ObjectTypeExtensionFields {
  objectTypeName: string;
  fieldName: string;
}

export interface GenerateResolverFilesContext {
  config: {
    schema: GraphQLSchema;
    extendObject: ExtendObjectType;
    sourceMap: ParseSourcesResult['sourceMap'];
    baseOutputDir: string;
    resolverTypesPath: string;
    resolverRelativeTargetDir: string;
    resolverMainFile: string;
    resolverMainFileMode: ParsedPresetConfig['resolverMainFileMode'];
    mode: ParsedPresetConfig['mode'];
    whitelistedModules: string[];
    blacklistedModules: string[];
    externalResolvers: Record<string, string>;
    tsMorph: {
      project: Project;
      typesSourceFile: SourceFile;
    };
    graphQLObjectTypeResolversToGenerate: GraphQLObjectTypeResolversToGenerate;
    fixObjectTypeResolvers: ParsedPresetConfig['fixObjectTypeResolvers'];
    emitLegacyCommonJSImports: boolean;
  };
  result: {
    files: Record<string, StandardFile | ResolverFile>;
    externalImports: Record<
      string,
      {
        moduleName: string;
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
  moduleName: string;
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
    module: ImportLineMeta['module'];
    moduleType: ImportLineMeta['moduleType'];
    // typeString: valid type specified for a field or object type
    typeString: `${string}Resolvers` | `${string}Resolvers['${string}']`;
  };
}

export type GraphQLTypeHandler<BelongsToRootObject = null> = (
  params: GraphQLTypeHandlerParams<BelongsToRootObject>,
  ctx: GenerateResolverFilesContext
) => void;
