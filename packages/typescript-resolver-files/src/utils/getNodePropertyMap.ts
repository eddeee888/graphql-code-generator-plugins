import { type Type, Node, SyntaxKind } from 'ts-morph';

export type NodePropertyMap = Record<
  string,
  {
    name: string;
    text: string;
    kind: TypeKind;
  }
>;

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
    (res, { propertyName, propertyType }) => {
      res[propertyName] = {
        name: propertyName,
        text: propertyType.getText(),
        kind: getTypeKind(propertyType),
      };
      return res;
    },
    {}
  );

  return nodePropertyMap;
};

const getNodeProperties = (
  node: Node
): { propertyName: string; propertyType: Type }[] => {
  if (node.isKind(SyntaxKind.InterfaceDeclaration)) {
    return node.getProperties().map((prop) => ({
      propertyName: prop.getName(),
      propertyType: prop.getType(),
    }));
  } else if (node.isKind(SyntaxKind.TypeAliasDeclaration)) {
    const typeNode = node.getTypeNodeOrThrow();
    if (Node.isTypeLiteral(typeNode)) {
      return typeNode.getProperties().map((prop) => ({
        propertyName: prop.getName(),
        propertyType: prop.getType(),
      }));
    } else if (Node.isTypeReference(typeNode)) {
      return typeNode
        .getType()
        .getProperties()
        .map((prop) => ({
          propertyName: prop.getName(),
          propertyType: prop.getTypeAtLocation(node),
        }));
    }
  }
  return [];
};

/**
 * TypeKind can be found here: https://ts-morph.com/details/types#telling-type
 */
export type TypeKind =
  | 'anonymous'
  | 'any'
  | 'array'
  | 'boolean'
  | 'booleanLiteral'
  | 'class'
  | 'classOrInterface'
  | 'enum'
  | 'enumLiteral'
  | 'interface'
  | 'intersection'
  | 'literal'
  | 'null'
  | 'number'
  | 'numberLiteral'
  | 'object'
  | 'string'
  | 'stringLiteral'
  | 'templateLiteral'
  | 'tuple'
  | 'undefined'
  | 'union'
  | 'unionOrIntersection'
  | 'unknown'
  | '__MISSING';

const getTypeKind = (type: Type): TypeKind => {
  switch (true) {
    case type.isAnonymous():
      return 'anonymous';
    case type.isAny():
      return 'any';
    case type.isArray():
      return 'array';
    case type.isBoolean():
      return 'boolean';
    case type.isBooleanLiteral():
      return 'booleanLiteral';
    case type.isClass():
      return 'class';
    case type.isClassOrInterface():
      return 'classOrInterface';
    case type.isEnum():
      return 'enum';
    case type.isEnumLiteral():
      return 'enumLiteral';
    case type.isInterface():
      return 'interface';
    case type.isIntersection():
      return 'intersection';
    case type.isLiteral():
      return 'literal';
    case type.isNull():
      return 'null';
    case type.isNumber():
      return 'number';
    case type.isNumberLiteral():
      return 'numberLiteral';
    case type.isObject():
      return 'object';
    case type.isString():
      return 'string';
    case type.isStringLiteral():
      return 'stringLiteral';
    case type.isTemplateLiteral():
      return 'templateLiteral';
    case type.isTuple():
      return 'tuple';
    case type.isUndefined():
      return 'undefined';
    case type.isUnion():
      return 'union';
    case type.isUnionOrIntersection():
      return 'unionOrIntersection';
    case type.isUnknown():
      return 'unknown';
    default:
      return '__MISSING';
  }
};
