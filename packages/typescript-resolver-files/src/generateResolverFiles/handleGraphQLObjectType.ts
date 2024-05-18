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
      logger.debug(
        `Object resolver generation was NOT skipped because there is a associated mapper: "${normalizedResolverName.withModule}". "Pattern: ${resolverGeneration.object}". Mapper: ${mapperDetails.typeMapperName}`
      );
      return `/*
    * Note: This object type is generated because "${mapperDetails.typeMapperName}" is declared. This is to ensure runtime safety.
    *
    * When a mapper is used, it is possible to hit runtime errors in some senarios:
    * - given a field name, the schema type's field type does not match mapper's field type
    * - or a schema type's field does not exist in the mapper's fields
    *
    * If you want to skip this file generation, remove the mapper or update the pattern in the \`resolverGeneration.object\` config.
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
