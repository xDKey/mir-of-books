export const camelToSnakeCase = (string: string): string =>
  string.replaceAll(/([A-Z])/g, '_$1').toLowerCase();
