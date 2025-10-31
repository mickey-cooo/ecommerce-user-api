import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  LOCKED = 'locked',
  DISABLED = 'disabled',
  DELETED = 'deleted',
}

@Entity('account')
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({
    type: 'varchar',
  })
  nameTh: string;

  @Column({
    type: 'varchar',
  })
  lastNameTh: string;

  @Column({
    type: 'varchar',
  })
  nameEn: string;

  @Column({
    type: 'varchar',
  })
  lastNameEn: string;

  @Column({
    type: 'varchar',
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: true,
    default: null,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.INACTIVE,
  })
  status: AccountStatus;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  createdAt: Date;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  createdBy: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt: Date;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  updatedBy: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  token: string;

  public create(params: AccountCreateParams) {
    this.nameTh = params.nameTh;
    this.lastNameTh = params.lastNameTh;
    this.nameEn = params.nameEn;
    this.lastNameEn = params.lastNameEn;
    this.phoneNumber = params.phoneNumber;
    this.email = params.email;
    this.createdBy = params.createdBy;
    this.token = params.token;
  }

  public toResponse() {
    return {
      uuid: this.uuid,
      nameTh: this.nameTh,
      lastNameTh: this.lastNameTh,
      nameEn: this.nameEn,
      lastNameEn: this.lastNameEn,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
  }
}

export interface AccountCreateParams {
  nameTh: string;
  lastNameTh: string;
  nameEn: string;
  lastNameEn: string;
  phoneNumber: string;
  email: string;
  createdBy: string;
  token: string;
}

export default AccountEntity;
