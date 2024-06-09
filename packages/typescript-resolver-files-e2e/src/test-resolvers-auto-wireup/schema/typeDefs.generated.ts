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
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 280, end: 295 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 300, end: 314 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 316, end: 319 } },
            loc: { start: 316, end: 319 },
          },
          directives: [],
          loc: { start: 300, end: 319 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 322, end: 326 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 328, end: 331 } },
            loc: { start: 328, end: 331 },
          },
          directives: [],
          loc: { start: 322, end: 331 },
        },
      ],
      loc: { start: 274, end: 333 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 340, end: 356 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 361, end: 372 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 374, end: 377 },
              },
              loc: { start: 374, end: 377 },
            },
            loc: { start: 374, end: 378 },
          },
          directives: [],
          loc: { start: 361, end: 378 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 381, end: 395 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 397, end: 400 },
              },
              loc: { start: 397, end: 400 },
            },
            loc: { start: 397, end: 401 },
          },
          directives: [],
          loc: { start: 381, end: 401 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 404, end: 418 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 420, end: 423 },
              },
              loc: { start: 420, end: 423 },
            },
            loc: { start: 420, end: 424 },
          },
          directives: [],
          loc: { start: 404, end: 424 },
        },
      ],
      loc: { start: 335, end: 426 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 435, end: 443 } },
      directives: [],
      loc: { start: 428, end: 443 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SomeRandomScalar',
        loc: { start: 452, end: 468 },
      },
      directives: [],
      loc: { start: 445, end: 468 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CustomLogicScalar',
        loc: { start: 477, end: 494 },
      },
      directives: [],
      loc: { start: 470, end: 494 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 503, end: 507 } },
      directives: [],
      loc: { start: 496, end: 507 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 513, end: 516 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 521, end: 523 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 525, end: 527 },
              },
              loc: { start: 525, end: 527 },
            },
            loc: { start: 525, end: 528 },
          },
          directives: [],
          loc: { start: 521, end: 528 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 531, end: 535 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 537, end: 543 },
              },
              loc: { start: 537, end: 543 },
            },
            loc: { start: 537, end: 544 },
          },
          directives: [],
          loc: { start: 531, end: 544 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'primaryOwner',
            loc: { start: 547, end: 559 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 561, end: 565 },
              },
              loc: { start: 561, end: 565 },
            },
            loc: { start: 561, end: 566 },
          },
          directives: [],
          loc: { start: 547, end: 566 },
        },
      ],
      loc: { start: 508, end: 568 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetToy', loc: { start: 575, end: 581 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 586, end: 588 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 590, end: 592 },
              },
              loc: { start: 590, end: 592 },
            },
            loc: { start: 590, end: 593 },
          },
          directives: [],
          loc: { start: 586, end: 593 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 596, end: 600 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 602, end: 608 },
              },
              loc: { start: 602, end: 608 },
            },
            loc: { start: 602, end: 609 },
          },
          directives: [],
          loc: { start: 596, end: 609 },
        },
      ],
      loc: { start: 570, end: 611 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'User', loc: { start: 625, end: 629 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pets', loc: { start: 634, end: 638 } },
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
                    loc: { start: 641, end: 644 },
                  },
                  loc: { start: 641, end: 644 },
                },
                loc: { start: 641, end: 645 },
              },
              loc: { start: 640, end: 646 },
            },
            loc: { start: 640, end: 647 },
          },
          directives: [],
          loc: { start: 634, end: 647 },
        },
      ],
      loc: { start: 613, end: 649 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 662, end: 667 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 672, end: 681 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 682, end: 684 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 686, end: 688 },
                  },
                  loc: { start: 686, end: 688 },
                },
                loc: { start: 686, end: 689 },
              },
              directives: [],
              loc: { start: 682, end: 689 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 692, end: 708 },
              },
              loc: { start: 692, end: 708 },
            },
            loc: { start: 692, end: 709 },
          },
          directives: [],
          loc: { start: 672, end: 709 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 712, end: 731 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 732, end: 737 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 739, end: 763 },
                  },
                  loc: { start: 739, end: 763 },
                },
                loc: { start: 739, end: 764 },
              },
              directives: [],
              loc: { start: 732, end: 764 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 767, end: 793 },
              },
              loc: { start: 767, end: 793 },
            },
            loc: { start: 767, end: 794 },
          },
          directives: [],
          loc: { start: 712, end: 794 },
        },
      ],
      loc: { start: 650, end: 796 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 810, end: 818 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 823, end: 834 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 835, end: 840 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 842, end: 858 },
                  },
                  loc: { start: 842, end: 858 },
                },
                loc: { start: 842, end: 859 },
              },
              directives: [],
              loc: { start: 835, end: 859 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 862, end: 880 },
              },
              loc: { start: 862, end: 880 },
            },
            loc: { start: 862, end: 881 },
          },
          directives: [],
          loc: { start: 823, end: 881 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 884, end: 893 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 894, end: 899 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 901, end: 915 },
                  },
                  loc: { start: 901, end: 915 },
                },
                loc: { start: 901, end: 916 },
              },
              directives: [],
              loc: { start: 894, end: 916 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 919, end: 935 },
              },
              loc: { start: 919, end: 935 },
            },
            loc: { start: 919, end: 936 },
          },
          directives: [],
          loc: { start: 884, end: 936 },
        },
      ],
      loc: { start: 798, end: 938 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 945, end: 950 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 955, end: 957 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 959, end: 961 },
              },
              loc: { start: 959, end: 961 },
            },
            loc: { start: 959, end: 962 },
          },
          directives: [],
          loc: { start: 955, end: 962 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 965, end: 969 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 971, end: 977 },
              },
              loc: { start: 971, end: 977 },
            },
            loc: { start: 971, end: 978 },
          },
          directives: [],
          loc: { start: 965, end: 978 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 981, end: 984 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 986, end: 992 },
            },
            loc: { start: 986, end: 992 },
          },
          directives: [],
          loc: { start: 981, end: 992 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 995, end: 1002 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1004, end: 1008 },
              },
              loc: { start: 1004, end: 1008 },
            },
            loc: { start: 1004, end: 1009 },
          },
          directives: [],
          loc: { start: 995, end: 1009 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1012, end: 1021 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1023, end: 1031 },
              },
              loc: { start: 1023, end: 1031 },
            },
            loc: { start: 1023, end: 1032 },
          },
          directives: [],
          loc: { start: 1012, end: 1032 },
        },
      ],
      loc: { start: 940, end: 1034 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1041, end: 1056 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1061, end: 1067 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1069, end: 1074 },
            },
            loc: { start: 1069, end: 1074 },
          },
          directives: [],
          loc: { start: 1061, end: 1074 },
        },
      ],
      loc: { start: 1036, end: 1076 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1084, end: 1100 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1103, end: 1118 },
          },
          loc: { start: 1103, end: 1118 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1121, end: 1133 },
          },
          loc: { start: 1121, end: 1133 },
        },
      ],
      loc: { start: 1078, end: 1133 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1141, end: 1165 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1170, end: 1176 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1178, end: 1180 },
              },
              loc: { start: 1178, end: 1180 },
            },
            loc: { start: 1178, end: 1181 },
          },
          directives: [],
          loc: { start: 1170, end: 1181 },
        },
      ],
      loc: { start: 1135, end: 1183 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1190, end: 1215 },
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
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Topic',
                    loc: { start: 1229, end: 1234 },
                  },
                  loc: { start: 1229, end: 1234 },
                },
                loc: { start: 1229, end: 1235 },
              },
              loc: { start: 1228, end: 1236 },
            },
            loc: { start: 1228, end: 1237 },
          },
          directives: [],
          loc: { start: 1220, end: 1237 },
        },
      ],
      loc: { start: 1185, end: 1239 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1247, end: 1273 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1276, end: 1301 },
          },
          loc: { start: 1276, end: 1301 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1304, end: 1316 },
          },
          loc: { start: 1304, end: 1316 },
        },
      ],
      loc: { start: 1241, end: 1316 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1324, end: 1340 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1345, end: 1349 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1351, end: 1357 },
              },
              loc: { start: 1351, end: 1357 },
            },
            loc: { start: 1351, end: 1358 },
          },
          directives: [],
          loc: { start: 1345, end: 1358 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1361, end: 1364 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1366, end: 1372 },
            },
            loc: { start: 1366, end: 1372 },
          },
          directives: [],
          loc: { start: 1361, end: 1372 },
        },
      ],
      loc: { start: 1318, end: 1374 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1381, end: 1398 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1403, end: 1409 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1411, end: 1416 },
              },
              loc: { start: 1411, end: 1416 },
            },
            loc: { start: 1411, end: 1417 },
          },
          directives: [],
          loc: { start: 1403, end: 1417 },
        },
      ],
      loc: { start: 1376, end: 1419 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1427, end: 1445 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1448, end: 1465 },
          },
          loc: { start: 1448, end: 1465 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1468, end: 1480 },
          },
          loc: { start: 1468, end: 1480 },
        },
      ],
      loc: { start: 1421, end: 1480 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1488, end: 1502 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1507, end: 1509 } },
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
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1517, end: 1521 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1523, end: 1529 },
              },
              loc: { start: 1523, end: 1529 },
            },
            loc: { start: 1523, end: 1530 },
          },
          directives: [],
          loc: { start: 1517, end: 1530 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1533, end: 1536 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1538, end: 1544 },
            },
            loc: { start: 1538, end: 1544 },
          },
          directives: [],
          loc: { start: 1533, end: 1544 },
        },
      ],
      loc: { start: 1482, end: 1546 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1553, end: 1568 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1573, end: 1579 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1581, end: 1586 },
              },
              loc: { start: 1581, end: 1586 },
            },
            loc: { start: 1581, end: 1587 },
          },
          directives: [],
          loc: { start: 1573, end: 1587 },
        },
      ],
      loc: { start: 1548, end: 1589 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1597, end: 1613 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1616, end: 1631 },
          },
          loc: { start: 1616, end: 1631 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 1634, end: 1646 },
          },
          loc: { start: 1634, end: 1646 },
        },
      ],
      loc: { start: 1591, end: 1646 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1659, end: 1671 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1676, end: 1690 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1692, end: 1699 },
              },
              loc: { start: 1692, end: 1699 },
            },
            loc: { start: 1692, end: 1700 },
          },
          directives: [],
          loc: { start: 1676, end: 1700 },
        },
      ],
      loc: { start: 1647, end: 1702 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1709, end: 1716 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1721, end: 1723 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1725, end: 1727 },
              },
              loc: { start: 1725, end: 1727 },
            },
            loc: { start: 1725, end: 1728 },
          },
          directives: [],
          loc: { start: 1721, end: 1728 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1731, end: 1735 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1737, end: 1741 },
              },
              loc: { start: 1737, end: 1741 },
            },
            loc: { start: 1737, end: 1742 },
          },
          directives: [],
          loc: { start: 1731, end: 1742 },
        },
      ],
      loc: { start: 1704, end: 1744 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1757, end: 1762 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1767, end: 1769 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1771, end: 1782 },
              },
              loc: { start: 1771, end: 1782 },
            },
            loc: { start: 1771, end: 1783 },
          },
          directives: [],
          loc: { start: 1767, end: 1783 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1786, end: 1803 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1804, end: 1815 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1817, end: 1823 },
                  },
                  loc: { start: 1817, end: 1823 },
                },
                loc: { start: 1817, end: 1824 },
              },
              directives: [],
              loc: { start: 1804, end: 1824 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1827, end: 1838 },
              },
              loc: { start: 1827, end: 1838 },
            },
            loc: { start: 1827, end: 1839 },
          },
          directives: [],
          loc: { start: 1786, end: 1839 },
        },
      ],
      loc: { start: 1745, end: 1841 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1848, end: 1852 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1857, end: 1859 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1861, end: 1863 },
              },
              loc: { start: 1861, end: 1863 },
            },
            loc: { start: 1861, end: 1864 },
          },
          directives: [],
          loc: { start: 1857, end: 1864 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1867, end: 1871 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1873, end: 1879 },
            },
            loc: { start: 1873, end: 1879 },
          },
          directives: [],
          loc: { start: 1867, end: 1879 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 1882, end: 1893 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1895, end: 1901 },
              },
              loc: { start: 1895, end: 1901 },
            },
            loc: { start: 1895, end: 1902 },
          },
          directives: [],
          loc: { start: 1882, end: 1902 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 1905, end: 1919 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1921, end: 1927 },
            },
            loc: { start: 1921, end: 1927 },
          },
          directives: [],
          loc: { start: 1905, end: 1927 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 1930, end: 1944 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1946, end: 1952 },
            },
            loc: { start: 1946, end: 1952 },
          },
          directives: [],
          loc: { start: 1930, end: 1952 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1955, end: 1968 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1970, end: 1976 },
            },
            loc: { start: 1970, end: 1976 },
          },
          directives: [],
          loc: { start: 1955, end: 1976 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 1979, end: 1994 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1996, end: 2002 },
            },
            loc: { start: 1996, end: 2002 },
          },
          directives: [],
          loc: { start: 1979, end: 2002 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 2005, end: 2011 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2013, end: 2019 },
            },
            loc: { start: 2013, end: 2019 },
          },
          directives: [],
          loc: { start: 2005, end: 2019 },
        },
      ],
      loc: { start: 1843, end: 2021 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 2028, end: 2038 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2043, end: 2049 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2051, end: 2055 },
            },
            loc: { start: 2051, end: 2055 },
          },
          directives: [],
          loc: { start: 2043, end: 2055 },
        },
      ],
      loc: { start: 2023, end: 2057 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2065, end: 2076 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2079, end: 2089 },
          },
          loc: { start: 2079, end: 2089 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PayloadError',
            loc: { start: 2092, end: 2104 },
          },
          loc: { start: 2092, end: 2104 },
        },
      ],
      loc: { start: 2059, end: 2104 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Zoo', loc: { start: 2110, end: 2113 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2118, end: 2120 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2122, end: 2124 },
              },
              loc: { start: 2122, end: 2124 },
            },
            loc: { start: 2122, end: 2125 },
          },
          directives: [],
          loc: { start: 2118, end: 2125 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2128, end: 2132 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2134, end: 2140 },
              },
              loc: { start: 2134, end: 2140 },
            },
            loc: { start: 2134, end: 2141 },
          },
          directives: [],
          loc: { start: 2128, end: 2141 },
        },
      ],
      loc: { start: 2105, end: 2143 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Profile', loc: { start: 2157, end: 2164 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'zoo', loc: { start: 2169, end: 2172 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Zoo',
                loc: { start: 2174, end: 2177 },
              },
              loc: { start: 2174, end: 2177 },
            },
            loc: { start: 2174, end: 2178 },
          },
          directives: [],
          loc: { start: 2169, end: 2178 },
        },
      ],
      loc: { start: 2145, end: 2180 },
    },
  ],
  loc: { start: 0, end: 2181 },
} as unknown as DocumentNode;
