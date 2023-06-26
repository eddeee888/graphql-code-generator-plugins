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
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Profile', loc: { start: 714, end: 721 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'watchingTopics',
            loc: { start: 726, end: 740 },
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
                    loc: { start: 743, end: 748 },
                  },
                  loc: { start: 743, end: 748 },
                },
                loc: { start: 743, end: 749 },
              },
              loc: { start: 742, end: 750 },
            },
            loc: { start: 742, end: 751 },
          },
          directives: [],
          loc: { start: 726, end: 751 },
        },
      ],
      loc: { start: 702, end: 753 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 760, end: 765 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 770, end: 772 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 774, end: 776 },
              },
              loc: { start: 774, end: 776 },
            },
            loc: { start: 774, end: 777 },
          },
          directives: [],
          loc: { start: 770, end: 777 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 780, end: 784 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 786, end: 792 },
              },
              loc: { start: 786, end: 792 },
            },
            loc: { start: 786, end: 793 },
          },
          directives: [],
          loc: { start: 780, end: 793 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 796, end: 799 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 801, end: 807 },
            },
            loc: { start: 801, end: 807 },
          },
          directives: [],
          loc: { start: 796, end: 807 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 810, end: 817 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 819, end: 823 },
              },
              loc: { start: 819, end: 823 },
            },
            loc: { start: 819, end: 824 },
          },
          directives: [],
          loc: { start: 810, end: 824 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 827, end: 836 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 838, end: 846 },
              },
              loc: { start: 838, end: 846 },
            },
            loc: { start: 838, end: 847 },
          },
          directives: [],
          loc: { start: 827, end: 847 },
        },
      ],
      loc: { start: 755, end: 849 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 856, end: 871 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 876, end: 882 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 884, end: 889 },
            },
            loc: { start: 884, end: 889 },
          },
          directives: [],
          loc: { start: 876, end: 889 },
        },
      ],
      loc: { start: 851, end: 891 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 899, end: 915 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 918, end: 933 },
          },
          loc: { start: 918, end: 933 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 936, end: 949 },
          },
          loc: { start: 936, end: 949 },
        },
      ],
      loc: { start: 893, end: 949 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 957, end: 981 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 986, end: 992 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 994, end: 996 },
              },
              loc: { start: 994, end: 996 },
            },
            loc: { start: 994, end: 997 },
          },
          directives: [],
          loc: { start: 986, end: 997 },
        },
      ],
      loc: { start: 951, end: 999 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1006, end: 1031 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1036, end: 1042 },
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
                    loc: { start: 1045, end: 1050 },
                  },
                  loc: { start: 1045, end: 1050 },
                },
                loc: { start: 1045, end: 1051 },
              },
              loc: { start: 1044, end: 1052 },
            },
            loc: { start: 1044, end: 1053 },
          },
          directives: [],
          loc: { start: 1036, end: 1053 },
        },
      ],
      loc: { start: 1001, end: 1055 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1063, end: 1089 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1092, end: 1117 },
          },
          loc: { start: 1092, end: 1117 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1120, end: 1133 },
          },
          loc: { start: 1120, end: 1133 },
        },
      ],
      loc: { start: 1057, end: 1133 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1141, end: 1157 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1162, end: 1166 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1168, end: 1174 },
              },
              loc: { start: 1168, end: 1174 },
            },
            loc: { start: 1168, end: 1175 },
          },
          directives: [],
          loc: { start: 1162, end: 1175 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1178, end: 1181 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1183, end: 1189 },
            },
            loc: { start: 1183, end: 1189 },
          },
          directives: [],
          loc: { start: 1178, end: 1189 },
        },
      ],
      loc: { start: 1135, end: 1191 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1198, end: 1215 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1220, end: 1226 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1228, end: 1233 },
              },
              loc: { start: 1228, end: 1233 },
            },
            loc: { start: 1228, end: 1234 },
          },
          directives: [],
          loc: { start: 1220, end: 1234 },
        },
      ],
      loc: { start: 1193, end: 1236 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1244, end: 1262 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1265, end: 1282 },
          },
          loc: { start: 1265, end: 1282 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1285, end: 1298 },
          },
          loc: { start: 1285, end: 1298 },
        },
      ],
      loc: { start: 1238, end: 1298 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1306, end: 1320 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1325, end: 1327 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1329, end: 1331 },
              },
              loc: { start: 1329, end: 1331 },
            },
            loc: { start: 1329, end: 1332 },
          },
          directives: [],
          loc: { start: 1325, end: 1332 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1335, end: 1339 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1341, end: 1347 },
              },
              loc: { start: 1341, end: 1347 },
            },
            loc: { start: 1341, end: 1348 },
          },
          directives: [],
          loc: { start: 1335, end: 1348 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1351, end: 1354 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1356, end: 1362 },
            },
            loc: { start: 1356, end: 1362 },
          },
          directives: [],
          loc: { start: 1351, end: 1362 },
        },
      ],
      loc: { start: 1300, end: 1364 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1371, end: 1386 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1391, end: 1397 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1399, end: 1404 },
              },
              loc: { start: 1399, end: 1404 },
            },
            loc: { start: 1399, end: 1405 },
          },
          directives: [],
          loc: { start: 1391, end: 1405 },
        },
      ],
      loc: { start: 1366, end: 1407 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1415, end: 1431 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1434, end: 1449 },
          },
          loc: { start: 1434, end: 1449 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1452, end: 1465 },
          },
          loc: { start: 1452, end: 1465 },
        },
      ],
      loc: { start: 1409, end: 1465 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1478, end: 1490 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1495, end: 1509 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1511, end: 1518 },
              },
              loc: { start: 1511, end: 1518 },
            },
            loc: { start: 1511, end: 1519 },
          },
          directives: [],
          loc: { start: 1495, end: 1519 },
        },
      ],
      loc: { start: 1466, end: 1521 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1528, end: 1535 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1540, end: 1542 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1544, end: 1546 },
              },
              loc: { start: 1544, end: 1546 },
            },
            loc: { start: 1544, end: 1547 },
          },
          directives: [],
          loc: { start: 1540, end: 1547 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1550, end: 1554 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1556, end: 1560 },
              },
              loc: { start: 1556, end: 1560 },
            },
            loc: { start: 1556, end: 1561 },
          },
          directives: [],
          loc: { start: 1550, end: 1561 },
        },
      ],
      loc: { start: 1523, end: 1563 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1577, end: 1582 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'author',
            loc: { start: 1587, end: 1593 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1595, end: 1599 },
              },
              loc: { start: 1595, end: 1599 },
            },
            loc: { start: 1595, end: 1600 },
          },
          directives: [],
          loc: { start: 1587, end: 1600 },
        },
      ],
      loc: { start: 1565, end: 1602 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1615, end: 1620 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1625, end: 1627 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1629, end: 1640 },
              },
              loc: { start: 1629, end: 1640 },
            },
            loc: { start: 1629, end: 1641 },
          },
          directives: [],
          loc: { start: 1625, end: 1641 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1644, end: 1661 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1662, end: 1673 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1675, end: 1681 },
                  },
                  loc: { start: 1675, end: 1681 },
                },
                loc: { start: 1675, end: 1682 },
              },
              directives: [],
              loc: { start: 1662, end: 1682 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1685, end: 1696 },
              },
              loc: { start: 1685, end: 1696 },
            },
            loc: { start: 1685, end: 1697 },
          },
          directives: [],
          loc: { start: 1644, end: 1697 },
        },
      ],
      loc: { start: 1603, end: 1699 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1706, end: 1710 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1715, end: 1717 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1719, end: 1721 },
              },
              loc: { start: 1719, end: 1721 },
            },
            loc: { start: 1719, end: 1722 },
          },
          directives: [],
          loc: { start: 1715, end: 1722 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1725, end: 1729 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1731, end: 1737 },
            },
            loc: { start: 1731, end: 1737 },
          },
          directives: [],
          loc: { start: 1725, end: 1737 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1740, end: 1751 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1753, end: 1759 },
              },
              loc: { start: 1753, end: 1759 },
            },
            loc: { start: 1753, end: 1760 },
          },
          directives: [],
          loc: { start: 1740, end: 1760 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1763, end: 1777 },
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
          loc: { start: 1763, end: 1785 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1788, end: 1802 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1804, end: 1810 },
            },
            loc: { start: 1804, end: 1810 },
          },
          directives: [],
          loc: { start: 1788, end: 1810 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1813, end: 1826 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1828, end: 1834 },
            },
            loc: { start: 1828, end: 1834 },
          },
          directives: [],
          loc: { start: 1813, end: 1834 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1837, end: 1852 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1854, end: 1860 },
            },
            loc: { start: 1854, end: 1860 },
          },
          directives: [],
          loc: { start: 1837, end: 1860 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1863, end: 1869 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1871, end: 1877 },
            },
            loc: { start: 1871, end: 1877 },
          },
          directives: [],
          loc: { start: 1863, end: 1877 },
        },
      ],
      loc: { start: 1701, end: 1879 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1886, end: 1896 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1901, end: 1907 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1909, end: 1913 },
            },
            loc: { start: 1909, end: 1913 },
          },
          directives: [],
          loc: { start: 1901, end: 1913 },
        },
      ],
      loc: { start: 1881, end: 1915 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1923, end: 1934 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1937, end: 1947 },
          },
          loc: { start: 1937, end: 1947 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1950, end: 1963 },
          },
          loc: { start: 1950, end: 1963 },
        },
      ],
      loc: { start: 1917, end: 1963 },
    },
  ],
  loc: { start: 0, end: 1964 },
} as unknown as DocumentNode;
