import * as path from 'path';
import {
  ParseLocationForWhitelistedModule,
  parseLocationForWhitelistedModule,
} from './parseLocationForWhitelistedModule';
import type { ParsedSource, ParseSourcesResult } from '../parseSources';

const createPartialLocation = (
  moduleName: string
): { source: { name: string } } => {
  return {
    source: { name: `/path/to/${moduleName}/schema.graphqls` },
  };
};

const createParsedSource = (moduleName: string): ParsedSource => {
  const location = `/path/to/${moduleName}/schema.graphqls`;
  return {
    moduleName,
    sourcePath: path.parse(location),
    source: { location: `/path/to/${moduleName}/schema.graphqls` },
  };
};

const createSourcesMap = (
  moduleNames: string[]
): ParseSourcesResult['sourceMap'] => {
  return moduleNames.reduce<ParseSourcesResult['sourceMap']>(
    (res, moduleName) => {
      const sourceLocation = `/path/to/${moduleName}/schema.graphqls`;
      res[sourceLocation] = createParsedSource(moduleName);
      return res;
    },
    {}
  );
};

describe('parseLocationForWhitelistedModule', () => {
  test.each([
    {
      description:
        'is whitelisted if whitelistedModules and blacklistedModules are empty arrays',
      location: createPartialLocation('module1'),
      sourceMap: createSourcesMap(['module1']),
      whitelistedModules: [],
      blacklistedModules: [],
      result: createParsedSource('module1'),
    },
    {
      description: 'is whitelisted if exists in whitelistedModules',
      location: createPartialLocation('module2'),
      sourceMap: createSourcesMap(['module1', 'module2', 'module3']),
      whitelistedModules: ['module1', 'module2', 'module3'],
      blacklistedModules: [],
      result: createParsedSource('module2'),
    },
    {
      description: 'is NOT whitelisted if not exists in whitelistedModules',
      location: createPartialLocation('module2'),
      sourceMap: createSourcesMap(['module1', 'module2', 'module3']),
      whitelistedModules: ['module1', 'module3'],
      blacklistedModules: [],
      result: undefined,
    },
    {
      description:
        'is whitelisted if exists in whitelistedModules but not blacklistedModules',
      location: createPartialLocation('module2'),
      sourceMap: createSourcesMap(['module1', 'module2', 'module3']),
      whitelistedModules: ['module1', 'module2', 'module3'],
      blacklistedModules: ['module1'],
      result: createParsedSource('module2'),
    },
    {
      description:
        'is whitelisted if whitelistedModules is empty but does not exist in blacklistedModules',
      location: createPartialLocation('module2'),
      sourceMap: createSourcesMap(['module1', 'module2', 'module3']),
      whitelistedModules: [],
      blacklistedModules: ['module1'],
      result: createParsedSource('module2'),
    },
    {
      description:
        'is NOT whitelisted if exists in both whitelistedModules and blacklistedModules',
      location: createPartialLocation('module1'),
      sourceMap: createSourcesMap(['module1', 'module2', 'module3']),
      whitelistedModules: ['module1', 'module2', 'module3'],
      blacklistedModules: ['module1'],
      result: undefined,
    },
    {
      description:
        'is NOT whitelisted if whitelistedModules is empty and exists in blacklistedModules',
      location: createPartialLocation('module3'),
      sourceMap: createSourcesMap(['module1', 'module2', 'module3']),
      whitelistedModules: [],
      blacklistedModules: ['module3'],
      result: undefined,
    },
  ])(
    '$description',
    ({ location, sourceMap, blacklistedModules, whitelistedModules, result }) =>
      expect(
        parseLocationForWhitelistedModule({
          location,
          sourceMap,
          blacklistedModules,
          whitelistedModules,
        } as unknown as ParseLocationForWhitelistedModule)
      ).toEqual(result)
  );

  it('throws if location does not exist in sourceMap', () => {
    expect(() =>
      parseLocationForWhitelistedModule({
        location: createPartialLocation('module10'),
        sourceMap: createSourcesMap(['module1', 'module2']),
        blacklistedModules: [],
        whitelistedModules: [],
      } as unknown as ParseLocationForWhitelistedModule)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Unable to find /path/to/module10/schema.graphqls in sourceMap"`
    );
  });
});
