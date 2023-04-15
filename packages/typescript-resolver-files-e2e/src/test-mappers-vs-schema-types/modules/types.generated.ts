import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import {
  AccountMapper,
  CountryMapper,
  ProfileMapper,
  ProfileMetaMapper,
} from './user/profile.mappers';
import { UserMapper } from './user/user.graphqls.mappers';
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date | string;
};

export type Account = {
  __typename: 'Account';
  id: Scalars['ID'];
  isSubscribed: Scalars['Boolean'];
};

export type Country = {
  __typename: 'Country';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Error = {
  __typename: 'Error';
  message: Scalars['String'];
};

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

export type Profile = {
  __typename: 'Profile';
  id: Scalars['ID'];
  user: User;
};

export type ProfileMeta = {
  __typename: 'ProfileMeta';
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
  score: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  account: Account;
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

export type TopicByIdPayload = Error | TopicByIdResult;

export type TopicByIdResult = {
  __typename: 'TopicByIdResult';
  result?: Maybe<Topic>;
};

export type TopicCreateInput = {
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type TopicCreatePayload = Error | TopicCreateResult;

export type TopicCreateResult = {
  __typename: 'TopicCreateResult';
  result: Topic;
};

export type TopicEditInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type TopicEditPayload = Error | TopicEditResult;

export type TopicEditResult = {
  __typename: 'TopicEditResult';
  result: Topic;
};

export type TopicsCreatedByUserInput = {
  userId: Scalars['ID'];
};

export type TopicsCreatedByUserPayload = Error | TopicsCreatedByUserResult;

export type TopicsCreatedByUserResult = {
  __typename: 'TopicsCreatedByUserResult';
  result: Array<Topic>;
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

export type UserPayload = Error | UserResult;

export type UserResult = {
  __typename: 'UserResult';
  result?: Maybe<User>;
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
  TopicByIdPayload:
    | Error
    | (Omit<TopicByIdResult, 'result'> & {
        result?: Maybe<ResolversTypes['Topic']>;
      });
  TopicCreatePayload:
    | Error
    | (Omit<TopicCreateResult, 'result'> & { result: ResolversTypes['Topic'] });
  TopicEditPayload:
    | Error
    | (Omit<TopicEditResult, 'result'> & { result: ResolversTypes['Topic'] });
  TopicsCreatedByUserPayload:
    | Error
    | (Omit<TopicsCreatedByUserResult, 'result'> & {
        result: Array<ResolversTypes['Topic']>;
      });
  UserPayload:
    | Error
    | (Omit<UserResult, 'result'> & { result?: Maybe<ResolversTypes['User']> });
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  TopicByIdPayload:
    | Error
    | (Omit<TopicByIdResult, 'result'> & {
        result?: Maybe<ResolversParentTypes['Topic']>;
      });
  TopicCreatePayload:
    | Error
    | (Omit<TopicCreateResult, 'result'> & {
        result: ResolversParentTypes['Topic'];
      });
  TopicEditPayload:
    | Error
    | (Omit<TopicEditResult, 'result'> & {
        result: ResolversParentTypes['Topic'];
      });
  TopicsCreatedByUserPayload:
    | Error
    | (Omit<TopicsCreatedByUserResult, 'result'> & {
        result: Array<ResolversParentTypes['Topic']>;
      });
  UserPayload:
    | Error
    | (Omit<UserResult, 'result'> & {
        result?: Maybe<ResolversParentTypes['User']>;
      });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<AccountMapper>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Country: ResolverTypeWrapper<CountryMapper>;
  String: ResolverTypeWrapper<Scalars['String']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Error: ResolverTypeWrapper<Error>;
  Mutation: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<ProfileMapper>;
  ProfileMeta: ResolverTypeWrapper<ProfileMetaMapper>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Topic: ResolverTypeWrapper<
    Omit<Topic, 'creator'> & { creator: ResolversTypes['User'] }
  >;
  TopicByIdPayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicByIdPayload']
  >;
  TopicByIdResult: ResolverTypeWrapper<
    Omit<TopicByIdResult, 'result'> & {
      result?: Maybe<ResolversTypes['Topic']>;
    }
  >;
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicCreatePayload']
  >;
  TopicCreateResult: ResolverTypeWrapper<
    Omit<TopicCreateResult, 'result'> & { result: ResolversTypes['Topic'] }
  >;
  TopicEditInput: TopicEditInput;
  TopicEditPayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicEditPayload']
  >;
  TopicEditResult: ResolverTypeWrapper<
    Omit<TopicEditResult, 'result'> & { result: ResolversTypes['Topic'] }
  >;
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload: ResolverTypeWrapper<
    ResolversUnionTypes['TopicsCreatedByUserPayload']
  >;
  TopicsCreatedByUserResult: ResolverTypeWrapper<
    Omit<TopicsCreatedByUserResult, 'result'> & {
      result: Array<ResolversTypes['Topic']>;
    }
  >;
  User: ResolverTypeWrapper<UserMapper>;
  UserPayload: ResolverTypeWrapper<ResolversUnionTypes['UserPayload']>;
  UserResult: ResolverTypeWrapper<
    Omit<UserResult, 'result'> & { result?: Maybe<ResolversTypes['User']> }
  >;
  UserRole: UserRole;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: AccountMapper;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  Country: CountryMapper;
  String: Scalars['String'];
  DateTime: Scalars['DateTime'];
  Error: Error;
  Mutation: {};
  Profile: ProfileMapper;
  ProfileMeta: ProfileMetaMapper;
  Query: {};
  Subscription: {};
  Topic: Omit<Topic, 'creator'> & { creator: ResolversParentTypes['User'] };
  TopicByIdPayload: ResolversUnionParentTypes['TopicByIdPayload'];
  TopicByIdResult: Omit<TopicByIdResult, 'result'> & {
    result?: Maybe<ResolversParentTypes['Topic']>;
  };
  TopicCreateInput: TopicCreateInput;
  TopicCreatePayload: ResolversUnionParentTypes['TopicCreatePayload'];
  TopicCreateResult: Omit<TopicCreateResult, 'result'> & {
    result: ResolversParentTypes['Topic'];
  };
  TopicEditInput: TopicEditInput;
  TopicEditPayload: ResolversUnionParentTypes['TopicEditPayload'];
  TopicEditResult: Omit<TopicEditResult, 'result'> & {
    result: ResolversParentTypes['Topic'];
  };
  TopicsCreatedByUserInput: TopicsCreatedByUserInput;
  TopicsCreatedByUserPayload: ResolversUnionParentTypes['TopicsCreatedByUserPayload'];
  TopicsCreatedByUserResult: Omit<TopicsCreatedByUserResult, 'result'> & {
    result: Array<ResolversParentTypes['Topic']>;
  };
  User: UserMapper;
  UserPayload: ResolversUnionParentTypes['UserPayload'];
  UserResult: Omit<UserResult, 'result'> & {
    result?: Maybe<ResolversParentTypes['User']>;
  };
};

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isSubscribed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileMetaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProfileMeta'] = ResolversParentTypes['ProfileMeta']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<
    'Error' | 'TopicByIdResult',
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
    'Error' | 'TopicCreateResult',
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
    'Error' | 'TopicEditResult',
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
    'Error' | 'TopicsCreatedByUserResult',
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

export type UserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']
> = {
  __resolveType: TypeResolveFn<'Error' | 'UserResult', ParentType, ContextType>;
};

export type UserResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']
> = {
  result?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileMeta?: ProfileMetaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
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
