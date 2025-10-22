import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiProperty()
  getHello(): string {
    return this.appService.getHello();
  }
}
