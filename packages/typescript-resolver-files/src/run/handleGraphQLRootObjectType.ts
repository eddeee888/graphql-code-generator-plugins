import * as path from 'path';
import type { GraphQLObjectType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import {
  normalizeResolverName,
  isRootObjectType,
  printImportLine,
  relativeModulePath,
} from '../utils';
import { parseLocation } from './parseLocation';
import { addExternalResolverImport } from './addExternalResolverImport';

export const handleGraphQLRootObjectType: GraphQLTypeHandler<
  GraphQLObjectType,
  null
> = ({ type }, runConfig, result) => {
  const typeName = type.name;
  if (!isRootObjectType(typeName)) {
    return;
  }

  const fields = type.getFields();

  Object.entries(fields).forEach(([fieldName, fieldNode]) => {
    const normalizedResolverName = normalizeResolverName(fieldName, typeName);
    const configImportSyntax =
      runConfig.resolverImports[normalizedResolverName];
    if (configImportSyntax) {
      addExternalResolverImport(
        {
          normalizedResolverName: normalizeResolverName(normalizedResolverName),
          configImportSyntax,
        },
        result
      );
      return;
    }

    const locationInfo = parseLocation(runConfig, fieldNode.astNode?.loc);
    if (!locationInfo.isInWhitelistedModule) {
      return;
    }

    const outputDir = path.join(locationInfo.pathToLocation, typeName);
    result.dirs[outputDir] = true;

    const fieldFilePath = path.join(outputDir, `${fieldName}.ts`);
    if (result.files[fieldFilePath]) {
      throw new Error(
        `Unexpected duplication in field filename. Type: ${typeName}, file: ${fieldFilePath}`
      );
    }

    const resolverTypeName = `${typeName}Resolvers`; // Generated type from typescript-resolvers plugin

    const resolverVariableStatement = `export const ${fieldName}: ${resolverTypeName}['${fieldName}'] = async (_parent, _arg, _ctx) => {
      /* Implement ${normalizedResolverName} resolver logic here */
    };`;

    result.files[fieldFilePath] = {
      __filetype: 'resolver',
      content: `
      ${printImportLine({
        isTypeImport: true,
        module: relativeModulePath(outputDir, runConfig.resolverTypesPath),
        namedImports: [resolverTypeName],
      })}
      ${resolverVariableStatement}`,
      mainImportIdentifier: fieldName,
      meta: {
        belongsToRootObject: typeName,
        resolverVariableStatement,
      },
    };
  });
};
