import type { GraphQLTypeHandler } from './types';
import { printImportLine, isMatchResolverNamePattern, logger } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler<
  null,
  {
    fieldsToPick?: string[];
    pickReferenceResolver?: boolean;
  }
> = (
  {
    fieldFilePath,
    resolverName,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    relativePathFromBaseToModule,
    fieldsToPick = [], // If fieldsToPick.length === 0, it means the current object handles all resolvers
    pickReferenceResolver,
  },
  {
    result,
    config: {
      resolverGeneration,
      typeMappersMap,
      graphQLObjectTypeResolversToGenerate,
      emitLegacyCommonJSImports,
    },
  }
) => {
  const matchedPatternToGenerate = isMatchResolverNamePattern({
    pattern: resolverGeneration.object,
    value: normalizedResolverName.withModule,
  });
  const mapperDetails = typeMappersMap[normalizedResolverName.base];

  if (!matchedPatternToGenerate && !mapperDetails) {
    logger.debug(
      `Skipped Object resolver generation: "${normalizedResolverName.withModule}". "Pattern: ${resolverGeneration.object}".`
    );
    return;
  }

  const forcedGenerationWarning = (() => {
    if (!matchedPatternToGenerate && mapperDetails) {
      logger.warn(
        `Object resolver generation was NOT skipped because there is a associated mapper: "${normalizedResolverName.withModule}". "Pattern: ${resolverGeneration.object}". Mapper: ${mapperDetails.typeMapperName}`
      );
      return `/*
    * WARNING
    * This object type is NOT supposed to be generated because it is in the "${resolverGeneration.object}" ignore pattern.
    *
    * However, it is generated because "${mapperDetails.typeMapperName}" is declared. This is to ensure runtime safety.
    * When a mapper is used, it is possible to hit runtime errors if a mapper's field does not match the schema's field type.
    *
    * If you want to skip this generation, remove the mapper or update the ignore pattern in the config.
    */\n`;
    }
    return '';
  })();

  if (fieldsToPick.length > 0 && pickReferenceResolver) {
    fieldsToPick.push('__resolveReference');
  }

  // `typeString` contains the resolver type
  // If there's fieldsToPick, we must only pick said fields from the original resolver type
  const typeString =
    fieldsToPick.length > 0
      ? `Pick<${resolversTypeMeta.typeString}, ${fieldsToPick
          .map((fieldName) => `'${fieldName}'`)
          .join('|')}>`
      : resolversTypeMeta.typeString;

  // Array of all resolvers that may need type checking
  // If there's fieldsToPick, we must only generate said fields
  const allResolversToGenerate =
    graphQLObjectTypeResolversToGenerate[resolverName];
  const resolversToGenerate =
    fieldsToPick.length > 0
      ? fieldsToPick.reduce<typeof allResolversToGenerate>(
          (res, fieldToPick) => {
            if (allResolversToGenerate) {
              res[fieldToPick] = allResolversToGenerate[fieldToPick];
            }
            return res;
          },
          {}
        )
      : allResolversToGenerate;

  const variableStatement = `${forcedGenerationWarning}export const ${resolverName}: ${typeString} = {
    /* Implement ${resolverName} resolver logic here */
  };`;

  result.files[fieldFilePath] = {
    __filetype: 'objectType',
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
      variableStatement,
      resolverTypeString: typeString,
      resolversToGenerate,
    },
  };
};
