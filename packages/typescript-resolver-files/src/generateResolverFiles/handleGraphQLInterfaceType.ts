import { printImportLine, isMatchResolverNamePattern, logger } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLInterfaceType: GraphQLTypeHandler = (
  {
    fieldFilePath,
    isFileAlreadyOnFilesystem,
    resolverName,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    relativePathFromBaseToModule,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports, importExtension } }
) => {
  if (
    !isMatchResolverNamePattern({
      pattern: resolverGeneration.interface,
      value: normalizedResolverName.withModule,
    }) &&
    !isFileAlreadyOnFilesystem
  ) {
    logger.debug(
      `Skipped Interface resolver generation: "${normalizedResolverName.withModule}". Pattern: "${resolverGeneration.interface}".`
    );
    return;
  }

  const resolverTypeString = resolversTypeMeta.typeString;

  const resolverTypeImportDeclaration = printImportLine({
    isTypeImport: true,
    module: resolversTypeMeta.module,
    moduleType: resolversTypeMeta.moduleType,
    namedImports: [resolversTypeMeta.typeNamedImport],
    emitLegacyCommonJSImports,
    importExtension
  });
  const variableStatement = `export const ${resolverName}: ${resolverTypeString} = { /* Implement ${resolverName} interface logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'interfaceResolver',
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
      resolverTypeImportDeclaration,
      variableStatement,
      resolverType: {
        baseImport: resolversTypeMeta.typeNamedImport,
        final: resolverTypeString,
      },
    },
  };
};
