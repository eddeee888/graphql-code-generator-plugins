import {
  type Project,
  type ClassDeclaration,
  type Node,
  type Type,
  SyntaxKind,
} from 'ts-morph';

type NodePropertyMapValue = {
  name: string;
  type: Type;
};
export type NodePropertyMap = Record<string, NodePropertyMapValue>;

/**
 * Function to get properties of a Node in a map
 * If unable to find, returns empty object
 */
export const getNodePropertyMap = ({
  node,
}: {
  node: Node | undefined;
}): NodePropertyMap => {
  if (!node) {
    return {};
  }

  const properties = ((): NodePropertyMapValue[] => {
    if (node.isKind(SyntaxKind.ClassDeclaration)) {
      const result: NodePropertyMapValue[] = [];
      collectClassNodeProperties(node, result);
      return result;
    }

    return node
      .getType()
      .getProperties()
      .map((prop) => {
        return {
          name: prop.getName(),
          type: prop.getTypeAtLocation(node),
        };
      });
  })();

  const nodePropertyMap = properties.reduce<NodePropertyMap>(
    (res, { name, type }) => {
      res[name] = {
        name,
        type,
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
      name: prop.getName(),
      type: prop.getType(),
    });
  });
};
