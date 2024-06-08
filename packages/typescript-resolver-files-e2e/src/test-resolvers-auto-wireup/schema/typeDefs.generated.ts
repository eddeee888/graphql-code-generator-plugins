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
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CustomLogicScalar',
        loc: { start: 444, end: 461 },
      },
      directives: [],
      loc: { start: 437, end: 461 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 470, end: 474 } },
      directives: [],
      loc: { start: 463, end: 474 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 480, end: 483 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 488, end: 490 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 492, end: 494 },
              },
              loc: { start: 492, end: 494 },
            },
            loc: { start: 492, end: 495 },
          },
          directives: [],
          loc: { start: 488, end: 495 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 498, end: 502 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 504, end: 510 },
              },
              loc: { start: 504, end: 510 },
            },
            loc: { start: 504, end: 511 },
          },
          directives: [],
          loc: { start: 498, end: 511 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'primaryOwner',
            loc: { start: 514, end: 526 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 528, end: 532 },
              },
              loc: { start: 528, end: 532 },
            },
            loc: { start: 528, end: 533 },
          },
          directives: [],
          loc: { start: 514, end: 533 },
        },
      ],
      loc: { start: 475, end: 535 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 549, end: 553 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pets', loc: { start: 558, end: 562 } },
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
                    value: 'Pet',
                    loc: { start: 565, end: 568 },
                  },
                  loc: { start: 565, end: 568 },
                },
                loc: { start: 565, end: 569 },
              },
              loc: { start: 564, end: 570 },
            },
            loc: { start: 564, end: 571 },
          },
          directives: [],
          loc: { start: 558, end: 571 },
        },
      ],
      loc: { start: 537, end: 573 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 586, end: 591 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 596, end: 605 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 606, end: 608 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 610, end: 612 },
                  },
                  loc: { start: 610, end: 612 },
                },
                loc: { start: 610, end: 613 },
              },
              directives: [],
              loc: { start: 606, end: 613 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 616, end: 632 },
              },
              loc: { start: 616, end: 632 },
            },
            loc: { start: 616, end: 633 },
          },
          directives: [],
          loc: { start: 596, end: 633 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 636, end: 655 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 656, end: 661 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 663, end: 687 },
                  },
                  loc: { start: 663, end: 687 },
                },
                loc: { start: 663, end: 688 },
              },
              directives: [],
              loc: { start: 656, end: 688 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 691, end: 717 },
              },
              loc: { start: 691, end: 717 },
            },
            loc: { start: 691, end: 718 },
          },
          directives: [],
          loc: { start: 636, end: 718 },
        },
      ],
      loc: { start: 574, end: 720 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 734, end: 742 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 747, end: 758 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 759, end: 764 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 766, end: 782 },
                  },
                  loc: { start: 766, end: 782 },
                },
                loc: { start: 766, end: 783 },
              },
              directives: [],
              loc: { start: 759, end: 783 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 786, end: 804 },
              },
              loc: { start: 786, end: 804 },
            },
            loc: { start: 786, end: 805 },
          },
          directives: [],
          loc: { start: 747, end: 805 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 808, end: 817 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 818, end: 823 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 825, end: 839 },
                  },
                  loc: { start: 825, end: 839 },
                },
                loc: { start: 825, end: 840 },
              },
              directives: [],
              loc: { start: 818, end: 840 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 843, end: 859 },
              },
              loc: { start: 843, end: 859 },
            },
            loc: { start: 843, end: 860 },
          },
          directives: [],
          loc: { start: 808, end: 860 },
        },
      ],
      loc: { start: 722, end: 862 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 869, end: 874 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 879, end: 881 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 883, end: 885 },
              },
              loc: { start: 883, end: 885 },
            },
            loc: { start: 883, end: 886 },
          },
          directives: [],
          loc: { start: 879, end: 886 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 889, end: 893 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 895, end: 901 },
              },
              loc: { start: 895, end: 901 },
            },
            loc: { start: 895, end: 902 },
          },
          directives: [],
          loc: { start: 889, end: 902 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 905, end: 908 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 910, end: 916 },
            },
            loc: { start: 910, end: 916 },
          },
          directives: [],
          loc: { start: 905, end: 916 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 919, end: 926 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 928, end: 932 },
              },
              loc: { start: 928, end: 932 },
            },
            loc: { start: 928, end: 933 },
          },
          directives: [],
          loc: { start: 919, end: 933 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 936, end: 945 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 947, end: 955 },
              },
              loc: { start: 947, end: 955 },
            },
            loc: { start: 947, end: 956 },
          },
          directives: [],
          loc: { start: 936, end: 956 },
        },
      ],
      loc: { start: 864, end: 958 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 965, end: 980 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 985, end: 991 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 993, end: 998 },
            },
            loc: { start: 993, end: 998 },
          },
          directives: [],
          loc: { start: 985, end: 998 },
        },
      ],
      loc: { start: 960, end: 1000 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1008, end: 1024 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1027, end: 1042 },
          },
          loc: { start: 1027, end: 1042 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1045, end: 1057 },
          },
          loc: { start: 1045, end: 1057 },
        },
      ],
      loc: { start: 1002, end: 1057 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1065, end: 1089 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1094, end: 1100 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1102, end: 1104 },
              },
              loc: { start: 1102, end: 1104 },
            },
            loc: { start: 1102, end: 1105 },
          },
          directives: [],
          loc: { start: 1094, end: 1105 },
        },
      ],
      loc: { start: 1059, end: 1107 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1114, end: 1139 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1144, end: 1150 },
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
                    loc: { start: 1153, end: 1158 },
                  },
                  loc: { start: 1153, end: 1158 },
                },
                loc: { start: 1153, end: 1159 },
              },
              loc: { start: 1152, end: 1160 },
            },
            loc: { start: 1152, end: 1161 },
          },
          directives: [],
          loc: { start: 1144, end: 1161 },
        },
      ],
      loc: { start: 1109, end: 1163 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1171, end: 1197 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1200, end: 1225 },
          },
          loc: { start: 1200, end: 1225 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1228, end: 1240 },
          },
          loc: { start: 1228, end: 1240 },
        },
      ],
      loc: { start: 1165, end: 1240 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1248, end: 1264 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1269, end: 1273 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1275, end: 1281 },
              },
              loc: { start: 1275, end: 1281 },
            },
            loc: { start: 1275, end: 1282 },
          },
          directives: [],
          loc: { start: 1269, end: 1282 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1285, end: 1288 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1290, end: 1296 },
            },
            loc: { start: 1290, end: 1296 },
          },
          directives: [],
          loc: { start: 1285, end: 1296 },
        },
      ],
      loc: { start: 1242, end: 1298 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1305, end: 1322 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1327, end: 1333 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1335, end: 1340 },
              },
              loc: { start: 1335, end: 1340 },
            },
            loc: { start: 1335, end: 1341 },
          },
          directives: [],
          loc: { start: 1327, end: 1341 },
        },
      ],
      loc: { start: 1300, end: 1343 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1351, end: 1369 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1372, end: 1389 },
          },
          loc: { start: 1372, end: 1389 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1392, end: 1404 },
          },
          loc: { start: 1392, end: 1404 },
        },
      ],
      loc: { start: 1345, end: 1404 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1412, end: 1426 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1431, end: 1433 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1435, end: 1437 },
              },
              loc: { start: 1435, end: 1437 },
            },
            loc: { start: 1435, end: 1438 },
          },
          directives: [],
          loc: { start: 1431, end: 1438 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1441, end: 1445 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1447, end: 1453 },
              },
              loc: { start: 1447, end: 1453 },
            },
            loc: { start: 1447, end: 1454 },
          },
          directives: [],
          loc: { start: 1441, end: 1454 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1457, end: 1460 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1462, end: 1468 },
            },
            loc: { start: 1462, end: 1468 },
          },
          directives: [],
          loc: { start: 1457, end: 1468 },
        },
      ],
      loc: { start: 1406, end: 1470 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1477, end: 1492 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1497, end: 1503 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1505, end: 1510 },
              },
              loc: { start: 1505, end: 1510 },
            },
            loc: { start: 1505, end: 1511 },
          },
          directives: [],
          loc: { start: 1497, end: 1511 },
        },
      ],
      loc: { start: 1472, end: 1513 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1521, end: 1537 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1540, end: 1555 },
          },
          loc: { start: 1540, end: 1555 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1558, end: 1570 },
          },
          loc: { start: 1558, end: 1570 },
        },
      ],
      loc: { start: 1515, end: 1570 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1583, end: 1595 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1600, end: 1614 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1616, end: 1623 },
              },
              loc: { start: 1616, end: 1623 },
            },
            loc: { start: 1616, end: 1624 },
          },
          directives: [],
          loc: { start: 1600, end: 1624 },
        },
      ],
      loc: { start: 1571, end: 1626 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1633, end: 1640 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1645, end: 1647 } },
          arguments: [],
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
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1655, end: 1659 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1661, end: 1665 },
              },
              loc: { start: 1661, end: 1665 },
            },
            loc: { start: 1661, end: 1666 },
          },
          directives: [],
          loc: { start: 1655, end: 1666 },
        },
      ],
      loc: { start: 1628, end: 1668 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1681, end: 1686 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1691, end: 1693 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1695, end: 1706 },
              },
              loc: { start: 1695, end: 1706 },
            },
            loc: { start: 1695, end: 1707 },
          },
          directives: [],
          loc: { start: 1691, end: 1707 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1710, end: 1727 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1728, end: 1739 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1741, end: 1747 },
                  },
                  loc: { start: 1741, end: 1747 },
                },
                loc: { start: 1741, end: 1748 },
              },
              directives: [],
              loc: { start: 1728, end: 1748 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1751, end: 1762 },
              },
              loc: { start: 1751, end: 1762 },
            },
            loc: { start: 1751, end: 1763 },
          },
          directives: [],
          loc: { start: 1710, end: 1763 },
        },
      ],
      loc: { start: 1669, end: 1765 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1772, end: 1776 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1781, end: 1783 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1785, end: 1787 },
              },
              loc: { start: 1785, end: 1787 },
            },
            loc: { start: 1785, end: 1788 },
          },
          directives: [],
          loc: { start: 1781, end: 1788 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1791, end: 1795 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1797, end: 1803 },
            },
            loc: { start: 1797, end: 1803 },
          },
          directives: [],
          loc: { start: 1791, end: 1803 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1806, end: 1817 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1819, end: 1825 },
              },
              loc: { start: 1819, end: 1825 },
            },
            loc: { start: 1819, end: 1826 },
          },
          directives: [],
          loc: { start: 1806, end: 1826 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1829, end: 1843 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1845, end: 1851 },
            },
            loc: { start: 1845, end: 1851 },
          },
          directives: [],
          loc: { start: 1829, end: 1851 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1854, end: 1868 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1870, end: 1876 },
            },
            loc: { start: 1870, end: 1876 },
          },
          directives: [],
          loc: { start: 1854, end: 1876 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1879, end: 1892 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1894, end: 1900 },
            },
            loc: { start: 1894, end: 1900 },
          },
          directives: [],
          loc: { start: 1879, end: 1900 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1903, end: 1918 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1920, end: 1926 },
            },
            loc: { start: 1920, end: 1926 },
          },
          directives: [],
          loc: { start: 1903, end: 1926 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1929, end: 1935 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1937, end: 1943 },
            },
            loc: { start: 1937, end: 1943 },
          },
          directives: [],
          loc: { start: 1929, end: 1943 },
        },
      ],
      loc: { start: 1767, end: 1945 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1952, end: 1962 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1967, end: 1973 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1975, end: 1979 },
            },
            loc: { start: 1975, end: 1979 },
          },
          directives: [],
          loc: { start: 1967, end: 1979 },
        },
      ],
      loc: { start: 1947, end: 1981 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1989, end: 2000 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2003, end: 2013 },
          },
          loc: { start: 2003, end: 2013 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 2016, end: 2028 },
          },
          loc: { start: 2016, end: 2028 },
        },
      ],
      loc: { start: 1983, end: 2028 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Zoo', loc: { start: 2034, end: 2037 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2042, end: 2044 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2046, end: 2048 },
              },
              loc: { start: 2046, end: 2048 },
            },
            loc: { start: 2046, end: 2049 },
          },
          directives: [],
          loc: { start: 2042, end: 2049 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2052, end: 2056 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2058, end: 2064 },
              },
              loc: { start: 2058, end: 2064 },
            },
            loc: { start: 2058, end: 2065 },
          },
          directives: [],
          loc: { start: 2052, end: 2065 },
        },
      ],
      loc: { start: 2029, end: 2067 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Profile', loc: { start: 2081, end: 2088 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'zoo', loc: { start: 2093, end: 2096 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Zoo',
                loc: { start: 2098, end: 2101 },
              },
              loc: { start: 2098, end: 2101 },
            },
            loc: { start: 2098, end: 2102 },
          },
          directives: [],
          loc: { start: 2093, end: 2102 },
        },
      ],
      loc: { start: 2069, end: 2104 },
    },
  ],
  loc: { start: 0, end: 2105 },
} as unknown as DocumentNode;
