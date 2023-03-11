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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Error', loc: { start: 52, end: 57 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'message', loc: { start: 62, end: 69 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 71, end: 77 },
              },
              loc: { start: 71, end: 77 },
            },
            loc: { start: 71, end: 78 },
          },
          directives: [],
          loc: { start: 62, end: 78 },
        },
      ],
      loc: { start: 47, end: 80 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 89, end: 97 } },
      directives: [],
      loc: { start: 82, end: 97 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 110, end: 115 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 120, end: 129 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 130, end: 132 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 134, end: 136 },
                  },
                  loc: { start: 134, end: 136 },
                },
                loc: { start: 134, end: 137 },
              },
              directives: [],
              loc: { start: 130, end: 137 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 140, end: 156 },
              },
              loc: { start: 140, end: 156 },
            },
            loc: { start: 140, end: 157 },
          },
          directives: [],
          loc: { start: 120, end: 157 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 160, end: 179 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 180, end: 185 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 187, end: 211 },
                  },
                  loc: { start: 187, end: 211 },
                },
                loc: { start: 187, end: 212 },
              },
              directives: [],
              loc: { start: 180, end: 212 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 215, end: 241 },
              },
              loc: { start: 215, end: 241 },
            },
            loc: { start: 215, end: 242 },
          },
          directives: [],
          loc: { start: 160, end: 242 },
        },
      ],
      loc: { start: 98, end: 244 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 258, end: 266 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 271, end: 282 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 283, end: 288 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 290, end: 306 },
                  },
                  loc: { start: 290, end: 306 },
                },
                loc: { start: 290, end: 307 },
              },
              directives: [],
              loc: { start: 283, end: 307 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 310, end: 328 },
              },
              loc: { start: 310, end: 328 },
            },
            loc: { start: 310, end: 329 },
          },
          directives: [],
          loc: { start: 271, end: 329 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 332, end: 341 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 342, end: 347 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 349, end: 363 },
                  },
                  loc: { start: 349, end: 363 },
                },
                loc: { start: 349, end: 364 },
              },
              directives: [],
              loc: { start: 342, end: 364 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 367, end: 383 },
              },
              loc: { start: 367, end: 383 },
            },
            loc: { start: 367, end: 384 },
          },
          directives: [],
          loc: { start: 332, end: 384 },
        },
      ],
      loc: { start: 246, end: 386 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 393, end: 398 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 403, end: 405 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 407, end: 409 },
              },
              loc: { start: 407, end: 409 },
            },
            loc: { start: 407, end: 410 },
          },
          directives: [],
          loc: { start: 403, end: 410 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 413, end: 417 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 419, end: 425 },
              },
              loc: { start: 419, end: 425 },
            },
            loc: { start: 419, end: 426 },
          },
          directives: [],
          loc: { start: 413, end: 426 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 429, end: 432 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 434, end: 440 },
            },
            loc: { start: 434, end: 440 },
          },
          directives: [],
          loc: { start: 429, end: 440 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 443, end: 450 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 452, end: 456 },
              },
              loc: { start: 452, end: 456 },
            },
            loc: { start: 452, end: 457 },
          },
          directives: [],
          loc: { start: 443, end: 457 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 460, end: 469 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 471, end: 479 },
              },
              loc: { start: 471, end: 479 },
            },
            loc: { start: 471, end: 480 },
          },
          directives: [],
          loc: { start: 460, end: 480 },
        },
      ],
      loc: { start: 388, end: 482 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 489, end: 504 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 509, end: 515 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 517, end: 522 },
            },
            loc: { start: 517, end: 522 },
          },
          directives: [],
          loc: { start: 509, end: 522 },
        },
      ],
      loc: { start: 484, end: 524 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 532, end: 548 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 551, end: 566 },
          },
          loc: { start: 551, end: 566 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 569, end: 574 } },
          loc: { start: 569, end: 574 },
        },
      ],
      loc: { start: 526, end: 574 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 582, end: 606 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 611, end: 617 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 619, end: 621 },
              },
              loc: { start: 619, end: 621 },
            },
            loc: { start: 619, end: 622 },
          },
          directives: [],
          loc: { start: 611, end: 622 },
        },
      ],
      loc: { start: 576, end: 624 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 631, end: 656 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 661, end: 667 },
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
                    loc: { start: 670, end: 675 },
                  },
                  loc: { start: 670, end: 675 },
                },
                loc: { start: 670, end: 676 },
              },
              loc: { start: 669, end: 677 },
            },
            loc: { start: 669, end: 678 },
          },
          directives: [],
          loc: { start: 661, end: 678 },
        },
      ],
      loc: { start: 626, end: 680 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 688, end: 714 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 717, end: 742 },
          },
          loc: { start: 717, end: 742 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 745, end: 750 } },
          loc: { start: 745, end: 750 },
        },
      ],
      loc: { start: 682, end: 750 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 758, end: 774 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 779, end: 783 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 785, end: 791 },
              },
              loc: { start: 785, end: 791 },
            },
            loc: { start: 785, end: 792 },
          },
          directives: [],
          loc: { start: 779, end: 792 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 795, end: 798 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 800, end: 806 },
            },
            loc: { start: 800, end: 806 },
          },
          directives: [],
          loc: { start: 795, end: 806 },
        },
      ],
      loc: { start: 752, end: 808 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 815, end: 832 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 837, end: 843 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 845, end: 850 },
              },
              loc: { start: 845, end: 850 },
            },
            loc: { start: 845, end: 851 },
          },
          directives: [],
          loc: { start: 837, end: 851 },
        },
      ],
      loc: { start: 810, end: 853 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 861, end: 879 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 882, end: 899 },
          },
          loc: { start: 882, end: 899 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 902, end: 907 } },
          loc: { start: 902, end: 907 },
        },
      ],
      loc: { start: 855, end: 907 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 915, end: 929 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 934, end: 936 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 938, end: 940 },
              },
              loc: { start: 938, end: 940 },
            },
            loc: { start: 938, end: 941 },
          },
          directives: [],
          loc: { start: 934, end: 941 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 944, end: 948 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 950, end: 956 },
              },
              loc: { start: 950, end: 956 },
            },
            loc: { start: 950, end: 957 },
          },
          directives: [],
          loc: { start: 944, end: 957 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 960, end: 963 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 965, end: 971 },
            },
            loc: { start: 965, end: 971 },
          },
          directives: [],
          loc: { start: 960, end: 971 },
        },
      ],
      loc: { start: 909, end: 973 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 980, end: 995 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1000, end: 1006 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1008, end: 1013 },
              },
              loc: { start: 1008, end: 1013 },
            },
            loc: { start: 1008, end: 1014 },
          },
          directives: [],
          loc: { start: 1000, end: 1014 },
        },
      ],
      loc: { start: 975, end: 1016 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1024, end: 1040 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1043, end: 1058 },
          },
          loc: { start: 1043, end: 1058 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1061, end: 1066 },
          },
          loc: { start: 1061, end: 1066 },
        },
      ],
      loc: { start: 1018, end: 1066 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1079, end: 1084 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'account',
            loc: { start: 1089, end: 1096 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Account',
                loc: { start: 1098, end: 1105 },
              },
              loc: { start: 1098, end: 1105 },
            },
            loc: { start: 1098, end: 1106 },
          },
          directives: [],
          loc: { start: 1089, end: 1106 },
        },
      ],
      loc: { start: 1067, end: 1108 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1122, end: 1134 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1139, end: 1153 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1155, end: 1162 },
              },
              loc: { start: 1155, end: 1162 },
            },
            loc: { start: 1155, end: 1163 },
          },
          directives: [],
          loc: { start: 1139, end: 1163 },
        },
      ],
      loc: { start: 1110, end: 1165 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Account', loc: { start: 1172, end: 1179 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1184, end: 1186 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1188, end: 1190 },
              },
              loc: { start: 1188, end: 1190 },
            },
            loc: { start: 1188, end: 1191 },
          },
          directives: [],
          loc: { start: 1184, end: 1191 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isSubscribed',
            loc: { start: 1194, end: 1206 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1208, end: 1215 },
              },
              loc: { start: 1208, end: 1215 },
            },
            loc: { start: 1208, end: 1216 },
          },
          directives: [],
          loc: { start: 1194, end: 1216 },
        },
      ],
      loc: { start: 1167, end: 1218 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Country', loc: { start: 1225, end: 1232 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1237, end: 1239 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1241, end: 1243 },
              },
              loc: { start: 1241, end: 1243 },
            },
            loc: { start: 1241, end: 1244 },
          },
          directives: [],
          loc: { start: 1237, end: 1244 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1247, end: 1251 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1253, end: 1259 },
              },
              loc: { start: 1253, end: 1259 },
            },
            loc: { start: 1253, end: 1260 },
          },
          directives: [],
          loc: { start: 1247, end: 1260 },
        },
      ],
      loc: { start: 1220, end: 1262 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1269, end: 1276 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1281, end: 1283 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1285, end: 1287 },
              },
              loc: { start: 1285, end: 1287 },
            },
            loc: { start: 1285, end: 1288 },
          },
          directives: [],
          loc: { start: 1281, end: 1288 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1291, end: 1295 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1297, end: 1301 },
              },
              loc: { start: 1297, end: 1301 },
            },
            loc: { start: 1297, end: 1302 },
          },
          directives: [],
          loc: { start: 1291, end: 1302 },
        },
      ],
      loc: { start: 1264, end: 1304 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProfileMeta',
        loc: { start: 1311, end: 1322 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1327, end: 1329 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1331, end: 1333 },
              },
              loc: { start: 1331, end: 1333 },
            },
            loc: { start: 1331, end: 1334 },
          },
          directives: [],
          loc: { start: 1327, end: 1334 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isCompleted',
            loc: { start: 1337, end: 1348 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1350, end: 1357 },
              },
              loc: { start: 1350, end: 1357 },
            },
            loc: { start: 1350, end: 1358 },
          },
          directives: [],
          loc: { start: 1337, end: 1358 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'score',
            loc: { start: 1361, end: 1366 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1368, end: 1374 },
              },
              loc: { start: 1368, end: 1374 },
            },
            loc: { start: 1368, end: 1375 },
          },
          directives: [],
          loc: { start: 1361, end: 1375 },
        },
      ],
      loc: { start: 1306, end: 1377 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1390, end: 1395 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1400, end: 1402 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1404, end: 1415 },
              },
              loc: { start: 1404, end: 1415 },
            },
            loc: { start: 1404, end: 1416 },
          },
          directives: [],
          loc: { start: 1400, end: 1416 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1419, end: 1436 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1437, end: 1448 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1450, end: 1456 },
                  },
                  loc: { start: 1450, end: 1456 },
                },
                loc: { start: 1450, end: 1457 },
              },
              directives: [],
              loc: { start: 1437, end: 1457 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1460, end: 1471 },
              },
              loc: { start: 1460, end: 1471 },
            },
            loc: { start: 1460, end: 1472 },
          },
          directives: [],
          loc: { start: 1419, end: 1472 },
        },
      ],
      loc: { start: 1378, end: 1474 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1481, end: 1485 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1490, end: 1492 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1494, end: 1496 },
              },
              loc: { start: 1494, end: 1496 },
            },
            loc: { start: 1494, end: 1497 },
          },
          directives: [],
          loc: { start: 1490, end: 1497 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 1500, end: 1508 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1510, end: 1516 },
              },
              loc: { start: 1510, end: 1516 },
            },
            loc: { start: 1510, end: 1517 },
          },
          directives: [],
          loc: { start: 1500, end: 1517 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1520, end: 1533 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1535, end: 1541 },
            },
            loc: { start: 1535, end: 1541 },
          },
          directives: [],
          loc: { start: 1520, end: 1541 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGoogle',
            loc: { start: 1544, end: 1557 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1559, end: 1565 },
            },
            loc: { start: 1559, end: 1565 },
          },
          directives: [],
          loc: { start: 1544, end: 1565 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'role',
            loc: { start: 1568, end: 1572 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserRole',
                loc: { start: 1574, end: 1582 },
              },
              loc: { start: 1574, end: 1582 },
            },
            loc: { start: 1574, end: 1583 },
          },
          directives: [],
          loc: { start: 1568, end: 1583 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1586, end: 1595 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1597, end: 1605 },
              },
              loc: { start: 1597, end: 1605 },
            },
            loc: { start: 1597, end: 1606 },
          },
          directives: [],
          loc: { start: 1586, end: 1606 },
        },
      ],
      loc: { start: 1476, end: 1608 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1615, end: 1625 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1630, end: 1636 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1638, end: 1642 },
            },
            loc: { start: 1638, end: 1642 },
          },
          directives: [],
          loc: { start: 1630, end: 1642 },
        },
      ],
      loc: { start: 1610, end: 1644 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserRole',
        loc: { start: 1651, end: 1659 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'ADMIN',
            loc: { start: 1664, end: 1669 },
          },
          directives: [],
          loc: { start: 1664, end: 1669 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'USER',
            loc: { start: 1672, end: 1676 },
          },
          directives: [],
          loc: { start: 1672, end: 1676 },
        },
      ],
      loc: { start: 1646, end: 1678 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1686, end: 1697 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1700, end: 1710 },
          },
          loc: { start: 1700, end: 1710 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1713, end: 1718 },
          },
          loc: { start: 1713, end: 1718 },
        },
      ],
      loc: { start: 1680, end: 1718 },
    },
  ],
  loc: { start: 0, end: 1718 },
} as unknown as DocumentNode;
