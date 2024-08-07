/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { topicById as Query_topicById } from './topic/resolvers/Query/topicById';
import { topicsCreatedByUser as Query_topicsCreatedByUser } from './topic/resolvers/Query/topicsCreatedByUser';
import { topicCreate as Mutation_topicCreate } from './topic/resolvers/Mutation/topicCreate';
import { topicEdit as Mutation_topicEdit } from './topic/resolvers/Mutation/topicEdit';
import { Pet } from './pet/resolvers/Pet';
import { PetToy } from './pet/resolvers/PetToy';
import { Profile } from './zoo/resolvers/Profile';
import { Topic } from './topic/resolvers/Topic';
import { TopicCreateResult } from './topic/resolvers/TopicCreateResult';
import { TopicEditResult } from './topic/resolvers/TopicEditResult';
import { User } from './pet/resolvers/User';
import { CustomLogicScalar } from './base/resolvers/CustomLogicScalar';
import { JSON } from './base/resolvers/JSON';
import { SomeRandomScalar } from './base/resolvers/SomeRandomScalar';
import { Error } from './base/resolvers/Error';
import { TopicCreatePayload } from './topic/resolvers/TopicCreatePayload';
import { Country } from './base/resolvers/Country';
import { ErrorType } from './base/resolvers/ErrorType';
import { SortOrder } from './base/resolvers/SortOrder';
import { PetHouseResolvers } from './pet/resolvers/PetHouse';
import { DateResolver } from './base/resolvers/Date';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    topicById: Query_topicById,
    topicsCreatedByUser: Query_topicsCreatedByUser,
  },
  Mutation: {
    topicCreate: Mutation_topicCreate,
    topicEdit: Mutation_topicEdit,
  },

  Pet: Pet,
  PetToy: PetToy,
  Profile: Profile,
  Topic: Topic,
  TopicCreateResult: TopicCreateResult,
  TopicEditResult: TopicEditResult,
  User: User,
  CustomLogicScalar: CustomLogicScalar,
  JSON: JSON,
  SomeRandomScalar: SomeRandomScalar,
  Error: Error,
  TopicCreatePayload: TopicCreatePayload,
  Country: Country,
  ErrorType: ErrorType,
  SortOrder: SortOrder,
  PetHouse: PetHouseResolvers,
  Date: DateResolver,
  DateTime: DateTimeResolver,
};
