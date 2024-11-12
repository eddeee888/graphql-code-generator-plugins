import { Project, SyntaxKind } from 'ts-morph';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

describe('collectTypeMappersFromSourceFile', () => {
  it('mutates the result based on typeMappersSuffix for exports from other modules', () => {
    const project = new Project({
      compilerOptions: {
        paths: {
          '@external/module1': ['/path/to/external/modules1/index.ts'],
          '@external/module2': ['/path/to/external/modules2/index.ts'],
        },
      },
    });
    project.createSourceFile(
      `/path/to/external/modules1/index.ts`,
      `
      export interface Billing {
        id: number;
        address: string;
      }
      
      export type PaymentTypeMapper = {
        id: string;
        type: 'creditcard' | 'cash' | 'bitcoin';
        typeCode: 'payment';
      }

      export type SomethingTypeMapper = {
        id: number;
      }
      `
    );
    project.createSourceFile(
      `/path/to/external/modules2/index.ts`,
      `
      export type Address = {
        id: string;
      }
      export interface GeoTypeMapper {
        id: string;
      }
      export type NotAliasMapper2 = {
        id: number;
      }
      `
    );
    project.createSourceFile(
      '/path/to/schemas/module1/localModule1.ts',
      `
      export type Preference = {
        id: number;
      }
      export interface FlagTypeMapper {
        id: number;
      }
      export type NotAliasMapper3 = {
        id: number;
      }
      `
    );
    const mapperFile = project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      export type { 
        Billing as BillingTypeMapper, 
        PaymentTypeMapper, 
        SomethingTypeMapper as NotAliasMapper1 
      } from '@external/module1';
      export { 
        Address as AddressTypeMapper, 
        GeoTypeMapper, 
        NotAliasMapper2 
      } from '@external/module2';
      export { 
        Preference as PreferenceTypeMapper, 
        FlagTypeMapper, 
        NotAliasMapper3 
      } from './localModule1';`
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: mapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        mapper: {
          name: 'BillingTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        mapper: {
          name: 'PaymentTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        mapper: {
          name: 'AddressTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        mapper: {
          filename: '/path/to/schemas/module1/schema.mappers.ts',
          kind: SyntaxKind.ExportSpecifier,
          name: 'GeoTypeMapper',
        },
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        mapper: {
          name: 'PreferenceTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        mapper: {
          name: 'FlagTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMappersSuffix for imports and rexports', () => {
    const project = new Project({
      compilerOptions: {
        paths: {
          '@external/module1': ['/path/to/external/modules1/index.ts'],
          '@external/module2': ['/path/to/external/modules2/index.ts'],
        },
      },
    });
    project.createSourceFile(
      `/path/to/external/modules1/index.ts`,
      `
      export interface Billing {
        __type: 1;
      }
      
      export type PaymentTypeMapper = {
        __type: 2;
      }

      export type SomethingTypeMapper = {
        id: number;
      }
      `
    );
    project.createSourceFile(
      `/path/to/external/modules2/index.ts`,
      `
      export type Address = {
        __type: 3;
      }
      export interface GeoTypeMapper {
        __type: boolean;
      }
      export type NotAliasMapper2 = {
        id: number;
      }
      `
    );
    project.createSourceFile(
      '/path/to/schemas/module1/localModule1.ts',
      `
      export type Preference = {
        __type: true;
      }
      export interface FlagTypeMapper {
        __type: false;
      }
      export type NotAliasMapper3 = {
        id: number;
      }
      `
    );
    const mapperFile = project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      import type { 
        Billing as BillingTypeMapper, 
        PaymentTypeMapper, 
        SomethingTypeMapper as NotAliasMapper1 
      } from '@external/module1';
      import { 
        Address as AddressTypeMapper, 
        GeoTypeMapper, 
        NotAliasMapper2 
      } from '@external/module2';
      import { 
        Preference as PreferenceTypeMapper, 
        FlagTypeMapper, 
        NotAliasMapper3 
      } from './localModule1';

      export { 
        BillingTypeMapper,
        PaymentTypeMapper,
        NotAliasMapper1,
        AddressTypeMapper,
        GeoTypeMapper,
        NotAliasMapper2,
        PreferenceTypeMapper,
        FlagTypeMapper,
        NotAliasMapper3
      }
      `
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: mapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        mapper: {
          name: 'BillingTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        mapper: {
          name: 'PaymentTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        mapper: {
          name: 'AddressTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        mapper: {
          name: 'GeoTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        mapper: {
          name: 'PreferenceTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        mapper: {
          name: 'FlagTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMappersSuffix for locally declared types/interfaces and exported', () => {
    const project = new Project();
    const mapperFile = project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      export interface UserTypeMapper {
        id: string;
      }

      export type ProfileTypeMapper {
        id: string;
        account: string;
      }

      export interface NotMapperInlineExport1 {
        id: string;
      }

      export type NotMapperInlineExport2 = {
        id: string;
      };

      interface Like {
        id: string;
      }
      
      type Password = {
        isValid: boolean;
      };
      type PasswordTypeMapper = Password;

      interface NotGoingToBe1TypeMapper {
        something: string;
      }

      type NotGoingToBe2TypeMapper = {
        something: string;
      }

      export { 
        Like as LikeTypeMapper,
        PasswordTypeMapper,
        NotGoingToBe1TypeMapper as NotMapper1,
        NotGoingToBe2TypeMapper as NotMapper2,
      };`
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: mapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Profile: {
        schemaType: 'Profile',
        mapper: {
          name: 'ProfileTypeMapper',
          kind: SyntaxKind.TypeAliasDeclaration,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#ProfileTypeMapper',
      },
      User: {
        schemaType: 'User',
        mapper: {
          name: 'UserTypeMapper',
          kind: SyntaxKind.InterfaceDeclaration,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#UserTypeMapper',
      },
      Like: {
        schemaType: 'Like',
        mapper: {
          name: 'LikeTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#LikeTypeMapper',
      },
      Password: {
        schemaType: 'Password',
        mapper: {
          name: 'PasswordTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#PasswordTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMappersSuffix for locally declared class and exported', () => {
    const project = new Project();
    const mapperFile = project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      export class UserTypeMapper {
        id: string;
        firstName!: string;
        readonly lastName: string;
        public createdAt: string;
        public readonly updatedAt: string;
        // bellow are not going to be collected
        protected protectedField: string;
        static notInstanceField: string;
        private tsPrivateField: string;
        private readonly tsPrivateReadonlyField: string;
        #ecmaPrivateField: string;
        method(): string
        get getter(): string
      }

      export class NotMapperInlineExport1 {
        id: string;
      }

      class PostTypeMapper {
        id: string
      }

      class Base {
        id: string;
        private title: string;
      }

      class Like extends Base {
        createdAt: string
      }

      export { 
        Like as LikeTypeMapper,
        PostTypeMapper,
      };`
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: mapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Like: {
        schemaType: 'Like',
        mapper: {
          name: 'LikeTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#LikeTypeMapper',
      },
      Post: {
        schemaType: 'Post',
        mapper: {
          name: 'PostTypeMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#PostTypeMapper',
      },
      User: {
        schemaType: 'User',
        mapper: {
          name: 'UserTypeMapper',
          kind: SyntaxKind.ClassDeclaration,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers#UserTypeMapper',
      },
    });
  });

  it('mutates the result on multiple runs', () => {
    const project = new Project({
      compilerOptions: {
        paths: {
          '@external/module1': ['/path/to/external/modules1/index.ts'],
          '@external/module2': ['/path/to/external/modules2/index.ts'],
        },
      },
    });
    project.createSourceFile(
      `/path/to/external/modules1/index.ts`,
      `
      export interface Billing {
        id: number;
        address: string;
      }
      
      export type PaymentTypeMapper = {
        id: string;
        type: 'creditcard' | 'cash' | 'bitcoin';
        typeCode: 'payment';
      }
      `
    );
    project.createSourceFile(
      `/path/to/external/modules2/index.ts`,
      `
      export type Address = {
        id: string;
      }
      export interface GeoTypeMapper {
        id: string;
      }
      `
    );
    project.createSourceFile(
      '/path/to/schemas/preference/localModule1.ts',
      `
      export type Preference = {
        id: number;
      }
      export interface FlagTypeMapper {
        id: number;
      }
      `
    );
    const billingMapperFile = project.createSourceFile(
      '/path/to/schemas/billing/schema.mappers.ts',
      "export type {  Billing as BillingTypeMapper, PaymentTypeMapper } from '@external/module1';"
    );
    const addressMapperFile = project.createSourceFile(
      '/path/to/schemas/address/schema.mappers.ts',
      "export { Address as AddressTypeMapper, GeoTypeMapper } from '@external/module2';"
    );
    const preferenceMapperFile = project.createSourceFile(
      '/path/to/schemas/preference/schema.mappers.ts',
      "export { Preference as PreferenceTypeMapper, FlagTypeMapper } from './localModule1';"
    );

    const expectedBilling = {
      schemaType: 'Billing',
      mapper: {
        name: 'BillingTypeMapper',
        kind: SyntaxKind.ExportSpecifier,
        filename: '/path/to/schemas/billing/schema.mappers.ts',
      },
      configImportPath: './billing/schema.mappers#BillingTypeMapper',
    };
    const expectedPayment = {
      schemaType: 'Payment',
      mapper: {
        name: 'PaymentTypeMapper',
        kind: SyntaxKind.ExportSpecifier,
        filename: '/path/to/schemas/billing/schema.mappers.ts',
      },
      configImportPath: './billing/schema.mappers#PaymentTypeMapper',
    };
    const expectedAddress = {
      schemaType: 'Address',
      mapper: {
        name: 'AddressTypeMapper',
        kind: SyntaxKind.ExportSpecifier,
        filename: '/path/to/schemas/address/schema.mappers.ts',
      },
      configImportPath: './address/schema.mappers#AddressTypeMapper',
    };
    const expectedGeo = {
      schemaType: 'Geo',
      mapper: {
        name: 'GeoTypeMapper',
        kind: SyntaxKind.ExportSpecifier,
        filename: '/path/to/schemas/address/schema.mappers.ts',
      },
      configImportPath: './address/schema.mappers#GeoTypeMapper',
    };
    const expectedPreference = {
      schemaType: 'Preference',
      mapper: {
        name: 'PreferenceTypeMapper',
        kind: SyntaxKind.ExportSpecifier,
        filename: '/path/to/schemas/preference/schema.mappers.ts',
      },
      configImportPath: './preference/schema.mappers#PreferenceTypeMapper',
    };
    const expectedFlag = {
      schemaType: 'Flag',
      mapper: {
        name: 'FlagTypeMapper',
        kind: SyntaxKind.ExportSpecifier,
        filename: '/path/to/schemas/preference/schema.mappers.ts',
      },
      configImportPath: './preference/schema.mappers#FlagTypeMapper',
    };

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: billingMapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );
    expect(result).toEqual({
      Billing: expectedBilling,
      Payment: expectedPayment,
    });

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: addressMapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );
    expect(result).toEqual({
      Billing: expectedBilling,
      Payment: expectedPayment,
      Address: expectedAddress,
      Geo: expectedGeo,
    });

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: preferenceMapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );
    expect(result).toEqual({
      Billing: expectedBilling,
      Payment: expectedPayment,
      Address: expectedAddress,
      Geo: expectedGeo,
      Preference: expectedPreference,
      Flag: expectedFlag,
    });
  });

  it('mutates the result with .js extensions in configImportPath for mapper files when emitLegacyCommonJSImports=false', () => {
    const project = new Project({
      compilerOptions: {
        paths: {
          '@external/module1': ['/path/to/external/modules1/index.ts'],
          '@external/module2': ['/path/to/external/modules2/index.ts'],
        },
      },
    });
    project.createSourceFile(
      `/path/to/external/modules1/index.ts`,
      `
      export interface Billing {
        id: number;
        address: string;
      }
      `
    );
    project.createSourceFile(
      `/path/to/external/modules2/index.ts`,
      `
      export type Address = {
        id: string;
      }
      `
    );
    project.createSourceFile(
      '/path/to/schemas/module1/localModule1.ts',
      `
      export type Preference = {
        id: number;
      }
      `
    );
    const mapperFile = project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      export type { Billing as BillingMapper } from '@external/module1';
      export { Address as AddressMapper } from '@external/module2';
      export { Preference as PreferenceMapper } from './localModule1';`
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: mapperFile,
        typeMappersSuffix: 'Mapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: false,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        mapper: {
          name: 'BillingMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers.js#BillingMapper',
      },
      Address: {
        schemaType: 'Address',
        mapper: {
          name: 'AddressMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers.js#AddressMapper',
      },
      Preference: {
        schemaType: 'Preference',
        mapper: {
          name: 'PreferenceMapper',
          kind: SyntaxKind.ExportSpecifier,
          filename: '/path/to/schemas/module1/schema.mappers.ts',
        },
        configImportPath: './module1/schema.mappers.js#PreferenceMapper',
      },
    });
  });

  it('throws error if there are duplicated mappers', () => {
    const project = new Project();
    project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      export interface UserTypeMapper {
        id: string;
      }`
    );
    project.createSourceFile(
      '/path/to/schemas/module2/schema.mappers.ts',
      `
      export type UserTypeMapper {
        id: string;
        password: string;
      }`
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: project.getSourceFiles()[0],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(() =>
      collectTypeMappersFromSourceFile(
        {
          typeMappersSourceFile: project.getSourceFiles()[1],
          typeMappersSuffix: 'TypeMapper',
          resolverTypesPath: '/path/to/schemas/types.generated.ts',
          emitLegacyCommonJSImports: true,
        },
        result
      )
    ).toThrowErrorMatchingInlineSnapshot(`
      "GraphQL type "User" has duplicated "UserTypeMapper" mappers:
        - ./module2/schema.mappers#UserTypeMapper
        - ./module1/schema.mappers#UserTypeMapper"
    `);
  });
});
