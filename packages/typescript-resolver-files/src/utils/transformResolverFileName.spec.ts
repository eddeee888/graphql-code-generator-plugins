import { transformResolverFileName } from './transformResolverFileName';

describe('transformResolverFileName', () => {
  describe('pascal-case', () => {
    it('should return the original name for pascal-case', () => {
      expect(transformResolverFileName('User', 'pascal-case')).toBe('User');
      expect(transformResolverFileName('UserProfile', 'pascal-case')).toBe('UserProfile');
      expect(transformResolverFileName('APIKey', 'pascal-case')).toBe('APIKey');
    });

    it('should handle single character names', () => {
      expect(transformResolverFileName('A', 'pascal-case')).toBe('A');
    });

    it('should handle names with numbers', () => {
      expect(transformResolverFileName('User2', 'pascal-case')).toBe('User2');
      expect(transformResolverFileName('API2Key', 'pascal-case')).toBe('API2Key');
    });
  });

  describe('kebab-case', () => {
    it('should convert PascalCase to kebab-case', () => {
      expect(transformResolverFileName('User', 'kebab-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'kebab-case')).toBe('user-profile');
      expect(transformResolverFileName('APIKey', 'kebab-case')).toBe('api-key');
    });

    it('should handle single character names', () => {
      expect(transformResolverFileName('A', 'kebab-case')).toBe('a');
    });

    it('should handle names with numbers', () => {
      expect(transformResolverFileName('User2', 'kebab-case')).toBe('user2');
      expect(transformResolverFileName('API2Key', 'kebab-case')).toBe('api2-key');
    });

    it('should handle already kebab-cased names', () => {
      expect(transformResolverFileName('user-profile', 'kebab-case')).toBe('user-profile');
    });

    it('should handle camelCase names', () => {
      expect(transformResolverFileName('userProfile', 'kebab-case')).toBe('user-profile');
      expect(transformResolverFileName('myAPIKey', 'kebab-case')).toBe('my-api-key');
    });

    it('should handle names with underscores', () => {
      expect(transformResolverFileName('user_profile', 'kebab-case')).toBe('user-profile');
      expect(transformResolverFileName('API_KEY', 'kebab-case')).toBe('api-key');
    });

    it('should handle names with spaces', () => {
      expect(transformResolverFileName('User Profile', 'kebab-case')).toBe('user-profile');
      expect(transformResolverFileName('API Key', 'kebab-case')).toBe('api-key');
    });
  });

  describe('camel-case', () => {
    it('should convert to camelCase', () => {
      expect(transformResolverFileName('User', 'camel-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'camel-case')).toBe('userProfile');
      expect(transformResolverFileName('APIKey', 'camel-case')).toBe('apiKey');
    });

    it('should handle names with spaces', () => {
      expect(transformResolverFileName('User Profile', 'camel-case')).toBe('userProfile');
    });
  });

  describe('capital-case', () => {
    it('should convert to Capital Case', () => {
      expect(transformResolverFileName('User', 'capital-case')).toBe('User');
      expect(transformResolverFileName('UserProfile', 'capital-case')).toBe('User Profile');
      expect(transformResolverFileName('APIKey', 'capital-case')).toBe('Api Key');
    });
  });

  describe('constant-case', () => {
    it('should convert to CONSTANT_CASE', () => {
      expect(transformResolverFileName('User', 'constant-case')).toBe('USER');
      expect(transformResolverFileName('UserProfile', 'constant-case')).toBe('USER_PROFILE');
      expect(transformResolverFileName('APIKey', 'constant-case')).toBe('API_KEY');
    });
  });

  describe('dot-case', () => {
    it('should convert to dot.case', () => {
      expect(transformResolverFileName('User', 'dot-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'dot-case')).toBe('user.profile');
      expect(transformResolverFileName('APIKey', 'dot-case')).toBe('api.key');
    });
  });

  describe('header-case', () => {
    it('should convert to Header-Case', () => {
      expect(transformResolverFileName('User', 'header-case')).toBe('User');
      expect(transformResolverFileName('UserProfile', 'header-case')).toBe('User-Profile');
      expect(transformResolverFileName('APIKey', 'header-case')).toBe('Api-Key');
    });
  });

  describe('lower-case', () => {
    it('should convert to lower case', () => {
      expect(transformResolverFileName('User', 'lower-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'lower-case')).toBe('userprofile');
      expect(transformResolverFileName('APIKey', 'lower-case')).toBe('apikey');
    });
  });

  describe('no-case', () => {
    it('should convert to no case', () => {
      expect(transformResolverFileName('User', 'no-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'no-case')).toBe('user profile');
      expect(transformResolverFileName('APIKey', 'no-case')).toBe('api key');
    });
  });

  describe('path-case', () => {
    it('should convert to path/case', () => {
      expect(transformResolverFileName('User', 'path-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'path-case')).toBe('user/profile');
      expect(transformResolverFileName('APIKey', 'path-case')).toBe('api/key');
    });
  });

  describe('sentence-case', () => {
    it('should convert to Sentence case', () => {
      expect(transformResolverFileName('User', 'sentence-case')).toBe('User');
      expect(transformResolverFileName('UserProfile', 'sentence-case')).toBe('User profile');
      expect(transformResolverFileName('APIKey', 'sentence-case')).toBe('Api key');
    });
  });

  describe('snake-case', () => {
    it('should convert to snake_case', () => {
      expect(transformResolverFileName('User', 'snake-case')).toBe('user');
      expect(transformResolverFileName('UserProfile', 'snake-case')).toBe('user_profile');
      expect(transformResolverFileName('APIKey', 'snake-case')).toBe('api_key');
    });
  });

  describe('title-case', () => {
    it('should convert to Title Case', () => {
      expect(transformResolverFileName('User', 'title-case')).toBe('User');
      expect(transformResolverFileName('UserProfile', 'title-case')).toBe('UserProfile');
      expect(transformResolverFileName('APIKey', 'title-case')).toBe('APIKey');
    });
  });

  describe('upper-case', () => {
    it('should convert to UPPER CASE', () => {
      expect(transformResolverFileName('User', 'upper-case')).toBe('USER');
      expect(transformResolverFileName('UserProfile', 'upper-case')).toBe('USERPROFILE');
      expect(transformResolverFileName('APIKey', 'upper-case')).toBe('APIKEY');
    });
  });

  describe('default behavior', () => {
    it('should default to pascal-case for invalid casing option', () => {
      // @ts-expect-error Testing invalid input
      expect(transformResolverFileName('UserProfile', 'invalid')).toBe('UserProfile');
    });
  });

  describe('edge cases', () => {
    it('should handle empty strings', () => {
      expect(transformResolverFileName('', 'pascal-case')).toBe('');
      expect(transformResolverFileName('', 'kebab-case')).toBe('');
      expect(transformResolverFileName('', 'camel-case')).toBe('');
      expect(transformResolverFileName('', 'upper-case')).toBe('');
    });

    it('should handle special characters', () => {
      expect(transformResolverFileName('User$Profile', 'kebab-case')).toBe('user-profile');
      expect(transformResolverFileName('API@Key', 'kebab-case')).toBe('api-key');
      expect(transformResolverFileName('User$Profile', 'snake-case')).toBe('user_profile');
      expect(transformResolverFileName('API@Key', 'constant-case')).toBe('API_KEY');
    });

    it('should handle mixed case inputs', () => {
      expect(transformResolverFileName('userProfile', 'pascal-case')).toBe('userProfile');
      expect(transformResolverFileName('USER_PROFILE', 'camel-case')).toBe('userProfile');
      expect(transformResolverFileName('user-profile', 'snake-case')).toBe('user_profile');
    });
  });
});
