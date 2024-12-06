import { Module } from '@nestjs/common';
import { WeekService } from './weeks.service';
import { WeekController } from './weeks.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WeekController],
  providers: [WeekService],
})
export class WeeksModule {}
