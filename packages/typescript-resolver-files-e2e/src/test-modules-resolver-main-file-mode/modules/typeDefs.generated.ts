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
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetCert', loc: { start: 464, end: 471 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 476, end: 478 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 480, end: 482 },
              },
              loc: { start: 480, end: 482 },
            },
            loc: { start: 480, end: 483 },
          },
          directives: [],
          loc: { start: 476, end: 483 },
        },
      ],
      loc: { start: 459, end: 485 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 498, end: 503 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'pet', loc: { start: 508, end: 511 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 512, end: 514 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 516, end: 518 },
                  },
                  loc: { start: 516, end: 518 },
                },
                loc: { start: 516, end: 519 },
              },
              directives: [],
              loc: { start: 512, end: 519 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetResult',
                loc: { start: 522, end: 531 },
              },
              loc: { start: 522, end: 531 },
            },
            loc: { start: 522, end: 532 },
          },
          directives: [],
          loc: { start: 508, end: 532 },
        },
      ],
      loc: { start: 486, end: 534 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 548, end: 556 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'addPet',
            loc: { start: 561, end: 567 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 568, end: 570 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 572, end: 574 },
                  },
                  loc: { start: 572, end: 574 },
                },
                loc: { start: 572, end: 575 },
              },
              directives: [],
              loc: { start: 568, end: 575 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pet',
                loc: { start: 578, end: 581 },
              },
              loc: { start: 578, end: 581 },
            },
            loc: { start: 578, end: 582 },
          },
          directives: [],
          loc: { start: 561, end: 582 },
        },
      ],
      loc: { start: 536, end: 584 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      name: { kind: 'Name', value: 'Pet', loc: { start: 596, end: 599 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 604, end: 606 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 608, end: 610 },
              },
              loc: { start: 608, end: 610 },
            },
            loc: { start: 608, end: 611 },
          },
          directives: [],
          loc: { start: 604, end: 611 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 614, end: 618 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetCode',
                loc: { start: 620, end: 627 },
              },
              loc: { start: 620, end: 627 },
            },
            loc: { start: 620, end: 628 },
          },
          directives: [],
          loc: { start: 614, end: 628 },
        },
      ],
      loc: { start: 586, end: 630 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Cat', loc: { start: 637, end: 640 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Pet', loc: { start: 652, end: 655 } },
          loc: { start: 652, end: 655 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 660, end: 662 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 664, end: 666 },
              },
              loc: { start: 664, end: 666 },
            },
            loc: { start: 664, end: 667 },
          },
          directives: [],
          loc: { start: 660, end: 667 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 670, end: 674 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetCode',
                loc: { start: 676, end: 683 },
              },
              loc: { start: 676, end: 683 },
            },
            loc: { start: 676, end: 684 },
          },
          directives: [],
          loc: { start: 670, end: 684 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'scratchy',
            loc: { start: 687, end: 695 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 697, end: 704 },
              },
              loc: { start: 697, end: 704 },
            },
            loc: { start: 697, end: 705 },
          },
          directives: [],
          loc: { start: 687, end: 705 },
        },
      ],
      loc: { start: 632, end: 707 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Dog', loc: { start: 714, end: 717 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Pet', loc: { start: 729, end: 732 } },
          loc: { start: 729, end: 732 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 737, end: 739 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 741, end: 743 },
              },
              loc: { start: 741, end: 743 },
            },
            loc: { start: 741, end: 744 },
          },
          directives: [],
          loc: { start: 737, end: 744 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 747, end: 751 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'PetCode',
                loc: { start: 753, end: 760 },
              },
              loc: { start: 753, end: 760 },
            },
            loc: { start: 753, end: 761 },
          },
          directives: [],
          loc: { start: 747, end: 761 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'barky', loc: { start: 764, end: 769 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 771, end: 778 },
              },
              loc: { start: 771, end: 778 },
            },
            loc: { start: 771, end: 779 },
          },
          directives: [],
          loc: { start: 764, end: 779 },
        },
      ],
      loc: { start: 709, end: 781 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetOk', loc: { start: 788, end: 793 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 798, end: 804 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Pet', loc: { start: 806, end: 809 } },
            loc: { start: 806, end: 809 },
          },
          directives: [],
          loc: { start: 798, end: 809 },
        },
      ],
      loc: { start: 783, end: 811 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'PetError', loc: { start: 818, end: 826 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Error', loc: { start: 838, end: 843 } },
          loc: { start: 838, end: 843 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'error', loc: { start: 848, end: 853 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ErrorType',
                loc: { start: 855, end: 864 },
              },
              loc: { start: 855, end: 864 },
            },
            loc: { start: 855, end: 865 },
          },
          directives: [],
          loc: { start: 848, end: 865 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'code', loc: { start: 868, end: 872 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 874, end: 880 },
              },
              loc: { start: 874, end: 880 },
            },
            loc: { start: 874, end: 881 },
          },
          directives: [],
          loc: { start: 868, end: 881 },
        },
      ],
      loc: { start: 813, end: 883 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: { kind: 'Name', value: 'PetResult', loc: { start: 891, end: 900 } },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'PetOk', loc: { start: 903, end: 908 } },
          loc: { start: 903, end: 908 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'PetError',
            loc: { start: 911, end: 919 },
          },
          loc: { start: 911, end: 919 },
        },
      ],
      loc: { start: 885, end: 919 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'PetCode', loc: { start: 928, end: 935 } },
      directives: [],
      loc: { start: 921, end: 935 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 948, end: 953 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicById',
            loc: { start: 958, end: 967 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 968, end: 970 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 972, end: 974 },
                  },
                  loc: { start: 972, end: 974 },
                },
                loc: { start: 972, end: 975 },
              },
              directives: [],
              loc: { start: 968, end: 975 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicByIdPayload',
                loc: { start: 978, end: 994 },
              },
              loc: { start: 978, end: 994 },
            },
            loc: { start: 978, end: 995 },
          },
          directives: [],
          loc: { start: 958, end: 995 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicsCreatedByUser',
            loc: { start: 998, end: 1017 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1018, end: 1023 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicsCreatedByUserInput',
                    loc: { start: 1025, end: 1049 },
                  },
                  loc: { start: 1025, end: 1049 },
                },
                loc: { start: 1025, end: 1050 },
              },
              directives: [],
              loc: { start: 1018, end: 1050 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicsCreatedByUserPayload',
                loc: { start: 1053, end: 1079 },
              },
              loc: { start: 1053, end: 1079 },
            },
            loc: { start: 1053, end: 1080 },
          },
          directives: [],
          loc: { start: 998, end: 1080 },
        },
      ],
      loc: { start: 936, end: 1082 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1096, end: 1104 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicCreate',
            loc: { start: 1109, end: 1120 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1121, end: 1126 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicCreateInput',
                    loc: { start: 1128, end: 1144 },
                  },
                  loc: { start: 1128, end: 1144 },
                },
                loc: { start: 1128, end: 1145 },
              },
              directives: [],
              loc: { start: 1121, end: 1145 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicCreatePayload',
                loc: { start: 1148, end: 1166 },
              },
              loc: { start: 1148, end: 1166 },
            },
            loc: { start: 1148, end: 1167 },
          },
          directives: [],
          loc: { start: 1109, end: 1167 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'topicEdit',
            loc: { start: 1170, end: 1179 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1180, end: 1185 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TopicEditInput',
                    loc: { start: 1187, end: 1201 },
                  },
                  loc: { start: 1187, end: 1201 },
                },
                loc: { start: 1187, end: 1202 },
              },
              directives: [],
              loc: { start: 1180, end: 1202 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TopicEditPayload',
                loc: { start: 1205, end: 1221 },
              },
              loc: { start: 1205, end: 1221 },
            },
            loc: { start: 1205, end: 1222 },
          },
          directives: [],
          loc: { start: 1170, end: 1222 },
        },
      ],
      loc: { start: 1084, end: 1224 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Topic', loc: { start: 1231, end: 1236 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1241, end: 1243 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1245, end: 1247 },
              },
              loc: { start: 1245, end: 1247 },
            },
            loc: { start: 1245, end: 1248 },
          },
          directives: [],
          loc: { start: 1241, end: 1248 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1251, end: 1255 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1257, end: 1263 },
              },
              loc: { start: 1257, end: 1263 },
            },
            loc: { start: 1257, end: 1264 },
          },
          directives: [],
          loc: { start: 1251, end: 1264 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1267, end: 1270 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1272, end: 1278 },
            },
            loc: { start: 1272, end: 1278 },
          },
          directives: [],
          loc: { start: 1267, end: 1278 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'creator',
            loc: { start: 1281, end: 1288 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1290, end: 1294 },
              },
              loc: { start: 1290, end: 1294 },
            },
            loc: { start: 1290, end: 1295 },
          },
          directives: [],
          loc: { start: 1281, end: 1295 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1298, end: 1307 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1309, end: 1317 },
              },
              loc: { start: 1309, end: 1317 },
            },
            loc: { start: 1309, end: 1318 },
          },
          directives: [],
          loc: { start: 1298, end: 1318 },
        },
      ],
      loc: { start: 1226, end: 1320 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdResult',
        loc: { start: 1327, end: 1342 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1347, end: 1353 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Topic',
              loc: { start: 1355, end: 1360 },
            },
            loc: { start: 1355, end: 1360 },
          },
          directives: [],
          loc: { start: 1347, end: 1360 },
        },
      ],
      loc: { start: 1322, end: 1362 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicByIdPayload',
        loc: { start: 1370, end: 1386 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicByIdResult',
            loc: { start: 1389, end: 1404 },
          },
          loc: { start: 1389, end: 1404 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1407, end: 1420 },
          },
          loc: { start: 1407, end: 1420 },
        },
      ],
      loc: { start: 1364, end: 1420 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserInput',
        loc: { start: 1428, end: 1452 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 1457, end: 1463 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1465, end: 1467 },
              },
              loc: { start: 1465, end: 1467 },
            },
            loc: { start: 1465, end: 1468 },
          },
          directives: [],
          loc: { start: 1457, end: 1468 },
        },
      ],
      loc: { start: 1422, end: 1470 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserResult',
        loc: { start: 1477, end: 1502 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1507, end: 1513 },
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
                    loc: { start: 1516, end: 1521 },
                  },
                  loc: { start: 1516, end: 1521 },
                },
                loc: { start: 1516, end: 1522 },
              },
              loc: { start: 1515, end: 1523 },
            },
            loc: { start: 1515, end: 1524 },
          },
          directives: [],
          loc: { start: 1507, end: 1524 },
        },
      ],
      loc: { start: 1472, end: 1526 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicsCreatedByUserPayload',
        loc: { start: 1534, end: 1560 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicsCreatedByUserResult',
            loc: { start: 1563, end: 1588 },
          },
          loc: { start: 1563, end: 1588 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1591, end: 1604 },
          },
          loc: { start: 1591, end: 1604 },
        },
      ],
      loc: { start: 1528, end: 1604 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateInput',
        loc: { start: 1612, end: 1628 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1633, end: 1637 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1639, end: 1645 },
              },
              loc: { start: 1639, end: 1645 },
            },
            loc: { start: 1639, end: 1646 },
          },
          directives: [],
          loc: { start: 1633, end: 1646 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1649, end: 1652 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1654, end: 1660 },
            },
            loc: { start: 1654, end: 1660 },
          },
          directives: [],
          loc: { start: 1649, end: 1660 },
        },
      ],
      loc: { start: 1606, end: 1662 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreateResult',
        loc: { start: 1669, end: 1686 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1691, end: 1697 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1699, end: 1704 },
              },
              loc: { start: 1699, end: 1704 },
            },
            loc: { start: 1699, end: 1705 },
          },
          directives: [],
          loc: { start: 1691, end: 1705 },
        },
      ],
      loc: { start: 1664, end: 1707 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicCreatePayload',
        loc: { start: 1715, end: 1733 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicCreateResult',
            loc: { start: 1736, end: 1753 },
          },
          loc: { start: 1736, end: 1753 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1756, end: 1769 },
          },
          loc: { start: 1756, end: 1769 },
        },
      ],
      loc: { start: 1709, end: 1769 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditInput',
        loc: { start: 1777, end: 1791 },
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1796, end: 1798 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1800, end: 1802 },
              },
              loc: { start: 1800, end: 1802 },
            },
            loc: { start: 1800, end: 1803 },
          },
          directives: [],
          loc: { start: 1796, end: 1803 },
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1806, end: 1810 },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1812, end: 1818 },
              },
              loc: { start: 1812, end: 1818 },
            },
            loc: { start: 1812, end: 1819 },
          },
          directives: [],
          loc: { start: 1806, end: 1819 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1822, end: 1825 } },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1827, end: 1833 },
            },
            loc: { start: 1827, end: 1833 },
          },
          directives: [],
          loc: { start: 1822, end: 1833 },
        },
      ],
      loc: { start: 1771, end: 1835 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditResult',
        loc: { start: 1842, end: 1857 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 1862, end: 1868 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Topic',
                loc: { start: 1870, end: 1875 },
              },
              loc: { start: 1870, end: 1875 },
            },
            loc: { start: 1870, end: 1876 },
          },
          directives: [],
          loc: { start: 1862, end: 1876 },
        },
      ],
      loc: { start: 1837, end: 1878 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TopicEditPayload',
        loc: { start: 1886, end: 1902 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'TopicEditResult',
            loc: { start: 1905, end: 1920 },
          },
          loc: { start: 1905, end: 1920 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 1923, end: 1936 },
          },
          loc: { start: 1923, end: 1936 },
        },
      ],
      loc: { start: 1880, end: 1936 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 1949, end: 1961 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1966, end: 1980 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Profile',
                loc: { start: 1982, end: 1989 },
              },
              loc: { start: 1982, end: 1989 },
            },
            loc: { start: 1982, end: 1990 },
          },
          directives: [],
          loc: { start: 1966, end: 1990 },
        },
      ],
      loc: { start: 1937, end: 1992 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Profile', loc: { start: 1999, end: 2006 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2011, end: 2013 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2015, end: 2017 },
              },
              loc: { start: 2015, end: 2017 },
            },
            loc: { start: 2015, end: 2018 },
          },
          directives: [],
          loc: { start: 2011, end: 2018 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
            loc: { start: 2021, end: 2025 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 2027, end: 2031 },
              },
              loc: { start: 2027, end: 2031 },
            },
            loc: { start: 2027, end: 2032 },
          },
          directives: [],
          loc: { start: 2021, end: 2032 },
        },
      ],
      loc: { start: 1994, end: 2034 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2047, end: 2052 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 2057, end: 2059 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2061, end: 2072 },
              },
              loc: { start: 2061, end: 2072 },
            },
            loc: { start: 2061, end: 2073 },
          },
          directives: [],
          loc: { start: 2057, end: 2073 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userByAccountName',
            loc: { start: 2076, end: 2093 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'accountName',
                loc: { start: 2094, end: 2105 },
              },
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
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserPayload',
                loc: { start: 2117, end: 2128 },
              },
              loc: { start: 2117, end: 2128 },
            },
            loc: { start: 2117, end: 2129 },
          },
          directives: [],
          loc: { start: 2076, end: 2129 },
        },
      ],
      loc: { start: 2035, end: 2131 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 2138, end: 2142 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2147, end: 2149 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 2151, end: 2153 },
              },
              loc: { start: 2151, end: 2153 },
            },
            loc: { start: 2151, end: 2154 },
          },
          directives: [],
          loc: { start: 2147, end: 2154 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 2157, end: 2161 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2163, end: 2169 },
            },
            loc: { start: 2163, end: 2169 },
          },
          directives: [],
          loc: { start: 2157, end: 2169 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountName',
            loc: { start: 2172, end: 2183 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 2185, end: 2191 },
              },
              loc: { start: 2185, end: 2191 },
            },
            loc: { start: 2185, end: 2192 },
          },
          directives: [],
          loc: { start: 2172, end: 2192 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountWebsite',
            loc: { start: 2195, end: 2209 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2211, end: 2217 },
            },
            loc: { start: 2211, end: 2217 },
          },
          directives: [],
          loc: { start: 2195, end: 2217 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountTwitter',
            loc: { start: 2220, end: 2234 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2236, end: 2242 },
            },
            loc: { start: 2236, end: 2242 },
          },
          directives: [],
          loc: { start: 2220, end: 2242 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountGitHub',
            loc: { start: 2245, end: 2258 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2260, end: 2266 },
            },
            loc: { start: 2260, end: 2266 },
          },
          directives: [],
          loc: { start: 2245, end: 2266 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'accountLinkedIn',
            loc: { start: 2269, end: 2284 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2286, end: 2292 },
            },
            loc: { start: 2286, end: 2292 },
          },
          directives: [],
          loc: { start: 2269, end: 2292 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 2295, end: 2301 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 2303, end: 2309 },
            },
            loc: { start: 2303, end: 2309 },
          },
          directives: [],
          loc: { start: 2295, end: 2309 },
        },
      ],
      loc: { start: 2133, end: 2311 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserResult',
        loc: { start: 2318, end: 2328 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'result',
            loc: { start: 2333, end: 2339 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 2341, end: 2345 },
            },
            loc: { start: 2341, end: 2345 },
          },
          directives: [],
          loc: { start: 2333, end: 2345 },
        },
      ],
      loc: { start: 2313, end: 2347 },
    },
    {
      kind: 'UnionTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserPayload',
        loc: { start: 2355, end: 2366 },
      },
      directives: [],
      types: [
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'UserResult',
            loc: { start: 2369, end: 2379 },
          },
          loc: { start: 2369, end: 2379 },
        },
        {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'StandardError',
            loc: { start: 2382, end: 2395 },
          },
          loc: { start: 2382, end: 2395 },
        },
      ],
      loc: { start: 2349, end: 2395 },
    },
  ],
  loc: { start: 0, end: 2396 },
} as unknown as DocumentNode;
