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
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 57, end: 65 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createSchoolCourse',
            loc: { start: 70, end: 88 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'SchoolCourse',
                loc: { start: 90, end: 102 },
              },
              loc: { start: 90, end: 102 },
            },
            loc: { start: 90, end: 103 },
          },
          directives: [],
          loc: { start: 70, end: 103 },
        },
      ],
      loc: { start: 45, end: 105 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'School', loc: { start: 119, end: 125 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'courses',
            loc: { start: 130, end: 137 },
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
                    value: 'SchoolCourse',
                    loc: { start: 140, end: 152 },
                  },
                  loc: { start: 140, end: 152 },
                },
                loc: { start: 140, end: 153 },
              },
              loc: { start: 139, end: 154 },
            },
            loc: { start: 139, end: 155 },
          },
          directives: [],
          loc: { start: 130, end: 155 },
        },
      ],
      loc: { start: 107, end: 157 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SchoolCourse',
        loc: { start: 164, end: 176 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 181, end: 183 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 185, end: 187 },
              },
              loc: { start: 185, end: 187 },
            },
            loc: { start: 185, end: 188 },
          },
          directives: [],
          loc: { start: 181, end: 188 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 191, end: 195 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 197, end: 203 },
              },
              loc: { start: 197, end: 203 },
            },
            loc: { start: 197, end: 204 },
          },
          directives: [],
          loc: { start: 191, end: 204 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'teacher',
            loc: { start: 207, end: 214 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Teacher',
                loc: { start: 216, end: 223 },
              },
              loc: { start: 216, end: 223 },
            },
            loc: { start: 216, end: 224 },
          },
          directives: [],
          loc: { start: 207, end: 224 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'students',
            loc: { start: 227, end: 235 },
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
                    value: 'Student',
                    loc: { start: 238, end: 245 },
                  },
                  loc: { start: 238, end: 245 },
                },
                loc: { start: 238, end: 246 },
              },
              loc: { start: 237, end: 247 },
            },
            loc: { start: 237, end: 248 },
          },
          directives: [],
          loc: { start: 227, end: 248 },
        },
      ],
      loc: { start: 159, end: 250 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'School', loc: { start: 263, end: 269 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'demographics',
            loc: { start: 274, end: 286 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SchoolDemographics',
              loc: { start: 288, end: 306 },
            },
            loc: { start: 288, end: 306 },
          },
          directives: [],
          loc: { start: 274, end: 306 },
        },
      ],
      loc: { start: 251, end: 308 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SchoolDemographics',
        loc: { start: 315, end: 333 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 338, end: 340 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 342, end: 344 },
              },
              loc: { start: 342, end: 344 },
            },
            loc: { start: 342, end: 345 },
          },
          directives: [],
          loc: { start: 338, end: 345 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'schoolId',
            loc: { start: 348, end: 356 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 358, end: 360 },
              },
              loc: { start: 358, end: 360 },
            },
            loc: { start: 358, end: 361 },
          },
          directives: [],
          loc: { start: 348, end: 361 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'studentCount',
            loc: { start: 364, end: 376 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 378, end: 381 },
              },
              loc: { start: 378, end: 381 },
            },
            loc: { start: 378, end: 382 },
          },
          directives: [],
          loc: { start: 364, end: 382 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'teacherCount',
            loc: { start: 385, end: 397 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 399, end: 402 },
              },
              loc: { start: 399, end: 402 },
            },
            loc: { start: 399, end: 403 },
          },
          directives: [],
          loc: { start: 385, end: 403 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageStudentAge',
            loc: { start: 406, end: 423 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 425, end: 428 } },
            loc: { start: 425, end: 428 },
          },
          directives: [],
          loc: { start: 406, end: 428 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageTeacherAge',
            loc: { start: 431, end: 448 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 450, end: 453 } },
            loc: { start: 450, end: 453 },
          },
          directives: [],
          loc: { start: 431, end: 453 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageStudentGPA',
            loc: { start: 456, end: 473 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Float',
              loc: { start: 475, end: 480 },
            },
            loc: { start: 475, end: 480 },
          },
          directives: [],
          loc: { start: 456, end: 480 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageTeacherExperience',
            loc: { start: 483, end: 507 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 509, end: 512 } },
            loc: { start: 509, end: 512 },
          },
          directives: [],
          loc: { start: 483, end: 512 },
        },
      ],
      loc: { start: 310, end: 514 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'School', loc: { start: 520, end: 526 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 531, end: 533 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 535, end: 537 },
              },
              loc: { start: 535, end: 537 },
            },
            loc: { start: 535, end: 538 },
          },
          directives: [],
          loc: { start: 531, end: 538 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 541, end: 545 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 547, end: 553 },
              },
              loc: { start: 547, end: 553 },
            },
            loc: { start: 547, end: 554 },
          },
          directives: [],
          loc: { start: 541, end: 554 },
        },
      ],
      loc: { start: 515, end: 556 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 570, end: 575 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'school',
            loc: { start: 580, end: 586 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 587, end: 589 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 591, end: 593 },
                  },
                  loc: { start: 591, end: 593 },
                },
                loc: { start: 591, end: 594 },
              },
              directives: [],
              loc: { start: 587, end: 594 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'School',
              loc: { start: 597, end: 603 },
            },
            loc: { start: 597, end: 603 },
          },
          directives: [],
          loc: { start: 580, end: 603 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'schools',
            loc: { start: 606, end: 613 },
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
                    value: 'School',
                    loc: { start: 616, end: 622 },
                  },
                  loc: { start: 616, end: 622 },
                },
                loc: { start: 616, end: 623 },
              },
              loc: { start: 615, end: 624 },
            },
            loc: { start: 615, end: 625 },
          },
          directives: [],
          loc: { start: 606, end: 625 },
        },
      ],
      loc: { start: 558, end: 627 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'StudentProfile',
        loc: { start: 640, end: 654 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 659, end: 665 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'StudentAvatar',
              loc: { start: 667, end: 680 },
            },
            loc: { start: 667, end: 680 },
          },
          directives: [],
          loc: { start: 659, end: 680 },
        },
      ],
      loc: { start: 628, end: 682 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StudentAvatar',
        loc: { start: 689, end: 702 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 707, end: 709 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 711, end: 713 },
              },
              loc: { start: 711, end: 713 },
            },
            loc: { start: 711, end: 714 },
          },
          directives: [],
          loc: { start: 707, end: 714 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hairstyle',
            loc: { start: 717, end: 726 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 728, end: 734 },
              },
              loc: { start: 728, end: 734 },
            },
            loc: { start: 728, end: 735 },
          },
          directives: [],
          loc: { start: 717, end: 735 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hairColor',
            loc: { start: 738, end: 747 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 749, end: 755 },
              },
              loc: { start: 749, end: 755 },
            },
            loc: { start: 749, end: 756 },
          },
          directives: [],
          loc: { start: 738, end: 756 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'skinColor',
            loc: { start: 759, end: 768 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 770, end: 776 },
              },
              loc: { start: 770, end: 776 },
            },
            loc: { start: 770, end: 777 },
          },
          directives: [],
          loc: { start: 759, end: 777 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'eyeColor',
            loc: { start: 780, end: 788 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 790, end: 796 },
              },
              loc: { start: 790, end: 796 },
            },
            loc: { start: 790, end: 797 },
          },
          directives: [],
          loc: { start: 780, end: 797 },
        },
      ],
      loc: { start: 684, end: 799 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Student', loc: { start: 812, end: 819 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'guardians',
            loc: { start: 824, end: 833 },
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
                    value: 'StudentGuardian',
                    loc: { start: 836, end: 851 },
                  },
                  loc: { start: 836, end: 851 },
                },
                loc: { start: 836, end: 852 },
              },
              loc: { start: 835, end: 853 },
            },
            loc: { start: 835, end: 854 },
          },
          directives: [],
          loc: { start: 824, end: 854 },
        },
      ],
      loc: { start: 800, end: 856 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StudentGuardian',
        loc: { start: 863, end: 878 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 883, end: 885 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 887, end: 889 },
              },
              loc: { start: 887, end: 889 },
            },
            loc: { start: 887, end: 890 },
          },
          directives: [],
          loc: { start: 883, end: 890 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'firstName',
            loc: { start: 893, end: 902 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 904, end: 910 },
              },
              loc: { start: 904, end: 910 },
            },
            loc: { start: 904, end: 911 },
          },
          directives: [],
          loc: { start: 893, end: 911 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'lastName',
            loc: { start: 914, end: 922 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 924, end: 930 },
              },
              loc: { start: 924, end: 930 },
            },
            loc: { start: 924, end: 931 },
          },
          directives: [],
          loc: { start: 914, end: 931 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 934, end: 939 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 941, end: 947 },
              },
              loc: { start: 941, end: 947 },
            },
            loc: { start: 941, end: 948 },
          },
          directives: [],
          loc: { start: 934, end: 948 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'phoneNumber',
            loc: { start: 951, end: 962 },
          },
          arguments: [],
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
          loc: { start: 951, end: 970 },
        },
      ],
      loc: { start: 858, end: 972 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Subscription',
        loc: { start: 985, end: 997 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profileChanges',
            loc: { start: 1002, end: 1016 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'StudentProfile',
                loc: { start: 1018, end: 1032 },
              },
              loc: { start: 1018, end: 1032 },
            },
            loc: { start: 1018, end: 1033 },
          },
          directives: [],
          loc: { start: 1002, end: 1033 },
        },
      ],
      loc: { start: 973, end: 1035 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Student', loc: { start: 1049, end: 1056 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profile',
            loc: { start: 1061, end: 1068 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'StudentProfile',
              loc: { start: 1070, end: 1084 },
            },
            loc: { start: 1070, end: 1084 },
          },
          directives: [],
          loc: { start: 1061, end: 1084 },
        },
      ],
      loc: { start: 1037, end: 1086 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StudentProfile',
        loc: { start: 1093, end: 1107 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1112, end: 1114 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1116, end: 1118 },
              },
              loc: { start: 1116, end: 1118 },
            },
            loc: { start: 1116, end: 1119 },
          },
          directives: [],
          loc: { start: 1112, end: 1119 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'firstName',
            loc: { start: 1122, end: 1131 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1133, end: 1139 },
              },
              loc: { start: 1133, end: 1139 },
            },
            loc: { start: 1133, end: 1140 },
          },
          directives: [],
          loc: { start: 1122, end: 1140 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'lastName',
            loc: { start: 1143, end: 1151 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1153, end: 1159 },
              },
              loc: { start: 1153, end: 1159 },
            },
            loc: { start: 1153, end: 1160 },
          },
          directives: [],
          loc: { start: 1143, end: 1160 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'email',
            loc: { start: 1163, end: 1168 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1170, end: 1176 },
              },
              loc: { start: 1170, end: 1176 },
            },
            loc: { start: 1170, end: 1177 },
          },
          directives: [],
          loc: { start: 1163, end: 1177 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'phoneNumber',
            loc: { start: 1180, end: 1191 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1193, end: 1199 },
            },
            loc: { start: 1193, end: 1199 },
          },
          directives: [],
          loc: { start: 1180, end: 1199 },
        },
      ],
      loc: { start: 1088, end: 1201 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Student', loc: { start: 1207, end: 1214 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1219, end: 1221 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1223, end: 1225 },
              },
              loc: { start: 1223, end: 1225 },
            },
            loc: { start: 1223, end: 1226 },
          },
          directives: [],
          loc: { start: 1219, end: 1226 },
        },
      ],
      loc: { start: 1202, end: 1228 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1242, end: 1247 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'student',
            loc: { start: 1252, end: 1259 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1260, end: 1262 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1264, end: 1266 },
                  },
                  loc: { start: 1264, end: 1266 },
                },
                loc: { start: 1264, end: 1267 },
              },
              directives: [],
              loc: { start: 1260, end: 1267 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Student',
              loc: { start: 1270, end: 1277 },
            },
            loc: { start: 1270, end: 1277 },
          },
          directives: [],
          loc: { start: 1252, end: 1277 },
        },
      ],
      loc: { start: 1230, end: 1279 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'TeacherProfile',
        loc: { start: 1292, end: 1306 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1311, end: 1317 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TeacherAvatar',
              loc: { start: 1319, end: 1332 },
            },
            loc: { start: 1319, end: 1332 },
          },
          directives: [],
          loc: { start: 1311, end: 1332 },
        },
      ],
      loc: { start: 1280, end: 1334 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TeacherAvatar',
        loc: { start: 1341, end: 1354 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1359, end: 1361 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1363, end: 1365 },
              },
              loc: { start: 1363, end: 1365 },
            },
            loc: { start: 1363, end: 1366 },
          },
          directives: [],
          loc: { start: 1359, end: 1366 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1369, end: 1372 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1374, end: 1380 },
              },
              loc: { start: 1374, end: 1380 },
            },
            loc: { start: 1374, end: 1381 },
          },
          directives: [],
          loc: { start: 1369, end: 1381 },
        },
      ],
      loc: { start: 1336, end: 1383 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Teacher', loc: { start: 1396, end: 1403 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profile',
            loc: { start: 1408, end: 1415 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TeacherProfile',
              loc: { start: 1417, end: 1431 },
            },
            loc: { start: 1417, end: 1431 },
          },
          directives: [],
          loc: { start: 1408, end: 1431 },
        },
      ],
      loc: { start: 1384, end: 1433 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TeacherProfile',
        loc: { start: 1440, end: 1454 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1459, end: 1461 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1463, end: 1465 },
              },
              loc: { start: 1463, end: 1465 },
            },
            loc: { start: 1463, end: 1466 },
          },
          directives: [],
          loc: { start: 1459, end: 1466 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'firstName',
            loc: { start: 1469, end: 1478 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1480, end: 1486 },
              },
              loc: { start: 1480, end: 1486 },
            },
            loc: { start: 1480, end: 1487 },
          },
          directives: [],
          loc: { start: 1469, end: 1487 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'lastName',
            loc: { start: 1490, end: 1498 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1500, end: 1506 },
              },
              loc: { start: 1500, end: 1506 },
            },
            loc: { start: 1500, end: 1507 },
          },
          directives: [],
          loc: { start: 1490, end: 1507 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'email',
            loc: { start: 1510, end: 1515 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1517, end: 1523 },
              },
              loc: { start: 1517, end: 1523 },
            },
            loc: { start: 1517, end: 1524 },
          },
          directives: [],
          loc: { start: 1510, end: 1524 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'phoneNumber',
            loc: { start: 1527, end: 1538 },
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
          loc: { start: 1527, end: 1546 },
        },
      ],
      loc: { start: 1435, end: 1548 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Teacher', loc: { start: 1554, end: 1561 } },
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
      ],
      loc: { start: 1549, end: 1575 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1589, end: 1594 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'teacher',
            loc: { start: 1599, end: 1606 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1607, end: 1609 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1611, end: 1613 },
                  },
                  loc: { start: 1611, end: 1613 },
                },
                loc: { start: 1611, end: 1614 },
              },
              directives: [],
              loc: { start: 1607, end: 1614 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Teacher',
              loc: { start: 1617, end: 1624 },
            },
            loc: { start: 1617, end: 1624 },
          },
          directives: [],
          loc: { start: 1599, end: 1624 },
        },
      ],
      loc: { start: 1577, end: 1626 },
    },
  ],
  loc: { start: 0, end: 1627 },
} as unknown as DocumentNode;
