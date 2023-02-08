import * as typeScriptPlugin from '@graphql-codegen/typescript';
import type { GraphQLSchema } from 'graphql';
import {
  type InterfaceDeclaration,
  type TypeAliasDeclaration,
  type ProjectOptions,
  Project,
  SyntaxKind,
} from 'ts-morph';
import type { TypeMappersMap } from '../parseTypeMappers';
import { type NodePropertyMap, getNodePropertyMap } from '../utils';

export type GraphQLObjectTypeResolversToGenerate = Record<
  string,
  Record<string, { resolverName: string; resolverDeclaration: string }>
>;

export const getGraphQLObjectTypeResolversToGenerate = async ({
  schemaAst,
  resolverTypesConfig,
  userDefinedSchemaTypeMap,
  typeMappersMap,
  tsMorphProjectOptions,
}: {
  schemaAst: GraphQLSchema;
  resolverTypesConfig: Record<string, unknown>;
  typeMappersMap: TypeMappersMap;
  userDefinedSchemaTypeMap: Record<string, true>;
  tsMorphProjectOptions: ProjectOptions;
}): Promise<GraphQLObjectTypeResolversToGenerate> => {
  // 1. Create a virtual types.generated.ts to get the types
  const typescriptResult = await typeScriptPlugin.plugin(
    schemaAst,
    [],
    resolverTypesConfig
  );
  const project = new Project(tsMorphProjectOptions);
  project.createSourceFile(
    './virtual_types.generated.ts',
    `${typescriptResult.prepend?.join('\n')}\n${typescriptResult.content}`
  );

  // 2. Get property map of all schema types
  const schemaTypePropertyMap: Record<string, NodePropertyMap> = {};
  const virtualTypeFile = project.getSourceFiles()[0];

  const populateSchemaTypePropertyMap = (
    node: TypeAliasDeclaration | InterfaceDeclaration
  ): void => {
    const identifier = node.getNameNode();
    const identifierName = identifier.getText();
    if (userDefinedSchemaTypeMap[identifierName]) {
      schemaTypePropertyMap[identifierName] = getNodePropertyMap(node);
    }
  };
  virtualTypeFile
    .getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration)
    .forEach(populateSchemaTypePropertyMap);

  virtualTypeFile
    .getDescendantsOfKind(SyntaxKind.InterfaceDeclaration)
    .forEach(populateSchemaTypePropertyMap);

  // 3. Find resolvers to generate and add reason
  const result: GraphQLObjectTypeResolversToGenerate = {};
  Object.entries(typeMappersMap).forEach(
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

            // FIXME: there's currently no way to check if a type is assignable to another type
            // https://github.com/dsherret/ts-morph/issues/357
            // https://github.com/microsoft/TypeScript/issues/9879

            // Therefore, the workaround now is to generate all resolvers with matching names
            // Note that this happens only for mappers

            result[schemaType][schemaTypeProperty.name] = {
              resolverName: schemaTypeProperty.name,
              resolverDeclaration: `({ ${schemaTypeProperty.name} }) => ${schemaTypeProperty.name}`,
            };

            return;
          }
        );
      }
    }
  );

  return result;
};
