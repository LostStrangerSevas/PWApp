import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
 
    readonly url = environment.linkWebapi;
    
    constructor(private http: HttpClient,) {  }

    private isAuthenticated = false;

    login() {
        this.isAuthenticated = true;
        window.localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
    }

    logout() {
        this.isAuthenticated = false;
        /*window.localStorage.clear();*/
        window.localStorage.setItem('isAuthenticated', this.isAuthenticated.toString());
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('fullName');
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

    tryLogIn(user: any) {
        return this.http.post(this.url + '/Users/SignIn', user);
    }

}
