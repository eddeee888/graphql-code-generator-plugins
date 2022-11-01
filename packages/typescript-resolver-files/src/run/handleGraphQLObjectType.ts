import * as path from 'path';
import type { GraphQLObjectType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import { printImportLine, relativeModulePath } from '../utils';

export const handleGraphQLObjectType: GraphQLTypeHandler<GraphQLObjectType> = (
  { type, outputDir },
  { resolverTypesPath },
  result
) => {
  const fieldFilePath = path.join(outputDir, `${type.name}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${type.name}, file: ${fieldFilePath}`
    );
  }

  result.dirs[outputDir] = true;

  const resolverTypeName = `${type.name}Resolvers`; // Generated type from typescript-resolvers plugin

  const resolverVariableStatement = `export const ${type.name}: ${resolverTypeName} = { 
  /* Implement ${type.name} resolver logic here */ 
};`;
  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `
    ${printImportLine({
      isTypeImport: true,
      module: relativeModulePath(outputDir, resolverTypesPath),
      namedImports: [resolverTypeName],
    })}
    ${resolverVariableStatement}`,
    mainImportIdentifier: type.name,
    meta: {
      belongsToRootObject: null,
      resolverVariableStatement,
    },
  };
};
