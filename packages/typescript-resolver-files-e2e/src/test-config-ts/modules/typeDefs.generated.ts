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
          name: { kind: 'Name', value: 'cat', loc: { start: 15, end: 18 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 19, end: 21 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 23, end: 25 },
                  },
                  loc: { start: 23, end: 25 },
                },
                loc: { start: 23, end: 26 },
              },
              directives: [],
              loc: { start: 19, end: 26 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Cat', loc: { start: 29, end: 32 } },
            loc: { start: 29, end: 32 },
          },
          directives: [],
          loc: { start: 15, end: 32 },
        },
      ],
      loc: { start: 0, end: 34 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Cat', loc: { start: 41, end: 44 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 49, end: 51 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 53, end: 55 } },
              loc: { start: 53, end: 55 },
            },
            loc: { start: 53, end: 56 },
          },
          directives: [],
          loc: { start: 49, end: 56 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 59, end: 67 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 69, end: 75 },
              },
              loc: { start: 69, end: 75 },
            },
            loc: { start: 69, end: 76 },
          },
          directives: [],
          loc: { start: 59, end: 76 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'age', loc: { start: 79, end: 82 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Int', loc: { start: 84, end: 87 } },
              loc: { start: 84, end: 87 },
            },
            loc: { start: 84, end: 88 },
          },
          directives: [],
          loc: { start: 79, end: 88 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isChipped',
            loc: { start: 91, end: 100 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CatChipped',
                loc: { start: 102, end: 112 },
              },
              loc: { start: 102, end: 112 },
            },
            loc: { start: 102, end: 113 },
          },
          directives: [],
          loc: { start: 91, end: 113 },
        },
      ],
      loc: { start: 36, end: 115 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CatChipped',
        loc: { start: 122, end: 132 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'YES', loc: { start: 137, end: 140 } },
          directives: [],
          loc: { start: 137, end: 140 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'NO', loc: { start: 143, end: 145 } },
          directives: [],
          loc: { start: 143, end: 145 },
        },
      ],
      loc: { start: 117, end: 147 },
    },
  ],
  loc: { start: 0, end: 148 },
} as unknown as DocumentNode;
