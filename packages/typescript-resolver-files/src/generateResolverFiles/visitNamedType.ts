import type { GraphQLTypeHandler, GenerateResolverFilesContext } from './types';
import { addExternalResolverImport } from './addExternalResolverImport';
import type { ResolverDetails } from '../parseGraphQLSchema';

export const visitNamedType = <T = null>(
  {
    moduleName,
    relativePathFromBaseToModule,
    normalizedResolverName,
    resolverFile,
    relativePathToResolverTypesFile,
    typeNamedImport,
    typeString,
    belongsToRootObject,
    visitor,
  }: ResolverDetails & {
    belongsToRootObject: T;
    visitor: GraphQLTypeHandler<T>;
  },
  ctx: GenerateResolverFilesContext
): void => {
  const externalResolverImportSyntax =
    ctx.config.externalResolvers[normalizedResolverName.base];

  // when used with extended object types scenario
  if (externalResolverImportSyntax) {
    // If has external resolver, use it
    addExternalResolverImport(
      {
        moduleName,
        relativePathFromBaseToModule,
        normalizedResolverName: normalizedResolverName.base,
        configImportSyntax: externalResolverImportSyntax,
      },
      ctx
    );

    return;
  }

  if (ctx.result.files[resolverFile.path]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${resolverFile.name}, file: ${resolverFile.path}`
    );
  }

  visitor(
    {
      belongsToRootObject,
      fieldFilePath: resolverFile.path,
      isFileAlreadyOnFilesystem: resolverFile.isOnFilesystem,
      moduleName,
      normalizedResolverName,
      relativePathFromBaseToModule,
      resolverName: resolverFile.name,
      resolversTypeMeta: {
        module: relativePathToResolverTypesFile,
        moduleType: 'file',
        typeNamedImport: typeNamedImport(ctx.config.generatedTypesFileMeta),
        typeString: typeString(ctx.config.generatedTypesFileMeta),
      },
    },
    ctx
  );
};
