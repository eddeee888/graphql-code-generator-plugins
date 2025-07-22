import * as path from 'path';
import * as fs from 'fs';
import * as addPlugin from '@graphql-codegen/add';
import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';
import { pascalCase } from 'change-case-all';
import { OperationTypeNode, visit } from 'graphql';
import {
  CallExpression,
  ImportDeclaration,
  ImportSpecifier,
  Project,
  SyntaxKind,
} from 'ts-morph';
import type { TypedPresetConfig } from './config';

export const preset: Types.OutputPreset<TypedPresetConfig> = {
  buildGeneratesSection: async ({
    baseOutputDir,
    schema,
    documents,
    presetConfig,
    profiler = createNoopProfiler(),
  }) => {
    const absoluteTsConfigFilePath = path.join(
      cwd(),
      presetConfig.tsConfigFilePath
    );
    if (!fs.existsSync(absoluteTsConfigFilePath)) {
      throw new Error('Requires tsconfig');
    }
    const gqlTagPath = path.posix.join(
      baseOutputDir,
      presetConfig.artifactDirectory
    ); // FIXME: handle absolute path

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
      const documentPath = path.parse(documentFile.location || '');
      const documentSDL = documentFile.rawSDL || '';

      if (!documentFile.document) {
        throw new Error('Document does not exist!'); // FIXME: should not throw
      }

      visit(documentFile.document, {
        OperationDefinition(node) {
          if (!node.name) {
            throw new Error('Anonymous operation!'); // FIXME: should not throw
          }

          const operationName = pascalCase(node.name.value);

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

      tsSourceFile
        .getDescendantsOfKind(SyntaxKind.ImportDeclaration)
        .forEach((node) => {
          node
            .getDescendantsOfKind(SyntaxKind.ImportSpecifier)
            .forEach((importSpecifier) => {
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
        moduleSpecifier: '@apollo/client/react', // FIXME: option to import from different module
        namedImports: fileMetadata.needsToImport.map((importName) => ({
          name: importName,
        })),
      });

      tsSourceFile.addImportDeclaration({
        moduleSpecifier: path.posix.relative(
          path.dirname(tsSourceFile.getFilePath()), // TODO: would this break in windows?
          gqlTagPath
        ), // TODO: add relative path to codegen gql
        namedImports: [{ name: presetConfig.gqlTagName }],
      });

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

            // Remove import specifier of hooks, and if no specifiers left, remove the whole import declaration
            functionToReplace.importSpecifierNode.remove();
            if (
              functionToReplace.importDeclarationNode.getDescendantsOfKind(
                SyntaxKind.ImportSpecifier
              ).length === 0
            ) {
              functionToReplace.importDeclarationNode.remove();
            }

            // Add documentNode to file
            const lastImportIndex = tsSourceFile.getDescendantsOfKind(
              SyntaxKind.ImportDeclaration
            ).length;
            tsSourceFile.insertStatements(
              lastImportIndex,
              `const ${documentNodeName} = graphql(\`${graphqlDocument.documentSDL}\`)`
            );
          }
        }
      );

      console.log('*** after update:');
      console.log(tsSourceFile.getFullText());

      console.log('END\n');
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
