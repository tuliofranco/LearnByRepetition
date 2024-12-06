import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WeekService {
  constructor(private prisma: PrismaService) {}

  // Obter todas as semanas
  async getAllWeeks() {
    return this.prisma.week.findMany({
      include: { words: true }, // Inclui palavras associadas, se necessário
    });
  }

  // Criar uma nova semana
  async createWeek(data: { title: string; startDate: Date; endDate?: Date }) {
    return this.prisma.week.create({
      data,
    });
  }

  // Obter detalhes de uma semana por ID
  async getWeekById(id: number | string) {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    if (isNaN(numericId)) {
      throw new Error('Invalid ID: must be a number');
    }
    return this.prisma.week.findUnique({
      where: {
        id: numericId,
      },
      include: {
        words: true, // Inclui as palavras associadas à semana
      },
    });
  }
}
