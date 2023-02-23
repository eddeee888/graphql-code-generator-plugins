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
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 406, end: 411 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 416, end: 425 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 426, end: 428 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 430, end: 432 },
                  },
                  loc: { start: 430, end: 432 },
                },
                loc: { start: 430, end: 433 },
              },
              directives: [],
              loc: { start: 426, end: 433 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 436, end: 452 },
              },
              loc: { start: 436, end: 452 },
            },
            loc: { start: 436, end: 453 },
          },
          directives: [],
          loc: { start: 416, end: 453 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 456, end: 475 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 476, end: 481 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 483, end: 507 },
                  },
                  loc: { start: 483, end: 507 },
                },
                loc: { start: 483, end: 508 },
              },
              directives: [],
              loc: { start: 476, end: 508 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 511, end: 537 },
              },
              loc: { start: 511, end: 537 },
            },
            loc: { start: 511, end: 538 },
          },
          directives: [],
          loc: { start: 456, end: 538 },
        },
      ],
      loc: { start: 394, end: 540 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 554, end: 562 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 567, end: 578 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 579, end: 584 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 586, end: 602 },
                  },
                  loc: { start: 586, end: 602 },
                },
                loc: { start: 586, end: 603 },
              },
              directives: [],
              loc: { start: 579, end: 603 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 606, end: 624 },
              },
              loc: { start: 606, end: 624 },
            },
            loc: { start: 606, end: 625 },
          },
          directives: [],
          loc: { start: 567, end: 625 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 628, end: 637 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 638, end: 643 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 645, end: 659 },
                  },
                  loc: { start: 645, end: 659 },
                },
                loc: { start: 645, end: 660 },
              },
              directives: [],
              loc: { start: 638, end: 660 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 663, end: 679 },
              },
              loc: { start: 663, end: 679 },
            },
            loc: { start: 663, end: 680 },
          },
          directives: [],
          loc: { start: 628, end: 680 },
        },
      ],
      loc: { start: 542, end: 682 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 689, end: 694 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 699, end: 701 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 703, end: 705 },
              },
              loc: { start: 703, end: 705 },
            },
            loc: { start: 703, end: 706 },
          },
          directives: [],
          loc: { start: 699, end: 706 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 709, end: 713 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 715, end: 721 },
              },
              loc: { start: 715, end: 721 },
            },
            loc: { start: 715, end: 722 },
          },
          directives: [],
          loc: { start: 709, end: 722 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 725, end: 728 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 730, end: 736 },
            },
            loc: { start: 730, end: 736 },
          },
          directives: [],
          loc: { start: 725, end: 736 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 739, end: 746 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 748, end: 752 },
              },
              loc: { start: 748, end: 752 },
            },
            loc: { start: 748, end: 753 },
          },
          directives: [],
          loc: { start: 739, end: 753 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 756, end: 765 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 767, end: 775 },
              },
              loc: { start: 767, end: 775 },
            },
            loc: { start: 767, end: 776 },
          },
          directives: [],
          loc: { start: 756, end: 776 },
        },
      ],
      loc: { start: 684, end: 778 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 785, end: 800 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 805, end: 811 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 813, end: 818 },
            },
            loc: { start: 813, end: 818 },
          },
          directives: [],
          loc: { start: 805, end: 818 },
        },
      ],
      loc: { start: 780, end: 820 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 828, end: 844 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 847, end: 862 },
          },
          loc: { start: 847, end: 862 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 865, end: 878 },
          },
          loc: { start: 865, end: 878 },
        },
      ],
      loc: { start: 822, end: 878 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 886, end: 910 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 915, end: 921 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 923, end: 925 },
              },
              loc: { start: 923, end: 925 },
            },
            loc: { start: 923, end: 926 },
          },
          directives: [],
          loc: { start: 915, end: 926 },
        },
      ],
      loc: { start: 880, end: 928 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 935, end: 960 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 965, end: 971 },
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
                    loc: { start: 974, end: 979 },
                  },
                  loc: { start: 974, end: 979 },
                },
                loc: { start: 974, end: 980 },
              },
              loc: { start: 973, end: 981 },
            },
            loc: { start: 973, end: 982 },
          },
          directives: [],
          loc: { start: 965, end: 982 },
        },
      ],
      loc: { start: 930, end: 984 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 992, end: 1018 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1021, end: 1046 },
          },
          loc: { start: 1021, end: 1046 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1049, end: 1062 },
          },
          loc: { start: 1049, end: 1062 },
        },
      ],
      loc: { start: 986, end: 1062 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1070, end: 1086 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1091, end: 1095 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1097, end: 1103 },
              },
              loc: { start: 1097, end: 1103 },
            },
            loc: { start: 1097, end: 1104 },
          },
          directives: [],
          loc: { start: 1091, end: 1104 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1107, end: 1110 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1112, end: 1118 },
            },
            loc: { start: 1112, end: 1118 },
          },
          directives: [],
          loc: { start: 1107, end: 1118 },
        },
      ],
      loc: { start: 1064, end: 1120 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1127, end: 1144 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1149, end: 1155 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1157, end: 1162 },
              },
              loc: { start: 1157, end: 1162 },
            },
            loc: { start: 1157, end: 1163 },
          },
          directives: [],
          loc: { start: 1149, end: 1163 },
        },
      ],
      loc: { start: 1122, end: 1165 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1173, end: 1191 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1194, end: 1211 },
          },
          loc: { start: 1194, end: 1211 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1214, end: 1227 },
          },
          loc: { start: 1214, end: 1227 },
        },
      ],
      loc: { start: 1167, end: 1227 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1235, end: 1249 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1254, end: 1256 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1258, end: 1260 },
              },
              loc: { start: 1258, end: 1260 },
            },
            loc: { start: 1258, end: 1261 },
          },
          directives: [],
          loc: { start: 1254, end: 1261 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1264, end: 1268 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1270, end: 1276 },
              },
              loc: { start: 1270, end: 1276 },
            },
            loc: { start: 1270, end: 1277 },
          },
          directives: [],
          loc: { start: 1264, end: 1277 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1280, end: 1283 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1285, end: 1291 },
            },
            loc: { start: 1285, end: 1291 },
          },
          directives: [],
          loc: { start: 1280, end: 1291 },
        },
      ],
      loc: { start: 1229, end: 1293 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1300, end: 1315 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1320, end: 1326 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1328, end: 1333 },
              },
              loc: { start: 1328, end: 1333 },
            },
            loc: { start: 1328, end: 1334 },
          },
          directives: [],
          loc: { start: 1320, end: 1334 },
        },
      ],
      loc: { start: 1295, end: 1336 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1344, end: 1360 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1363, end: 1378 },
          },
          loc: { start: 1363, end: 1378 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1381, end: 1394 },
          },
          loc: { start: 1381, end: 1394 },
        },
      ],
      loc: { start: 1338, end: 1394 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1407, end: 1412 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1417, end: 1419 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1421, end: 1432 },
              },
              loc: { start: 1421, end: 1432 },
            },
            loc: { start: 1421, end: 1433 },
          },
          directives: [],
          loc: { start: 1417, end: 1433 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1436, end: 1453 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1454, end: 1465 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1467, end: 1473 },
                  },
                  loc: { start: 1467, end: 1473 },
                },
                loc: { start: 1467, end: 1474 },
              },
              directives: [],
              loc: { start: 1454, end: 1474 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1477, end: 1488 },
              },
              loc: { start: 1477, end: 1488 },
            },
            loc: { start: 1477, end: 1489 },
          },
          directives: [],
          loc: { start: 1436, end: 1489 },
        },
      ],
      loc: { start: 1395, end: 1491 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1498, end: 1502 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1507, end: 1509 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1511, end: 1513 },
              },
              loc: { start: 1511, end: 1513 },
            },
            loc: { start: 1511, end: 1514 },
          },
          directives: [],
          loc: { start: 1507, end: 1514 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1517, end: 1521 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1523, end: 1529 },
            },
            loc: { start: 1523, end: 1529 },
          },
          directives: [],
          loc: { start: 1517, end: 1529 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1532, end: 1543 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1545, end: 1551 },
              },
              loc: { start: 1545, end: 1551 },
            },
            loc: { start: 1545, end: 1552 },
          },
          directives: [],
          loc: { start: 1532, end: 1552 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1555, end: 1569 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1571, end: 1577 },
            },
            loc: { start: 1571, end: 1577 },
          },
          directives: [],
          loc: { start: 1555, end: 1577 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1580, end: 1594 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1596, end: 1602 },
            },
            loc: { start: 1596, end: 1602 },
          },
          directives: [],
          loc: { start: 1580, end: 1602 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1605, end: 1618 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1620, end: 1626 },
            },
            loc: { start: 1620, end: 1626 },
          },
          directives: [],
          loc: { start: 1605, end: 1626 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1629, end: 1644 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1646, end: 1652 },
            },
            loc: { start: 1646, end: 1652 },
          },
          directives: [],
          loc: { start: 1629, end: 1652 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1655, end: 1661 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1663, end: 1669 },
            },
            loc: { start: 1663, end: 1669 },
          },
          directives: [],
          loc: { start: 1655, end: 1669 },
        },
      ],
      loc: { start: 1493, end: 1671 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1678, end: 1688 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1693, end: 1699 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1701, end: 1705 },
            },
            loc: { start: 1701, end: 1705 },
          },
          directives: [],
          loc: { start: 1693, end: 1705 },
        },
      ],
      loc: { start: 1673, end: 1707 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1715, end: 1726 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1729, end: 1739 },
          },
          loc: { start: 1729, end: 1739 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1742, end: 1755 },
          },
          loc: { start: 1742, end: 1755 },
        },
      ],
      loc: { start: 1709, end: 1755 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'Date', loc: { start: 1764, end: 1768 } },
      directives: [],
      loc: { start: 1757, end: 1768 },
    },
  ],
  loc: { start: 0, end: 1768 },
} as unknown as DocumentNode;
