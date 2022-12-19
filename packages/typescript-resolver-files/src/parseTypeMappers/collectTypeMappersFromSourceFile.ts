import * as path from 'path';
import type { SourceFile } from 'ts-morph';
import { normalizeRelativePath } from '../utils';
import type { TypeMappersMap } from './parseTypeMappers';

export const collectTypeMappersFromSourceFile = (
  {
    typeMappersSourceFile,
    typeMappersSuffix,
    resolverTypesPath,
  }: {
    typeMappersSourceFile: SourceFile;
    typeMappersSuffix: string;
    resolverTypesPath: string;
  },
  result: TypeMappersMap
): void => {
  // Look for interfaces with exported keywords
  typeMappersSourceFile.getInterfaces().forEach((interfaceDeclaration) => {
    if (!interfaceDeclaration.hasExportKeyword()) {
      return;
    }

    addTypeMapperDetailsIfValid(
      {
        identifierName: interfaceDeclaration.getName(),
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
      },
      result
    );
  });

  // Look for exported types with exported keywords
  typeMappersSourceFile.getTypeAliases().forEach((typeAlias) => {
    if (!typeAlias.hasExportKeyword()) {
      return;
    }

    addTypeMapperDetailsIfValid(
      {
        identifierName: typeAlias.getName(),
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
      },
      result
    );
  });

  // Look for named exports e.g.
  //   - export { something } from 'module';
  //   - export type { something } from 'module';
  //   - export { something, somethingelse }'
  typeMappersSourceFile.getExportDeclarations().forEach((exportDeclaration) => {
    exportDeclaration.getNamedExports().forEach((namedExport) => {
      let identifierName = namedExport.getFullText();
      const aliasNode = namedExport.getAliasNode();
      if (aliasNode) {
        identifierName = aliasNode.getFullText();
      }

      addTypeMapperDetailsIfValid(
        {
          identifierName: identifierName.trim(), // `getFullText()` always have an emptry space in front of the identifier so we need to trim it
          typeMappersSuffix,
          typeMappersFilePath: typeMappersSourceFile.getFilePath(),
          resolverTypesPath,
        },
        result
      );
    });
  });
};

const addTypeMapperDetailsIfValid = (
  {
    identifierName,
    typeMappersSuffix,
    typeMappersFilePath,
    resolverTypesPath,
  }: {
    identifierName: string;
    typeMappersSuffix: string;
    typeMappersFilePath: string;
    resolverTypesPath: string;
  },
  result: TypeMappersMap
): void => {
  if (!identifierName.endsWith(typeMappersSuffix)) {
    return;
  }

  const [schemaType] = identifierName.split(typeMappersSuffix);
  if (!schemaType) {
    return;
  }

  const parsedRelativePathFromResolverTypesToSourceFile = path.parse(
    path.relative(path.dirname(resolverTypesPath), typeMappersFilePath)
  );
  const relativeImportPathFromResolverTypesToSourceFile = normalizeRelativePath(
    path.join(
      parsedRelativePathFromResolverTypesToSourceFile.dir,
      parsedRelativePathFromResolverTypesToSourceFile.name
    )
  );

  const configImportPath = `${relativeImportPathFromResolverTypesToSourceFile}#${identifierName}`;

  if (result[schemaType]) {
    throw new Error(
      `GraphQL type "${schemaType}" has duplicated "${identifierName}" mappers:\n  - ${configImportPath}\n  - ${result[schemaType].configImportPath}`
    );
  }

  result[schemaType] = {
    schemaType,
    typeMapperName: identifierName,
    configImportPath,
  };
};
