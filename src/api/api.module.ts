import { Module } from '@nestjs/common';
import { AccountApiModule } from './user/account.module';
import { LoggerModule } from 'src/utils/logger.module';

@Module({
  imports: [AccountApiModule, LoggerModule],
})
export class ApiModule {}
