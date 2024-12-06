import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  async getAllWords() {
    return this.wordsService.getAllWords();
  }

  @Get('week/:weekId')
  async getWordsByWeek(@Param('weekId', ParseIntPipe) weekId: number) {
    return this.wordsService.getWordsByWeek(weekId);
  }
}
