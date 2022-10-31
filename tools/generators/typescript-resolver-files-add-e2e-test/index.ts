import * as path from 'path';
import { Tree, formatFiles, generateFiles } from '@nrwl/devkit';
import type { TypescriptResolverFilesAddE2ETestSchema } from './schema';

type NormalizedSchema = TypescriptResolverFilesAddE2ETestSchema;

function normalizeOptions(
  options: TypescriptResolverFilesAddE2ETestSchema
): NormalizedSchema {
  return { ...options };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    'packages/typescript-resolver-files-e2e/src',
    {
      ...options,
      template: '',
    }
  );
}

export default async function (
  tree: Tree,
  options: TypescriptResolverFilesAddE2ETestSchema
) {
  const normalizedOptions = normalizeOptions(options);
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
