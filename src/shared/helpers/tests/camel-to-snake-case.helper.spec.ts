import { camelToSnakeCase } from 'src/shared/helpers/case-formatter.helper';

describe('camelToSnakeCase', () => {
  it('should convert a camel case string to snake case', () => {
    expect(camelToSnakeCase('camelCase')).toBe('camel_case');
    expect(camelToSnakeCase('camelPreCamelCase')).toBe('camel_pre_camel_case');
  });
});
