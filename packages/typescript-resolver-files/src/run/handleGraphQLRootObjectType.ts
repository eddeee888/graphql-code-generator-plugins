import * as path from 'path';
import type { GraphQLObjectType } from 'graphql';
import type { HandleGraphQLType } from '../types';
import {
  isRootObjectType,
  printImportModule,
  relativeModulePath,
} from '../utils';

export const handleGraphQLRootObjectType: HandleGraphQLType<
  GraphQLObjectType
> = ({ type, baseOutputDir, resolverTypesPath }, result) => {
  const typeName = type.name;
  if (!isRootObjectType(typeName)) {
    return;
  }

  const fields = type.getFields();
  const outputDir = path.join(baseOutputDir, typeName);

  result.dirs.push(outputDir);

  Object.keys(fields).forEach((fieldName) => {
    const fieldFilePath = path.join(outputDir, `${fieldName}.ts`);
    if (result.files[fieldFilePath]) {
      throw new Error(
        `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
      );
    }

    const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin
    const relativePathToResolverTypes = relativeModulePath(
      outputDir,
      resolverTypesPath
    );
    const pathToResolverModule = printImportModule(relativePathToResolverTypes);
    const resolverVariableStatement = `export const ${fieldName}: ${resolverTypeName}['${fieldName}'] = async (_parent, _arg, _ctx) => {
      /* Implement ${typeName}.${fieldName} resolver logic here */
    };`;

    result.files[fieldFilePath] = {
      __filetype: 'resolver',
      content: `import type { ${resolverTypeName} } from '${pathToResolverModule}';
      ${resolverVariableStatement}`,
      mainImportIdentifier: fieldName,
      meta: {
        belongsToRootObject: typeName,
        resolverVariableStatement,
      },
    };
  });
};
