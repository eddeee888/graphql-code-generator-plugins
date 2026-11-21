import { buildSchema, type GraphQLObjectType } from 'graphql';
import { ApolloFederation } from '@graphql-codegen/plugin-helpers';
import { findFieldNamesToGenerate } from './findFieldNamesToGenerate.js';

const schema = buildSchema(/* GraphQL */ `
  directive @key(fields: String!) repeatable on OBJECT
  directive @external on FIELD_DEFINITION | OBJECT
  directive @requires(fields: String!) on FIELD_DEFINITION
  directive @provides(fields: String!) on FIELD_DEFINITION

  type Query {
    product: Product @provides(fields: "name")
    warehouse: Warehouse @provides(fields: "address")
  }

  type Product @key(fields: "id") {
    id: ID!
  }

  extend type Product {
    name: String @external
    weight: Int @external
    shippingEstimate: Int @requires(fields: "weight")
  }

  type Warehouse @key(fields: "id") {
    id: ID!
  }

  extend type Warehouse @external {
    address: String
    capacity: Int
  }
`);

const getFieldNames = (federation: boolean, typeName: string): string[] => [
  ...findFieldNamesToGenerate({
    namedType: schema.getType(typeName) as GraphQLObjectType,
    apolloFederation: new ApolloFederation({
      enabled: federation,
      schema,
      meta: {},
    }),
  }),
];

describe('findFieldNamesToGenerate', () => {
  it('returns all fields if federation is disabled', () => {
    expect(getFieldNames(false, 'Product')).toEqual([
      'id',
      'name',
      'weight',
      'shippingEstimate',
    ]);
  });

  it('skips `@external` fields without `@provides` path if federation is enabled', () => {
    expect(getFieldNames(true, 'Product')).toEqual([
      'id',
      'name',
      'shippingEstimate',
    ]);
  });

  it('returns only fields with `@provides` path if object type extension is `@external`', () => {
    expect(getFieldNames(true, 'Warehouse')).toEqual(['address']);
  });
});
