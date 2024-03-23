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
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 107, end: 110 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 115, end: 117 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 119, end: 121 },
              },
              loc: { start: 119, end: 121 },
            },
            loc: { start: 119, end: 122 },
          },
          directives: [],
          loc: { start: 115, end: 122 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'age', loc: { start: 125, end: 128 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 130, end: 133 },
              },
              loc: { start: 130, end: 133 },
            },
            loc: { start: 130, end: 134 },
          },
          directives: [],
          loc: { start: 125, end: 134 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 137, end: 141 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 143, end: 149 },
              },
              loc: { start: 143, end: 149 },
            },
            loc: { start: 143, end: 150 },
          },
          directives: [],
          loc: { start: 137, end: 150 },
        },
      ],
      loc: { start: 97, end: 152 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Cat', loc: { start: 159, end: 162 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Pet', loc: { start: 174, end: 177 } },
          loc: { start: 174, end: 177 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 182, end: 184 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 186, end: 188 },
              },
              loc: { start: 186, end: 188 },
            },
            loc: { start: 186, end: 189 },
          },
          directives: [],
          loc: { start: 182, end: 189 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'age', loc: { start: 192, end: 195 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 197, end: 200 },
              },
              loc: { start: 197, end: 200 },
            },
            loc: { start: 197, end: 201 },
          },
          directives: [],
          loc: { start: 192, end: 201 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 204, end: 208 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 210, end: 216 },
              },
              loc: { start: 210, end: 216 },
            },
            loc: { start: 210, end: 217 },
          },
          directives: [],
          loc: { start: 204, end: 217 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'likesToScratch',
            loc: { start: 220, end: 234 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 236, end: 243 },
              },
              loc: { start: 236, end: 243 },
            },
            loc: { start: 236, end: 244 },
          },
          directives: [],
          loc: { start: 220, end: 244 },
        },
      ],
      loc: { start: 154, end: 246 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Dog', loc: { start: 253, end: 256 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Pet', loc: { start: 268, end: 271 } },
          loc: { start: 268, end: 271 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 276, end: 278 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 280, end: 282 },
              },
              loc: { start: 280, end: 282 },
            },
            loc: { start: 280, end: 283 },
          },
          directives: [],
          loc: { start: 276, end: 283 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'age', loc: { start: 286, end: 289 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 291, end: 294 },
              },
              loc: { start: 291, end: 294 },
            },
            loc: { start: 291, end: 295 },
          },
          directives: [],
          loc: { start: 286, end: 295 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 298, end: 302 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 304, end: 310 },
              },
              loc: { start: 304, end: 310 },
            },
            loc: { start: 304, end: 311 },
          },
          directives: [],
          loc: { start: 298, end: 311 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'likesToDig',
            loc: { start: 314, end: 324 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 326, end: 333 },
              },
              loc: { start: 326, end: 333 },
            },
            loc: { start: 326, end: 334 },
          },
          directives: [],
          loc: { start: 314, end: 334 },
        },
      ],
      loc: { start: 248, end: 336 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 349, end: 354 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 359, end: 368 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 369, end: 371 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 373, end: 375 },
                  },
                  loc: { start: 373, end: 375 },
                },
                loc: { start: 373, end: 376 },
              },
              directives: [],
              loc: { start: 369, end: 376 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 379, end: 395 },
              },
              loc: { start: 379, end: 395 },
            },
            loc: { start: 379, end: 396 },
          },
          directives: [],
          loc: { start: 359, end: 396 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 399, end: 418 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 419, end: 424 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 426, end: 450 },
                  },
                  loc: { start: 426, end: 450 },
                },
                loc: { start: 426, end: 451 },
              },
              directives: [],
              loc: { start: 419, end: 451 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 454, end: 480 },
              },
              loc: { start: 454, end: 480 },
            },
            loc: { start: 454, end: 481 },
          },
          directives: [],
          loc: { start: 399, end: 481 },
        },
      ],
      loc: { start: 337, end: 483 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 497, end: 505 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 510, end: 521 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 522, end: 527 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 529, end: 545 },
                  },
                  loc: { start: 529, end: 545 },
                },
                loc: { start: 529, end: 546 },
              },
              directives: [],
              loc: { start: 522, end: 546 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 549, end: 567 },
              },
              loc: { start: 549, end: 567 },
            },
            loc: { start: 549, end: 568 },
          },
          directives: [],
          loc: { start: 510, end: 568 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 571, end: 580 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 581, end: 586 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 588, end: 602 },
                  },
                  loc: { start: 588, end: 602 },
                },
                loc: { start: 588, end: 603 },
              },
              directives: [],
              loc: { start: 581, end: 603 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 606, end: 622 },
              },
              loc: { start: 606, end: 622 },
            },
            loc: { start: 606, end: 623 },
          },
          directives: [],
          loc: { start: 571, end: 623 },
        },
      ],
      loc: { start: 485, end: 625 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 632, end: 637 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 642, end: 644 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 646, end: 648 },
              },
              loc: { start: 646, end: 648 },
            },
            loc: { start: 646, end: 649 },
          },
          directives: [],
          loc: { start: 642, end: 649 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 652, end: 656 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 658, end: 664 },
              },
              loc: { start: 658, end: 664 },
            },
            loc: { start: 658, end: 665 },
          },
          directives: [],
          loc: { start: 652, end: 665 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 668, end: 671 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 673, end: 679 },
            },
            loc: { start: 673, end: 679 },
          },
          directives: [],
          loc: { start: 668, end: 679 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 682, end: 689 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 691, end: 695 },
              },
              loc: { start: 691, end: 695 },
            },
            loc: { start: 691, end: 696 },
          },
          directives: [],
          loc: { start: 682, end: 696 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 699, end: 708 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 710, end: 718 },
              },
              loc: { start: 710, end: 718 },
            },
            loc: { start: 710, end: 719 },
          },
          directives: [],
          loc: { start: 699, end: 719 },
        },
      ],
      loc: { start: 627, end: 721 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 728, end: 743 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 748, end: 754 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 756, end: 761 },
            },
            loc: { start: 756, end: 761 },
          },
          directives: [],
          loc: { start: 748, end: 761 },
        },
      ],
      loc: { start: 723, end: 763 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 771, end: 787 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 790, end: 805 },
          },
          loc: { start: 790, end: 805 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 808, end: 813 } },
          loc: { start: 808, end: 813 },
        },
      ],
      loc: { start: 765, end: 813 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 821, end: 845 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 850, end: 856 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 858, end: 860 },
              },
              loc: { start: 858, end: 860 },
            },
            loc: { start: 858, end: 861 },
          },
          directives: [],
          loc: { start: 850, end: 861 },
        },
      ],
      loc: { start: 815, end: 863 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 870, end: 895 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 900, end: 906 },
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
                    loc: { start: 909, end: 914 },
                  },
                  loc: { start: 909, end: 914 },
                },
                loc: { start: 909, end: 915 },
              },
              loc: { start: 908, end: 916 },
            },
            loc: { start: 908, end: 917 },
          },
          directives: [],
          loc: { start: 900, end: 917 },
        },
      ],
      loc: { start: 865, end: 919 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 927, end: 953 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 956, end: 981 },
          },
          loc: { start: 956, end: 981 },
        },
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 984, end: 989 } },
          loc: { start: 984, end: 989 },
        },
      ],
      loc: { start: 921, end: 989 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 997, end: 1013 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1018, end: 1022 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1024, end: 1030 },
              },
              loc: { start: 1024, end: 1030 },
            },
            loc: { start: 1024, end: 1031 },
          },
          directives: [],
          loc: { start: 1018, end: 1031 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1034, end: 1037 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1039, end: 1045 },
            },
            loc: { start: 1039, end: 1045 },
          },
          directives: [],
          loc: { start: 1034, end: 1045 },
        },
      ],
      loc: { start: 991, end: 1047 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1054, end: 1071 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1076, end: 1082 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1084, end: 1089 },
              },
              loc: { start: 1084, end: 1089 },
            },
            loc: { start: 1084, end: 1090 },
          },
          directives: [],
          loc: { start: 1076, end: 1090 },
        },
      ],
      loc: { start: 1049, end: 1092 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1100, end: 1118 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1121, end: 1138 },
          },
          loc: { start: 1121, end: 1138 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1141, end: 1146 },
          },
          loc: { start: 1141, end: 1146 },
        },
      ],
      loc: { start: 1094, end: 1146 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1154, end: 1168 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1173, end: 1175 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1177, end: 1179 },
              },
              loc: { start: 1177, end: 1179 },
            },
            loc: { start: 1177, end: 1180 },
          },
          directives: [],
          loc: { start: 1173, end: 1180 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1183, end: 1187 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1189, end: 1195 },
              },
              loc: { start: 1189, end: 1195 },
            },
            loc: { start: 1189, end: 1196 },
          },
          directives: [],
          loc: { start: 1183, end: 1196 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1199, end: 1202 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1204, end: 1210 },
            },
            loc: { start: 1204, end: 1210 },
          },
          directives: [],
          loc: { start: 1199, end: 1210 },
        },
      ],
      loc: { start: 1148, end: 1212 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1219, end: 1234 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1239, end: 1245 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1247, end: 1252 },
              },
              loc: { start: 1247, end: 1252 },
            },
            loc: { start: 1247, end: 1253 },
          },
          directives: [],
          loc: { start: 1239, end: 1253 },
        },
      ],
      loc: { start: 1214, end: 1255 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1263, end: 1279 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1282, end: 1297 },
          },
          loc: { start: 1282, end: 1297 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1300, end: 1305 },
          },
          loc: { start: 1300, end: 1305 },
        },
      ],
      loc: { start: 1257, end: 1305 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1318, end: 1323 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'account',
            loc: { start: 1328, end: 1335 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Account',
                loc: { start: 1337, end: 1344 },
              },
              loc: { start: 1337, end: 1344 },
            },
            loc: { start: 1337, end: 1345 },
          },
          directives: [],
          loc: { start: 1328, end: 1345 },
        },
      ],
      loc: { start: 1306, end: 1347 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1361, end: 1373 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1378, end: 1392 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1394, end: 1401 },
              },
              loc: { start: 1394, end: 1401 },
            },
            loc: { start: 1394, end: 1402 },
          },
          directives: [],
          loc: { start: 1378, end: 1402 },
        },
      ],
      loc: { start: 1349, end: 1404 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Account', loc: { start: 1411, end: 1418 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1423, end: 1425 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1427, end: 1429 },
              },
              loc: { start: 1427, end: 1429 },
            },
            loc: { start: 1427, end: 1430 },
          },
          directives: [],
          loc: { start: 1423, end: 1430 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isSubscribed',
            loc: { start: 1433, end: 1445 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1447, end: 1454 },
              },
              loc: { start: 1447, end: 1454 },
            },
            loc: { start: 1447, end: 1455 },
          },
          directives: [],
          loc: { start: 1433, end: 1455 },
        },
      ],
      loc: { start: 1406, end: 1457 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Country', loc: { start: 1464, end: 1471 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1476, end: 1478 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1480, end: 1482 },
              },
              loc: { start: 1480, end: 1482 },
            },
            loc: { start: 1480, end: 1483 },
          },
          directives: [],
          loc: { start: 1476, end: 1483 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1486, end: 1490 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1492, end: 1498 },
              },
              loc: { start: 1492, end: 1498 },
            },
            loc: { start: 1492, end: 1499 },
          },
          directives: [],
          loc: { start: 1486, end: 1499 },
        },
      ],
      loc: { start: 1459, end: 1501 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1508, end: 1515 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1520, end: 1522 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1524, end: 1526 },
              },
              loc: { start: 1524, end: 1526 },
            },
            loc: { start: 1524, end: 1527 },
          },
          directives: [],
          loc: { start: 1520, end: 1527 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1530, end: 1534 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1536, end: 1540 },
              },
              loc: { start: 1536, end: 1540 },
            },
            loc: { start: 1536, end: 1541 },
          },
          directives: [],
          loc: { start: 1530, end: 1541 },
        },
      ],
      loc: { start: 1503, end: 1543 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProfileMeta',
        loc: { start: 1550, end: 1561 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1566, end: 1568 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1570, end: 1572 },
              },
              loc: { start: 1570, end: 1572 },
            },
            loc: { start: 1570, end: 1573 },
          },
          directives: [],
          loc: { start: 1566, end: 1573 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isCompleted',
            loc: { start: 1576, end: 1587 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1589, end: 1596 },
              },
              loc: { start: 1589, end: 1596 },
            },
            loc: { start: 1589, end: 1597 },
          },
          directives: [],
          loc: { start: 1576, end: 1597 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'score',
            loc: { start: 1600, end: 1605 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1607, end: 1613 },
              },
              loc: { start: 1607, end: 1613 },
            },
            loc: { start: 1607, end: 1614 },
          },
          directives: [],
          loc: { start: 1600, end: 1614 },
        },
      ],
      loc: { start: 1545, end: 1616 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1629, end: 1634 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1639, end: 1641 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1643, end: 1654 },
              },
              loc: { start: 1643, end: 1654 },
            },
            loc: { start: 1643, end: 1655 },
          },
          directives: [],
          loc: { start: 1639, end: 1655 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1658, end: 1675 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 1676, end: 1687 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1689, end: 1695 },
                  },
                  loc: { start: 1689, end: 1695 },
                },
                loc: { start: 1689, end: 1696 },
              },
              directives: [],
              loc: { start: 1676, end: 1696 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1699, end: 1710 },
              },
              loc: { start: 1699, end: 1710 },
            },
            loc: { start: 1699, end: 1711 },
          },
          directives: [],
          loc: { start: 1658, end: 1711 },
        },
      ],
      loc: { start: 1617, end: 1713 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1720, end: 1724 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1729, end: 1731 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1733, end: 1735 },
              },
              loc: { start: 1733, end: 1735 },
            },
            loc: { start: 1733, end: 1736 },
          },
          directives: [],
          loc: { start: 1729, end: 1736 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'fullName',
            loc: { start: 1739, end: 1747 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1749, end: 1755 },
              },
              loc: { start: 1749, end: 1755 },
            },
            loc: { start: 1749, end: 1756 },
          },
          directives: [],
          loc: { start: 1739, end: 1756 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 1759, end: 1772 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1774, end: 1780 },
            },
            loc: { start: 1774, end: 1780 },
          },
          directives: [],
          loc: { start: 1759, end: 1780 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGoogle',
            loc: { start: 1783, end: 1796 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1798, end: 1804 },
            },
            loc: { start: 1798, end: 1804 },
          },
          directives: [],
          loc: { start: 1783, end: 1804 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'role',
            loc: { start: 1807, end: 1811 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserRole',
                loc: { start: 1813, end: 1821 },
              },
              loc: { start: 1813, end: 1821 },
            },
            loc: { start: 1813, end: 1822 },
          },
          directives: [],
          loc: { start: 1807, end: 1822 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1825, end: 1834 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1836, end: 1844 },
              },
              loc: { start: 1836, end: 1844 },
            },
            loc: { start: 1836, end: 1845 },
          },
          directives: [],
          loc: { start: 1825, end: 1845 },
        },
      ],
      loc: { start: 1715, end: 1847 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 1854, end: 1864 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1869, end: 1875 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1877, end: 1881 },
            },
            loc: { start: 1877, end: 1881 },
          },
          directives: [],
          loc: { start: 1869, end: 1881 },
        },
      ],
      loc: { start: 1849, end: 1883 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserRole',
        loc: { start: 1890, end: 1898 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'ADMIN',
            loc: { start: 1903, end: 1908 },
          },
          directives: [],
          loc: { start: 1903, end: 1908 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'USER',
            loc: { start: 1911, end: 1915 },
          },
          directives: [],
          loc: { start: 1911, end: 1915 },
        },
      ],
      loc: { start: 1885, end: 1917 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 1925, end: 1936 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 1939, end: 1949 },
          },
          loc: { start: 1939, end: 1949 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'Error',
            loc: { start: 1952, end: 1957 },
          },
          loc: { start: 1952, end: 1957 },
        },
      ],
      loc: { start: 1919, end: 1957 },
    },
  ],
  loc: { start: 0, end: 1958 },
} as unknown as DocumentNode;
