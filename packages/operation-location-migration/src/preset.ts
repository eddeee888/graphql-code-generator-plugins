import * as path from 'path';
import * as fs from 'fs';
import * as addPlugin from '@graphql-codegen/add';
import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';
import { pascalCase } from 'change-case-all';
import { OperationTypeNode, visit } from 'graphql';
import { CallExpression, ImportSpecifier, Project, SyntaxKind } from 'ts-morph';
import type { TypedPresetConfig } from './config';

export const preset: Types.OutputPreset<TypedPresetConfig> = {
  buildGeneratesSection: async ({
    baseOutputDir,
    schema,
    documents,
    presetConfig,
    profiler = createNoopProfiler(),
  }) => {
    // lo
    const absoluteTsConfigFilePath = path.join(
      cwd(),
      presetConfig.tsConfigFilePath
    );
    if (!fs.existsSync(absoluteTsConfigFilePath)) {
      throw new Error('Requires tsconfig');
    }
    const tsProject = new Project({
      tsConfigFilePath: absoluteTsConfigFilePath,
    });
    const tsSourceFiles = tsProject.getSourceFiles();

    const hooksToReplace: Record<
      string,
      { name: string; importFrom: path.ParsedPath }
    > = {};

    documents.forEach((documentFile) => {
      const documentPath = path.parse(documentFile.location || '');
      const documentSDL = documentFile.rawSDL || '';

      if (!documentFile.document) {
        throw new Error('Document does not exist!'); // FIXME: should not throw
      }

      visit(documentFile.document, {
        OperationDefinition(node) {
          if (!node.name) {
            throw new Error('Anonimous operation!'); // FIXME: should not throw
          }

          if (node.operation === OperationTypeNode.QUERY) {
            const queryHookName = `use${pascalCase(node.name.value)}Query`;
            hooksToReplace[queryHookName] = {
              name: queryHookName,
              importFrom: documentPath,
            };

            const lazyHookName = `use${pascalCase(node.name.value)}LazyQuery`;
            hooksToReplace[lazyHookName] = {
              name: lazyHookName,
              importFrom: documentPath,
            };

            const suspenseHookName = `use${pascalCase(
              node.name.value
            )}SuspenseQuery`;
            hooksToReplace[suspenseHookName] = {
              name: suspenseHookName,
              importFrom: documentPath,
            };
          } else {
            const hookName = `use${pascalCase(node.name.value)}${pascalCase(
              node.operation
            )}`;
            hooksToReplace[hookName] = {
              name: hookName,
              importFrom: documentPath,
            };
          }
        },
      });

      const gqlTagPath = path.posix.join(
        baseOutputDir,
        presetConfig.artifactDirectory
      ); // FIXME: handle absolute path

      const newFilename = path.join(
        documentPath.dir,
        `${documentPath.name}.graphql.ts`
      );
      const gqlTagImportPath = path.posix.relative(
        documentPath.dir,
        gqlTagPath
      );
    });

    tsSourceFiles.forEach((tsSourceFile) => {
      console.log(
        '***filepath: ',
        path.basename(tsSourceFile.getFilePath()),
        'START:'
      );
      // find imports
      const fileMetadata: {
        hasNodeToReplace: boolean;
        functionsToReplace: Record<
          string,
          {
            importSpecifierNode: ImportSpecifier;
            callExpression: CallExpression | null;
          }
        >;
      } = {
        hasNodeToReplace: false,
        functionsToReplace: {},
      };

      tsSourceFile
        .getDescendantsOfKind(SyntaxKind.ImportDeclaration)
        .forEach((node) => {
          node
            .getDescendantsOfKind(SyntaxKind.ImportSpecifier)
            .forEach((importSpecifier) => {
              if (hooksToReplace[importSpecifier.getName()]) {
                // FIXME: we are assuming same name means must replace. Should check import path as well?
                fileMetadata.functionsToReplace[importSpecifier.getName()] = {
                  importSpecifierNode: importSpecifier,
                  callExpression: null,
                };
              }
            });
        });

      // find call expressions
      tsSourceFile
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .forEach((callExpression) => {
          const calledFunctionName = callExpression
            .getFirstDescendantByKindOrThrow(SyntaxKind.Identifier)
            .getText();
          if (
            hooksToReplace[calledFunctionName] &&
            fileMetadata.functionsToReplace[calledFunctionName]
          ) {
            fileMetadata.hasNodeToReplace = true;
            fileMetadata.functionsToReplace[calledFunctionName].callExpression =
              callExpression;
          }
        });

      if (!fileMetadata.hasNodeToReplace) {
        return;
      }

      console.log(
        '***filepath: ',
        path.basename(tsSourceFile.getFilePath()),
        'END\n'
      );
    });

    return [];
  },
};

/**
 * It is process.cwd() but normalised for all OS
 */
const cwd = (): string => {
  return process.cwd().split(path.sep).join(path.posix.sep);
};
