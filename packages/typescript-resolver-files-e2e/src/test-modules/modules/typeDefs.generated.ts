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
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 33, end: 45 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 28, end: 45 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 57, end: 62 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 67, end: 72 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 74, end: 83 },
              },
              loc: { start: 74, end: 83 },
            },
            loc: { start: 74, end: 84 },
          },
          directives: [],
          loc: { start: 67, end: 84 },
        },
      ],
      loc: { start: 47, end: 86 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StandardError',
        loc: { start: 93, end: 106 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 118, end: 123 } },
          loc: { start: 118, end: 123 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 128, end: 133 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 135, end: 144 },
              },
              loc: { start: 135, end: 144 },
            },
            loc: { start: 135, end: 145 },
          },
          directives: [],
          loc: { start: 128, end: 145 },
        },
      ],
      loc: { start: 88, end: 147 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 154, end: 163 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 168, end: 177 },
          },
          directives: [],
          loc: { start: 168, end: 177 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 180, end: 202 },
          },
          directives: [],
          loc: { start: 180, end: 202 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 205, end: 220 },
          },
          directives: [],
          loc: { start: 205, end: 220 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 223, end: 239 },
          },
          directives: [],
          loc: { start: 223, end: 239 },
        },
      ],
      loc: { start: 149, end: 241 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 249, end: 264 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 269, end: 283 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 285, end: 288 } },
            loc: { start: 285, end: 288 },
          },
          directives: [],
          loc: { start: 269, end: 288 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 291, end: 295 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 297, end: 300 } },
            loc: { start: 297, end: 300 },
          },
          directives: [],
          loc: { start: 291, end: 300 },
        },
      ],
      loc: { start: 243, end: 302 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 309, end: 325 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 330, end: 341 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 343, end: 346 },
              },
              loc: { start: 343, end: 346 },
            },
            loc: { start: 343, end: 347 },
          },
          directives: [],
          loc: { start: 330, end: 347 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 350, end: 364 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 366, end: 369 },
              },
              loc: { start: 366, end: 369 },
            },
            loc: { start: 366, end: 370 },
          },
          directives: [],
          loc: { start: 350, end: 370 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 373, end: 387 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 389, end: 392 },
              },
              loc: { start: 389, end: 392 },
            },
            loc: { start: 389, end: 393 },
          },
          directives: [],
          loc: { start: 373, end: 393 },
        },
      ],
      loc: { start: 304, end: 395 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 404, end: 412 } },
      directives: [],
      loc: { start: 397, end: 412 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 425, end: 430 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 435, end: 444 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 445, end: 447 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 449, end: 451 },
                  },
                  loc: { start: 449, end: 451 },
                },
                loc: { start: 449, end: 452 },
              },
              directives: [],
              loc: { start: 445, end: 452 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 455, end: 471 },
              },
              loc: { start: 455, end: 471 },
            },
            loc: { start: 455, end: 472 },
          },
          directives: [],
          loc: { start: 435, end: 472 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 475, end: 494 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 495, end: 500 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 502, end: 526 },
                  },
                  loc: { start: 502, end: 526 },
                },
                loc: { start: 502, end: 527 },
              },
              directives: [],
              loc: { start: 495, end: 527 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 530, end: 556 },
              },
              loc: { start: 530, end: 556 },
            },
            loc: { start: 530, end: 557 },
          },
          directives: [],
          loc: { start: 475, end: 557 },
        },
      ],
      loc: { start: 413, end: 559 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 573, end: 581 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 586, end: 597 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 598, end: 603 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 605, end: 621 },
                  },
                  loc: { start: 605, end: 621 },
                },
                loc: { start: 605, end: 622 },
              },
              directives: [],
              loc: { start: 598, end: 622 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 625, end: 643 },
              },
              loc: { start: 625, end: 643 },
            },
            loc: { start: 625, end: 644 },
          },
          directives: [],
          loc: { start: 586, end: 644 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 647, end: 656 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 657, end: 662 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 664, end: 678 },
                  },
                  loc: { start: 664, end: 678 },
                },
                loc: { start: 664, end: 679 },
              },
              directives: [],
              loc: { start: 657, end: 679 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 682, end: 698 },
              },
              loc: { start: 682, end: 698 },
            },
            loc: { start: 682, end: 699 },
          },
          directives: [],
          loc: { start: 647, end: 699 },
        },
      ],
      loc: { start: 561, end: 701 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 708, end: 713 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 718, end: 720 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 722, end: 724 },
              },
              loc: { start: 722, end: 724 },
            },
            loc: { start: 722, end: 725 },
          },
          directives: [],
          loc: { start: 718, end: 725 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 728, end: 732 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 734, end: 740 },
              },
              loc: { start: 734, end: 740 },
            },
            loc: { start: 734, end: 741 },
          },
          directives: [],
          loc: { start: 728, end: 741 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 744, end: 747 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 749, end: 755 },
            },
            loc: { start: 749, end: 755 },
          },
          directives: [],
          loc: { start: 744, end: 755 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 758, end: 765 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 767, end: 771 },
              },
              loc: { start: 767, end: 771 },
            },
            loc: { start: 767, end: 772 },
          },
          directives: [],
          loc: { start: 758, end: 772 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 775, end: 784 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 786, end: 794 },
              },
              loc: { start: 786, end: 794 },
            },
            loc: { start: 786, end: 795 },
          },
          directives: [],
          loc: { start: 775, end: 795 },
        },
      ],
      loc: { start: 703, end: 797 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 804, end: 819 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 824, end: 830 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 832, end: 837 },
            },
            loc: { start: 832, end: 837 },
          },
          directives: [],
          loc: { start: 824, end: 837 },
        },
      ],
      loc: { start: 799, end: 839 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 847, end: 863 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 866, end: 881 },
          },
          loc: { start: 866, end: 881 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 884, end: 897 },
          },
          loc: { start: 884, end: 897 },
        },
      ],
      loc: { start: 841, end: 897 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 905, end: 929 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 934, end: 940 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 942, end: 944 },
              },
              loc: { start: 942, end: 944 },
            },
            loc: { start: 942, end: 945 },
          },
          directives: [],
          loc: { start: 934, end: 945 },
        },
      ],
      loc: { start: 899, end: 947 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 954, end: 979 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 984, end: 990 },
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
                    loc: { start: 993, end: 998 },
                  },
                  loc: { start: 993, end: 998 },
                },
                loc: { start: 993, end: 999 },
              },
              loc: { start: 992, end: 1000 },
            },
            loc: { start: 992, end: 1001 },
          },
          directives: [],
          loc: { start: 984, end: 1001 },
        },
      ],
      loc: { start: 949, end: 1003 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1011, end: 1037 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1040, end: 1065 },
          },
          loc: { start: 1040, end: 1065 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1068, end: 1081 },
          },
          loc: { start: 1068, end: 1081 },
        },
      ],
      loc: { start: 1005, end: 1081 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1089, end: 1105 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1110, end: 1114 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1116, end: 1122 },
              },
              loc: { start: 1116, end: 1122 },
            },
            loc: { start: 1116, end: 1123 },
          },
          directives: [],
          loc: { start: 1110, end: 1123 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1126, end: 1129 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1131, end: 1137 },
            },
            loc: { start: 1131, end: 1137 },
          },
          directives: [],
          loc: { start: 1126, end: 1137 },
        },
      ],
      loc: { start: 1083, end: 1139 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1146, end: 1163 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1168, end: 1174 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1176, end: 1181 },
              },
              loc: { start: 1176, end: 1181 },
            },
            loc: { start: 1176, end: 1182 },
          },
          directives: [],
          loc: { start: 1168, end: 1182 },
        },
      ],
      loc: { start: 1141, end: 1184 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1192, end: 1210 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1213, end: 1230 },
          },
          loc: { start: 1213, end: 1230 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1233, end: 1246 },
          },
          loc: { start: 1233, end: 1246 },
        },
      ],
      loc: { start: 1186, end: 1246 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1254, end: 1268 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1273, end: 1275 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1277, end: 1279 },
              },
              loc: { start: 1277, end: 1279 },
            },
            loc: { start: 1277, end: 1280 },
          },
          directives: [],
          loc: { start: 1273, end: 1280 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1283, end: 1287 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1289, end: 1295 },
              },
              loc: { start: 1289, end: 1295 },
            },
            loc: { start: 1289, end: 1296 },
          },
          directives: [],
          loc: { start: 1283, end: 1296 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1299, end: 1302 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1304, end: 1310 },
            },
            loc: { start: 1304, end: 1310 },
          },
          directives: [],
          loc: { start: 1299, end: 1310 },
        },
      ],
      loc: { start: 1248, end: 1312 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1319, end: 1334 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1339, end: 1345 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1347, end: 1352 },
              },
              loc: { start: 1347, end: 1352 },
            },
            loc: { start: 1347, end: 1353 },
          },
          directives: [],
          loc: { start: 1339, end: 1353 },
        },
      ],
      loc: { start: 1314, end: 1355 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1363, end: 1379 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1382, end: 1397 },
          },
          loc: { start: 1382, end: 1397 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1400, end: 1413 },
          },
          loc: { start: 1400, end: 1413 },
        },
      ],
      loc: { start: 1357, end: 1413 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1426, end: 1438 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1443, end: 1457 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1459, end: 1466 },
              },
              loc: { start: 1459, end: 1466 },
            },
            loc: { start: 1459, end: 1467 },
          },
          directives: [],
          loc: { start: 1443, end: 1467 },
        },
      ],
      loc: { start: 1414, end: 1469 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1476, end: 1483 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1488, end: 1490 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1492, end: 1494 },
              },
              loc: { start: 1492, end: 1494 },
            },
            loc: { start: 1492, end: 1495 },
          },
          directives: [],
          loc: { start: 1488, end: 1495 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1498, end: 1502 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1504, end: 1508 },
              },
              loc: { start: 1504, end: 1508 },
            },
            loc: { start: 1504, end: 1509 },
          },
          directives: [],
          loc: { start: 1498, end: 1509 },
        },
      ],
      loc: { start: 1471, end: 1511 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1524, end: 1529 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1534, end: 1536 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1538, end: 1549 },
              },
              loc: { start: 1538, end: 1549 },
            },
            loc: { start: 1538, end: 1550 },
          },
          directives: [],
          loc: { start: 1534, end: 1550 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1553, end: 1570 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1571, end: 1582 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1584, end: 1590 },
                  },
                  loc: { start: 1584, end: 1590 },
                },
                loc: { start: 1584, end: 1591 },
              },
              directives: [],
              loc: { start: 1571, end: 1591 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1594, end: 1605 },
              },
              loc: { start: 1594, end: 1605 },
            },
            loc: { start: 1594, end: 1606 },
          },
          directives: [],
          loc: { start: 1553, end: 1606 },
        },
      ],
      loc: { start: 1512, end: 1608 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1615, end: 1619 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1624, end: 1626 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1628, end: 1630 },
              },
              loc: { start: 1628, end: 1630 },
            },
            loc: { start: 1628, end: 1631 },
          },
          directives: [],
          loc: { start: 1624, end: 1631 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1634, end: 1638 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1640, end: 1646 },
            },
            loc: { start: 1640, end: 1646 },
          },
          directives: [],
          loc: { start: 1634, end: 1646 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1649, end: 1660 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1662, end: 1668 },
              },
              loc: { start: 1662, end: 1668 },
            },
            loc: { start: 1662, end: 1669 },
          },
          directives: [],
          loc: { start: 1649, end: 1669 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1672, end: 1686 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1688, end: 1694 },
            },
            loc: { start: 1688, end: 1694 },
          },
          directives: [],
          loc: { start: 1672, end: 1694 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1697, end: 1711 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1713, end: 1719 },
            },
            loc: { start: 1713, end: 1719 },
          },
          directives: [],
          loc: { start: 1697, end: 1719 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1722, end: 1735 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1737, end: 1743 },
            },
            loc: { start: 1737, end: 1743 },
          },
          directives: [],
          loc: { start: 1722, end: 1743 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1746, end: 1761 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1763, end: 1769 },
            },
            loc: { start: 1763, end: 1769 },
          },
          directives: [],
          loc: { start: 1746, end: 1769 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1772, end: 1778 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1780, end: 1786 },
            },
            loc: { start: 1780, end: 1786 },
          },
          directives: [],
          loc: { start: 1772, end: 1786 },
        },
      ],
      loc: { start: 1610, end: 1788 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1795, end: 1805 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1810, end: 1816 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1818, end: 1822 },
            },
            loc: { start: 1818, end: 1822 },
          },
          directives: [],
          loc: { start: 1810, end: 1822 },
        },
      ],
      loc: { start: 1790, end: 1824 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1832, end: 1843 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1846, end: 1856 },
          },
          loc: { start: 1846, end: 1856 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1859, end: 1872 },
          },
          loc: { start: 1859, end: 1872 },
        },
      ],
      loc: { start: 1826, end: 1872 },
    },
  ],
  loc: { start: 0, end: 1872 },
} as unknown as DocumentNode;
