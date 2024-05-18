import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { ResolverContext } from './customTypes';
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
  BigInt: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  SomeOtherScalars: { input: any; output: any };
  WithInputOutput: { input: Date; output: string };
};

export enum CURRENCY {
  aud = 'AUD',
  usd = 'USD',
}

export type ERROR = {
  error: ERRORTYPE;
};

export enum ERRORTYPE {
  forbidden_error = 'FORBIDDEN_ERROR',
  input_validation_error = 'INPUT_VALIDATION_ERROR',
  not_found = 'NOT_FOUND',
  unexpected_error = 'UNEXPECTED_ERROR',
}

export type MUTATION = {
  __typename?: 'Mutation';
  topicCreate: TOPICCREATEPAYLOAD;
  topicEdit: TOPICEDITPAYLOAD;
};

export type MUTATIONTOPICCREATEARGS = {
  input: TOPICCREATEINPUT;
};

export type MUTATIONTOPICEDITARGS = {
  input: TOPICEDITINPUT;
};

export type PAGINATIONINPUT = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type PAGINATIONRESULT = {
  __typename?: 'PaginationResult';
  currentPage: Scalars['Int']['output'];
  recordsPerPage: Scalars['Int']['output'];
  totalPageCount: Scalars['Int']['output'];
};

export type PROFILE = {
  __typename?: 'Profile';
  id: Scalars['ID']['output'];
  user: USER;
};

export type QUERY = {
  __typename?: 'Query';
  me: USERPAYLOAD;
  topicById: TOPICBYIDPAYLOAD;
  topicsCreatedByUser: TOPICSCREATEDBYUSERPAYLOAD;
  userByAccountName: USERPAYLOAD;
};

export type QUERYTOPICBYIDARGS = {
  id: Scalars['ID']['input'];
};

export type QUERYTOPICSCREATEDBYUSERARGS = {
  input: TOPICSCREATEDBYUSERINPUT;
};

export type QUERYUSERBYACCOUNTNAMEARGS = {
  accountName: Scalars['String']['input'];
};

export type STANDARDERROR = ERROR & {
  __typename?: 'StandardError';
  error: ERRORTYPE;
};

export type SUBSCRIPTION = {
  __typename?: 'Subscription';
  profileChanges: PROFILE;
};

export type TOPIC = {
  __typename?: 'Topic';
  createdAt: Scalars['DateTime']['output'];
  creator: USER;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type TOPICBYIDPAYLOAD = STANDARDERROR | TOPICBYIDRESULT;

export type TOPICBYIDRESULT = {
  __typename?: 'TopicByIdResult';
  result?: Maybe<TOPIC>;
};

export type TOPICCREATEINPUT = {
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TOPICCREATEPAYLOAD = STANDARDERROR | TOPICCREATERESULT;

export type TOPICCREATERESULT = {
  __typename?: 'TopicCreateResult';
  result: TOPIC;
};

export type TOPICEDITINPUT = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TOPICEDITPAYLOAD = STANDARDERROR | TOPICEDITRESULT;

export type TOPICEDITRESULT = {
  __typename?: 'TopicEditResult';
  result: TOPIC;
};

export type TOPICSCREATEDBYUSERINPUT = {
  userId: Scalars['ID']['input'];
};

export type TOPICSCREATEDBYUSERPAYLOAD =
  | STANDARDERROR
  | TOPICSCREATEDBYUSERRESULT;

export type TOPICSCREATEDBYUSERRESULT = {
  __typename?: 'TopicsCreatedByUserResult';
  result: Array<TOPIC>;
};

export type USER = {
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

export type USERPAYLOAD = STANDARDERROR | USERRESULT;

export type USERRESULT = {
  __typename?: 'UserResult';
  result?: Maybe<USER>;
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
export type RESOLVERSUNIONTYPES<_RefType extends Record<string, unknown>> = {
  TopicByIdPayload:
    | (STANDARDERROR & { __typename: 'StandardError' })
    | (TOPICBYIDRESULT & { __typename: 'TopicByIdResult' });
  TopicCreatePayload:
    | (STANDARDERROR & { __typename: 'StandardError' })
    | (TOPICCREATERESULT & { __typename: 'TopicCreateResult' });
  TopicEditPayload:
    | (STANDARDERROR & { __typename: 'StandardError' })
    | (TOPICEDITRESULT & { __typename: 'TopicEditResult' });
  TopicsCreatedByUserPayload:
    | (STANDARDERROR & { __typename: 'StandardError' })
    | (TOPICSCREATEDBYUSERRESULT & { __typename: 'TopicsCreatedByUserResult' });
  UserPayload:
    | (STANDARDERROR & { __typename: 'StandardError' })
    | (USERRESULT & { __typename: 'UserResult' });
};

/** Mapping of interface types */
export type RESOLVERSINTERFACETYPES<_RefType extends Record<string, unknown>> =
  {
    Error: STANDARDERROR & { __typename: 'StandardError' };
  };

/** Mapping between all available schema types and the resolvers types */
export type RESOLVERSTYPES = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Currency: CURRENCY;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Error: ResolverTypeWrapper<RESOLVERSINTERFACETYPES<RESOLVERSTYPES>['Error']>;
  ErrorType: ERRORTYPE;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: PAGINATIONINPUT;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PaginationResult: ResolverTypeWrapper<PAGINATIONRESULT>;
  Profile: ResolverTypeWrapper<PROFILE>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SomeOtherScalars: ResolverTypeWrapper<Scalars['SomeOtherScalars']['output']>;
  StandardError: ResolverTypeWrapper<STANDARDERROR>;
  Subscription: ResolverTypeWrapper<{}>;
  Topic: ResolverTypeWrapper<TOPIC>;
  TopicByIdPayload: ResolverTypeWrapper<
    RESOLVERSUNIONTYPES<RESOLVERSTYPES>['TopicByIdPayload']
  >;
  TopicByIdResult: ResolverTypeWrapper<TOPICBYIDRESULT>;
  TopicCreateInput: TOPICCREATEINPUT;
  TopicCreatePayload: ResolverTypeWrapper<
    RESOLVERSUNIONTYPES<RESOLVERSTYPES>['TopicCreatePayload']
  >;
  TopicCreateResult: ResolverTypeWrapper<TOPICCREATERESULT>;
  TopicEditInput: TOPICEDITINPUT;
  TopicEditPayload: ResolverTypeWrapper<
    RESOLVERSUNIONTYPES<RESOLVERSTYPES>['TopicEditPayload']
  >;
  TopicEditResult: ResolverTypeWrapper<TOPICEDITRESULT>;
  TopicsCreatedByUserInput: TOPICSCREATEDBYUSERINPUT;
  TopicsCreatedByUserPayload: ResolverTypeWrapper<
    RESOLVERSUNIONTYPES<RESOLVERSTYPES>['TopicsCreatedByUserPayload']
  >;
  TopicsCreatedByUserResult: ResolverTypeWrapper<TOPICSCREATEDBYUSERRESULT>;
  User: ResolverTypeWrapper<USER>;
  UserPayload: ResolverTypeWrapper<
    RESOLVERSUNIONTYPES<RESOLVERSTYPES>['UserPayload']
  >;
  UserResult: ResolverTypeWrapper<USERRESULT>;
  WithInputOutput: ResolverTypeWrapper<Scalars['WithInputOutput']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type RESOLVERSPARENTTYPES = {
  BigInt: Scalars['BigInt']['output'];
  DateTime: Scalars['DateTime']['output'];
  Error: RESOLVERSINTERFACETYPES<RESOLVERSPARENTTYPES>['Error'];
  Mutation: {};
  PaginationInput: PAGINATIONINPUT;
  Int: Scalars['Int']['output'];
  PaginationResult: PAGINATIONRESULT;
  Profile: PROFILE;
  ID: Scalars['ID']['output'];
  Query: {};
  String: Scalars['String']['output'];
  SomeOtherScalars: Scalars['SomeOtherScalars']['output'];
  StandardError: STANDARDERROR;
  Subscription: {};
  Topic: TOPIC;
  TopicByIdPayload: RESOLVERSUNIONTYPES<RESOLVERSPARENTTYPES>['TopicByIdPayload'];
  TopicByIdResult: TOPICBYIDRESULT;
  TopicCreateInput: TOPICCREATEINPUT;
  TopicCreatePayload: RESOLVERSUNIONTYPES<RESOLVERSPARENTTYPES>['TopicCreatePayload'];
  TopicCreateResult: TOPICCREATERESULT;
  TopicEditInput: TOPICEDITINPUT;
  TopicEditPayload: RESOLVERSUNIONTYPES<RESOLVERSPARENTTYPES>['TopicEditPayload'];
  TopicEditResult: TOPICEDITRESULT;
  TopicsCreatedByUserInput: TOPICSCREATEDBYUSERINPUT;
  TopicsCreatedByUserPayload: RESOLVERSUNIONTYPES<RESOLVERSPARENTTYPES>['TopicsCreatedByUserPayload'];
  TopicsCreatedByUserResult: TOPICSCREATEDBYUSERRESULT;
  User: USER;
  UserPayload: RESOLVERSUNIONTYPES<RESOLVERSPARENTTYPES>['UserPayload'];
  UserResult: USERRESULT;
  WithInputOutput: Scalars['WithInputOutput']['output'];
  Boolean: Scalars['Boolean']['output'];
};

export interface BIGINTSCALARCONFIG
  extends GraphQLScalarTypeConfig<RESOLVERSTYPES['BigInt'], any> {
  name: 'BigInt';
}

export interface DATETIMESCALARCONFIG
  extends GraphQLScalarTypeConfig<RESOLVERSTYPES['DateTime'], any> {
  name: 'DateTime';
}

export type ERRORRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['Error'] = RESOLVERSPARENTTYPES['Error']
> = {
  __resolveType?: TypeResolveFn<'StandardError', ParentType, ContextType>;
  error?: Resolver<RESOLVERSTYPES['ErrorType'], ParentType, ContextType>;
};

export type MUTATIONRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['Mutation'] = RESOLVERSPARENTTYPES['Mutation']
> = {
  topicCreate?: Resolver<
    RESOLVERSTYPES['TopicCreatePayload'],
    ParentType,
    ContextType,
    RequireFields<MUTATIONTOPICCREATEARGS, 'input'>
  >;
  topicEdit?: Resolver<
    RESOLVERSTYPES['TopicEditPayload'],
    ParentType,
    ContextType,
    RequireFields<MUTATIONTOPICEDITARGS, 'input'>
  >;
};

export type PAGINATIONRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['PaginationResult'] = RESOLVERSPARENTTYPES['PaginationResult']
> = {
  currentPage?: Resolver<RESOLVERSTYPES['Int'], ParentType, ContextType>;
  recordsPerPage?: Resolver<RESOLVERSTYPES['Int'], ParentType, ContextType>;
  totalPageCount?: Resolver<RESOLVERSTYPES['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PROFILERESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['Profile'] = RESOLVERSPARENTTYPES['Profile']
> = {
  id?: Resolver<RESOLVERSTYPES['ID'], ParentType, ContextType>;
  user?: Resolver<RESOLVERSTYPES['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QUERYRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['Query'] = RESOLVERSPARENTTYPES['Query']
> = {
  me?: Resolver<RESOLVERSTYPES['UserPayload'], ParentType, ContextType>;
  topicById?: Resolver<
    RESOLVERSTYPES['TopicByIdPayload'],
    ParentType,
    ContextType,
    RequireFields<QUERYTOPICBYIDARGS, 'id'>
  >;
  topicsCreatedByUser?: Resolver<
    RESOLVERSTYPES['TopicsCreatedByUserPayload'],
    ParentType,
    ContextType,
    RequireFields<QUERYTOPICSCREATEDBYUSERARGS, 'input'>
  >;
  userByAccountName?: Resolver<
    RESOLVERSTYPES['UserPayload'],
    ParentType,
    ContextType,
    RequireFields<QUERYUSERBYACCOUNTNAMEARGS, 'accountName'>
  >;
};

export interface SOMEOTHERSCALARSSCALARCONFIG
  extends GraphQLScalarTypeConfig<RESOLVERSTYPES['SomeOtherScalars'], any> {
  name: 'SomeOtherScalars';
}

export type STANDARDERRORRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['StandardError'] = RESOLVERSPARENTTYPES['StandardError']
> = {
  error?: Resolver<RESOLVERSTYPES['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SUBSCRIPTIONRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['Subscription'] = RESOLVERSPARENTTYPES['Subscription']
> = {
  profileChanges?: SubscriptionResolver<
    RESOLVERSTYPES['Profile'],
    'profileChanges',
    ParentType,
    ContextType
  >;
};

export type TOPICRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['Topic'] = RESOLVERSPARENTTYPES['Topic']
> = {
  createdAt?: Resolver<RESOLVERSTYPES['DateTime'], ParentType, ContextType>;
  creator?: Resolver<RESOLVERSTYPES['User'], ParentType, ContextType>;
  id?: Resolver<RESOLVERSTYPES['ID'], ParentType, ContextType>;
  name?: Resolver<RESOLVERSTYPES['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<RESOLVERSTYPES['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TOPICBYIDPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicByIdPayload'] = RESOLVERSPARENTTYPES['TopicByIdPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicByIdResult',
    ParentType,
    ContextType
  >;
};

export type TOPICBYIDRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicByIdResult'] = RESOLVERSPARENTTYPES['TopicByIdResult']
> = {
  result?: Resolver<Maybe<RESOLVERSTYPES['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TOPICCREATEPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicCreatePayload'] = RESOLVERSPARENTTYPES['TopicCreatePayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicCreateResult',
    ParentType,
    ContextType
  >;
};

export type TOPICCREATERESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicCreateResult'] = RESOLVERSPARENTTYPES['TopicCreateResult']
> = {
  result?: Resolver<RESOLVERSTYPES['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TOPICEDITPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicEditPayload'] = RESOLVERSPARENTTYPES['TopicEditPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicEditResult',
    ParentType,
    ContextType
  >;
};

export type TOPICEDITRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicEditResult'] = RESOLVERSPARENTTYPES['TopicEditResult']
> = {
  result?: Resolver<RESOLVERSTYPES['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TOPICSCREATEDBYUSERPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicsCreatedByUserPayload'] = RESOLVERSPARENTTYPES['TopicsCreatedByUserPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicsCreatedByUserResult',
    ParentType,
    ContextType
  >;
};

export type TOPICSCREATEDBYUSERRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['TopicsCreatedByUserResult'] = RESOLVERSPARENTTYPES['TopicsCreatedByUserResult']
> = {
  result?: Resolver<Array<RESOLVERSTYPES['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type USERRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['User'] = RESOLVERSPARENTTYPES['User']
> = {
  accountGitHub?: Resolver<
    Maybe<RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  accountLinkedIn?: Resolver<
    Maybe<RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  accountName?: Resolver<RESOLVERSTYPES['String'], ParentType, ContextType>;
  accountTwitter?: Resolver<
    Maybe<RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  accountWebsite?: Resolver<
    Maybe<RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  avatar?: Resolver<Maybe<RESOLVERSTYPES['String']>, ParentType, ContextType>;
  id?: Resolver<RESOLVERSTYPES['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<RESOLVERSTYPES['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type USERPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['UserPayload'] = RESOLVERSPARENTTYPES['UserPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'UserResult',
    ParentType,
    ContextType
  >;
};

export type USERRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends RESOLVERSPARENTTYPES['UserResult'] = RESOLVERSPARENTTYPES['UserResult']
> = {
  result?: Resolver<Maybe<RESOLVERSTYPES['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface WITHINPUTOUTPUTSCALARCONFIG
  extends GraphQLScalarTypeConfig<RESOLVERSTYPES['WithInputOutput'], any> {
  name: 'WithInputOutput';
}

export type RESOLVERS<ContextType = ResolverContext> = {
  BigInt?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Error?: ERRORRESOLVERS<ContextType>;
  Mutation?: MUTATIONRESOLVERS<ContextType>;
  PaginationResult?: PAGINATIONRESULTRESOLVERS<ContextType>;
  Profile?: PROFILERESOLVERS<ContextType>;
  Query?: QUERYRESOLVERS<ContextType>;
  SomeOtherScalars?: GraphQLScalarType;
  StandardError?: STANDARDERRORRESOLVERS<ContextType>;
  Subscription?: SUBSCRIPTIONRESOLVERS<ContextType>;
  Topic?: TOPICRESOLVERS<ContextType>;
  TopicByIdPayload?: TOPICBYIDPAYLOADRESOLVERS<ContextType>;
  TopicByIdResult?: TOPICBYIDRESULTRESOLVERS<ContextType>;
  TopicCreatePayload?: TOPICCREATEPAYLOADRESOLVERS<ContextType>;
  TopicCreateResult?: TOPICCREATERESULTRESOLVERS<ContextType>;
  TopicEditPayload?: TOPICEDITPAYLOADRESOLVERS<ContextType>;
  TopicEditResult?: TOPICEDITRESULTRESOLVERS<ContextType>;
  TopicsCreatedByUserPayload?: TOPICSCREATEDBYUSERPAYLOADRESOLVERS<ContextType>;
  TopicsCreatedByUserResult?: TOPICSCREATEDBYUSERRESULTRESOLVERS<ContextType>;
  User?: USERRESOLVERS<ContextType>;
  UserPayload?: USERPAYLOADRESOLVERS<ContextType>;
  UserResult?: USERRESULTRESOLVERS<ContextType>;
  WithInputOutput?: GraphQLScalarType;
};
