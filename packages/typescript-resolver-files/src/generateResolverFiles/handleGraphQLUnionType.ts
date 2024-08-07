import { printImportLine, isMatchResolverNamePattern, logger } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLUnionType: GraphQLTypeHandler = (
  {
    fieldFilePath,
    isFileAlreadyOnFilesystem,
    resolverName,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    relativePathFromBaseToModule,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (
    !isMatchResolverNamePattern({
      pattern: resolverGeneration.union,
      value: normalizedResolverName.withModule,
    }) &&
    !isFileAlreadyOnFilesystem
  ) {
    logger.debug(
      `Skipped Union resolver generation: "${normalizedResolverName.withModule}". Pattern: "${resolverGeneration.union}".`
    );
    return;
  }

  const resolverTypeImportDeclaration = printImportLine({
    isTypeImport: true,
    module: resolversTypeMeta.module,
    moduleType: resolversTypeMeta.moduleType,
    namedImports: [resolversTypeMeta.typeNamedImport],
    emitLegacyCommonJSImports,
  });
  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { /* Implement ${resolverName} union logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'unionResolver',
    filesystem: {
      type: 'virtual',
      contentUpdated: false,
    },
    content: `
    ${resolverTypeImportDeclaration}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      relativePathFromBaseToModule,
      normalizedResolverName,
      resolverType: {
        baseImport: resolversTypeMeta.typeNamedImport,
        final: resolversTypeMeta.typeString,
      },
      resolverTypeImportDeclaration,
      variableStatement,
    },
  };
};
