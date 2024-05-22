import type { SourceFile, Project } from 'ts-morph';
import type { GraphQLObjectTypeResolversToGenerate } from '../getGraphQLObjectTypeResolversToGenerate';
import type { TypeMappersMap } from '../parseTypeMappers';
import type { ImportLineMeta, RootObjectType } from '../utils';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import type { NormalizedResolverName } from '../parseGraphQLSchema';
import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';

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
    relativePathFromBaseToModule: string[];
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `NodeResolvers`
      final: string;
    } | null; // GraphQL Scalar's resolverType is null
    normalizedResolverName: NormalizedResolverName;
  };
}

export interface RootObjectTypeFieldResolverFile extends BaseVirtualFile {
  __filetype: 'rootObjectTypeFieldResolver';
  meta: {
    moduleName: string;
    relativePathFromBaseToModule: string[];
    belongsToRootObject: RootObjectType;
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `QueryResolvers`
      resolver: string; // e.g. `QueryResolvers['user']`
      final: string; // e.g. `NonNullable<<QueryResolvers['user']>`
    };
    normalizedResolverName: NormalizedResolverName;
  };
}

export interface ObjectTypeFile extends BaseVirtualFile {
  __filetype: 'objectType';
  meta: {
    moduleName: string;
    relativePathFromBaseToModule: string[];
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `UserResolvers`
      final: string; // e.g. `UserResolvers`, `Pick<UserResolvers, 'id'>`
    };
    normalizedResolverName: NormalizedResolverName;
    resolversToGenerate?: GraphQLObjectTypeResolversToGenerate[number];
  };
}

export type ResolverFile =
  | GeneralResolverFile
  | RootObjectTypeFieldResolverFile
  | ObjectTypeFile;

export interface GenerateResolverFilesContext {
  config: {
    baseOutputDir: string;
    resolverTypesPath: string;
    resolverRelativeTargetDir: string;
    resolverMainFile: string;
    resolverMainFileMode: ParsedPresetConfig['resolverMainFileMode'];
    resolverGeneration: ParsedPresetConfig['resolverGeneration'];
    externalResolvers: Record<string, string>;
    tsMorph: {
      project: Project;
      typesSourceFile: SourceFile;
    };
    typeMappersMap: TypeMappersMap;
    parsedGraphQLSchemaMeta: ParsedGraphQLSchemaMeta;
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
        relativePathFromBaseToModule: string[];
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
  relativePathFromBaseToModule: string[];
  fieldFilePath: string;
  resolverName: string;
  isFileAlreadyOnFilesystem: boolean;
  belongsToRootObject: BelongsToRootObject;
  normalizedResolverName: NormalizedResolverName;
  resolversTypeMeta: {
    // typeNamedImport: name of the type to be imported from `module`.
    // If it's a root object type field, this is the root type (e.g. Query, Mutation, Subscription).
    // Otherwise, it's the object type e.g. User, Profile, etc.
    typeNamedImport: string;
    // path to typescript-resolvers file
    module: ImportLineMeta['module'];
    moduleType: ImportLineMeta['moduleType'];
    // typeString: valid type specified for a field or object type
    typeString: string;
  };
}

export type GraphQLTypeHandler<
  BelongsToRootObject = null,
  ExtraParams = Record<string, unknown>
> = (
  params: GraphQLTypeHandlerParams<BelongsToRootObject> & ExtraParams,
  ctx: GenerateResolverFilesContext
) => void;
