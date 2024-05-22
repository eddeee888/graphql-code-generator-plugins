import type { SourceFile, VariableStatement } from 'ts-morph';
import type { ResolverFile } from './types';

export const getVariableStatementWithExpectedIdentifier = (
  sourceFile: SourceFile,
  resolverFile: ResolverFile
): {
  variableStatement: VariableStatement | undefined;
  isExported: boolean;
} => {
  let isExported = false;
  const variableStatementWithExpectedIdentifier =
    sourceFile.getVariableStatement((statement) => {
      let hasExpectedIdentifier = false;
      statement
        .getDeclarationList()
        .getDeclarations()
        .forEach((declarationNode) => {
          if (declarationNode.getName() === resolverFile.mainImportIdentifier) {
            hasExpectedIdentifier = true;
            if (statement.isExported()) {
              isExported = true;
            }
          }
        });
      return hasExpectedIdentifier;
    });

  /**
   * If we found the variable statement replace its type with the expected resolver type string
   *
   * This is because we change the type of the resolver in some cases:
   * 1. When `extend type <Object>` is used, we might change its original type to the picked version
   *    e.g. `Book` might become `Pick<Book, 'title' | 'author'>`
   */
  if (
    variableStatementWithExpectedIdentifier &&
    resolverFile.meta.resolverType?.final
  ) {
    variableStatementWithExpectedIdentifier
      .getDeclarationList()
      .getDeclarations()[0]
      ?.getTypeNode()
      ?.replaceWithText(resolverFile.meta.resolverType.final);
  }

  return {
    variableStatement: variableStatementWithExpectedIdentifier,
    isExported,
  };
};
