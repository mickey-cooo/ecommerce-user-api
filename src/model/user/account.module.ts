import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entities';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  providers: [],
  exports: [],
})
export class AccountModule {}
