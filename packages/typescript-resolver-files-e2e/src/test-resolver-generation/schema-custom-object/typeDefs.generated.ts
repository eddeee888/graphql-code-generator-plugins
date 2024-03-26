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
      name: { kind: 'Name', value: 'File', loc: { start: 444, end: 448 } },
      directives: [],
      loc: { start: 437, end: 448 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 461, end: 466 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 471, end: 480 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 481, end: 483 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 485, end: 487 },
                  },
                  loc: { start: 485, end: 487 },
                },
                loc: { start: 485, end: 488 },
              },
              directives: [],
              loc: { start: 481, end: 488 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 491, end: 507 },
              },
              loc: { start: 491, end: 507 },
            },
            loc: { start: 491, end: 508 },
          },
          directives: [],
          loc: { start: 471, end: 508 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 511, end: 530 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 531, end: 536 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 538, end: 562 },
                  },
                  loc: { start: 538, end: 562 },
                },
                loc: { start: 538, end: 563 },
              },
              directives: [],
              loc: { start: 531, end: 563 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 566, end: 592 },
              },
              loc: { start: 566, end: 592 },
            },
            loc: { start: 566, end: 593 },
          },
          directives: [],
          loc: { start: 511, end: 593 },
        },
      ],
      loc: { start: 449, end: 595 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 609, end: 617 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 622, end: 633 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 634, end: 639 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 641, end: 657 },
                  },
                  loc: { start: 641, end: 657 },
                },
                loc: { start: 641, end: 658 },
              },
              directives: [],
              loc: { start: 634, end: 658 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 661, end: 679 },
              },
              loc: { start: 661, end: 679 },
            },
            loc: { start: 661, end: 680 },
          },
          directives: [],
          loc: { start: 622, end: 680 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 683, end: 692 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 693, end: 698 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 700, end: 714 },
                  },
                  loc: { start: 700, end: 714 },
                },
                loc: { start: 700, end: 715 },
              },
              directives: [],
              loc: { start: 693, end: 715 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 718, end: 734 },
              },
              loc: { start: 718, end: 734 },
            },
            loc: { start: 718, end: 735 },
          },
          directives: [],
          loc: { start: 683, end: 735 },
        },
      ],
      loc: { start: 597, end: 737 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 744, end: 749 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 754, end: 756 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 758, end: 760 },
              },
              loc: { start: 758, end: 760 },
            },
            loc: { start: 758, end: 761 },
          },
          directives: [],
          loc: { start: 754, end: 761 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 764, end: 768 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 770, end: 776 },
              },
              loc: { start: 770, end: 776 },
            },
            loc: { start: 770, end: 777 },
          },
          directives: [],
          loc: { start: 764, end: 777 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 780, end: 783 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 785, end: 791 },
            },
            loc: { start: 785, end: 791 },
          },
          directives: [],
          loc: { start: 780, end: 791 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 794, end: 801 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 803, end: 807 },
              },
              loc: { start: 803, end: 807 },
            },
            loc: { start: 803, end: 808 },
          },
          directives: [],
          loc: { start: 794, end: 808 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 811, end: 820 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 822, end: 830 },
              },
              loc: { start: 822, end: 830 },
            },
            loc: { start: 822, end: 831 },
          },
          directives: [],
          loc: { start: 811, end: 831 },
        },
      ],
      loc: { start: 739, end: 833 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 840, end: 855 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 860, end: 866 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 868, end: 873 },
            },
            loc: { start: 868, end: 873 },
          },
          directives: [],
          loc: { start: 860, end: 873 },
        },
      ],
      loc: { start: 835, end: 875 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 883, end: 899 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 902, end: 917 },
          },
          loc: { start: 902, end: 917 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 920, end: 932 },
          },
          loc: { start: 920, end: 932 },
        },
      ],
      loc: { start: 877, end: 932 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 940, end: 964 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 969, end: 975 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 977, end: 979 },
              },
              loc: { start: 977, end: 979 },
            },
            loc: { start: 977, end: 980 },
          },
          directives: [],
          loc: { start: 969, end: 980 },
        },
      ],
      loc: { start: 934, end: 982 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 989, end: 1014 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1019, end: 1025 },
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
                    loc: { start: 1028, end: 1033 },
                  },
                  loc: { start: 1028, end: 1033 },
                },
                loc: { start: 1028, end: 1034 },
              },
              loc: { start: 1027, end: 1035 },
            },
            loc: { start: 1027, end: 1036 },
          },
          directives: [],
          loc: { start: 1019, end: 1036 },
        },
      ],
      loc: { start: 984, end: 1038 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1046, end: 1072 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1075, end: 1100 },
          },
          loc: { start: 1075, end: 1100 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1103, end: 1115 },
          },
          loc: { start: 1103, end: 1115 },
        },
      ],
      loc: { start: 1040, end: 1115 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1123, end: 1139 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1144, end: 1148 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1150, end: 1156 },
              },
              loc: { start: 1150, end: 1156 },
            },
            loc: { start: 1150, end: 1157 },
          },
          directives: [],
          loc: { start: 1144, end: 1157 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1160, end: 1163 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1165, end: 1171 },
            },
            loc: { start: 1165, end: 1171 },
          },
          directives: [],
          loc: { start: 1160, end: 1171 },
        },
      ],
      loc: { start: 1117, end: 1173 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1180, end: 1197 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1202, end: 1208 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1210, end: 1215 },
              },
              loc: { start: 1210, end: 1215 },
            },
            loc: { start: 1210, end: 1216 },
          },
          directives: [],
          loc: { start: 1202, end: 1216 },
        },
      ],
      loc: { start: 1175, end: 1218 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1226, end: 1244 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1247, end: 1264 },
          },
          loc: { start: 1247, end: 1264 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1267, end: 1279 },
          },
          loc: { start: 1267, end: 1279 },
        },
      ],
      loc: { start: 1220, end: 1279 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1287, end: 1301 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1306, end: 1308 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1310, end: 1312 },
              },
              loc: { start: 1310, end: 1312 },
            },
            loc: { start: 1310, end: 1313 },
          },
          directives: [],
          loc: { start: 1306, end: 1313 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1316, end: 1320 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1322, end: 1328 },
              },
              loc: { start: 1322, end: 1328 },
            },
            loc: { start: 1322, end: 1329 },
          },
          directives: [],
          loc: { start: 1316, end: 1329 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1332, end: 1335 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1337, end: 1343 },
            },
            loc: { start: 1337, end: 1343 },
          },
          directives: [],
          loc: { start: 1332, end: 1343 },
        },
      ],
      loc: { start: 1281, end: 1345 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1352, end: 1367 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1372, end: 1378 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1380, end: 1385 },
              },
              loc: { start: 1380, end: 1385 },
            },
            loc: { start: 1380, end: 1386 },
          },
          directives: [],
          loc: { start: 1372, end: 1386 },
        },
      ],
      loc: { start: 1347, end: 1388 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1396, end: 1412 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1415, end: 1430 },
          },
          loc: { start: 1415, end: 1430 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1433, end: 1445 },
          },
          loc: { start: 1433, end: 1445 },
        },
      ],
      loc: { start: 1390, end: 1445 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1458, end: 1466 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileDelete',
            loc: { start: 1471, end: 1484 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1486, end: 1493 },
              },
              loc: { start: 1486, end: 1493 },
            },
            loc: { start: 1486, end: 1494 },
          },
          directives: [],
          loc: { start: 1471, end: 1494 },
        },
      ],
      loc: { start: 1446, end: 1496 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1510, end: 1522 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1527, end: 1541 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1543, end: 1550 },
              },
              loc: { start: 1543, end: 1550 },
            },
            loc: { start: 1543, end: 1551 },
          },
          directives: [],
          loc: { start: 1527, end: 1551 },
        },
      ],
      loc: { start: 1498, end: 1553 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1560, end: 1567 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1572, end: 1574 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1576, end: 1578 },
              },
              loc: { start: 1576, end: 1578 },
            },
            loc: { start: 1576, end: 1579 },
          },
          directives: [],
          loc: { start: 1572, end: 1579 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1582, end: 1586 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1588, end: 1592 },
              },
              loc: { start: 1588, end: 1592 },
            },
            loc: { start: 1588, end: 1593 },
          },
          directives: [],
          loc: { start: 1582, end: 1593 },
        },
      ],
      loc: { start: 1555, end: 1595 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1608, end: 1613 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1618, end: 1620 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1622, end: 1633 },
              },
              loc: { start: 1622, end: 1633 },
            },
            loc: { start: 1622, end: 1634 },
          },
          directives: [],
          loc: { start: 1618, end: 1634 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1637, end: 1654 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1655, end: 1666 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1668, end: 1674 },
                  },
                  loc: { start: 1668, end: 1674 },
                },
                loc: { start: 1668, end: 1675 },
              },
              directives: [],
              loc: { start: 1655, end: 1675 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1678, end: 1689 },
              },
              loc: { start: 1678, end: 1689 },
            },
            loc: { start: 1678, end: 1690 },
          },
          directives: [],
          loc: { start: 1637, end: 1690 },
        },
      ],
      loc: { start: 1596, end: 1692 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1699, end: 1703 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1708, end: 1710 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1712, end: 1714 },
              },
              loc: { start: 1712, end: 1714 },
            },
            loc: { start: 1712, end: 1715 },
          },
          directives: [],
          loc: { start: 1708, end: 1715 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1718, end: 1722 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1724, end: 1730 },
            },
            loc: { start: 1724, end: 1730 },
          },
          directives: [],
          loc: { start: 1718, end: 1730 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1733, end: 1744 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1746, end: 1752 },
              },
              loc: { start: 1746, end: 1752 },
            },
            loc: { start: 1746, end: 1753 },
          },
          directives: [],
          loc: { start: 1733, end: 1753 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1756, end: 1770 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1772, end: 1778 },
            },
            loc: { start: 1772, end: 1778 },
          },
          directives: [],
          loc: { start: 1756, end: 1778 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1781, end: 1795 },
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
          loc: { start: 1781, end: 1803 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1806, end: 1819 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1821, end: 1827 },
            },
            loc: { start: 1821, end: 1827 },
          },
          directives: [],
          loc: { start: 1806, end: 1827 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1830, end: 1845 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1847, end: 1853 },
            },
            loc: { start: 1847, end: 1853 },
          },
          directives: [],
          loc: { start: 1830, end: 1853 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1856, end: 1862 },
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
          loc: { start: 1856, end: 1870 },
        },
      ],
      loc: { start: 1694, end: 1872 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1879, end: 1889 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1894, end: 1900 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1902, end: 1906 },
            },
            loc: { start: 1902, end: 1906 },
          },
          directives: [],
          loc: { start: 1894, end: 1906 },
        },
      ],
      loc: { start: 1874, end: 1908 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1916, end: 1927 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1930, end: 1940 },
          },
          loc: { start: 1930, end: 1940 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1943, end: 1955 },
          },
          loc: { start: 1943, end: 1955 },
        },
      ],
      loc: { start: 1910, end: 1955 },
    },
  ],
  loc: { start: 0, end: 1956 },
} as unknown as DocumentNode;
