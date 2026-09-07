import {
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

/**
 * Detects whether a node's type is the TypeScript *error type* i.e. its type
 * could not be resolved. This happens e.g. when a mapper aliases a type
 * imported from a module that doesn't exist yet (a generated client that
 * hasn't been generated, a dependency not installed on a fresh checkout, etc.)
 *
 * `getNodePropertyMap` reports zero properties for such a node, which is
 * indistinguishable from a mapper that genuinely has no properties (e.g.
 * `type FooMapper = {}`). Callers that need to tell these two cases apart -
 * treating "unresolved" as "unknown" rather than "confirmed empty" - should
 * check this first.
 *
 * The error type is an intrinsic type whose `intrinsicName` is `"error"`.
 * This is distinct from a real `any` (`intrinsicName` is `"any"`) and from an
 * empty object type (not an intrinsic type at all), so it won't misfire on
 * either of those.
 *
 * See https://github.com/eddeee888/graphql-code-generator-plugins/issues/446
 */
export const isNodeTypeUnresolved = ({
  node,
}: {
  node: Node | undefined;
}): boolean => {
  if (!node) {
    return false;
  }

  const { intrinsicName } = node.getType().compilerType as {
    intrinsicName?: string;
  };

  return intrinsicName === 'error';
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
