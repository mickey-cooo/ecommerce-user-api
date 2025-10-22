import { Controller } from '@nestjs/common';
import { AccountManagerService } from 'src/manager/user/account.manager.service';

@Controller('/')
export class AccountController {
  constructor(private readonly accountManagerService: AccountManagerService) {}
}
