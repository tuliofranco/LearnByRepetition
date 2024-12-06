import { Controller, Get, Query } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get('new')
  async getNewWords(@Query('limit') limit: number) {
    return this.wordsService.getNewWordsForUser(limit);
  }
}
