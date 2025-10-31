import { ForbiddenException, Injectable } from '@nestjs/common';
import { AccountCreateRequestBodyDTO } from 'src/api/user/dto/account.request.dto';
import { AccountResponseBodyDTO } from 'src/api/user/dto/account.response.dto';
import { AccountService } from 'src/model/user/account.service';
import AccountEntity from 'src/model/user/entities/account.entities';
import { LoggerMonitors } from 'src/utils/logger.service';
import { RequestWithAccount } from 'src/utils/util.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class AccountManagerService {
  constructor(private readonly accountService: AccountService) {}

  async createAccount(
    body: AccountCreateRequestBodyDTO,
    req?: RequestWithAccount,
  ): Promise<AccountResponseBodyDTO> {
    const accountEmail = await this.accountService.findByEmail(body.email);
    if (accountEmail) {
      throw new ForbiddenException('Account already exists');
    }

    const newAccount = new AccountEntity();
    newAccount.create({
      nameTh: body.nameTh,
      lastNameTh: body.lastNameTh,
      nameEn: body.nameEn,
      lastNameEn: body.lastNameEn,
      phoneNumber: body.phoneNumber,
      email: body.email,
      createdBy: req?.reqAccount?.uuid,
      token: uuidV4(),
    });

    const savedAccount = await this.accountService.save(newAccount);
    return { account: savedAccount.toResponse() };
  }
}
