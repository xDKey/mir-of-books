import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/domain/common/database/database.module';

@Module({
  imports: [DatabaseModule],
})
export class CommonModule {}
