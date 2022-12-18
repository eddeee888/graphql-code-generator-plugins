import * as path from 'path';
import type { SourceFile } from 'ts-morph';
import { normalizeRelativePath } from '../utils';
import type { TypeMappersMap } from './parseTypeMappers';

export const collectTypeMappersFromSourceFile = (
  {
    typeMappersSourceFile,
    typeMapperSuffix,
    resolverTypesPath,
  }: {
    typeMappersSourceFile: SourceFile;
    typeMapperSuffix: string;
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
        typeMapperSuffix,
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
        typeMapperSuffix,
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
          typeMapperSuffix,
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
    typeMapperSuffix,
    typeMappersFilePath,
    resolverTypesPath,
  }: {
    identifierName: string;
    typeMapperSuffix: string;
    typeMappersFilePath: string;
    resolverTypesPath: string;
  },
  result: TypeMappersMap
): void => {
  if (!identifierName.endsWith(typeMapperSuffix)) {
    return;
  }

  const [schemaType] = identifierName.split(typeMapperSuffix);
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

  result[schemaType] = {
    schemaType,
    typeMapperName: identifierName,
    configImportPath: `${relativeImportPathFromResolverTypesToSourceFile}#${identifierName}`,
  };
};
