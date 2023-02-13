import * as path from 'path';
import {
  type SourceFile,
  type Identifier,
  type TypeAliasDeclaration,
  type InterfaceDeclaration,
  Node,
  SyntaxKind,
} from 'ts-morph';
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
        declarationNode: interfaceDeclaration,
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

    const identifierNode = typeAlias.getNameNode();

    addTypeMapperDetailsIfValid(
      {
        declarationNode: typeAlias,
        identifierNode,
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
          declarationNode: null,
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
    declarationNode,
    identifierNode,
    typeMappersSuffix,
    typeMappersFilePath,
    resolverTypesPath,
  }: {
    declarationNode: InterfaceDeclaration | TypeAliasDeclaration | null;
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

  const originalDeclarationNode = getOriginalDeclarationNode(
    declarationNode,
    identifierNode
  );

  result[schemaType] = {
    schemaType,
    typeMapperName: identifierName,
    typeMapperPropertyMap: getNodePropertyMap(originalDeclarationNode),
    configImportPath,
  };
};

const getOriginalDeclarationNode = (
  declarationNode: InterfaceDeclaration | TypeAliasDeclaration | null,
  identifierNode: Identifier
): Node => {
  if (!declarationNode) {
    return identifierNode.getDefinitionNodes()[0];
  }

  // InterfaceDeclaration
  if (declarationNode.isKind(SyntaxKind.InterfaceDeclaration)) {
    return declarationNode;
  }

  // TypeAliasDeclaration
  const typeNode = declarationNode.getTypeNodeOrThrow();
  const node = Node.isTypeReference(typeNode) // If type alias is a reference, go to definition using `getDefinitionNodes`
    ? identifierNode.getDefinitionNodes()[0]
    : declarationNode;
  return node;
};
