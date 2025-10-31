import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString } from 'class-validator';

export class AccountCreateRequestBodyDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  nameTh: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastNameTh: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  nameEn: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastNameEn: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}

export class AccountUpdateRequestDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  nameTh: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastNameTh: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  nameEn: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastNameEn: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}

export class AccountRequestParamsDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  uuid: string;
}
