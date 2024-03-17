import { printImportLine, isMatchResolverNamePattern, logger } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLUnionType: GraphQLTypeHandler = (
  {
    fieldFilePath,
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
    })
  ) {
    logger.debug(
      `Skipped resolver generation: ${normalizedResolverName.withModule}. Pattern: ${resolverGeneration.union}.`
    );
    return;
  }

  const variableStatement = `export const ${resolverName}: ${resolversTypeMeta.typeString} = { /* Implement ${resolverName} union logic here */ };`;

  result.files[fieldFilePath] = {
    __filetype: 'generalResolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: resolversTypeMeta.module,
      moduleType: resolversTypeMeta.moduleType,
      namedImports: [resolversTypeMeta.typeNamedImport],
      emitLegacyCommonJSImports,
    })}
    ${variableStatement}`,
    mainImportIdentifier: resolverName,
    meta: {
      moduleName,
      relativePathFromBaseToModule,
      normalizedResolverName,
      resolverTypeString: resolversTypeMeta.typeString,
      variableStatement,
    },
  };
};
