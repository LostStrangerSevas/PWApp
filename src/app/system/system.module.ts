import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SystemComponent } from './system.component';
import { BalanceComponent } from './components/balance/balance.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { BalanceService } from '../shared/services/balances.service';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { TransactionNewComponent } from './components/transaction-new/transaction-new.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    MatAutocompleteModule
  ],
  declarations: [
    HomeComponent,
    SystemComponent,
    BalanceComponent,
    HeaderComponent,
    TransactionsListComponent,
    TransactionCardComponent,
    TransactionNewComponent
  ],
  providers: [
    BalanceService
  ]
})
export class SystemModule {}
