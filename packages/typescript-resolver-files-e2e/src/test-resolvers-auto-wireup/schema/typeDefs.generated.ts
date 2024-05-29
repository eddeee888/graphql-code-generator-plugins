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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 441, end: 444 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 449, end: 451 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 453, end: 455 },
              },
              loc: { start: 453, end: 455 },
            },
            loc: { start: 453, end: 456 },
          },
          directives: [],
          loc: { start: 449, end: 456 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 459, end: 463 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 465, end: 471 },
              },
              loc: { start: 465, end: 471 },
            },
            loc: { start: 465, end: 472 },
          },
          directives: [],
          loc: { start: 459, end: 472 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'primaryOwner',
            loc: { start: 475, end: 487 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 489, end: 493 },
              },
              loc: { start: 489, end: 493 },
            },
            loc: { start: 489, end: 494 },
          },
          directives: [],
          loc: { start: 475, end: 494 },
        },
      ],
      loc: { start: 436, end: 496 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 510, end: 514 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pets', loc: { start: 519, end: 523 } },
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
                    loc: { start: 526, end: 529 },
                  },
                  loc: { start: 526, end: 529 },
                },
                loc: { start: 526, end: 530 },
              },
              loc: { start: 525, end: 531 },
            },
            loc: { start: 525, end: 532 },
          },
          directives: [],
          loc: { start: 519, end: 532 },
        },
      ],
      loc: { start: 498, end: 534 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 547, end: 552 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 557, end: 566 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 567, end: 569 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 571, end: 573 },
                  },
                  loc: { start: 571, end: 573 },
                },
                loc: { start: 571, end: 574 },
              },
              directives: [],
              loc: { start: 567, end: 574 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 577, end: 593 },
              },
              loc: { start: 577, end: 593 },
            },
            loc: { start: 577, end: 594 },
          },
          directives: [],
          loc: { start: 557, end: 594 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 597, end: 616 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 617, end: 622 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 624, end: 648 },
                  },
                  loc: { start: 624, end: 648 },
                },
                loc: { start: 624, end: 649 },
              },
              directives: [],
              loc: { start: 617, end: 649 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 652, end: 678 },
              },
              loc: { start: 652, end: 678 },
            },
            loc: { start: 652, end: 679 },
          },
          directives: [],
          loc: { start: 597, end: 679 },
        },
      ],
      loc: { start: 535, end: 681 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 695, end: 703 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 708, end: 719 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 720, end: 725 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 727, end: 743 },
                  },
                  loc: { start: 727, end: 743 },
                },
                loc: { start: 727, end: 744 },
              },
              directives: [],
              loc: { start: 720, end: 744 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 747, end: 765 },
              },
              loc: { start: 747, end: 765 },
            },
            loc: { start: 747, end: 766 },
          },
          directives: [],
          loc: { start: 708, end: 766 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 769, end: 778 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 779, end: 784 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 786, end: 800 },
                  },
                  loc: { start: 786, end: 800 },
                },
                loc: { start: 786, end: 801 },
              },
              directives: [],
              loc: { start: 779, end: 801 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 804, end: 820 },
              },
              loc: { start: 804, end: 820 },
            },
            loc: { start: 804, end: 821 },
          },
          directives: [],
          loc: { start: 769, end: 821 },
        },
      ],
      loc: { start: 683, end: 823 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 830, end: 835 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 840, end: 842 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 844, end: 846 },
              },
              loc: { start: 844, end: 846 },
            },
            loc: { start: 844, end: 847 },
          },
          directives: [],
          loc: { start: 840, end: 847 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 850, end: 854 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 856, end: 862 },
              },
              loc: { start: 856, end: 862 },
            },
            loc: { start: 856, end: 863 },
          },
          directives: [],
          loc: { start: 850, end: 863 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 866, end: 869 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 871, end: 877 },
            },
            loc: { start: 871, end: 877 },
          },
          directives: [],
          loc: { start: 866, end: 877 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 880, end: 887 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 889, end: 893 },
              },
              loc: { start: 889, end: 893 },
            },
            loc: { start: 889, end: 894 },
          },
          directives: [],
          loc: { start: 880, end: 894 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 897, end: 906 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 908, end: 916 },
              },
              loc: { start: 908, end: 916 },
            },
            loc: { start: 908, end: 917 },
          },
          directives: [],
          loc: { start: 897, end: 917 },
        },
      ],
      loc: { start: 825, end: 919 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 926, end: 941 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 946, end: 952 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 954, end: 959 },
            },
            loc: { start: 954, end: 959 },
          },
          directives: [],
          loc: { start: 946, end: 959 },
        },
      ],
      loc: { start: 921, end: 961 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 969, end: 985 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 988, end: 1003 },
          },
          loc: { start: 988, end: 1003 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1006, end: 1018 },
          },
          loc: { start: 1006, end: 1018 },
        },
      ],
      loc: { start: 963, end: 1018 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1026, end: 1050 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1055, end: 1061 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1063, end: 1065 },
              },
              loc: { start: 1063, end: 1065 },
            },
            loc: { start: 1063, end: 1066 },
          },
          directives: [],
          loc: { start: 1055, end: 1066 },
        },
      ],
      loc: { start: 1020, end: 1068 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1075, end: 1100 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1105, end: 1111 },
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
                    loc: { start: 1114, end: 1119 },
                  },
                  loc: { start: 1114, end: 1119 },
                },
                loc: { start: 1114, end: 1120 },
              },
              loc: { start: 1113, end: 1121 },
            },
            loc: { start: 1113, end: 1122 },
          },
          directives: [],
          loc: { start: 1105, end: 1122 },
        },
      ],
      loc: { start: 1070, end: 1124 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1132, end: 1158 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1161, end: 1186 },
          },
          loc: { start: 1161, end: 1186 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1189, end: 1201 },
          },
          loc: { start: 1189, end: 1201 },
        },
      ],
      loc: { start: 1126, end: 1201 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1209, end: 1225 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1230, end: 1234 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1236, end: 1242 },
              },
              loc: { start: 1236, end: 1242 },
            },
            loc: { start: 1236, end: 1243 },
          },
          directives: [],
          loc: { start: 1230, end: 1243 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1246, end: 1249 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1251, end: 1257 },
            },
            loc: { start: 1251, end: 1257 },
          },
          directives: [],
          loc: { start: 1246, end: 1257 },
        },
      ],
      loc: { start: 1203, end: 1259 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1266, end: 1283 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1288, end: 1294 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1296, end: 1301 },
              },
              loc: { start: 1296, end: 1301 },
            },
            loc: { start: 1296, end: 1302 },
          },
          directives: [],
          loc: { start: 1288, end: 1302 },
        },
      ],
      loc: { start: 1261, end: 1304 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1312, end: 1330 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1333, end: 1350 },
          },
          loc: { start: 1333, end: 1350 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1353, end: 1365 },
          },
          loc: { start: 1353, end: 1365 },
        },
      ],
      loc: { start: 1306, end: 1365 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1373, end: 1387 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1392, end: 1394 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1396, end: 1398 },
              },
              loc: { start: 1396, end: 1398 },
            },
            loc: { start: 1396, end: 1399 },
          },
          directives: [],
          loc: { start: 1392, end: 1399 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1402, end: 1406 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1408, end: 1414 },
              },
              loc: { start: 1408, end: 1414 },
            },
            loc: { start: 1408, end: 1415 },
          },
          directives: [],
          loc: { start: 1402, end: 1415 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1418, end: 1421 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1423, end: 1429 },
            },
            loc: { start: 1423, end: 1429 },
          },
          directives: [],
          loc: { start: 1418, end: 1429 },
        },
      ],
      loc: { start: 1367, end: 1431 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1438, end: 1453 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1458, end: 1464 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1466, end: 1471 },
              },
              loc: { start: 1466, end: 1471 },
            },
            loc: { start: 1466, end: 1472 },
          },
          directives: [],
          loc: { start: 1458, end: 1472 },
        },
      ],
      loc: { start: 1433, end: 1474 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1482, end: 1498 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1501, end: 1516 },
          },
          loc: { start: 1501, end: 1516 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1519, end: 1531 },
          },
          loc: { start: 1519, end: 1531 },
        },
      ],
      loc: { start: 1476, end: 1531 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1544, end: 1556 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1561, end: 1575 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1577, end: 1584 },
              },
              loc: { start: 1577, end: 1584 },
            },
            loc: { start: 1577, end: 1585 },
          },
          directives: [],
          loc: { start: 1561, end: 1585 },
        },
      ],
      loc: { start: 1532, end: 1587 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1594, end: 1601 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1606, end: 1608 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1610, end: 1612 },
              },
              loc: { start: 1610, end: 1612 },
            },
            loc: { start: 1610, end: 1613 },
          },
          directives: [],
          loc: { start: 1606, end: 1613 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1616, end: 1620 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1622, end: 1626 },
              },
              loc: { start: 1622, end: 1626 },
            },
            loc: { start: 1622, end: 1627 },
          },
          directives: [],
          loc: { start: 1616, end: 1627 },
        },
      ],
      loc: { start: 1589, end: 1629 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1642, end: 1647 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1652, end: 1654 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1656, end: 1667 },
              },
              loc: { start: 1656, end: 1667 },
            },
            loc: { start: 1656, end: 1668 },
          },
          directives: [],
          loc: { start: 1652, end: 1668 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1671, end: 1688 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1689, end: 1700 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1702, end: 1708 },
                  },
                  loc: { start: 1702, end: 1708 },
                },
                loc: { start: 1702, end: 1709 },
              },
              directives: [],
              loc: { start: 1689, end: 1709 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1712, end: 1723 },
              },
              loc: { start: 1712, end: 1723 },
            },
            loc: { start: 1712, end: 1724 },
          },
          directives: [],
          loc: { start: 1671, end: 1724 },
        },
      ],
      loc: { start: 1630, end: 1726 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1733, end: 1737 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1742, end: 1744 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1746, end: 1748 },
              },
              loc: { start: 1746, end: 1748 },
            },
            loc: { start: 1746, end: 1749 },
          },
          directives: [],
          loc: { start: 1742, end: 1749 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1752, end: 1756 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1758, end: 1764 },
            },
            loc: { start: 1758, end: 1764 },
          },
          directives: [],
          loc: { start: 1752, end: 1764 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1767, end: 1778 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1780, end: 1786 },
              },
              loc: { start: 1780, end: 1786 },
            },
            loc: { start: 1780, end: 1787 },
          },
          directives: [],
          loc: { start: 1767, end: 1787 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1790, end: 1804 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1806, end: 1812 },
            },
            loc: { start: 1806, end: 1812 },
          },
          directives: [],
          loc: { start: 1790, end: 1812 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1815, end: 1829 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1831, end: 1837 },
            },
            loc: { start: 1831, end: 1837 },
          },
          directives: [],
          loc: { start: 1815, end: 1837 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1840, end: 1853 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1855, end: 1861 },
            },
            loc: { start: 1855, end: 1861 },
          },
          directives: [],
          loc: { start: 1840, end: 1861 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1864, end: 1879 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1881, end: 1887 },
            },
            loc: { start: 1881, end: 1887 },
          },
          directives: [],
          loc: { start: 1864, end: 1887 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1890, end: 1896 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1898, end: 1904 },
            },
            loc: { start: 1898, end: 1904 },
          },
          directives: [],
          loc: { start: 1890, end: 1904 },
        },
      ],
      loc: { start: 1728, end: 1906 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1913, end: 1923 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1928, end: 1934 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1936, end: 1940 },
            },
            loc: { start: 1936, end: 1940 },
          },
          directives: [],
          loc: { start: 1928, end: 1940 },
        },
      ],
      loc: { start: 1908, end: 1942 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1950, end: 1961 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1964, end: 1974 },
          },
          loc: { start: 1964, end: 1974 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1977, end: 1989 },
          },
          loc: { start: 1977, end: 1989 },
        },
      ],
      loc: { start: 1944, end: 1989 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Zoo', loc: { start: 1995, end: 1998 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2003, end: 2005 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2007, end: 2009 },
              },
              loc: { start: 2007, end: 2009 },
            },
            loc: { start: 2007, end: 2010 },
          },
          directives: [],
          loc: { start: 2003, end: 2010 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2013, end: 2017 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2019, end: 2025 },
              },
              loc: { start: 2019, end: 2025 },
            },
            loc: { start: 2019, end: 2026 },
          },
          directives: [],
          loc: { start: 2013, end: 2026 },
        },
      ],
      loc: { start: 1990, end: 2028 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Profile', loc: { start: 2042, end: 2049 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'zoo', loc: { start: 2054, end: 2057 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Zoo',
                loc: { start: 2059, end: 2062 },
              },
              loc: { start: 2059, end: 2062 },
            },
            loc: { start: 2059, end: 2063 },
          },
          directives: [],
          loc: { start: 2054, end: 2063 },
        },
      ],
      loc: { start: 2030, end: 2065 },
    },
  ],
  loc: { start: 0, end: 2066 },
} as unknown as DocumentNode;
