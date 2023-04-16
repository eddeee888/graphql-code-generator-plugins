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
            value: 'creator',
            loc: { start: 781, end: 788 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 790, end: 794 },
              },
              loc: { start: 790, end: 794 },
            },
            loc: { start: 790, end: 795 },
          },
          directives: [],
          loc: { start: 781, end: 795 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 798, end: 807 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 809, end: 817 },
              },
              loc: { start: 809, end: 817 },
            },
            loc: { start: 809, end: 818 },
          },
          directives: [],
          loc: { start: 798, end: 818 },
        },
      ],
      loc: { start: 726, end: 820 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 827, end: 842 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 847, end: 853 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 855, end: 860 },
            },
            loc: { start: 855, end: 860 },
          },
          directives: [],
          loc: { start: 847, end: 860 },
        },
      ],
      loc: { start: 822, end: 862 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 870, end: 886 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 889, end: 904 },
          },
          loc: { start: 889, end: 904 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 907, end: 919 },
          },
          loc: { start: 907, end: 919 },
        },
      ],
      loc: { start: 864, end: 919 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 927, end: 951 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 956, end: 962 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 964, end: 966 },
              },
              loc: { start: 964, end: 966 },
            },
            loc: { start: 964, end: 967 },
          },
          directives: [],
          loc: { start: 956, end: 967 },
        },
      ],
      loc: { start: 921, end: 969 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 976, end: 1001 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1006, end: 1012 },
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
                    loc: { start: 1015, end: 1020 },
                  },
                  loc: { start: 1015, end: 1020 },
                },
                loc: { start: 1015, end: 1021 },
              },
              loc: { start: 1014, end: 1022 },
            },
            loc: { start: 1014, end: 1023 },
          },
          directives: [],
          loc: { start: 1006, end: 1023 },
        },
      ],
      loc: { start: 971, end: 1025 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1033, end: 1059 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1062, end: 1087 },
          },
          loc: { start: 1062, end: 1087 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1090, end: 1102 },
          },
          loc: { start: 1090, end: 1102 },
        },
      ],
      loc: { start: 1027, end: 1102 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1110, end: 1126 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1131, end: 1135 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1137, end: 1143 },
              },
              loc: { start: 1137, end: 1143 },
            },
            loc: { start: 1137, end: 1144 },
          },
          directives: [],
          loc: { start: 1131, end: 1144 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1147, end: 1150 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1152, end: 1158 },
            },
            loc: { start: 1152, end: 1158 },
          },
          directives: [],
          loc: { start: 1147, end: 1158 },
        },
      ],
      loc: { start: 1104, end: 1160 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1167, end: 1184 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1189, end: 1195 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1197, end: 1202 },
              },
              loc: { start: 1197, end: 1202 },
            },
            loc: { start: 1197, end: 1203 },
          },
          directives: [],
          loc: { start: 1189, end: 1203 },
        },
      ],
      loc: { start: 1162, end: 1205 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1213, end: 1231 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1234, end: 1251 },
          },
          loc: { start: 1234, end: 1251 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1254, end: 1266 },
          },
          loc: { start: 1254, end: 1266 },
        },
      ],
      loc: { start: 1207, end: 1266 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1274, end: 1288 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1293, end: 1295 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1297, end: 1299 },
              },
              loc: { start: 1297, end: 1299 },
            },
            loc: { start: 1297, end: 1300 },
          },
          directives: [],
          loc: { start: 1293, end: 1300 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1303, end: 1307 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1309, end: 1315 },
              },
              loc: { start: 1309, end: 1315 },
            },
            loc: { start: 1309, end: 1316 },
          },
          directives: [],
          loc: { start: 1303, end: 1316 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1319, end: 1322 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1324, end: 1330 },
            },
            loc: { start: 1324, end: 1330 },
          },
          directives: [],
          loc: { start: 1319, end: 1330 },
        },
      ],
      loc: { start: 1268, end: 1332 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1339, end: 1354 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1359, end: 1365 },
          },
          arguments: [],
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
          directives: [],
          loc: { start: 1359, end: 1373 },
        },
      ],
      loc: { start: 1334, end: 1375 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1383, end: 1399 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1402, end: 1417 },
          },
          loc: { start: 1402, end: 1417 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1420, end: 1432 },
          },
          loc: { start: 1420, end: 1432 },
        },
      ],
      loc: { start: 1377, end: 1432 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1445, end: 1457 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1462, end: 1476 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1478, end: 1485 },
              },
              loc: { start: 1478, end: 1485 },
            },
            loc: { start: 1478, end: 1486 },
          },
          directives: [],
          loc: { start: 1462, end: 1486 },
        },
      ],
      loc: { start: 1433, end: 1488 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1495, end: 1502 } },
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
            value: 'user',
            loc: { start: 1517, end: 1521 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1523, end: 1527 },
              },
              loc: { start: 1523, end: 1527 },
            },
            loc: { start: 1523, end: 1528 },
          },
          directives: [],
          loc: { start: 1517, end: 1528 },
        },
      ],
      loc: { start: 1490, end: 1530 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1543, end: 1548 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1553, end: 1555 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1557, end: 1568 },
              },
              loc: { start: 1557, end: 1568 },
            },
            loc: { start: 1557, end: 1569 },
          },
          directives: [],
          loc: { start: 1553, end: 1569 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1572, end: 1589 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1590, end: 1601 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1603, end: 1609 },
                  },
                  loc: { start: 1603, end: 1609 },
                },
                loc: { start: 1603, end: 1610 },
              },
              directives: [],
              loc: { start: 1590, end: 1610 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1613, end: 1624 },
              },
              loc: { start: 1613, end: 1624 },
            },
            loc: { start: 1613, end: 1625 },
          },
          directives: [],
          loc: { start: 1572, end: 1625 },
        },
      ],
      loc: { start: 1531, end: 1627 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1634, end: 1638 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1643, end: 1645 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1647, end: 1649 },
              },
              loc: { start: 1647, end: 1649 },
            },
            loc: { start: 1647, end: 1650 },
          },
          directives: [],
          loc: { start: 1643, end: 1650 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1653, end: 1657 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1659, end: 1665 },
            },
            loc: { start: 1659, end: 1665 },
          },
          directives: [],
          loc: { start: 1653, end: 1665 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1668, end: 1679 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1681, end: 1687 },
              },
              loc: { start: 1681, end: 1687 },
            },
            loc: { start: 1681, end: 1688 },
          },
          directives: [],
          loc: { start: 1668, end: 1688 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1691, end: 1705 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1707, end: 1713 },
            },
            loc: { start: 1707, end: 1713 },
          },
          directives: [],
          loc: { start: 1691, end: 1713 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1716, end: 1730 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1732, end: 1738 },
            },
            loc: { start: 1732, end: 1738 },
          },
          directives: [],
          loc: { start: 1716, end: 1738 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1741, end: 1754 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1756, end: 1762 },
            },
            loc: { start: 1756, end: 1762 },
          },
          directives: [],
          loc: { start: 1741, end: 1762 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1765, end: 1780 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1782, end: 1788 },
            },
            loc: { start: 1782, end: 1788 },
          },
          directives: [],
          loc: { start: 1765, end: 1788 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1791, end: 1797 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1799, end: 1805 },
            },
            loc: { start: 1799, end: 1805 },
          },
          directives: [],
          loc: { start: 1791, end: 1805 },
        },
      ],
      loc: { start: 1629, end: 1807 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1814, end: 1824 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1829, end: 1835 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1837, end: 1841 },
            },
            loc: { start: 1837, end: 1841 },
          },
          directives: [],
          loc: { start: 1829, end: 1841 },
        },
      ],
      loc: { start: 1809, end: 1843 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1851, end: 1862 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1865, end: 1875 },
          },
          loc: { start: 1865, end: 1875 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1878, end: 1890 },
          },
          loc: { start: 1878, end: 1890 },
        },
      ],
      loc: { start: 1845, end: 1890 },
    },
  ],
  loc: { start: 0, end: 1891 },
} as unknown as DocumentNode;
