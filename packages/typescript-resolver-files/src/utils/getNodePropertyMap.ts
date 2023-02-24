import { Node, SyntaxKind } from 'ts-morph';

export type NodePropertyMap = Record<string, { name: string }>;

/**
 * Function to get properties of a Node in a map
 * If unable to find, returns empty object
 */
export const getNodePropertyMap = (node: Node | undefined): NodePropertyMap => {
  if (!node) {
    return {};
  }

  const properties = getNodeProperties(node);

  const nodePropertyMap = properties.reduce<NodePropertyMap>(
    (res, { propertyName }) => {
      res[propertyName] = {
        name: propertyName,
      };
      return res;
    },
    {}
  );

  return nodePropertyMap;
};

const getNodeProperties = (node: Node): { propertyName: string }[] => {
  if (node.isKind(SyntaxKind.InterfaceDeclaration)) {
    return node.getProperties().map((prop) => ({
      propertyName: prop.getName(),
    }));
  } else if (node.isKind(SyntaxKind.TypeAliasDeclaration)) {
    const typeNode = node.getTypeNodeOrThrow();
    if (Node.isTypeLiteral(typeNode)) {
      return typeNode.getProperties().map((prop) => {
        return {
          propertyName: prop.getName(),
        };
      });
    } else if (Node.isTypeReference(typeNode)) {
      return typeNode
        .getType()
        .getProperties()
        .map((prop) => ({
          propertyName: prop.getName(),
        }));
    }
  }
  return [];
};
