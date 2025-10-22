import { Injectable } from '@nestjs/common';

import { AccountEntity } from './entities/account.entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  public save(data: AccountEntity) {
    return this.accountRepository.save(data);
  }

  public findOne(uuid: string) {
    return this.accountRepository.findOne({ where: { uuid } });
  }

  public delete(uuid: string) {
    return this.accountRepository.delete({ uuid });
  }
}
