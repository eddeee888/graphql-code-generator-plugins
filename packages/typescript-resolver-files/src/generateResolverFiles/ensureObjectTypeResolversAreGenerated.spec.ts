import * as path from 'path';
import { Project } from 'ts-morph';
import { ensureObjectTypeResolversAreGenerated } from './ensureObjectTypeResolversAreGenerated';

const createFilePath = (filePath: string): string =>
  path.join('/path/', filePath);

describe('ensureObjectTypeResolversAreGenerated()', () => {
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

    const sourceFile = project.createSourceFile(
      createFilePath('User.ts'),
      `import type { UserResolvers } from './types.generated';
      export const User: UserResolvers = {
        /* Implement logic here */
      };`
    );
    const resolverFile: Parameters<
      typeof ensureObjectTypeResolversAreGenerated
    >[1] = {
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
        },
        resolversToGenerate: {
          id: {
            resolverName: 'id',
            resolverDeclaration: `({ id }) => id`,
          },
          createdAt: {
            resolverName: 'createdAt',
            resolverDeclaration: `({ createdAt }) => createdAt`,
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
          role: {
            resolverName: 'role',
            resolverDeclaration: `({ role }) => role`,
          },
        },
      },
    };
    ensureObjectTypeResolversAreGenerated(sourceFile, resolverFile);

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
    expect(resolverFile.filesystem.contentUpdated).toBe(true);
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
      typeof ensureObjectTypeResolversAreGenerated
    >[1] = {
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
        },
        resolversToGenerate: {
          id: {
            resolverName: 'id',
            resolverDeclaration: `({ id }) => id`,
          },
          createdAt: {
            resolverName: 'createdAt',
            resolverDeclaration: `({ createdAt }) => createdAt`,
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
          role: {
            resolverName: 'role',
            resolverDeclaration: `({ role }) => role`,
          },
        },
      },
    };

    ensureObjectTypeResolversAreGenerated(sourceFile, resolverFile);

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
    expect(resolverFile.filesystem.contentUpdated).toBe(true);
  });
});
