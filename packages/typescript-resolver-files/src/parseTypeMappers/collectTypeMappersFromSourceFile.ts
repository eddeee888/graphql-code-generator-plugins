import * as path from 'path';
import {
  type SourceFile,
  type Identifier,
  type TypeAliasDeclaration,
  type InterfaceDeclaration,
  type Project,
  Node,
  SyntaxKind,
} from 'ts-morph';
import { normalizeRelativePath, getNodePropertyMap } from '../utils';
import type { TypeMappersMap } from './parseTypeMappers';

export const collectTypeMappersFromSourceFile = (
  {
    tsMorphProject,
    typeMappersSourceFile,
    typeMappersSuffix,
    resolverTypesPath,
    shouldCollectPropertyMap,
    emitLegacyCommonJSImports,
  }: {
    tsMorphProject: Project;
    typeMappersSourceFile: SourceFile;
    typeMappersSuffix: string;
    resolverTypesPath: string;
    shouldCollectPropertyMap: boolean;
    emitLegacyCommonJSImports: boolean;
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
        tsMorphProject,
        declarationNode: interfaceDeclaration,
        identifierNode: interfaceDeclaration.getNameNode(),
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
        shouldCollectPropertyMap,
        emitLegacyCommonJSImports,
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
        tsMorphProject,
        declarationNode: typeAlias,
        identifierNode,
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
        shouldCollectPropertyMap,
        emitLegacyCommonJSImports,
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
          tsMorphProject,
          declarationNode: null,
          identifierNode,
          typeMappersSuffix,
          typeMappersFilePath: typeMappersSourceFile.getFilePath(),
          resolverTypesPath,
          shouldCollectPropertyMap,
          emitLegacyCommonJSImports,
        },
        result
      );
    });
  });

  typeMappersSourceFile.getClasses().forEach((classDeclaration) => {
    if (!classDeclaration.hasExportKeyword()) {
      return;
    }
    const identifierNode = classDeclaration.getNameNode();
    if (!identifierNode) {
      // Anonymous class is skipped
      return;
    }

    addTypeMapperDetailsIfValid(
      {
        tsMorphProject,
        declarationNode: null,
        identifierNode,
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
        shouldCollectPropertyMap,
        emitLegacyCommonJSImports,
      },
      result
    );
  });
};

const addTypeMapperDetailsIfValid = (
  {
    tsMorphProject,
    declarationNode,
    identifierNode,
    typeMappersSuffix,
    typeMappersFilePath,
    resolverTypesPath,
    shouldCollectPropertyMap,
    emitLegacyCommonJSImports,
  }: {
    tsMorphProject: Project;
    declarationNode: InterfaceDeclaration | TypeAliasDeclaration | null;
    identifierNode: Identifier;
    typeMappersSuffix: string;
    typeMappersFilePath: string;
    resolverTypesPath: string;
    shouldCollectPropertyMap: boolean;
    emitLegacyCommonJSImports: boolean;
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

  /**
   * We MUST use path.relative() instead of path.posix.relative() here
   * Reason being `typeMappersFilePath` is a file system path e.g. C://Windows/Path/To/File or /Unix/path/to/file
   * path.relative works correctly but returns inconsistent path seperator e.g. relative\\path\\windows or relative/path/unix
   *
   * Therefore, we need to split/join to normalise the path to posix path e.g relative/path/unix
   */
  const relativePath = path
    .relative(path.dirname(resolverTypesPath), typeMappersFilePath)
    .split(path.sep)
    .join(path.posix.sep);

  const parsedRelativePathFromResolverTypesToSourceFile =
    path.parse(relativePath);
  const relativeImportPathFromResolverTypesToSourceFile = normalizeRelativePath(
    path.posix.join(
      parsedRelativePathFromResolverTypesToSourceFile.dir,
      parsedRelativePathFromResolverTypesToSourceFile.name
    )
  );

  const fileExtension = emitLegacyCommonJSImports ? '' : '.js';
  const configImportPath = `${relativeImportPathFromResolverTypesToSourceFile}${fileExtension}#${identifierName}`;

  if (result[schemaType]) {
    throw new Error(
      `GraphQL type "${schemaType}" has duplicated "${identifierName}" mappers:\n  - ${configImportPath}\n  - ${result[schemaType].configImportPath}`
    );
  }

  let typeMapperPropertyMap = {};
  if (shouldCollectPropertyMap) {
    const originalDeclarationNode = getOriginalDeclarationNode(
      declarationNode,
      identifierNode
    );
    typeMapperPropertyMap = getNodePropertyMap({
      node: originalDeclarationNode,
      tsMorphProject,
    });
  }

  result[schemaType] = {
    schemaType,
    typeMapperName: identifierName,
    typeMapperPropertyMap,
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
