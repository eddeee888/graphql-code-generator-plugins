import {
  type PropertyAssignment,
  type SourceFile,
  type VariableStatement,
  SyntaxKind,
} from 'ts-morph';
import type { ObjectTypeFile } from './types.js';

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
  variableStatement,
  resolverFile,
  mode,
}: {
  addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes;
  sourceFile: SourceFile;
  // Resolved once by the caller (ensureExportedResolver) and passed in, to avoid
  // scanning the source file for the same variable statement a second time.
  variableStatement: VariableStatement | undefined;
  resolverFile: ObjectTypeFile;
  mode: 'smart' | 'fast';
}): void => {
  const sourceFilePath = sourceFile.getFilePath().toString();
  addedPropertyAssignmentNodes[sourceFilePath] =
    addedPropertyAssignmentNodes[sourceFilePath] || {};

  const resolversToGenerate = resolverFile.meta.resolversToGenerate || {};
  if (!Object.keys(resolversToGenerate).length) {
    return;
  }

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

  /**
   * Mark a resolver as implemented if the object literal already has a member
   * with that name, in any of these forms (single traversal over the statement):
   * ```
   * const name = () => {};
   * const OutputType = {
   *   id: () => {},   // PropertyAssignment
   *   greet(){},      // MethodDeclaration
   *   name,           // ShorthandPropertyAssignment
   * }
   * ```
   */
  variableStatement.forEachDescendant((node) => {
    if (
      node.isKind(SyntaxKind.PropertyAssignment) ||
      node.isKind(SyntaxKind.MethodDeclaration) ||
      node.isKind(SyntaxKind.ShorthandPropertyAssignment)
    ) {
      const resolverName = node.getName();
      if (resolversData[resolverName]) {
        resolversData[resolverName].implemented = true;
      }
    }
  });

  // 2. Add missing resolver properties if they haven't been implemented.
  // Resolve the object literal once, not once per added property.
  const objectLiteralExpression = variableStatement.getDescendantsOfKind(
    SyntaxKind.ObjectLiteralExpression
  )[0];
  Object.values(resolversData).forEach(
    ({ resolverName, resolverDeclaration, implemented }) => {
      if (implemented) {
        return;
      }

      const addedNode = objectLiteralExpression.addPropertyAssignment({
        name: resolverName,
        initializer: resolverDeclaration,
      });

      if (mode === 'fast') {
        resolverFile.filesystem.contentUpdated = true;
      }

      addedPropertyAssignmentNodes[sourceFilePath][
        addedNode.getStartLineNumber()
      ] = {
        node: addedNode,
        resolverFile,
        // When mode is "smart", we use TS compiler for typechecking, and it'd remove the node if there is no compilation error. Therefore, `__toBeRemoved: true`
        // When mode is "fast", we already check whether the the type is assignable, so no need to remove the node.
        __toBeRemoved: mode === 'fast' ? false : true,
      };
    }
  );
};
