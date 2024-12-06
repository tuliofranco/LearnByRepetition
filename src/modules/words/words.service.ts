import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  async getNewWordsForUser(
    limit: number,
  ): Promise<{ id: number; english: string; portuguese: string }[]> {
    return await this.prisma.word.findMany({
      where: {
        weekId: null,
      },
      take: limit,
      orderBy: { createdAt: 'asc' },
    });
  }
}
