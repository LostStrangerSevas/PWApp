import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.userService.formModel.reset();
  }

  onSubmit(){
    this.userService.register().subscribe(
      (res: any) => {
        this.toastr.success('Новый пользователь ' + this.userService.formModel.value.Login + ' успешно создан', "Успех регистрации"); 
        this.userService.formModel.reset(); 
        this.router.navigate(['/auth/signin']);             
      },
      err => {
        this.toastr.error(err.error, "Ошибка регистрации"); 
      });
  }

  onCancel(){
    this.router.navigate(['/system/home']);
  }
}
