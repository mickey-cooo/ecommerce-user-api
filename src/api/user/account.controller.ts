import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountManagerService } from 'src/manager/user/account.manager.service';
import { AccountCreateRequestBodyDTO } from './dto/account.request.dto';
import { LoggerMonitors } from 'src/utils/logger.service';
import { AccountResponseBodyDTO } from './dto/account.response.dto';
import { RequestWithAccount } from 'src/utils/util.interface';

ApiTags('Account');
@Controller('/')
export class AccountApiController {
  constructor(
    private readonly accountManagerService: AccountManagerService,
    private readonly loggerMonitors: LoggerMonitors,
  ) {}

  @Post('account')
  @UseGuards()
  @HttpCode(200)
  @ApiBearerAuth()
  @ApiResponse({ type: AccountCreateRequestBodyDTO })
  public async createAccount(
    @Body() body: AccountCreateRequestBodyDTO,
    @Req() req: RequestWithAccount,
  ): Promise<AccountResponseBodyDTO> {
    try {
      return await this.accountManagerService.createAccount(body, req);
    } catch (e) {
      this.loggerMonitors.error(e);
    }
  }
}
