const environment = process.env;

const ormConfig = {
  type: 'mongodb',
  host: environment.DATABASE_HOST,
  port: Number(environment.DATABASE_PORT),
  username: environment.DATABASE_USER,
  password: environment.DATABASE_PASSWORD,
  database: environment.DATABASE_NAME,
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.{ts,js}'],
  entities: ['dist/**/*.entity.{ts,js}'],
  logging: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
  keepConnectionAlive: true,
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = ormConfig;
