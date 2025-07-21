import * as path from 'path';
import * as addPlugin from '@graphql-codegen/add';
import {
  type Types,
  createNoopProfiler,
} from '@graphql-codegen/plugin-helpers';
import type { TypedPresetConfig } from './config';

export const preset: Types.OutputPreset<TypedPresetConfig> = {
  buildGeneratesSection: async ({
    baseOutputDir,
    schema,
    documents,
    presetConfig,
    profiler = createNoopProfiler(),
  }) => {
    console.log(documents[0]);

    const document = documents[0];

    const documentPath = path.parse(document.location || '');
    const documentSDL = document.rawSDL || '';
    const gqlTagPath = path.posix.join(
      baseOutputDir,
      presetConfig.artifactDirectory
    ); // FIXME: handle absolute path

    const newFilename = path.join(
      documentPath.dir,
      `${documentPath.name}.graphql.ts`
    );
    const gqlTagImportPath = path.posix.relative(documentPath.dir, gqlTagPath);

    console.log({ documentPath, documentSDL, newFilename, gqlTagPath });

    return [
      {
        filename: newFilename,
        pluginMap: { add: addPlugin },
        plugins: [
          {
            add: {
              content: `import { ${presetConfig.gqlTagName} } from '${gqlTagImportPath}'; export const FIXMEDoc = graphql(\`${documentSDL}\`);\n`,
            },
          },
        ],
        config: {},
        schema,
        documents: [],
      },
    ];
  },
};
