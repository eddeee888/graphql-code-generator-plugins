/* PREPENDED */
import { GraphQLResolveInfo } from 'graphql';
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
};

export type Mutation = {
  __typename?: 'Mutation';
  createSchoolCourse: SchoolCourse;
};

export type Query = {
  __typename?: 'Query';
  school?: Maybe<School>;
  schools: Array<School>;
  student?: Maybe<Student>;
  teacher?: Maybe<Teacher>;
};

export type QueryschoolArgs = {
  id: Scalars['ID']['input'];
};

export type QuerystudentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryteacherArgs = {
  id: Scalars['ID']['input'];
};

export type School = {
  __typename?: 'School';
  courses: Array<SchoolCourse>;
  demographics?: Maybe<SchoolDemographics>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SchoolCourse = {
  __typename?: 'SchoolCourse';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  students: Array<Student>;
  teacher: Teacher;
};

export type SchoolDemographics = {
  __typename?: 'SchoolDemographics';
  averageStudentAge?: Maybe<Scalars['Int']['output']>;
  averageStudentGPA?: Maybe<Scalars['Float']['output']>;
  averageTeacherAge?: Maybe<Scalars['Int']['output']>;
  averageTeacherExperience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  schoolId: Scalars['ID']['output'];
  studentCount: Scalars['Int']['output'];
  teacherCount: Scalars['Int']['output'];
};

export type Student = {
  __typename?: 'Student';
  guardians: Array<StudentGuardian>;
  id: Scalars['ID']['output'];
  profile?: Maybe<StudentProfile>;
};

export type StudentAvatar = {
  __typename?: 'StudentAvatar';
  eyeColor: Scalars['String']['output'];
  hairColor: Scalars['String']['output'];
  hairstyle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  skinColor: Scalars['String']['output'];
};

export type StudentGuardian = {
  __typename?: 'StudentGuardian';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type StudentProfile = {
  __typename?: 'StudentProfile';
  avatar?: Maybe<StudentAvatar>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  profileChanges: StudentProfile;
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['ID']['output'];
  profile?: Maybe<TeacherProfile>;
};

export type TeacherAvatar = {
  __typename?: 'TeacherAvatar';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type TeacherProfile = {
  __typename?: 'TeacherProfile';
  avatar?: Maybe<TeacherAvatar>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
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
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  School: ResolverTypeWrapper<School>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SchoolCourse: ResolverTypeWrapper<SchoolCourse>;
  SchoolDemographics: ResolverTypeWrapper<SchoolDemographics>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Student: ResolverTypeWrapper<Student>;
  StudentAvatar: ResolverTypeWrapper<StudentAvatar>;
  StudentGuardian: ResolverTypeWrapper<StudentGuardian>;
  StudentProfile: ResolverTypeWrapper<StudentProfile>;
  Subscription: ResolverTypeWrapper<{}>;
  Teacher: ResolverTypeWrapper<Teacher>;
  TeacherAvatar: ResolverTypeWrapper<TeacherAvatar>;
  TeacherProfile: ResolverTypeWrapper<TeacherProfile>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  Query: {};
  ID: Scalars['ID']['output'];
  School: School;
  String: Scalars['String']['output'];
  SchoolCourse: SchoolCourse;
  SchoolDemographics: SchoolDemographics;
  Int: Scalars['Int']['output'];
  Float: Scalars['Float']['output'];
  Student: Student;
  StudentAvatar: StudentAvatar;
  StudentGuardian: StudentGuardian;
  StudentProfile: StudentProfile;
  Subscription: {};
  Teacher: Teacher;
  TeacherAvatar: TeacherAvatar;
  TeacherProfile: TeacherProfile;
  Boolean: Scalars['Boolean']['output'];
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createSchoolCourse?: Resolver<
    ResolversTypes['SchoolCourse'],
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  school?: Resolver<
    Maybe<ResolversTypes['School']>,
    ParentType,
    ContextType,
    RequireFields<QueryschoolArgs, 'id'>
  >;
  schools?: Resolver<Array<ResolversTypes['School']>, ParentType, ContextType>;
  student?: Resolver<
    Maybe<ResolversTypes['Student']>,
    ParentType,
    ContextType,
    RequireFields<QuerystudentArgs, 'id'>
  >;
  teacher?: Resolver<
    Maybe<ResolversTypes['Teacher']>,
    ParentType,
    ContextType,
    RequireFields<QueryteacherArgs, 'id'>
  >;
};

export type SchoolResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['School'] = ResolversParentTypes['School']
> = {
  courses?: Resolver<
    Array<ResolversTypes['SchoolCourse']>,
    ParentType,
    ContextType
  >;
  demographics?: Resolver<
    Maybe<ResolversTypes['SchoolDemographics']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchoolCourseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SchoolCourse'] = ResolversParentTypes['SchoolCourse']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  students?: Resolver<
    Array<ResolversTypes['Student']>,
    ParentType,
    ContextType
  >;
  teacher?: Resolver<ResolversTypes['Teacher'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchoolDemographicsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SchoolDemographics'] = ResolversParentTypes['SchoolDemographics']
> = {
  averageStudentAge?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  averageStudentGPA?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  averageTeacherAge?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  averageTeacherExperience?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  schoolId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  studentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teacherCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']
> = {
  guardians?: Resolver<
    Array<ResolversTypes['StudentGuardian']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profile?: Resolver<
    Maybe<ResolversTypes['StudentProfile']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAvatarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAvatar'] = ResolversParentTypes['StudentAvatar']
> = {
  eyeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hairColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hairstyle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  skinColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentGuardianResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentGuardian'] = ResolversParentTypes['StudentGuardian']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentProfile'] = ResolversParentTypes['StudentProfile']
> = {
  avatar?: Resolver<
    Maybe<ResolversTypes['StudentAvatar']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  profileChanges?: SubscriptionResolver<
    ResolversTypes['StudentProfile'],
    'profileChanges',
    ParentType,
    ContextType
  >;
};

export type TeacherResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Teacher'] = ResolversParentTypes['Teacher']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profile?: Resolver<
    Maybe<ResolversTypes['TeacherProfile']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherAvatarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherAvatar'] = ResolversParentTypes['TeacherAvatar']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherProfile'] = ResolversParentTypes['TeacherProfile']
> = {
  avatar?: Resolver<
    Maybe<ResolversTypes['TeacherAvatar']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  School?: SchoolResolvers<ContextType>;
  SchoolCourse?: SchoolCourseResolvers<ContextType>;
  SchoolDemographics?: SchoolDemographicsResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  StudentAvatar?: StudentAvatarResolvers<ContextType>;
  StudentGuardian?: StudentGuardianResolvers<ContextType>;
  StudentProfile?: StudentProfileResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Teacher?: TeacherResolvers<ContextType>;
  TeacherAvatar?: TeacherAvatarResolvers<ContextType>;
  TeacherProfile?: TeacherProfileResolvers<ContextType>;
};
