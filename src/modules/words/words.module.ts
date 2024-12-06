import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { PrismaModule } from '../prisma/prisma.module';
import { WordsController } from './words.controller';

@Module({
  imports: [PrismaModule],
  providers: [WordsService],
  controllers: [WordsController],
  exports: [WordsService], // Exporta o serviço para outros módulos, se necessário
})
export class WordsModule {}
