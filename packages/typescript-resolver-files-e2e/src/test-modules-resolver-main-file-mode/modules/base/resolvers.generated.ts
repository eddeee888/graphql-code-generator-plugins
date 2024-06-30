/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './../types.generated';
import { PaginationResult } from './resolvers/PaginationResult';
import { StandardError } from './resolvers/StandardError';
import { Error } from './resolvers/Error';
import { ErrorType } from './resolvers/ErrorType';
import { DateTimeResolver } from 'graphql-scalars';
export const resolvers: Resolvers = {
  PaginationResult: PaginationResult,
  StandardError: StandardError,
  Error: Error,
  ErrorType: ErrorType,
  DateTime: DateTimeResolver,
};
