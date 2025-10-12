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
import type { GeneratedTypesFileMeta } from '../generateResolverFiles';

export type GraphQLObjectTypeResolversToGenerate = Record<
  string,
  Record<string, { resolverName: string; resolverDeclaration: string }>
>;

export const getGraphQLObjectTypeResolversToGenerate = ({
  mode,
  tsMorphProject,
  typesSourceFile,
  typeMappersMap,
  userDefinedSchemaObjectTypeMap,
  generatedTypesFileMeta,
}: {
  mode: 'smart' | 'fast';
  tsMorphProject: Project;
  typesSourceFile: SourceFile;
  typeMappersMap: TypeMappersMap;
  userDefinedSchemaObjectTypeMap: ParsedGraphQLSchemaMeta['userDefinedSchemaTypeMap']['object'];
  generatedTypesFileMeta: GeneratedTypesFileMeta;
}): GraphQLObjectTypeResolversToGenerate => {
  const typeMappersEntries = Object.entries(typeMappersMap);
  if (typeMappersEntries.length === 0) {
    return {};
  }

  /**
   * `generatedTypesFileMeta.generatedResolverTypes.userDefined` is `schemaType` -> `generatedResolverTypes`
   * We will be parsing `types.generated.ts` file for the `generatedResolverTypes`
   * So, we need to invert `generatedTypesFileMeta.generatedResolverTypes.userDefined` to get `generatedResolverTypes` -> `schemaType`
   * e.g.
   *
   * generatedTypesFileMeta.generatedResolverTypes.userDefined = {
   *   User: {
   *     name: 'UserResolvers'
   *   }
   * }
   *
   * after transformation:
   *
   * generatedSchemaTypeNameMap = {
   *   UserResolvers: 'User'
   * }
   */
  const generatedSchemaTypeNameMap = Object.entries(
    generatedTypesFileMeta.generatedResolverTypes.userDefined
  ).reduce<Record<string, string>>(
    (res, [schemaType, generatedSchemaTypeName]) => {
      res[generatedSchemaTypeName.name] = schemaType;
      return res;
    },
    {}
  );

  if (mode === 'fast') {
    // 1. Get property map of all schema types
    const resolverTypesMap: Record<
      string,
      {
        node: Node;
        properties: NodePropertyMap;
      }
    > = {};
    const populateSchemaTypeResolversPropertyMap = (
      node: TypeAliasDeclaration | InterfaceDeclaration
    ): void => {
      const identifierName = node.getNameNode().getText(); // e.g. UserResolvers, BookResolvers

      const schemaType = generatedSchemaTypeNameMap[identifierName]; // schemaType examples: User, Book

      if (schemaType && userDefinedSchemaObjectTypeMap[schemaType]) {
        resolverTypesMap[schemaType] = {
          node,
          properties: getNodePropertyMap({ node }),
        };
      }
    };

    typesSourceFile.getDescendants().forEach((node) => {
      if (
        node.isKind(SyntaxKind.TypeAliasDeclaration) ||
        node.isKind(SyntaxKind.InterfaceDeclaration)
      ) {
        populateSchemaTypeResolversPropertyMap(node);
      }
    });

    // 3. Find resolvers to generate and add reason
    const result: GraphQLObjectTypeResolversToGenerate = {};
    typeMappersEntries.forEach(([_, { schemaType, mapper }]) => {
      const resolverType = resolverTypesMap[schemaType];
      if (!resolverType) {
        return;
      }

      const mapperOriginalDeclarationNode =
        mustGetMapperOriginalDeclarationNode({
          tsMorphProject,
          mapper,
        });
      const mapperPropsMap = getNodePropertyMap({
        node: mapperOriginalDeclarationNode,
      });

      Object.values(resolverType.properties).forEach((resolverTypeProp) => {
        result[schemaType] = result[schemaType] || {};
        const resolverTypePropName = resolverTypeProp.name;

        const mapperPropIdentifier = `${mapper.name}.${resolverTypePropName}`;
        const schemaTypePropIdentifier = `${schemaType}.${resolverTypePropName}`;

        // 1. Generated resolvers types may have one or more of these meta resolvers
        // A mapper would most likely never have these resolvers, so we skip them
        // Otherwise, these resolvers will always be generated
        const metaResolvers: Record<string, boolean> = {
          __isTypeOf: true,
          __resolveReference: true,
        };
        if (metaResolvers[resolverTypePropName]) {
          return;
        }

        const mapperProp = mapperPropsMap[resolverTypePropName];
        // 2. If mapper does not have a field in resolver type, add missing resolver
        if (!mapperProp) {
          result[schemaType][resolverTypePropName] = {
            resolverName: resolverTypePropName,
            resolverDeclaration: `async (_parent, _arg, _ctx) => { /* ${schemaTypePropIdentifier} resolver is required because ${schemaTypePropIdentifier} exists but ${mapperPropIdentifier} does not */ }`,
          };
          return;
        }

        // 3. If mapper and resolver props have the same name, compare their types
        const sourceType = mapperProp.type;

        // A resolver type may look like this:
        // `book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;`
        const targetType = resolverTypeProp.type // type is `Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType> | undefined` because book resolver is optional
          .getNonNullableType() // removing nullable, it becomes `Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>`
          .getAliasTypeArguments()[0]; // first type argument is `Maybe<ResolversTypes['Book']>`

        if (sourceType.isAssignableTo(targetType)) {
          return;
        }

        result[schemaType][resolverTypePropName] = {
          resolverName: resolverTypePropName,
          resolverDeclaration: `({ ${resolverTypePropName} }, _arg, _ctx) => {
                /* ${schemaTypePropIdentifier} resolver is required because ${schemaTypePropIdentifier} and ${mapperPropIdentifier} are not compatible */
                return ${resolverTypePropName}
              }`,
        };
      });
    });

    return result;
  }

  // 1. Get property map of all schema types
  const schemaResolversTypePropertyMap: Record<string, NodePropertyMap> = {};

  const populateSchemaTypeResolversPropertyMap = (
    node: TypeAliasDeclaration | InterfaceDeclaration
  ): void => {
    const identifier = node.getNameNode();
    const identifierName = identifier.getText();

    const schemaType = generatedSchemaTypeNameMap[identifierName];

    if (schemaType && userDefinedSchemaObjectTypeMap[schemaType]) {
      schemaResolversTypePropertyMap[schemaType] = getNodePropertyMap({ node });
    }
  };
  typesSourceFile
    .getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration)
    .forEach(populateSchemaTypeResolversPropertyMap);

  typesSourceFile
    .getDescendantsOfKind(SyntaxKind.InterfaceDeclaration)
    .forEach(populateSchemaTypeResolversPropertyMap);

  // 3. Find resolvers to generate and add reason
  const result: GraphQLObjectTypeResolversToGenerate = {};
  typeMappersEntries.forEach(([_, { schemaType, mapper }]) => {
    const matchedSchemaTypePropertyMap =
      schemaResolversTypePropertyMap[schemaType];
    if (!matchedSchemaTypePropertyMap) {
      return;
    }

    const originalDeclarationNode = mustGetMapperOriginalDeclarationNode({
      tsMorphProject,
      mapper,
    });
    const typeMapperPropertyMap = getNodePropertyMap({
      node: originalDeclarationNode,
    });

    Object.values(matchedSchemaTypePropertyMap).forEach(
      (schemaTypeProperty) => {
        const typeMapperProperty =
          typeMapperPropertyMap[schemaTypeProperty.name];

        const typeMapperPropertyIdentifier = `${mapper.name}.${schemaTypeProperty.name}`;
        const schemaTypePropertyIdentifier = `${schemaType}.${schemaTypeProperty.name}`;

        // Generated resolvers types may have one or more of these meta resolvers
        // A mapper would most likely never have these resolvers, so we skip them
        // Otherwise, these resolvers will always be generated
        const metaResolvers: Record<string, boolean> = {
          __isTypeOf: true,
          __resolveReference: true,
        };

        if (metaResolvers[schemaTypeProperty.name]) {
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

        /**
         * FIXME: TypeScript's `isTypeAssignableTo` should be used to check if the mapper type vs resolver return type is compatible.
         * The current challenge is to:
         * - Switch from using the schema type to resolver return type e.g. `User` -> `UserResolver`
         * - Take the ReturnType of the resolver function type e.g. `Resolver<ResolversTypes['UserRole'], ParentType, ContextType>`
         *
         * For now, the workaround now is to generate all resolvers with matching names,
         * then use TS diagnostics to see if there's error when trying to merge the two keys.
         *
         * Note: this happens only when mappers are used
         */
        result[schemaType][schemaTypeProperty.name] = {
          resolverName: schemaTypeProperty.name,
          resolverDeclaration: `({ ${schemaTypeProperty.name} }, _arg, _ctx) => {
                /* ${schemaTypePropertyIdentifier} resolver is required because ${schemaTypePropertyIdentifier} and ${typeMapperPropertyIdentifier} are not compatible */
                return ${schemaTypeProperty.name}
              }`,
        };

        return;
      }
    );
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
