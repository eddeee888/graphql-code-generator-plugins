import { Project } from 'ts-morph';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

describe('collectTypeMappersFromSourceFile', () => {
  it('mutates the result based on typeMappersSuffix for exports from other modules', () => {
    const project = new Project();
    project.createSourceFile(
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
        typeMappersSourceFile: project.getSourceFiles()[0],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMappersSuffix for imports and rexports', () => {
    const project = new Project();
    project.createSourceFile(
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
        typeMappersSourceFile: project.getSourceFiles()[0],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/schema.mappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/schema.mappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/schema.mappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/schema.mappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/schema.mappers#FlagTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMappersSuffix for locally declared types/interfaces and exported', () => {
    const project = new Project();
    project.createSourceFile(
      '/path/to/schemas/module1/schema.mappers.ts',
      `
      export interface UserTypeMapper {
        id: string;
      }

      export type ProfileTypeMapper {
        id: string
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
      
      type Password = string;

      interface NotGoingToBe1TypeMapper {
        something: string;
      }

      type NotGoingToBe2TypeMapper = {
        something: string;
      }

      export { 
        Like as LikeTypeMapper,
        Password as PasswordTypeMapper,
        NotGoingToBe1TypeMapper as NotMapper1,
        NotGoingToBe2TypeMapper as NotMapper2,
      };`
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: project.getSourceFiles()[0],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Profile: {
        configImportPath: './module1/schema.mappers#ProfileTypeMapper',
        schemaType: 'Profile',
        typeMapperName: 'ProfileTypeMapper',
      },
      User: {
        configImportPath: './module1/schema.mappers#UserTypeMapper',
        schemaType: 'User',
        typeMapperName: 'UserTypeMapper',
      },
      Like: {
        configImportPath: './module1/schema.mappers#LikeTypeMapper',
        schemaType: 'Like',
        typeMapperName: 'LikeTypeMapper',
      },
      Password: {
        configImportPath: './module1/schema.mappers#PasswordTypeMapper',
        schemaType: 'Password',
        typeMapperName: 'PasswordTypeMapper',
      },
    });
  });

  it('mutates the result on multiple runs', () => {
    const project = new Project();
    project.createSourceFile(
      '/path/to/schemas/billing/schema.mappers.ts',
      "export type {  Billing as BillingTypeMapper, PaymentTypeMapper } from '@external/module1';"
    );
    project.createSourceFile(
      '/path/to/schemas/address/schema.mappers.ts',
      "export { Address as AddressTypeMapper, GeoTypeMapper } from '@external/module2';"
    );
    project.createSourceFile(
      '/path/to/schemas/preference/schema.mappers.ts',
      "export { Preference as PreferenceTypeMapper, FlagTypeMapper } from './localModule1';"
    );

    const result = {};

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: project.getSourceFiles()[0],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './billing/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './billing/schema.mappers#PaymentTypeMapper',
      },
    });

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: project.getSourceFiles()[1],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './billing/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './billing/schema.mappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './address/schema.mappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './address/schema.mappers#GeoTypeMapper',
      },
    });

    collectTypeMappersFromSourceFile(
      {
        typeMappersSourceFile: project.getSourceFiles()[2],
        typeMappersSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './billing/schema.mappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './billing/schema.mappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './address/schema.mappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './address/schema.mappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './preference/schema.mappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './preference/schema.mappers#FlagTypeMapper',
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
      },
      result
    );

    expect(() =>
      collectTypeMappersFromSourceFile(
        {
          typeMappersSourceFile: project.getSourceFiles()[1],
          typeMappersSuffix: 'TypeMapper',
          resolverTypesPath: '/path/to/schemas/types.generated.ts',
        },
        result
      )
    ).toThrowErrorMatchingInlineSnapshot(`
      "GraphQL type \\"User\\" has duplicated \\"UserTypeMapper\\" mappers:
        - ./module2/schema.mappers#UserTypeMapper
        - ./module1/schema.mappers#UserTypeMapper"
    `);
  });
});
