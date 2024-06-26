import type { SourceFile } from 'ts-morph';
import * as path from 'path';
import { cwd } from '../utils';
import type { ResolverFile, GenerateResolverFilesContext } from './types';
import { getVariableStatementWithExpectedIdentifier } from './getVariableStatementWithExpectedIdentifier';
import { ensureObjectTypeResolversAreGenerated } from './ensureObjectTypeResolversAreGenerated';
import { ensureEnumTypeResolversAreGenerated } from './ensureEnumTypeResolversAreGenerated';
import { getImportStatementWithExpectedNamedImport } from './getImportStatementWithExpectedNamedImport';

/**
 * postProcessFiles does static analysis on existing files OR to-be-generated files
 * e.g.
 * - Make sure correct variables are exported
 * - Make sure object types have field resolvers if mapper type's field cannot be used as schema type's field
 */
export const postProcessFiles = ({
  config: {
    tsMorph: { project },
    fixObjectTypeResolvers,
  },
  result,
}: GenerateResolverFilesContext): void => {
  const sourceFilesToProcess: {
    sourceFile: SourceFile;
    resolverFile: ResolverFile;
  }[] = [];
  Object.entries(result.files).forEach(([filePath, file]) => {
    if (file.__filetype === 'file') {
      return;
    }

    const existingSourceFile = project.addSourceFileAtPathIfExists(filePath);
    if (existingSourceFile) {
      sourceFilesToProcess.push({
        sourceFile: existingSourceFile,
        resolverFile: file,
      });
      return;
    }

    // If cannot find existing source files, load files that need post-processing into sourceFilesToProcess
    if (file.__filetype === 'objectType') {
      const virtualSourceFile = project.createSourceFile(
        filePath,
        file.content
      );
      sourceFilesToProcess.push({
        sourceFile: virtualSourceFile,
        resolverFile: file,
      });
    }
  });

  sourceFilesToProcess.forEach(({ sourceFile, resolverFile }) => {
    const normalizedRelativePath = path.posix.relative(
      cwd(),
      sourceFile.getFilePath()
    );

    const { addedVariableStatement, ensureCorrectResolverType } =
      ensureExportedResolver(sourceFile, resolverFile);

    // For non-scalarResolver, ensure correct type is imported
    // For scalarResolver, we don't need to add type to the variable statement for a few reasons:
    // - For cases when we need to create a new GraphQLScalarType, it infer the type from `new GraphQLScalarType`
    // - For cases when there's custom user logic, it's up to the user to import the correct type or call `new GraphQLScalarType` by themselves
    if (
      resolverFile.__filetype !== 'scalarResolver' &&
      ensureCorrectResolverType
    ) {
      ensureCorrectResolverType();
    }

    if (
      resolverFile.__filetype !== 'scalarResolver' ||
      // For scalarResolver, only add `import { GraphQLScalarType } ...` if variable statement was added.
      // This is because user could have used custom scalar. If so, we don't want to add unnecessary import
      (resolverFile.__filetype === 'scalarResolver' && addedVariableStatement)
    ) {
      ensureImportedType(sourceFile, resolverFile);
    }

    if (
      fixObjectTypeResolvers.object === 'smart' &&
      resolverFile.__filetype === 'objectType'
    ) {
      ensureObjectTypeResolversAreGenerated(sourceFile, resolverFile);
    }

    if (
      fixObjectTypeResolvers.enum === 'smart' &&
      resolverFile.__filetype === 'enumResolver'
    ) {
      ensureEnumTypeResolversAreGenerated(sourceFile, resolverFile);
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
): {
  addedVariableStatement: boolean;
  ensureCorrectResolverType: (() => void) | undefined;
} => {
  const { variableStatement, isExported, ensureCorrectResolverType } =
    getVariableStatementWithExpectedIdentifier(sourceFile, resolverFile);

  if (!variableStatement) {
    // Did not find variable statement with expected identifier, add it to the end with a warning
    sourceFile.addStatements(resolverFile.meta.variableStatement);

    return {
      addedVariableStatement: true,
      ensureCorrectResolverType,
    };
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
    return {
      addedVariableStatement: false,
      ensureCorrectResolverType,
    };
  }

  return {
    addedVariableStatement: false,
    ensureCorrectResolverType,
  };
};

/**
 * Ensure correctly imported resolves type generated by typescript-resolvers plugin
 */
const ensureImportedType = (
  sourceFile: SourceFile,
  resolverFile: ResolverFile
): void => {
  const { importDeclaration } = getImportStatementWithExpectedNamedImport(
    sourceFile,
    resolverFile
  );

  if (!importDeclaration) {
    sourceFile.insertStatements(
      0,
      resolverFile.meta.resolverTypeImportDeclaration
    );
  }
};
