import * as path from 'path';
import { Project } from 'ts-morph';
import {
  type AddedPropertyAssignmentNodes,
  addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented,
} from './addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented';
import type { ObjectTypeFile } from './types';

const createFilePath = (filePath: string): string =>
  path.join('/path/', filePath);

describe('addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented() - mode: smart', () => {
  it('adds missing field resolvers if needed', () => {
    const project = new Project();
    project.createSourceFile(
      createFilePath('user.mappers.ts'),
      `export interface UserMapper {
        id: number;
        firstName: string;
        lastName: string;
        role: 'ADMIN' | 'USER';
        createdAt: Date;
      }`
    );
    project.createSourceFile(
      createFilePath('types.generated.ts'),
      `
      import { UserMapper } from './user.mappers';
      export type Maybe<T> = T | null;
      export type InputMaybe<T> = Maybe<T>;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
      };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
      };
      /** All built-in and custom scalars, mapped to their actual values */
      export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };

      export type Query = {
        __typename: 'Query';
        me?: Maybe<User>;
      };

      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };

      export type UserRole = 'ADMIN' | 'USER';

      export type ResolverTypeWrapper<T> = Promise<T> | T;

      export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
        resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
      };
      export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
        | ResolverFn<TResult, TParent, TContext, TArgs>
        | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

      export type ResolverFn<TResult, TParent, TContext, TArgs> = (
        parent: TParent,
        args: TArgs,
        context: TContext,
        info: any
      ) => Promise<TResult> | TResult;

      /** Mapping between all available schema types and the resolvers types */
      export type ResolversTypes = {
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Query: ResolverTypeWrapper<{}>;
        User: ResolverTypeWrapper<UserMapper>;
        String: ResolverTypeWrapper<Scalars['String']>;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        UserRole: UserRole;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
      };

      /** Mapping between all available schema types and the resolvers parents */
      export type ResolversParentTypes = {
        DateTime: Scalars['DateTime'];
        Query: {};
        User: UserMapper;
        String: Scalars['String'];
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
      };

      export type UserResolvers<
        ContextType = any,
        ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
      > = {
        accountGitHub?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        accountGoogle?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
        fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
      };
    `
    );

    const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};
    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {
        /* Implement logic here */
      };`
    );
    const resolverFile: ObjectTypeFile = {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      filesystem: {
        type: 'filesystem',
        contentUpdated: false,
      },
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        resolversToGenerate: {
          id: {
            resolverName: 'id',
            resolverDeclaration: `({ id }) => id`,
          },
          accountGitHub: {
            resolverName: 'accountGitHub',
            resolverDeclaration: `({ accountGitHub }) => accountGitHub`,
          },
          accountGoogle: {
            resolverName: 'accountGoogle',
            resolverDeclaration: `({ accountGoogle }) => accountGoogle`,
          },
          fullName: {
            resolverName: 'fullName',
            resolverDeclaration: `({ fullName }) => fullName`,
          },
        },
      },
    };
    addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
      mode: 'smart',
      addedPropertyAssignmentNodes,
      sourceFile,
      resolverFile,
    });

    // This is `/path/User.ts` file. We target it this way because the path on windows is different from linux
    const file = Object.values(addedPropertyAssignmentNodes)[0];

    const addedNode1 = file[4];
    expect(addedNode1.__toBeRemoved).toBe(true);
    expect(addedNode1.node.getText()).toBe('id: ({ id }) => id');

    const addedNode2 = file[5];
    expect(addedNode2.__toBeRemoved).toBe(true);
    expect(addedNode2.node.getText()).toBe(
      'accountGitHub: ({ accountGitHub }) => accountGitHub'
    );

    const addedNode3 = file[6];
    expect(addedNode3.__toBeRemoved).toBe(true);
    expect(addedNode3.node.getText()).toBe(
      'accountGoogle: ({ accountGoogle }) => accountGoogle'
    );

    const addedNode4 = file[7];
    expect(addedNode4.__toBeRemoved).toBe(true);
    expect(addedNode4.node.getText()).toBe(
      'fullName: ({ fullName }) => fullName'
    );

    expect(sourceFile.getText()).toMatchInlineSnapshot(`
      "import type { UserResolvers } from './types.generated';
            export const User: UserResolvers = {
              /* Implement logic here */
                id: ({ id }) => id,
                accountGitHub: ({ accountGitHub }) => accountGitHub,
                accountGoogle: ({ accountGoogle }) => accountGoogle,
                fullName: ({ fullName }) => fullName
          };"
    `);
  });

  it('adds does not add missing field resolvers if not needed i.e. resolversToGenerate is {}', () => {
    const project = new Project();
    project.createSourceFile(
      createFilePath('user.mappers.ts'),
      `export interface UserMapper {
        id: number;
        fullName: string;
        role: 'ADMIN' | 'USER';
        createdAt: Date;
      }`
    );
    project.createSourceFile(
      createFilePath('types.generated.ts'),
      `
      import { UserMapper } from './user.mappers';
      export type Maybe<T> = T | null;
      export type InputMaybe<T> = Maybe<T>;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
      };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
      };
      /** All built-in and custom scalars, mapped to their actual values */
      export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };

      export type Query = {
        __typename: 'Query';
        me?: Maybe<User>;
      };

      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };

      export type UserRole = 'ADMIN' | 'USER';

      export type ResolverTypeWrapper<T> = Promise<T> | T;

      export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
        resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
      };
      export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
        | ResolverFn<TResult, TParent, TContext, TArgs>
        | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

      export type ResolverFn<TResult, TParent, TContext, TArgs> = (
        parent: TParent,
        args: TArgs,
        context: TContext,
        info: any
      ) => Promise<TResult> | TResult;

      /** Mapping between all available schema types and the resolvers types */
      export type ResolversTypes = {
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Query: ResolverTypeWrapper<{}>;
        User: ResolverTypeWrapper<UserMapper>;
        String: ResolverTypeWrapper<Scalars['String']>;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        UserRole: UserRole;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
      };

      /** Mapping between all available schema types and the resolvers parents */
      export type ResolversParentTypes = {
        DateTime: Scalars['DateTime'];
        Query: {};
        User: UserMapper;
        String: Scalars['String'];
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
      };

      export type UserResolvers<
        ContextType = any,
        ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
      > = {
        accountGitHub?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        accountGoogle?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
        fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
      };
    `
    );

    const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};
    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {};`
    );
    const resolverFile: ObjectTypeFile = {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      filesystem: {
        type: 'filesystem',
        contentUpdated: false,
      },
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        resolversToGenerate: {},
      },
    };
    addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
      mode: 'smart',
      addedPropertyAssignmentNodes,
      sourceFile,
      resolverFile,
    });

    // This is `/path/User.ts` file. We target it this way because the path on windows is different from linux
    const file = Object.values(addedPropertyAssignmentNodes)[0];

    expect(file).toEqual({});
    expect(sourceFile.getText()).toMatchInlineSnapshot(`
      "import type { UserResolvers } from './types.generated';
            export const User: UserResolvers = {};"
    `);
  });

  it('adds missing field resolvers, if necessary, when Mapper is a Class', () => {
    const project = new Project();
    project.createSourceFile(
      createFilePath('user.mappers.ts'),
      `export class UserMapper {
        id: number;
        firstName: string;
        lastName: string;
        role: 'ADMIN' | 'USER';
        createdAt: Date;
      }`
    );
    project.createSourceFile(
      createFilePath('types.generated.ts'),
      `
      import { UserMapper } from './user.mappers';
      export type Maybe<T> = T | null;
      export type InputMaybe<T> = Maybe<T>;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
      };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
      };
      /** All built-in and custom scalars, mapped to their actual values */
      export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };

      export type Query = {
        __typename: 'Query';
        me?: Maybe<User>;
      };

      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };

      export type UserRole = 'ADMIN' | 'USER';

      export type ResolverTypeWrapper<T> = Promise<T> | T;

      export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
        resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
      };
      export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
        | ResolverFn<TResult, TParent, TContext, TArgs>
        | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

      export type ResolverFn<TResult, TParent, TContext, TArgs> = (
        parent: TParent,
        args: TArgs,
        context: TContext,
        info: any
      ) => Promise<TResult> | TResult;

      /** Mapping between all available schema types and the resolvers types */
      export type ResolversTypes = {
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Query: ResolverTypeWrapper<{}>;
        User: ResolverTypeWrapper<UserMapper>;
        String: ResolverTypeWrapper<Scalars['String']>;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        UserRole: UserRole;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
      };

      /** Mapping between all available schema types and the resolvers parents */
      export type ResolversParentTypes = {
        DateTime: Scalars['DateTime'];
        Query: {};
        User: UserMapper;
        String: Scalars['String'];
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
      };

      export type UserResolvers<
        ContextType = any,
        ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
      > = {
        accountGitHub?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        accountGoogle?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
        fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
      };
    `
    );

    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {
        /* Implement logic here */
      };`
    );
    const resolverFile: Parameters<
      typeof addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented
    >[0]['resolverFile'] = {
      __filetype: 'objectType',
      content: '',
      filesystem: {
        type: 'filesystem',
        contentUpdated: false,
      },
      mainImportIdentifier: 'User',
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        resolversToGenerate: {
          id: {
            resolverName: 'id',
            resolverDeclaration: `({ id }) => id`,
          },
          accountGitHub: {
            resolverName: 'accountGitHub',
            resolverDeclaration: `({ accountGitHub }) => accountGitHub`,
          },
          accountGoogle: {
            resolverName: 'accountGoogle',
            resolverDeclaration: `({ accountGoogle }) => accountGoogle`,
          },
          fullName: {
            resolverName: 'fullName',
            resolverDeclaration: `({ fullName }) => fullName`,
          },
        },
      },
    };

    const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};
    addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
      mode: 'smart',
      addedPropertyAssignmentNodes,
      sourceFile,
      resolverFile,
    });

    // This is `/path/User.ts` file. We target it this way because the path on windows is different from linux
    const file = Object.values(addedPropertyAssignmentNodes)[0];

    const addedNode1 = file[4];
    expect(addedNode1.__toBeRemoved).toBe(true);
    expect(addedNode1.node.getText()).toBe('id: ({ id }) => id');

    const addedNode2 = file[5];
    expect(addedNode2.__toBeRemoved).toBe(true);
    expect(addedNode2.node.getText()).toBe(
      'accountGitHub: ({ accountGitHub }) => accountGitHub'
    );

    const addedNode3 = file[6];
    expect(addedNode3.__toBeRemoved).toBe(true);
    expect(addedNode3.node.getText()).toBe(
      'accountGoogle: ({ accountGoogle }) => accountGoogle'
    );

    const addedNode4 = file[7];
    expect(addedNode4.__toBeRemoved).toBe(true);
    expect(addedNode4.node.getText()).toBe(
      'fullName: ({ fullName }) => fullName'
    );

    expect(sourceFile.getText()).toMatchInlineSnapshot(`
      "import type { UserResolvers } from './types.generated';
            export const User: UserResolvers = {
              /* Implement logic here */
                id: ({ id }) => id,
                accountGitHub: ({ accountGitHub }) => accountGitHub,
                accountGoogle: ({ accountGoogle }) => accountGoogle,
                fullName: ({ fullName }) => fullName
          };"
    `);
  });
});

describe('addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented() - mode: fast', () => {
  it('adds missing field resolvers if needed', () => {
    const project = new Project();
    project.createSourceFile(
      createFilePath('user.mappers.ts'),
      `export interface UserMapper {
        id: number;
        firstName: string;
        lastName: string;
        role: 'ADMIN' | 'USER';
        createdAt: Date;
      }`
    );
    project.createSourceFile(
      createFilePath('types.generated.ts'),
      `
      import { UserMapper } from './user.mappers';
      export type Maybe<T> = T | null;
      export type InputMaybe<T> = Maybe<T>;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
      };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
      };
      /** All built-in and custom scalars, mapped to their actual values */
      export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };

      export type Query = {
        __typename: 'Query';
        me?: Maybe<User>;
      };

      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };

      export type UserRole = 'ADMIN' | 'USER';

      export type ResolverTypeWrapper<T> = Promise<T> | T;

      export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
        resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
      };
      export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
        | ResolverFn<TResult, TParent, TContext, TArgs>
        | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

      export type ResolverFn<TResult, TParent, TContext, TArgs> = (
        parent: TParent,
        args: TArgs,
        context: TContext,
        info: any
      ) => Promise<TResult> | TResult;

      /** Mapping between all available schema types and the resolvers types */
      export type ResolversTypes = {
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Query: ResolverTypeWrapper<{}>;
        User: ResolverTypeWrapper<UserMapper>;
        String: ResolverTypeWrapper<Scalars['String']>;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        UserRole: UserRole;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
      };

      /** Mapping between all available schema types and the resolvers parents */
      export type ResolversParentTypes = {
        DateTime: Scalars['DateTime'];
        Query: {};
        User: UserMapper;
        String: Scalars['String'];
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
      };

      export type UserResolvers<
        ContextType = any,
        ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
      > = {
        accountGitHub?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        accountGoogle?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
        fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
      };
    `
    );

    const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};
    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {
        /* Implement logic here */
      };`
    );
    const resolverFile: ObjectTypeFile = {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      filesystem: {
        type: 'filesystem',
        contentUpdated: false,
      },
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        resolversToGenerate: {
          id: {
            resolverName: 'id',
            resolverDeclaration: `({ id }) => id`,
          },
          accountGitHub: {
            resolverName: 'accountGitHub',
            resolverDeclaration: `({ accountGitHub }) => accountGitHub`,
          },
          accountGoogle: {
            resolverName: 'accountGoogle',
            resolverDeclaration: `({ accountGoogle }) => accountGoogle`,
          },
          fullName: {
            resolverName: 'fullName',
            resolverDeclaration: `({ fullName }) => fullName`,
          },
        },
      },
    };
    addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
      mode: 'fast',
      addedPropertyAssignmentNodes,
      sourceFile,
      resolverFile,
    });

    // This is `/path/User.ts` file. We target it this way because the path on windows is different from linux
    const file = Object.values(addedPropertyAssignmentNodes)[0];

    const addedNode1 = file[4];
    expect(addedNode1.__toBeRemoved).toBe(false);
    expect(addedNode1.node.getText()).toBe('id: ({ id }) => id');

    const addedNode2 = file[5];
    expect(addedNode2.__toBeRemoved).toBe(false);
    expect(addedNode2.node.getText()).toBe(
      'accountGitHub: ({ accountGitHub }) => accountGitHub'
    );

    const addedNode3 = file[6];
    expect(addedNode3.__toBeRemoved).toBe(false);
    expect(addedNode3.node.getText()).toBe(
      'accountGoogle: ({ accountGoogle }) => accountGoogle'
    );

    const addedNode4 = file[7];
    expect(addedNode4.__toBeRemoved).toBe(false);
    expect(addedNode4.node.getText()).toBe(
      'fullName: ({ fullName }) => fullName'
    );

    expect(sourceFile.getText()).toMatchInlineSnapshot(`
      "import type { UserResolvers } from './types.generated';
            export const User: UserResolvers = {
              /* Implement logic here */
                id: ({ id }) => id,
                accountGitHub: ({ accountGitHub }) => accountGitHub,
                accountGoogle: ({ accountGoogle }) => accountGoogle,
                fullName: ({ fullName }) => fullName
          };"
    `);
  });

  it('adds does not add missing field resolvers if not needed i.e. resolversToGenerate is {}', () => {
    const project = new Project();
    project.createSourceFile(
      createFilePath('user.mappers.ts'),
      `export interface UserMapper {
        id: number;
        fullName: string;
        role: 'ADMIN' | 'USER';
        createdAt: Date;
      }`
    );
    project.createSourceFile(
      createFilePath('types.generated.ts'),
      `
      import { UserMapper } from './user.mappers';
      export type Maybe<T> = T | null;
      export type InputMaybe<T> = Maybe<T>;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
      };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
      };
      /** All built-in and custom scalars, mapped to their actual values */
      export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };

      export type Query = {
        __typename: 'Query';
        me?: Maybe<User>;
      };

      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };

      export type UserRole = 'ADMIN' | 'USER';

      export type ResolverTypeWrapper<T> = Promise<T> | T;

      export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
        resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
      };
      export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
        | ResolverFn<TResult, TParent, TContext, TArgs>
        | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

      export type ResolverFn<TResult, TParent, TContext, TArgs> = (
        parent: TParent,
        args: TArgs,
        context: TContext,
        info: any
      ) => Promise<TResult> | TResult;

      /** Mapping between all available schema types and the resolvers types */
      export type ResolversTypes = {
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Query: ResolverTypeWrapper<{}>;
        User: ResolverTypeWrapper<UserMapper>;
        String: ResolverTypeWrapper<Scalars['String']>;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        UserRole: UserRole;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
      };

      /** Mapping between all available schema types and the resolvers parents */
      export type ResolversParentTypes = {
        DateTime: Scalars['DateTime'];
        Query: {};
        User: UserMapper;
        String: Scalars['String'];
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
      };

      export type UserResolvers<
        ContextType = any,
        ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
      > = {
        accountGitHub?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        accountGoogle?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
        fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
      };
    `
    );

    const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};
    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {};`
    );
    const resolverFile: ObjectTypeFile = {
      __filetype: 'objectType',
      content: '',
      mainImportIdentifier: 'User',
      filesystem: {
        type: 'filesystem',
        contentUpdated: false,
      },
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        resolversToGenerate: {},
      },
    };
    addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
      mode: 'fast',
      addedPropertyAssignmentNodes,
      sourceFile,
      resolverFile,
    });

    // This is `/path/User.ts` file. We target it this way because the path on windows is different from linux
    const file = Object.values(addedPropertyAssignmentNodes)[0];

    expect(file).toEqual({});
    expect(sourceFile.getText()).toMatchInlineSnapshot(`
      "import type { UserResolvers } from './types.generated';
            export const User: UserResolvers = {};"
    `);
  });

  it('adds missing field resolvers, if necessary, when Mapper is a Class', () => {
    const project = new Project();
    project.createSourceFile(
      createFilePath('user.mappers.ts'),
      `export class UserMapper {
        id: number;
        firstName: string;
        lastName: string;
        role: 'ADMIN' | 'USER';
        createdAt: Date;
      }`
    );
    project.createSourceFile(
      createFilePath('types.generated.ts'),
      `
      import { UserMapper } from './user.mappers';
      export type Maybe<T> = T | null;
      export type InputMaybe<T> = Maybe<T>;
      export type Exact<T extends { [key: string]: unknown }> = {
        [K in keyof T]: T[K];
      };
      export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]?: Maybe<T[SubKey]>;
      };
      export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
        [SubKey in K]: Maybe<T[SubKey]>;
      };
      /** All built-in and custom scalars, mapped to their actual values */
      export type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        DateTime: Date | string;
      };

      export type Query = {
        __typename: 'Query';
        me?: Maybe<User>;
      };

      export type User = {
        __typename: 'User';
        accountGitHub?: Maybe<Scalars['String']>;
        accountGoogle?: Maybe<Scalars['String']>;
        createdAt: Scalars['DateTime'];
        fullName: Scalars['String'];
        id: Scalars['ID'];
        role: UserRole;
      };

      export type UserRole = 'ADMIN' | 'USER';

      export type ResolverTypeWrapper<T> = Promise<T> | T;

      export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
        resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
      };
      export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
        | ResolverFn<TResult, TParent, TContext, TArgs>
        | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

      export type ResolverFn<TResult, TParent, TContext, TArgs> = (
        parent: TParent,
        args: TArgs,
        context: TContext,
        info: any
      ) => Promise<TResult> | TResult;

      /** Mapping between all available schema types and the resolvers types */
      export type ResolversTypes = {
        DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
        Query: ResolverTypeWrapper<{}>;
        User: ResolverTypeWrapper<UserMapper>;
        String: ResolverTypeWrapper<Scalars['String']>;
        ID: ResolverTypeWrapper<Scalars['ID']>;
        UserRole: UserRole;
        Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
      };

      /** Mapping between all available schema types and the resolvers parents */
      export type ResolversParentTypes = {
        DateTime: Scalars['DateTime'];
        Query: {};
        User: UserMapper;
        String: Scalars['String'];
        ID: Scalars['ID'];
        Boolean: Scalars['Boolean'];
      };

      export type UserResolvers<
        ContextType = any,
        ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
      > = {
        accountGitHub?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        accountGoogle?: Resolver<
          Maybe<ResolversTypes['String']>,
          ParentType,
          ContextType
        >;
        createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
        fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
        id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
        role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
        __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
      };
    `
    );

    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {
        /* Implement logic here */
      };`
    );
    const resolverFile: Parameters<
      typeof addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented
    >[0]['resolverFile'] = {
      __filetype: 'objectType',
      content: '',
      filesystem: {
        type: 'filesystem',
        contentUpdated: false,
      },
      mainImportIdentifier: 'User',
      meta: {
        moduleName: 'user',
        relativePathFromBaseToModule: ['user'],
        normalizedResolverName: {
          base: 'User',
          withModule: 'user.User',
        },
        resolverTypeImportDeclaration: '',
        variableStatement: '',
        resolverType: {
          baseImport: 'UserResolvers',
          final: 'UserResolvers',
          otherVariants: [],
        },
        resolversToGenerate: {
          id: {
            resolverName: 'id',
            resolverDeclaration: `({ id }) => id`,
          },
          accountGitHub: {
            resolverName: 'accountGitHub',
            resolverDeclaration: `({ accountGitHub }) => accountGitHub`,
          },
          accountGoogle: {
            resolverName: 'accountGoogle',
            resolverDeclaration: `({ accountGoogle }) => accountGoogle`,
          },
          fullName: {
            resolverName: 'fullName',
            resolverDeclaration: `({ fullName }) => fullName`,
          },
        },
      },
    };

    const addedPropertyAssignmentNodes: AddedPropertyAssignmentNodes = {};
    addObjectTypeResolversPropertyAssignmentNodesIfNotImplemented({
      mode: 'fast',
      addedPropertyAssignmentNodes,
      sourceFile,
      resolverFile,
    });

    // This is `/path/User.ts` file. We target it this way because the path on windows is different from linux
    const file = Object.values(addedPropertyAssignmentNodes)[0];

    const addedNode1 = file[4];
    expect(addedNode1.__toBeRemoved).toBe(false);
    expect(addedNode1.node.getText()).toBe('id: ({ id }) => id');

    const addedNode2 = file[5];
    expect(addedNode2.__toBeRemoved).toBe(false);
    expect(addedNode2.node.getText()).toBe(
      'accountGitHub: ({ accountGitHub }) => accountGitHub'
    );

    const addedNode3 = file[6];
    expect(addedNode3.__toBeRemoved).toBe(false);
    expect(addedNode3.node.getText()).toBe(
      'accountGoogle: ({ accountGoogle }) => accountGoogle'
    );

    const addedNode4 = file[7];
    expect(addedNode4.__toBeRemoved).toBe(false);
    expect(addedNode4.node.getText()).toBe(
      'fullName: ({ fullName }) => fullName'
    );

    expect(sourceFile.getText()).toMatchInlineSnapshot(`
      "import type { UserResolvers } from './types.generated';
            export const User: UserResolvers = {
              /* Implement logic here */
                id: ({ id }) => id,
                accountGitHub: ({ accountGitHub }) => accountGitHub,
                accountGoogle: ({ accountGoogle }) => accountGoogle,
                fullName: ({ fullName }) => fullName
          };"
    `);
  });
});
