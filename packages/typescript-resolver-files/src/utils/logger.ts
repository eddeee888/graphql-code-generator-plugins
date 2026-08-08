import { presetName } from '../preset.js';
import { fmt } from './fmt.js';

export const logger = {
  debug: (...args: Parameters<(typeof fmt)['debug']>) => {
    const debugEnvVar = process.env.DEBUG || '';
    if (debugEnvVar.includes(presetName)) {
      console.debug(`\x1b[34m${fmt.debug(...args)}`);
    }
  },
  warn: (...args: Parameters<(typeof fmt)['warn']>) => {
    console.warn(`\x1b[34m${fmt.warn(...args)}`);
  },
};
