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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetToy', loc: { start: 542, end: 548 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 553, end: 555 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 557, end: 559 },
              },
              loc: { start: 557, end: 559 },
            },
            loc: { start: 557, end: 560 },
          },
          directives: [],
          loc: { start: 553, end: 560 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 563, end: 567 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 569, end: 575 },
              },
              loc: { start: 569, end: 575 },
            },
            loc: { start: 569, end: 576 },
          },
          directives: [],
          loc: { start: 563, end: 576 },
        },
      ],
      loc: { start: 537, end: 578 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 592, end: 596 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pets', loc: { start: 601, end: 605 } },
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
                    loc: { start: 608, end: 611 },
                  },
                  loc: { start: 608, end: 611 },
                },
                loc: { start: 608, end: 612 },
              },
              loc: { start: 607, end: 613 },
            },
            loc: { start: 607, end: 614 },
          },
          directives: [],
          loc: { start: 601, end: 614 },
        },
      ],
      loc: { start: 580, end: 616 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 629, end: 634 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 639, end: 648 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 649, end: 651 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 653, end: 655 },
                  },
                  loc: { start: 653, end: 655 },
                },
                loc: { start: 653, end: 656 },
              },
              directives: [],
              loc: { start: 649, end: 656 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 659, end: 675 },
              },
              loc: { start: 659, end: 675 },
            },
            loc: { start: 659, end: 676 },
          },
          directives: [],
          loc: { start: 639, end: 676 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 679, end: 698 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 699, end: 704 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 706, end: 730 },
                  },
                  loc: { start: 706, end: 730 },
                },
                loc: { start: 706, end: 731 },
              },
              directives: [],
              loc: { start: 699, end: 731 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 734, end: 760 },
              },
              loc: { start: 734, end: 760 },
            },
            loc: { start: 734, end: 761 },
          },
          directives: [],
          loc: { start: 679, end: 761 },
        },
      ],
      loc: { start: 617, end: 763 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 777, end: 785 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 790, end: 801 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 802, end: 807 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 809, end: 825 },
                  },
                  loc: { start: 809, end: 825 },
                },
                loc: { start: 809, end: 826 },
              },
              directives: [],
              loc: { start: 802, end: 826 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 829, end: 847 },
              },
              loc: { start: 829, end: 847 },
            },
            loc: { start: 829, end: 848 },
          },
          directives: [],
          loc: { start: 790, end: 848 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 851, end: 860 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 861, end: 866 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 868, end: 882 },
                  },
                  loc: { start: 868, end: 882 },
                },
                loc: { start: 868, end: 883 },
              },
              directives: [],
              loc: { start: 861, end: 883 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 886, end: 902 },
              },
              loc: { start: 886, end: 902 },
            },
            loc: { start: 886, end: 903 },
          },
          directives: [],
          loc: { start: 851, end: 903 },
        },
      ],
      loc: { start: 765, end: 905 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 912, end: 917 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 922, end: 924 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 926, end: 928 },
              },
              loc: { start: 926, end: 928 },
            },
            loc: { start: 926, end: 929 },
          },
          directives: [],
          loc: { start: 922, end: 929 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 932, end: 936 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 938, end: 944 },
              },
              loc: { start: 938, end: 944 },
            },
            loc: { start: 938, end: 945 },
          },
          directives: [],
          loc: { start: 932, end: 945 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 948, end: 951 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 953, end: 959 },
            },
            loc: { start: 953, end: 959 },
          },
          directives: [],
          loc: { start: 948, end: 959 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 962, end: 969 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 971, end: 975 },
              },
              loc: { start: 971, end: 975 },
            },
            loc: { start: 971, end: 976 },
          },
          directives: [],
          loc: { start: 962, end: 976 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 979, end: 988 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 990, end: 998 },
              },
              loc: { start: 990, end: 998 },
            },
            loc: { start: 990, end: 999 },
          },
          directives: [],
          loc: { start: 979, end: 999 },
        },
      ],
      loc: { start: 907, end: 1001 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1008, end: 1023 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1028, end: 1034 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1036, end: 1041 },
            },
            loc: { start: 1036, end: 1041 },
          },
          directives: [],
          loc: { start: 1028, end: 1041 },
        },
      ],
      loc: { start: 1003, end: 1043 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1051, end: 1067 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1070, end: 1085 },
          },
          loc: { start: 1070, end: 1085 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1088, end: 1100 },
          },
          loc: { start: 1088, end: 1100 },
        },
      ],
      loc: { start: 1045, end: 1100 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1108, end: 1132 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1137, end: 1143 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1145, end: 1147 },
              },
              loc: { start: 1145, end: 1147 },
            },
            loc: { start: 1145, end: 1148 },
          },
          directives: [],
          loc: { start: 1137, end: 1148 },
        },
      ],
      loc: { start: 1102, end: 1150 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1157, end: 1182 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1187, end: 1193 },
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
                    loc: { start: 1196, end: 1201 },
                  },
                  loc: { start: 1196, end: 1201 },
                },
                loc: { start: 1196, end: 1202 },
              },
              loc: { start: 1195, end: 1203 },
            },
            loc: { start: 1195, end: 1204 },
          },
          directives: [],
          loc: { start: 1187, end: 1204 },
        },
      ],
      loc: { start: 1152, end: 1206 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1214, end: 1240 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1243, end: 1268 },
          },
          loc: { start: 1243, end: 1268 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1271, end: 1283 },
          },
          loc: { start: 1271, end: 1283 },
        },
      ],
      loc: { start: 1208, end: 1283 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1291, end: 1307 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1312, end: 1316 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1318, end: 1324 },
              },
              loc: { start: 1318, end: 1324 },
            },
            loc: { start: 1318, end: 1325 },
          },
          directives: [],
          loc: { start: 1312, end: 1325 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1328, end: 1331 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1333, end: 1339 },
            },
            loc: { start: 1333, end: 1339 },
          },
          directives: [],
          loc: { start: 1328, end: 1339 },
        },
      ],
      loc: { start: 1285, end: 1341 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1348, end: 1365 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1370, end: 1376 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1378, end: 1383 },
              },
              loc: { start: 1378, end: 1383 },
            },
            loc: { start: 1378, end: 1384 },
          },
          directives: [],
          loc: { start: 1370, end: 1384 },
        },
      ],
      loc: { start: 1343, end: 1386 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1394, end: 1412 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1415, end: 1432 },
          },
          loc: { start: 1415, end: 1432 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1435, end: 1447 },
          },
          loc: { start: 1435, end: 1447 },
        },
      ],
      loc: { start: 1388, end: 1447 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1455, end: 1469 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1474, end: 1476 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1478, end: 1480 },
              },
              loc: { start: 1478, end: 1480 },
            },
            loc: { start: 1478, end: 1481 },
          },
          directives: [],
          loc: { start: 1474, end: 1481 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1484, end: 1488 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1490, end: 1496 },
              },
              loc: { start: 1490, end: 1496 },
            },
            loc: { start: 1490, end: 1497 },
          },
          directives: [],
          loc: { start: 1484, end: 1497 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1500, end: 1503 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1505, end: 1511 },
            },
            loc: { start: 1505, end: 1511 },
          },
          directives: [],
          loc: { start: 1500, end: 1511 },
        },
      ],
      loc: { start: 1449, end: 1513 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1520, end: 1535 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1540, end: 1546 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1548, end: 1553 },
              },
              loc: { start: 1548, end: 1553 },
            },
            loc: { start: 1548, end: 1554 },
          },
          directives: [],
          loc: { start: 1540, end: 1554 },
        },
      ],
      loc: { start: 1515, end: 1556 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1564, end: 1580 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1583, end: 1598 },
          },
          loc: { start: 1583, end: 1598 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1601, end: 1613 },
          },
          loc: { start: 1601, end: 1613 },
        },
      ],
      loc: { start: 1558, end: 1613 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1626, end: 1638 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1643, end: 1657 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1659, end: 1666 },
              },
              loc: { start: 1659, end: 1666 },
            },
            loc: { start: 1659, end: 1667 },
          },
          directives: [],
          loc: { start: 1643, end: 1667 },
        },
      ],
      loc: { start: 1614, end: 1669 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1676, end: 1683 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1688, end: 1690 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1692, end: 1694 },
              },
              loc: { start: 1692, end: 1694 },
            },
            loc: { start: 1692, end: 1695 },
          },
          directives: [],
          loc: { start: 1688, end: 1695 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1698, end: 1702 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1704, end: 1708 },
              },
              loc: { start: 1704, end: 1708 },
            },
            loc: { start: 1704, end: 1709 },
          },
          directives: [],
          loc: { start: 1698, end: 1709 },
        },
      ],
      loc: { start: 1671, end: 1711 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1724, end: 1729 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1734, end: 1736 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1738, end: 1749 },
              },
              loc: { start: 1738, end: 1749 },
            },
            loc: { start: 1738, end: 1750 },
          },
          directives: [],
          loc: { start: 1734, end: 1750 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1753, end: 1770 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1771, end: 1782 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1784, end: 1790 },
                  },
                  loc: { start: 1784, end: 1790 },
                },
                loc: { start: 1784, end: 1791 },
              },
              directives: [],
              loc: { start: 1771, end: 1791 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1794, end: 1805 },
              },
              loc: { start: 1794, end: 1805 },
            },
            loc: { start: 1794, end: 1806 },
          },
          directives: [],
          loc: { start: 1753, end: 1806 },
        },
      ],
      loc: { start: 1712, end: 1808 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1815, end: 1819 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1824, end: 1826 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1828, end: 1830 },
              },
              loc: { start: 1828, end: 1830 },
            },
            loc: { start: 1828, end: 1831 },
          },
          directives: [],
          loc: { start: 1824, end: 1831 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1834, end: 1838 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1840, end: 1846 },
            },
            loc: { start: 1840, end: 1846 },
          },
          directives: [],
          loc: { start: 1834, end: 1846 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1849, end: 1860 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1862, end: 1868 },
              },
              loc: { start: 1862, end: 1868 },
            },
            loc: { start: 1862, end: 1869 },
          },
          directives: [],
          loc: { start: 1849, end: 1869 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1872, end: 1886 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1888, end: 1894 },
            },
            loc: { start: 1888, end: 1894 },
          },
          directives: [],
          loc: { start: 1872, end: 1894 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1897, end: 1911 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1913, end: 1919 },
            },
            loc: { start: 1913, end: 1919 },
          },
          directives: [],
          loc: { start: 1897, end: 1919 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1922, end: 1935 },
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
          loc: { start: 1922, end: 1943 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1946, end: 1961 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1963, end: 1969 },
            },
            loc: { start: 1963, end: 1969 },
          },
          directives: [],
          loc: { start: 1946, end: 1969 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1972, end: 1978 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1980, end: 1986 },
            },
            loc: { start: 1980, end: 1986 },
          },
          directives: [],
          loc: { start: 1972, end: 1986 },
        },
      ],
      loc: { start: 1810, end: 1988 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1995, end: 2005 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2010, end: 2016 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2018, end: 2022 },
            },
            loc: { start: 2018, end: 2022 },
          },
          directives: [],
          loc: { start: 2010, end: 2022 },
        },
      ],
      loc: { start: 1990, end: 2024 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2032, end: 2043 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2046, end: 2056 },
          },
          loc: { start: 2046, end: 2056 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 2059, end: 2071 },
          },
          loc: { start: 2059, end: 2071 },
        },
      ],
      loc: { start: 2026, end: 2071 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Zoo', loc: { start: 2077, end: 2080 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2085, end: 2087 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2089, end: 2091 },
              },
              loc: { start: 2089, end: 2091 },
            },
            loc: { start: 2089, end: 2092 },
          },
          directives: [],
          loc: { start: 2085, end: 2092 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2095, end: 2099 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2101, end: 2107 },
              },
              loc: { start: 2101, end: 2107 },
            },
            loc: { start: 2101, end: 2108 },
          },
          directives: [],
          loc: { start: 2095, end: 2108 },
        },
      ],
      loc: { start: 2072, end: 2110 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Profile', loc: { start: 2124, end: 2131 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'zoo', loc: { start: 2136, end: 2139 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Zoo',
                loc: { start: 2141, end: 2144 },
              },
              loc: { start: 2141, end: 2144 },
            },
            loc: { start: 2141, end: 2145 },
          },
          directives: [],
          loc: { start: 2136, end: 2145 },
        },
      ],
      loc: { start: 2112, end: 2147 },
    },
  ],
  loc: { start: 0, end: 2148 },
} as unknown as DocumentNode;
