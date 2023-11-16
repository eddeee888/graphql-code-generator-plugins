import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'test', loc: { start: 15, end: 19 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Test',
                loc: { start: 21, end: 25 },
              },
              loc: { start: 21, end: 25 },
            },
            loc: { start: 21, end: 26 },
          },
          directives: [],
          loc: { start: 15, end: 26 },
        },
      ],
      loc: { start: 0, end: 28 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Test', loc: { start: 35, end: 39 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 44, end: 46 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 48, end: 50 } },
              loc: { start: 48, end: 50 },
            },
            loc: { start: 48, end: 51 },
          },
          directives: [],
          loc: { start: 44, end: 51 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'string', loc: { start: 54, end: 60 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 62, end: 68 },
              },
              loc: { start: 62, end: 68 },
            },
            loc: { start: 62, end: 69 },
          },
          directives: [],
          loc: { start: 54, end: 69 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'boolean', loc: { start: 72, end: 79 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 81, end: 88 },
              },
              loc: { start: 81, end: 88 },
            },
            loc: { start: 81, end: 89 },
          },
          directives: [],
          loc: { start: 72, end: 89 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'int', loc: { start: 92, end: 95 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 97, end: 100 },
              },
              loc: { start: 97, end: 100 },
            },
            loc: { start: 97, end: 101 },
          },
          directives: [],
          loc: { start: 92, end: 101 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'float', loc: { start: 104, end: 109 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Float',
                loc: { start: 111, end: 116 },
              },
              loc: { start: 111, end: 116 },
            },
            loc: { start: 111, end: 117 },
          },
          directives: [],
          loc: { start: 104, end: 117 },
        },
      ],
      loc: { start: 30, end: 119 },
    },
  ],
  loc: { start: 0, end: 120 },
} as unknown as DocumentNode;
