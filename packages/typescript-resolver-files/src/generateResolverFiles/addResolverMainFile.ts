import * as path from 'path';
import {
  isRootObjectType,
  printImportLine,
  relativeModulePath,
  RootObjectType,
} from '../utils';
import type { GenerateResolverFilesContext } from './types';

export const addResolverMainFile = ({
  config: { baseOutputDir, resolverTypesPath, resolverMainFile },
  result,
}: GenerateResolverFilesContext): void => {
  const filename = path.join(
    baseOutputDir,
    resolverMainFile.split('/').join(path.sep)
  );
  const outputDir = path.dirname(filename);

  const relativePathToResolverTypes = relativeModulePath(
    outputDir,
    resolverTypesPath
  );

  const resolversDetails = Object.entries(result.files).reduce<{
    importLines: string[];
    queryFields: ObjectFieldMapping[];
    mutationFields: ObjectFieldMapping[];
    subscriptionFields: ObjectFieldMapping[];
    objectTypes: ObjectFieldMapping[];
  }>(
    (res, [filepath, file]) => {
      if (file.__filetype === 'file') {
        return res;
      }

      // Non Root Object fields that was generated
      if (!file.meta.belongsToRootObject) {
        res.importLines.push(
          printImportLine({
            isTypeImport: false,
            module: relativeModulePath(outputDir, filepath),
            namedImports: [file.mainImportIdentifier],
          })
        );
        res.objectTypes.push({
          propertyName: file.mainImportIdentifier,
          identifierName: file.mainImportIdentifier,
        });
        return res;
      }

      // Root object fields
      const identifierName = file.meta.normalizedResolverName
        .split('.')
        .join('_');

      const fieldMapping: ObjectFieldMapping = {
        propertyName: file.mainImportIdentifier,
        identifierName,
      };
      res.importLines.push(
        printImportLine({
          isTypeImport: false,
          module: relativeModulePath(outputDir, filepath),
          namedImports: [fieldMapping],
        })
      );

      const rootObjectMap: Record<RootObjectType, () => void> = {
        Query: () => res.queryFields.push(fieldMapping),
        Mutation: () => res.mutationFields.push(fieldMapping),
        Subscription: () => res.subscriptionFields.push(fieldMapping),
      };
      rootObjectMap[file.meta.belongsToRootObject]();

      return res;
    },
    {
      importLines: [],
      queryFields: [],
      mutationFields: [],
      subscriptionFields: [],
      objectTypes: [],
    }
  );

  Object.entries(result.externalImports).reduce((res, [module, meta]) => {
    res.importLines.push(
      printImportLine({
        isTypeImport: false,
        module,
        namedImports: meta.importLineMeta.namedImports,
        defaultImport: meta.importLineMeta.defaultImport,
      })
    );

    meta.identifierUsages.forEach((usage) => {
      const resolverNameParts = usage.normalizedResolverName.split('.');

      // Only 1 part, this is a GraphQL ObjectType
      if (resolverNameParts.length === 1) {
        res.objectTypes.push({
          propertyName: resolverNameParts[0],
          identifierName: usage.identifierName,
        });
        return;
      }

      // 2+ parts, treat as 2 parts. This is a GraphQL ObjectType with field e.g. Query.me, Mutation.updateUser
      const [rootObjectType, field] = resolverNameParts;
      if (!isRootObjectType(rootObjectType)) {
        throw new Error(`Unexpected root object type found: ${rootObjectType}`);
      }
      const fieldMapping: ObjectFieldMapping = {
        identifierName: usage.identifierName,
        propertyName: field,
      };
      const rootObjectMap: Record<RootObjectType, () => void> = {
        Query: () => res.queryFields.push(fieldMapping),
        Mutation: () => res.mutationFields.push(fieldMapping),
        Subscription: () => res.subscriptionFields.push(fieldMapping),
      };
      rootObjectMap[rootObjectType]();
    });

    return res;
  }, resolversDetails);

  const resolversIdentifier = 'resolvers';
  const resolversTypeName = 'Resolvers'; // Generated type from typescript-resolvers plugin

  const queries =
    resolversDetails.queryFields.length > 0
      ? `Query: { ${resolversDetails.queryFields
          .map(printObjectMapping)
          .join(',')} },`
      : '';
  const mutations =
    resolversDetails.mutationFields.length > 0
      ? `Mutation: { ${resolversDetails.mutationFields
          .map(printObjectMapping)
          .join(',')} },`
      : '';
  const suscriptions =
    resolversDetails.subscriptionFields.length > 0
      ? `Subscription: { ${resolversDetails.subscriptionFields
          .map(printObjectMapping)
          .join(',')} },`
      : '';

  result.files[filename] = {
    __filetype: 'file',
    content: `/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    ${printImportLine({
      isTypeImport: true,
      module: relativePathToResolverTypes,
      namedImports: [resolversTypeName],
    })}
    ${resolversDetails.importLines.map((line) => line).join('\n')}
    export const ${resolversIdentifier}: ${resolversTypeName} = {
      ${queries}
      ${mutations}
      ${suscriptions}
      ${resolversDetails.objectTypes.map(printObjectMapping).join(',\n')}
    }`,
    mainImportIdentifier: resolversIdentifier,
  };
};

interface ObjectFieldMapping {
  propertyName: string;
  identifierName: string;
}
const printObjectMapping = ({
  propertyName,
  identifierName,
}: ObjectFieldMapping): string => `${propertyName}: ${identifierName}`;
