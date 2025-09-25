import * as path from 'path';
import * as fs from 'fs';
import * as addPlugin from '@graphql-codegen/add';
import type { Types } from '@graphql-codegen/plugin-helpers';
import { pascalCase } from 'change-case-all';
import { OperationTypeNode, print, visit } from 'graphql';
import {
  type SourceFile,
  type CallExpression,
  type ImportDeclaration,
  type ImportSpecifier,
  Project,
  SyntaxKind,
  Node,
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
    const targetStyle = presetConfig.targetStyle || 'co-location';
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
        importDocFrom: string | null; // null means doc is not imported i.e. must be co-located
        documentNodeName: string;
        documentSDL: string;
      }
    > = {};

    const nearOperationFilesToCreate: Record<
      string,
      {
        documentNodeName: string;
        documentSDL: string;
      }[]
    > = {};

    documents.forEach((documentFile) => {
      const documentFilename = documentFile.location || '';

      if (!documentFile.document) {
        console.warn(
          `[${presetName}] Source does not have a valid DocumentNode: ${documentFilename}`
        );
        return;
      }

      const nearOperationDocFilename = `${documentFilename}.ts`; // FIXME: this is assuming near-operation-file are .graphql;

      visit(documentFile.document, {
        FragmentDefinition(node) {
          nearOperationFilesToCreate[nearOperationDocFilename] ||= [];
          nearOperationFilesToCreate[nearOperationDocFilename].push({
            documentNodeName: `${pascalCase(node.name.value)}Doc`,
            documentSDL: print(node),
          });
        },
        OperationDefinition(node) {
          if (!node.name) {
            // Note: Codegen may fail, but we have this here just in case
            console.warn(
              `[${presetName}] Anonymous operation is not supported: ${documentFilename}`
            );
            return;
          }

          const operationName = pascalCase(node.name.value);
          const documentNodeName = `${operationName}Doc`;
          const documentSDL = print(node);

          let importDocFrom = null;
          if (targetStyle === 'near-operation-file') {
            nearOperationFilesToCreate[nearOperationDocFilename] ||= [];
            nearOperationFilesToCreate[nearOperationDocFilename].push({
              documentNodeName,
              documentSDL,
            });

            importDocFrom = nearOperationDocFilename;
          }

          if (node.operation === OperationTypeNode.QUERY) {
            // Query
            const queryHookName = `use${operationName}Query`;
            hooksToReplace[queryHookName] = {
              hookName: queryHookName,
              hookType: 'useQuery',
              importDocFrom,
              documentNodeName,
              documentSDL,
            };

            const lazyHookName = `use${pascalCase(node.name.value)}LazyQuery`;
            hooksToReplace[lazyHookName] = {
              hookName: lazyHookName,
              hookType: 'useLazyQuery',
              importDocFrom,
              documentNodeName,
              documentSDL,
            };

            const suspenseHookName = `use${pascalCase(
              node.name.value
            )}SuspenseQuery`;
            hooksToReplace[suspenseHookName] = {
              hookName: suspenseHookName,
              hookType: 'useSuspenseQuery',
              importDocFrom,
              documentNodeName,
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
              importDocFrom,
              documentNodeName,
              documentSDL,
            };
          }
        },
      });
    });

    Object.entries(nearOperationFilesToCreate).forEach(([filename, docs]) => {
      let gqlTagImported = false;
      const tsSourceFile = tsProject.createSourceFile(filename);

      docs
        .reverse() // createDoc inserts docs after imports i.e. the first imported doc ends up at the bottom. So we reverse the order here to ensure the same order in the end.
        .forEach((doc) => {
          if (!gqlTagImported) {
            createGqlTagImport({ baseOutputDir, presetConfig, tsSourceFile });
            gqlTagImported = true;
          }
          createDoc({
            presetConfig,
            tsSourceFile,
            documentNodeName: doc.documentNodeName,
            documentSDL: doc.documentSDL,
            exportDoc: true,
          });
        });
    });

    tsProject.getSourceFiles().forEach((tsSourceFile) => {
      // find imports
      const fileMetadata: {
        hasNodeToReplace: boolean;
        needsToImport: Set<string>;
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
        needsToImport: new Set(),
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
            fileMetadata.needsToImport.add(
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
        namedImports: Array.from(fileMetadata.needsToImport).map(
          (importName) => ({
            name: importName,
          })
        ),
      });

      // Only bring in gql tag if target style co-location.
      // For near-operation-file style, the gql tag is imported in the near-operation-file i.e. no need to import in the component file.
      if (targetStyle === 'co-location') {
        createGqlTagImport({ baseOutputDir, presetConfig, tsSourceFile });
      }

      /**
       * `addedDocMap` is used for targetStyle='co-location' to ensure we don't add the same doc multiple times
       */
      const addedDocMap: Record<string, true> = {};

      /**
       * `nearOperationFileImports` are used to collect required named imports so there is only one import declaration for multiple named imports.
       */
      const nearOperationFileImports: Record<
        string, // path to near operation file
        Set<string> // unqiue set of named imports
      > = {};

      Object.values(fileMetadata.functionsToReplace).forEach(
        (functionToReplace) => {
          if (functionToReplace.callExpression) {
            const graphqlDocument =
              hooksToReplace[functionToReplace.importSpecifierNode.getName()];
            const { documentNodeName } = graphqlDocument;

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

            if (graphqlDocument.importDocFrom === null) {
              createDoc({
                presetConfig,
                tsSourceFile,
                documentNodeName,
                documentSDL: graphqlDocument.documentSDL,
                exportDoc: false,
              });

              addedDocMap[documentNodeName] = true;
            } else {
              nearOperationFileImports[graphqlDocument.importDocFrom] ||=
                new Set();
              nearOperationFileImports[graphqlDocument.importDocFrom].add(
                documentNodeName
              );
            }
          }
        }
      );

      Object.entries(nearOperationFileImports).forEach(
        ([nearOperationFilename, namedImports]) => {
          const parsedNearOperationFilename = path.posix.parse(
            nearOperationFilename
          );
          const importModulePath = path.posix.join(
            parsedNearOperationFilename.dir,
            parsedNearOperationFilename.name
          ); // FIXME: add option to keep or remove file extension

          tsSourceFile.addImportDeclaration({
            moduleSpecifier:
              './' + // This is always './' because of near-operation-file setup
              path.posix.relative(
                path.posix.dirname(tsSourceFile.getFilePath()),
                importModulePath
              ),
            namedImports: Array.from(namedImports).map((namedImport) => ({
              name: namedImport,
            })),
          });
        }
      );
    });

    return tsProject.getSourceFiles()
    .filter((sf) => sf.getFullText().trim().length > 0)
    .map((tsSourceFile) => {
      return {
        filename: tsSourceFile.getFilePath(),
        pluginMap: { add: addPlugin },
        plugins: [{ add: { content: tsSourceFile.getFullText() } }],
        config: {},
        schema,
        documents: [],
      };
    });
  },
};

/**
 * It is process.cwd() but normalised for all OS
 */
const cwd = (): string => {
  return process.cwd().split(path.sep).join(path.posix.sep);
};

/**
 * Function to import gqlTag:
 * 1. If there's already an import from the same module, just add named import
 * 2. If there's no import from the module, create import declaration
 */
const createGqlTagImport = ({
  baseOutputDir,
  presetConfig,
  tsSourceFile,
}: {
  baseOutputDir: string;
  presetConfig: TypedPresetConfig;
  tsSourceFile: SourceFile;
}) => {
  const gqlTagModule =
    presetConfig.gqlTag.importType === 'absolute'
      ? presetConfig.gqlTag.importFrom
      : path.posix.relative(
          path.posix.dirname(tsSourceFile.getFilePath()),
          path.posix.join(cwd(), baseOutputDir, presetConfig.gqlTag.importFrom)
        );

  const existingImportDeclaration =
    tsSourceFile.getFirstDescendant<ImportDeclaration>(
      (node): node is ImportDeclaration => {
        return (
          Node.isImportDeclaration(node) &&
          node.getModuleSpecifierValue() === gqlTagModule
        );
      }
    );

  if (!existingImportDeclaration) {
    tsSourceFile.addImportDeclaration({
      moduleSpecifier: gqlTagModule,
      namedImports: [{ name: presetConfig.gqlTag.name }],
    });
    return;
  }

  existingImportDeclaration.addNamedImport({
    name: presetConfig.gqlTag.name,
  });
};

const createDoc = ({
  presetConfig,
  tsSourceFile,
  documentNodeName,
  documentSDL,
  exportDoc,
}: {
  presetConfig: TypedPresetConfig;
  tsSourceFile: SourceFile;
  documentNodeName: string;
  documentSDL: string;
  exportDoc: boolean;
}) => {
  const importDeclarations = tsSourceFile.getImportDeclarations();

  // Find insertIndex, which is after the last import declaration
  const insertPos = importDeclarations[importDeclarations.length - 1].getEnd();
  const statements = tsSourceFile.getStatementsWithComments();
  let insertIndex = statements.findIndex((stmt) => stmt.getStart() > insertPos);

  // If insertIndex is -1, it means the import statement is already the last one the page
  // So we just insert to the end
  if (insertIndex === -1) {
    insertIndex = statements.length;
  }

  tsSourceFile.insertStatements(insertIndex, [
    '\n',
    `${exportDoc ? 'export ' : ''}const ${documentNodeName} = ${
      presetConfig.gqlTag.name
    }(\`\n${documentSDL}\n\`);`,
  ]);
};
