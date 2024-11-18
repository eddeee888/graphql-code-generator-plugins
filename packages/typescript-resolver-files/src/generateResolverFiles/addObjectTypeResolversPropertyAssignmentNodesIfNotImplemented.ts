import { type PropertyAssignment, type SourceFile, SyntaxKind } from 'ts-morph';
import type { ObjectTypeFile } from './types';
import { getVariableStatementWithExpectedIdentifier } from './getVariableStatementWithExpectedIdentifier';

export type AddedPropertyAssignmentNodes = Record<
  string, // SourceFile's filename
  Record<
    number, // Line number
    {
      node: PropertyAssignment;
      resolverFile: ObjectTypeFile;
      __toBeRemoved: boolean;
    }
  >
>;

/**
 * Ensure objectTypeResolver files have all the resolvers due to mismatched types
 */
export const addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented = ({
  addedPropertyAssignmentNodes,
  sourceFile,
  resolverFile,
}: {
  addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes;
  sourceFile: SourceFile;
  resolverFile: ObjectTypeFile;
}): void => {
  const sourceFilePath = sourceFile.getFilePath().toString();
  addedPropertyAssignmentNodes[sourceFilePath] =
    addedPropertyAssignmentNodes[sourceFilePath] || {};

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
      'Missing variableStatement in addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented.'
    );
  }

  // 1. Check to see which generated to-be-generated resolvers are implemented
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

  // 2. Add missing resolver properties if they haven't been implemented
  Object.values(resolversData).forEach(
    ({ resolverName, resolverDeclaration, implemented }) => {
      if (implemented) {
        return;
      }

      const addedNode = variableStatement
        .getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)[0]
        .addPropertyAssignment({
          name: resolverName,
          initializer: resolverDeclaration,
        });

      addedPropertyAssignmentNodes[sourceFilePath][
        addedNode.getStartLineNumber()
      ] = {
        node: addedNode,
        resolverFile,
        __toBeRemoved: true,
      };
    }
  );
};
