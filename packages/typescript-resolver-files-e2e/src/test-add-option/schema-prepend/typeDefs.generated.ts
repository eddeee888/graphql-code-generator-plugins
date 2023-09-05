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
                value: 'String',
                loc: { start: 21, end: 27 },
              },
              loc: { start: 21, end: 27 },
            },
            loc: { start: 21, end: 28 },
          },
          directives: [],
          loc: { start: 15, end: 28 },
        },
      ],
      loc: { start: 0, end: 30 },
    },
  ],
  loc: { start: 0, end: 31 },
} as unknown as DocumentNode;
