export class UserUse {
    constructor(
      public FirstName: string,
      public LastName: string,
      public MiddleName: string,
      public UserName: string,
      public Password: string,
      public Email: string,
      public Description: string,
      public FullName: string,      
      public Id?: string
    ) {}
  }