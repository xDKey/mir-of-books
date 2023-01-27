import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const databaseUser = configService.get('DATABASE_USER');
        const databasePassword = configService.get('DATABASE_PASSWORD');
        const databasePort = configService.get('DATABASE_PORT');
        const databaseName = configService.get('DATABASE_NAME');
        const uri = `mongodb://${databaseUser}:${databasePassword}@${databaseName}:/${databasePort}?authSource=admin`;

        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
