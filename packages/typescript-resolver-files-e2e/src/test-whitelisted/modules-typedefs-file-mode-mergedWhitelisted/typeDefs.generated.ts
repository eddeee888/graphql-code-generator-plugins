import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query' },
      interfaces: [],
      directives: [],
      fields: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation' },
      interfaces: [],
      directives: [],
      fields: [],
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType' },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'StandardError' },
      interfaces: [
        { kind: 'NamedType', name: { kind: 'Name', value: 'Error' } },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ErrorType' },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType' },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'NOT_FOUND' },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'INPUT_VALIDATION_ERROR' },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'FORBIDDEN_ERROR' },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'UNEXPECTED_ERROR' },
          directives: [],
        },
      ],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'PaginationInput' },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'recordsPerPage' },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page' },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PaginationResult' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'currentPage' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'recordsPerPage' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'totalPageCount' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime' },
      directives: [],
    },
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Query' } },
          operation: 'query',
        },
        {
          kind: 'OperationTypeDefinition',
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Mutation' },
          },
          operation: 'mutation',
        },
      ],
    },
  ],
} as unknown as DocumentNode;
