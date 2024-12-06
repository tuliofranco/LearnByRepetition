import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { WeeksModule } from './modules/weeks/weeks.module';
import { WordsModule } from './modules/words/words.module';
import { StudyModule } from './modules/study/study.module';

@Module({
  imports: [PrismaModule, WeeksModule, WordsModule, StudyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
