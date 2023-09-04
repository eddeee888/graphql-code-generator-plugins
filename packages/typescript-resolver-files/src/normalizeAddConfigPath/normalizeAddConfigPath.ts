import * as path from 'path';
import type { AddPluginConfig } from '@graphql-codegen/add/typings/config';

/**
 * normalizeAddConfigPath
 *
 * Function to turn the add config keys into normalized path a.k.a. path from baseOutputDir
 * This helps us detects targeted file being given in different formats e.g. './types.generated.ts' vs 'types.generated.ts'
 */
export const normalizeAddConfigPath = ({
  add,
  baseOutputDir,
}: {
  add?: Record<string, AddPluginConfig>;
  baseOutputDir: string;
}): Record<string, AddPluginConfig> | undefined => {
  if (!add) {
    return undefined;
  }

  const normalizedPathAdd = Object.entries(add).reduce<
    Record<string, AddPluginConfig>
  >((res, [originalFilePath, config]) => {
    res[path.posix.join(baseOutputDir, originalFilePath)] = config;
    return res;
  }, {});

  return normalizedPathAdd;
};
