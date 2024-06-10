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
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'SortOrder', loc: { start: 246, end: 255 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'ASC', loc: { start: 260, end: 263 } },
          directives: [],
          loc: { start: 260, end: 263 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DESC', loc: { start: 266, end: 270 } },
          directives: [],
          loc: { start: 266, end: 270 },
        },
      ],
      loc: { start: 241, end: 272 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'Country', loc: { start: 279, end: 286 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'AU', loc: { start: 291, end: 293 } },
          directives: [],
          loc: { start: 291, end: 293 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'US', loc: { start: 296, end: 298 } },
          directives: [],
          loc: { start: 296, end: 298 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'NZ', loc: { start: 301, end: 303 } },
          directives: [],
          loc: { start: 301, end: 303 },
        },
      ],
      loc: { start: 274, end: 305 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 313, end: 328 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 333, end: 347 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 349, end: 352 } },
            loc: { start: 349, end: 352 },
          },
          directives: [],
          loc: { start: 333, end: 352 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 355, end: 359 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 361, end: 364 } },
            loc: { start: 361, end: 364 },
          },
          directives: [],
          loc: { start: 355, end: 364 },
        },
      ],
      loc: { start: 307, end: 366 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 373, end: 389 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 394, end: 405 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 407, end: 410 },
              },
              loc: { start: 407, end: 410 },
            },
            loc: { start: 407, end: 411 },
          },
          directives: [],
          loc: { start: 394, end: 411 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 414, end: 428 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 430, end: 433 },
              },
              loc: { start: 430, end: 433 },
            },
            loc: { start: 430, end: 434 },
          },
          directives: [],
          loc: { start: 414, end: 434 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 437, end: 451 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 453, end: 456 },
              },
              loc: { start: 453, end: 456 },
            },
            loc: { start: 453, end: 457 },
          },
          directives: [],
          loc: { start: 437, end: 457 },
        },
      ],
      loc: { start: 368, end: 459 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 468, end: 476 } },
      directives: [],
      loc: { start: 461, end: 476 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SomeRandomScalar',
        loc: { start: 485, end: 501 },
      },
      directives: [],
      loc: { start: 478, end: 501 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CustomLogicScalar',
        loc: { start: 510, end: 527 },
      },
      directives: [],
      loc: { start: 503, end: 527 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 536, end: 540 } },
      directives: [],
      loc: { start: 529, end: 540 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 546, end: 549 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 554, end: 556 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 558, end: 560 },
              },
              loc: { start: 558, end: 560 },
            },
            loc: { start: 558, end: 561 },
          },
          directives: [],
          loc: { start: 554, end: 561 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 564, end: 568 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 570, end: 576 },
              },
              loc: { start: 570, end: 576 },
            },
            loc: { start: 570, end: 577 },
          },
          directives: [],
          loc: { start: 564, end: 577 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'primaryOwner',
            loc: { start: 580, end: 592 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 594, end: 598 },
              },
              loc: { start: 594, end: 598 },
            },
            loc: { start: 594, end: 599 },
          },
          directives: [],
          loc: { start: 580, end: 599 },
        },
      ],
      loc: { start: 541, end: 601 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetToy', loc: { start: 608, end: 614 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 619, end: 621 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 623, end: 625 },
              },
              loc: { start: 623, end: 625 },
            },
            loc: { start: 623, end: 626 },
          },
          directives: [],
          loc: { start: 619, end: 626 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 629, end: 633 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 635, end: 641 },
              },
              loc: { start: 635, end: 641 },
            },
            loc: { start: 635, end: 642 },
          },
          directives: [],
          loc: { start: 629, end: 642 },
        },
      ],
      loc: { start: 603, end: 644 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 658, end: 662 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pets', loc: { start: 667, end: 671 } },
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
                    loc: { start: 674, end: 677 },
                  },
                  loc: { start: 674, end: 677 },
                },
                loc: { start: 674, end: 678 },
              },
              loc: { start: 673, end: 679 },
            },
            loc: { start: 673, end: 680 },
          },
          directives: [],
          loc: { start: 667, end: 680 },
        },
      ],
      loc: { start: 646, end: 682 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 695, end: 700 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 705, end: 714 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 715, end: 717 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 719, end: 721 },
                  },
                  loc: { start: 719, end: 721 },
                },
                loc: { start: 719, end: 722 },
              },
              directives: [],
              loc: { start: 715, end: 722 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 725, end: 741 },
              },
              loc: { start: 725, end: 741 },
            },
            loc: { start: 725, end: 742 },
          },
          directives: [],
          loc: { start: 705, end: 742 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 745, end: 764 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 765, end: 770 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 772, end: 796 },
                  },
                  loc: { start: 772, end: 796 },
                },
                loc: { start: 772, end: 797 },
              },
              directives: [],
              loc: { start: 765, end: 797 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 800, end: 826 },
              },
              loc: { start: 800, end: 826 },
            },
            loc: { start: 800, end: 827 },
          },
          directives: [],
          loc: { start: 745, end: 827 },
        },
      ],
      loc: { start: 683, end: 829 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 843, end: 851 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 856, end: 867 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 868, end: 873 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 875, end: 891 },
                  },
                  loc: { start: 875, end: 891 },
                },
                loc: { start: 875, end: 892 },
              },
              directives: [],
              loc: { start: 868, end: 892 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 895, end: 913 },
              },
              loc: { start: 895, end: 913 },
            },
            loc: { start: 895, end: 914 },
          },
          directives: [],
          loc: { start: 856, end: 914 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 917, end: 926 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 927, end: 932 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 934, end: 948 },
                  },
                  loc: { start: 934, end: 948 },
                },
                loc: { start: 934, end: 949 },
              },
              directives: [],
              loc: { start: 927, end: 949 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 952, end: 968 },
              },
              loc: { start: 952, end: 968 },
            },
            loc: { start: 952, end: 969 },
          },
          directives: [],
          loc: { start: 917, end: 969 },
        },
      ],
      loc: { start: 831, end: 971 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 978, end: 983 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 988, end: 990 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 992, end: 994 },
              },
              loc: { start: 992, end: 994 },
            },
            loc: { start: 992, end: 995 },
          },
          directives: [],
          loc: { start: 988, end: 995 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 998, end: 1002 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1004, end: 1010 },
              },
              loc: { start: 1004, end: 1010 },
            },
            loc: { start: 1004, end: 1011 },
          },
          directives: [],
          loc: { start: 998, end: 1011 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1014, end: 1017 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1019, end: 1025 },
            },
            loc: { start: 1019, end: 1025 },
          },
          directives: [],
          loc: { start: 1014, end: 1025 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 1028, end: 1035 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1037, end: 1041 },
              },
              loc: { start: 1037, end: 1041 },
            },
            loc: { start: 1037, end: 1042 },
          },
          directives: [],
          loc: { start: 1028, end: 1042 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1045, end: 1054 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1056, end: 1064 },
              },
              loc: { start: 1056, end: 1064 },
            },
            loc: { start: 1056, end: 1065 },
          },
          directives: [],
          loc: { start: 1045, end: 1065 },
        },
      ],
      loc: { start: 973, end: 1067 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1074, end: 1089 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1094, end: 1100 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1102, end: 1107 },
            },
            loc: { start: 1102, end: 1107 },
          },
          directives: [],
          loc: { start: 1094, end: 1107 },
        },
      ],
      loc: { start: 1069, end: 1109 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1117, end: 1133 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1136, end: 1151 },
          },
          loc: { start: 1136, end: 1151 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1154, end: 1166 },
          },
          loc: { start: 1154, end: 1166 },
        },
      ],
      loc: { start: 1111, end: 1166 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1174, end: 1198 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1203, end: 1209 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1211, end: 1213 },
              },
              loc: { start: 1211, end: 1213 },
            },
            loc: { start: 1211, end: 1214 },
          },
          directives: [],
          loc: { start: 1203, end: 1214 },
        },
      ],
      loc: { start: 1168, end: 1216 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1223, end: 1248 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1253, end: 1259 },
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
                    loc: { start: 1262, end: 1267 },
                  },
                  loc: { start: 1262, end: 1267 },
                },
                loc: { start: 1262, end: 1268 },
              },
              loc: { start: 1261, end: 1269 },
            },
            loc: { start: 1261, end: 1270 },
          },
          directives: [],
          loc: { start: 1253, end: 1270 },
        },
      ],
      loc: { start: 1218, end: 1272 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1280, end: 1306 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1309, end: 1334 },
          },
          loc: { start: 1309, end: 1334 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1337, end: 1349 },
          },
          loc: { start: 1337, end: 1349 },
        },
      ],
      loc: { start: 1274, end: 1349 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1357, end: 1373 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1378, end: 1382 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1384, end: 1390 },
              },
              loc: { start: 1384, end: 1390 },
            },
            loc: { start: 1384, end: 1391 },
          },
          directives: [],
          loc: { start: 1378, end: 1391 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1394, end: 1397 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1399, end: 1405 },
            },
            loc: { start: 1399, end: 1405 },
          },
          directives: [],
          loc: { start: 1394, end: 1405 },
        },
      ],
      loc: { start: 1351, end: 1407 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1414, end: 1431 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1436, end: 1442 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1444, end: 1449 },
              },
              loc: { start: 1444, end: 1449 },
            },
            loc: { start: 1444, end: 1450 },
          },
          directives: [],
          loc: { start: 1436, end: 1450 },
        },
      ],
      loc: { start: 1409, end: 1452 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1460, end: 1478 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1481, end: 1498 },
          },
          loc: { start: 1481, end: 1498 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1501, end: 1513 },
          },
          loc: { start: 1501, end: 1513 },
        },
      ],
      loc: { start: 1454, end: 1513 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1521, end: 1535 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1540, end: 1542 } },
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
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1550, end: 1554 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1556, end: 1562 },
              },
              loc: { start: 1556, end: 1562 },
            },
            loc: { start: 1556, end: 1563 },
          },
          directives: [],
          loc: { start: 1550, end: 1563 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1566, end: 1569 } },
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
          loc: { start: 1566, end: 1577 },
        },
      ],
      loc: { start: 1515, end: 1579 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1586, end: 1601 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1606, end: 1612 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1614, end: 1619 },
              },
              loc: { start: 1614, end: 1619 },
            },
            loc: { start: 1614, end: 1620 },
          },
          directives: [],
          loc: { start: 1606, end: 1620 },
        },
      ],
      loc: { start: 1581, end: 1622 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1630, end: 1646 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1649, end: 1664 },
          },
          loc: { start: 1649, end: 1664 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1667, end: 1679 },
          },
          loc: { start: 1667, end: 1679 },
        },
      ],
      loc: { start: 1624, end: 1679 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1692, end: 1704 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1709, end: 1723 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1725, end: 1732 },
              },
              loc: { start: 1725, end: 1732 },
            },
            loc: { start: 1725, end: 1733 },
          },
          directives: [],
          loc: { start: 1709, end: 1733 },
        },
      ],
      loc: { start: 1680, end: 1735 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1742, end: 1749 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1754, end: 1756 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1758, end: 1760 },
              },
              loc: { start: 1758, end: 1760 },
            },
            loc: { start: 1758, end: 1761 },
          },
          directives: [],
          loc: { start: 1754, end: 1761 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1764, end: 1768 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1770, end: 1774 },
              },
              loc: { start: 1770, end: 1774 },
            },
            loc: { start: 1770, end: 1775 },
          },
          directives: [],
          loc: { start: 1764, end: 1775 },
        },
      ],
      loc: { start: 1737, end: 1777 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1790, end: 1795 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1800, end: 1802 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1804, end: 1815 },
              },
              loc: { start: 1804, end: 1815 },
            },
            loc: { start: 1804, end: 1816 },
          },
          directives: [],
          loc: { start: 1800, end: 1816 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1819, end: 1836 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1837, end: 1848 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1850, end: 1856 },
                  },
                  loc: { start: 1850, end: 1856 },
                },
                loc: { start: 1850, end: 1857 },
              },
              directives: [],
              loc: { start: 1837, end: 1857 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1860, end: 1871 },
              },
              loc: { start: 1860, end: 1871 },
            },
            loc: { start: 1860, end: 1872 },
          },
          directives: [],
          loc: { start: 1819, end: 1872 },
        },
      ],
      loc: { start: 1778, end: 1874 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1881, end: 1885 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1890, end: 1892 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1894, end: 1896 },
              },
              loc: { start: 1894, end: 1896 },
            },
            loc: { start: 1894, end: 1897 },
          },
          directives: [],
          loc: { start: 1890, end: 1897 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1900, end: 1904 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1906, end: 1912 },
            },
            loc: { start: 1906, end: 1912 },
          },
          directives: [],
          loc: { start: 1900, end: 1912 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1915, end: 1926 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1928, end: 1934 },
              },
              loc: { start: 1928, end: 1934 },
            },
            loc: { start: 1928, end: 1935 },
          },
          directives: [],
          loc: { start: 1915, end: 1935 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1938, end: 1952 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1954, end: 1960 },
            },
            loc: { start: 1954, end: 1960 },
          },
          directives: [],
          loc: { start: 1938, end: 1960 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1963, end: 1977 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1979, end: 1985 },
            },
            loc: { start: 1979, end: 1985 },
          },
          directives: [],
          loc: { start: 1963, end: 1985 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1988, end: 2001 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2003, end: 2009 },
            },
            loc: { start: 2003, end: 2009 },
          },
          directives: [],
          loc: { start: 1988, end: 2009 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 2012, end: 2027 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2029, end: 2035 },
            },
            loc: { start: 2029, end: 2035 },
          },
          directives: [],
          loc: { start: 2012, end: 2035 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 2038, end: 2044 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2046, end: 2052 },
            },
            loc: { start: 2046, end: 2052 },
          },
          directives: [],
          loc: { start: 2038, end: 2052 },
        },
      ],
      loc: { start: 1876, end: 2054 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 2061, end: 2071 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2076, end: 2082 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2084, end: 2088 },
            },
            loc: { start: 2084, end: 2088 },
          },
          directives: [],
          loc: { start: 2076, end: 2088 },
        },
      ],
      loc: { start: 2056, end: 2090 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2098, end: 2109 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2112, end: 2122 },
          },
          loc: { start: 2112, end: 2122 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 2125, end: 2137 },
          },
          loc: { start: 2125, end: 2137 },
        },
      ],
      loc: { start: 2092, end: 2137 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Zoo', loc: { start: 2143, end: 2146 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2151, end: 2153 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2155, end: 2157 },
              },
              loc: { start: 2155, end: 2157 },
            },
            loc: { start: 2155, end: 2158 },
          },
          directives: [],
          loc: { start: 2151, end: 2158 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2161, end: 2165 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2167, end: 2173 },
              },
              loc: { start: 2167, end: 2173 },
            },
            loc: { start: 2167, end: 2174 },
          },
          directives: [],
          loc: { start: 2161, end: 2174 },
        },
      ],
      loc: { start: 2138, end: 2176 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Profile', loc: { start: 2190, end: 2197 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'zoo', loc: { start: 2202, end: 2205 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Zoo',
                loc: { start: 2207, end: 2210 },
              },
              loc: { start: 2207, end: 2210 },
            },
            loc: { start: 2207, end: 2211 },
          },
          directives: [],
          loc: { start: 2202, end: 2211 },
        },
      ],
      loc: { start: 2178, end: 2213 },
    },
  ],
  loc: { start: 0, end: 2214 },
} as unknown as DocumentNode;
