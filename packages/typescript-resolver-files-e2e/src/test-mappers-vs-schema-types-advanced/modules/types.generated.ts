import { GraphQLResolveInfo } from 'graphql';
import { BookMapper, UserMapper } from './test/schema.mappers';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Base = {
  __typename?: 'Base';
  user?: Maybe<User>;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextBookInSeries: Book;
  relatedBooks: Array<Book>;
};

export type Query = {
  __typename?: 'Query';
};

export type User = {
  __typename?: 'User';
  book?: Maybe<Book>;
  bookInline: Book;
  bookNonNull: Book;
  books1?: Maybe<Array<Maybe<Book>>>;
  books2?: Maybe<Array<Book>>;
  books3: Array<Maybe<Book>>;
  books4: Array<Book>;
  books5?: Maybe<Array<Maybe<Book>>>;
  books6?: Maybe<Array<Book>>;
  books7: Array<Maybe<Book>>;
  books8: Array<Book>;
  id: Scalars['ID']['output'];
  mmBook1?: Maybe<Book>;
  mmBook2: Book;
  mmBooks1?: Maybe<Array<Maybe<Book>>>;
  mmBooks2?: Maybe<Array<Book>>;
  mmBooks3: Array<Maybe<Book>>;
  mmBooks4: Array<Book>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
  TResult,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<
  TTypes,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>
> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<
  T = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>
> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = Record<PropertyKey, never>,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Base: ResolverTypeWrapper<
    Omit<Base, 'user'> & { user?: Maybe<ResolversTypes['User']> }
  >;
  Book: ResolverTypeWrapper<BookMapper>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  User: ResolverTypeWrapper<UserMapper>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Base: Omit<Base, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  Book: BookMapper;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  Query: Record<PropertyKey, never>;
  User: UserMapper;
  Boolean: Scalars['Boolean']['output'];
};

export type BaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Base'] = ResolversParentTypes['Base']
> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type BookResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextBookInSeries?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  relatedBooks?: Resolver<
    Array<ResolversTypes['Book']>,
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  bookInline?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  bookNonNull?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  books1?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Book']>>>,
    ParentType,
    ContextType
  >;
  books2?: Resolver<
    Maybe<Array<ResolversTypes['Book']>>,
    ParentType,
    ContextType
  >;
  books3?: Resolver<
    Array<Maybe<ResolversTypes['Book']>>,
    ParentType,
    ContextType
  >;
  books4?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  books5?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Book']>>>,
    ParentType,
    ContextType
  >;
  books6?: Resolver<
    Maybe<Array<ResolversTypes['Book']>>,
    ParentType,
    ContextType
  >;
  books7?: Resolver<
    Array<Maybe<ResolversTypes['Book']>>,
    ParentType,
    ContextType
  >;
  books8?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mmBook1?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  mmBook2?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  mmBooks1?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Book']>>>,
    ParentType,
    ContextType
  >;
  mmBooks2?: Resolver<
    Maybe<Array<ResolversTypes['Book']>>,
    ParentType,
    ContextType
  >;
  mmBooks3?: Resolver<
    Array<Maybe<ResolversTypes['Book']>>,
    ParentType,
    ContextType
  >;
  mmBooks4?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Base?: BaseResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
