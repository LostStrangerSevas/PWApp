import { BalanceStorage } from './balancestorage.model';

export class Transaction {
    constructor(
      public ExecutionDate: Date,
      public Value: number,     
      public BalanceStorages: BalanceStorage[],
      public Id?: number      
    ) {}
  }