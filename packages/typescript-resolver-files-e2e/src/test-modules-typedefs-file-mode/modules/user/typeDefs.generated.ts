import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 12, end: 24 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 29, end: 43 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 45, end: 52 },
              },
              loc: { start: 45, end: 52 },
            },
            loc: { start: 45, end: 53 },
          },
          directives: [],
          loc: { start: 29, end: 53 },
        },
      ],
      loc: { start: 0, end: 55 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 62, end: 69 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 74, end: 76 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 78, end: 80 } },
              loc: { start: 78, end: 80 },
            },
            loc: { start: 78, end: 81 },
          },
          directives: [],
          loc: { start: 74, end: 81 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 84, end: 88 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 90, end: 94 },
              },
              loc: { start: 90, end: 94 },
            },
            loc: { start: 90, end: 95 },
          },
          directives: [],
          loc: { start: 84, end: 95 },
        },
      ],
      loc: { start: 57, end: 97 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 110, end: 115 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 120, end: 122 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 124, end: 135 },
              },
              loc: { start: 124, end: 135 },
            },
            loc: { start: 124, end: 136 },
          },
          directives: [],
          loc: { start: 120, end: 136 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 139, end: 156 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 157, end: 168 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 170, end: 176 },
                  },
                  loc: { start: 170, end: 176 },
                },
                loc: { start: 170, end: 177 },
              },
              directives: [],
              loc: { start: 157, end: 177 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 180, end: 191 },
              },
              loc: { start: 180, end: 191 },
            },
            loc: { start: 180, end: 192 },
          },
          directives: [],
          loc: { start: 139, end: 192 },
        },
      ],
      loc: { start: 98, end: 194 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 201, end: 205 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 210, end: 212 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 214, end: 216 },
              },
              loc: { start: 214, end: 216 },
            },
            loc: { start: 214, end: 217 },
          },
          directives: [],
          loc: { start: 210, end: 217 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 220, end: 224 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 226, end: 232 },
            },
            loc: { start: 226, end: 232 },
          },
          directives: [],
          loc: { start: 220, end: 232 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 235, end: 246 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 248, end: 254 },
              },
              loc: { start: 248, end: 254 },
            },
            loc: { start: 248, end: 255 },
          },
          directives: [],
          loc: { start: 235, end: 255 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 258, end: 272 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 274, end: 280 },
            },
            loc: { start: 274, end: 280 },
          },
          directives: [],
          loc: { start: 258, end: 280 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 283, end: 297 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 299, end: 305 },
            },
            loc: { start: 299, end: 305 },
          },
          directives: [],
          loc: { start: 283, end: 305 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 308, end: 321 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 323, end: 329 },
            },
            loc: { start: 323, end: 329 },
          },
          directives: [],
          loc: { start: 308, end: 329 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 332, end: 347 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 349, end: 355 },
            },
            loc: { start: 349, end: 355 },
          },
          directives: [],
          loc: { start: 332, end: 355 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 358, end: 364 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 366, end: 372 },
            },
            loc: { start: 366, end: 372 },
          },
          directives: [],
          loc: { start: 358, end: 372 },
        },
      ],
      loc: { start: 196, end: 374 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 381, end: 391 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 396, end: 402 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 404, end: 408 },
            },
            loc: { start: 404, end: 408 },
          },
          directives: [],
          loc: { start: 396, end: 408 },
        },
      ],
      loc: { start: 376, end: 410 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 418, end: 429 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 432, end: 442 },
          },
          loc: { start: 432, end: 442 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 445, end: 458 },
          },
          loc: { start: 445, end: 458 },
        },
      ],
      loc: { start: 412, end: 458 },
    },
  ],
  loc: { start: 0, end: 459 },
} as unknown as DocumentNode;
