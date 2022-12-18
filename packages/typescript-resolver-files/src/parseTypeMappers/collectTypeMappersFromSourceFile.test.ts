import { Project } from 'ts-morph';
import { collectTypeMappersFromSourceFile } from './collectTypeMappersFromSourceFile';

describe('collectTypeMappersFromSourceFile', () => {
  it('mutates the result based on typeMapperSuffix for exports from other modules', () => {
    const project = new Project();
    project.createSourceFile(
      '/path/to/schemas/module1/typeMappers.ts',
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
        typeMapperSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/typeMappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/typeMappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/typeMappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/typeMappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/typeMappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/typeMappers#FlagTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMapperSuffix for imports and rexports', () => {
    const project = new Project();
    project.createSourceFile(
      '/path/to/schemas/module1/typeMappers.ts',
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
        typeMapperSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Billing: {
        schemaType: 'Billing',
        typeMapperName: 'BillingTypeMapper',
        configImportPath: './module1/typeMappers#BillingTypeMapper',
      },
      Payment: {
        schemaType: 'Payment',
        typeMapperName: 'PaymentTypeMapper',
        configImportPath: './module1/typeMappers#PaymentTypeMapper',
      },
      Address: {
        schemaType: 'Address',
        typeMapperName: 'AddressTypeMapper',
        configImportPath: './module1/typeMappers#AddressTypeMapper',
      },
      Geo: {
        schemaType: 'Geo',
        typeMapperName: 'GeoTypeMapper',
        configImportPath: './module1/typeMappers#GeoTypeMapper',
      },
      Preference: {
        schemaType: 'Preference',
        typeMapperName: 'PreferenceTypeMapper',
        configImportPath: './module1/typeMappers#PreferenceTypeMapper',
      },
      Flag: {
        schemaType: 'Flag',
        typeMapperName: 'FlagTypeMapper',
        configImportPath: './module1/typeMappers#FlagTypeMapper',
      },
    });
  });

  it('mutates the result based on typeMapperSuffix for locally declared types/interfaces and exported', () => {
    const project = new Project();
    project.createSourceFile(
      '/path/to/schemas/module1/typeMappers.ts',
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
        typeMapperSuffix: 'TypeMapper',
        resolverTypesPath: '/path/to/schemas/types.generated.ts',
      },
      result
    );

    expect(result).toEqual({
      Profile: {
        configImportPath: './module1/typeMappers#ProfileTypeMapper',
        schemaType: 'Profile',
        typeMapperName: 'ProfileTypeMapper',
      },
      User: {
        configImportPath: './module1/typeMappers#UserTypeMapper',
        schemaType: 'User',
        typeMapperName: 'UserTypeMapper',
      },
      Like: {
        configImportPath: './module1/typeMappers#LikeTypeMapper',
        schemaType: 'Like',
        typeMapperName: 'LikeTypeMapper',
      },
      Password: {
        configImportPath: './module1/typeMappers#PasswordTypeMapper',
        schemaType: 'Password',
        typeMapperName: 'PasswordTypeMapper',
      },
    });
  });
});
