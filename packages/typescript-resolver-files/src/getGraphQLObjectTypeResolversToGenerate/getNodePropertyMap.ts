import {
  type Project,
  type ClassDeclaration,
  type Node,
  type Type,
  SyntaxKind,
} from 'ts-morph';

type NodePropertyMapValue = { type: Type; name: string };
export type NodePropertyMap = Record<string, NodePropertyMapValue>;

/**
 * Function to get properties of a Node in a map
 * If unable to find, returns empty object
 */
export const getNodePropertyMap = ({
  node,
  tsMorphProject,
}: {
  node: Node | undefined;
  tsMorphProject: Project;
}): NodePropertyMap => {
  if (!node) {
    return {};
  }

  const typeChecker = tsMorphProject.getTypeChecker();

  const properties = ((): NodePropertyMapValue[] => {
    if (node.isKind(SyntaxKind.ClassDeclaration)) {
      const result: NodePropertyMapValue[] = [];
      collectClassNodeProperties(node, result);
      return result;
    }

    return typeChecker
      .getTypeAtLocation(node)
      .getProperties()
      .map((prop) => {
        return {
          type: prop.getDeclarations()[0].getType(),
          name: prop.getName(),
        };
      });
  })();

  const nodePropertyMap = properties.reduce<NodePropertyMap>(
    (res, { type, name }) => {
      res[name] = {
        type,
        name,
      };
      return res;
    },
    {}
  );

  return nodePropertyMap;
};

const collectClassNodeProperties = (
  classNode: ClassDeclaration,
  result: NodePropertyMapValue[]
): void => {
  const baseClass = classNode.getBaseClass();
  if (baseClass) {
    collectClassNodeProperties(baseClass, result);
  }

  classNode.getInstanceProperties().forEach((prop) => {
    if (
      prop.hasModifier(SyntaxKind.PrivateKeyword) ||
      prop.hasModifier(SyntaxKind.ProtectedKeyword)
    ) {
      return;
    }
    if (prop.getName().startsWith('#')) {
      // ecma script private field is skipped
      return;
    }
    if (classNode.getGetAccessor(prop.getName())) {
      // getter is skipped
      return;
    }
    result.push({
      type: prop.getType(),
      name: prop.getName(),
    });
  });
};
