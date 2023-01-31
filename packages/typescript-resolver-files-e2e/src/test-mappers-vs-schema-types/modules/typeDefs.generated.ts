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
      name: { kind: 'Name', value: 'Error', loc: { start: 33, end: 38 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'message', loc: { start: 43, end: 50 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 52, end: 58 },
              },
              loc: { start: 52, end: 58 },
            },
            loc: { start: 52, end: 59 },
          },
          directives: [],
          loc: { start: 43, end: 59 },
        },
      ],
      loc: { start: 28, end: 61 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 70, end: 78 } },
      directives: [],
      loc: { start: 63, end: 78 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 91, end: 96 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 101, end: 110 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 111, end: 113 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 115, end: 117 },
                  },
                  loc: { start: 115, end: 117 },
                },
                loc: { start: 115, end: 118 },
              },
              directives: [],
              loc: { start: 111, end: 118 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 121, end: 137 },
              },
              loc: { start: 121, end: 137 },
            },
            loc: { start: 121, end: 138 },
          },
          directives: [],
          loc: { start: 101, end: 138 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 141, end: 160 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 161, end: 166 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 168, end: 192 },
                  },
                  loc: { start: 168, end: 192 },
                },
                loc: { start: 168, end: 193 },
              },
              directives: [],
              loc: { start: 161, end: 193 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 196, end: 222 },
              },
              loc: { start: 196, end: 222 },
            },
            loc: { start: 196, end: 223 },
          },
          directives: [],
          loc: { start: 141, end: 223 },
        },
      ],
      loc: { start: 79, end: 225 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 239, end: 247 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 252, end: 263 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 264, end: 269 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 271, end: 287 },
                  },
                  loc: { start: 271, end: 287 },
                },
                loc: { start: 271, end: 288 },
              },
              directives: [],
              loc: { start: 264, end: 288 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 291, end: 309 },
              },
              loc: { start: 291, end: 309 },
            },
            loc: { start: 291, end: 310 },
          },
          directives: [],
          loc: { start: 252, end: 310 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 313, end: 322 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 323, end: 328 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 330, end: 344 },
                  },
                  loc: { start: 330, end: 344 },
                },
                loc: { start: 330, end: 345 },
              },
              directives: [],
              loc: { start: 323, end: 345 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 348, end: 364 },
              },
              loc: { start: 348, end: 364 },
            },
            loc: { start: 348, end: 365 },
          },
          directives: [],
          loc: { start: 313, end: 365 },
        },
      ],
      loc: { start: 227, end: 367 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 374, end: 379 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 384, end: 386 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 388, end: 390 },
              },
              loc: { start: 388, end: 390 },
            },
            loc: { start: 388, end: 391 },
          },
          directives: [],
          loc: { start: 384, end: 391 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 394, end: 398 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 400, end: 406 },
              },
              loc: { start: 400, end: 406 },
            },
            loc: { start: 400, end: 407 },
          },
          directives: [],
          loc: { start: 394, end: 407 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 410, end: 413 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 415, end: 421 },
            },
            loc: { start: 415, end: 421 },
          },
          directives: [],
          loc: { start: 410, end: 421 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 424, end: 431 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 433, end: 437 },
              },
              loc: { start: 433, end: 437 },
            },
            loc: { start: 433, end: 438 },
          },
          directives: [],
          loc: { start: 424, end: 438 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 441, end: 450 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 452, end: 460 },
              },
              loc: { start: 452, end: 460 },
            },
            loc: { start: 452, end: 461 },
          },
          directives: [],
          loc: { start: 441, end: 461 },
        },
      ],
      loc: { start: 369, end: 463 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 470, end: 485 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 490, end: 496 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 498, end: 503 },
            },
            loc: { start: 498, end: 503 },
          },
          directives: [],
          loc: { start: 490, end: 503 },
        },
      ],
      loc: { start: 465, end: 505 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 513, end: 529 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 532, end: 547 },
          },
          loc: { start: 532, end: 547 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 550, end: 555 } },
          loc: { start: 550, end: 555 },
        },
      ],
      loc: { start: 507, end: 555 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 563, end: 587 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 592, end: 598 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 600, end: 602 },
              },
              loc: { start: 600, end: 602 },
            },
            loc: { start: 600, end: 603 },
          },
          directives: [],
          loc: { start: 592, end: 603 },
        },
      ],
      loc: { start: 557, end: 605 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 612, end: 637 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 642, end: 648 },
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
                    loc: { start: 651, end: 656 },
                  },
                  loc: { start: 651, end: 656 },
                },
                loc: { start: 651, end: 657 },
              },
              loc: { start: 650, end: 658 },
            },
            loc: { start: 650, end: 659 },
          },
          directives: [],
          loc: { start: 642, end: 659 },
        },
      ],
      loc: { start: 607, end: 661 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 669, end: 695 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 698, end: 723 },
          },
          loc: { start: 698, end: 723 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 726, end: 731 } },
          loc: { start: 726, end: 731 },
        },
      ],
      loc: { start: 663, end: 731 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 739, end: 755 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 760, end: 764 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 766, end: 772 },
              },
              loc: { start: 766, end: 772 },
            },
            loc: { start: 766, end: 773 },
          },
          directives: [],
          loc: { start: 760, end: 773 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 776, end: 779 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 781, end: 787 },
            },
            loc: { start: 781, end: 787 },
          },
          directives: [],
          loc: { start: 776, end: 787 },
        },
      ],
      loc: { start: 733, end: 789 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 796, end: 813 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 818, end: 824 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 826, end: 831 },
              },
              loc: { start: 826, end: 831 },
            },
            loc: { start: 826, end: 832 },
          },
          directives: [],
          loc: { start: 818, end: 832 },
        },
      ],
      loc: { start: 791, end: 834 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 842, end: 860 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 863, end: 880 },
          },
          loc: { start: 863, end: 880 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 883, end: 888 } },
          loc: { start: 883, end: 888 },
        },
      ],
      loc: { start: 836, end: 888 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 896, end: 910 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 915, end: 917 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 919, end: 921 },
              },
              loc: { start: 919, end: 921 },
            },
            loc: { start: 919, end: 922 },
          },
          directives: [],
          loc: { start: 915, end: 922 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 925, end: 929 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 931, end: 937 },
              },
              loc: { start: 931, end: 937 },
            },
            loc: { start: 931, end: 938 },
          },
          directives: [],
          loc: { start: 925, end: 938 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 941, end: 944 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 946, end: 952 },
            },
            loc: { start: 946, end: 952 },
          },
          directives: [],
          loc: { start: 941, end: 952 },
        },
      ],
      loc: { start: 890, end: 954 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 961, end: 976 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 981, end: 987 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 989, end: 994 },
              },
              loc: { start: 989, end: 994 },
            },
            loc: { start: 989, end: 995 },
          },
          directives: [],
          loc: { start: 981, end: 995 },
        },
      ],
      loc: { start: 956, end: 997 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1005, end: 1021 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1024, end: 1039 },
          },
          loc: { start: 1024, end: 1039 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1042, end: 1047 },
          },
          loc: { start: 1042, end: 1047 },
        },
      ],
      loc: { start: 999, end: 1047 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1060, end: 1065 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'account',
            loc: { start: 1070, end: 1077 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Account',
                loc: { start: 1079, end: 1086 },
              },
              loc: { start: 1079, end: 1086 },
            },
            loc: { start: 1079, end: 1087 },
          },
          directives: [],
          loc: { start: 1070, end: 1087 },
        },
      ],
      loc: { start: 1048, end: 1089 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1103, end: 1115 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1120, end: 1134 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1136, end: 1143 },
              },
              loc: { start: 1136, end: 1143 },
            },
            loc: { start: 1136, end: 1144 },
          },
          directives: [],
          loc: { start: 1120, end: 1144 },
        },
      ],
      loc: { start: 1091, end: 1146 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Account', loc: { start: 1153, end: 1160 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1165, end: 1167 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1169, end: 1171 },
              },
              loc: { start: 1169, end: 1171 },
            },
            loc: { start: 1169, end: 1172 },
          },
          directives: [],
          loc: { start: 1165, end: 1172 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isSubscribed',
            loc: { start: 1175, end: 1187 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1189, end: 1196 },
              },
              loc: { start: 1189, end: 1196 },
            },
            loc: { start: 1189, end: 1197 },
          },
          directives: [],
          loc: { start: 1175, end: 1197 },
        },
      ],
      loc: { start: 1148, end: 1199 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Country', loc: { start: 1206, end: 1213 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1218, end: 1220 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1222, end: 1224 },
              },
              loc: { start: 1222, end: 1224 },
            },
            loc: { start: 1222, end: 1225 },
          },
          directives: [],
          loc: { start: 1218, end: 1225 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1228, end: 1232 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1234, end: 1240 },
              },
              loc: { start: 1234, end: 1240 },
            },
            loc: { start: 1234, end: 1241 },
          },
          directives: [],
          loc: { start: 1228, end: 1241 },
        },
      ],
      loc: { start: 1201, end: 1243 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1250, end: 1257 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1262, end: 1264 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1266, end: 1268 },
              },
              loc: { start: 1266, end: 1268 },
            },
            loc: { start: 1266, end: 1269 },
          },
          directives: [],
          loc: { start: 1262, end: 1269 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1272, end: 1276 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1278, end: 1282 },
              },
              loc: { start: 1278, end: 1282 },
            },
            loc: { start: 1278, end: 1283 },
          },
          directives: [],
          loc: { start: 1272, end: 1283 },
        },
      ],
      loc: { start: 1245, end: 1285 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProfileMeta',
        loc: { start: 1292, end: 1303 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1308, end: 1310 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1312, end: 1314 },
              },
              loc: { start: 1312, end: 1314 },
            },
            loc: { start: 1312, end: 1315 },
          },
          directives: [],
          loc: { start: 1308, end: 1315 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isCompleted',
            loc: { start: 1318, end: 1329 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1331, end: 1338 },
              },
              loc: { start: 1331, end: 1338 },
            },
            loc: { start: 1331, end: 1339 },
          },
          directives: [],
          loc: { start: 1318, end: 1339 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'score',
            loc: { start: 1342, end: 1347 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1349, end: 1355 },
              },
              loc: { start: 1349, end: 1355 },
            },
            loc: { start: 1349, end: 1356 },
          },
          directives: [],
          loc: { start: 1342, end: 1356 },
        },
      ],
      loc: { start: 1287, end: 1358 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1371, end: 1376 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1381, end: 1383 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1385, end: 1396 },
              },
              loc: { start: 1385, end: 1396 },
            },
            loc: { start: 1385, end: 1397 },
          },
          directives: [],
          loc: { start: 1381, end: 1397 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1400, end: 1417 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1418, end: 1429 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1431, end: 1437 },
                  },
                  loc: { start: 1431, end: 1437 },
                },
                loc: { start: 1431, end: 1438 },
              },
              directives: [],
              loc: { start: 1418, end: 1438 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1441, end: 1452 },
              },
              loc: { start: 1441, end: 1452 },
            },
            loc: { start: 1441, end: 1453 },
          },
          directives: [],
          loc: { start: 1400, end: 1453 },
        },
      ],
      loc: { start: 1359, end: 1455 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1462, end: 1466 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1471, end: 1473 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1475, end: 1477 },
              },
              loc: { start: 1475, end: 1477 },
            },
            loc: { start: 1475, end: 1478 },
          },
          directives: [],
          loc: { start: 1471, end: 1478 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 1481, end: 1489 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1491, end: 1497 },
              },
              loc: { start: 1491, end: 1497 },
            },
            loc: { start: 1491, end: 1498 },
          },
          directives: [],
          loc: { start: 1481, end: 1498 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1501, end: 1514 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1516, end: 1522 },
            },
            loc: { start: 1516, end: 1522 },
          },
          directives: [],
          loc: { start: 1501, end: 1522 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGoogle',
            loc: { start: 1525, end: 1538 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1540, end: 1546 },
            },
            loc: { start: 1540, end: 1546 },
          },
          directives: [],
          loc: { start: 1525, end: 1546 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1549, end: 1558 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1560, end: 1568 },
              },
              loc: { start: 1560, end: 1568 },
            },
            loc: { start: 1560, end: 1569 },
          },
          directives: [],
          loc: { start: 1549, end: 1569 },
        },
      ],
      loc: { start: 1457, end: 1571 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1578, end: 1588 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1593, end: 1599 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1601, end: 1605 },
            },
            loc: { start: 1601, end: 1605 },
          },
          directives: [],
          loc: { start: 1593, end: 1605 },
        },
      ],
      loc: { start: 1573, end: 1607 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1615, end: 1626 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1629, end: 1639 },
          },
          loc: { start: 1629, end: 1639 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1642, end: 1647 },
          },
          loc: { start: 1642, end: 1647 },
        },
      ],
      loc: { start: 1609, end: 1647 },
    },
  ],
  loc: { start: 0, end: 1647 },
} as unknown as DocumentNode;
