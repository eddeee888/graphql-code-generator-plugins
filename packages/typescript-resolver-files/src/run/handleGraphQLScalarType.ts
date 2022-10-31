import * as path from 'path';
import type { GraphQLScalarType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';
import { printImportModule, relativeModulePath } from '../utils';

export const handleGraphQLScalarType: GraphQLTypeHandler<GraphQLScalarType> = (
  { type, outputDir },
  { resolverTypesPath },
  result
) => {
  console.log('*** TODO: handle Scalar: ', type.name);
  console.log('*** location:', outputDir);
};
