import { Module } from '@nestjs/common';
import { AccountManagerModule } from 'src/manager/user/account.manager.module';
import { AccountApiController } from './account.controller';
import { LoggerModule } from 'src/utils/logger.module';

@Module({
  imports: [AccountManagerModule, LoggerModule],
  controllers: [AccountApiController],
})
export class AccountApiModule {}
