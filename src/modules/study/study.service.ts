import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudyService {
  constructor(private prisma: PrismaService) {}

  async getWordForPractice(): Promise<{ id: number; english: string }> {
    const words = await this.prisma.word.findMany();
    const scoredWords = words.map((w) => {
      const score = w.correctCount - w.wrongCount;
      return { ...w, score };
    });
    scoredWords.sort((a, b) => a.score - b.score);
    const chosenWord = scoredWords[0];
    return { id: chosenWord.id, english: chosenWord.english };
  }

  async checkPracticeAnswer(wordId: number, answer: string): Promise<boolean> {
    const word = await this.prisma.word.findUnique({ where: { id: wordId } });

    if (!word) {
      throw new Error('Word not found');
    }
    const correct = word.portuguese.toLowerCase() === answer.toLowerCase();
    await this.prisma.word.update({
      where: { id: wordId },
      data: {
        correctCount: {
          increment: correct ? 1 : 0,
        },
        wrongCount: {
          increment: correct ? 0 : 1,
        },
      },
    });

    return correct;
  }

  async getWordForPraticar(): Promise<{ id: number; portuguese: string }> {
    const words = await this.prisma.word.findMany();
    const scoredWords = words.map((w) => {
      const score = w.correctCount - w.wrongCount;
      return { ...w, score };
    });
    scoredWords.sort((a, b) => a.score - b.score);
    const chosenWord = scoredWords[0];
    return { id: chosenWord.id, portuguese: chosenWord.portuguese };
  }

  async checkPraticarAnswer(wordId: number, answer: string): Promise<boolean> {
    const word = await this.prisma.word.findUnique({ where: { id: wordId } });
    if (!word) {
      throw new Error('Word not found');
    }
    const correct = word.english.toLowerCase() === answer.toLowerCase();
    await this.prisma.word.update({
      where: { id: wordId },
      data: {
        correctCount: {
          increment: correct ? 1 : 0,
        },
        wrongCount: {
          increment: correct ? 0 : 1,
        },
      },
    });

    return correct;
  }
}
