import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { ResolverContext } from './customTypes';
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
  BigInt: number;
  DateTime: Date | string;
  SomeOtherScalars: any;
};

export enum Currency {
  Aud = 'AUD',
  Usd = 'USD',
}

export type Error = {
  error: ErrorType;
};

export enum ErrorType {
  ForbiddenError = 'FORBIDDEN_ERROR',
  InputValidationError = 'INPUT_VALIDATION_ERROR',
  NotFound = 'NOT_FOUND',
  UnexpectedError = 'UNEXPECTED_ERROR',
}

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

export type Profile = {
  __typename: 'Profile';
  id: Scalars['ID'];
  user: User;
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

export type Subscription = {
  __typename: 'Subscription';
  profileChanges: Profile;
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

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Currency: Currency;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: ResolversTypes['StandardError'];
  ErrorType: ErrorType;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: PaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PaginationResult: ResolverTypeWrapper<PaginationResult>;
  Profile: ResolverTypeWrapper<Profile>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SomeOtherScalars: ResolverTypeWrapper<Scalars['SomeOtherScalars']>;
  StandardError: ResolverTypeWrapper<StandardError>;
  Subscription: ResolverTypeWrapper<{}>;
  Topic: ResolverTypeWrapper<Topic>;
  TopicByIdPayload:
    | ResolversTypes['StandardError']
    | ResolversTypes['TopicByIdResult'];
  TopicByIdResult: ResolverTypeWrapper<TopicByIdResult>;
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload:
    | ResolversTypes['StandardError']
    | ResolversTypes['TopicCreateResult'];
  TopicCreateResult: ResolverTypeWrapper<TopicCreateResult>;
  TopicEditInput: TopicEditInput;
  TopicEditPayload:
    | ResolversTypes['StandardError']
    | ResolversTypes['TopicEditResult'];
  TopicEditResult: ResolverTypeWrapper<TopicEditResult>;
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload:
    | ResolversTypes['StandardError']
    | ResolversTypes['TopicsCreatedByUserResult'];
  TopicsCreatedByUserResult: ResolverTypeWrapper<TopicsCreatedByUserResult>;
  User: ResolverTypeWrapper<User>;
  UserPayload: ResolversTypes['StandardError'] | ResolversTypes['UserResult'];
  UserResult: ResolverTypeWrapper<UserResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  DateTime: Scalars['DateTime'];
  Error: ResolversParentTypes['StandardError'];
  Mutation: {};
  PaginationInput: PaginationInput;
  Int: Scalars['Int'];
  PaginationResult: PaginationResult;
  Profile: Profile;
  ID: Scalars['ID'];
  Query: {};
  String: Scalars['String'];
  SomeOtherScalars: Scalars['SomeOtherScalars'];
  StandardError: StandardError;
  Subscription: {};
  Topic: Topic;
  TopicByIdPayload:
    | ResolversParentTypes['StandardError']
    | ResolversParentTypes['TopicByIdResult'];
  TopicByIdResult: TopicByIdResult;
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload:
    | ResolversParentTypes['StandardError']
    | ResolversParentTypes['TopicCreateResult'];
  TopicCreateResult: TopicCreateResult;
  TopicEditInput: TopicEditInput;
  TopicEditPayload:
    | ResolversParentTypes['StandardError']
    | ResolversParentTypes['TopicEditResult'];
  TopicEditResult: TopicEditResult;
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload:
    | ResolversParentTypes['StandardError']
    | ResolversParentTypes['TopicsCreatedByUserResult'];
  TopicsCreatedByUserResult: TopicsCreatedByUserResult;
  User: User;
  UserPayload:
    | ResolversParentTypes['StandardError']
    | ResolversParentTypes['UserResult'];
  UserResult: UserResult;
  Boolean: Scalars['Boolean'];
};

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  __resolveType: TypeResolveFn<'StandardError', ParentType, ContextType>;
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['PaginationResult'] = ResolversParentTypes['PaginationResult']
> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recordsPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ResolverContext,
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

export interface SomeOtherScalarsScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['SomeOtherScalars'], any> {
  name: 'SomeOtherScalars';
}

export type StandardErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['StandardError'] = ResolversParentTypes['StandardError']
> = {
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  profileChanges?: SubscriptionResolver<
    ResolversTypes['Profile'],
    'profileChanges',
    ParentType,
    ContextType
  >;
};

export type TopicResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicByIdPayload'] = ResolversParentTypes['TopicByIdPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicByIdResult',
    ParentType,
    ContextType
  >;
};

export type TopicByIdResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicByIdResult'] = ResolversParentTypes['TopicByIdResult']
> = {
  result?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicCreatePayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicCreatePayload'] = ResolversParentTypes['TopicCreatePayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicCreateResult',
    ParentType,
    ContextType
  >;
};

export type TopicCreateResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicCreateResult'] = ResolversParentTypes['TopicCreateResult']
> = {
  result?: Resolver<ResolversTypes['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicEditPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicEditPayload'] = ResolversParentTypes['TopicEditPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicEditResult',
    ParentType,
    ContextType
  >;
};

export type TopicEditResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicEditResult'] = ResolversParentTypes['TopicEditResult']
> = {
  result?: Resolver<ResolversTypes['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicsCreatedByUserPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicsCreatedByUserPayload'] = ResolversParentTypes['TopicsCreatedByUserPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicsCreatedByUserResult',
    ParentType,
    ContextType
  >;
};

export type TopicsCreatedByUserResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['TopicsCreatedByUserResult'] = ResolversParentTypes['TopicsCreatedByUserResult']
> = {
  result?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'UserResult',
    ParentType,
    ContextType
  >;
};

export type UserResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']
> = {
  result?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  BigInt?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginationResult?: PaginationResultResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SomeOtherScalars?: GraphQLScalarType;
  StandardError?: StandardErrorResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
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
