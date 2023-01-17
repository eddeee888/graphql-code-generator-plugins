import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 6, end: 11 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1, end: 11 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 18, end: 26 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 13, end: 26 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 38, end: 43 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 48, end: 53 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 55, end: 64 },
              },
              loc: { start: 55, end: 64 },
            },
            loc: { start: 55, end: 65 },
          },
          directives: [],
          loc: { start: 48, end: 65 },
        },
      ],
      loc: { start: 28, end: 67 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StandardError',
        loc: { start: 74, end: 87 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 99, end: 104 } },
          loc: { start: 99, end: 104 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 109, end: 114 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 116, end: 125 },
              },
              loc: { start: 116, end: 125 },
            },
            loc: { start: 116, end: 126 },
          },
          directives: [],
          loc: { start: 109, end: 126 },
        },
      ],
      loc: { start: 69, end: 128 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 135, end: 144 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 149, end: 158 },
          },
          directives: [],
          loc: { start: 149, end: 158 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 161, end: 183 },
          },
          directives: [],
          loc: { start: 161, end: 183 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 186, end: 201 },
          },
          directives: [],
          loc: { start: 186, end: 201 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 204, end: 220 },
          },
          directives: [],
          loc: { start: 204, end: 220 },
        },
      ],
      loc: { start: 130, end: 222 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 230, end: 245 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 250, end: 264 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 266, end: 269 } },
            loc: { start: 266, end: 269 },
          },
          directives: [],
          loc: { start: 250, end: 269 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 272, end: 276 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 278, end: 281 } },
            loc: { start: 278, end: 281 },
          },
          directives: [],
          loc: { start: 272, end: 281 },
        },
      ],
      loc: { start: 224, end: 283 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 290, end: 306 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 311, end: 322 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 324, end: 327 },
              },
              loc: { start: 324, end: 327 },
            },
            loc: { start: 324, end: 328 },
          },
          directives: [],
          loc: { start: 311, end: 328 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 331, end: 345 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 347, end: 350 },
              },
              loc: { start: 347, end: 350 },
            },
            loc: { start: 347, end: 351 },
          },
          directives: [],
          loc: { start: 331, end: 351 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 354, end: 368 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 370, end: 373 },
              },
              loc: { start: 370, end: 373 },
            },
            loc: { start: 370, end: 374 },
          },
          directives: [],
          loc: { start: 354, end: 374 },
        },
      ],
      loc: { start: 285, end: 376 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 385, end: 393 } },
      directives: [],
      loc: { start: 378, end: 393 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'DateTimeNamedImport',
        loc: { start: 402, end: 421 },
      },
      directives: [],
      loc: { start: 395, end: 421 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'DateTimeSameNamedImport',
        loc: { start: 430, end: 453 },
      },
      directives: [],
      loc: { start: 423, end: 453 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigIntNamedWithAlias',
        loc: { start: 462, end: 482 },
      },
      directives: [],
      loc: { start: 455, end: 482 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigIntSameNamedWithAlias',
        loc: { start: 491, end: 515 },
      },
      directives: [],
      loc: { start: 484, end: 515 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'AbsoluteDefault',
        loc: { start: 524, end: 539 },
      },
      directives: [],
      loc: { start: 517, end: 539 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 552, end: 557 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 562, end: 571 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 572, end: 574 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 576, end: 578 },
                  },
                  loc: { start: 576, end: 578 },
                },
                loc: { start: 576, end: 579 },
              },
              directives: [],
              loc: { start: 572, end: 579 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 582, end: 598 },
              },
              loc: { start: 582, end: 598 },
            },
            loc: { start: 582, end: 599 },
          },
          directives: [],
          loc: { start: 562, end: 599 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 602, end: 621 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 622, end: 627 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 629, end: 653 },
                  },
                  loc: { start: 629, end: 653 },
                },
                loc: { start: 629, end: 654 },
              },
              directives: [],
              loc: { start: 622, end: 654 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 657, end: 683 },
              },
              loc: { start: 657, end: 683 },
            },
            loc: { start: 657, end: 684 },
          },
          directives: [],
          loc: { start: 602, end: 684 },
        },
      ],
      loc: { start: 540, end: 686 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 700, end: 708 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 713, end: 724 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 725, end: 730 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 732, end: 748 },
                  },
                  loc: { start: 732, end: 748 },
                },
                loc: { start: 732, end: 749 },
              },
              directives: [],
              loc: { start: 725, end: 749 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 752, end: 770 },
              },
              loc: { start: 752, end: 770 },
            },
            loc: { start: 752, end: 771 },
          },
          directives: [],
          loc: { start: 713, end: 771 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 774, end: 783 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 784, end: 789 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 791, end: 805 },
                  },
                  loc: { start: 791, end: 805 },
                },
                loc: { start: 791, end: 806 },
              },
              directives: [],
              loc: { start: 784, end: 806 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 809, end: 825 },
              },
              loc: { start: 809, end: 825 },
            },
            loc: { start: 809, end: 826 },
          },
          directives: [],
          loc: { start: 774, end: 826 },
        },
      ],
      loc: { start: 688, end: 828 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 835, end: 840 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 845, end: 847 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 849, end: 851 },
              },
              loc: { start: 849, end: 851 },
            },
            loc: { start: 849, end: 852 },
          },
          directives: [],
          loc: { start: 845, end: 852 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 855, end: 859 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 861, end: 867 },
              },
              loc: { start: 861, end: 867 },
            },
            loc: { start: 861, end: 868 },
          },
          directives: [],
          loc: { start: 855, end: 868 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 871, end: 874 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 876, end: 882 },
            },
            loc: { start: 876, end: 882 },
          },
          directives: [],
          loc: { start: 871, end: 882 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 885, end: 892 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 894, end: 898 },
              },
              loc: { start: 894, end: 898 },
            },
            loc: { start: 894, end: 899 },
          },
          directives: [],
          loc: { start: 885, end: 899 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 902, end: 911 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 913, end: 921 },
              },
              loc: { start: 913, end: 921 },
            },
            loc: { start: 913, end: 922 },
          },
          directives: [],
          loc: { start: 902, end: 922 },
        },
      ],
      loc: { start: 830, end: 924 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 931, end: 946 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 951, end: 957 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 959, end: 964 },
            },
            loc: { start: 959, end: 964 },
          },
          directives: [],
          loc: { start: 951, end: 964 },
        },
      ],
      loc: { start: 926, end: 966 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 974, end: 990 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 993, end: 1008 },
          },
          loc: { start: 993, end: 1008 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1011, end: 1024 },
          },
          loc: { start: 1011, end: 1024 },
        },
      ],
      loc: { start: 968, end: 1024 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1032, end: 1056 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1061, end: 1067 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1069, end: 1071 },
              },
              loc: { start: 1069, end: 1071 },
            },
            loc: { start: 1069, end: 1072 },
          },
          directives: [],
          loc: { start: 1061, end: 1072 },
        },
      ],
      loc: { start: 1026, end: 1074 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1081, end: 1106 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1111, end: 1117 },
          },
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
                    value: 'Topic',
                    loc: { start: 1120, end: 1125 },
                  },
                  loc: { start: 1120, end: 1125 },
                },
                loc: { start: 1120, end: 1126 },
              },
              loc: { start: 1119, end: 1127 },
            },
            loc: { start: 1119, end: 1128 },
          },
          directives: [],
          loc: { start: 1111, end: 1128 },
        },
      ],
      loc: { start: 1076, end: 1130 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1138, end: 1164 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1167, end: 1192 },
          },
          loc: { start: 1167, end: 1192 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1195, end: 1208 },
          },
          loc: { start: 1195, end: 1208 },
        },
      ],
      loc: { start: 1132, end: 1208 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1216, end: 1232 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1237, end: 1241 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1243, end: 1249 },
              },
              loc: { start: 1243, end: 1249 },
            },
            loc: { start: 1243, end: 1250 },
          },
          directives: [],
          loc: { start: 1237, end: 1250 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1253, end: 1256 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1258, end: 1264 },
            },
            loc: { start: 1258, end: 1264 },
          },
          directives: [],
          loc: { start: 1253, end: 1264 },
        },
      ],
      loc: { start: 1210, end: 1266 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1273, end: 1290 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1295, end: 1301 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1303, end: 1308 },
              },
              loc: { start: 1303, end: 1308 },
            },
            loc: { start: 1303, end: 1309 },
          },
          directives: [],
          loc: { start: 1295, end: 1309 },
        },
      ],
      loc: { start: 1268, end: 1311 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1319, end: 1337 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1340, end: 1357 },
          },
          loc: { start: 1340, end: 1357 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1360, end: 1373 },
          },
          loc: { start: 1360, end: 1373 },
        },
      ],
      loc: { start: 1313, end: 1373 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1381, end: 1395 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1400, end: 1402 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1404, end: 1406 },
              },
              loc: { start: 1404, end: 1406 },
            },
            loc: { start: 1404, end: 1407 },
          },
          directives: [],
          loc: { start: 1400, end: 1407 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1410, end: 1414 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1416, end: 1422 },
              },
              loc: { start: 1416, end: 1422 },
            },
            loc: { start: 1416, end: 1423 },
          },
          directives: [],
          loc: { start: 1410, end: 1423 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1426, end: 1429 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1431, end: 1437 },
            },
            loc: { start: 1431, end: 1437 },
          },
          directives: [],
          loc: { start: 1426, end: 1437 },
        },
      ],
      loc: { start: 1375, end: 1439 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1446, end: 1461 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1466, end: 1472 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1474, end: 1479 },
              },
              loc: { start: 1474, end: 1479 },
            },
            loc: { start: 1474, end: 1480 },
          },
          directives: [],
          loc: { start: 1466, end: 1480 },
        },
      ],
      loc: { start: 1441, end: 1482 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1490, end: 1506 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1509, end: 1524 },
          },
          loc: { start: 1509, end: 1524 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1527, end: 1540 },
          },
          loc: { start: 1527, end: 1540 },
        },
      ],
      loc: { start: 1484, end: 1540 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1553, end: 1565 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1570, end: 1584 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1586, end: 1593 },
              },
              loc: { start: 1586, end: 1593 },
            },
            loc: { start: 1586, end: 1594 },
          },
          directives: [],
          loc: { start: 1570, end: 1594 },
        },
      ],
      loc: { start: 1541, end: 1596 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1603, end: 1610 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1615, end: 1617 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1619, end: 1621 },
              },
              loc: { start: 1619, end: 1621 },
            },
            loc: { start: 1619, end: 1622 },
          },
          directives: [],
          loc: { start: 1615, end: 1622 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1625, end: 1629 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1631, end: 1635 },
              },
              loc: { start: 1631, end: 1635 },
            },
            loc: { start: 1631, end: 1636 },
          },
          directives: [],
          loc: { start: 1625, end: 1636 },
        },
      ],
      loc: { start: 1598, end: 1638 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1651, end: 1656 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1661, end: 1663 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1665, end: 1676 },
              },
              loc: { start: 1665, end: 1676 },
            },
            loc: { start: 1665, end: 1677 },
          },
          directives: [],
          loc: { start: 1661, end: 1677 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1680, end: 1697 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1698, end: 1709 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1711, end: 1717 },
                  },
                  loc: { start: 1711, end: 1717 },
                },
                loc: { start: 1711, end: 1718 },
              },
              directives: [],
              loc: { start: 1698, end: 1718 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1721, end: 1732 },
              },
              loc: { start: 1721, end: 1732 },
            },
            loc: { start: 1721, end: 1733 },
          },
          directives: [],
          loc: { start: 1680, end: 1733 },
        },
      ],
      loc: { start: 1639, end: 1735 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1742, end: 1746 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1751, end: 1753 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1755, end: 1757 },
              },
              loc: { start: 1755, end: 1757 },
            },
            loc: { start: 1755, end: 1758 },
          },
          directives: [],
          loc: { start: 1751, end: 1758 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1761, end: 1765 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1767, end: 1773 },
            },
            loc: { start: 1767, end: 1773 },
          },
          directives: [],
          loc: { start: 1761, end: 1773 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1776, end: 1787 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1789, end: 1795 },
              },
              loc: { start: 1789, end: 1795 },
            },
            loc: { start: 1789, end: 1796 },
          },
          directives: [],
          loc: { start: 1776, end: 1796 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1799, end: 1813 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1815, end: 1821 },
            },
            loc: { start: 1815, end: 1821 },
          },
          directives: [],
          loc: { start: 1799, end: 1821 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1824, end: 1838 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1840, end: 1846 },
            },
            loc: { start: 1840, end: 1846 },
          },
          directives: [],
          loc: { start: 1824, end: 1846 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1849, end: 1862 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1864, end: 1870 },
            },
            loc: { start: 1864, end: 1870 },
          },
          directives: [],
          loc: { start: 1849, end: 1870 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1873, end: 1888 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1890, end: 1896 },
            },
            loc: { start: 1890, end: 1896 },
          },
          directives: [],
          loc: { start: 1873, end: 1896 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1899, end: 1905 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1907, end: 1913 },
            },
            loc: { start: 1907, end: 1913 },
          },
          directives: [],
          loc: { start: 1899, end: 1913 },
        },
      ],
      loc: { start: 1737, end: 1915 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1922, end: 1932 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1937, end: 1943 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1945, end: 1949 },
            },
            loc: { start: 1945, end: 1949 },
          },
          directives: [],
          loc: { start: 1937, end: 1949 },
        },
      ],
      loc: { start: 1917, end: 1951 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1959, end: 1970 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1973, end: 1983 },
          },
          loc: { start: 1973, end: 1983 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1986, end: 1999 },
          },
          loc: { start: 1986, end: 1999 },
        },
      ],
      loc: { start: 1953, end: 1999 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'RelativeDefault',
        loc: { start: 2008, end: 2023 },
      },
      directives: [],
      loc: { start: 2001, end: 2023 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'RelativeNamedImport',
        loc: { start: 2031, end: 2050 },
      },
      directives: [],
      loc: { start: 2024, end: 2050 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'RelativeNamedImportWithAlias',
        loc: { start: 2058, end: 2086 },
      },
      directives: [],
      loc: { start: 2051, end: 2086 },
    },
  ],
  loc: { start: 0, end: 2086 },
} as unknown as DocumentNode;
