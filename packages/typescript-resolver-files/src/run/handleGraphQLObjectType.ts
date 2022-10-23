import * as path from 'path';
import type { GraphQLObjectType } from 'graphql';
import type { HandleGraphQLType } from '../types';
import {
  isRootObjectType,
  printImportModule,
  relativeModulePath,
} from '../utils';

export const handleGraphQLObjectType: HandleGraphQLType<GraphQLObjectType> = (
  { type, baseOutputDir, resolverTypesPath },
  result
) => {
  if (isRootObjectType(type.name)) {
    return;
  }

  const typeName = type.name;
  const fieldFilePath = path.join(baseOutputDir, `${typeName}.ts`);
  if (result.files[fieldFilePath]) {
    throw new Error(
      `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
    );
  }

  const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
  const relativePathToResolverTypes = relativeModulePath(
    baseOutputDir,
    resolverTypesPath
  );
  const pathToResolverModule = printImportModule(relativePathToResolverTypes);
  const resolverVariableStatement = `export const ${typeName}: ${resolverTypeName} = { 
  /* Implement ${typeName} resolver logic here */ 
};`;
  result.files[fieldFilePath] = {
    __filetype: 'resolver',
    content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
    ${resolverVariableStatement}`,
    mainImportIdentifier: typeName,
    meta: {
      belongsToRootObject: null,
      resolverVariableStatement,
    },
  };
};
