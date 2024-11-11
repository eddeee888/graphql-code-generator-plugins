import * as path from 'path';
import { type SourceFile, type Identifier, SyntaxKind } from 'ts-morph';
import { normalizeRelativePath } from '../utils';
import type { TypeMappersMap } from './parseTypeMappers';

export const collectTypeMappersFromSourceFile = (
  {
    typeMappersSourceFile,
    typeMappersSuffix,
    resolverTypesPath,
    emitLegacyCommonJSImports,
  }: {
    typeMappersSourceFile: SourceFile;
    typeMappersSuffix: string;
    resolverTypesPath: string;
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
        kind: SyntaxKind.InterfaceDeclaration,
        identifierNode: interfaceDeclaration.getNameNode(),
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
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
        kind: SyntaxKind.TypeAliasDeclaration,
        identifierNode,
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
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
          kind: SyntaxKind.ExportSpecifier,
          identifierNode,
          typeMappersSuffix,
          typeMappersFilePath: typeMappersSourceFile.getFilePath(),
          resolverTypesPath,
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
        kind: SyntaxKind.ClassDeclaration,
        identifierNode,
        typeMappersSuffix,
        typeMappersFilePath: typeMappersSourceFile.getFilePath(),
        resolverTypesPath,
        emitLegacyCommonJSImports,
      },
      result
    );
  });
};

const addTypeMapperDetailsIfValid = (
  {
    kind,
    identifierNode,
    typeMappersSuffix,
    typeMappersFilePath,
    resolverTypesPath,
    emitLegacyCommonJSImports,
  }: {
    kind:
      | SyntaxKind.InterfaceDeclaration
      | SyntaxKind.TypeAliasDeclaration
      | SyntaxKind.ExportSpecifier
      | SyntaxKind.ClassDeclaration;
    identifierNode: Identifier;
    typeMappersSuffix: string;
    typeMappersFilePath: string;
    resolverTypesPath: string;
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

  result[schemaType] = {
    schemaType,
    mapper: {
      name: identifierName,
      filename: typeMappersFilePath,
      kind,
    },
    configImportPath,
  };
};
