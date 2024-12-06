import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  async getAllWords() {
    const words = await this.prisma.word.findMany();

    return words;
  }

  async getWordsByWeek(weekId: number) {
    return await this.prisma.word.findMany({
      where: { weekId },
      orderBy: { createdAt: 'asc' },
    });
  }
}
