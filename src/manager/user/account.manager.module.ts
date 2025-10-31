import { Module } from '@nestjs/common';
import { AccountApiController } from 'src/api/user/account.controller';
import { AccountManagerService } from './account.manager.service';
import { AccountModule } from 'src/model/user/account.module';

@Module({
  imports: [AccountModule],
  providers: [AccountManagerService],
  exports: [AccountManagerService],
})
export class AccountManagerModule {}
