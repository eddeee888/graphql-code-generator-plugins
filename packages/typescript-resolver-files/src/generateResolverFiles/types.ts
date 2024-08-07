import type { SourceFile, Project } from 'ts-morph';
import type * as typeScriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import type { GraphQLObjectTypeResolversToGenerate } from '../getGraphQLObjectTypeResolversToGenerate';
import type { TypeMappersMap } from '../parseTypeMappers';
import type { ImportLineMeta, RootObjectType } from '../utils';
import type { ParsedPresetConfig } from '../validatePresetConfig';
import type { NormalizedResolverName } from '../parseGraphQLSchema';
import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';

export type GeneratedTypesFileMeta = {
  generatedResolverTypes: NonNullable<
    Awaited<ReturnType<typeof typeScriptResolversPlugin.plugin>>['meta']
  >['generatedResolverTypes'];
};

interface BaseVirtualFile {
  __filetype: string;
  filesystem: {
    type: 'virtual' | 'filesystem';
    contentUpdated: boolean;
  };
  content: string;
  mainImportIdentifier: string;
}

export interface StandardFile extends BaseVirtualFile {
  __filetype: 'file';
}

export interface InterfacelResolverFile extends BaseVirtualFile {
  __filetype: 'interfaceResolver';
  meta: {
    moduleName: string;
    relativePathFromBaseToModule: string[];
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `NodeResolvers`
      final: string;
    };
    normalizedResolverName: NormalizedResolverName;
  };
}

export interface UnionResolverFile extends BaseVirtualFile {
  __filetype: 'unionResolver';
  meta: {
    moduleName: string;
    relativePathFromBaseToModule: string[];
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `NodeResolvers`
      final: string;
    };
    normalizedResolverName: NormalizedResolverName;
  };
}

export interface ScalarResolverFile extends BaseVirtualFile {
  __filetype: 'scalarResolver';
  meta: {
    moduleName: string;
    relativePathFromBaseToModule: string[];
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `NodeResolvers`
      final: string;
    };
    normalizedResolverName: NormalizedResolverName;
  };
}

export interface EnumResolverFile extends BaseVirtualFile {
  __filetype: 'enumResolver';
  meta: {
    moduleName: string;
    relativePathFromBaseToModule: string[];
    resolverTypeImportDeclaration: string;
    variableStatement: string;
    resolverType: {
      baseImport: string; // e.g. `NodeResolvers`
      final: string;
    };
    normalizedResolverName: NormalizedResolverName;
    allowedValues: string[];
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
      final: string; // e.g. `UserResolvers`, `Pick<UserResolvers, 'id'|'name'>`
      otherVariants: string[]; // e.g. `Pick<UserResolvers, |'id'|'name'>`
    };
    normalizedResolverName: NormalizedResolverName;
    resolversToGenerate?: GraphQLObjectTypeResolversToGenerate[number];
  };
}

export type ResolverFile =
  | RootObjectTypeFieldResolverFile
  | ObjectTypeFile
  | InterfacelResolverFile
  | UnionResolverFile
  | ScalarResolverFile
  | EnumResolverFile;

export interface GenerateResolverFilesContext {
  config: {
    baseOutputDir: string;
    resolverTypesPath: string;
    resolverRelativeTargetDir: string;
    resolverMainFile: string;
    resolverMainFileMode: ParsedPresetConfig['resolverMainFileMode'];
    resolverGeneration: ParsedPresetConfig['resolverGeneration'];
    unmanagedResolvers: Record<string, string>;
    tsMorph: {
      project: Project;
      typesSourceFile: SourceFile;
    };
    typeMappersMap: TypeMappersMap;
    parsedGraphQLSchemaMeta: ParsedGraphQLSchemaMeta;
    graphQLObjectTypeResolversToGenerate: GraphQLObjectTypeResolversToGenerate;
    fixObjectTypeResolvers: ParsedPresetConfig['fixObjectTypeResolvers'];
    emitLegacyCommonJSImports: boolean;
    generatedTypesFileMeta: GeneratedTypesFileMeta;
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
