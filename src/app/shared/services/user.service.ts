import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private fb:FormBuilder, 
    private http: HttpClient,
    private authservice: AuthService) { }

  readonly url = environment.linkWebapi;

  formModel = this.fb.group({    
    Login: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Passwords : this.fb.group({ 
      Password : ['', [Validators.required, Validators.minLength(6)]],
      PasswordConfirm : ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: this.comparePasswords}),
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    MiddleName: ['', [Validators.required]]
  });

  //Валидатор совпадения значений в Password и PasswordConfirm
  comparePasswords(fb: FormGroup){
    let confirmPasswordCtrl = fb.get('PasswordConfirm');   
    if(confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors){
      if(fb.get('Password').value != confirmPasswordCtrl.value)
        confirmPasswordCtrl.setErrors({passwordMismatch: true});
      else
        confirmPasswordCtrl.setErrors(null);
    }
  }

  register(){
    const user = new User(this.formModel.value.FirstName,
      this.formModel.value.LastName,
      this.formModel.value.MiddleName,
      this.formModel.value.Login, 
      this.formModel.value.Passwords.Password, 
      this.formModel.value.Passwords.PasswordConfirm, 
      this.formModel.value.Email,
      '', '', '');
    return this.http.post(this.url + '/Users/RegisterUser', user);
  }

  login(formData) {
    return this.authservice.tryLogIn(formData);
    //return this.http.post(this.url + '/Users/SignIn', formData);
  }

  getUserProfile() {
    return this.http.get(this.url + '/UserProfile');
  }

  getUsers() {
    return this.http.get(this.url + '/users/GetUsers');
  }
}