import {
  type InterfaceDeclaration,
  type TypeAliasDeclaration,
  type ClassDeclaration,
  type ExportSpecifier,
  type SourceFile,
  type Project,
  type Identifier,
  SyntaxKind,
  Node,
} from 'ts-morph';
import type { TypeMapperDetails, TypeMappersMap } from '../parseTypeMappers';
import { type NodePropertyMap, getNodePropertyMap } from './getNodePropertyMap';
import type { ParsedGraphQLSchemaMeta } from '../parseGraphQLSchema';

export type GraphQLObjectTypeResolversToGenerate = Record<
  string,
  Record<string, { resolverName: string; resolverDeclaration: string }>
>;

export const getGraphQLObjectTypeResolversToGenerate = ({
  tsMorphProject,
  typesSourceFile,
  userDefinedSchemaObjectTypeMap,
  typeMappersMap,
}: {
  tsMorphProject: Project;
  typesSourceFile: SourceFile;
  typeMappersMap: TypeMappersMap;
  userDefinedSchemaObjectTypeMap: ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap']['object'];
}): GraphQLObjectTypeResolversToGenerate => {
  const typeMappersEntries = Object.entries(typeMappersMap);
  if (typeMappersEntries.length === 0) {
    return {};
  }

  // 1. Get property map of all schema types
  const schemaTypePropertyMap: Record<string, NodePropertyMap> = {};

  const populateSchemaTypePropertyMap = (
    node: TypeAliasDeclaration | InterfaceDeclaration
  ): void => {
    const identifier = node.getNameNode();
    const identifierName = identifier.getText();
    if (userDefinedSchemaObjectTypeMap[identifierName]) {
      schemaTypePropertyMap[identifierName] = getNodePropertyMap({
        tsMorphProject,
        node,
      });
    }
  };
  typesSourceFile
    .getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration)
    .forEach(populateSchemaTypePropertyMap);

  typesSourceFile
    .getDescendantsOfKind(SyntaxKind.InterfaceDeclaration)
    .forEach(populateSchemaTypePropertyMap);

  // 3. Find resolvers to generate and add reason
  const result: GraphQLObjectTypeResolversToGenerate = {};
  typeMappersEntries.forEach(([_, { schemaType, mapper }]) => {
    const matchedSchemaTypePropertyMap = schemaTypePropertyMap[schemaType];
    if (matchedSchemaTypePropertyMap) {
      const originalDeclarationNode = mustGetMapperOriginalDeclarationNode({
        tsMorphProject,
        mapper,
      });
      const typeMapperPropertyMap = getNodePropertyMap({
        tsMorphProject,
        node: originalDeclarationNode,
      });

      Object.values(matchedSchemaTypePropertyMap).forEach(
        (schemaTypeProperty) => {
          const typeMapperProperty =
            typeMapperPropertyMap[schemaTypeProperty.name];

          const typeMapperPropertyIdentifier = `${mapper.name}.${schemaTypeProperty.name}`;
          const schemaTypePropertyIdentifier = `${schemaType}.${schemaTypeProperty.name}`;

          if (schemaTypeProperty.name === '__typename') {
            return;
          }

          result[schemaType] = result[schemaType] || {};

          // If mapper does not have a field in schema type, add missing resolver
          if (!typeMapperProperty) {
            result[schemaType][schemaTypeProperty.name] = {
              resolverName: schemaTypeProperty.name,
              resolverDeclaration: `async (_parent, _arg, _ctx) => { /* ${schemaTypePropertyIdentifier} resolver is required because ${schemaTypePropertyIdentifier} exists but ${typeMapperPropertyIdentifier} does not */ }`,
            };
            return;
          }

          // If mapper field cannot be assigned to schema type field, report, add resolver declaration
          if (
            !typeMapperProperty.type.isAssignableTo(schemaTypeProperty.type)
          ) {
            result[schemaType][schemaTypeProperty.name] = {
              resolverName: schemaTypeProperty.name,
              resolverDeclaration: `({ ${schemaTypeProperty.name} }, _arg, _ctx) => {
                /* ${schemaTypePropertyIdentifier} resolver is required because ${schemaTypePropertyIdentifier} and ${typeMapperPropertyIdentifier} are not compatible */
                return ${schemaTypeProperty.name}
              }`,
            };
          }

          return;
        }
      );
    }
  });

  return result;
};

const mustGetMapperOriginalDeclarationNode = ({
  tsMorphProject,
  mapper,
}: {
  tsMorphProject: Project;
  mapper: TypeMapperDetails['mapper'];
}): Node => {
  const typeMapperFile = tsMorphProject.getSourceFile(mapper.filename);
  if (!typeMapperFile) {
    throw new Error(
      `Unable to find ${typeMapperFile} file after parsing. This shouldn't happen.`
    );
  }

  /**
   * Finding `firstDescendantThatIsMapper` here is a bit of the duplicated traversing logic in `collectTypeMappersFromSourceFile`.
   * However, in `collectTypeMappersFromSourceFile`, we find the mappers details.
   * And here, we actually do look for the mapper nodes and run analysis on it.
   *
   * Previously, we were parsing the node property map in `collectTypeMappersFromSourceFile`
   * but for some reason `isAssignableTo` has issue comparing types, so we have to move the static analysis here for now.
   */
  const firstDescendantThatIsMapper = (():
    | GetOriginalDeclarationNodeParams
    | undefined => {
    for (const descendant of typeMapperFile.getDescendants()) {
      const typedNode = descendant.isKind(mapper.kind);
      if (typedNode) {
        let identifierNode = descendant.getNameNode();
        if (descendant.isKind(SyntaxKind.ExportSpecifier)) {
          const aliasNode = descendant.getAliasNode();
          if (aliasNode) {
            identifierNode = aliasNode;
          }
        }

        if (identifierNode?.getText() === mapper.name) {
          return {
            declarationNode: descendant,
            identifierNode,
          };
        }
      }
    }
    return;
  })();

  if (!firstDescendantThatIsMapper) {
    throw new Error(
      `Unable to find ${mapper.name} node after parsing. This shouldn't happen.`
    );
  }

  return getOriginalDeclarationNode(firstDescendantThatIsMapper);
};

interface GetOriginalDeclarationNodeParams {
  declarationNode:
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | ExportSpecifier
    | ClassDeclaration;
  identifierNode: Identifier;
}
const getOriginalDeclarationNode = ({
  declarationNode,
  identifierNode,
}: GetOriginalDeclarationNodeParams): Node => {
  if (
    declarationNode.isKind(SyntaxKind.ExportSpecifier) ||
    declarationNode.isKind(SyntaxKind.ClassDeclaration)
  ) {
    return identifierNode.getDefinitionNodes()[0];
  }

  // InterfaceDeclaration
  if (declarationNode.isKind(SyntaxKind.InterfaceDeclaration)) {
    return declarationNode;
  }

  // TypeAliasDeclaration
  const typeNode = declarationNode.getTypeNodeOrThrow();
  return Node.isTypeReference(typeNode)
    ? identifierNode.getDefinitionNodes()[0] // If type alias is a reference, go to definition using `getDefinitionNodes`
    : declarationNode;
};
