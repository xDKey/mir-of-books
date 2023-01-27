import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/domain/common/config/config.module';
import { DatabaseModule } from 'src/domain/common/database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule],
})
export class CommonModule {}
