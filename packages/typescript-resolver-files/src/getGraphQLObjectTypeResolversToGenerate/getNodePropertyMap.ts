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
 * Detects whether a node's type failed to resolve i.e. it is the TypeScript
 * *error type*. This happens when a mapper aliases a type coming from an import
 * that cannot be resolved (e.g. a client that has not been generated yet, or a
 * module that is not installed on a fresh checkout).
 *
 * This must be distinguished from a mapper that genuinely has no properties
 * (e.g. `type Mapper = {}`): both report zero properties via `getProperties()`,
 * but only the unresolved one should stop resolver generation. If we treated an
 * unresolved type as "empty", `getGraphQLObjectTypeResolversToGenerate` would
 * inject a stub for every field and silently overwrite hand-maintained
 * resolvers. See https://github.com/eddeee888/graphql-code-generator-plugins/issues/446
 *
 * The error type is an intrinsic type named `error`. This is distinct from a
 * real `any` (`intrinsicName === 'any'`) and from an empty object type (which
 * is not an intrinsic type at all), so this check does not misfire on those.
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
