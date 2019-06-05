import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { fadeStateTrigger } from 'src/app/shared/animations/fade.animation';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [fadeStateTrigger]
})
export class SigninComponent implements OnInit {

  formModel = {
    Email: '',
    Password: ''
  }
  constructor(
    private userService: UserService, 
    private router: Router, 
    private toastr: ToastrService, 
    private authService: AuthService,
    private title: Title,
    private meta: Meta
    )  {
      title.setTitle('Вход в систему');
      meta.addTags([
        { name: 'keywords', content: 'логин, вход, система'},
        { name: 'description', content: 'Страница для входа в систему'}
      ]);
    }

  ngOnInit() {
    if(localStorage.getItem('token') != null)
      this.router.navigate(['']);
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      (res: any) => {
        this.authService.login();
        localStorage.setItem('token', res.token);
        localStorage.setItem('fullName', res.fullName);   
        localStorage.setItem('Id', res.Id);     
        this.router.navigate(['/system', 'balance']);
      },
      err => {
        if (err.status == 400)
          { this.toastr.error('Некорректная электронная почта или пароль.', 'Аутентификация неудачна'); }
        else if (err.status == 500)
          { this.toastr.error('Ошибка сервера.', 'Аутентификация неудачна'); }
        else
          { console.log(err); }
      }
    );
  }

  onCancel(){
    this.router.navigate(['/system/home']);
  }

}
