import { isMatchResolverNamePattern, logger, printImportLine } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLEnumType: GraphQLTypeHandler<
  null,
  { allowedValues: string[] }
> = (
  {
    fieldFilePath,
    relativePathFromBaseToModule,
    resolverName,
    isFileAlreadyOnFilesystem,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    allowedValues,
  },
  {
    result,
    config: { typeMappersMap, resolverGeneration, emitLegacyCommonJSImports },
  }
) => {
  if (
    !isMatchResolverNamePattern({
      pattern: resolverGeneration.enum,
      value: normalizedResolverName.withModule,
    }) &&
    !isFileAlreadyOnFilesystem
  ) {
    logger.debug(
      `Skipped Enum resolver generation: "${normalizedResolverName.withModule}". Pattern: "${resolverGeneration.enum}".`
    );
    return;
  }

  const mapperDetails = typeMappersMap[normalizedResolverName.base];
  if (!mapperDetails) {
    logger.warn(
      `No mapper found for enum type: "${normalizedResolverName.withModule}". Add a mapper to ensure no runtime error. Note: typesPluginsConfig.enumValues is not supported currently.`
    );
  }

  const resolverTypeImportDeclaration = printImportLine({
    isTypeImport: true,
    module: resolversTypeMeta.module,
    moduleType: resolversTypeMeta.moduleType,
    namedImports: [resolversTypeMeta.typeNamedImport],
    emitLegacyCommonJSImports,
  });

  const variableStatement = `export const ${resolverName}: ${
    resolversTypeMeta.typeString
  } = {
    ${allowedValues.map((value) => `${value}: '${value}'`).join(',\n')}
  }`;

  result.files[fieldFilePath] = {
    __filetype: 'enumResolver',
    content: `
    ${resolverTypeImportDeclaration}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      relativePathFromBaseToModule,
      resolverTypeImportDeclaration,
      variableStatement,
      resolverType: {
        baseImport: resolversTypeMeta.typeNamedImport,
        final: resolversTypeMeta.typeString,
      },
      normalizedResolverName,
    },
  };
};
