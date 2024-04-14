import { presetName } from '../preset';

/**
 * Shared message formatter
 */
export const fmt = {
  error: (input: string, type: 'Validation'): string => {
    return `[${presetName}] \x1b[31mERROR:\x1b[0m ${type} - ${input}`;
  },
  warn: (input: string): string => {
    return `[${presetName}] \x1b[33mWARN:\x1b[0m ${input}`;
  },
  debug: (input: string): string => {
    return `[${presetName}] \x1b[35mDEBUG:\x1b[0m ${input}`;
  },
};
