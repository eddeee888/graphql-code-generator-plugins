import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 37, end: 42 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 47, end: 52 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 54, end: 63 },
              },
              loc: { start: 54, end: 63 },
            },
            loc: { start: 54, end: 64 },
          },
          directives: [],
          loc: { start: 47, end: 64 },
        },
      ],
      loc: { start: 27, end: 66 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StandardError',
        loc: { start: 73, end: 86 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 98, end: 103 } },
          loc: { start: 98, end: 103 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 108, end: 113 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 115, end: 124 },
              },
              loc: { start: 115, end: 124 },
            },
            loc: { start: 115, end: 125 },
          },
          directives: [],
          loc: { start: 108, end: 125 },
        },
      ],
      loc: { start: 68, end: 127 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 134, end: 143 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 148, end: 157 },
          },
          directives: [],
          loc: { start: 148, end: 157 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 160, end: 182 },
          },
          directives: [],
          loc: { start: 160, end: 182 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 185, end: 200 },
          },
          directives: [],
          loc: { start: 185, end: 200 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 203, end: 219 },
          },
          directives: [],
          loc: { start: 203, end: 219 },
        },
      ],
      loc: { start: 129, end: 221 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 229, end: 244 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 249, end: 263 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 265, end: 268 } },
            loc: { start: 265, end: 268 },
          },
          directives: [],
          loc: { start: 249, end: 268 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 271, end: 275 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 277, end: 280 } },
            loc: { start: 277, end: 280 },
          },
          directives: [],
          loc: { start: 271, end: 280 },
        },
      ],
      loc: { start: 223, end: 282 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 289, end: 305 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 310, end: 321 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 323, end: 326 },
              },
              loc: { start: 323, end: 326 },
            },
            loc: { start: 323, end: 327 },
          },
          directives: [],
          loc: { start: 310, end: 327 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 330, end: 344 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 346, end: 349 },
              },
              loc: { start: 346, end: 349 },
            },
            loc: { start: 346, end: 350 },
          },
          directives: [],
          loc: { start: 330, end: 350 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 353, end: 367 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 369, end: 372 },
              },
              loc: { start: 369, end: 372 },
            },
            loc: { start: 369, end: 373 },
          },
          directives: [],
          loc: { start: 353, end: 373 },
        },
      ],
      loc: { start: 284, end: 375 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 384, end: 392 } },
      directives: [],
      loc: { start: 377, end: 392 },
    },
  ],
  loc: { start: 0, end: 393 },
} as unknown as DocumentNode;
