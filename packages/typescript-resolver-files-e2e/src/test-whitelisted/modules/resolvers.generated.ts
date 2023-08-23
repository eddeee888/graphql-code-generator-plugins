/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { PaginationResult as base_PaginationResult } from './base/resolvers/PaginationResult';
import { StandardError as base_StandardError } from './base/resolvers/StandardError';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  PaginationResult: base_PaginationResult,
  StandardError: base_StandardError,
  DateTime: DateTimeResolver,
};
