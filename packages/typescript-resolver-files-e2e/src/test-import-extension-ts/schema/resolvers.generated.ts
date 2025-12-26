/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.ts';
import { me as Query_me } from './user/resolvers/Query/me.ts';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById.ts';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser.ts';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName.ts';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate.ts';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit.ts';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges.ts';
import { PaginationResult } from './base/resolvers/PaginationResult.ts';
import { PayloadError } from './base/resolvers/PayloadError.ts';
import { Profile } from './user/resolvers/Profile.ts';
import { Topic } from './topic/resolvers/Topic.ts';
import { TopicByIdResult } from './topic/resolvers/TopicByIdResult.ts';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult.ts';
import { TopicEditResult } from './topic/resolvers/TopicEditResult.ts';
import { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult.ts';
import { User } from './user/resolvers/User.ts';
import { UserResult } from './user/resolvers/UserResult.ts';
import { SomeRandomScalar } from './base/resolvers/SomeRandomScalar.ts';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    me: Query_me,
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
    userByAccountName: Query_userByAccountName,
  },
  Mutation: {
    topicCreate: Mutation_topicCreate,
    topicEdit: Mutation_topicEdit,
  },
  Subscription: { profileChanges: Subscription_profileChanges },
  PaginationResult: PaginationResult,
  PayloadError: PayloadError,
  Profile: Profile,
  Topic: Topic,
  TopicByIdResult: TopicByIdResult,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  TopicsCreatedByUserResult: TopicsCreatedByUserResult,
  User: User,
  UserResult: UserResult,
  SomeRandomScalar: SomeRandomScalar,
  DateTime: DateTimeResolver,
};
