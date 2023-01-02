import { existsSync } from 'fs';
import { Project } from 'ts-morph';
import * as path from 'path';
import type { ResolverFile, GenerateResolverFilesContext } from './types';

export const fixExistingResolvers = ({
  result,
}: GenerateResolverFilesContext): void => {
  const existingResolverFiles = Object.entries(result.files).reduce<
    Record<string, ResolverFile>
  >((res, [filePath, file]) => {
    if (existsSync(filePath) && file.__filetype === 'resolver') {
      res[filePath] = file;
    }
    return res;
  }, {});

  const project = new Project();
  project.addSourceFilesAtPaths(Object.keys(existingResolverFiles));
  const sourceFiles = project.getSourceFiles();
  sourceFiles.forEach((sourceFile) => {
    const normalizedRelativePath = path.relative(
      process.cwd(),
      sourceFile.getFilePath()
    );
    const file = existingResolverFiles[normalizedRelativePath];
    if (!file) {
      throw new Error(
        `Unable to find resolver file: ${normalizedRelativePath}`
      );
    }

    // TODO: Check missing import
    // ...

    // Check expected identifier
    let isExpectedIdentifierExportedInVariableStatement = false;
    const variableStatementWithExpectedIdentifier =
      sourceFile.getVariableStatement((statement) => {
        let hasExpectedIdentifier = false;
        statement
          .getDeclarationList()
          .getDeclarations()
          .forEach((declarationNode) => {
            if (declarationNode.getName() === file.mainImportIdentifier) {
              hasExpectedIdentifier = true;
              if (statement.isExported()) {
                isExpectedIdentifierExportedInVariableStatement = true;
              }
            }
          });
        return hasExpectedIdentifier;
      });

    if (!variableStatementWithExpectedIdentifier) {
      // Did not find variable statement with expected identifier, add it to the end with a warning
      sourceFile.addStatements(
        '/* WARNING: The following resolver was missing from this file. Make sure it is properly implemented or there could be runtime errors. */'
      );
      sourceFile.addStatements(file.meta.resolverVariableStatement);
    } else if (
      variableStatementWithExpectedIdentifier &&
      !isExpectedIdentifierExportedInVariableStatement
    ) {
      // If has identifier but not exported
      // Add export keyword to statement
      const isExpectedIdentifierExported = Boolean(
        sourceFile.getExportedDeclarations().get(file.mainImportIdentifier)
      );
      if (!isExpectedIdentifierExported) {
        variableStatementWithExpectedIdentifier.setIsExported(true);
      }
      // else, if identifier's been exported do nothing
    }

    // Overwrite existing files with fixes
    result.files[normalizedRelativePath] = {
      ...file,
      content: sourceFile.getText(),
    };
  });
};
