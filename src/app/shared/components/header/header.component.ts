import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fullName = '';
  isAuthorized = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fullName = localStorage.getItem('fullName');
    this.isAuthorized =  localStorage.getItem('isAuthenticated') == 'true';
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['auth/signin']);
  }

  onLogin() {
    this.onLogout();
  }

}
