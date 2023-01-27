import { Module } from '@nestjs/common';
import { CommonModule } from 'src/domain/common/common.module';

@Module({
  imports: [CommonModule],
})
export class AppModule {}
