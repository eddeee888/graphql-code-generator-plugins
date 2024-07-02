import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      name: { kind: 'Name', value: 'Query' },
      kind: 'ObjectTypeDefinition',
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
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me' },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserPayload' },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userByAccountName' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'accountName' },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserPayload' },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      interfaces: [],
    },
    {
      name: { kind: 'Name', value: 'Mutation' },
      kind: 'ObjectTypeDefinition',
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
      directives: [],
      interfaces: [],
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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User' },
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
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'accountName' },
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
          name: { kind: 'Name', value: 'accountWebsite' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'accountTwitter' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'accountGitHub' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'accountLinkedIn' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'avatar' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'UserResult' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'result' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'UserPayload' },
      directives: [],
      types: [
        { kind: 'NamedType', name: { kind: 'Name', value: 'UserResult' } },
        { kind: 'NamedType', name: { kind: 'Name', value: 'StandardError' } },
      ],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'Date' },
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
