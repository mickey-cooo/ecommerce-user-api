import { ApiProperty } from '@nestjs/swagger';

export class AccountResponse {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  nameTh: string;

  @ApiProperty()
  lastNameTh: string;

  @ApiProperty()
  nameEn: string;

  @ApiProperty()
  lastNameEn: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  email: string;
}

export class AccountResponseBodyDTO {
  @ApiProperty()
  account: AccountResponse;
}
