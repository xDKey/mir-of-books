import { camelToSnakeCase } from 'src/shared/helpers/case-formatter.helper';
import { DefaultNamingStrategy } from 'typeorm';

export class SnakeCaseNamingStrategy extends DefaultNamingStrategy {
  columnName(propertyName: string): string {
    return camelToSnakeCase(propertyName);
  }

  // Convert 'SomeDomainEntity' to 'some_domain'
  tableName(targetName: string, userSpecifiedName?: string): string {
    if (userSpecifiedName) return userSpecifiedName;

    const entityAsSnakeCase =
      targetName[0].toLowerCase() + targetName.replace('Entity', '').slice(1);

    return camelToSnakeCase(entityAsSnakeCase);
  }

  joinColumnName(_relationName: string, referencedColumnName: string): string {
    return this.columnName(referencedColumnName);
  }

  //Method to convert 'SomeDomainEntity' to 'some_domains'
  private convertEntityName(entityName: string): string {
    const tableNameIsCamelCase =
      entityName[0].toLowerCase() +
      entityName.replaceAll('Entity', '').slice(1);
    return camelToSnakeCase(tableNameIsCamelCase);
  }
}
