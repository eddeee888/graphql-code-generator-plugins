import * as path from 'path';
import * as fs from 'fs';
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit';
import type { TypescriptResolverFilesAddE2ETestSchema } from './schema';

interface NormalizedSchema extends TypescriptResolverFilesAddE2ETestSchema {
  projectName: string;
  projectConfig: ProjectConfiguration;
  testFullName: string;
}

const projectName = 'typescript-resolver-files-e2e';

const normalizeOptions = (
  tree: Tree,
  options: TypescriptResolverFilesAddE2ETestSchema
): NormalizedSchema => {
  const testFullName = `test-${options.testName}`;
  const testDir = path.posix.join('packages', projectName, 'src', testFullName);
  if (fs.existsSync(testDir)) {
    throw new Error(
      `${testFullName} already exists. Try a different testName.`
    );
  }

  const projectConfig = readProjectConfiguration(tree, projectName);

  return {
    ...options,
    projectName,
    projectConfig,
    testFullName,
  };
};

const addFiles = (tree: Tree, options: NormalizedSchema): void => {
  generateFiles(
    tree,
    path.posix.join(__dirname, 'files'),
    'packages/typescript-resolver-files-e2e/src',
    {
      ...options,
      template: '',
    }
  );
};

const updateProjectConfig = (tree: Tree, options: NormalizedSchema): void => {
  const e2eRunCommands: string[] =
    options.projectConfig.targets?.['e2e-run']?.options?.['commands'];
  if (!e2eRunCommands) {
    throw new Error('Unable to find `e2e-run` commands in project.json.');
  }

  const graphQLCodegenConfig =
    options.projectConfig.targets?.['graphql-codegen']?.configurations;
  if (!graphQLCodegenConfig) {
    throw new Error(
      'Unable to find `graphql-codegen` configurations in project.json.'
    );
  }

  const e2eCleanupConfig =
    options.projectConfig.targets?.['e2e-cleanup']?.configurations;
  if (!e2eCleanupConfig) {
    throw new Error(
      'Unable to find `e2e-cleanup` configurations in project.json.'
    );
  }

  e2eRunCommands.push(
    `nx graphql-codegen typescript-resolver-files-e2e -c ${options.testFullName} --verbose`
  );
  graphQLCodegenConfig[options.testFullName] = {
    configFile: `packages/typescript-resolver-files-e2e/src/${options.testFullName}/codegen.ts`,
  };
  e2eCleanupConfig[options.testFullName] = {
    commands: [
      `rimraf -g \"packages/typescript-resolver-files-e2e/src/${options.testFullName}/**/resolvers/\"`,
      `rimraf -g \"packages/typescript-resolver-files-e2e/src/${options.testFullName}/**/*.generated.*\"`,
    ],
    parallel: false,
  };

  updateProjectConfiguration(tree, options.projectName, options.projectConfig);
};

export default async function (
  tree: Tree,
  options: TypescriptResolverFilesAddE2ETestSchema
): Promise<void> {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  updateProjectConfig(tree, normalizedOptions);
  await formatFiles(tree);
}
