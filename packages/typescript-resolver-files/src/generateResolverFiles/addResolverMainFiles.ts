import * as path from 'path';
import {
  isRootObjectType,
  printImportLine,
  relativeModulePath,
  RootObjectType,
} from '../utils';
import type { GenerateResolverFilesContext } from './types';

interface FileDetails {
  importLines: string[];
  queryFields: ObjectFieldMapping[];
  mutationFields: ObjectFieldMapping[];
  subscriptionFields: ObjectFieldMapping[];
  objectTypes: ObjectTypesMap;
}
const createDefaultFileDetails = (): FileDetails => ({
  importLines: [],
  queryFields: [],
  mutationFields: [],
  subscriptionFields: [],
  objectTypes: {},
});

/**
 * addResolverMainFiles
 *
 * @description Function to create resolver main file/s (default: resolvers.generated.ts)
 * If resolverMainFileMode=merged, only one file is generated
 * If resolverMainFileMode=modules, one file is generated for each module
 * If no resolvers are created or imported, do not generate a file.
 */
export const addResolverMainFiles = ({
  config: {
    baseOutputDir,
    resolverTypesPath,
    resolverMainFile,
    resolverMainFileMode,
    emitLegacyCommonJSImports,
  },
  result,
}: GenerateResolverFilesContext): void => {
  const resolverMainFiles = Object.entries(result.files).reduce<
    Record<string, FileDetails>
  >((res, [filepath, file]) => {
    if (file.__filetype === 'file') {
      return res;
    }

    const { meta } = file;

    // If resolverMainFileMode === 'modules', generate main resolver files into modules, otherwise, do it at baseOutputDir
    const resolverMainFilename =
      resolverMainFileMode === 'modules'
        ? path.posix.join(baseOutputDir, meta.moduleName, resolverMainFile)
        : path.posix.join(baseOutputDir, resolverMainFile);

    const outputDir = path.dirname(resolverMainFilename);

    if (!res[resolverMainFilename]) {
      res[resolverMainFilename] = createDefaultFileDetails();
    }

    const identifierName = file.meta.normalizedResolverName.withModule
      .split('.')
      .join('_');
    const fieldMapping: ObjectFieldMapping = {
      propertyName: file.mainImportIdentifier,
      identifierName,
    };

    // Non Root Object fields that was generated
    if (
      file.__filetype === 'objectType' ||
      file.__filetype === 'generalResolver'
    ) {
      res[resolverMainFilename].importLines.push(
        printImportLine({
          isTypeImport: false,
          module: relativeModulePath(outputDir, filepath),
          moduleType: 'file',
          namedImports: [fieldMapping],
          emitLegacyCommonJSImports,
        })
      );

      pushToObjectTypes({
        objectTypes: res[resolverMainFilename].objectTypes,
        property: file.mainImportIdentifier,
        value: identifierName,
      });

      return res;
    }

    // Root object fields
    res[resolverMainFilename].importLines.push(
      printImportLine({
        isTypeImport: false,
        module: relativeModulePath(outputDir, filepath),
        moduleType: 'file',
        namedImports: [fieldMapping],
        emitLegacyCommonJSImports,
      })
    );

    const rootObjectMap: Record<RootObjectType, () => void> = {
      Query: () => res[resolverMainFilename].queryFields.push(fieldMapping),
      Mutation: () =>
        res[resolverMainFilename].mutationFields.push(fieldMapping),
      Subscription: () =>
        res[resolverMainFilename].subscriptionFields.push(fieldMapping),
    };
    rootObjectMap[file.meta.belongsToRootObject]();

    return res;
  }, {});

  Object.entries(result.externalImports).reduce((res, [module, meta]) => {
    // If resolverMainFileMode === 'modules', generate main resolver files into modules, otherwise, do it at baseOutputDir
    const resolverMainFilename =
      resolverMainFileMode === 'modules'
        ? path.posix.join(baseOutputDir, meta.moduleName, resolverMainFile)
        : path.posix.join(baseOutputDir, resolverMainFile);

    if (!res[resolverMainFilename]) {
      res[resolverMainFilename] = createDefaultFileDetails();
    }

    res[resolverMainFilename].importLines.push(
      printImportLine({
        isTypeImport: false,
        module,
        moduleType: 'preserve',
        namedImports: meta.importLineMeta.namedImports,
        defaultImport: meta.importLineMeta.defaultImport,
        emitLegacyCommonJSImports,
      })
    );

    meta.identifierUsages.forEach((usage) => {
      const resolverNameParts = usage.normalizedResolverName.split('.');

      // Only 1 part, this is a GraphQL ObjectType
      if (resolverNameParts.length === 1) {
        pushToObjectTypes({
          objectTypes: res[resolverMainFilename].objectTypes,
          property: resolverNameParts[0],
          value: usage.identifierName,
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
        Query: () => res[resolverMainFilename].queryFields.push(fieldMapping),
        Mutation: () =>
          res[resolverMainFilename].mutationFields.push(fieldMapping),
        Subscription: () =>
          res[resolverMainFilename].subscriptionFields.push(fieldMapping),
      };
      rootObjectMap[rootObjectType]();
    });

    return res;
  }, resolverMainFiles);

  const resolversIdentifier = 'resolvers';
  const resolversTypeName = 'Resolvers'; // Generated type from typescript-resolvers plugin

  Object.entries(resolverMainFiles).forEach(
    ([resolverMainFilename, resolverMainFile]) => {
      const outputDir = path.dirname(resolverMainFilename);
      const relativePathToResolverTypes = relativeModulePath(
        outputDir,
        resolverTypesPath
      );

      const queries =
        resolverMainFile.queryFields.length > 0
          ? `Query: { ${resolverMainFile.queryFields
              .map(printObjectMapping)
              .join(',')} },`
          : '';
      const mutations =
        resolverMainFile.mutationFields.length > 0
          ? `Mutation: { ${resolverMainFile.mutationFields
              .map(printObjectMapping)
              .join(',')} },`
          : '';
      const suscriptions =
        resolverMainFile.subscriptionFields.length > 0
          ? `Subscription: { ${resolverMainFile.subscriptionFields
              .map(printObjectMapping)
              .join(',')} },`
          : '';

      result.files[resolverMainFilename] = {
        __filetype: 'file',
        mainImportIdentifier: resolversIdentifier,
        content: `/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    ${printImportLine({
      isTypeImport: true,
      module: relativePathToResolverTypes,
      moduleType: 'file',
      namedImports: [resolversTypeName],
      emitLegacyCommonJSImports,
    })}
    ${resolverMainFile.importLines.join('\n')}
    export const ${resolversIdentifier}: ${resolversTypeName} = {
      ${queries}
      ${mutations}
      ${suscriptions}
      ${printObjectTypes(resolverMainFile.objectTypes)}
    }`,
      };
    }
  );
};

interface ObjectFieldMapping {
  propertyName: string;
  identifierName: string;
}
const printObjectMapping = ({
  propertyName,
  identifierName,
}: ObjectFieldMapping): string => `${propertyName}: ${identifierName}`;

type ObjectTypesMap = Record<string, string[]>;
const pushToObjectTypes = ({
  objectTypes,
  property,
  value,
}: {
  objectTypes: ObjectTypesMap;
  property: string;
  value: string;
}): void => {
  if (!objectTypes[property]) {
    objectTypes[property] = [];
  }

  objectTypes[property].push(value);
};

const printObjectTypes = (objectTypes: ObjectTypesMap): string => {
  return Object.entries(objectTypes)
    .map(([property, values]) => {
      if (values.length === 1) {
        return `${property}: ${values[0]}`;
      }

      const spreadedValueString = values
        .map((value) => `...${value}`)
        .join(',');
      return `${property}: { ${spreadedValueString} }`;
    })
    .join(',\n');
};
