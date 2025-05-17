import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'book' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id' },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID' },
                },
              },
              directives: [],
            },
          ],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Book' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isbn' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'nextBookInSeries' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'previousBookInSeries' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Query' } },
          operation: 'query',
        },
      ],
    },
  ],
} as unknown as DocumentNode;
