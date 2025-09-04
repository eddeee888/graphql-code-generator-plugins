import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { UserMapper } from './user/user.graphqls.mappers';
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
  BigInt: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  SomeOtherScalars: { input: any; output: any };
  WithInputOutput: { input: Date; output: string };
};

export enum I_CURRENCY {
  aud = 'AUD',
  usd = 'USD',
}

export type I_ERROR = {
  error: I_ERRORTYPE;
};

export enum I_ERRORTYPE {
  forbidden_error = 'FORBIDDEN_ERROR',
  input_validation_error = 'INPUT_VALIDATION_ERROR',
  not_found = 'NOT_FOUND',
  unexpected_error = 'UNEXPECTED_ERROR',
}

export type I_MUTATION = {
  __typename?: 'Mutation';
  topicCreate: I_TOPICCREATEPAYLOAD;
  topicEdit: I_TOPICEDITPAYLOAD;
};

export type I_MUTATIONTOPICCREATEARGS = {
  input: I_TOPICCREATEINPUT;
};

export type I_MUTATIONTOPICEDITARGS = {
  input: I_TOPICEDITINPUT;
};

export type I_PAGINATIONINPUT = {
  page?: InputMaybe<Scalars['Int']['input']>;
  recordsPerPage?: InputMaybe<Scalars['Int']['input']>;
};

export type I_PAGINATIONRESULT = {
  __typename?: 'PaginationResult';
  currentPage: Scalars['Int']['output'];
  recordsPerPage: Scalars['Int']['output'];
  totalPageCount: Scalars['Int']['output'];
};

export type I_PROFILE = {
  __typename?: 'Profile';
  id: Scalars['ID']['output'];
  user: I_USER;
};

export type I_QUERY = {
  __typename?: 'Query';
  me: I_USERPAYLOAD;
  topicById: I_TOPICBYIDPAYLOAD;
  topicsCreatedByUser: I_TOPICSCREATEDBYUSERPAYLOAD;
  userByAccountName: I_USERPAYLOAD;
};

export type I_QUERYTOPICBYIDARGS = {
  id: Scalars['ID']['input'];
};

export type I_QUERYTOPICSCREATEDBYUSERARGS = {
  input: I_TOPICSCREATEDBYUSERINPUT;
};

export type I_QUERYUSERBYACCOUNTNAMEARGS = {
  accountName: Scalars['String']['input'];
};

export type I_STANDARDERROR = I_ERROR & {
  __typename?: 'StandardError';
  error: I_ERRORTYPE;
};

export type I_SUBSCRIPTION = {
  __typename?: 'Subscription';
  profileChanges: I_PROFILE;
};

export type I_TOPIC = {
  __typename?: 'Topic';
  createdAt: Scalars['DateTime']['output'];
  creator: I_USER;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type I_TOPICBYIDPAYLOAD = I_STANDARDERROR | I_TOPICBYIDRESULT;

export type I_TOPICBYIDRESULT = {
  __typename?: 'TopicByIdResult';
  result?: Maybe<I_TOPIC>;
};

export type I_TOPICCREATEINPUT = {
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type I_TOPICCREATEPAYLOAD = I_STANDARDERROR | I_TOPICCREATERESULT;

export type I_TOPICCREATERESULT = {
  __typename?: 'TopicCreateResult';
  result: I_TOPIC;
};

export type I_TOPICEDITINPUT = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type I_TOPICEDITPAYLOAD = I_STANDARDERROR | I_TOPICEDITRESULT;

export type I_TOPICEDITRESULT = {
  __typename?: 'TopicEditResult';
  result: I_TOPIC;
};

export type I_TOPICSCREATEDBYUSERINPUT = {
  userId: Scalars['ID']['input'];
};

export type I_TOPICSCREATEDBYUSERPAYLOAD =
  | I_STANDARDERROR
  | I_TOPICSCREATEDBYUSERRESULT;

export type I_TOPICSCREATEDBYUSERRESULT = {
  __typename?: 'TopicsCreatedByUserResult';
  result: Array<I_TOPIC>;
};

export type I_USER = {
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

export type I_USERPAYLOAD = I_STANDARDERROR | I_USERRESULT;

export type I_USERRESULT = {
  __typename?: 'UserResult';
  result?: Maybe<I_USER>;
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

/** Mapping of union types */
export type I_RESOLVERSUNIONTYPES<_RefType extends Record<string, unknown>> = {
  TopicByIdPayload:
    | (Omit<I_STANDARDERROR, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'StandardError';
      })
    | (Omit<I_TOPICBYIDRESULT, 'result'> & {
        result?: Maybe<_RefType['Topic']>;
      } & { __typename: 'TopicByIdResult' });
  TopicCreatePayload:
    | (Omit<I_STANDARDERROR, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'StandardError';
      })
    | (Omit<I_TOPICCREATERESULT, 'result'> & { result: _RefType['Topic'] } & {
        __typename: 'TopicCreateResult';
      });
  TopicEditPayload:
    | (Omit<I_STANDARDERROR, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'StandardError';
      })
    | (Omit<I_TOPICEDITRESULT, 'result'> & { result: _RefType['Topic'] } & {
        __typename: 'TopicEditResult';
      });
  TopicsCreatedByUserPayload:
    | (Omit<I_STANDARDERROR, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'StandardError';
      })
    | (Omit<I_TOPICSCREATEDBYUSERRESULT, 'result'> & {
        result: Array<_RefType['Topic']>;
      } & { __typename: 'TopicsCreatedByUserResult' });
  UserPayload:
    | (Omit<I_STANDARDERROR, 'error'> & { error: _RefType['ErrorType'] } & {
        __typename: 'StandardError';
      })
    | (Omit<I_USERRESULT, 'result'> & { result?: Maybe<_RefType['User']> } & {
        __typename: 'UserResult';
      });
};

/** Mapping of interface types */
export type I_RESOLVERSINTERFACETYPES<
  _RefType extends Record<string, unknown>
> = {
  Error: Omit<I_STANDARDERROR, 'error'> & { error: _RefType['ErrorType'] } & {
    __typename: 'StandardError';
  };
};

/** Mapping between all available schema types and the resolvers types */
export type I_RESOLVERSTYPES = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Currency: ResolverTypeWrapper<'USD' | 'AUD'>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Error: ResolverTypeWrapper<
    I_RESOLVERSINTERFACETYPES<I_RESOLVERSTYPES>['Error']
  >;
  ErrorType: ResolverTypeWrapper<
    | 'NOT_FOUND'
    | 'INPUT_VALIDATION_ERROR'
    | 'FORBIDDEN_ERROR'
    | 'UNEXPECTED_ERROR'
  >;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  PaginationInput: I_PAGINATIONINPUT;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PaginationResult: ResolverTypeWrapper<I_PAGINATIONRESULT>;
  Profile: ResolverTypeWrapper<
    Omit<I_PROFILE, 'user'> & { user: I_RESOLVERSTYPES['User'] }
  >;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SomeOtherScalars: ResolverTypeWrapper<Scalars['SomeOtherScalars']['output']>;
  StandardError: ResolverTypeWrapper<
    Omit<I_STANDARDERROR, 'error'> & { error: I_RESOLVERSTYPES['ErrorType'] }
  >;
  Subscription: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Topic: ResolverTypeWrapper<
    Omit<I_TOPIC, 'creator'> & { creator: I_RESOLVERSTYPES['User'] }
  >;
  TopicByIdPayload: ResolverTypeWrapper<
    I_RESOLVERSUNIONTYPES<I_RESOLVERSTYPES>['TopicByIdPayload']
  >;
  TopicByIdResult: ResolverTypeWrapper<
    Omit<I_TOPICBYIDRESULT, 'result'> & {
      result?: Maybe<I_RESOLVERSTYPES['Topic']>;
    }
  >;
  TopicCreateInput: I_TOPICCREATEINPUT;
  TopicCreatePayload: ResolverTypeWrapper<
    I_RESOLVERSUNIONTYPES<I_RESOLVERSTYPES>['TopicCreatePayload']
  >;
  TopicCreateResult: ResolverTypeWrapper<
    Omit<I_TOPICCREATERESULT, 'result'> & { result: I_RESOLVERSTYPES['Topic'] }
  >;
  TopicEditInput: I_TOPICEDITINPUT;
  TopicEditPayload: ResolverTypeWrapper<
    I_RESOLVERSUNIONTYPES<I_RESOLVERSTYPES>['TopicEditPayload']
  >;
  TopicEditResult: ResolverTypeWrapper<
    Omit<I_TOPICEDITRESULT, 'result'> & { result: I_RESOLVERSTYPES['Topic'] }
  >;
  TopicsCreatedByUserInput: I_TOPICSCREATEDBYUSERINPUT;
  TopicsCreatedByUserPayload: ResolverTypeWrapper<
    I_RESOLVERSUNIONTYPES<I_RESOLVERSTYPES>['TopicsCreatedByUserPayload']
  >;
  TopicsCreatedByUserResult: ResolverTypeWrapper<
    Omit<I_TOPICSCREATEDBYUSERRESULT, 'result'> & {
      result: Array<I_RESOLVERSTYPES['Topic']>;
    }
  >;
  User: ResolverTypeWrapper<UserMapper>;
  UserPayload: ResolverTypeWrapper<
    I_RESOLVERSUNIONTYPES<I_RESOLVERSTYPES>['UserPayload']
  >;
  UserResult: ResolverTypeWrapper<
    Omit<I_USERRESULT, 'result'> & { result?: Maybe<I_RESOLVERSTYPES['User']> }
  >;
  WithInputOutput: ResolverTypeWrapper<Scalars['WithInputOutput']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type I_RESOLVERSPARENTTYPES = {
  BigInt: Scalars['BigInt']['output'];
  DateTime: Scalars['DateTime']['output'];
  Error: I_RESOLVERSINTERFACETYPES<I_RESOLVERSPARENTTYPES>['Error'];
  Mutation: Record<PropertyKey, never>;
  PaginationInput: I_PAGINATIONINPUT;
  Int: Scalars['Int']['output'];
  PaginationResult: I_PAGINATIONRESULT;
  Profile: Omit<I_PROFILE, 'user'> & { user: I_RESOLVERSPARENTTYPES['User'] };
  ID: Scalars['ID']['output'];
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  SomeOtherScalars: Scalars['SomeOtherScalars']['output'];
  StandardError: I_STANDARDERROR;
  Subscription: Record<PropertyKey, never>;
  Topic: Omit<I_TOPIC, 'creator'> & { creator: I_RESOLVERSPARENTTYPES['User'] };
  TopicByIdPayload: I_RESOLVERSUNIONTYPES<I_RESOLVERSPARENTTYPES>['TopicByIdPayload'];
  TopicByIdResult: Omit<I_TOPICBYIDRESULT, 'result'> & {
    result?: Maybe<I_RESOLVERSPARENTTYPES['Topic']>;
  };
  TopicCreateInput: I_TOPICCREATEINPUT;
  TopicCreatePayload: I_RESOLVERSUNIONTYPES<I_RESOLVERSPARENTTYPES>['TopicCreatePayload'];
  TopicCreateResult: Omit<I_TOPICCREATERESULT, 'result'> & {
    result: I_RESOLVERSPARENTTYPES['Topic'];
  };
  TopicEditInput: I_TOPICEDITINPUT;
  TopicEditPayload: I_RESOLVERSUNIONTYPES<I_RESOLVERSPARENTTYPES>['TopicEditPayload'];
  TopicEditResult: Omit<I_TOPICEDITRESULT, 'result'> & {
    result: I_RESOLVERSPARENTTYPES['Topic'];
  };
  TopicsCreatedByUserInput: I_TOPICSCREATEDBYUSERINPUT;
  TopicsCreatedByUserPayload: I_RESOLVERSUNIONTYPES<I_RESOLVERSPARENTTYPES>['TopicsCreatedByUserPayload'];
  TopicsCreatedByUserResult: Omit<I_TOPICSCREATEDBYUSERRESULT, 'result'> & {
    result: Array<I_RESOLVERSPARENTTYPES['Topic']>;
  };
  User: UserMapper;
  UserPayload: I_RESOLVERSUNIONTYPES<I_RESOLVERSPARENTTYPES>['UserPayload'];
  UserResult: Omit<I_USERRESULT, 'result'> & {
    result?: Maybe<I_RESOLVERSPARENTTYPES['User']>;
  };
  WithInputOutput: Scalars['WithInputOutput']['output'];
  Boolean: Scalars['Boolean']['output'];
};

export interface I_BIGINTSCALARCONFIG
  extends GraphQLScalarTypeConfig<I_RESOLVERSTYPES['BigInt'], any> {
  name: 'BigInt';
}

export type I_CURRENCYRESOLVERS = EnumResolverSignature<
  { AUD?: any; USD?: any },
  I_RESOLVERSTYPES['Currency']
>;

export interface I_DATETIMESCALARCONFIG
  extends GraphQLScalarTypeConfig<I_RESOLVERSTYPES['DateTime'], any> {
  name: 'DateTime';
}

export type I_ERRORRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['Error'] = I_RESOLVERSPARENTTYPES['Error']
> = {
  __resolveType?: TypeResolveFn<'StandardError', ParentType, ContextType>;
};

export type I_ERRORTYPERESOLVERS = EnumResolverSignature<
  {
    FORBIDDEN_ERROR?: any;
    INPUT_VALIDATION_ERROR?: any;
    NOT_FOUND?: any;
    UNEXPECTED_ERROR?: any;
  },
  I_RESOLVERSTYPES['ErrorType']
>;

export type I_MUTATIONRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['Mutation'] = I_RESOLVERSPARENTTYPES['Mutation']
> = {
  topicCreate?: Resolver<
    I_RESOLVERSTYPES['TopicCreatePayload'],
    ParentType,
    ContextType,
    RequireFields<I_MUTATIONTOPICCREATEARGS, 'input'>
  >;
  topicEdit?: Resolver<
    I_RESOLVERSTYPES['TopicEditPayload'],
    ParentType,
    ContextType,
    RequireFields<I_MUTATIONTOPICEDITARGS, 'input'>
  >;
};

export type I_PAGINATIONRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['PaginationResult'] = I_RESOLVERSPARENTTYPES['PaginationResult']
> = {
  currentPage?: Resolver<I_RESOLVERSTYPES['Int'], ParentType, ContextType>;
  recordsPerPage?: Resolver<I_RESOLVERSTYPES['Int'], ParentType, ContextType>;
  totalPageCount?: Resolver<I_RESOLVERSTYPES['Int'], ParentType, ContextType>;
};

export type I_PROFILERESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['Profile'] = I_RESOLVERSPARENTTYPES['Profile']
> = {
  id?: Resolver<I_RESOLVERSTYPES['ID'], ParentType, ContextType>;
  user?: Resolver<I_RESOLVERSTYPES['User'], ParentType, ContextType>;
};

export type I_QUERYRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['Query'] = I_RESOLVERSPARENTTYPES['Query']
> = {
  me?: Resolver<I_RESOLVERSTYPES['UserPayload'], ParentType, ContextType>;
  topicById?: Resolver<
    I_RESOLVERSTYPES['TopicByIdPayload'],
    ParentType,
    ContextType,
    RequireFields<I_QUERYTOPICBYIDARGS, 'id'>
  >;
  topicsCreatedByUser?: Resolver<
    I_RESOLVERSTYPES['TopicsCreatedByUserPayload'],
    ParentType,
    ContextType,
    RequireFields<I_QUERYTOPICSCREATEDBYUSERARGS, 'input'>
  >;
  userByAccountName?: Resolver<
    I_RESOLVERSTYPES['UserPayload'],
    ParentType,
    ContextType,
    RequireFields<I_QUERYUSERBYACCOUNTNAMEARGS, 'accountName'>
  >;
};

export interface I_SOMEOTHERSCALARSSCALARCONFIG
  extends GraphQLScalarTypeConfig<I_RESOLVERSTYPES['SomeOtherScalars'], any> {
  name: 'SomeOtherScalars';
}

export type I_STANDARDERRORRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['StandardError'] = I_RESOLVERSPARENTTYPES['StandardError']
> = {
  error?: Resolver<I_RESOLVERSTYPES['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I_SUBSCRIPTIONRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['Subscription'] = I_RESOLVERSPARENTTYPES['Subscription']
> = {
  profileChanges?: SubscriptionResolver<
    I_RESOLVERSTYPES['Profile'],
    'profileChanges',
    ParentType,
    ContextType
  >;
};

export type I_TOPICRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['Topic'] = I_RESOLVERSPARENTTYPES['Topic']
> = {
  createdAt?: Resolver<I_RESOLVERSTYPES['DateTime'], ParentType, ContextType>;
  creator?: Resolver<I_RESOLVERSTYPES['User'], ParentType, ContextType>;
  id?: Resolver<I_RESOLVERSTYPES['ID'], ParentType, ContextType>;
  name?: Resolver<I_RESOLVERSTYPES['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<I_RESOLVERSTYPES['String']>, ParentType, ContextType>;
};

export type I_TOPICBYIDPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicByIdPayload'] = I_RESOLVERSPARENTTYPES['TopicByIdPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicByIdResult',
    ParentType,
    ContextType
  >;
};

export type I_TOPICBYIDRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicByIdResult'] = I_RESOLVERSPARENTTYPES['TopicByIdResult']
> = {
  result?: Resolver<Maybe<I_RESOLVERSTYPES['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I_TOPICCREATEPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicCreatePayload'] = I_RESOLVERSPARENTTYPES['TopicCreatePayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicCreateResult',
    ParentType,
    ContextType
  >;
};

export type I_TOPICCREATERESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicCreateResult'] = I_RESOLVERSPARENTTYPES['TopicCreateResult']
> = {
  result?: Resolver<I_RESOLVERSTYPES['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I_TOPICEDITPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicEditPayload'] = I_RESOLVERSPARENTTYPES['TopicEditPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicEditResult',
    ParentType,
    ContextType
  >;
};

export type I_TOPICEDITRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicEditResult'] = I_RESOLVERSPARENTTYPES['TopicEditResult']
> = {
  result?: Resolver<I_RESOLVERSTYPES['Topic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I_TOPICSCREATEDBYUSERPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicsCreatedByUserPayload'] = I_RESOLVERSPARENTTYPES['TopicsCreatedByUserPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'TopicsCreatedByUserResult',
    ParentType,
    ContextType
  >;
};

export type I_TOPICSCREATEDBYUSERRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['TopicsCreatedByUserResult'] = I_RESOLVERSPARENTTYPES['TopicsCreatedByUserResult']
> = {
  result?: Resolver<Array<I_RESOLVERSTYPES['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I_USERRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['User'] = I_RESOLVERSPARENTTYPES['User']
> = {
  accountGitHub?: Resolver<
    Maybe<I_RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  accountLinkedIn?: Resolver<
    Maybe<I_RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  accountName?: Resolver<I_RESOLVERSTYPES['String'], ParentType, ContextType>;
  accountTwitter?: Resolver<
    Maybe<I_RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  accountWebsite?: Resolver<
    Maybe<I_RESOLVERSTYPES['String']>,
    ParentType,
    ContextType
  >;
  avatar?: Resolver<Maybe<I_RESOLVERSTYPES['String']>, ParentType, ContextType>;
  id?: Resolver<I_RESOLVERSTYPES['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<I_RESOLVERSTYPES['String']>, ParentType, ContextType>;
};

export type I_USERPAYLOADRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['UserPayload'] = I_RESOLVERSPARENTTYPES['UserPayload']
> = {
  __resolveType?: TypeResolveFn<
    'StandardError' | 'UserResult',
    ParentType,
    ContextType
  >;
};

export type I_USERRESULTRESOLVERS<
  ContextType = ResolverContext,
  ParentType extends I_RESOLVERSPARENTTYPES['UserResult'] = I_RESOLVERSPARENTTYPES['UserResult']
> = {
  result?: Resolver<Maybe<I_RESOLVERSTYPES['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface I_WITHINPUTOUTPUTSCALARCONFIG
  extends GraphQLScalarTypeConfig<I_RESOLVERSTYPES['WithInputOutput'], any> {
  name: 'WithInputOutput';
}

export type I_RESOLVERS<ContextType = ResolverContext> = {
  BigInt?: GraphQLScalarType;
  Currency?: I_CURRENCYRESOLVERS;
  DateTime?: GraphQLScalarType;
  Error?: I_ERRORRESOLVERS<ContextType>;
  ErrorType?: I_ERRORTYPERESOLVERS;
  Mutation?: I_MUTATIONRESOLVERS<ContextType>;
  PaginationResult?: I_PAGINATIONRESULTRESOLVERS<ContextType>;
  Profile?: I_PROFILERESOLVERS<ContextType>;
  Query?: I_QUERYRESOLVERS<ContextType>;
  SomeOtherScalars?: GraphQLScalarType;
  StandardError?: I_STANDARDERRORRESOLVERS<ContextType>;
  Subscription?: I_SUBSCRIPTIONRESOLVERS<ContextType>;
  Topic?: I_TOPICRESOLVERS<ContextType>;
  TopicByIdPayload?: I_TOPICBYIDPAYLOADRESOLVERS<ContextType>;
  TopicByIdResult?: I_TOPICBYIDRESULTRESOLVERS<ContextType>;
  TopicCreatePayload?: I_TOPICCREATEPAYLOADRESOLVERS<ContextType>;
  TopicCreateResult?: I_TOPICCREATERESULTRESOLVERS<ContextType>;
  TopicEditPayload?: I_TOPICEDITPAYLOADRESOLVERS<ContextType>;
  TopicEditResult?: I_TOPICEDITRESULTRESOLVERS<ContextType>;
  TopicsCreatedByUserPayload?: I_TOPICSCREATEDBYUSERPAYLOADRESOLVERS<ContextType>;
  TopicsCreatedByUserResult?: I_TOPICSCREATEDBYUSERRESULTRESOLVERS<ContextType>;
  User?: I_USERRESOLVERS<ContextType>;
  UserPayload?: I_USERPAYLOADRESOLVERS<ContextType>;
  UserResult?: I_USERRESULTRESOLVERS<ContextType>;
  WithInputOutput?: GraphQLScalarType;
};
