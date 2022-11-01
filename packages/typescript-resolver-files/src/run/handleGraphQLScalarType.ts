import type { GraphQLScalarType } from 'graphql';
import type { GraphQLTypeHandler } from '../types';

export const handleGraphQLScalarType: GraphQLTypeHandler<GraphQLScalarType> = (
  { type, outputDir },
  _config,
  _result
) => {
  console.log('*** TODO: handle Scalar: ', type.name);
  console.log('*** location:', outputDir);
};
