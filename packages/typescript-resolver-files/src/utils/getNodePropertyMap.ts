import { type TypeNode, Node, SyntaxKind } from 'ts-morph';

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

type Properties = { propertyName: string }[];

const getNodeProperties = (node: Node): Properties => {
  if (node.isKind(SyntaxKind.InterfaceDeclaration)) {
    return node.getProperties().map((prop) => ({
      propertyName: prop.getName(),
    }));
  } else if (node.isKind(SyntaxKind.TypeAliasDeclaration)) {
    const typeNode = node.getTypeNodeOrThrow();
    const properties: Properties = [];
    collectTypeNodeProperties(typeNode, properties);
    return properties;
  }
  return [];
};

const collectTypeNodeProperties = (
  typeNode: TypeNode,
  result: Properties
): void => {
  if (Node.isTypeLiteral(typeNode)) {
    typeNode.getProperties().forEach((prop) => {
      result.push({ propertyName: prop.getName() });
    });
  } else if (Node.isTypeReference(typeNode)) {
    typeNode
      .getType()
      .getProperties()
      .forEach((prop) => {
        result.push({ propertyName: prop.getName() });
      });
  } else if (Node.isIntersectionTypeNode(typeNode)) {
    typeNode.getTypeNodes().forEach((typeNode) => {
      collectTypeNodeProperties(typeNode, result);
    });
  }
};
