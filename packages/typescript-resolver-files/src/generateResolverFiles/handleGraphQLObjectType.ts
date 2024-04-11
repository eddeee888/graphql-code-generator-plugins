import type { GraphQLTypeHandler } from './types';
import { printImportLine } from '../utils';

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
      graphQLObjectTypeResolversToGenerate,
      emitLegacyCommonJSImports,
    },
  }
) => {
  if (!resolverGeneration.object) {
    return;
  }

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

  const variableStatement = `export const ${resolverName}: ${typeString} = {
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
