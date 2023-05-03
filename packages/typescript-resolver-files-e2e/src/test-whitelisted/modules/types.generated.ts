import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: Date | string;
};

export type Error = {
  error: ErrorType;
};

export type ErrorType =
  | 'FORBIDDEN_ERROR'
  | 'INPUT_VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNEXPECTED_ERROR';

export type Mutation = {
  __typename: 'Mutation';
  topicCreate: TopicCreatePayload;
  topicEdit: TopicEditPayload;
};

export type MutationTopicCreateArgs = {
  input: TopicCreateInput;
};

export type MutationTopicEditArgs = {
  input: TopicEditInput;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type PaginationResult = {
  __typename: 'PaginationResult';
  currentPage: Scalars['Int'];
  recordsPerPage: Scalars['Int'];
  totalPageCount: Scalars['Int'];
};

export type Query = {
  __typename: 'Query';
  me: UserPayload;
  topicById: TopicByIdPayload;
  topicsCreatedByUser: TopicsCreatedByUserPayload;
  userByAccountName: UserPayload;
};

export type QueryTopicByIdArgs = {
  id: Scalars['ID'];
};

export type QueryTopicsCreatedByUserArgs = {
  input: TopicsCreatedByUserInput;
};

export type QueryUserByAccountNameArgs = {
  accountName: Scalars['String'];
};

export type StandardError = Error & {
  __typename: 'StandardError';
  error: ErrorType;
};

export type Topic = {
  __typename: 'Topic';
  createdAt: Scalars['DateTime'];
  creator: User;
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type TopicByIdPayload = StandardError | TopicByIdResult;

export type TopicByIdResult = {
  __typename: 'TopicByIdResult';
  result?: Maybe<Topic>;
};

export type TopicCreateInput = {
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type TopicCreatePayload = StandardError | TopicCreateResult;

export type TopicCreateResult = {
  __typename: 'TopicCreateResult';
  result: Topic;
};

export type TopicEditInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type TopicEditPayload = StandardError | TopicEditResult;

export type TopicEditResult = {
  __typename: 'TopicEditResult';
  result: Topic;
};

export type TopicsCreatedByUserInput = {
  userId: Scalars['ID'];
};

export type TopicsCreatedByUserPayload =
  | StandardError
  | TopicsCreatedByUserResult;

export type TopicsCreatedByUserResult = {
  __typename: 'TopicsCreatedByUserResult';
  result: Array<Topic>;
};

export type User = {
  __typename: 'User';
  accountGitHub?: Maybe<Scalars['String']>;
  accountLinkedIn?: Maybe<Scalars['String']>;
  accountName: Scalars['String'];
  accountTwitter?: Maybe<Scalars['String']>;
  accountWebsite?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UserPayload = StandardError | UserResult;

export type UserResult = {
  __typename: 'UserResult';
  result?: Maybe<User>;
};

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
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  TopicByIdPayload: StandardError | TopicByIdResult;
  TopicCreatePayload: StandardError | TopicCreateResult;
  TopicEditPayload: StandardError | TopicEditResult;
  TopicsCreatedByUserPayload: StandardError | TopicsCreatedByUserResult;
  UserPayload: StandardError | UserResult;
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  TopicByIdPayload: StandardError | TopicByIdResult;
  TopicCreatePayload: StandardError | TopicCreateResult;
  TopicEditPayload: StandardError | TopicEditResult;
  TopicsCreatedByUserPayload: StandardError | TopicsCreatedByUserResult;
  UserPayload: StandardError | UserResult;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: ResolversTypes['StandardError'];
  ErrorType: ErrorType;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: PaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PaginationResult: ResolverTypeWrapper<PaginationResult>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StandardError: ResolverTypeWrapper<StandardError>;
  Topic: ResolverTypeWrapper<Topic>;
  TopicByIdPayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicByIdPayload']
  >;
  TopicByIdResult: ResolverTypeWrapper<TopicByIdResult>;
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicCreatePayload']
  >;
  TopicCreateResult: ResolverTypeWrapper<TopicCreateResult>;
  TopicEditInput: TopicEditInput;
  TopicEditPayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicEditPayload']
  >;
  TopicEditResult: ResolverTypeWrapper<TopicEditResult>;
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicsCreatedByUserPayload']
  >;
  TopicsCreatedByUserResult: ResolverTypeWrapper<TopicsCreatedByUserResult>;
  User: ResolverTypeWrapper<User>;
  UserPayload: ResolverTypeWrapper<ResolversUnionTypes['UserPayload']>;
  UserResult: ResolverTypeWrapper<UserResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Error: ResolversParentTypes['StandardError'];
  Mutation: {};
  PaginationInput: PaginationInput;
  Int: Scalars['Int'];
  PaginationResult: PaginationResult;
  Query: {};
  ID: Scalars['ID'];
  String: Scalars['String'];
  StandardError: StandardError;
  Topic: Topic;
  TopicByIdPayload: ResolversUnionParentTypes['TopicByIdPayload'];
  TopicByIdResult: TopicByIdResult;
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload: ResolversUnionParentTypes['TopicCreatePayload'];
  TopicCreateResult: TopicCreateResult;
  TopicEditInput: TopicEditInput;
  TopicEditPayload: ResolversUnionParentTypes['TopicEditPayload'];
  TopicEditResult: TopicEditResult;
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload: ResolversUnionParentTypes['TopicsCreatedByUserPayload'];
  TopicsCreatedByUserResult: TopicsCreatedByUserResult;
  User: User;
  UserPayload: ResolversUnionParentTypes['UserPayload'];
  UserResult: UserResult;
  Boolean: Scalars['Boolean'];
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  __resolveType: TypeResolveFn<'StandardError', ParentType, ContextType>;
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  topicCreate?: Resolver<
    ResolversTypes['TopicCreatePayload'],
    ParentType,
    ContextType,
    RequireFields<MutationTopicCreateArgs, 'input'>
  >;
  topicEdit?: Resolver<
    ResolversTypes['TopicEditPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationTopicEditArgs, 'input'>
  >;
};

export type PaginationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaginationResult'] = ResolversParentTypes['PaginationResult']
> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recordsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  me?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType>;
  topicById?: Resolver<
    ResolversTypes['TopicByIdPayload'],
    ParentType,
    ContextType,
    RequireFields<QueryTopicByIdArgs, 'id'>
  >;
  topicsCreatedByUser?: Resolver<
    ResolversTypes['TopicsCreatedByUserPayload'],
    ParentType,
    ContextType,
    RequireFields<QueryTopicsCreatedByUserArgs, 'input'>
  >;
  userByAccountName?: Resolver<
    ResolversTypes['UserPayload'],
    ParentType,
    ContextType,
    RequireFields<QueryUserByAccountNameArgs, 'accountName'>
  >;
};

export type StandardErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StandardError'] = ResolversParentTypes['StandardError']
> = {
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicByIdPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicByIdPayload'] = ResolversParentTypes['TopicByIdPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicByIdResult',
    ParentType,
    ContextType
  >;
};

export type TopicByIdResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicByIdResult'] = ResolversParentTypes['TopicByIdResult']
> = {
  result?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicCreatePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicCreatePayload'] = ResolversParentTypes['TopicCreatePayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicCreateResult',
    ParentType,
    ContextType
  >;
};

export type TopicCreateResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicCreateResult'] = ResolversParentTypes['TopicCreateResult']
> = {
  result?: Resolver<ResolversTypes['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicEditPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicEditPayload'] = ResolversParentTypes['TopicEditPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicEditResult',
    ParentType,
    ContextType
  >;
};

export type TopicEditResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicEditResult'] = ResolversParentTypes['TopicEditResult']
> = {
  result?: Resolver<ResolversTypes['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicsCreatedByUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicsCreatedByUserPayload'] = ResolversParentTypes['TopicsCreatedByUserPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicsCreatedByUserResult',
    ParentType,
    ContextType
  >;
};

export type TopicsCreatedByUserResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicsCreatedByUserResult'] = ResolversParentTypes['TopicsCreatedByUserResult']
> = {
  result?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  accountLinkedIn?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  accountName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountTwitter?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  accountWebsite?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'UserResult',
    ParentType,
    ContextType
  >;
};

export type UserResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']
> = {
  result?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginationResult?: PaginationResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StandardError?: StandardErrorResolvers<ContextType>;
  Topic?: TopicResolvers<ContextType>;
  TopicByIdPayload?: TopicByIdPayloadResolvers<ContextType>;
  TopicByIdResult?: TopicByIdResultResolvers<ContextType>;
  TopicCreatePayload?: TopicCreatePayloadResolvers<ContextType>;
  TopicCreateResult?: TopicCreateResultResolvers<ContextType>;
  TopicEditPayload?: TopicEditPayloadResolvers<ContextType>;
  TopicEditResult?: TopicEditResultResolvers<ContextType>;
  TopicsCreatedByUserPayload?: TopicsCreatedByUserPayloadResolvers<ContextType>;
  TopicsCreatedByUserResult?: TopicsCreatedByUserResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
};
