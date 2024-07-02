import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'topicById' },
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
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TopicByIdPayload' },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'topicsCreatedByUser' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input' },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'TopicsCreatedByUserInput' },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TopicsCreatedByUserPayload' },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'topicCreate' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input' },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'TopicCreateInput' },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TopicCreatePayload' },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'topicEdit' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input' },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'TopicEditInput' },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TopicEditPayload' },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic' },
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
          name: { kind: 'Name', value: 'name' },
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
          name: { kind: 'Name', value: 'url' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'creator' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime' },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicByIdResult' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'TopicByIdPayload' },
      directives: [],
      types: [
        { kind: 'NamedType', name: { kind: 'Name', value: 'TopicByIdResult' } },
        { kind: 'NamedType', name: { kind: 'Name', value: 'StandardError' } },
      ],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicsCreatedByUserInput' },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'userId' },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicsCreatedByUserResult' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Topic' },
                },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'TopicsCreatedByUserPayload' },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'TopicsCreatedByUserResult' },
        },
        { kind: 'NamedType', name: { kind: 'Name', value: 'StandardError' } },
      ],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicCreateInput' },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name' },
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
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url' },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicCreateResult' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'TopicCreatePayload' },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'TopicCreateResult' },
        },
        { kind: 'NamedType', name: { kind: 'Name', value: 'StandardError' } },
      ],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicEditInput' },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id' },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name' },
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
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url' },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'TopicEditResult' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Topic' } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'TopicEditPayload' },
      directives: [],
      types: [
        { kind: 'NamedType', name: { kind: 'Name', value: 'TopicEditResult' } },
        { kind: 'NamedType', name: { kind: 'Name', value: 'StandardError' } },
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
