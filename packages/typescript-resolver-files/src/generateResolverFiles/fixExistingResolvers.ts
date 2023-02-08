import { existsSync } from 'fs';
import {
  type VariableStatement,
  Project,
  SourceFile,
  SyntaxKind,
} from 'ts-morph';
import * as path from 'path';
import type {
  ResolverFile,
  ObjectTypeFile,
  GenerateResolverFilesContext,
} from './types';

export const fixExistingResolvers = ({
  config: { tsMorphProjectOptions },
  result,
}: GenerateResolverFilesContext): void => {
  const existingResolverFiles = Object.entries(result.files).reduce<
    Record<string, ResolverFile>
  >((res, [filePath, file]) => {
    if (existsSync(filePath) && file.__filetype !== 'file') {
      res[filePath] = file;
    }
    return res;
  }, {});

  const project = new Project(tsMorphProjectOptions);
  project.addSourceFilesAtPaths(Object.keys(existingResolverFiles));
  const sourceFiles = project.getSourceFiles();
  sourceFiles.forEach((sourceFile) => {
    const normalizedRelativePath = path.relative(
      process.cwd(),
      sourceFile.getFilePath()
    );
    const resolverFile = existingResolverFiles[normalizedRelativePath];
    if (!resolverFile) {
      throw new Error(
        `Unable to find resolver file: ${normalizedRelativePath}`
      );
    }

    // TODO: Check missing import
    // ...

    ensureExportedResolver(sourceFile, resolverFile);
    if (resolverFile.__filetype === 'objectType') {
      ensureObjectTypeResolversAreGenerated(sourceFile, resolverFile);
    }

    // Overwrite existing files with fixes
    result.files[normalizedRelativePath] = {
      ...resolverFile,
      content: sourceFile.getText(),
    };
  });
};

/**
 * Ensure correctly named resolvers are exported
 */
const ensureExportedResolver = (
  sourceFile: SourceFile,
  resolverFile: ResolverFile
): void => {
  const { variableStatement, isExported } =
    getVariableStatementWithExpectedIdentifier(sourceFile, resolverFile);

  if (!variableStatement) {
    // Did not find variable statement with expected identifier, add it to the end with a warning
    sourceFile.addStatements(
      '/* WARNING: The following resolver was missing from this file. Make sure it is properly implemented or there could be runtime errors. */'
    );
    sourceFile.addStatements(resolverFile.meta.variableStatement);
  } else if (variableStatement && !isExported) {
    // If has identifier but not exported
    // Add export keyword to statement
    const isExpectedIdentifierExported = Boolean(
      sourceFile
        .getExportedDeclarations()
        .get(resolverFile.mainImportIdentifier)
    );
    if (!isExpectedIdentifierExported) {
      variableStatement.setIsExported(true);
    }
    // else, if identifier's been exported do nothing
  }
};

/**
 * Ensure objectTypeResolver files have all the resolvers due to mismatched types
 */
const ensureObjectTypeResolversAreGenerated = (
  sourceFile: SourceFile,
  resolverFile: ObjectTypeFile
): void => {
  const resolversToGenerate = resolverFile.meta.resolversToGenerate || {};
  if (!Object.keys(resolversToGenerate).length) {
    return;
  }

  const { variableStatement } = getVariableStatementWithExpectedIdentifier(
    sourceFile,
    resolverFile
  );

  if (!variableStatement) {
    throw new Error(
      'Missing variableStatement in ensureObjectTypeResolversAreGenerated. This should not happen.'
    );
  }

  const resolversData: Record<
    string,
    {
      resolverName: string;
      resolverDeclaration: string;
      implemented?: true;
    }
  > = { ...resolversToGenerate };

  variableStatement
    .getDescendantsOfKind(SyntaxKind.PropertyAssignment)
    .forEach((propertyAssignment) => {
      const resolverName = propertyAssignment.getName();
      if (resolversData[resolverName]) {
        resolversData[resolverName].implemented = true;
      }
    });

  variableStatement
    .getDescendantsOfKind(SyntaxKind.MethodDeclaration)
    .forEach((methodDeclaration) => {
      const resolverName = methodDeclaration.getName();
      if (resolversData[resolverName]) {
        resolversData[resolverName].implemented = true;
      }
    });

  Object.values(resolversData).forEach(
    ({ resolverName, resolverDeclaration, implemented }) => {
      if (!implemented) {
        variableStatement
          .getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)[0]
          .addPropertyAssignment({
            name: resolverName,
            initializer: resolverDeclaration,
          });
      }
    }
  );
};

const getVariableStatementWithExpectedIdentifier = (
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

  return {
    variableStatement: variableStatementWithExpectedIdentifier,
    isExported,
  };
};
