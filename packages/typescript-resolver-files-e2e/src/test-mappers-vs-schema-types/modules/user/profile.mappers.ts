/* eslint-disable @nx/enforce-module-boundaries */

// local import
export {
  ProfileMapper,
  ProfileMeta as ProfileMetaMapper,
} from './profileTypes';

// import from fake node_modules
export { CountryMapper } from 'mock_node_modules/type-at-root';

// import from node_modules and re-named
import { Account } from 'mock_node_modules/type-at-root';
type AccountMapper = Account;
export { AccountMapper };
