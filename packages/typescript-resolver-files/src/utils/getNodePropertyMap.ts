import {
  type TypeNode,
  type InterfaceDeclaration,
  type Identifier,
  type ClassDeclaration,
  Node,
  SyntaxKind,
} from 'ts-morph';

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
    const properties: Properties = [];
    collectInterfaceDeclarationProperties(node, properties);
    return properties;
  } else if (node.isKind(SyntaxKind.TypeAliasDeclaration)) {
    const typeNode = node.getTypeNodeOrThrow();
    const properties: Properties = [];
    collectTypeNodeProperties(typeNode, properties);
    return properties;
  } else if (node.isKind(SyntaxKind.ClassDeclaration)) {
    const properties: Properties = [];
    collectClassNodeProperties(node, properties);
    return properties;
  }
  return [];
};

const collectInterfaceDeclarationProperties = (
  node: InterfaceDeclaration,
  result: Properties
): void => {
  // 1. Collect current node properties
  node.getProperties().forEach((prop) => {
    result.push({
      propertyName: prop.getName(),
    });
  });

  // 2. Recursively go through the extended interfaces and collect properties
  // Interfaces can `extends` but not `implements`, so we safely target extends clauses here
  const heritageClause = node.getHeritageClauseByKind(
    SyntaxKind.ExtendsKeyword
  );
  if (heritageClause) {
    // If `interface Dog extends BaseNode, Pet`, then `extendedIdentifiers` is `[BaseNode, Pet]`
    const identifiers = heritageClause
      .getTypeNodes()
      .map((n) => n.getExpressionIfKind(SyntaxKind.Identifier))
      .filter<Identifier>((n): n is Identifier => Boolean(n));

    identifiers.forEach((n) => {
      const parent = n.getDefinitionNodes()[0];
      if (Node.isInterfaceDeclaration(parent)) {
        collectInterfaceDeclarationProperties(parent, result);
      } else {
        // TODO: maybe log warnings here? or just throw?
      }
    });
  }
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
    typeNode.getTypeNodes().forEach((node) => {
      collectTypeNodeProperties(node, result); // May contain duplicated properties from different typeNodes. Will be deduped in getNodePropertyMap.
    });
  }
};

const collectClassNodeProperties = (
  classNode: ClassDeclaration,
  result: Properties
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
    result.push({ propertyName: prop.getName() });
  });
};
