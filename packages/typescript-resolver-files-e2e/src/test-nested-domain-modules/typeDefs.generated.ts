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
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'School', loc: { start: 38, end: 44 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'courses', loc: { start: 49, end: 56 } },
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
                    loc: { start: 59, end: 71 },
                  },
                  loc: { start: 59, end: 71 },
                },
                loc: { start: 59, end: 72 },
              },
              loc: { start: 58, end: 73 },
            },
            loc: { start: 58, end: 74 },
          },
          directives: [],
          loc: { start: 49, end: 74 },
        },
      ],
      loc: { start: 26, end: 76 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SchoolCourse',
        loc: { start: 83, end: 95 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 100, end: 102 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 104, end: 106 },
              },
              loc: { start: 104, end: 106 },
            },
            loc: { start: 104, end: 107 },
          },
          directives: [],
          loc: { start: 100, end: 107 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 110, end: 114 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 116, end: 122 },
              },
              loc: { start: 116, end: 122 },
            },
            loc: { start: 116, end: 123 },
          },
          directives: [],
          loc: { start: 110, end: 123 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'teacher',
            loc: { start: 126, end: 133 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Teacher',
                loc: { start: 135, end: 142 },
              },
              loc: { start: 135, end: 142 },
            },
            loc: { start: 135, end: 143 },
          },
          directives: [],
          loc: { start: 126, end: 143 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'students',
            loc: { start: 146, end: 154 },
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
                    loc: { start: 157, end: 164 },
                  },
                  loc: { start: 157, end: 164 },
                },
                loc: { start: 157, end: 165 },
              },
              loc: { start: 156, end: 166 },
            },
            loc: { start: 156, end: 167 },
          },
          directives: [],
          loc: { start: 146, end: 167 },
        },
      ],
      loc: { start: 78, end: 169 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'School', loc: { start: 182, end: 188 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'demographics',
            loc: { start: 193, end: 205 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SchoolDemographics',
              loc: { start: 207, end: 225 },
            },
            loc: { start: 207, end: 225 },
          },
          directives: [],
          loc: { start: 193, end: 225 },
        },
      ],
      loc: { start: 170, end: 227 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'SchoolDemographics',
        loc: { start: 234, end: 252 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 257, end: 259 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 261, end: 263 },
              },
              loc: { start: 261, end: 263 },
            },
            loc: { start: 261, end: 264 },
          },
          directives: [],
          loc: { start: 257, end: 264 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'schoolId',
            loc: { start: 267, end: 275 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 277, end: 279 },
              },
              loc: { start: 277, end: 279 },
            },
            loc: { start: 277, end: 280 },
          },
          directives: [],
          loc: { start: 267, end: 280 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'studentCount',
            loc: { start: 283, end: 295 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 297, end: 300 },
              },
              loc: { start: 297, end: 300 },
            },
            loc: { start: 297, end: 301 },
          },
          directives: [],
          loc: { start: 283, end: 301 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'teacherCount',
            loc: { start: 304, end: 316 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 318, end: 321 },
              },
              loc: { start: 318, end: 321 },
            },
            loc: { start: 318, end: 322 },
          },
          directives: [],
          loc: { start: 304, end: 322 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageStudentAge',
            loc: { start: 325, end: 342 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 344, end: 347 } },
            loc: { start: 344, end: 347 },
          },
          directives: [],
          loc: { start: 325, end: 347 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageTeacherAge',
            loc: { start: 350, end: 367 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 369, end: 372 } },
            loc: { start: 369, end: 372 },
          },
          directives: [],
          loc: { start: 350, end: 372 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageStudentGPA',
            loc: { start: 375, end: 392 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Float',
              loc: { start: 394, end: 399 },
            },
            loc: { start: 394, end: 399 },
          },
          directives: [],
          loc: { start: 375, end: 399 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'averageTeacherExperience',
            loc: { start: 402, end: 426 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 428, end: 431 } },
            loc: { start: 428, end: 431 },
          },
          directives: [],
          loc: { start: 402, end: 431 },
        },
      ],
      loc: { start: 229, end: 433 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'School', loc: { start: 439, end: 445 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 450, end: 452 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 454, end: 456 },
              },
              loc: { start: 454, end: 456 },
            },
            loc: { start: 454, end: 457 },
          },
          directives: [],
          loc: { start: 450, end: 457 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 460, end: 464 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 466, end: 472 },
              },
              loc: { start: 466, end: 472 },
            },
            loc: { start: 466, end: 473 },
          },
          directives: [],
          loc: { start: 460, end: 473 },
        },
      ],
      loc: { start: 434, end: 475 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 489, end: 494 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'school',
            loc: { start: 499, end: 505 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 506, end: 508 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 510, end: 512 },
                  },
                  loc: { start: 510, end: 512 },
                },
                loc: { start: 510, end: 513 },
              },
              directives: [],
              loc: { start: 506, end: 513 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'School',
              loc: { start: 516, end: 522 },
            },
            loc: { start: 516, end: 522 },
          },
          directives: [],
          loc: { start: 499, end: 522 },
        },
      ],
      loc: { start: 477, end: 524 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'StudentProfile',
        loc: { start: 537, end: 551 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 556, end: 562 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'StudentAvatar',
              loc: { start: 564, end: 577 },
            },
            loc: { start: 564, end: 577 },
          },
          directives: [],
          loc: { start: 556, end: 577 },
        },
      ],
      loc: { start: 525, end: 579 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StudentAvatar',
        loc: { start: 586, end: 599 },
      },
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
          name: {
            kind: 'Name',
            value: 'hairstyle',
            loc: { start: 614, end: 623 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 625, end: 631 },
              },
              loc: { start: 625, end: 631 },
            },
            loc: { start: 625, end: 632 },
          },
          directives: [],
          loc: { start: 614, end: 632 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hairColor',
            loc: { start: 635, end: 644 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 646, end: 652 },
              },
              loc: { start: 646, end: 652 },
            },
            loc: { start: 646, end: 653 },
          },
          directives: [],
          loc: { start: 635, end: 653 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'skinColor',
            loc: { start: 656, end: 665 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 667, end: 673 },
              },
              loc: { start: 667, end: 673 },
            },
            loc: { start: 667, end: 674 },
          },
          directives: [],
          loc: { start: 656, end: 674 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'eyeColor',
            loc: { start: 677, end: 685 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 687, end: 693 },
              },
              loc: { start: 687, end: 693 },
            },
            loc: { start: 687, end: 694 },
          },
          directives: [],
          loc: { start: 677, end: 694 },
        },
      ],
      loc: { start: 581, end: 696 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Student', loc: { start: 709, end: 716 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'guardians',
            loc: { start: 721, end: 730 },
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
                    loc: { start: 733, end: 748 },
                  },
                  loc: { start: 733, end: 748 },
                },
                loc: { start: 733, end: 749 },
              },
              loc: { start: 732, end: 750 },
            },
            loc: { start: 732, end: 751 },
          },
          directives: [],
          loc: { start: 721, end: 751 },
        },
      ],
      loc: { start: 697, end: 753 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StudentGuardian',
        loc: { start: 760, end: 775 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 780, end: 782 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 784, end: 786 },
              },
              loc: { start: 784, end: 786 },
            },
            loc: { start: 784, end: 787 },
          },
          directives: [],
          loc: { start: 780, end: 787 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'firstName',
            loc: { start: 790, end: 799 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 801, end: 807 },
              },
              loc: { start: 801, end: 807 },
            },
            loc: { start: 801, end: 808 },
          },
          directives: [],
          loc: { start: 790, end: 808 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'lastName',
            loc: { start: 811, end: 819 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 821, end: 827 },
              },
              loc: { start: 821, end: 827 },
            },
            loc: { start: 821, end: 828 },
          },
          directives: [],
          loc: { start: 811, end: 828 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 831, end: 836 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 838, end: 844 },
              },
              loc: { start: 838, end: 844 },
            },
            loc: { start: 838, end: 845 },
          },
          directives: [],
          loc: { start: 831, end: 845 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'phoneNumber',
            loc: { start: 848, end: 859 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 861, end: 867 },
            },
            loc: { start: 861, end: 867 },
          },
          directives: [],
          loc: { start: 848, end: 867 },
        },
      ],
      loc: { start: 755, end: 869 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Student', loc: { start: 882, end: 889 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profile',
            loc: { start: 894, end: 901 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'StudentProfile',
              loc: { start: 903, end: 917 },
            },
            loc: { start: 903, end: 917 },
          },
          directives: [],
          loc: { start: 894, end: 917 },
        },
      ],
      loc: { start: 870, end: 919 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'StudentProfile',
        loc: { start: 926, end: 940 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 945, end: 947 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 949, end: 951 },
              },
              loc: { start: 949, end: 951 },
            },
            loc: { start: 949, end: 952 },
          },
          directives: [],
          loc: { start: 945, end: 952 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'firstName',
            loc: { start: 955, end: 964 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 966, end: 972 },
              },
              loc: { start: 966, end: 972 },
            },
            loc: { start: 966, end: 973 },
          },
          directives: [],
          loc: { start: 955, end: 973 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'lastName',
            loc: { start: 976, end: 984 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 986, end: 992 },
              },
              loc: { start: 986, end: 992 },
            },
            loc: { start: 986, end: 993 },
          },
          directives: [],
          loc: { start: 976, end: 993 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'email',
            loc: { start: 996, end: 1001 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1003, end: 1009 },
              },
              loc: { start: 1003, end: 1009 },
            },
            loc: { start: 1003, end: 1010 },
          },
          directives: [],
          loc: { start: 996, end: 1010 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'phoneNumber',
            loc: { start: 1013, end: 1024 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1026, end: 1032 },
            },
            loc: { start: 1026, end: 1032 },
          },
          directives: [],
          loc: { start: 1013, end: 1032 },
        },
      ],
      loc: { start: 921, end: 1034 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Student', loc: { start: 1040, end: 1047 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1052, end: 1054 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1056, end: 1058 },
              },
              loc: { start: 1056, end: 1058 },
            },
            loc: { start: 1056, end: 1059 },
          },
          directives: [],
          loc: { start: 1052, end: 1059 },
        },
      ],
      loc: { start: 1035, end: 1061 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1075, end: 1080 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'student',
            loc: { start: 1085, end: 1092 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1093, end: 1095 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1097, end: 1099 },
                  },
                  loc: { start: 1097, end: 1099 },
                },
                loc: { start: 1097, end: 1100 },
              },
              directives: [],
              loc: { start: 1093, end: 1100 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Student',
              loc: { start: 1103, end: 1110 },
            },
            loc: { start: 1103, end: 1110 },
          },
          directives: [],
          loc: { start: 1085, end: 1110 },
        },
      ],
      loc: { start: 1063, end: 1112 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'TeacherProfile',
        loc: { start: 1125, end: 1139 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'avatar',
            loc: { start: 1144, end: 1150 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TeacherAvatar',
              loc: { start: 1152, end: 1165 },
            },
            loc: { start: 1152, end: 1165 },
          },
          directives: [],
          loc: { start: 1144, end: 1165 },
        },
      ],
      loc: { start: 1113, end: 1167 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TeacherAvatar',
        loc: { start: 1174, end: 1187 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1192, end: 1194 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1196, end: 1198 },
              },
              loc: { start: 1196, end: 1198 },
            },
            loc: { start: 1196, end: 1199 },
          },
          directives: [],
          loc: { start: 1192, end: 1199 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 1202, end: 1205 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1207, end: 1213 },
              },
              loc: { start: 1207, end: 1213 },
            },
            loc: { start: 1207, end: 1214 },
          },
          directives: [],
          loc: { start: 1202, end: 1214 },
        },
      ],
      loc: { start: 1169, end: 1216 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Teacher', loc: { start: 1229, end: 1236 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'profile',
            loc: { start: 1241, end: 1248 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TeacherProfile',
              loc: { start: 1250, end: 1264 },
            },
            loc: { start: 1250, end: 1264 },
          },
          directives: [],
          loc: { start: 1241, end: 1264 },
        },
      ],
      loc: { start: 1217, end: 1266 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TeacherProfile',
        loc: { start: 1273, end: 1287 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1292, end: 1294 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1296, end: 1298 },
              },
              loc: { start: 1296, end: 1298 },
            },
            loc: { start: 1296, end: 1299 },
          },
          directives: [],
          loc: { start: 1292, end: 1299 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'firstName',
            loc: { start: 1302, end: 1311 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1313, end: 1319 },
              },
              loc: { start: 1313, end: 1319 },
            },
            loc: { start: 1313, end: 1320 },
          },
          directives: [],
          loc: { start: 1302, end: 1320 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'lastName',
            loc: { start: 1323, end: 1331 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1333, end: 1339 },
              },
              loc: { start: 1333, end: 1339 },
            },
            loc: { start: 1333, end: 1340 },
          },
          directives: [],
          loc: { start: 1323, end: 1340 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'email',
            loc: { start: 1343, end: 1348 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1350, end: 1356 },
              },
              loc: { start: 1350, end: 1356 },
            },
            loc: { start: 1350, end: 1357 },
          },
          directives: [],
          loc: { start: 1343, end: 1357 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'phoneNumber',
            loc: { start: 1360, end: 1371 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1373, end: 1379 },
            },
            loc: { start: 1373, end: 1379 },
          },
          directives: [],
          loc: { start: 1360, end: 1379 },
        },
      ],
      loc: { start: 1268, end: 1381 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Teacher', loc: { start: 1387, end: 1394 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1399, end: 1401 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1403, end: 1405 },
              },
              loc: { start: 1403, end: 1405 },
            },
            loc: { start: 1403, end: 1406 },
          },
          directives: [],
          loc: { start: 1399, end: 1406 },
        },
      ],
      loc: { start: 1382, end: 1408 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1422, end: 1427 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'teacher',
            loc: { start: 1432, end: 1439 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1440, end: 1442 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1444, end: 1446 },
                  },
                  loc: { start: 1444, end: 1446 },
                },
                loc: { start: 1444, end: 1447 },
              },
              directives: [],
              loc: { start: 1440, end: 1447 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Teacher',
              loc: { start: 1450, end: 1457 },
            },
            loc: { start: 1450, end: 1457 },
          },
          directives: [],
          loc: { start: 1432, end: 1457 },
        },
      ],
      loc: { start: 1410, end: 1459 },
    },
  ],
  loc: { start: 0, end: 1460 },
} as unknown as DocumentNode;
