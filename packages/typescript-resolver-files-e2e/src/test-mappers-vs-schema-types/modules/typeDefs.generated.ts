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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 51, end: 56 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'message', loc: { start: 61, end: 68 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 70, end: 76 },
              },
              loc: { start: 70, end: 76 },
            },
            loc: { start: 70, end: 77 },
          },
          directives: [],
          loc: { start: 61, end: 77 },
        },
      ],
      loc: { start: 46, end: 79 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 88, end: 96 } },
      directives: [],
      loc: { start: 81, end: 96 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 109, end: 114 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 119, end: 128 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 129, end: 131 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 133, end: 135 },
                  },
                  loc: { start: 133, end: 135 },
                },
                loc: { start: 133, end: 136 },
              },
              directives: [],
              loc: { start: 129, end: 136 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 139, end: 155 },
              },
              loc: { start: 139, end: 155 },
            },
            loc: { start: 139, end: 156 },
          },
          directives: [],
          loc: { start: 119, end: 156 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 159, end: 178 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 179, end: 184 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 186, end: 210 },
                  },
                  loc: { start: 186, end: 210 },
                },
                loc: { start: 186, end: 211 },
              },
              directives: [],
              loc: { start: 179, end: 211 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 214, end: 240 },
              },
              loc: { start: 214, end: 240 },
            },
            loc: { start: 214, end: 241 },
          },
          directives: [],
          loc: { start: 159, end: 241 },
        },
      ],
      loc: { start: 97, end: 243 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 257, end: 265 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 270, end: 281 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 282, end: 287 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 289, end: 305 },
                  },
                  loc: { start: 289, end: 305 },
                },
                loc: { start: 289, end: 306 },
              },
              directives: [],
              loc: { start: 282, end: 306 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 309, end: 327 },
              },
              loc: { start: 309, end: 327 },
            },
            loc: { start: 309, end: 328 },
          },
          directives: [],
          loc: { start: 270, end: 328 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 331, end: 340 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 341, end: 346 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 348, end: 362 },
                  },
                  loc: { start: 348, end: 362 },
                },
                loc: { start: 348, end: 363 },
              },
              directives: [],
              loc: { start: 341, end: 363 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 366, end: 382 },
              },
              loc: { start: 366, end: 382 },
            },
            loc: { start: 366, end: 383 },
          },
          directives: [],
          loc: { start: 331, end: 383 },
        },
      ],
      loc: { start: 245, end: 385 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 392, end: 397 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 402, end: 404 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 406, end: 408 },
              },
              loc: { start: 406, end: 408 },
            },
            loc: { start: 406, end: 409 },
          },
          directives: [],
          loc: { start: 402, end: 409 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 412, end: 416 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 418, end: 424 },
              },
              loc: { start: 418, end: 424 },
            },
            loc: { start: 418, end: 425 },
          },
          directives: [],
          loc: { start: 412, end: 425 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 428, end: 431 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 433, end: 439 },
            },
            loc: { start: 433, end: 439 },
          },
          directives: [],
          loc: { start: 428, end: 439 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 442, end: 449 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 451, end: 455 },
              },
              loc: { start: 451, end: 455 },
            },
            loc: { start: 451, end: 456 },
          },
          directives: [],
          loc: { start: 442, end: 456 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 459, end: 468 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 470, end: 478 },
              },
              loc: { start: 470, end: 478 },
            },
            loc: { start: 470, end: 479 },
          },
          directives: [],
          loc: { start: 459, end: 479 },
        },
      ],
      loc: { start: 387, end: 481 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 488, end: 503 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 508, end: 514 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 516, end: 521 },
            },
            loc: { start: 516, end: 521 },
          },
          directives: [],
          loc: { start: 508, end: 521 },
        },
      ],
      loc: { start: 483, end: 523 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 531, end: 547 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 550, end: 565 },
          },
          loc: { start: 550, end: 565 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 568, end: 573 } },
          loc: { start: 568, end: 573 },
        },
      ],
      loc: { start: 525, end: 573 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 581, end: 605 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 610, end: 616 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 618, end: 620 },
              },
              loc: { start: 618, end: 620 },
            },
            loc: { start: 618, end: 621 },
          },
          directives: [],
          loc: { start: 610, end: 621 },
        },
      ],
      loc: { start: 575, end: 623 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 630, end: 655 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 660, end: 666 },
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
                    loc: { start: 669, end: 674 },
                  },
                  loc: { start: 669, end: 674 },
                },
                loc: { start: 669, end: 675 },
              },
              loc: { start: 668, end: 676 },
            },
            loc: { start: 668, end: 677 },
          },
          directives: [],
          loc: { start: 660, end: 677 },
        },
      ],
      loc: { start: 625, end: 679 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 687, end: 713 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 716, end: 741 },
          },
          loc: { start: 716, end: 741 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 744, end: 749 } },
          loc: { start: 744, end: 749 },
        },
      ],
      loc: { start: 681, end: 749 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 757, end: 773 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 778, end: 782 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 784, end: 790 },
              },
              loc: { start: 784, end: 790 },
            },
            loc: { start: 784, end: 791 },
          },
          directives: [],
          loc: { start: 778, end: 791 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 794, end: 797 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 799, end: 805 },
            },
            loc: { start: 799, end: 805 },
          },
          directives: [],
          loc: { start: 794, end: 805 },
        },
      ],
      loc: { start: 751, end: 807 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 814, end: 831 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 836, end: 842 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 844, end: 849 },
              },
              loc: { start: 844, end: 849 },
            },
            loc: { start: 844, end: 850 },
          },
          directives: [],
          loc: { start: 836, end: 850 },
        },
      ],
      loc: { start: 809, end: 852 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 860, end: 878 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 881, end: 898 },
          },
          loc: { start: 881, end: 898 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 901, end: 906 } },
          loc: { start: 901, end: 906 },
        },
      ],
      loc: { start: 854, end: 906 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 914, end: 928 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 933, end: 935 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 937, end: 939 },
              },
              loc: { start: 937, end: 939 },
            },
            loc: { start: 937, end: 940 },
          },
          directives: [],
          loc: { start: 933, end: 940 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 943, end: 947 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 949, end: 955 },
              },
              loc: { start: 949, end: 955 },
            },
            loc: { start: 949, end: 956 },
          },
          directives: [],
          loc: { start: 943, end: 956 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 959, end: 962 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 964, end: 970 },
            },
            loc: { start: 964, end: 970 },
          },
          directives: [],
          loc: { start: 959, end: 970 },
        },
      ],
      loc: { start: 908, end: 972 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 979, end: 994 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 999, end: 1005 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1007, end: 1012 },
              },
              loc: { start: 1007, end: 1012 },
            },
            loc: { start: 1007, end: 1013 },
          },
          directives: [],
          loc: { start: 999, end: 1013 },
        },
      ],
      loc: { start: 974, end: 1015 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1023, end: 1039 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1042, end: 1057 },
          },
          loc: { start: 1042, end: 1057 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1060, end: 1065 },
          },
          loc: { start: 1060, end: 1065 },
        },
      ],
      loc: { start: 1017, end: 1065 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1078, end: 1083 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'account',
            loc: { start: 1088, end: 1095 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Account',
                loc: { start: 1097, end: 1104 },
              },
              loc: { start: 1097, end: 1104 },
            },
            loc: { start: 1097, end: 1105 },
          },
          directives: [],
          loc: { start: 1088, end: 1105 },
        },
      ],
      loc: { start: 1066, end: 1107 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1121, end: 1133 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1138, end: 1152 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1154, end: 1161 },
              },
              loc: { start: 1154, end: 1161 },
            },
            loc: { start: 1154, end: 1162 },
          },
          directives: [],
          loc: { start: 1138, end: 1162 },
        },
      ],
      loc: { start: 1109, end: 1164 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Account', loc: { start: 1171, end: 1178 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1183, end: 1185 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1187, end: 1189 },
              },
              loc: { start: 1187, end: 1189 },
            },
            loc: { start: 1187, end: 1190 },
          },
          directives: [],
          loc: { start: 1183, end: 1190 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isSubscribed',
            loc: { start: 1193, end: 1205 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1207, end: 1214 },
              },
              loc: { start: 1207, end: 1214 },
            },
            loc: { start: 1207, end: 1215 },
          },
          directives: [],
          loc: { start: 1193, end: 1215 },
        },
      ],
      loc: { start: 1166, end: 1217 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Country', loc: { start: 1224, end: 1231 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1236, end: 1238 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1240, end: 1242 },
              },
              loc: { start: 1240, end: 1242 },
            },
            loc: { start: 1240, end: 1243 },
          },
          directives: [],
          loc: { start: 1236, end: 1243 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1246, end: 1250 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1252, end: 1258 },
              },
              loc: { start: 1252, end: 1258 },
            },
            loc: { start: 1252, end: 1259 },
          },
          directives: [],
          loc: { start: 1246, end: 1259 },
        },
      ],
      loc: { start: 1219, end: 1261 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1268, end: 1275 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1280, end: 1282 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1284, end: 1286 },
              },
              loc: { start: 1284, end: 1286 },
            },
            loc: { start: 1284, end: 1287 },
          },
          directives: [],
          loc: { start: 1280, end: 1287 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1290, end: 1294 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1296, end: 1300 },
              },
              loc: { start: 1296, end: 1300 },
            },
            loc: { start: 1296, end: 1301 },
          },
          directives: [],
          loc: { start: 1290, end: 1301 },
        },
      ],
      loc: { start: 1263, end: 1303 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProfileMeta',
        loc: { start: 1310, end: 1321 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1326, end: 1328 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1330, end: 1332 },
              },
              loc: { start: 1330, end: 1332 },
            },
            loc: { start: 1330, end: 1333 },
          },
          directives: [],
          loc: { start: 1326, end: 1333 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isCompleted',
            loc: { start: 1336, end: 1347 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1349, end: 1356 },
              },
              loc: { start: 1349, end: 1356 },
            },
            loc: { start: 1349, end: 1357 },
          },
          directives: [],
          loc: { start: 1336, end: 1357 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'score',
            loc: { start: 1360, end: 1365 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1367, end: 1373 },
              },
              loc: { start: 1367, end: 1373 },
            },
            loc: { start: 1367, end: 1374 },
          },
          directives: [],
          loc: { start: 1360, end: 1374 },
        },
      ],
      loc: { start: 1305, end: 1376 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1389, end: 1394 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1399, end: 1401 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1403, end: 1414 },
              },
              loc: { start: 1403, end: 1414 },
            },
            loc: { start: 1403, end: 1415 },
          },
          directives: [],
          loc: { start: 1399, end: 1415 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1418, end: 1435 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1436, end: 1447 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1449, end: 1455 },
                  },
                  loc: { start: 1449, end: 1455 },
                },
                loc: { start: 1449, end: 1456 },
              },
              directives: [],
              loc: { start: 1436, end: 1456 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1459, end: 1470 },
              },
              loc: { start: 1459, end: 1470 },
            },
            loc: { start: 1459, end: 1471 },
          },
          directives: [],
          loc: { start: 1418, end: 1471 },
        },
      ],
      loc: { start: 1377, end: 1473 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1480, end: 1484 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1489, end: 1491 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1493, end: 1495 },
              },
              loc: { start: 1493, end: 1495 },
            },
            loc: { start: 1493, end: 1496 },
          },
          directives: [],
          loc: { start: 1489, end: 1496 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 1499, end: 1507 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1509, end: 1515 },
              },
              loc: { start: 1509, end: 1515 },
            },
            loc: { start: 1509, end: 1516 },
          },
          directives: [],
          loc: { start: 1499, end: 1516 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1519, end: 1532 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1534, end: 1540 },
            },
            loc: { start: 1534, end: 1540 },
          },
          directives: [],
          loc: { start: 1519, end: 1540 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGoogle',
            loc: { start: 1543, end: 1556 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1558, end: 1564 },
            },
            loc: { start: 1558, end: 1564 },
          },
          directives: [],
          loc: { start: 1543, end: 1564 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'role',
            loc: { start: 1567, end: 1571 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserRole',
                loc: { start: 1573, end: 1581 },
              },
              loc: { start: 1573, end: 1581 },
            },
            loc: { start: 1573, end: 1582 },
          },
          directives: [],
          loc: { start: 1567, end: 1582 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1585, end: 1594 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1596, end: 1604 },
              },
              loc: { start: 1596, end: 1604 },
            },
            loc: { start: 1596, end: 1605 },
          },
          directives: [],
          loc: { start: 1585, end: 1605 },
        },
      ],
      loc: { start: 1475, end: 1607 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1614, end: 1624 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1629, end: 1635 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1637, end: 1641 },
            },
            loc: { start: 1637, end: 1641 },
          },
          directives: [],
          loc: { start: 1629, end: 1641 },
        },
      ],
      loc: { start: 1609, end: 1643 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserRole',
        loc: { start: 1650, end: 1658 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'ADMIN',
            loc: { start: 1663, end: 1668 },
          },
          directives: [],
          loc: { start: 1663, end: 1668 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'USER',
            loc: { start: 1671, end: 1675 },
          },
          directives: [],
          loc: { start: 1671, end: 1675 },
        },
      ],
      loc: { start: 1645, end: 1677 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1685, end: 1696 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1699, end: 1709 },
          },
          loc: { start: 1699, end: 1709 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1712, end: 1717 },
          },
          loc: { start: 1712, end: 1717 },
        },
      ],
      loc: { start: 1679, end: 1717 },
    },
  ],
  loc: { start: 0, end: 1718 },
} as unknown as DocumentNode;
