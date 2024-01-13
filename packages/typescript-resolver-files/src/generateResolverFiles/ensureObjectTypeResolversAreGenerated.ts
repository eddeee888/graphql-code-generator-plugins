import { type SourceFile, SyntaxKind, type PropertyAssignment } from 'ts-morph';
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

  /**
   * FIXME: TS API does not expose `.isAssignable(Type, Type)` so we cannot use it to compare a field's type in schema type vs mapper type
   *
   * In this workaround, we try to put the type together and use TS's diagnostic tool to see if there's error:
   * 1. If there's error, it means the mapper field cannot be safely mapped to schema field using GraphQL's default behaviour i.e. there will be runtime error
   *    In this case, we leave the resolver function as-is. There should be an error message from the parsing phrase explaining the types cannot be mapped.
   * 2. If there's no error, it means we can safely remove the resolver and let GraphQL handle the mapping.
   *
   * Note: this only looks at fields that's not declared by the user. If it's already declared, we assume TS will report naturally if there's an error.
   */

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

  // 3. Check to see if there's error at the newly added properties:
  //    a. If there's error, leave it as user needs to manually map mapper type to schema type
  //    b. If there's no error, remove the node because GraphQL default mapping behaviour should work
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
