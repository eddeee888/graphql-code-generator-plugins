import type { SourceFile } from 'ts-morph';
import * as path from 'path';
import { cwd } from '../utils';
import type { ResolverFile, GenerateResolverFilesContext } from './types';
import { getVariableStatementWithExpectedIdentifier } from './getVariableStatementWithExpectedIdentifier';
import {
  type AddedPropertyAssignmentNodes,
  addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented,
} from './addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented';
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

  // 1. Load resolver files into ts-morph project so we can run static analysis
  Object.entries(result.files).forEach(([filePath, file]) => {
    if (file.__filetype === 'file') {
      return;
    }

    const existingSourceFile = project.addSourceFileAtPathIfExists(filePath);
    if (existingSourceFile) {
      file.filesystem = {
        type: 'filesystem',
        contentUpdated: false,
      };
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

  // `addedPropertyAssignmentNodes` is used to store added property assignments in object types
  // these property assigments are to be removed if there's no TypeScript error
  const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};

  sourceFilesToProcess.forEach(({ sourceFile, resolverFile }) => {
    const normalizedRelativePath = path.posix.relative(
      cwd(),
      sourceFile.getFilePath()
    );

    const { addedVariableStatement } = ensureExportedResolver(
      sourceFile,
      resolverFile
    );

    if (
      resolverFile.__filetype !== 'scalarResolver' ||
      // For scalarResolver, only add `import { GraphQLScalarType } ...` if variable statement was added.
      // This is because user could have used custom scalar. If so, we don't want to add unnecessary import
      (resolverFile.__filetype === 'scalarResolver' && addedVariableStatement)
    ) {
      ensureImportedType(sourceFile, resolverFile);
    }

    if (
      (fixObjectTypeResolvers.object === 'smart' ||
        fixObjectTypeResolvers.object === 'fast') &&
      resolverFile.__filetype === 'objectType'
    ) {
      addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
        addedPropertyAssignmentNodes,
        sourceFile,
        resolverFile,
        mode: fixObjectTypeResolvers.object,
      });
    }

    if (
      (fixObjectTypeResolvers.enum === 'smart' ||
        fixObjectTypeResolvers.enum === 'fast') &&
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

  // 3. ensure object type's added property assignments are removed if there's no related TypeScript error
  // We do this only once at the project level instead of sourceFile level to speed up the process
  if (fixObjectTypeResolvers.object === 'smart') {
    project.getPreEmitDiagnostics().forEach((d) => {
      const filename = d.getSourceFile()?.getFilePath().toString();
      if (!filename || !addedPropertyAssignmentNodes[filename]) {
        return;
      }
      const lineNumberWithError = d.getLineNumber();

      // If erroring on a recently added line, do not remove as user needs to implement it
      if (
        lineNumberWithError &&
        addedPropertyAssignmentNodes[filename][lineNumberWithError]
      ) {
        addedPropertyAssignmentNodes[filename][
          lineNumberWithError
        ].__toBeRemoved = false;
      }
    });
    Object.values(addedPropertyAssignmentNodes).forEach((addedNodes) => {
      Object.values(addedNodes).forEach(
        ({ node, resolverFile, __toBeRemoved }) => {
          if (__toBeRemoved) {
            node.remove();
          } else {
            // If found a property assignment that cannot be removed i.e. incompatible types between mapper vs schema types
            // Then we must mark the content as updated to be added to generate list
            resolverFile.filesystem.contentUpdated = true;
          }
        }
      );
    });
  }

  // 4. Apply to result files the updated content done in step 2. and 3. above
  sourceFilesToProcess.forEach(({ sourceFile, resolverFile }) => {
    const normalizedRelativePath = path.posix.relative(
      cwd(),
      sourceFile.getFilePath()
    );

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
): { addedVariableStatement: boolean } => {
  const { variableStatement, isExported } =
    getVariableStatementWithExpectedIdentifier(sourceFile, resolverFile);

  /**
   * If we found the variable statement replace its type with the expected resolver type string
   *
   * This is because we change the type of the resolver in some cases:
   * 1. When `extend type <Object>` is used, we might change its original type to the picked version
   *    e.g. `Book` might become `Pick<Book, 'title' | 'author'>`
   */
  let ensureCorrectResolverType: (() => void) | undefined = undefined;
  if (variableStatement && resolverFile.meta.resolverType?.final) {
    const variableDeclaration = variableStatement
      .getDeclarationList()
      .getDeclarations()[0];
    const typeNode = variableDeclaration?.getTypeNode();

    ensureCorrectResolverType = typeNode
      ? () => {
          const trimTypeString = (value: string): string =>
            value.replace(/[\n\r\s]/g, '');

          const trimmedOriginalTypeString = trimTypeString(typeNode.getText());
          typeNode.replaceWithText(resolverFile.meta.resolverType.final);

          // If the formatted type is the semantically the same but formatted differently from `resolverType.final`
          // e.g.
          // ```
          // Pick<
          //   BookResolvers,
          //   | 'title'
          //   | 'author'
          // >`
          // vs
          // `Pick<Book, 'author' | 'title'>`
          // ```
          const newTypeStringVariants =
            'otherVariants' in resolverFile.meta.resolverType
              ? [
                  resolverFile.meta.resolverType.final,
                  ...resolverFile.meta.resolverType.otherVariants,
                ]
              : [resolverFile.meta.resolverType.final];
          const trimmedNewTypeStringVariants =
            newTypeStringVariants.map(trimTypeString);

          if (
            !trimmedNewTypeStringVariants.find(
              (newText) => newText === trimmedOriginalTypeString
            )
          ) {
            resolverFile.filesystem.contentUpdated = true;
          }
        }
      : () => {
          variableDeclaration.setType(resolverFile.meta.resolverType.final);
          resolverFile.filesystem.contentUpdated = true;
        };
  }

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

  if (!variableStatement) {
    // Did not find variable statement with expected identifier, add it to the end with a warning
    sourceFile.addStatements(resolverFile.meta.variableStatement);
    resolverFile.filesystem.contentUpdated = true;

    return { addedVariableStatement: true };
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
      resolverFile.filesystem.contentUpdated = true;
    }
    // else, if identifier's been exported do nothing
    return { addedVariableStatement: false };
  }

  return { addedVariableStatement: false };
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
    resolverFile.filesystem.contentUpdated = true;
  }
};
