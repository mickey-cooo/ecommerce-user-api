import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  LOCKED = 'locked',
  DELETED = 'deleted',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  firstNameTh: string;

  @Column({
    type: 'varchar',
  })
  lastNameTh: string;

  @Column({
    type: 'varchar',
  })
  firstNameEn: string;

  @Column({
    type: 'varchar',
  })
  lastNameEn: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  addressDetail: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  createdBy: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  createdAt: Date;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  updatedBy: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt: Date;
}
