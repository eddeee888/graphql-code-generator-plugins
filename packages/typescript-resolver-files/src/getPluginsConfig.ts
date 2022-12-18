import { GraphQLSchema, isScalarType } from 'graphql';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import {
  isNativeNamedType,
  parseLocationForWhitelistedModule,
  SourcesMap,
} from './utils';

interface GetPluginsConfigParams {
  schemaAst: GraphQLSchema;
  sourcesMap: SourcesMap;
  whitelistedModules: string[];
  blacklistedModules: string[];
}

type GetPluginsConfigResult = Record<
  'defaultScalarTypesMap' | 'defaultScalarExternalResolvers',
  Record<string, string>
>;

export const getPluginsConfig = ({
  schemaAst,
  sourcesMap,
  whitelistedModules,
  blacklistedModules,
}: GetPluginsConfigParams): GetPluginsConfigResult => {
  return Object.entries(schemaAst.getTypeMap()).reduce<GetPluginsConfigResult>(
    (res, [schemaType, namedType]) => {
      if (!isScalarType(namedType) || isNativeNamedType(namedType)) {
        return res;
      }

      const parsedSource = parseLocationForWhitelistedModule({
        location: namedType.astNode?.loc,
        sourcesMap,
        whitelistedModules,
        blacklistedModules,
      });
      if (!parsedSource) {
        return res;
      }

      const scalarResolver = scalarResolvers[schemaType];
      if (!scalarResolver) {
        return res;
      }

      if (
        scalarResolver.extensions.codegenScalarType &&
        typeof scalarResolver.extensions.codegenScalarType === 'string'
      ) {
        res.defaultScalarTypesMap[schemaType] =
          scalarResolver.extensions.codegenScalarType;
      }

      res.defaultScalarExternalResolvers[
        schemaType
      ] = `~graphql-scalars#${scalarResolver.name}Resolver`;

      return res;
    },
    { defaultScalarTypesMap: {}, defaultScalarExternalResolvers: {} }
  );
};
