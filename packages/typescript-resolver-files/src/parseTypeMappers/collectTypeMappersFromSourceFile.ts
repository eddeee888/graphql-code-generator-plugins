import * as path from 'path';
import type { SourceFile, Identifier } from 'ts-morph';
import { normalizeRelativePath, getNodePropertyMap } from '../utils';
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
        identifierNode: interfaceDeclaration.getNameNode(),
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
        identifierNode: typeAlias.getNameNode(),
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
  //   - export { something, somethingelse as somethingelse2 }'
  typeMappersSourceFile.getExportDeclarations().forEach((exportDeclaration) => {
    exportDeclaration.getNamedExports().forEach((namedExport) => {
      let identifierNode = namedExport.getNameNode();
      const aliasNode = namedExport.getAliasNode();
      if (aliasNode) {
        identifierNode = aliasNode;
      }

      addTypeMapperDetailsIfValid(
        {
          identifierNode,
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
    identifierNode,
    typeMappersSuffix,
    typeMappersFilePath,
    resolverTypesPath,
  }: {
    identifierNode: Identifier;
    typeMappersSuffix: string;
    typeMappersFilePath: string;
    resolverTypesPath: string;
  },
  result: TypeMappersMap
): void => {
  const identifierName = identifierNode.getText();
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

  const declarationNode = identifierNode
    .getDefinitions()[0]
    .getDeclarationNode();

  result[schemaType] = {
    schemaType,
    typeMapperName: identifierName,
    typeMapperPropertyMap: getNodePropertyMap(declarationNode),
    configImportPath,
  };
};
