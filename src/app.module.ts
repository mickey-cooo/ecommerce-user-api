import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './store/db/database.config';

@Module({
  imports: [DatabaseConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
