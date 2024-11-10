import {
  type InterfaceDeclaration,
  type TypeAliasDeclaration,
  type SourceFile,
  type Project,
  SyntaxKind,
  Identifier,
  Node,
  ExportDeclaration,
  ClassDeclaration,
  ExportSpecifier,
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
  // const typesSourceFile = tsMorphProject.createSourceFile(
  //   '/Users/eddeee888/Projects/eddeee888/graphql-code-generator-plugins/packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types-copy/modules/types.generated.ts',
  //   `
  // import {
  //   GraphQLResolveInfo,
  //   GraphQLScalarType,
  //   GraphQLScalarTypeConfig,
  // } from 'graphql';
  // import { UserMapper } from './user/user.graphqls.mappers';
  // export type Maybe<T> = T | null | undefined;
  // export type InputMaybe<T> = T | null | undefined;
  // export type Exact<T extends { [key: string]: unknown }> = {
  //   [K in keyof T]: T[K];
  // };
  // export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  //   [SubKey in K]?: Maybe<T[SubKey]>;
  // };
  // export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  //   [SubKey in K]: Maybe<T[SubKey]>;
  // };
  // export type MakeEmpty<
  //   T extends { [key: string]: unknown },
  //   K extends keyof T
  // > = { [_ in K]?: never };
  // export type Incremental<T> =
  //   | T
  //   | {
  //       [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
  //     };
  // export type EnumResolverSignature<T, AllowedValues = any> = {
  //   [key in keyof T]?: AllowedValues;
  // };
  // /** All built-in and custom scalars, mapped to their actual values */
  // export type Scalars = {
  //   ID: { input: string; output: string | number };
  //   String: { input: string; output: string };
  //   Boolean: { input: boolean; output: boolean };
  //   Int: { input: number; output: number };
  //   Float: { input: number; output: number };
  //   DateTime: { input: Date | string; output: Date | string };
  // };

  // export type Error = {
  //   __typename?: 'Error';
  //   message: Scalars['String']['output'];
  // };

  // export type Mutation = {
  //   __typename?: 'Mutation';
  // };

  // export type Query = {
  //   __typename?: 'Query';
  // };

  // export type Subscription = {
  //   __typename?: 'Subscription';
  // };

  // export type User = {
  //   __typename?: 'User';
  //   createdAt: Scalars['DateTime']['output'];
  //   id: Scalars['ID']['output'];
  //   role: UserRole;
  // };

  // export type UserRole = 'ADMIN' | 'USER';

  // export type ResolverTypeWrapper<T> = Promise<T> | T;

  // export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  //   resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
  // };
  // export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  //   | ResolverFn<TResult, TParent, TContext, TArgs>
  //   | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

  // export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  //   parent: TParent,
  //   args: TArgs,
  //   context: TContext,
  //   info: GraphQLResolveInfo
  // ) => Promise<TResult> | TResult;

  // export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  //   parent: TParent,
  //   args: TArgs,
  //   context: TContext,
  //   info: GraphQLResolveInfo
  // ) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

  // export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  //   parent: TParent,
  //   args: TArgs,
  //   context: TContext,
  //   info: GraphQLResolveInfo
  // ) => TResult | Promise<TResult>;

  // export interface SubscriptionSubscriberObject<
  //   TResult,
  //   TKey extends string,
  //   TParent,
  //   TContext,
  //   TArgs
  // > {
  //   subscribe: SubscriptionSubscribeFn<
  //     { [key in TKey]: TResult },
  //     TParent,
  //     TContext,
  //     TArgs
  //   >;
  //   resolve?: SubscriptionResolveFn<
  //     TResult,
  //     { [key in TKey]: TResult },
  //     TContext,
  //     TArgs
  //   >;
  // }

  // export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  //   subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  //   resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
  // }

  // export type SubscriptionObject<
  //   TResult,
  //   TKey extends string,
  //   TParent,
  //   TContext,
  //   TArgs
  // > =
  //   | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  //   | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

  // export type SubscriptionResolver<
  //   TResult,
  //   TKey extends string,
  //   TParent = {},
  //   TContext = {},
  //   TArgs = {}
  // > =
  //   | ((
  //       ...args: any[]
  //     ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  //   | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

  // export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  //   parent: TParent,
  //   context: TContext,
  //   info: GraphQLResolveInfo
  // ) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

  // export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  //   obj: T,
  //   context: TContext,
  //   info: GraphQLResolveInfo
  // ) => boolean | Promise<boolean>;

  // export type NextResolverFn<T> = () => Promise<T>;

  // export type DirectiveResolverFn<
  //   TResult = {},
  //   TParent = {},
  //   TContext = {},
  //   TArgs = {}
  // > = (
  //   next: NextResolverFn<TResult>,
  //   parent: TParent,
  //   args: TArgs,
  //   context: TContext,
  //   info: GraphQLResolveInfo
  // ) => TResult | Promise<TResult>;

  // /** Mapping between all available schema types and the resolvers types */
  // export type ResolversTypes = {
  //   DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  //   Error: ResolverTypeWrapper<Error>;
  //   String: ResolverTypeWrapper<Scalars['String']['output']>;
  //   Mutation: ResolverTypeWrapper<{}>;
  //   Query: ResolverTypeWrapper<{}>;
  //   Subscription: ResolverTypeWrapper<{}>;
  //   User: ResolverTypeWrapper<UserMapper>;
  //   ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  //   UserRole: ResolverTypeWrapper<'ADMIN' | 'USER'>;
  //   Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  // };

  // /** Mapping between all available schema types and the resolvers parents */
  // export type ResolversParentTypes = {
  //   DateTime: Scalars['DateTime']['output'];
  //   Error: Error;
  //   String: Scalars['String']['output'];
  //   Mutation: {};
  //   Query: {};
  //   Subscription: {};
  //   User: UserMapper;
  //   ID: Scalars['ID']['output'];
  //   Boolean: Scalars['Boolean']['output'];
  // };

  // export interface DateTimeScalarConfig
  //   extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  //   name: 'DateTime';
  // }

  // export type ErrorResolvers<
  //   ContextType = any,
  //   ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
  // > = {
  //   message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  //   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
  // };

  // export type MutationResolvers<
  //   ContextType = any,
  //   ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
  // > = {};

  // export type QueryResolvers<
  //   ContextType = any,
  //   ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
  // > = {};

  // export type SubscriptionResolvers<
  //   ContextType = any,
  //   ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
  // > = {};

  // export type UserResolvers<
  //   ContextType = any,
  //   ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
  // > = {
  //   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  //   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  //   role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  //   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
  // };

  // export type UserRoleResolvers = EnumResolverSignature<
  //   { ADMIN?: any; USER?: any },
  //   ResolversTypes['UserRole']
  // >;

  // export type Resolvers<ContextType = any> = {
  //   DateTime?: GraphQLScalarType;
  //   Error?: ErrorResolvers<ContextType>;
  //   Mutation?: MutationResolvers<ContextType>;
  //   Query?: QueryResolvers<ContextType>;
  //   Subscription?: SubscriptionResolvers<ContextType>;
  //   User?: UserResolvers<ContextType>;
  //   UserRole?: UserRoleResolvers;
  // };

  // `,
  //   { overwrite: true }
  // );
  //   const mapperFile = tsMorphProject.createSourceFile(
  //     '/Users/eddeee888/Projects/eddeee888/graphql-code-generator-plugins/packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types-copy/modules/user/user.graphqls.mappers.ts',
  //     `
  //     export type UserMapper = {
  //       id: number;
  //       firstName: string;
  //       lastName: string;
  //       role: 'ADMIN' | 'USER';
  //       createdAt: string | Date;
  //     };
  //     `,
  //     { overwrite: true }
  //   );

  // ----

  // const typesSourceFile = tsMorphProject.getSourceFile(
  //   '/Users/eddeee888/Projects/eddeee888/graphql-code-generator-plugins/packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types-copy/modules/types.generated.ts'
  // );
  // const mapperFile = tsMorphProject.getSourceFile(
  //   '/Users/eddeee888/Projects/eddeee888/graphql-code-generator-plugins/packages/typescript-resolver-files-e2e/src/test-mappers-vs-schema-types-copy/modules/user/user.graphqls.mappers.ts'
  // );
  // if (!typesSourceFile || !mapperFile) {
  //   throw new Error('OOps 1');
  // }

  // const schemaType1 = typesSourceFile
  //   .getTypeAliasOrThrow('User')
  //   .getType()
  //   .getProperties()
  //   .map((property) => {
  //     return {
  //       propertyName: property.getName(),
  //       type: property.getDeclarations()[0].getType(),
  //     };
  //   });

  // const mapperType = mapperFile
  //   .getTypeAliasOrThrow('UserMapper')
  //   .getType()
  //   .getProperties()
  //   .map((property) => {
  //     return {
  //       propertyName: property.getName(),
  //       type: property.getDeclarations()[0].getType(),
  //     };
  //   });

  // const schemaTypeRole = schemaType1.find((t) => t.propertyName === 'role');
  // const mapperTypeRole = mapperType.find((t) => t.propertyName === 'role');

  // const schemaTypeCreatedAt = schemaType1.find(
  //   (t) => t.propertyName === 'createdAt'
  // );
  // const mapperTypeCreatedAt = mapperType.find(
  //   (t) => t.propertyName === 'createdAt'
  // );
  // if (
  //   !schemaTypeRole ||
  //   !mapperTypeRole ||
  //   !schemaTypeCreatedAt ||
  //   !mapperTypeCreatedAt
  // ) {
  //   throw new Error('OOps');
  // }

  // console.log({
  //   role: mapperTypeRole.type.isAssignableTo(schemaTypeRole.type),
  //   createdAt: mapperTypeCreatedAt.type.isAssignableTo(
  //     schemaTypeCreatedAt.type
  //   ),
  // });

  // ----

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
    ([_, { schemaType, typeMapperName, kind, filename }]) => {
      const matchedSchemaTypePropertyMap = schemaTypePropertyMap[schemaType];
      if (matchedSchemaTypePropertyMap) {
        Object.values(matchedSchemaTypePropertyMap).forEach(
          (schemaTypeProperty) => {
            const typeMapperFile = tsMorphProject.getSourceFile(filename);
            if (!typeMapperFile) {
              throw new Error(
                `Unable to find ${typeMapperFile} file after parsing. This shouldn't happen.`
              );
            }

            const firstDescendantThatIsMapper = (() => {
              for (const descendant of typeMapperFile.getDescendants()) {
                const typedNode = descendant.isKind(kind);
                if (typedNode) {
                  let identifierNode = descendant.getNameNode();
                  if (descendant.isKind(SyntaxKind.ExportSpecifier)) {
                    const aliasNode = descendant.getAliasNode();
                    if (aliasNode) {
                      identifierNode = aliasNode;
                    }
                  }

                  if (identifierNode?.getText() === typeMapperName) {
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
                `Unable to find ${typeMapperName} node after parsing. This shouldn't happen.`
              );
            }

            const originalDeclarationNode = getOriginalDeclarationNode(
              firstDescendantThatIsMapper
            );
            const typeMapperPropertyMap = getNodePropertyMap({
              node: originalDeclarationNode,
              tsMorphProject,
            });

            // const typeMapperPropertyArray = mapperFile
            //   .getTypeAliasOrThrow(typeMapperName)
            //   .getType()
            //   .getProperties()
            //   .map((property) => {
            //     return {
            //       propertyName: property.getName(),
            //       type: property.getDeclarations()[0].getType(),
            //     };
            //   });

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

            // if (schemaTypeProperty.name === 'role') {
            //   console.log({
            //     infile: {
            //       condition: mapperTypeRole.type.isAssignableTo(
            //         schemaTypeProperty.type
            //       ),
            //     },
            //     collected: {
            //       condition: typeMapperProperty.type.isAssignableTo(
            //         schemaTypeProperty.type
            //       ),
            //     },
            //   });
            // }

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

const getOriginalDeclarationNode = ({
  declarationNode,
  identifierNode,
}: {
  declarationNode:
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | ExportSpecifier
    | ClassDeclaration;
  identifierNode: Identifier;
}): Node => {
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
