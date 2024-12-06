import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WordsService],
  exports: [WordsService], // Exporta o serviço para outros módulos, se necessário
})
export class WordsModule {}
