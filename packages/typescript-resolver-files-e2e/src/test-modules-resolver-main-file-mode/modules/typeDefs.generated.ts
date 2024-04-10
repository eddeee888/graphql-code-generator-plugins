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
        value: 'StandardError',
        loc: { start: 92, end: 105 },
      },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 117, end: 122 } },
          loc: { start: 117, end: 122 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 127, end: 132 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 134, end: 143 },
              },
              loc: { start: 134, end: 143 },
            },
            loc: { start: 134, end: 144 },
          },
          directives: [],
          loc: { start: 127, end: 144 },
        },
      ],
      loc: { start: 87, end: 146 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'ErrorType', loc: { start: 153, end: 162 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'NOT_FOUND',
            loc: { start: 167, end: 176 },
          },
          directives: [],
          loc: { start: 167, end: 176 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'INPUT_VALIDATION_ERROR',
            loc: { start: 179, end: 201 },
          },
          directives: [],
          loc: { start: 179, end: 201 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FORBIDDEN_ERROR',
            loc: { start: 204, end: 219 },
          },
          directives: [],
          loc: { start: 204, end: 219 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'UNEXPECTED_ERROR',
            loc: { start: 222, end: 238 },
          },
          directives: [],
          loc: { start: 222, end: 238 },
        },
      ],
      loc: { start: 148, end: 240 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationInput',
        loc: { start: 248, end: 263 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 268, end: 282 },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 284, end: 287 } },
            loc: { start: 284, end: 287 },
          },
          directives: [],
          loc: { start: 268, end: 287 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'page', loc: { start: 290, end: 294 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 296, end: 299 } },
            loc: { start: 296, end: 299 },
          },
          directives: [],
          loc: { start: 290, end: 299 },
        },
      ],
      loc: { start: 242, end: 301 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PaginationResult',
        loc: { start: 308, end: 324 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'currentPage',
            loc: { start: 329, end: 340 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 342, end: 345 },
              },
              loc: { start: 342, end: 345 },
            },
            loc: { start: 342, end: 346 },
          },
          directives: [],
          loc: { start: 329, end: 346 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'recordsPerPage',
            loc: { start: 349, end: 363 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 365, end: 368 },
              },
              loc: { start: 365, end: 368 },
            },
            loc: { start: 365, end: 369 },
          },
          directives: [],
          loc: { start: 349, end: 369 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalPageCount',
            loc: { start: 372, end: 386 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 388, end: 391 },
              },
              loc: { start: 388, end: 391 },
            },
            loc: { start: 388, end: 392 },
          },
          directives: [],
          loc: { start: 372, end: 392 },
        },
      ],
      loc: { start: 303, end: 394 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 403, end: 411 } },
      directives: [],
      loc: { start: 396, end: 411 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PetHousing',
        loc: { start: 417, end: 427 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 432, end: 434 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 436, end: 438 },
              },
              loc: { start: 436, end: 438 },
            },
            loc: { start: 436, end: 439 },
          },
          directives: [],
          loc: { start: 432, end: 439 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 442, end: 446 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 448, end: 454 },
              },
              loc: { start: 448, end: 454 },
            },
            loc: { start: 448, end: 455 },
          },
          directives: [],
          loc: { start: 442, end: 455 },
        },
      ],
      loc: { start: 412, end: 457 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 470, end: 475 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pet', loc: { start: 480, end: 483 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 484, end: 486 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 488, end: 490 },
                  },
                  loc: { start: 488, end: 490 },
                },
                loc: { start: 488, end: 491 },
              },
              directives: [],
              loc: { start: 484, end: 491 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetResult',
                loc: { start: 494, end: 503 },
              },
              loc: { start: 494, end: 503 },
            },
            loc: { start: 494, end: 504 },
          },
          directives: [],
          loc: { start: 480, end: 504 },
        },
      ],
      loc: { start: 458, end: 506 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 518, end: 521 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 526, end: 528 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 530, end: 532 },
              },
              loc: { start: 530, end: 532 },
            },
            loc: { start: 530, end: 533 },
          },
          directives: [],
          loc: { start: 526, end: 533 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 536, end: 540 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetCode',
                loc: { start: 542, end: 549 },
              },
              loc: { start: 542, end: 549 },
            },
            loc: { start: 542, end: 550 },
          },
          directives: [],
          loc: { start: 536, end: 550 },
        },
      ],
      loc: { start: 508, end: 552 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Cat', loc: { start: 559, end: 562 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Pet', loc: { start: 574, end: 577 } },
          loc: { start: 574, end: 577 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 582, end: 584 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 586, end: 588 },
              },
              loc: { start: 586, end: 588 },
            },
            loc: { start: 586, end: 589 },
          },
          directives: [],
          loc: { start: 582, end: 589 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 592, end: 596 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetCode',
                loc: { start: 598, end: 605 },
              },
              loc: { start: 598, end: 605 },
            },
            loc: { start: 598, end: 606 },
          },
          directives: [],
          loc: { start: 592, end: 606 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'scratchy',
            loc: { start: 609, end: 617 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 619, end: 626 },
              },
              loc: { start: 619, end: 626 },
            },
            loc: { start: 619, end: 627 },
          },
          directives: [],
          loc: { start: 609, end: 627 },
        },
      ],
      loc: { start: 554, end: 629 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Dog', loc: { start: 636, end: 639 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Pet', loc: { start: 651, end: 654 } },
          loc: { start: 651, end: 654 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 659, end: 661 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 663, end: 665 },
              },
              loc: { start: 663, end: 665 },
            },
            loc: { start: 663, end: 666 },
          },
          directives: [],
          loc: { start: 659, end: 666 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 669, end: 673 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetCode',
                loc: { start: 675, end: 682 },
              },
              loc: { start: 675, end: 682 },
            },
            loc: { start: 675, end: 683 },
          },
          directives: [],
          loc: { start: 669, end: 683 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'barky', loc: { start: 686, end: 691 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 693, end: 700 },
              },
              loc: { start: 693, end: 700 },
            },
            loc: { start: 693, end: 701 },
          },
          directives: [],
          loc: { start: 686, end: 701 },
        },
      ],
      loc: { start: 631, end: 703 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetOk', loc: { start: 710, end: 715 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 720, end: 726 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Pet', loc: { start: 728, end: 731 } },
            loc: { start: 728, end: 731 },
          },
          directives: [],
          loc: { start: 720, end: 731 },
        },
      ],
      loc: { start: 705, end: 733 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetError', loc: { start: 740, end: 748 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 760, end: 765 } },
          loc: { start: 760, end: 765 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 770, end: 775 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 777, end: 786 },
              },
              loc: { start: 777, end: 786 },
            },
            loc: { start: 777, end: 787 },
          },
          directives: [],
          loc: { start: 770, end: 787 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 790, end: 794 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 796, end: 802 },
              },
              loc: { start: 796, end: 802 },
            },
            loc: { start: 796, end: 803 },
          },
          directives: [],
          loc: { start: 790, end: 803 },
        },
      ],
      loc: { start: 735, end: 805 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'PetResult', loc: { start: 813, end: 822 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'PetOk', loc: { start: 825, end: 830 } },
          loc: { start: 825, end: 830 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PetError',
            loc: { start: 833, end: 841 },
          },
          loc: { start: 833, end: 841 },
        },
      ],
      loc: { start: 807, end: 841 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'PetCode', loc: { start: 850, end: 857 } },
      directives: [],
      loc: { start: 843, end: 857 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 870, end: 875 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 880, end: 889 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 890, end: 892 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 894, end: 896 },
                  },
                  loc: { start: 894, end: 896 },
                },
                loc: { start: 894, end: 897 },
              },
              directives: [],
              loc: { start: 890, end: 897 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 900, end: 916 },
              },
              loc: { start: 900, end: 916 },
            },
            loc: { start: 900, end: 917 },
          },
          directives: [],
          loc: { start: 880, end: 917 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 920, end: 939 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 940, end: 945 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 947, end: 971 },
                  },
                  loc: { start: 947, end: 971 },
                },
                loc: { start: 947, end: 972 },
              },
              directives: [],
              loc: { start: 940, end: 972 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 975, end: 1001 },
              },
              loc: { start: 975, end: 1001 },
            },
            loc: { start: 975, end: 1002 },
          },
          directives: [],
          loc: { start: 920, end: 1002 },
        },
      ],
      loc: { start: 858, end: 1004 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1018, end: 1026 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 1031, end: 1042 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1043, end: 1048 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 1050, end: 1066 },
                  },
                  loc: { start: 1050, end: 1066 },
                },
                loc: { start: 1050, end: 1067 },
              },
              directives: [],
              loc: { start: 1043, end: 1067 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 1070, end: 1088 },
              },
              loc: { start: 1070, end: 1088 },
            },
            loc: { start: 1070, end: 1089 },
          },
          directives: [],
          loc: { start: 1031, end: 1089 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 1092, end: 1101 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1102, end: 1107 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 1109, end: 1123 },
                  },
                  loc: { start: 1109, end: 1123 },
                },
                loc: { start: 1109, end: 1124 },
              },
              directives: [],
              loc: { start: 1102, end: 1124 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 1127, end: 1143 },
              },
              loc: { start: 1127, end: 1143 },
            },
            loc: { start: 1127, end: 1144 },
          },
          directives: [],
          loc: { start: 1092, end: 1144 },
        },
      ],
      loc: { start: 1006, end: 1146 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1153, end: 1158 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1163, end: 1165 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1167, end: 1169 },
              },
              loc: { start: 1167, end: 1169 },
            },
            loc: { start: 1167, end: 1170 },
          },
          directives: [],
          loc: { start: 1163, end: 1170 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1173, end: 1177 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1179, end: 1185 },
              },
              loc: { start: 1179, end: 1185 },
            },
            loc: { start: 1179, end: 1186 },
          },
          directives: [],
          loc: { start: 1173, end: 1186 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1189, end: 1192 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1194, end: 1200 },
            },
            loc: { start: 1194, end: 1200 },
          },
          directives: [],
          loc: { start: 1189, end: 1200 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 1203, end: 1210 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1212, end: 1216 },
              },
              loc: { start: 1212, end: 1216 },
            },
            loc: { start: 1212, end: 1217 },
          },
          directives: [],
          loc: { start: 1203, end: 1217 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1220, end: 1229 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1231, end: 1239 },
              },
              loc: { start: 1231, end: 1239 },
            },
            loc: { start: 1231, end: 1240 },
          },
          directives: [],
          loc: { start: 1220, end: 1240 },
        },
      ],
      loc: { start: 1148, end: 1242 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1249, end: 1264 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1269, end: 1275 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1277, end: 1282 },
            },
            loc: { start: 1277, end: 1282 },
          },
          directives: [],
          loc: { start: 1269, end: 1282 },
        },
      ],
      loc: { start: 1244, end: 1284 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1292, end: 1308 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1311, end: 1326 },
          },
          loc: { start: 1311, end: 1326 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1329, end: 1342 },
          },
          loc: { start: 1329, end: 1342 },
        },
      ],
      loc: { start: 1286, end: 1342 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1350, end: 1374 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1379, end: 1385 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1387, end: 1389 },
              },
              loc: { start: 1387, end: 1389 },
            },
            loc: { start: 1387, end: 1390 },
          },
          directives: [],
          loc: { start: 1379, end: 1390 },
        },
      ],
      loc: { start: 1344, end: 1392 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1399, end: 1424 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1429, end: 1435 },
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
                    loc: { start: 1438, end: 1443 },
                  },
                  loc: { start: 1438, end: 1443 },
                },
                loc: { start: 1438, end: 1444 },
              },
              loc: { start: 1437, end: 1445 },
            },
            loc: { start: 1437, end: 1446 },
          },
          directives: [],
          loc: { start: 1429, end: 1446 },
        },
      ],
      loc: { start: 1394, end: 1448 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1456, end: 1482 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1485, end: 1510 },
          },
          loc: { start: 1485, end: 1510 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1513, end: 1526 },
          },
          loc: { start: 1513, end: 1526 },
        },
      ],
      loc: { start: 1450, end: 1526 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1534, end: 1550 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1555, end: 1559 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1561, end: 1567 },
              },
              loc: { start: 1561, end: 1567 },
            },
            loc: { start: 1561, end: 1568 },
          },
          directives: [],
          loc: { start: 1555, end: 1568 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1571, end: 1574 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1576, end: 1582 },
            },
            loc: { start: 1576, end: 1582 },
          },
          directives: [],
          loc: { start: 1571, end: 1582 },
        },
      ],
      loc: { start: 1528, end: 1584 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1591, end: 1608 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1613, end: 1619 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1621, end: 1626 },
              },
              loc: { start: 1621, end: 1626 },
            },
            loc: { start: 1621, end: 1627 },
          },
          directives: [],
          loc: { start: 1613, end: 1627 },
        },
      ],
      loc: { start: 1586, end: 1629 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1637, end: 1655 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1658, end: 1675 },
          },
          loc: { start: 1658, end: 1675 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1678, end: 1691 },
          },
          loc: { start: 1678, end: 1691 },
        },
      ],
      loc: { start: 1631, end: 1691 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1699, end: 1713 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1718, end: 1720 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1722, end: 1724 },
              },
              loc: { start: 1722, end: 1724 },
            },
            loc: { start: 1722, end: 1725 },
          },
          directives: [],
          loc: { start: 1718, end: 1725 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1728, end: 1732 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1734, end: 1740 },
              },
              loc: { start: 1734, end: 1740 },
            },
            loc: { start: 1734, end: 1741 },
          },
          directives: [],
          loc: { start: 1728, end: 1741 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1744, end: 1747 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1749, end: 1755 },
            },
            loc: { start: 1749, end: 1755 },
          },
          directives: [],
          loc: { start: 1744, end: 1755 },
        },
      ],
      loc: { start: 1693, end: 1757 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1764, end: 1779 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1784, end: 1790 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1792, end: 1797 },
              },
              loc: { start: 1792, end: 1797 },
            },
            loc: { start: 1792, end: 1798 },
          },
          directives: [],
          loc: { start: 1784, end: 1798 },
        },
      ],
      loc: { start: 1759, end: 1800 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1808, end: 1824 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1827, end: 1842 },
          },
          loc: { start: 1827, end: 1842 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1845, end: 1858 },
          },
          loc: { start: 1845, end: 1858 },
        },
      ],
      loc: { start: 1802, end: 1858 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1871, end: 1883 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1888, end: 1902 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1904, end: 1911 },
              },
              loc: { start: 1904, end: 1911 },
            },
            loc: { start: 1904, end: 1912 },
          },
          directives: [],
          loc: { start: 1888, end: 1912 },
        },
      ],
      loc: { start: 1859, end: 1914 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1921, end: 1928 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1933, end: 1935 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1937, end: 1939 },
              },
              loc: { start: 1937, end: 1939 },
            },
            loc: { start: 1937, end: 1940 },
          },
          directives: [],
          loc: { start: 1933, end: 1940 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 1943, end: 1947 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1949, end: 1953 },
              },
              loc: { start: 1949, end: 1953 },
            },
            loc: { start: 1949, end: 1954 },
          },
          directives: [],
          loc: { start: 1943, end: 1954 },
        },
      ],
      loc: { start: 1916, end: 1956 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1969, end: 1974 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1979, end: 1981 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 1983, end: 1994 },
              },
              loc: { start: 1983, end: 1994 },
            },
            loc: { start: 1983, end: 1995 },
          },
          directives: [],
          loc: { start: 1979, end: 1995 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 1998, end: 2015 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 2016, end: 2027 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 2029, end: 2035 },
                  },
                  loc: { start: 2029, end: 2035 },
                },
                loc: { start: 2029, end: 2036 },
              },
              directives: [],
              loc: { start: 2016, end: 2036 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2039, end: 2050 },
              },
              loc: { start: 2039, end: 2050 },
            },
            loc: { start: 2039, end: 2051 },
          },
          directives: [],
          loc: { start: 1998, end: 2051 },
        },
      ],
      loc: { start: 1957, end: 2053 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 2060, end: 2064 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2069, end: 2071 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2073, end: 2075 },
              },
              loc: { start: 2073, end: 2075 },
            },
            loc: { start: 2073, end: 2076 },
          },
          directives: [],
          loc: { start: 2069, end: 2076 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2079, end: 2083 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2085, end: 2091 },
            },
            loc: { start: 2085, end: 2091 },
          },
          directives: [],
          loc: { start: 2079, end: 2091 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 2094, end: 2105 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2107, end: 2113 },
              },
              loc: { start: 2107, end: 2113 },
            },
            loc: { start: 2107, end: 2114 },
          },
          directives: [],
          loc: { start: 2094, end: 2114 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 2117, end: 2131 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2133, end: 2139 },
            },
            loc: { start: 2133, end: 2139 },
          },
          directives: [],
          loc: { start: 2117, end: 2139 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 2142, end: 2156 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2158, end: 2164 },
            },
            loc: { start: 2158, end: 2164 },
          },
          directives: [],
          loc: { start: 2142, end: 2164 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 2167, end: 2180 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2182, end: 2188 },
            },
            loc: { start: 2182, end: 2188 },
          },
          directives: [],
          loc: { start: 2167, end: 2188 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 2191, end: 2206 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2208, end: 2214 },
            },
            loc: { start: 2208, end: 2214 },
          },
          directives: [],
          loc: { start: 2191, end: 2214 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 2217, end: 2223 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2225, end: 2231 },
            },
            loc: { start: 2225, end: 2231 },
          },
          directives: [],
          loc: { start: 2217, end: 2231 },
        },
      ],
      loc: { start: 2055, end: 2233 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 2240, end: 2250 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2255, end: 2261 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2263, end: 2267 },
            },
            loc: { start: 2263, end: 2267 },
          },
          directives: [],
          loc: { start: 2255, end: 2267 },
        },
      ],
      loc: { start: 2235, end: 2269 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2277, end: 2288 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2291, end: 2301 },
          },
          loc: { start: 2291, end: 2301 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 2304, end: 2317 },
          },
          loc: { start: 2304, end: 2317 },
        },
      ],
      loc: { start: 2271, end: 2317 },
    },
  ],
  loc: { start: 0, end: 2318 },
} as unknown as DocumentNode;
