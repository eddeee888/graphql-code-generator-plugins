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
  Date: Date | string;
  DateTime: Date | string;
};

export type IError = {
  error: IErrorType;
};

export type IErrorType =
  | 'FORBIDDEN_ERROR'
  | 'INPUT_VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNEXPECTED_ERROR';

export type IMutation = {
  __typename: 'Mutation';
  topicCreate: ITopicCreatePayload;
  topicEdit: ITopicEditPayload;
};

export type IMutationTopicCreateArgs = {
  input: ITopicCreateInput;
};

export type IMutationTopicEditArgs = {
  input: ITopicEditInput;
};

export type IPaginationInput = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type IPaginationResult = {
  __typename: 'PaginationResult';
  currentPage: Scalars['Int'];
  recordsPerPage: Scalars['Int'];
  totalPageCount: Scalars['Int'];
};

export type IQuery = {
  __typename: 'Query';
  me: IUserPayload;
  topicById: ITopicByIdPayload;
  topicsCreatedByUser: ITopicsCreatedByUserPayload;
  userByAccountName: IUserPayload;
};

export type IQueryTopicByIdArgs = {
  id: Scalars['ID'];
};

export type IQueryTopicsCreatedByUserArgs = {
  input: ITopicsCreatedByUserInput;
};

export type IQueryUserByAccountNameArgs = {
  accountName: Scalars['String'];
};

export type IStandardError = IError & {
  __typename: 'StandardError';
  error: IErrorType;
};

export type ITopic = {
  __typename: 'Topic';
  createdAt: Scalars['DateTime'];
  creator: IUser;
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ITopicByIdPayload = IStandardError | ITopicByIdResult;

export type ITopicByIdResult = {
  __typename: 'TopicByIdResult';
  result?: Maybe<ITopic>;
};

export type ITopicCreateInput = {
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type ITopicCreatePayload = IStandardError | ITopicCreateResult;

export type ITopicCreateResult = {
  __typename: 'TopicCreateResult';
  result: ITopic;
};

export type ITopicEditInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type ITopicEditPayload = IStandardError | ITopicEditResult;

export type ITopicEditResult = {
  __typename: 'TopicEditResult';
  result: ITopic;
};

export type ITopicsCreatedByUserInput = {
  userId: Scalars['ID'];
};

export type ITopicsCreatedByUserPayload =
  | IStandardError
  | ITopicsCreatedByUserResult;

export type ITopicsCreatedByUserResult = {
  __typename: 'TopicsCreatedByUserResult';
  result: Array<ITopic>;
};

export type IUser = {
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

export type IUserPayload = IStandardError | IUserResult;

export type IUserResult = {
  __typename: 'UserResult';
  result?: Maybe<IUser>;
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
export type IResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: IResolversTypes['StandardError'];
  ErrorType: IErrorType;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: IPaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PaginationResult: ResolverTypeWrapper<IPaginationResult>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StandardError: ResolverTypeWrapper<IStandardError>;
  Topic: ResolverTypeWrapper<ITopic>;
  TopicByIdPayload:
    | IResolversTypes['StandardError']
    | IResolversTypes['TopicByIdResult'];
  TopicByIdResult: ResolverTypeWrapper<ITopicByIdResult>;
  TopicCreateInput: ITopicCreateInput;
  TopicCreatePayload:
    | IResolversTypes['StandardError']
    | IResolversTypes['TopicCreateResult'];
  TopicCreateResult: ResolverTypeWrapper<ITopicCreateResult>;
  TopicEditInput: ITopicEditInput;
  TopicEditPayload:
    | IResolversTypes['StandardError']
    | IResolversTypes['TopicEditResult'];
  TopicEditResult: ResolverTypeWrapper<ITopicEditResult>;
  TopicsCreatedByUserInput: ITopicsCreatedByUserInput;
  TopicsCreatedByUserPayload:
    | IResolversTypes['StandardError']
    | IResolversTypes['TopicsCreatedByUserResult'];
  TopicsCreatedByUserResult: ResolverTypeWrapper<ITopicsCreatedByUserResult>;
  User: ResolverTypeWrapper<IUser>;
  UserPayload: IResolversTypes['StandardError'] | IResolversTypes['UserResult'];
  UserResult: ResolverTypeWrapper<IUserResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Error: IResolversParentTypes['StandardError'];
  Mutation: {};
  PaginationInput: IPaginationInput;
  Int: Scalars['Int'];
  PaginationResult: IPaginationResult;
  Query: {};
  ID: Scalars['ID'];
  String: Scalars['String'];
  StandardError: IStandardError;
  Topic: ITopic;
  TopicByIdPayload:
    | IResolversParentTypes['StandardError']
    | IResolversParentTypes['TopicByIdResult'];
  TopicByIdResult: ITopicByIdResult;
  TopicCreateInput: ITopicCreateInput;
  TopicCreatePayload:
    | IResolversParentTypes['StandardError']
    | IResolversParentTypes['TopicCreateResult'];
  TopicCreateResult: ITopicCreateResult;
  TopicEditInput: ITopicEditInput;
  TopicEditPayload:
    | IResolversParentTypes['StandardError']
    | IResolversParentTypes['TopicEditResult'];
  TopicEditResult: ITopicEditResult;
  TopicsCreatedByUserInput: ITopicsCreatedByUserInput;
  TopicsCreatedByUserPayload:
    | IResolversParentTypes['StandardError']
    | IResolversParentTypes['TopicsCreatedByUserResult'];
  TopicsCreatedByUserResult: ITopicsCreatedByUserResult;
  User: IUser;
  UserPayload:
    | IResolversParentTypes['StandardError']
    | IResolversParentTypes['UserResult'];
  UserResult: IUserResult;
  Boolean: Scalars['Boolean'];
};

export interface IDateScalarConfig
  extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date';
}

export interface IDateTimeScalarConfig
  extends GraphQLScalarTypeConfig<IResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IErrorResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Error'] = IResolversParentTypes['Error']
> = {
  __resolveType: TypeResolveFn<'StandardError', ParentType, ContextType>;
  error?: Resolver<IResolversTypes['ErrorType'], ParentType, ContextType>;
};

export type IMutationResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']
> = {
  topicCreate?: Resolver<
    IResolversTypes['TopicCreatePayload'],
    ParentType,
    ContextType,
    RequireFields<IMutationTopicCreateArgs, 'input'>
  >;
  topicEdit?: Resolver<
    IResolversTypes['TopicEditPayload'],
    ParentType,
    ContextType,
    RequireFields<IMutationTopicEditArgs, 'input'>
  >;
};

export type IPaginationResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['PaginationResult'] = IResolversParentTypes['PaginationResult']
> = {
  currentPage?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  recordsPerPage?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  totalPageCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQueryResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']
> = {
  me?: Resolver<IResolversTypes['UserPayload'], ParentType, ContextType>;
  topicById?: Resolver<
    IResolversTypes['TopicByIdPayload'],
    ParentType,
    ContextType,
    RequireFields<IQueryTopicByIdArgs, 'id'>
  >;
  topicsCreatedByUser?: Resolver<
    IResolversTypes['TopicsCreatedByUserPayload'],
    ParentType,
    ContextType,
    RequireFields<IQueryTopicsCreatedByUserArgs, 'input'>
  >;
  userByAccountName?: Resolver<
    IResolversTypes['UserPayload'],
    ParentType,
    ContextType,
    RequireFields<IQueryUserByAccountNameArgs, 'accountName'>
  >;
};

export type IStandardErrorResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['StandardError'] = IResolversParentTypes['StandardError']
> = {
  error?: Resolver<IResolversTypes['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITopicResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Topic'] = IResolversParentTypes['Topic']
> = {
  createdAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<IResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITopicByIdPayloadResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicByIdPayload'] = IResolversParentTypes['TopicByIdPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicByIdResult',
    ParentType,
    ContextType
  >;
};

export type ITopicByIdResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicByIdResult'] = IResolversParentTypes['TopicByIdResult']
> = {
  result?: Resolver<Maybe<IResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITopicCreatePayloadResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicCreatePayload'] = IResolversParentTypes['TopicCreatePayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicCreateResult',
    ParentType,
    ContextType
  >;
};

export type ITopicCreateResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicCreateResult'] = IResolversParentTypes['TopicCreateResult']
> = {
  result?: Resolver<IResolversTypes['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITopicEditPayloadResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicEditPayload'] = IResolversParentTypes['TopicEditPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicEditResult',
    ParentType,
    ContextType
  >;
};

export type ITopicEditResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicEditResult'] = IResolversParentTypes['TopicEditResult']
> = {
  result?: Resolver<IResolversTypes['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITopicsCreatedByUserPayloadResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicsCreatedByUserPayload'] = IResolversParentTypes['TopicsCreatedByUserPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'TopicsCreatedByUserResult',
    ParentType,
    ContextType
  >;
};

export type ITopicsCreatedByUserResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['TopicsCreatedByUserResult'] = IResolversParentTypes['TopicsCreatedByUserResult']
> = {
  result?: Resolver<Array<IResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']
> = {
  accountGitHub?: Resolver<
    Maybe<IResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  accountLinkedIn?: Resolver<
    Maybe<IResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  accountName?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  accountTwitter?: Resolver<
    Maybe<IResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  accountWebsite?: Resolver<
    Maybe<IResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  avatar?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserPayloadResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['UserPayload'] = IResolversParentTypes['UserPayload']
> = {
  __resolveType: TypeResolveFn<
    'StandardError' | 'UserResult',
    ParentType,
    ContextType
  >;
};

export type IUserResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['UserResult'] = IResolversParentTypes['UserResult']
> = {
  result?: Resolver<Maybe<IResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Error?: IErrorResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  PaginationResult?: IPaginationResultResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  StandardError?: IStandardErrorResolvers<ContextType>;
  Topic?: ITopicResolvers<ContextType>;
  TopicByIdPayload?: ITopicByIdPayloadResolvers<ContextType>;
  TopicByIdResult?: ITopicByIdResultResolvers<ContextType>;
  TopicCreatePayload?: ITopicCreatePayloadResolvers<ContextType>;
  TopicCreateResult?: ITopicCreateResultResolvers<ContextType>;
  TopicEditPayload?: ITopicEditPayloadResolvers<ContextType>;
  TopicEditResult?: ITopicEditResultResolvers<ContextType>;
  TopicsCreatedByUserPayload?: ITopicsCreatedByUserPayloadResolvers<ContextType>;
  TopicsCreatedByUserResult?: ITopicsCreatedByUserResultResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
  UserPayload?: IUserPayloadResolvers<ContextType>;
  UserResult?: IUserResultResolvers<ContextType>;
};
