import { Controller } from '@nestjs/common';
import { UserManagerService } from './user.manager.service';

@Controller('user')
export class UserController {
  constructor(private readonly userManagerService: UserManagerService) {}
}
