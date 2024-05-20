/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js';
import { me as Query_me } from './user/resolvers/Query/me.js';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById.js';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser.js';
import { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName.js';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate.js';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit.js';
import { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges.js';
import { PaginationResult } from './base/resolvers/PaginationResult.js';
import { PayloadError } from './base/resolvers/PayloadError.js';
import { Profile } from './user/resolvers/Profile.js';
import { Topic } from './topic/resolvers/Topic.js';
import { TopicByIdResult } from './topic/resolvers/TopicByIdResult.js';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult.js';
import { TopicEditResult } from './topic/resolvers/TopicEditResult.js';
import { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult.js';
import { User } from './user/resolvers/User.js';
import { UserResult } from './user/resolvers/UserResult.js';
import { SomeRandomScalar } from './base/resolvers/SomeRandomScalar.js';
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
