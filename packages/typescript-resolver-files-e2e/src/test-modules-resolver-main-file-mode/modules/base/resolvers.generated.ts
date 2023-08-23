/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { PaginationResult as base_PaginationResult } from './resolvers/PaginationResult';
import { StandardError as base_StandardError } from './resolvers/StandardError';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  PaginationResult: base_PaginationResult,
  StandardError: base_StandardError,
  DateTime: DateTimeResolver,
};
