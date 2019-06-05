import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
/*import { UserComponent } from './system/components/user/user.component';
import { RegistrationComponent } from './system/components/user/registration/registration.component';
import { HomeComponent } from './system/components/home/home.component';
import { SigninComponent } from './system/components/user/signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { SystemComponent } from './system/components/system/system.component';*/
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: 'system/home', pathMatch: 'full'},
  {path: 'system', loadChildren: './system/system.module#SystemModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}, 
  {path: 'error', component: ErrorComponent},
  {path: '**', component: NotfoundComponent}
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  /*{ path: '', component: HomeComponent },
  { path: 'system', component: SystemComponent, canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'signin', component: SigninComponent }
    ]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
