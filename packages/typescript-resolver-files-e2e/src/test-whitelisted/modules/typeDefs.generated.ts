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
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 37, end: 42 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 47, end: 52 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 54, end: 63 },
              },
              loc: { start: 54, end: 63 },
            },
            loc: { start: 54, end: 64 },
          },
          directives: [],
          loc: { start: 47, end: 64 },
        },
      ],
      loc: { start: 27, end: 66 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StandardError',
        loc: { start: 73, end: 86 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 98, end: 103 } },
          loc: { start: 98, end: 103 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 108, end: 113 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 115, end: 124 },
              },
              loc: { start: 115, end: 124 },
            },
            loc: { start: 115, end: 125 },
          },
          directives: [],
          loc: { start: 108, end: 125 },
        },
      ],
      loc: { start: 68, end: 127 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 134, end: 143 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 148, end: 157 },
          },
          directives: [],
          loc: { start: 148, end: 157 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 160, end: 182 },
          },
          directives: [],
          loc: { start: 160, end: 182 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 185, end: 200 },
          },
          directives: [],
          loc: { start: 185, end: 200 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 203, end: 219 },
          },
          directives: [],
          loc: { start: 203, end: 219 },
        },
      ],
      loc: { start: 129, end: 221 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 229, end: 244 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 249, end: 263 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 265, end: 268 } },
            loc: { start: 265, end: 268 },
          },
          directives: [],
          loc: { start: 249, end: 268 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 271, end: 275 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 277, end: 280 } },
            loc: { start: 277, end: 280 },
          },
          directives: [],
          loc: { start: 271, end: 280 },
        },
      ],
      loc: { start: 223, end: 282 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 289, end: 305 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 310, end: 321 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 323, end: 326 },
              },
              loc: { start: 323, end: 326 },
            },
            loc: { start: 323, end: 327 },
          },
          directives: [],
          loc: { start: 310, end: 327 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 330, end: 344 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 346, end: 349 },
              },
              loc: { start: 346, end: 349 },
            },
            loc: { start: 346, end: 350 },
          },
          directives: [],
          loc: { start: 330, end: 350 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 353, end: 367 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 369, end: 372 },
              },
              loc: { start: 369, end: 372 },
            },
            loc: { start: 369, end: 373 },
          },
          directives: [],
          loc: { start: 353, end: 373 },
        },
      ],
      loc: { start: 284, end: 375 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 384, end: 392 } },
      directives: [],
      loc: { start: 377, end: 392 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 405, end: 410 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 415, end: 424 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 425, end: 427 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 429, end: 431 },
                  },
                  loc: { start: 429, end: 431 },
                },
                loc: { start: 429, end: 432 },
              },
              directives: [],
              loc: { start: 425, end: 432 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 435, end: 451 },
              },
              loc: { start: 435, end: 451 },
            },
            loc: { start: 435, end: 452 },
          },
          directives: [],
          loc: { start: 415, end: 452 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 455, end: 474 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 475, end: 480 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 482, end: 506 },
                  },
                  loc: { start: 482, end: 506 },
                },
                loc: { start: 482, end: 507 },
              },
              directives: [],
              loc: { start: 475, end: 507 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 510, end: 536 },
              },
              loc: { start: 510, end: 536 },
            },
            loc: { start: 510, end: 537 },
          },
          directives: [],
          loc: { start: 455, end: 537 },
        },
      ],
      loc: { start: 393, end: 539 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 553, end: 561 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 566, end: 577 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 578, end: 583 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 585, end: 601 },
                  },
                  loc: { start: 585, end: 601 },
                },
                loc: { start: 585, end: 602 },
              },
              directives: [],
              loc: { start: 578, end: 602 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 605, end: 623 },
              },
              loc: { start: 605, end: 623 },
            },
            loc: { start: 605, end: 624 },
          },
          directives: [],
          loc: { start: 566, end: 624 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 627, end: 636 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 637, end: 642 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 644, end: 658 },
                  },
                  loc: { start: 644, end: 658 },
                },
                loc: { start: 644, end: 659 },
              },
              directives: [],
              loc: { start: 637, end: 659 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 662, end: 678 },
              },
              loc: { start: 662, end: 678 },
            },
            loc: { start: 662, end: 679 },
          },
          directives: [],
          loc: { start: 627, end: 679 },
        },
      ],
      loc: { start: 541, end: 681 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 688, end: 693 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 698, end: 700 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 702, end: 704 },
              },
              loc: { start: 702, end: 704 },
            },
            loc: { start: 702, end: 705 },
          },
          directives: [],
          loc: { start: 698, end: 705 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 708, end: 712 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 714, end: 720 },
              },
              loc: { start: 714, end: 720 },
            },
            loc: { start: 714, end: 721 },
          },
          directives: [],
          loc: { start: 708, end: 721 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 724, end: 727 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 729, end: 735 },
            },
            loc: { start: 729, end: 735 },
          },
          directives: [],
          loc: { start: 724, end: 735 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 738, end: 745 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 747, end: 751 },
              },
              loc: { start: 747, end: 751 },
            },
            loc: { start: 747, end: 752 },
          },
          directives: [],
          loc: { start: 738, end: 752 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 755, end: 764 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 766, end: 774 },
              },
              loc: { start: 766, end: 774 },
            },
            loc: { start: 766, end: 775 },
          },
          directives: [],
          loc: { start: 755, end: 775 },
        },
      ],
      loc: { start: 683, end: 777 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 784, end: 799 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 804, end: 810 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 812, end: 817 },
            },
            loc: { start: 812, end: 817 },
          },
          directives: [],
          loc: { start: 804, end: 817 },
        },
      ],
      loc: { start: 779, end: 819 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 827, end: 843 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 846, end: 861 },
          },
          loc: { start: 846, end: 861 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 864, end: 877 },
          },
          loc: { start: 864, end: 877 },
        },
      ],
      loc: { start: 821, end: 877 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 885, end: 909 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 914, end: 920 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 922, end: 924 },
              },
              loc: { start: 922, end: 924 },
            },
            loc: { start: 922, end: 925 },
          },
          directives: [],
          loc: { start: 914, end: 925 },
        },
      ],
      loc: { start: 879, end: 927 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 934, end: 959 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 964, end: 970 },
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
                    loc: { start: 973, end: 978 },
                  },
                  loc: { start: 973, end: 978 },
                },
                loc: { start: 973, end: 979 },
              },
              loc: { start: 972, end: 980 },
            },
            loc: { start: 972, end: 981 },
          },
          directives: [],
          loc: { start: 964, end: 981 },
        },
      ],
      loc: { start: 929, end: 983 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 991, end: 1017 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1020, end: 1045 },
          },
          loc: { start: 1020, end: 1045 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1048, end: 1061 },
          },
          loc: { start: 1048, end: 1061 },
        },
      ],
      loc: { start: 985, end: 1061 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1069, end: 1085 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1090, end: 1094 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1096, end: 1102 },
              },
              loc: { start: 1096, end: 1102 },
            },
            loc: { start: 1096, end: 1103 },
          },
          directives: [],
          loc: { start: 1090, end: 1103 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1106, end: 1109 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1111, end: 1117 },
            },
            loc: { start: 1111, end: 1117 },
          },
          directives: [],
          loc: { start: 1106, end: 1117 },
        },
      ],
      loc: { start: 1063, end: 1119 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1126, end: 1143 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1148, end: 1154 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1156, end: 1161 },
              },
              loc: { start: 1156, end: 1161 },
            },
            loc: { start: 1156, end: 1162 },
          },
          directives: [],
          loc: { start: 1148, end: 1162 },
        },
      ],
      loc: { start: 1121, end: 1164 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1172, end: 1190 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1193, end: 1210 },
          },
          loc: { start: 1193, end: 1210 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1213, end: 1226 },
          },
          loc: { start: 1213, end: 1226 },
        },
      ],
      loc: { start: 1166, end: 1226 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1234, end: 1248 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1253, end: 1255 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1257, end: 1259 },
              },
              loc: { start: 1257, end: 1259 },
            },
            loc: { start: 1257, end: 1260 },
          },
          directives: [],
          loc: { start: 1253, end: 1260 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1263, end: 1267 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1269, end: 1275 },
              },
              loc: { start: 1269, end: 1275 },
            },
            loc: { start: 1269, end: 1276 },
          },
          directives: [],
          loc: { start: 1263, end: 1276 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1279, end: 1282 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1284, end: 1290 },
            },
            loc: { start: 1284, end: 1290 },
          },
          directives: [],
          loc: { start: 1279, end: 1290 },
        },
      ],
      loc: { start: 1228, end: 1292 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1299, end: 1314 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1319, end: 1325 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1327, end: 1332 },
              },
              loc: { start: 1327, end: 1332 },
            },
            loc: { start: 1327, end: 1333 },
          },
          directives: [],
          loc: { start: 1319, end: 1333 },
        },
      ],
      loc: { start: 1294, end: 1335 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1343, end: 1359 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1362, end: 1377 },
          },
          loc: { start: 1362, end: 1377 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1380, end: 1393 },
          },
          loc: { start: 1380, end: 1393 },
        },
      ],
      loc: { start: 1337, end: 1393 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1406, end: 1411 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1416, end: 1418 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1420, end: 1431 },
              },
              loc: { start: 1420, end: 1431 },
            },
            loc: { start: 1420, end: 1432 },
          },
          directives: [],
          loc: { start: 1416, end: 1432 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1435, end: 1452 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1453, end: 1464 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1466, end: 1472 },
                  },
                  loc: { start: 1466, end: 1472 },
                },
                loc: { start: 1466, end: 1473 },
              },
              directives: [],
              loc: { start: 1453, end: 1473 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1476, end: 1487 },
              },
              loc: { start: 1476, end: 1487 },
            },
            loc: { start: 1476, end: 1488 },
          },
          directives: [],
          loc: { start: 1435, end: 1488 },
        },
      ],
      loc: { start: 1394, end: 1490 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1497, end: 1501 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1506, end: 1508 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1510, end: 1512 },
              },
              loc: { start: 1510, end: 1512 },
            },
            loc: { start: 1510, end: 1513 },
          },
          directives: [],
          loc: { start: 1506, end: 1513 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1516, end: 1520 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1522, end: 1528 },
            },
            loc: { start: 1522, end: 1528 },
          },
          directives: [],
          loc: { start: 1516, end: 1528 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1531, end: 1542 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1544, end: 1550 },
              },
              loc: { start: 1544, end: 1550 },
            },
            loc: { start: 1544, end: 1551 },
          },
          directives: [],
          loc: { start: 1531, end: 1551 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1554, end: 1568 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1570, end: 1576 },
            },
            loc: { start: 1570, end: 1576 },
          },
          directives: [],
          loc: { start: 1554, end: 1576 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1579, end: 1593 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1595, end: 1601 },
            },
            loc: { start: 1595, end: 1601 },
          },
          directives: [],
          loc: { start: 1579, end: 1601 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1604, end: 1617 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1619, end: 1625 },
            },
            loc: { start: 1619, end: 1625 },
          },
          directives: [],
          loc: { start: 1604, end: 1625 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1628, end: 1643 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1645, end: 1651 },
            },
            loc: { start: 1645, end: 1651 },
          },
          directives: [],
          loc: { start: 1628, end: 1651 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1654, end: 1660 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1662, end: 1668 },
            },
            loc: { start: 1662, end: 1668 },
          },
          directives: [],
          loc: { start: 1654, end: 1668 },
        },
      ],
      loc: { start: 1492, end: 1670 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1677, end: 1687 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1692, end: 1698 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1700, end: 1704 },
            },
            loc: { start: 1700, end: 1704 },
          },
          directives: [],
          loc: { start: 1692, end: 1704 },
        },
      ],
      loc: { start: 1672, end: 1706 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1714, end: 1725 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1728, end: 1738 },
          },
          loc: { start: 1728, end: 1738 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1741, end: 1754 },
          },
          loc: { start: 1741, end: 1754 },
        },
      ],
      loc: { start: 1708, end: 1754 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'Date', loc: { start: 1763, end: 1767 } },
      directives: [],
      loc: { start: 1756, end: 1767 },
    },
  ],
  loc: { start: 0, end: 1768 },
} as unknown as DocumentNode;
