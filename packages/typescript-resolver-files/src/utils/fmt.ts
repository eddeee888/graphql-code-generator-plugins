import { presetName } from '../preset';

/**
 * Shared message formatter
 */
export const fmt = {
  error: (input: string, type: 'Validation'): string => {
    return `[${presetName}] ERROR: ${type} - ${input}`;
  },
  warn: (input: string): string => {
    return `[${presetName}] WARN: ${input}`;
  },
};
