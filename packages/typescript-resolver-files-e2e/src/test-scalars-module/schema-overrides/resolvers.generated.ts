/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { me as Query_me } from './user/resolvers/Query/me';
import    { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import    { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import    { userByAccountName as Query_userByAccountName } from './user/resolvers/Query/userByAccountName';
import    { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import    { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import    { profileChanges as Subscription_profileChanges } from './user/resolvers/Subscription/profileChanges';
import    { PaginationResult } from './base/resolvers/PaginationResult';
import    { PayloadError } from './base/resolvers/PayloadError';
import    { Profile } from './user/resolvers/Profile';
import    { Topic } from './topic/resolvers/Topic';
import    { TopicByIdResult } from './topic/resolvers/TopicByIdResult';
import    { TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import    { TopicEditResult } from './topic/resolvers/TopicEditResult';
import    { TopicsCreatedByUserResult } from './topic/resolvers/TopicsCreatedByUserResult';
import    { User } from './user/resolvers/User';
import    { UserResult } from './user/resolvers/UserResult';
import    { SomeRandomScalar } from './base/resolvers/SomeRandomScalar';
import    { DateTime } from './base/scalars/CustomDateTime';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,topicById: Query_topicById,topicsCreatedByUser: Query_topicsCreatedByUser,userByAccountName: Query_userByAccountName },
      Mutation: { topicCreate: Mutation_topicCreate,topicEdit: Mutation_topicEdit },
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
DateTime: DateTime
    }