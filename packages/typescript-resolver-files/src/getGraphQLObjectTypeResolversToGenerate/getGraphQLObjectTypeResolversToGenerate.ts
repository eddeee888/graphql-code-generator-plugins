import {
  type InterfaceDeclaration,
  type TypeAliasDeclaration,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph';
import type { TypeMappersMap } from '../parseTypeMappers';
import { type NodePropertyMap, getNodePropertyMap } from '../utils';

export type GraphQLObjectTypeResolversToGenerate = Record<
  string,
  Record<string, { resolverName: string; resolverDeclaration: string }>
>;

export const getGraphQLObjectTypeResolversToGenerate = ({
  typesSourceFile,
  userDefinedSchemaTypeMap,
  typeMappersMap,
}: {
  typesSourceFile: SourceFile;
  typeMappersMap: TypeMappersMap;
  userDefinedSchemaTypeMap: Record<string, true>;
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
    if (userDefinedSchemaTypeMap[identifierName]) {
      schemaTypePropertyMap[identifierName] = getNodePropertyMap(node);
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

            // If mapper does not have a field in schema type, report
            if (!typeMapperProperty) {
              result[schemaType][schemaTypeProperty.name] = {
                resolverName: schemaTypeProperty.name,
                resolverDeclaration: `() => { /* ${schemaTypePropertyIdentifier} resolver is required because ${schemaTypePropertyIdentifier} exists but ${typeMapperPropertyIdentifier} does not */ }`,
              };
              return;
            }

            /**
             * FIXME: there's currently no way to check if a type is assignable to another type
             * https://github.com/dsherret/ts-morph/issues/357
             * https://github.com/microsoft/TypeScript/issues/9879
             *
             * Therefore, the workaround now is to generate all resolvers with matching names, then use TS diagnostics to see if there's error when trying to merge the two keys
             *
             * Note: this happens only when mappers are used
             */
            result[schemaType][schemaTypeProperty.name] = {
              resolverName: schemaTypeProperty.name,
              resolverDeclaration: `({ ${schemaTypeProperty.name} }) => {
                /* ${schemaTypePropertyIdentifier} resolver is required because ${schemaTypePropertyIdentifier} and ${typeMapperPropertyIdentifier} are not compatible */
                return ${schemaTypeProperty.name}
              }`,
            };

            return;
          }
        );
      }
    }
  );

  return result;
};
