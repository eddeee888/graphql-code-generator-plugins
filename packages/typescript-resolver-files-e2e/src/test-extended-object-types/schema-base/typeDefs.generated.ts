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
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 448, end: 453 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 458, end: 467 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 468, end: 470 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 472, end: 474 },
                  },
                  loc: { start: 472, end: 474 },
                },
                loc: { start: 472, end: 475 },
              },
              directives: [],
              loc: { start: 468, end: 475 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 478, end: 494 },
              },
              loc: { start: 478, end: 494 },
            },
            loc: { start: 478, end: 495 },
          },
          directives: [],
          loc: { start: 458, end: 495 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 498, end: 517 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 518, end: 523 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 525, end: 549 },
                  },
                  loc: { start: 525, end: 549 },
                },
                loc: { start: 525, end: 550 },
              },
              directives: [],
              loc: { start: 518, end: 550 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 553, end: 579 },
              },
              loc: { start: 553, end: 579 },
            },
            loc: { start: 553, end: 580 },
          },
          directives: [],
          loc: { start: 498, end: 580 },
        },
      ],
      loc: { start: 436, end: 582 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 596, end: 604 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 609, end: 620 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 621, end: 626 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 628, end: 644 },
                  },
                  loc: { start: 628, end: 644 },
                },
                loc: { start: 628, end: 645 },
              },
              directives: [],
              loc: { start: 621, end: 645 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 648, end: 666 },
              },
              loc: { start: 648, end: 666 },
            },
            loc: { start: 648, end: 667 },
          },
          directives: [],
          loc: { start: 609, end: 667 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 670, end: 679 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 680, end: 685 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 687, end: 701 },
                  },
                  loc: { start: 687, end: 701 },
                },
                loc: { start: 687, end: 702 },
              },
              directives: [],
              loc: { start: 680, end: 702 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 705, end: 721 },
              },
              loc: { start: 705, end: 721 },
            },
            loc: { start: 705, end: 722 },
          },
          directives: [],
          loc: { start: 670, end: 722 },
        },
      ],
      loc: { start: 584, end: 724 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 731, end: 736 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 741, end: 743 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 745, end: 747 },
              },
              loc: { start: 745, end: 747 },
            },
            loc: { start: 745, end: 748 },
          },
          directives: [],
          loc: { start: 741, end: 748 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 751, end: 755 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 757, end: 763 },
              },
              loc: { start: 757, end: 763 },
            },
            loc: { start: 757, end: 764 },
          },
          directives: [],
          loc: { start: 751, end: 764 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 767, end: 770 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 772, end: 778 },
            },
            loc: { start: 772, end: 778 },
          },
          directives: [],
          loc: { start: 767, end: 778 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 781, end: 790 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 792, end: 800 },
              },
              loc: { start: 792, end: 800 },
            },
            loc: { start: 792, end: 801 },
          },
          directives: [],
          loc: { start: 781, end: 801 },
        },
      ],
      loc: { start: 726, end: 803 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 817, end: 822 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInTheSameFileAndSameModule1',
            loc: { start: 827, end: 872 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 874, end: 881 },
              },
              loc: { start: 874, end: 881 },
            },
            loc: { start: 874, end: 882 },
          },
          directives: [],
          loc: { start: 827, end: 882 },
        },
      ],
      loc: { start: 805, end: 884 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 898, end: 903 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInTheSameFileAndSameModule2',
            loc: { start: 908, end: 953 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 955, end: 962 },
              },
              loc: { start: 955, end: 962 },
            },
            loc: { start: 955, end: 963 },
          },
          directives: [],
          loc: { start: 908, end: 963 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInTheSameFileAndSameModule3',
            loc: { start: 966, end: 1011 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1013, end: 1020 },
              },
              loc: { start: 1013, end: 1020 },
            },
            loc: { start: 1013, end: 1021 },
          },
          directives: [],
          loc: { start: 966, end: 1021 },
        },
      ],
      loc: { start: 886, end: 1023 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1030, end: 1045 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1050, end: 1056 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1058, end: 1063 },
            },
            loc: { start: 1058, end: 1063 },
          },
          directives: [],
          loc: { start: 1050, end: 1063 },
        },
      ],
      loc: { start: 1025, end: 1065 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1073, end: 1089 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1092, end: 1107 },
          },
          loc: { start: 1092, end: 1107 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1110, end: 1122 },
          },
          loc: { start: 1110, end: 1122 },
        },
      ],
      loc: { start: 1067, end: 1122 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1130, end: 1154 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1159, end: 1165 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1167, end: 1169 },
              },
              loc: { start: 1167, end: 1169 },
            },
            loc: { start: 1167, end: 1170 },
          },
          directives: [],
          loc: { start: 1159, end: 1170 },
        },
      ],
      loc: { start: 1124, end: 1172 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1179, end: 1204 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1209, end: 1215 },
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
                    loc: { start: 1218, end: 1223 },
                  },
                  loc: { start: 1218, end: 1223 },
                },
                loc: { start: 1218, end: 1224 },
              },
              loc: { start: 1217, end: 1225 },
            },
            loc: { start: 1217, end: 1226 },
          },
          directives: [],
          loc: { start: 1209, end: 1226 },
        },
      ],
      loc: { start: 1174, end: 1228 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1236, end: 1262 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1265, end: 1290 },
          },
          loc: { start: 1265, end: 1290 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1293, end: 1305 },
          },
          loc: { start: 1293, end: 1305 },
        },
      ],
      loc: { start: 1230, end: 1305 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1313, end: 1329 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1334, end: 1338 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1340, end: 1346 },
              },
              loc: { start: 1340, end: 1346 },
            },
            loc: { start: 1340, end: 1347 },
          },
          directives: [],
          loc: { start: 1334, end: 1347 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1350, end: 1353 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1355, end: 1361 },
            },
            loc: { start: 1355, end: 1361 },
          },
          directives: [],
          loc: { start: 1350, end: 1361 },
        },
      ],
      loc: { start: 1307, end: 1363 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1370, end: 1387 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1392, end: 1398 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1400, end: 1405 },
              },
              loc: { start: 1400, end: 1405 },
            },
            loc: { start: 1400, end: 1406 },
          },
          directives: [],
          loc: { start: 1392, end: 1406 },
        },
      ],
      loc: { start: 1365, end: 1408 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1416, end: 1434 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1437, end: 1454 },
          },
          loc: { start: 1437, end: 1454 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1457, end: 1469 },
          },
          loc: { start: 1457, end: 1469 },
        },
      ],
      loc: { start: 1410, end: 1469 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1477, end: 1491 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1496, end: 1498 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1500, end: 1502 },
              },
              loc: { start: 1500, end: 1502 },
            },
            loc: { start: 1500, end: 1503 },
          },
          directives: [],
          loc: { start: 1496, end: 1503 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1506, end: 1510 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1512, end: 1518 },
              },
              loc: { start: 1512, end: 1518 },
            },
            loc: { start: 1512, end: 1519 },
          },
          directives: [],
          loc: { start: 1506, end: 1519 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1522, end: 1525 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1527, end: 1533 },
            },
            loc: { start: 1527, end: 1533 },
          },
          directives: [],
          loc: { start: 1522, end: 1533 },
        },
      ],
      loc: { start: 1471, end: 1535 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1542, end: 1557 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1562, end: 1568 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1570, end: 1575 },
              },
              loc: { start: 1570, end: 1575 },
            },
            loc: { start: 1570, end: 1576 },
          },
          directives: [],
          loc: { start: 1562, end: 1576 },
        },
      ],
      loc: { start: 1537, end: 1578 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1586, end: 1602 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1605, end: 1620 },
          },
          loc: { start: 1605, end: 1620 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1623, end: 1635 },
          },
          loc: { start: 1623, end: 1635 },
        },
      ],
      loc: { start: 1580, end: 1635 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1648, end: 1653 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndSameModule1',
            loc: { start: 1658, end: 1705 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1707, end: 1712 },
              },
              loc: { start: 1707, end: 1712 },
            },
            loc: { start: 1707, end: 1713 },
          },
          directives: [],
          loc: { start: 1658, end: 1713 },
        },
      ],
      loc: { start: 1636, end: 1715 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1728, end: 1733 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndSameModule2',
            loc: { start: 1738, end: 1785 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1787, end: 1792 },
              },
              loc: { start: 1787, end: 1792 },
            },
            loc: { start: 1787, end: 1793 },
          },
          directives: [],
          loc: { start: 1738, end: 1793 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndSameModule3',
            loc: { start: 1796, end: 1843 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1845, end: 1850 },
              },
              loc: { start: 1845, end: 1850 },
            },
            loc: { start: 1845, end: 1851 },
          },
          directives: [],
          loc: { start: 1796, end: 1851 },
        },
      ],
      loc: { start: 1716, end: 1853 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1866, end: 1878 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1883, end: 1897 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1899, end: 1906 },
              },
              loc: { start: 1899, end: 1906 },
            },
            loc: { start: 1899, end: 1907 },
          },
          directives: [],
          loc: { start: 1883, end: 1907 },
        },
      ],
      loc: { start: 1854, end: 1909 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1916, end: 1923 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1928, end: 1930 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1932, end: 1934 },
              },
              loc: { start: 1932, end: 1934 },
            },
            loc: { start: 1932, end: 1935 },
          },
          directives: [],
          loc: { start: 1928, end: 1935 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1938, end: 1942 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1944, end: 1948 },
              },
              loc: { start: 1944, end: 1948 },
            },
            loc: { start: 1944, end: 1949 },
          },
          directives: [],
          loc: { start: 1938, end: 1949 },
        },
      ],
      loc: { start: 1911, end: 1951 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1965, end: 1970 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 1975, end: 1982 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1984, end: 1988 },
              },
              loc: { start: 1984, end: 1988 },
            },
            loc: { start: 1984, end: 1989 },
          },
          directives: [],
          loc: { start: 1975, end: 1989 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndDifferentModule1',
            loc: { start: 1992, end: 2044 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 2046, end: 2053 },
              },
              loc: { start: 2046, end: 2053 },
            },
            loc: { start: 2046, end: 2054 },
          },
          directives: [],
          loc: { start: 1992, end: 2054 },
        },
      ],
      loc: { start: 1953, end: 2056 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2069, end: 2074 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 2079, end: 2081 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2083, end: 2094 },
              },
              loc: { start: 2083, end: 2094 },
            },
            loc: { start: 2083, end: 2095 },
          },
          directives: [],
          loc: { start: 2079, end: 2095 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 2098, end: 2115 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 2116, end: 2127 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 2129, end: 2135 },
                  },
                  loc: { start: 2129, end: 2135 },
                },
                loc: { start: 2129, end: 2136 },
              },
              directives: [],
              loc: { start: 2116, end: 2136 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2139, end: 2150 },
              },
              loc: { start: 2139, end: 2150 },
            },
            loc: { start: 2139, end: 2151 },
          },
          directives: [],
          loc: { start: 2098, end: 2151 },
        },
      ],
      loc: { start: 2057, end: 2153 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 2160, end: 2164 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2169, end: 2171 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2173, end: 2175 },
              },
              loc: { start: 2173, end: 2175 },
            },
            loc: { start: 2173, end: 2176 },
          },
          directives: [],
          loc: { start: 2169, end: 2176 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2179, end: 2183 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2185, end: 2191 },
            },
            loc: { start: 2185, end: 2191 },
          },
          directives: [],
          loc: { start: 2179, end: 2191 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 2194, end: 2205 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2207, end: 2213 },
              },
              loc: { start: 2207, end: 2213 },
            },
            loc: { start: 2207, end: 2214 },
          },
          directives: [],
          loc: { start: 2194, end: 2214 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 2217, end: 2231 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2233, end: 2239 },
            },
            loc: { start: 2233, end: 2239 },
          },
          directives: [],
          loc: { start: 2217, end: 2239 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 2242, end: 2256 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2258, end: 2264 },
            },
            loc: { start: 2258, end: 2264 },
          },
          directives: [],
          loc: { start: 2242, end: 2264 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 2267, end: 2280 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2282, end: 2288 },
            },
            loc: { start: 2282, end: 2288 },
          },
          directives: [],
          loc: { start: 2267, end: 2288 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 2291, end: 2306 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2308, end: 2314 },
            },
            loc: { start: 2308, end: 2314 },
          },
          directives: [],
          loc: { start: 2291, end: 2314 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 2317, end: 2323 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2325, end: 2331 },
            },
            loc: { start: 2325, end: 2331 },
          },
          directives: [],
          loc: { start: 2317, end: 2331 },
        },
      ],
      loc: { start: 2155, end: 2333 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 2340, end: 2350 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2355, end: 2361 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2363, end: 2367 },
            },
            loc: { start: 2363, end: 2367 },
          },
          directives: [],
          loc: { start: 2355, end: 2367 },
        },
      ],
      loc: { start: 2335, end: 2369 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2377, end: 2388 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2391, end: 2401 },
          },
          loc: { start: 2391, end: 2401 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 2404, end: 2416 },
          },
          loc: { start: 2404, end: 2416 },
        },
      ],
      loc: { start: 2371, end: 2416 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 2430, end: 2435 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndDifferentModule2',
            loc: { start: 2440, end: 2492 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2494, end: 2498 },
              },
              loc: { start: 2494, end: 2498 },
            },
            loc: { start: 2494, end: 2499 },
          },
          directives: [],
          loc: { start: 2440, end: 2499 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'extendedTopicFieldInDifferentFileAndDifferentModule3',
            loc: { start: 2502, end: 2554 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2556, end: 2560 },
              },
              loc: { start: 2556, end: 2560 },
            },
            loc: { start: 2556, end: 2561 },
          },
          directives: [],
          loc: { start: 2502, end: 2561 },
        },
      ],
      loc: { start: 2418, end: 2563 },
    },
  ],
  loc: { start: 0, end: 2564 },
} as unknown as DocumentNode;
