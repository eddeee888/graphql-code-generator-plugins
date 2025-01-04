import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { FeaturedUsersResultMapper } from './user/user.graphqls.mappers';
import { TopicMapper } from './topic/topic.mappers';
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
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  File: { input: any; output: any };
  SomeRandomScalar: { input: any; output: any };
};

export type Error = {
  error: ErrorType;
};

export type ErrorType =
  | 'FORBIDDEN_ERROR'
  | 'INPUT_VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNEXPECTED_ERROR';

export type FeaturedUsersPayload = FeaturedUsersResult | PayloadError;

export type FeaturedUsersResult = {
  __typename?: 'FeaturedUsersResult';
  names: Array<Scalars['String']['output']>;
  reason: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  profileDelete: Scalars['Boolean']['output'];
  topicCreate: TopicCreatePayload;
  topicEdit: TopicEditPayload;
};

export type MutationtopicCreateArgs = {
  input: TopicCreateInput;
};

export type MutationtopicEditArgs = {
  input: TopicEditInput;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationResult = {
  __typename?: 'PaginationResult';
  currentPage: Scalars['Int']['output'];
  recordsPerPage: Scalars['Int']['output'];
  totalPageCount: Scalars['Int']['output'];
};

export type PayloadError = Error & {
  __typename?: 'PayloadError';
  error: ErrorType;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID']['output'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  featuredUserNames: FeaturedUsersPayload;
  me: UserPayload;
  topicById: TopicByIdPayload;
  topicsCreatedByUser: TopicsCreatedByUserPayload;
  userByAccountName: UserPayload;
};

export type QuerytopicByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QuerytopicsCreatedByUserArgs = {
  input: TopicsCreatedByUserInput;
};

export type QueryuserByAccountNameArgs = {
  accountName: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  profileChanges: Profile;
};

export type Topic = {
  __typename?: 'Topic';
  createdAt: Scalars['DateTime']['output'];
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type TopicByIdPayload = PayloadError | TopicByIdResult;

export type TopicByIdResult = {
  __typename?: 'TopicByIdResult';
  result?: Maybe<Topic>;
};

export type TopicCreateInput = {
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TopicCreatePayload = PayloadError | TopicCreateResult;

export type TopicCreateResult = {
  __typename?: 'TopicCreateResult';
  result: Topic;
};

export type TopicEditInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TopicEditPayload = PayloadError | TopicEditResult;

export type TopicEditResult = {
  __typename?: 'TopicEditResult';
  result: Topic;
};

export type TopicsCreatedByUserInput = {
  userId: Scalars['ID']['input'];
};

export type TopicsCreatedByUserPayload =
  | PayloadError
  | TopicsCreatedByUserResult;

export type TopicsCreatedByUserResult = {
  __typename?: 'TopicsCreatedByUserResult';
  result: Array<Topic>;
};

export type User = {
  __typename?: 'User';
  accountGitHub?: Maybe<Scalars['String']['output']>;
  accountLinkedIn?: Maybe<Scalars['String']['output']>;
  accountName: Scalars['String']['output'];
  accountTwitter?: Maybe<Scalars['String']['output']>;
  accountWebsite?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserPayload = PayloadError | UserResult;

export type UserResult = {
  __typename?: 'UserResult';
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
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  FeaturedUsersPayload:
    | (FeaturedUsersResultMapper & { __typename: 'FeaturedUsersResult' })
    | (Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'PayloadError';
      });
  TopicByIdPayload:
    | (Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'PayloadError';
      })
    | (Omit<TopicByIdResult, 'result'> & {
        result?: Maybe<_RefType['Topic']>;
      } & { __typename: 'TopicByIdResult' });
  TopicCreatePayload:
    | (Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'PayloadError';
      })
    | (Omit<TopicCreateResult, 'result'> & { result: _RefType['Topic'] } & {
        __typename: 'TopicCreateResult';
      });
  TopicEditPayload:
    | (Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'PayloadError';
      })
    | (Omit<TopicEditResult, 'result'> & { result: _RefType['Topic'] } & {
        __typename: 'TopicEditResult';
      });
  TopicsCreatedByUserPayload:
    | (Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'PayloadError';
      })
    | (Omit<TopicsCreatedByUserResult, 'result'> & {
        result: Array<_RefType['Topic']>;
      } & { __typename: 'TopicsCreatedByUserResult' });
  UserPayload:
    | (Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'PayloadError';
      })
    | (UserResult & { __typename: 'UserResult' });
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    Error: Omit<PayloadError, 'error'> & { error: _RefType['ErrorType'] } & {
      __typename: 'PayloadError';
    };
  };

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Error']>;
  ErrorType: ResolverTypeWrapper<
    | 'NOT_FOUND'
    | 'INPUT_VALIDATION_ERROR'
    | 'FORBIDDEN_ERROR'
    | 'UNEXPECTED_ERROR'
  >;
  FeaturedUsersPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['FeaturedUsersPayload']
  >;
  FeaturedUsersResult: ResolverTypeWrapper<FeaturedUsersResultMapper>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  File: ResolverTypeWrapper<Scalars['File']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  PaginationInput: PaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PaginationResult: ResolverTypeWrapper<PaginationResult>;
  PayloadError: ResolverTypeWrapper<
    Omit<PayloadError, 'error'> & { error: ResolversTypes['ErrorType'] }
  >;
  Profile: ResolverTypeWrapper<Profile>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Query: ResolverTypeWrapper<{}>;
  SomeRandomScalar: ResolverTypeWrapper<Scalars['SomeRandomScalar']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Topic: ResolverTypeWrapper<TopicMapper>;
  TopicByIdPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TopicByIdPayload']
  >;
  TopicByIdResult: ResolverTypeWrapper<
    Omit<TopicByIdResult, 'result'> & {
      result?: Maybe<ResolversTypes['Topic']>;
    }
  >;
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TopicCreatePayload']
  >;
  TopicCreateResult: ResolverTypeWrapper<
    Omit<TopicCreateResult, 'result'> & { result: ResolversTypes['Topic'] }
  >;
  TopicEditInput: TopicEditInput;
  TopicEditPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TopicEditPayload']
  >;
  TopicEditResult: ResolverTypeWrapper<
    Omit<TopicEditResult, 'result'> & { result: ResolversTypes['Topic'] }
  >;
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TopicsCreatedByUserPayload']
  >;
  TopicsCreatedByUserResult: ResolverTypeWrapper<
    Omit<TopicsCreatedByUserResult, 'result'> & {
      result: Array<ResolversTypes['Topic']>;
    }
  >;
  User: ResolverTypeWrapper<User>;
  UserPayload: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserPayload']
  >;
  UserResult: ResolverTypeWrapper<UserResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']['output'];
  Error: ResolversInterfaceTypes<ResolversParentTypes>['Error'];
  FeaturedUsersPayload: ResolversUnionTypes<ResolversParentTypes>['FeaturedUsersPayload'];
  FeaturedUsersResult: FeaturedUsersResultMapper;
  String: Scalars['String']['output'];
  File: Scalars['File']['output'];
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  PaginationInput: PaginationInput;
  Int: Scalars['Int']['output'];
  PaginationResult: PaginationResult;
  PayloadError: PayloadError;
  Profile: Profile;
  ID: Scalars['ID']['output'];
  Query: {};
  SomeRandomScalar: Scalars['SomeRandomScalar']['output'];
  Subscription: {};
  Topic: TopicMapper;
  TopicByIdPayload: ResolversUnionTypes<ResolversParentTypes>['TopicByIdPayload'];
  TopicByIdResult: Omit<TopicByIdResult, 'result'> & {
    result?: Maybe<ResolversParentTypes['Topic']>;
  };
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload: ResolversUnionTypes<ResolversParentTypes>['TopicCreatePayload'];
  TopicCreateResult: Omit<TopicCreateResult, 'result'> & {
    result: ResolversParentTypes['Topic'];
  };
  TopicEditInput: TopicEditInput;
  TopicEditPayload: ResolversUnionTypes<ResolversParentTypes>['TopicEditPayload'];
  TopicEditResult: Omit<TopicEditResult, 'result'> & {
    result: ResolversParentTypes['Topic'];
  };
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload: ResolversUnionTypes<ResolversParentTypes>['TopicsCreatedByUserPayload'];
  TopicsCreatedByUserResult: Omit<TopicsCreatedByUserResult, 'result'> & {
    result: Array<ResolversParentTypes['Topic']>;
  };
  User: User;
  UserPayload: ResolversUnionTypes<ResolversParentTypes>['UserPayload'];
  UserResult: UserResult;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  __resolveType?: TypeResolveFn<'PayloadError', ParentType, ContextType>;
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
};

export type ErrorTypeResolvers = EnumResolverSignature<
  {
    FORBIDDEN_ERROR?: any;
    INPUT_VALIDATION_ERROR?: any;
    NOT_FOUND?: any;
    UNEXPECTED_ERROR?: any;
  },
  ResolversTypes['ErrorType']
>;

export type FeaturedUsersPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeaturedUsersPayload'] = ResolversParentTypes['FeaturedUsersPayload']
> = {
  __resolveType?: TypeResolveFn<
    'FeaturedUsersResult' | 'PayloadError',
    ParentType,
    ContextType
  >;
};

export type FeaturedUsersResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeaturedUsersResult'] = ResolversParentTypes['FeaturedUsersResult']
> = {
  names?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface FileScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  profileDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  topicCreate?: Resolver<
    ResolversTypes['TopicCreatePayload'],
    ParentType,
    ContextType,
    RequireFields<MutationtopicCreateArgs, 'input'>
  >;
  topicEdit?: Resolver<
    ResolversTypes['TopicEditPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationtopicEditArgs, 'input'>
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

export type PayloadErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PayloadError'] = ResolversParentTypes['PayloadError']
> = {
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  featuredUserNames?: Resolver<
    ResolversTypes['FeaturedUsersPayload'],
    ParentType,
    ContextType
  >;
  me?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType>;
  topicById?: Resolver<
    ResolversTypes['TopicByIdPayload'],
    ParentType,
    ContextType,
    RequireFields<QuerytopicByIdArgs, 'id'>
  >;
  topicsCreatedByUser?: Resolver<
    ResolversTypes['TopicsCreatedByUserPayload'],
    ParentType,
    ContextType,
    RequireFields<QuerytopicsCreatedByUserArgs, 'input'>
  >;
  userByAccountName?: Resolver<
    ResolversTypes['UserPayload'],
    ParentType,
    ContextType,
    RequireFields<QueryuserByAccountNameArgs, 'accountName'>
  >;
};

export interface SomeRandomScalarScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['SomeRandomScalar'], any> {
  name: 'SomeRandomScalar';
}

export type SubscriptionResolvers<
  ContextType = any,
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
  __resolveType?: TypeResolveFn<
    'PayloadError' | 'TopicByIdResult',
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
  __resolveType?: TypeResolveFn<
    'PayloadError' | 'TopicCreateResult',
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
  __resolveType?: TypeResolveFn<
    'PayloadError' | 'TopicEditResult',
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
  __resolveType?: TypeResolveFn<
    'PayloadError' | 'TopicsCreatedByUserResult',
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
  __resolveType?: TypeResolveFn<
    'PayloadError' | 'UserResult',
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
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  ErrorType?: ErrorTypeResolvers;
  FeaturedUsersPayload?: FeaturedUsersPayloadResolvers<ContextType>;
  FeaturedUsersResult?: FeaturedUsersResultResolvers<ContextType>;
  File?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PaginationResult?: PaginationResultResolvers<ContextType>;
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SomeRandomScalar?: GraphQLScalarType;
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
