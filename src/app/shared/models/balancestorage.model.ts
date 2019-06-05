import { UserUse } from './userUse.model';

export class BalanceStorage {
    constructor(
      public TransactionId: number,
      public UserId: string,
      public IsSender: boolean,
      public IsBefore: boolean,
      public Value: number,
      public Id?: number,
      public User?: UserUse
    ) {}
  }