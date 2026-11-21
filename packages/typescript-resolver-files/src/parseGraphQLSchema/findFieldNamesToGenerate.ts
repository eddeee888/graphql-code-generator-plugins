import type {
  FieldDefinitionNode,
  GraphQLObjectType,
  ObjectTypeDefinitionNode,
} from 'graphql';
import type { ApolloFederation } from '@graphql-codegen/plugin-helpers';

/**
 * findFieldNamesToGenerate
 *
 * Finds the names of an object type's fields that `typescript-resolvers` generates resolver types for,
 * using the same `ApolloFederation` logic as `typescript-resolvers` so the two never disagree.
 * e.g. In Federation, `@external` fields (or fields of an `@external` object type) are skipped unless there is a `@provides` path to them.
 */
export const findFieldNamesToGenerate = ({
  namedType,
  apolloFederation,
}: {
  namedType: GraphQLObjectType;
  apolloFederation: ApolloFederation;
}): Set<string> => {
  // `findFieldNodesToGenerate` is called by `typescript-resolvers` with visitor-transformed nodes,
  // where each field is wrapped as `{ node: FieldDefinitionNode }`. We mimic that shape here.
  // Directives are gathered from the definition and every extension, so `@external` on any of them is detected.
  const node = {
    name: { value: namedType.name },
    directives: [namedType.astNode, ...namedType.extensionASTNodes].flatMap(
      (typeNode) => typeNode?.directives || []
    ),
    fields: Object.values(namedType.getFields()).map((field) => ({
      node: field.astNode || { name: { value: field.name } },
    })),
  } as unknown as ObjectTypeDefinitionNode;

  return new Set(
    apolloFederation
      .findFieldNodesToGenerate({ node })
      .map((fieldNode: FieldDefinitionNode) => fieldNode.name.value)
  );
};
