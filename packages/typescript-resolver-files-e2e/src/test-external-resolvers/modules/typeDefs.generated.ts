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
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'DateTimeNamedImport',
        loc: { start: 421, end: 440 },
      },
      directives: [],
      loc: { start: 414, end: 440 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'DateTimeSameNamedImport',
        loc: { start: 449, end: 472 },
      },
      directives: [],
      loc: { start: 442, end: 472 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigIntNamedWithAlias',
        loc: { start: 481, end: 501 },
      },
      directives: [],
      loc: { start: 474, end: 501 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigIntSameNamedWithAlias',
        loc: { start: 510, end: 534 },
      },
      directives: [],
      loc: { start: 503, end: 534 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'AbsoluteDefault',
        loc: { start: 543, end: 558 },
      },
      directives: [],
      loc: { start: 536, end: 558 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 571, end: 576 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 581, end: 590 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 591, end: 593 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 595, end: 597 },
                  },
                  loc: { start: 595, end: 597 },
                },
                loc: { start: 595, end: 598 },
              },
              directives: [],
              loc: { start: 591, end: 598 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 601, end: 617 },
              },
              loc: { start: 601, end: 617 },
            },
            loc: { start: 601, end: 618 },
          },
          directives: [],
          loc: { start: 581, end: 618 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 621, end: 640 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 641, end: 646 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 648, end: 672 },
                  },
                  loc: { start: 648, end: 672 },
                },
                loc: { start: 648, end: 673 },
              },
              directives: [],
              loc: { start: 641, end: 673 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 676, end: 702 },
              },
              loc: { start: 676, end: 702 },
            },
            loc: { start: 676, end: 703 },
          },
          directives: [],
          loc: { start: 621, end: 703 },
        },
      ],
      loc: { start: 559, end: 705 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 719, end: 727 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 732, end: 743 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 744, end: 749 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 751, end: 767 },
                  },
                  loc: { start: 751, end: 767 },
                },
                loc: { start: 751, end: 768 },
              },
              directives: [],
              loc: { start: 744, end: 768 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 771, end: 789 },
              },
              loc: { start: 771, end: 789 },
            },
            loc: { start: 771, end: 790 },
          },
          directives: [],
          loc: { start: 732, end: 790 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 793, end: 802 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 803, end: 808 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 810, end: 824 },
                  },
                  loc: { start: 810, end: 824 },
                },
                loc: { start: 810, end: 825 },
              },
              directives: [],
              loc: { start: 803, end: 825 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 828, end: 844 },
              },
              loc: { start: 828, end: 844 },
            },
            loc: { start: 828, end: 845 },
          },
          directives: [],
          loc: { start: 793, end: 845 },
        },
      ],
      loc: { start: 707, end: 847 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 854, end: 859 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 864, end: 866 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 868, end: 870 },
              },
              loc: { start: 868, end: 870 },
            },
            loc: { start: 868, end: 871 },
          },
          directives: [],
          loc: { start: 864, end: 871 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 874, end: 878 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 880, end: 886 },
              },
              loc: { start: 880, end: 886 },
            },
            loc: { start: 880, end: 887 },
          },
          directives: [],
          loc: { start: 874, end: 887 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 890, end: 893 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 895, end: 901 },
            },
            loc: { start: 895, end: 901 },
          },
          directives: [],
          loc: { start: 890, end: 901 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 904, end: 911 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 913, end: 917 },
              },
              loc: { start: 913, end: 917 },
            },
            loc: { start: 913, end: 918 },
          },
          directives: [],
          loc: { start: 904, end: 918 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 921, end: 930 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 932, end: 940 },
              },
              loc: { start: 932, end: 940 },
            },
            loc: { start: 932, end: 941 },
          },
          directives: [],
          loc: { start: 921, end: 941 },
        },
      ],
      loc: { start: 849, end: 943 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 950, end: 965 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 970, end: 976 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 978, end: 983 },
            },
            loc: { start: 978, end: 983 },
          },
          directives: [],
          loc: { start: 970, end: 983 },
        },
      ],
      loc: { start: 945, end: 985 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 993, end: 1009 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1012, end: 1027 },
          },
          loc: { start: 1012, end: 1027 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1030, end: 1043 },
          },
          loc: { start: 1030, end: 1043 },
        },
      ],
      loc: { start: 987, end: 1043 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1051, end: 1075 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1080, end: 1086 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1088, end: 1090 },
              },
              loc: { start: 1088, end: 1090 },
            },
            loc: { start: 1088, end: 1091 },
          },
          directives: [],
          loc: { start: 1080, end: 1091 },
        },
      ],
      loc: { start: 1045, end: 1093 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1100, end: 1125 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1130, end: 1136 },
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
                    loc: { start: 1139, end: 1144 },
                  },
                  loc: { start: 1139, end: 1144 },
                },
                loc: { start: 1139, end: 1145 },
              },
              loc: { start: 1138, end: 1146 },
            },
            loc: { start: 1138, end: 1147 },
          },
          directives: [],
          loc: { start: 1130, end: 1147 },
        },
      ],
      loc: { start: 1095, end: 1149 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1157, end: 1183 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1186, end: 1211 },
          },
          loc: { start: 1186, end: 1211 },
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
      loc: { start: 1151, end: 1227 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1235, end: 1251 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1256, end: 1260 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1262, end: 1268 },
              },
              loc: { start: 1262, end: 1268 },
            },
            loc: { start: 1262, end: 1269 },
          },
          directives: [],
          loc: { start: 1256, end: 1269 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1272, end: 1275 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1277, end: 1283 },
            },
            loc: { start: 1277, end: 1283 },
          },
          directives: [],
          loc: { start: 1272, end: 1283 },
        },
      ],
      loc: { start: 1229, end: 1285 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1292, end: 1309 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1314, end: 1320 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1322, end: 1327 },
              },
              loc: { start: 1322, end: 1327 },
            },
            loc: { start: 1322, end: 1328 },
          },
          directives: [],
          loc: { start: 1314, end: 1328 },
        },
      ],
      loc: { start: 1287, end: 1330 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1338, end: 1356 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1359, end: 1376 },
          },
          loc: { start: 1359, end: 1376 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1379, end: 1392 },
          },
          loc: { start: 1379, end: 1392 },
        },
      ],
      loc: { start: 1332, end: 1392 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1400, end: 1414 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1419, end: 1421 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1423, end: 1425 },
              },
              loc: { start: 1423, end: 1425 },
            },
            loc: { start: 1423, end: 1426 },
          },
          directives: [],
          loc: { start: 1419, end: 1426 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1429, end: 1433 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1435, end: 1441 },
              },
              loc: { start: 1435, end: 1441 },
            },
            loc: { start: 1435, end: 1442 },
          },
          directives: [],
          loc: { start: 1429, end: 1442 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1445, end: 1448 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1450, end: 1456 },
            },
            loc: { start: 1450, end: 1456 },
          },
          directives: [],
          loc: { start: 1445, end: 1456 },
        },
      ],
      loc: { start: 1394, end: 1458 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1465, end: 1480 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1485, end: 1491 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1493, end: 1498 },
              },
              loc: { start: 1493, end: 1498 },
            },
            loc: { start: 1493, end: 1499 },
          },
          directives: [],
          loc: { start: 1485, end: 1499 },
        },
      ],
      loc: { start: 1460, end: 1501 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1509, end: 1525 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1528, end: 1543 },
          },
          loc: { start: 1528, end: 1543 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1546, end: 1559 },
          },
          loc: { start: 1546, end: 1559 },
        },
      ],
      loc: { start: 1503, end: 1559 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1572, end: 1584 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1589, end: 1603 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1605, end: 1612 },
              },
              loc: { start: 1605, end: 1612 },
            },
            loc: { start: 1605, end: 1613 },
          },
          directives: [],
          loc: { start: 1589, end: 1613 },
        },
      ],
      loc: { start: 1560, end: 1615 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1622, end: 1629 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1634, end: 1636 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1638, end: 1640 },
              },
              loc: { start: 1638, end: 1640 },
            },
            loc: { start: 1638, end: 1641 },
          },
          directives: [],
          loc: { start: 1634, end: 1641 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1644, end: 1648 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1650, end: 1654 },
              },
              loc: { start: 1650, end: 1654 },
            },
            loc: { start: 1650, end: 1655 },
          },
          directives: [],
          loc: { start: 1644, end: 1655 },
        },
      ],
      loc: { start: 1617, end: 1657 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1670, end: 1675 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1680, end: 1682 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1684, end: 1695 },
              },
              loc: { start: 1684, end: 1695 },
            },
            loc: { start: 1684, end: 1696 },
          },
          directives: [],
          loc: { start: 1680, end: 1696 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1699, end: 1716 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1717, end: 1728 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1730, end: 1736 },
                  },
                  loc: { start: 1730, end: 1736 },
                },
                loc: { start: 1730, end: 1737 },
              },
              directives: [],
              loc: { start: 1717, end: 1737 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1740, end: 1751 },
              },
              loc: { start: 1740, end: 1751 },
            },
            loc: { start: 1740, end: 1752 },
          },
          directives: [],
          loc: { start: 1699, end: 1752 },
        },
      ],
      loc: { start: 1658, end: 1754 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1761, end: 1765 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1770, end: 1772 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1774, end: 1776 },
              },
              loc: { start: 1774, end: 1776 },
            },
            loc: { start: 1774, end: 1777 },
          },
          directives: [],
          loc: { start: 1770, end: 1777 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1780, end: 1784 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1786, end: 1792 },
            },
            loc: { start: 1786, end: 1792 },
          },
          directives: [],
          loc: { start: 1780, end: 1792 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1795, end: 1806 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1808, end: 1814 },
              },
              loc: { start: 1808, end: 1814 },
            },
            loc: { start: 1808, end: 1815 },
          },
          directives: [],
          loc: { start: 1795, end: 1815 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1818, end: 1832 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1834, end: 1840 },
            },
            loc: { start: 1834, end: 1840 },
          },
          directives: [],
          loc: { start: 1818, end: 1840 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1843, end: 1857 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1859, end: 1865 },
            },
            loc: { start: 1859, end: 1865 },
          },
          directives: [],
          loc: { start: 1843, end: 1865 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1868, end: 1881 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1883, end: 1889 },
            },
            loc: { start: 1883, end: 1889 },
          },
          directives: [],
          loc: { start: 1868, end: 1889 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1892, end: 1907 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1909, end: 1915 },
            },
            loc: { start: 1909, end: 1915 },
          },
          directives: [],
          loc: { start: 1892, end: 1915 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1918, end: 1924 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1926, end: 1932 },
            },
            loc: { start: 1926, end: 1932 },
          },
          directives: [],
          loc: { start: 1918, end: 1932 },
        },
      ],
      loc: { start: 1756, end: 1934 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1941, end: 1951 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1956, end: 1962 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1964, end: 1968 },
            },
            loc: { start: 1964, end: 1968 },
          },
          directives: [],
          loc: { start: 1956, end: 1968 },
        },
      ],
      loc: { start: 1936, end: 1970 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1978, end: 1989 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1992, end: 2002 },
          },
          loc: { start: 1992, end: 2002 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 2005, end: 2018 },
          },
          loc: { start: 2005, end: 2018 },
        },
      ],
      loc: { start: 1972, end: 2018 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'RelativeDefault',
        loc: { start: 2027, end: 2042 },
      },
      directives: [],
      loc: { start: 2020, end: 2042 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'RelativeNamedImport',
        loc: { start: 2050, end: 2069 },
      },
      directives: [],
      loc: { start: 2043, end: 2069 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'RelativeNamedImportWithAlias',
        loc: { start: 2077, end: 2105 },
      },
      directives: [],
      loc: { start: 2070, end: 2105 },
    },
  ],
  loc: { start: 0, end: 2105 },
} as unknown as DocumentNode;
