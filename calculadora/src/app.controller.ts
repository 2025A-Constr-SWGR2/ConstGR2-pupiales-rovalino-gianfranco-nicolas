import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('database')
  getDatabaseConnection() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      DB_HOST: this.configService.get('DB_HOST'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      DB_PASSWORD: this.configService.get('DB_PASSWORD'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      DB_NAME: this.configService.get('DB_NAME'),
      DB_USER: process.env.DB_USER,
    };
  }
}
