import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Post', loc: { start: 5, end: 9 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 14, end: 16 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 18, end: 20 } },
              loc: { start: 18, end: 20 },
            },
            loc: { start: 18, end: 21 },
          },
          directives: [],
          loc: { start: 14, end: 21 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 24, end: 29 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 31, end: 37 },
              },
              loc: { start: 31, end: 37 },
            },
            loc: { start: 31, end: 38 },
          },
          directives: [],
          loc: { start: 24, end: 38 },
        },
      ],
      loc: { start: 0, end: 40 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 54, end: 58 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'posts', loc: { start: 63, end: 68 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Post',
                    loc: { start: 71, end: 75 },
                  },
                  loc: { start: 71, end: 75 },
                },
                loc: { start: 71, end: 76 },
              },
              loc: { start: 70, end: 77 },
            },
            loc: { start: 70, end: 78 },
          },
          directives: [],
          loc: { start: 63, end: 78 },
        },
      ],
      loc: { start: 42, end: 80 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 86, end: 90 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 95, end: 97 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 99, end: 101 } },
              loc: { start: 99, end: 101 },
            },
            loc: { start: 99, end: 102 },
          },
          directives: [],
          loc: { start: 95, end: 102 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 105, end: 109 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 111, end: 117 },
              },
              loc: { start: 111, end: 117 },
            },
            loc: { start: 111, end: 118 },
          },
          directives: [],
          loc: { start: 105, end: 118 },
        },
      ],
      loc: { start: 81, end: 120 },
    },
  ],
  loc: { start: 0, end: 121 },
} as unknown as DocumentNode;
