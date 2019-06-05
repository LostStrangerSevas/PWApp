export class User {
    constructor(
      public FirstName: string,
      public LastName: string,
      public MiddleName: string,
      public Login: string,
      public Password: string,
      public PasswordConfirm: string,
      public Email: string,
      public Description: string,
      public FullName: string,      
      public Id?: string
    ) {}
  }