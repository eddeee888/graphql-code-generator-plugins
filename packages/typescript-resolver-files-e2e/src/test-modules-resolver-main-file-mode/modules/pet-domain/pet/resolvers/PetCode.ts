import { GraphQLScalarType } from 'graphql';
export const PetCode = new GraphQLScalarType({
  name: 'PetCode',
  description: 'PetCode description',
  serialize: (value) => {
    /* Implement logic to turn the returned value from resolvers to a value that can be sent to clients */
  },
  parseValue: (value) => {
    /* Implement logic to parse input that was sent to the server as variables */
  },
  parseLiteral: (ast) => {
    /* Implement logic to parse input that was sent to the server as literal values (string, number, or boolean) */
  },
});
