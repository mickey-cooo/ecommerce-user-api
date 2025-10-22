import { ForbiddenException, Injectable } from '@nestjs/common';
import { AccountService } from 'src/model/user/account.service';

@Injectable()
export class AccountManagerService {
  constructor(private readonly accountService: AccountService) {}

  async createAccount(data: any): Promise<any> {
    const account = await this.accountService;
    if (account) {
      throw new ForbiddenException('Account already exists');
    }
  }
}
