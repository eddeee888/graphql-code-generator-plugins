import { printImportLine, type RootObjectType } from '../utils';
import type { GraphQLTypeHandler } from './types';

export const handleGraphQLRootObjectTypeField: GraphQLTypeHandler<
  RootObjectType
> = (
  {
    fieldFilePath,
    resolverName,
    belongsToRootObject,
    normalizedResolverName,
    resolversTypeMeta,
    moduleName,
  },
  { result, config: { resolverGeneration, emitLegacyCommonJSImports } }
) => {
  if (
    (belongsToRootObject === 'Query' && !resolverGeneration.query) ||
    (belongsToRootObject === 'Mutation' && !resolverGeneration.mutation) ||
    (belongsToRootObject === 'Subscription' && !resolverGeneration.subscription)
  ) {
    return;
  }

  const suggestion = `/* Implement ${normalizedResolverName} resolver logic here */`;

  let variableStatement = `export const ${resolverName}: NonNullable<${resolversTypeMeta.typeString}> = async (_parent, _arg, _ctx) => { ${suggestion} };`;
  if (belongsToRootObject === 'Subscription') {
    variableStatement = `export const ${resolverName}: NonNullable<${resolversTypeMeta.typeString}> = {
      subscribe: async (_parent, _arg, _ctx) => { ${suggestion} },
    }`;
  }

  result.files[fieldFilePath] = {
    __filetype: 'rootObjectTypeFieldResolver',
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
      belongsToRootObject,
      variableStatement,
      normalizedResolverName,
    },
  };
};
