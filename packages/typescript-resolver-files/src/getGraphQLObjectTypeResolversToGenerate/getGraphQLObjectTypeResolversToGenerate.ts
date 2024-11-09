import {
  type InterfaceDeclaration,
  type TypeAliasDeclaration,
  type SourceFile,
  type Project,
  SyntaxKind,
} from 'ts-morph';
import type { TypeMappersMap } from '../parseTypeMappers';
import { type NodePropertyMap, getNodePropertyMap } from '../utils';
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
  typeMappersEntries.forEach(
    ([_, { schemaType, typeMapperName, typeMapperPropertyMap }]) => {
      const matchedSchemaTypePropertyMap = schemaTypePropertyMap[schemaType];
      if (matchedSchemaTypePropertyMap) {
        Object.values(matchedSchemaTypePropertyMap).forEach(
          (schemaTypeProperty) => {
            const typeMapperProperty =
              typeMapperPropertyMap[schemaTypeProperty.name];
            const typeMapperPropertyIdentifier = `${typeMapperName}.${schemaTypeProperty.name}`;
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
    }
  );

  return result;
};
