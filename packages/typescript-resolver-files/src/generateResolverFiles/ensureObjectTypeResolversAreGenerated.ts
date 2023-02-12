import { type SourceFile, SyntaxKind, PropertyAssignment } from 'ts-morph';
import type { ObjectTypeFile } from './types';
import { getVariableStatementWithExpectedIdentifier } from './getVariableStatementWithExpectedIdentifier';

/**
 * Ensure objectTypeResolver files have all the resolvers due to mismatched types
 */
export const ensureObjectTypeResolversAreGenerated = (
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
      'Missing variableStatement in ensureObjectTypeResolversAreGenerated.'
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

  // TODO: Explain this approach
  const addedPropertyAssignmentNodes: Record<
    number,
    { node: PropertyAssignment; __toBeRemoved: boolean }
  > = [];

  Object.values(resolversData).forEach(
    ({ resolverName, resolverDeclaration, implemented }) => {
      if (!implemented) {
        const addedNode = variableStatement
          .getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)[0]
          .addPropertyAssignment({
            name: resolverName,
            initializer: resolverDeclaration,
          });

        addedPropertyAssignmentNodes[addedNode.getStartLineNumber()] = {
          node: addedNode,
          __toBeRemoved: true,
        };
      }
    }
  );

  sourceFile.getPreEmitDiagnostics().forEach((d) => {
    const lineNumberWithError = d.getLineNumber();
    // If erroring on a recently added line, do not remove as user needs to implement it
    if (
      lineNumberWithError &&
      addedPropertyAssignmentNodes[lineNumberWithError]
    ) {
      addedPropertyAssignmentNodes[lineNumberWithError].__toBeRemoved = false;
    }
  });
  Object.values(addedPropertyAssignmentNodes).forEach(
    ({ node, __toBeRemoved }) => {
      if (__toBeRemoved) {
        node.remove();
      }
    }
  );
};
