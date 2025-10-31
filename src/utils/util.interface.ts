import AccountEntity from 'src/model/user/entities/account.entities';

export interface RequestWithAccount extends Request {
  reqAccount?: AccountEntity;
}
