import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认hello')
export class AppController {
  @Get()
  getHello(): string {
    return 'hello';
  }
}
