export class TransactionCommon {
    constructor(
      public executionDate: string,
      public value: number,     
      public sender: string,
      public recipient: string,
      public recipientId: string,
      public id: number      
    ) {}
  }