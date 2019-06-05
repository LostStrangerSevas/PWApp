import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth.component';


const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: 'signin', component: SigninComponent},
    {path: 'registration', component: RegistrationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
