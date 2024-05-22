import type { ImportDeclaration, SourceFile } from 'ts-morph';
import type { ResolverFile } from './types';

export const getImportStatementWithExpectedNamedImport = (
  sourceFile: SourceFile,
  resolverFile: ResolverFile
): {
  importDeclaration: ImportDeclaration | undefined;
} => {
  const importDeclaration = sourceFile.getImportDeclaration((declaration) => {
    let foundNamedImport = false;
    declaration.getNamedImports().forEach((namedImport) => {
      if (
        namedImport.getName() === resolverFile.meta.resolverType?.baseImport
      ) {
        foundNamedImport = true;
      }
    });
    return foundNamedImport;
  });

  return {
    importDeclaration,
  };
};
