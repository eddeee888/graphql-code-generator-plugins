/* eslint-disable @nrwl/nx/enforce-module-boundaries */

// local import
export {
  ProfileMapper,
  ProfileMeta as ProfileMetaMapper,
} from './profileTypes';

// import from fake node_modules
export { CountryMapper } from '@graphql-code-generator-plugins/typescript-resolver-files-e2e-external/type-at-root';

// import from node_modules and re-named
import { Account } from '@graphql-code-generator-plugins/typescript-resolver-files-e2e-external/type-at-root';
type AccountMapper = Account;
export { AccountMapper };
