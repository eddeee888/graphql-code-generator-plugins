/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { PaginationResult } from './resolvers/PaginationResult';
import { StandardError } from './resolvers/StandardError';
import { Error } from './resolvers/Error';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  PaginationResult: PaginationResult,
  StandardError: StandardError,
  Error: Error,
  DateTime: DateTimeResolver,
};
