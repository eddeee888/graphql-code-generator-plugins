import * as path from 'path';
import * as fs from 'fs';
import * as addPlugin from '@graphql-codegen/add';
import type { Types } from '@graphql-codegen/plugin-helpers';
import { pascalCase } from 'change-case-all';
import { OperationTypeNode, print, visit } from 'graphql';
import {
  CallExpression,
  ImportDeclaration,
  ImportSpecifier,
  Project,
  SyntaxKind,
} from 'ts-morph';
import type { TypedPresetConfig } from './config';

/**
 * TODO:
 * - Don't make naive assumption that imports of the same name means they need to be replaced.
 *   - Note: We should check import module, but it's more complex. So let's release first and look for feedback
 */

const presetName = '@eddeee888/operation-location-migration';

export const preset: Types.OutputPreset<TypedPresetConfig> = {
  buildGeneratesSection: async ({
    baseOutputDir,
    schema,
    documents,
    presetConfig,
  }) => {
    const absoluteTsConfigFilePath = path.join(
      cwd(),
      presetConfig.tsConfigFilePath
    );
    if (!fs.existsSync(absoluteTsConfigFilePath)) {
      throw new Error(
        `${absoluteTsConfigFilePath} not found! Use presetConfig.tsConfigFilePath to set the path to your tsconfig.json file.`
      );
    }

    const tsProject = new Project({
      tsConfigFilePath: absoluteTsConfigFilePath,
    });
    const tsSourceFiles = tsProject.getSourceFiles();

    const hooksToReplace: Record<
      string,
      {
        hookName: string;
        hookType:
          | 'useQuery'
          | 'useLazyQuery'
          | 'useSuspenseQuery'
          | 'useMutation'
          | 'useSubscription';
        importFrom: path.ParsedPath;
        operationName: string;
        documentSDL: string;
      }
    > = {};

    documents.forEach((documentFile) => {
      const documentFilename = documentFile.location || '';
      const documentPath = path.parse(documentFilename);

      if (!documentFile.document) {
        console.warn(
          `[${presetName}] Source does not have a valid DocumentNode: ${documentFilename}`
        );
        return;
      }

      visit(documentFile.document, {
        OperationDefinition(node) {
          if (!node.name) {
            // Note: Codegen may fail, but we have this here just in case
            console.warn(
              `[${presetName}] Anonymous operation is not supported: ${documentFilename}`
            );
            return;
          }

          const operationName = pascalCase(node.name.value);
          const documentSDL = print(node);

          if (node.operation === OperationTypeNode.QUERY) {
            // Query
            const queryHookName = `use${operationName}Query`;
            hooksToReplace[queryHookName] = {
              hookName: queryHookName,
              hookType: 'useQuery',
              importFrom: documentPath,
              operationName,
              documentSDL,
            };

            const lazyHookName = `use${pascalCase(node.name.value)}LazyQuery`;
            hooksToReplace[lazyHookName] = {
              hookName: lazyHookName,
              hookType: 'useLazyQuery',
              importFrom: documentPath,
              operationName,
              documentSDL,
            };

            const suspenseHookName = `use${pascalCase(
              node.name.value
            )}SuspenseQuery`;
            hooksToReplace[suspenseHookName] = {
              hookName: suspenseHookName,
              hookType: 'useSuspenseQuery',
              importFrom: documentPath,
              operationName,
              documentSDL,
            };
          } else {
            // Mutation & Subscription
            const hookName = `use${pascalCase(node.name.value)}${pascalCase(
              node.operation
            )}`;
            hooksToReplace[hookName] = {
              hookName: hookName,
              hookType:
                node.operation === OperationTypeNode.MUTATION
                  ? 'useMutation'
                  : 'useSubscription',
              importFrom: documentPath,
              operationName,
              documentSDL,
            };
          }
        },
      });
    });

    tsSourceFiles.forEach((tsSourceFile) => {
      // find imports
      const fileMetadata: {
        hasNodeToReplace: boolean;
        needsToImport: string[];
        functionsToReplace: Record<
          string,
          {
            importDeclarationNode: ImportDeclaration;
            importSpecifierNode: ImportSpecifier;
            callExpression: CallExpression | null;
          }
        >;
      } = {
        hasNodeToReplace: false,
        needsToImport: [],
        functionsToReplace: {},
      };

      tsSourceFile.getImportDeclarations().forEach((node) => {
        node.getNamedImports().forEach((importSpecifier) => {
          if (hooksToReplace[importSpecifier.getName()]) {
            // FIXME: we are assuming same name means must replace. Should check import path as well?
            fileMetadata.functionsToReplace[importSpecifier.getName()] = {
              importDeclarationNode: node,
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
            fileMetadata.needsToImport.push(
              hooksToReplace[calledFunctionName].hookType
            );
          }
        });

      if (!fileMetadata.hasNodeToReplace) {
        return;
      }

      // Codemod files to co-locate the document nodes
      tsSourceFile.addImportDeclaration({
        moduleSpecifier: presetConfig.hooksImportFrom,
        namedImports: fileMetadata.needsToImport.map((importName) => ({
          name: importName,
        })),
      });

      const gqlTagModule =
        presetConfig.gqlTag.importType === 'absolute'
          ? presetConfig.gqlTag.importFrom
          : path.posix.relative(
              path.posix.dirname(tsSourceFile.getFilePath()),
              path.posix.join(
                cwd(),
                baseOutputDir,
                presetConfig.gqlTag.importFrom
              )
            );

      tsSourceFile.addImportDeclaration({
        moduleSpecifier: gqlTagModule,
        namedImports: [{ name: presetConfig.gqlTag.name }],
      });

      const addedDocMap: Record<string, true> = {};

      Object.values(fileMetadata.functionsToReplace).forEach(
        (functionToReplace) => {
          if (functionToReplace.callExpression) {
            const graphqlDocument =
              hooksToReplace[functionToReplace.importSpecifierNode.getName()];
            const documentNodeName = `${graphqlDocument.operationName}Doc`;

            functionToReplace.callExpression
              .getFirstDescendantByKindOrThrow(SyntaxKind.Identifier)
              .replaceWithText(graphqlDocument.hookType);
            functionToReplace.callExpression.insertArgument(
              0,
              documentNodeName
            );

            // Remove import specifier of hooks...
            functionToReplace.importSpecifierNode.remove();

            // and if no specifiers left, remove the whole import declaration
            if (
              functionToReplace.importDeclarationNode.getNamedImports()
                .length === 0
            ) {
              functionToReplace.importDeclarationNode.remove();
            }

            // If documentNode is already added, do nothing, otherwise insert it
            if (addedDocMap[documentNodeName]) {
              return;
            }

            // Find insertIndex, which is after the last import declaration
            const importDeclarations = tsSourceFile.getImportDeclarations();
            const insertPos =
              importDeclarations[importDeclarations.length - 1].getEnd();
            const insertIndex = tsSourceFile
              .getStatementsWithComments()
              .findIndex((stmt) => stmt.getStart() > insertPos);

            tsSourceFile.insertStatements(insertIndex, [
              '\n',
              `const ${documentNodeName} = graphql(\`\n${graphqlDocument.documentSDL}\n\`)`,
            ]);
            addedDocMap[documentNodeName] = true;
          }
        }
      );
    });

    return tsSourceFiles.map((tsSourceFile) => ({
      filename: tsSourceFile.getFilePath(),
      pluginMap: { add: addPlugin },
      plugins: [{ add: { content: tsSourceFile.getFullText() } }],
      config: {},
      schema,
      documents: [],
    }));
  },
};

/**
 * It is process.cwd() but normalised for all OS
 */
const cwd = (): string => {
  return process.cwd().split(path.sep).join(path.posix.sep);
};
