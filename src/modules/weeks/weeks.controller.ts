import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { WeekService } from './weeks.service';

@Controller('weeks')
export class WeekController {
  constructor(private readonly weekService: WeekService) {}

  @Get()
  async getAllWeeks() {
    return this.weekService.getAllWeeks();
  }

  @Post()
  async createWeek(
    @Body() body: { title: string; startDate: Date; endDate?: Date },
  ) {
    return this.weekService.createWeek(body);
  }

  @Get(':id')
  async getWeekById(@Param('id') id: number) {
    return this.weekService.getWeekById(id);
  }
}
