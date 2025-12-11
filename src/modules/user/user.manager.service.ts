import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserManagerService {
  constructor(private readonly userService: UserService) {}
}
