import type { GraphQLTypeHandler } from './types';
import { printImportLine, isMatchResolverNamePattern, logger } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler<
  null,
  {
    fieldsToPick?: string[];
  }
> = (
  {
    fieldFilePath,
    resolverName,
    isFileAlreadyOnFilesystem,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
    relativePathFromBaseToModule,
    fieldsToPick = [], // If fieldsToPick.length === 0, it means the current object handles all resolvers
    generatedTypesFileMeta,
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

  if (
    !matchedPatternToGenerate &&
    !mapperDetails &&
    !isFileAlreadyOnFilesystem
  ) {
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
    * When a mapper is used, it is possible to hit runtime errors in some scenarios:
    * - given a field name, the schema type's field type does not match mapper's field type
    * - or a schema type's field does not exist in the mapper's fields
    *
    * If you want to skip this file generation, remove the mapper or update the pattern in the \`resolverGeneration.object\` config.
    */\n`;
    }
    return '';
  })();

  const hasFieldsToPick = fieldsToPick.length > 0;

  // __isTypeOf is required to resolve abstract types, should user chooses this approach.
  // TODO: Run static analysis to enforce only one __isTypeOf per Object type, so users cannot accidentally implement/override it across modules
  if (hasFieldsToPick) {
    fieldsToPick.push('__isTypeOf');
  }

  if (
    hasFieldsToPick &&
    generatedTypesFileMeta.generatedResolverTypes.userDefined[
      normalizedResolverName.base
    ].federation?.hasResolveReference
  ) {
    fieldsToPick.push('__resolveReference');
  }

  // - `typeString` contains the resolver type
  //   If there's fieldsToPick, we must only pick said fields from the original resolver type
  // - `otherTypeStringVariants` contains other types that are the same as `typeString` but formatted differently
  //   This is used to check if the resolver type is the same when running static analysis
  //   We want to use string comparison instead of true AST check because it's a lot faster and simpler
  const { typeString, otherTypeStringVariants } = ((): {
    typeString: string;
    otherTypeStringVariants: string[];
  } => {
    if (hasFieldsToPick) {
      return {
        typeString: `Pick<${resolversTypeMeta.typeString}, ${fieldsToPick
          .map((fieldName) => `'${fieldName}'`)
          .join('|')}>`,
        otherTypeStringVariants: [
          `Pick<${resolversTypeMeta.typeString}, |${fieldsToPick
            .map((fieldName) => `'${fieldName}'`)
            .join('|')}>`,
        ],
      };
    }

    return {
      typeString: resolversTypeMeta.typeString,
      otherTypeStringVariants: [],
    };
  })();

  // Array of all resolvers that may need type checking
  // If there's fieldsToPick, we must only generate said fields
  const allResolversToGenerate =
    graphQLObjectTypeResolversToGenerate[resolverName];
  const resolversToGenerate = hasFieldsToPick
    ? fieldsToPick.reduce<typeof allResolversToGenerate>((res, fieldToPick) => {
        if (allResolversToGenerate && allResolversToGenerate[fieldToPick]) {
          res[fieldToPick] = allResolversToGenerate[fieldToPick];
        }
        return res;
      }, {})
    : allResolversToGenerate;

  const variableStatement = `${forcedGenerationWarning}export const ${resolverName}: ${typeString} = {
    /* Implement ${resolverName} resolver logic here */
  };`;

  const resolverTypeImportDeclaration = printImportLine({
    isTypeImport: true,
    module: resolversTypeMeta.module,
    moduleType: resolversTypeMeta.moduleType,
    namedImports: [resolversTypeMeta.typeNamedImport],
    emitLegacyCommonJSImports,
  });

  result.files[fieldFilePath] = {
    __filetype: 'objectType',
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
        final: typeString,
        otherVariants: otherTypeStringVariants,
      },
      resolversToGenerate,
    },
  };
};
