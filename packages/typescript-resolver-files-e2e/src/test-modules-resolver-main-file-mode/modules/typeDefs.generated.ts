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
        value: 'StandardError',
        loc: { start: 92, end: 105 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 117, end: 122 } },
          loc: { start: 117, end: 122 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 127, end: 132 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 134, end: 143 },
              },
              loc: { start: 134, end: 143 },
            },
            loc: { start: 134, end: 144 },
          },
          directives: [],
          loc: { start: 127, end: 144 },
        },
      ],
      loc: { start: 87, end: 146 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 153, end: 162 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 167, end: 176 },
          },
          directives: [],
          loc: { start: 167, end: 176 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 179, end: 201 },
          },
          directives: [],
          loc: { start: 179, end: 201 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 204, end: 219 },
          },
          directives: [],
          loc: { start: 204, end: 219 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 222, end: 238 },
          },
          directives: [],
          loc: { start: 222, end: 238 },
        },
      ],
      loc: { start: 148, end: 240 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 248, end: 263 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 268, end: 282 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 284, end: 287 } },
            loc: { start: 284, end: 287 },
          },
          directives: [],
          loc: { start: 268, end: 287 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 290, end: 294 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 296, end: 299 } },
            loc: { start: 296, end: 299 },
          },
          directives: [],
          loc: { start: 290, end: 299 },
        },
      ],
      loc: { start: 242, end: 301 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 308, end: 324 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 329, end: 340 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 342, end: 345 },
              },
              loc: { start: 342, end: 345 },
            },
            loc: { start: 342, end: 346 },
          },
          directives: [],
          loc: { start: 329, end: 346 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 349, end: 363 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 365, end: 368 },
              },
              loc: { start: 365, end: 368 },
            },
            loc: { start: 365, end: 369 },
          },
          directives: [],
          loc: { start: 349, end: 369 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 372, end: 386 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 388, end: 391 },
              },
              loc: { start: 388, end: 391 },
            },
            loc: { start: 388, end: 392 },
          },
          directives: [],
          loc: { start: 372, end: 392 },
        },
      ],
      loc: { start: 303, end: 394 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 403, end: 411 } },
      directives: [],
      loc: { start: 396, end: 411 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 424, end: 429 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 434, end: 443 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 444, end: 446 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 448, end: 450 },
                  },
                  loc: { start: 448, end: 450 },
                },
                loc: { start: 448, end: 451 },
              },
              directives: [],
              loc: { start: 444, end: 451 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 454, end: 470 },
              },
              loc: { start: 454, end: 470 },
            },
            loc: { start: 454, end: 471 },
          },
          directives: [],
          loc: { start: 434, end: 471 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 474, end: 493 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 494, end: 499 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 501, end: 525 },
                  },
                  loc: { start: 501, end: 525 },
                },
                loc: { start: 501, end: 526 },
              },
              directives: [],
              loc: { start: 494, end: 526 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 529, end: 555 },
              },
              loc: { start: 529, end: 555 },
            },
            loc: { start: 529, end: 556 },
          },
          directives: [],
          loc: { start: 474, end: 556 },
        },
      ],
      loc: { start: 412, end: 558 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 572, end: 580 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 585, end: 596 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 597, end: 602 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 604, end: 620 },
                  },
                  loc: { start: 604, end: 620 },
                },
                loc: { start: 604, end: 621 },
              },
              directives: [],
              loc: { start: 597, end: 621 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 624, end: 642 },
              },
              loc: { start: 624, end: 642 },
            },
            loc: { start: 624, end: 643 },
          },
          directives: [],
          loc: { start: 585, end: 643 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 646, end: 655 },
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
                    value: 'TopicEditInput',
                    loc: { start: 663, end: 677 },
                  },
                  loc: { start: 663, end: 677 },
                },
                loc: { start: 663, end: 678 },
              },
              directives: [],
              loc: { start: 656, end: 678 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 681, end: 697 },
              },
              loc: { start: 681, end: 697 },
            },
            loc: { start: 681, end: 698 },
          },
          directives: [],
          loc: { start: 646, end: 698 },
        },
      ],
      loc: { start: 560, end: 700 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 707, end: 712 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 717, end: 719 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 721, end: 723 },
              },
              loc: { start: 721, end: 723 },
            },
            loc: { start: 721, end: 724 },
          },
          directives: [],
          loc: { start: 717, end: 724 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 727, end: 731 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 733, end: 739 },
              },
              loc: { start: 733, end: 739 },
            },
            loc: { start: 733, end: 740 },
          },
          directives: [],
          loc: { start: 727, end: 740 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 743, end: 746 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 748, end: 754 },
            },
            loc: { start: 748, end: 754 },
          },
          directives: [],
          loc: { start: 743, end: 754 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 757, end: 764 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 766, end: 770 },
              },
              loc: { start: 766, end: 770 },
            },
            loc: { start: 766, end: 771 },
          },
          directives: [],
          loc: { start: 757, end: 771 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 774, end: 783 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 785, end: 793 },
              },
              loc: { start: 785, end: 793 },
            },
            loc: { start: 785, end: 794 },
          },
          directives: [],
          loc: { start: 774, end: 794 },
        },
      ],
      loc: { start: 702, end: 796 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 803, end: 818 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 823, end: 829 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 831, end: 836 },
            },
            loc: { start: 831, end: 836 },
          },
          directives: [],
          loc: { start: 823, end: 836 },
        },
      ],
      loc: { start: 798, end: 838 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 846, end: 862 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 865, end: 880 },
          },
          loc: { start: 865, end: 880 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 883, end: 896 },
          },
          loc: { start: 883, end: 896 },
        },
      ],
      loc: { start: 840, end: 896 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 904, end: 928 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 933, end: 939 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 941, end: 943 },
              },
              loc: { start: 941, end: 943 },
            },
            loc: { start: 941, end: 944 },
          },
          directives: [],
          loc: { start: 933, end: 944 },
        },
      ],
      loc: { start: 898, end: 946 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 953, end: 978 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 983, end: 989 },
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
                    loc: { start: 992, end: 997 },
                  },
                  loc: { start: 992, end: 997 },
                },
                loc: { start: 992, end: 998 },
              },
              loc: { start: 991, end: 999 },
            },
            loc: { start: 991, end: 1000 },
          },
          directives: [],
          loc: { start: 983, end: 1000 },
        },
      ],
      loc: { start: 948, end: 1002 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1010, end: 1036 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1039, end: 1064 },
          },
          loc: { start: 1039, end: 1064 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1067, end: 1080 },
          },
          loc: { start: 1067, end: 1080 },
        },
      ],
      loc: { start: 1004, end: 1080 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1088, end: 1104 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1109, end: 1113 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1115, end: 1121 },
              },
              loc: { start: 1115, end: 1121 },
            },
            loc: { start: 1115, end: 1122 },
          },
          directives: [],
          loc: { start: 1109, end: 1122 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1125, end: 1128 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1130, end: 1136 },
            },
            loc: { start: 1130, end: 1136 },
          },
          directives: [],
          loc: { start: 1125, end: 1136 },
        },
      ],
      loc: { start: 1082, end: 1138 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1145, end: 1162 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1167, end: 1173 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1175, end: 1180 },
              },
              loc: { start: 1175, end: 1180 },
            },
            loc: { start: 1175, end: 1181 },
          },
          directives: [],
          loc: { start: 1167, end: 1181 },
        },
      ],
      loc: { start: 1140, end: 1183 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1191, end: 1209 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1212, end: 1229 },
          },
          loc: { start: 1212, end: 1229 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1232, end: 1245 },
          },
          loc: { start: 1232, end: 1245 },
        },
      ],
      loc: { start: 1185, end: 1245 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1253, end: 1267 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1272, end: 1274 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1276, end: 1278 },
              },
              loc: { start: 1276, end: 1278 },
            },
            loc: { start: 1276, end: 1279 },
          },
          directives: [],
          loc: { start: 1272, end: 1279 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1282, end: 1286 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1288, end: 1294 },
              },
              loc: { start: 1288, end: 1294 },
            },
            loc: { start: 1288, end: 1295 },
          },
          directives: [],
          loc: { start: 1282, end: 1295 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1298, end: 1301 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1303, end: 1309 },
            },
            loc: { start: 1303, end: 1309 },
          },
          directives: [],
          loc: { start: 1298, end: 1309 },
        },
      ],
      loc: { start: 1247, end: 1311 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1318, end: 1333 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1338, end: 1344 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1346, end: 1351 },
              },
              loc: { start: 1346, end: 1351 },
            },
            loc: { start: 1346, end: 1352 },
          },
          directives: [],
          loc: { start: 1338, end: 1352 },
        },
      ],
      loc: { start: 1313, end: 1354 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1362, end: 1378 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1381, end: 1396 },
          },
          loc: { start: 1381, end: 1396 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1399, end: 1412 },
          },
          loc: { start: 1399, end: 1412 },
        },
      ],
      loc: { start: 1356, end: 1412 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1425, end: 1437 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1442, end: 1456 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1458, end: 1465 },
              },
              loc: { start: 1458, end: 1465 },
            },
            loc: { start: 1458, end: 1466 },
          },
          directives: [],
          loc: { start: 1442, end: 1466 },
        },
      ],
      loc: { start: 1413, end: 1468 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1475, end: 1482 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1487, end: 1489 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1491, end: 1493 },
              },
              loc: { start: 1491, end: 1493 },
            },
            loc: { start: 1491, end: 1494 },
          },
          directives: [],
          loc: { start: 1487, end: 1494 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1497, end: 1501 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1503, end: 1507 },
              },
              loc: { start: 1503, end: 1507 },
            },
            loc: { start: 1503, end: 1508 },
          },
          directives: [],
          loc: { start: 1497, end: 1508 },
        },
      ],
      loc: { start: 1470, end: 1510 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1523, end: 1528 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1533, end: 1535 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1537, end: 1548 },
              },
              loc: { start: 1537, end: 1548 },
            },
            loc: { start: 1537, end: 1549 },
          },
          directives: [],
          loc: { start: 1533, end: 1549 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1552, end: 1569 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1570, end: 1581 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1583, end: 1589 },
                  },
                  loc: { start: 1583, end: 1589 },
                },
                loc: { start: 1583, end: 1590 },
              },
              directives: [],
              loc: { start: 1570, end: 1590 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1593, end: 1604 },
              },
              loc: { start: 1593, end: 1604 },
            },
            loc: { start: 1593, end: 1605 },
          },
          directives: [],
          loc: { start: 1552, end: 1605 },
        },
      ],
      loc: { start: 1511, end: 1607 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1614, end: 1618 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1623, end: 1625 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1627, end: 1629 },
              },
              loc: { start: 1627, end: 1629 },
            },
            loc: { start: 1627, end: 1630 },
          },
          directives: [],
          loc: { start: 1623, end: 1630 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1633, end: 1637 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1639, end: 1645 },
            },
            loc: { start: 1639, end: 1645 },
          },
          directives: [],
          loc: { start: 1633, end: 1645 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1648, end: 1659 },
          },
          arguments: [],
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
          loc: { start: 1648, end: 1668 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1671, end: 1685 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1687, end: 1693 },
            },
            loc: { start: 1687, end: 1693 },
          },
          directives: [],
          loc: { start: 1671, end: 1693 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1696, end: 1710 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1712, end: 1718 },
            },
            loc: { start: 1712, end: 1718 },
          },
          directives: [],
          loc: { start: 1696, end: 1718 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1721, end: 1734 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1736, end: 1742 },
            },
            loc: { start: 1736, end: 1742 },
          },
          directives: [],
          loc: { start: 1721, end: 1742 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1745, end: 1760 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1762, end: 1768 },
            },
            loc: { start: 1762, end: 1768 },
          },
          directives: [],
          loc: { start: 1745, end: 1768 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1771, end: 1777 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1779, end: 1785 },
            },
            loc: { start: 1779, end: 1785 },
          },
          directives: [],
          loc: { start: 1771, end: 1785 },
        },
      ],
      loc: { start: 1609, end: 1787 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1794, end: 1804 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1809, end: 1815 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1817, end: 1821 },
            },
            loc: { start: 1817, end: 1821 },
          },
          directives: [],
          loc: { start: 1809, end: 1821 },
        },
      ],
      loc: { start: 1789, end: 1823 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1831, end: 1842 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1845, end: 1855 },
          },
          loc: { start: 1845, end: 1855 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1858, end: 1871 },
          },
          loc: { start: 1858, end: 1871 },
        },
      ],
      loc: { start: 1825, end: 1871 },
    },
  ],
  loc: { start: 0, end: 1872 },
} as unknown as DocumentNode;
