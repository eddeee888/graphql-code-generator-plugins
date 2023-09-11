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
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 32, end: 44 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 27, end: 44 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 56, end: 61 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 66, end: 71 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 73, end: 82 },
              },
              loc: { start: 73, end: 82 },
            },
            loc: { start: 73, end: 83 },
          },
          directives: [],
          loc: { start: 66, end: 83 },
        },
      ],
      loc: { start: 46, end: 85 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PayloadError',
        loc: { start: 92, end: 104 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 116, end: 121 } },
          loc: { start: 116, end: 121 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 126, end: 131 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 133, end: 142 },
              },
              loc: { start: 133, end: 142 },
            },
            loc: { start: 133, end: 143 },
          },
          directives: [],
          loc: { start: 126, end: 143 },
        },
      ],
      loc: { start: 87, end: 145 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 152, end: 161 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 166, end: 175 },
          },
          directives: [],
          loc: { start: 166, end: 175 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 178, end: 200 },
          },
          directives: [],
          loc: { start: 178, end: 200 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 203, end: 218 },
          },
          directives: [],
          loc: { start: 203, end: 218 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 221, end: 237 },
          },
          directives: [],
          loc: { start: 221, end: 237 },
        },
      ],
      loc: { start: 147, end: 239 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 247, end: 262 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 267, end: 281 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 283, end: 286 } },
            loc: { start: 283, end: 286 },
          },
          directives: [],
          loc: { start: 267, end: 286 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 289, end: 293 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 295, end: 298 } },
            loc: { start: 295, end: 298 },
          },
          directives: [],
          loc: { start: 289, end: 298 },
        },
      ],
      loc: { start: 241, end: 300 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 307, end: 323 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 328, end: 339 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 341, end: 344 },
              },
              loc: { start: 341, end: 344 },
            },
            loc: { start: 341, end: 345 },
          },
          directives: [],
          loc: { start: 328, end: 345 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 348, end: 362 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 364, end: 367 },
              },
              loc: { start: 364, end: 367 },
            },
            loc: { start: 364, end: 368 },
          },
          directives: [],
          loc: { start: 348, end: 368 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 371, end: 385 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 387, end: 390 },
              },
              loc: { start: 387, end: 390 },
            },
            loc: { start: 387, end: 391 },
          },
          directives: [],
          loc: { start: 371, end: 391 },
        },
      ],
      loc: { start: 302, end: 393 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 402, end: 410 } },
      directives: [],
      loc: { start: 395, end: 410 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SomeRandomScalar',
        loc: { start: 419, end: 435 },
      },
      directives: [],
      loc: { start: 412, end: 435 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BookStore_New',
        loc: { start: 441, end: 454 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 459, end: 461 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 463, end: 465 },
              },
              loc: { start: 463, end: 465 },
            },
            loc: { start: 463, end: 466 },
          },
          directives: [],
          loc: { start: 459, end: 466 },
        },
      ],
      loc: { start: 436, end: 468 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 482, end: 487 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bookStore_for_topic',
            loc: { start: 492, end: 511 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BookStore_New',
              loc: { start: 513, end: 526 },
            },
            loc: { start: 513, end: 526 },
          },
          directives: [],
          loc: { start: 492, end: 526 },
        },
      ],
      loc: { start: 470, end: 528 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 542, end: 546 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bookStore_4_user',
            loc: { start: 551, end: 567 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BookStore_New',
              loc: { start: 569, end: 582 },
            },
            loc: { start: 569, end: 582 },
          },
          directives: [],
          loc: { start: 551, end: 582 },
        },
      ],
      loc: { start: 530, end: 584 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 597, end: 602 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 607, end: 616 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 617, end: 619 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 621, end: 623 },
                  },
                  loc: { start: 621, end: 623 },
                },
                loc: { start: 621, end: 624 },
              },
              directives: [],
              loc: { start: 617, end: 624 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 627, end: 643 },
              },
              loc: { start: 627, end: 643 },
            },
            loc: { start: 627, end: 644 },
          },
          directives: [],
          loc: { start: 607, end: 644 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 647, end: 666 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 667, end: 672 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 674, end: 698 },
                  },
                  loc: { start: 674, end: 698 },
                },
                loc: { start: 674, end: 699 },
              },
              directives: [],
              loc: { start: 667, end: 699 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 702, end: 728 },
              },
              loc: { start: 702, end: 728 },
            },
            loc: { start: 702, end: 729 },
          },
          directives: [],
          loc: { start: 647, end: 729 },
        },
      ],
      loc: { start: 585, end: 731 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 745, end: 753 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 758, end: 769 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 770, end: 775 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 777, end: 793 },
                  },
                  loc: { start: 777, end: 793 },
                },
                loc: { start: 777, end: 794 },
              },
              directives: [],
              loc: { start: 770, end: 794 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 797, end: 815 },
              },
              loc: { start: 797, end: 815 },
            },
            loc: { start: 797, end: 816 },
          },
          directives: [],
          loc: { start: 758, end: 816 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 819, end: 828 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 829, end: 834 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 836, end: 850 },
                  },
                  loc: { start: 836, end: 850 },
                },
                loc: { start: 836, end: 851 },
              },
              directives: [],
              loc: { start: 829, end: 851 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 854, end: 870 },
              },
              loc: { start: 854, end: 870 },
            },
            loc: { start: 854, end: 871 },
          },
          directives: [],
          loc: { start: 819, end: 871 },
        },
      ],
      loc: { start: 733, end: 873 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 880, end: 885 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 890, end: 892 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 894, end: 896 },
              },
              loc: { start: 894, end: 896 },
            },
            loc: { start: 894, end: 897 },
          },
          directives: [],
          loc: { start: 890, end: 897 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 900, end: 904 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 906, end: 912 },
              },
              loc: { start: 906, end: 912 },
            },
            loc: { start: 906, end: 913 },
          },
          directives: [],
          loc: { start: 900, end: 913 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 916, end: 919 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 921, end: 927 },
            },
            loc: { start: 921, end: 927 },
          },
          directives: [],
          loc: { start: 916, end: 927 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 930, end: 939 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 941, end: 949 },
              },
              loc: { start: 941, end: 949 },
            },
            loc: { start: 941, end: 950 },
          },
          directives: [],
          loc: { start: 930, end: 950 },
        },
      ],
      loc: { start: 875, end: 952 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 966, end: 971 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInTheSameFileAndSameModule1',
            loc: { start: 976, end: 1021 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1023, end: 1030 },
              },
              loc: { start: 1023, end: 1030 },
            },
            loc: { start: 1023, end: 1031 },
          },
          directives: [],
          loc: { start: 976, end: 1031 },
        },
      ],
      loc: { start: 954, end: 1033 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1047, end: 1052 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInTheSameFileAndSameModule2',
            loc: { start: 1057, end: 1102 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1104, end: 1111 },
              },
              loc: { start: 1104, end: 1111 },
            },
            loc: { start: 1104, end: 1112 },
          },
          directives: [],
          loc: { start: 1057, end: 1112 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInTheSameFileAndSameModule3',
            loc: { start: 1115, end: 1160 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1162, end: 1169 },
              },
              loc: { start: 1162, end: 1169 },
            },
            loc: { start: 1162, end: 1170 },
          },
          directives: [],
          loc: { start: 1115, end: 1170 },
        },
      ],
      loc: { start: 1035, end: 1172 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1179, end: 1194 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1199, end: 1205 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1207, end: 1212 },
            },
            loc: { start: 1207, end: 1212 },
          },
          directives: [],
          loc: { start: 1199, end: 1212 },
        },
      ],
      loc: { start: 1174, end: 1214 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1222, end: 1238 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1241, end: 1256 },
          },
          loc: { start: 1241, end: 1256 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1259, end: 1271 },
          },
          loc: { start: 1259, end: 1271 },
        },
      ],
      loc: { start: 1216, end: 1271 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1279, end: 1303 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1308, end: 1314 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1316, end: 1318 },
              },
              loc: { start: 1316, end: 1318 },
            },
            loc: { start: 1316, end: 1319 },
          },
          directives: [],
          loc: { start: 1308, end: 1319 },
        },
      ],
      loc: { start: 1273, end: 1321 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1328, end: 1353 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1358, end: 1364 },
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
                    loc: { start: 1367, end: 1372 },
                  },
                  loc: { start: 1367, end: 1372 },
                },
                loc: { start: 1367, end: 1373 },
              },
              loc: { start: 1366, end: 1374 },
            },
            loc: { start: 1366, end: 1375 },
          },
          directives: [],
          loc: { start: 1358, end: 1375 },
        },
      ],
      loc: { start: 1323, end: 1377 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1385, end: 1411 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1414, end: 1439 },
          },
          loc: { start: 1414, end: 1439 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1442, end: 1454 },
          },
          loc: { start: 1442, end: 1454 },
        },
      ],
      loc: { start: 1379, end: 1454 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1462, end: 1478 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1483, end: 1487 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1489, end: 1495 },
              },
              loc: { start: 1489, end: 1495 },
            },
            loc: { start: 1489, end: 1496 },
          },
          directives: [],
          loc: { start: 1483, end: 1496 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1499, end: 1502 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1504, end: 1510 },
            },
            loc: { start: 1504, end: 1510 },
          },
          directives: [],
          loc: { start: 1499, end: 1510 },
        },
      ],
      loc: { start: 1456, end: 1512 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1519, end: 1536 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1541, end: 1547 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1549, end: 1554 },
              },
              loc: { start: 1549, end: 1554 },
            },
            loc: { start: 1549, end: 1555 },
          },
          directives: [],
          loc: { start: 1541, end: 1555 },
        },
      ],
      loc: { start: 1514, end: 1557 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1565, end: 1583 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1586, end: 1603 },
          },
          loc: { start: 1586, end: 1603 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1606, end: 1618 },
          },
          loc: { start: 1606, end: 1618 },
        },
      ],
      loc: { start: 1559, end: 1618 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1626, end: 1640 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1645, end: 1647 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1649, end: 1651 },
              },
              loc: { start: 1649, end: 1651 },
            },
            loc: { start: 1649, end: 1652 },
          },
          directives: [],
          loc: { start: 1645, end: 1652 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1655, end: 1659 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1661, end: 1667 },
              },
              loc: { start: 1661, end: 1667 },
            },
            loc: { start: 1661, end: 1668 },
          },
          directives: [],
          loc: { start: 1655, end: 1668 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1671, end: 1674 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1676, end: 1682 },
            },
            loc: { start: 1676, end: 1682 },
          },
          directives: [],
          loc: { start: 1671, end: 1682 },
        },
      ],
      loc: { start: 1620, end: 1684 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1691, end: 1706 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1711, end: 1717 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1719, end: 1724 },
              },
              loc: { start: 1719, end: 1724 },
            },
            loc: { start: 1719, end: 1725 },
          },
          directives: [],
          loc: { start: 1711, end: 1725 },
        },
      ],
      loc: { start: 1686, end: 1727 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1735, end: 1751 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1754, end: 1769 },
          },
          loc: { start: 1754, end: 1769 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1772, end: 1784 },
          },
          loc: { start: 1772, end: 1784 },
        },
      ],
      loc: { start: 1729, end: 1784 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1797, end: 1802 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndSameModule1',
            loc: { start: 1807, end: 1854 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1856, end: 1861 },
              },
              loc: { start: 1856, end: 1861 },
            },
            loc: { start: 1856, end: 1862 },
          },
          directives: [],
          loc: { start: 1807, end: 1862 },
        },
      ],
      loc: { start: 1785, end: 1864 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1877, end: 1882 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndSameModule2',
            loc: { start: 1887, end: 1934 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1936, end: 1941 },
              },
              loc: { start: 1936, end: 1941 },
            },
            loc: { start: 1936, end: 1942 },
          },
          directives: [],
          loc: { start: 1887, end: 1942 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndSameModule3',
            loc: { start: 1945, end: 1992 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1994, end: 1999 },
              },
              loc: { start: 1994, end: 1999 },
            },
            loc: { start: 1994, end: 2000 },
          },
          directives: [],
          loc: { start: 1945, end: 2000 },
        },
      ],
      loc: { start: 1865, end: 2002 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 2015, end: 2027 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 2032, end: 2046 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 2048, end: 2055 },
              },
              loc: { start: 2048, end: 2055 },
            },
            loc: { start: 2048, end: 2056 },
          },
          directives: [],
          loc: { start: 2032, end: 2056 },
        },
      ],
      loc: { start: 2003, end: 2058 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 2065, end: 2072 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2077, end: 2079 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2081, end: 2083 },
              },
              loc: { start: 2081, end: 2083 },
            },
            loc: { start: 2081, end: 2084 },
          },
          directives: [],
          loc: { start: 2077, end: 2084 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 2087, end: 2091 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2093, end: 2097 },
              },
              loc: { start: 2093, end: 2097 },
            },
            loc: { start: 2093, end: 2098 },
          },
          directives: [],
          loc: { start: 2087, end: 2098 },
        },
      ],
      loc: { start: 2060, end: 2100 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 2114, end: 2119 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 2124, end: 2131 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2133, end: 2137 },
              },
              loc: { start: 2133, end: 2137 },
            },
            loc: { start: 2133, end: 2138 },
          },
          directives: [],
          loc: { start: 2124, end: 2138 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndDifferentModule1',
            loc: { start: 2141, end: 2193 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 2195, end: 2202 },
              },
              loc: { start: 2195, end: 2202 },
            },
            loc: { start: 2195, end: 2203 },
          },
          directives: [],
          loc: { start: 2141, end: 2203 },
        },
      ],
      loc: { start: 2102, end: 2205 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2218, end: 2223 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 2228, end: 2230 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2232, end: 2243 },
              },
              loc: { start: 2232, end: 2243 },
            },
            loc: { start: 2232, end: 2244 },
          },
          directives: [],
          loc: { start: 2228, end: 2244 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 2247, end: 2264 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 2265, end: 2276 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 2278, end: 2284 },
                  },
                  loc: { start: 2278, end: 2284 },
                },
                loc: { start: 2278, end: 2285 },
              },
              directives: [],
              loc: { start: 2265, end: 2285 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2288, end: 2299 },
              },
              loc: { start: 2288, end: 2299 },
            },
            loc: { start: 2288, end: 2300 },
          },
          directives: [],
          loc: { start: 2247, end: 2300 },
        },
      ],
      loc: { start: 2206, end: 2302 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 2309, end: 2313 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2318, end: 2320 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2322, end: 2324 },
              },
              loc: { start: 2322, end: 2324 },
            },
            loc: { start: 2322, end: 2325 },
          },
          directives: [],
          loc: { start: 2318, end: 2325 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2328, end: 2332 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2334, end: 2340 },
            },
            loc: { start: 2334, end: 2340 },
          },
          directives: [],
          loc: { start: 2328, end: 2340 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 2343, end: 2354 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2356, end: 2362 },
              },
              loc: { start: 2356, end: 2362 },
            },
            loc: { start: 2356, end: 2363 },
          },
          directives: [],
          loc: { start: 2343, end: 2363 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 2366, end: 2380 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2382, end: 2388 },
            },
            loc: { start: 2382, end: 2388 },
          },
          directives: [],
          loc: { start: 2366, end: 2388 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 2391, end: 2405 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2407, end: 2413 },
            },
            loc: { start: 2407, end: 2413 },
          },
          directives: [],
          loc: { start: 2391, end: 2413 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 2416, end: 2429 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2431, end: 2437 },
            },
            loc: { start: 2431, end: 2437 },
          },
          directives: [],
          loc: { start: 2416, end: 2437 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 2440, end: 2455 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2457, end: 2463 },
            },
            loc: { start: 2457, end: 2463 },
          },
          directives: [],
          loc: { start: 2440, end: 2463 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 2466, end: 2472 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2474, end: 2480 },
            },
            loc: { start: 2474, end: 2480 },
          },
          directives: [],
          loc: { start: 2466, end: 2480 },
        },
      ],
      loc: { start: 2304, end: 2482 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 2489, end: 2499 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2504, end: 2510 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2512, end: 2516 },
            },
            loc: { start: 2512, end: 2516 },
          },
          directives: [],
          loc: { start: 2504, end: 2516 },
        },
      ],
      loc: { start: 2484, end: 2518 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2526, end: 2537 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2540, end: 2550 },
          },
          loc: { start: 2540, end: 2550 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 2553, end: 2565 },
          },
          loc: { start: 2553, end: 2565 },
        },
      ],
      loc: { start: 2520, end: 2565 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 2579, end: 2584 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndDifferentModule2',
            loc: { start: 2589, end: 2641 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2643, end: 2647 },
              },
              loc: { start: 2643, end: 2647 },
            },
            loc: { start: 2643, end: 2648 },
          },
          directives: [],
          loc: { start: 2589, end: 2648 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndDifferentModule3',
            loc: { start: 2651, end: 2703 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2705, end: 2709 },
              },
              loc: { start: 2705, end: 2709 },
            },
            loc: { start: 2705, end: 2710 },
          },
          directives: [],
          loc: { start: 2651, end: 2710 },
        },
      ],
      loc: { start: 2567, end: 2712 },
    },
  ],
  loc: { start: 0, end: 2713 },
} as unknown as DocumentNode;
