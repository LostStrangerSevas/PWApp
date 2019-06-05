import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { BalanceComponent } from './components/balance/balance.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../auth/services/auth.guard';

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
    {path: 'balance', component: BalanceComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent}    
    /*{path: 'adverts/treeCategory/:categoryId', component: AdvertComponent},
    {path: 'addAdvert', component: AddAdvertComponent}*/
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}