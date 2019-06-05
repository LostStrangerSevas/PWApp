import { UserUse } from './userUse.model';

export class Balance {
    constructor(
      public UserId: string,
      public ModifiedDate: Date,
      public Value: number,
      public Id?: number,
      public User?: UserUse
    ) {}
  }