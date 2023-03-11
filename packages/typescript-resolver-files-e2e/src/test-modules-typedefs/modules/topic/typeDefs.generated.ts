import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 22, end: 31 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 32, end: 34 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 36, end: 38 },
                  },
                  loc: { start: 36, end: 38 },
                },
                loc: { start: 36, end: 39 },
              },
              directives: [],
              loc: { start: 32, end: 39 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 42, end: 58 },
              },
              loc: { start: 42, end: 58 },
            },
            loc: { start: 42, end: 59 },
          },
          directives: [],
          loc: { start: 22, end: 59 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 62, end: 81 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 82, end: 87 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 89, end: 113 },
                  },
                  loc: { start: 89, end: 113 },
                },
                loc: { start: 89, end: 114 },
              },
              directives: [],
              loc: { start: 82, end: 114 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 117, end: 143 },
              },
              loc: { start: 117, end: 143 },
            },
            loc: { start: 117, end: 144 },
          },
          directives: [],
          loc: { start: 62, end: 144 },
        },
      ],
      loc: { start: 0, end: 146 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 160, end: 168 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 173, end: 184 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 185, end: 190 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 192, end: 208 },
                  },
                  loc: { start: 192, end: 208 },
                },
                loc: { start: 192, end: 209 },
              },
              directives: [],
              loc: { start: 185, end: 209 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 212, end: 230 },
              },
              loc: { start: 212, end: 230 },
            },
            loc: { start: 212, end: 231 },
          },
          directives: [],
          loc: { start: 173, end: 231 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 234, end: 243 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 244, end: 249 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 251, end: 265 },
                  },
                  loc: { start: 251, end: 265 },
                },
                loc: { start: 251, end: 266 },
              },
              directives: [],
              loc: { start: 244, end: 266 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 269, end: 285 },
              },
              loc: { start: 269, end: 285 },
            },
            loc: { start: 269, end: 286 },
          },
          directives: [],
          loc: { start: 234, end: 286 },
        },
      ],
      loc: { start: 148, end: 288 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 295, end: 300 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 305, end: 307 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 309, end: 311 },
              },
              loc: { start: 309, end: 311 },
            },
            loc: { start: 309, end: 312 },
          },
          directives: [],
          loc: { start: 305, end: 312 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 315, end: 319 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 321, end: 327 },
              },
              loc: { start: 321, end: 327 },
            },
            loc: { start: 321, end: 328 },
          },
          directives: [],
          loc: { start: 315, end: 328 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 331, end: 334 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 336, end: 342 },
            },
            loc: { start: 336, end: 342 },
          },
          directives: [],
          loc: { start: 331, end: 342 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 345, end: 352 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 354, end: 358 },
              },
              loc: { start: 354, end: 358 },
            },
            loc: { start: 354, end: 359 },
          },
          directives: [],
          loc: { start: 345, end: 359 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 362, end: 371 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 373, end: 381 },
              },
              loc: { start: 373, end: 381 },
            },
            loc: { start: 373, end: 382 },
          },
          directives: [],
          loc: { start: 362, end: 382 },
        },
      ],
      loc: { start: 290, end: 384 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 391, end: 406 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 411, end: 417 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 419, end: 424 },
            },
            loc: { start: 419, end: 424 },
          },
          directives: [],
          loc: { start: 411, end: 424 },
        },
      ],
      loc: { start: 386, end: 426 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 434, end: 450 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 453, end: 468 },
          },
          loc: { start: 453, end: 468 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 471, end: 484 },
          },
          loc: { start: 471, end: 484 },
        },
      ],
      loc: { start: 428, end: 484 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 492, end: 516 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 521, end: 527 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 529, end: 531 },
              },
              loc: { start: 529, end: 531 },
            },
            loc: { start: 529, end: 532 },
          },
          directives: [],
          loc: { start: 521, end: 532 },
        },
      ],
      loc: { start: 486, end: 534 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 541, end: 566 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 571, end: 577 },
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
                    loc: { start: 580, end: 585 },
                  },
                  loc: { start: 580, end: 585 },
                },
                loc: { start: 580, end: 586 },
              },
              loc: { start: 579, end: 587 },
            },
            loc: { start: 579, end: 588 },
          },
          directives: [],
          loc: { start: 571, end: 588 },
        },
      ],
      loc: { start: 536, end: 590 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 598, end: 624 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 627, end: 652 },
          },
          loc: { start: 627, end: 652 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 655, end: 668 },
          },
          loc: { start: 655, end: 668 },
        },
      ],
      loc: { start: 592, end: 668 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 676, end: 692 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 697, end: 701 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 703, end: 709 },
              },
              loc: { start: 703, end: 709 },
            },
            loc: { start: 703, end: 710 },
          },
          directives: [],
          loc: { start: 697, end: 710 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 713, end: 716 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 718, end: 724 },
            },
            loc: { start: 718, end: 724 },
          },
          directives: [],
          loc: { start: 713, end: 724 },
        },
      ],
      loc: { start: 670, end: 726 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 733, end: 750 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 755, end: 761 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 763, end: 768 },
              },
              loc: { start: 763, end: 768 },
            },
            loc: { start: 763, end: 769 },
          },
          directives: [],
          loc: { start: 755, end: 769 },
        },
      ],
      loc: { start: 728, end: 771 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 779, end: 797 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 800, end: 817 },
          },
          loc: { start: 800, end: 817 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 820, end: 833 },
          },
          loc: { start: 820, end: 833 },
        },
      ],
      loc: { start: 773, end: 833 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 841, end: 855 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 860, end: 862 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 864, end: 866 },
              },
              loc: { start: 864, end: 866 },
            },
            loc: { start: 864, end: 867 },
          },
          directives: [],
          loc: { start: 860, end: 867 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 870, end: 874 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 876, end: 882 },
              },
              loc: { start: 876, end: 882 },
            },
            loc: { start: 876, end: 883 },
          },
          directives: [],
          loc: { start: 870, end: 883 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 886, end: 889 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 891, end: 897 },
            },
            loc: { start: 891, end: 897 },
          },
          directives: [],
          loc: { start: 886, end: 897 },
        },
      ],
      loc: { start: 835, end: 899 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 906, end: 921 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 926, end: 932 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 934, end: 939 },
              },
              loc: { start: 934, end: 939 },
            },
            loc: { start: 934, end: 940 },
          },
          directives: [],
          loc: { start: 926, end: 940 },
        },
      ],
      loc: { start: 901, end: 942 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 950, end: 966 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 969, end: 984 },
          },
          loc: { start: 969, end: 984 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 987, end: 1000 },
          },
          loc: { start: 987, end: 1000 },
        },
      ],
      loc: { start: 944, end: 1000 },
    },
  ],
  loc: { start: 0, end: 1001 },
} as unknown as DocumentNode;
