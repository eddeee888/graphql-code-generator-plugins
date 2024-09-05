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
  const matchedPatternToGenerate = isMatchResolverNamePattern({
    pattern: resolverGeneration.enum,
    value: normalizedResolverName.withModule,
  });
  const mapperDetails = typeMappersMap[normalizedResolverName.base];

  if (
    !matchedPatternToGenerate &&
    !mapperDetails &&
    !isFileAlreadyOnFilesystem
  ) {
    logger.debug(
      `Skipped Enum resolver generation: "${normalizedResolverName.withModule}". Pattern: "${resolverGeneration.enum}".`
    );
    return;
  }

  const forcedGenerationWarning = (() => {
    if (!matchedPatternToGenerate && mapperDetails) {
      logger.debug(
        `Enum resolver generation was NOT skipped because there is a associated mapper: "${normalizedResolverName.withModule}". "Pattern: ${resolverGeneration.enum}". Mapper: ${mapperDetails.typeMapperName}`
      );
      return `/*
    * Note: This enum file is generated because "${mapperDetails.typeMapperName}" is declared. This is to ensure runtime safety.
    * If you want to skip this file generation, remove the mapper or update the pattern in the \`resolverGeneration.object\` config.
    */\n`;
    }
    return '';
  })();

  const resolverTypeImportDeclaration = printImportLine({
    isTypeImport: true,
    module: resolversTypeMeta.module,
    moduleType: resolversTypeMeta.moduleType,
    namedImports: [resolversTypeMeta.typeNamedImport],
    emitLegacyCommonJSImports,
  });

  const variableStatement = `${forcedGenerationWarning}export const ${resolverName}: ${
    resolversTypeMeta.typeString
  } = {
    ${allowedValues.map((value) => `${value}: '${value}'`).join(',\n')}
  }`;

  result.files[fieldFilePath] = {
    __filetype: 'enumResolver',
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
      resolverTypeImportDeclaration,
      variableStatement,
      resolverType: {
        baseImport: resolversTypeMeta.typeNamedImport,
        final: resolversTypeMeta.typeString,
      },
      normalizedResolverName,
      allowedValues,
    },
  };
};
