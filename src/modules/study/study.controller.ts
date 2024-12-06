import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { StudyService } from './study.service';

@Controller('study')
export class StudyController {
  constructor(private readonly studyService: StudyService) {}
  @Get('practice/word')
  async getWordForPractice() {
    return await this.studyService.getWordForPractice();
  }

  @Post('practice/answer/:wordId')
  async checkPracticeAnswer(
    @Param('wordId') wordId: number,
    @Body('answer') answer: string,
  ) {
    return await this.studyService.checkPracticeAnswer(wordId, answer);
  }

  @Get('praticar/word')
  async getWordForPraticar() {
    return await this.studyService.getWordForPraticar();
  }

  @Post('praticar/answer/:wordId')
  async checkPraticarAnswer(
    @Param('wordId') wordId: number,
    @Body('answer') answer: string,
  ) {
    return await this.studyService.checkPraticarAnswer(wordId, answer);
  }
}
