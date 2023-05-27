import { Project } from 'ts-morph';
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
        shouldCollectPropertyMap: true,
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
        typeMapperPropertyMap: {
          address: { name: 'address' },
          id: { name: 'id' },
        },
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
          type: { name: 'type' },
          typeCode: { name: 'typeCode' },
        },
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
        },
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
        },
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
        },
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
        },
      },
    });
  });

  it('mutates the result based on typeMappersSuffix for exports from other modules but not propert map if shouldCollectPropertyMap=false', () => {
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
        shouldCollectPropertyMap: false,
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
        typeMapperPropertyMap: {},
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
        typeMapperPropertyMap: {},
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
        typeMapperPropertyMap: {},
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
        typeMapperPropertyMap: {},
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
        typeMapperPropertyMap: {},
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
        typeMapperPropertyMap: {},
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
        shouldCollectPropertyMap: true,
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
        typeMapperPropertyMap: {
          __type: { name: '__type' },
        },
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
        typeMapperPropertyMap: {
          __type: { name: '__type' },
        },
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
        typeMapperPropertyMap: {
          __type: { name: '__type' },
        },
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
        typeMapperPropertyMap: {
          __type: { name: '__type' },
        },
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
        typeMapperPropertyMap: {
          __type: { name: '__type' },
        },
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
        typeMapperPropertyMap: {
          __type: { name: '__type' },
        },
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
        shouldCollectPropertyMap: true,
        emitLegacyCommonJSImports: true,
      },
      result
    );

    expect(result).toEqual({
      Profile: {
        configImportPath: './module1/schema.mappers#ProfileTypeMapper',
        schemaType: 'Profile',
        typeMapperName: 'ProfileTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
          account: { name: 'account' },
        },
      },
      User: {
        configImportPath: './module1/schema.mappers#UserTypeMapper',
        schemaType: 'User',
        typeMapperName: 'UserTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
        },
      },
      Like: {
        configImportPath: './module1/schema.mappers#LikeTypeMapper',
        schemaType: 'Like',
        typeMapperName: 'LikeTypeMapper',
        typeMapperPropertyMap: {
          id: { name: 'id' },
        },
      },
      Password: {
        configImportPath: './module1/schema.mappers#PasswordTypeMapper',
        schemaType: 'Password',
        typeMapperName: 'PasswordTypeMapper',
        typeMapperPropertyMap: {
          isValid: { name: 'isValid' },
        },
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
      typeMapperName: 'BillingTypeMapper',
      configImportPath: './billing/schema.mappers#BillingTypeMapper',
      typeMapperPropertyMap: {
        address: { name: 'address' },
        id: { name: 'id' },
      },
    };
    const expectedPayment = {
      schemaType: 'Payment',
      typeMapperName: 'PaymentTypeMapper',
      configImportPath: './billing/schema.mappers#PaymentTypeMapper',
      typeMapperPropertyMap: {
        id: { name: 'id' },
        type: { name: 'type' },
        typeCode: { name: 'typeCode' },
      },
    };
    const expectedAddress = {
      schemaType: 'Address',
      typeMapperName: 'AddressTypeMapper',
      configImportPath: './address/schema.mappers#AddressTypeMapper',
      typeMapperPropertyMap: {
        id: { name: 'id' },
      },
    };
    const expectedGeo = {
      schemaType: 'Geo',
      typeMapperName: 'GeoTypeMapper',
      configImportPath: './address/schema.mappers#GeoTypeMapper',
      typeMapperPropertyMap: {
        id: { name: 'id' },
      },
    };
    const expectedPreference = {
      schemaType: 'Preference',
      typeMapperName: 'PreferenceTypeMapper',
      configImportPath: './preference/schema.mappers#PreferenceTypeMapper',
      typeMapperPropertyMap: {
        id: { name: 'id' },
      },
    };
    const expectedFlag = {
      schemaType: 'Flag',
      typeMapperName: 'FlagTypeMapper',
      configImportPath: './preference/schema.mappers#FlagTypeMapper',
      typeMapperPropertyMap: {
        id: { name: 'id' },
      },
    };

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: billingMapperFile,
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
        shouldCollectPropertyMap: true,
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
        shouldCollectPropertyMap: true,
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
        shouldCollectPropertyMap: true,
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
        shouldCollectPropertyMap: false,
        emitLegacyCommonJSImports: false,
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingMapper',
        configImportPath: './module1/schema.mappers.js#BillingMapper',
        typeMapperPropertyMap: {},
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressMapper',
        configImportPath: './module1/schema.mappers.js#AddressMapper',
        typeMapperPropertyMap: {},
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceMapper',
        configImportPath: './module1/schema.mappers.js#PreferenceMapper',
        typeMapperPropertyMap: {},
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
        shouldCollectPropertyMap: true,
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
          shouldCollectPropertyMap: true,
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
