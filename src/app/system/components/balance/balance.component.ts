import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { TransactionsService } from '../../../shared/services/transactions.service';
import { BalanceService } from '../../../shared/services/balances.service';
import { Balance } from '../../../shared/models/balance.model';
import { TransactionCommon } from '../../../shared/models/transactionCommon.model';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent implements OnInit, OnDestroy {
  isCreating = false;
  isEmpty = true;
  isFilterVisible = false;
  isLoaded = false;
  sub1: Subscription;
  routeSub: Subscription;

  balanceCurrent: Balance = new Balance('', new Date(), 0);
  transactions: TransactionCommon[] = [];
  filteredTransactions: TransactionCommon[] = [];
  users: User[] = [];
  
  date: Date = new Date();
  newTransaction: TransactionCommon = new TransactionCommon('', 0, '', '', '', 0);

  constructor(private route: ActivatedRoute,
    private balancesService: BalanceService,
    private transactionsService: TransactionsService,
    private userService: UserService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.isLoaded = false; 
    this.routeSub = this.route.params.subscribe(
      params => {         
        this.sub1 = combineLatest(
          this.balancesService.getBalanceByUserId(),
          this.transactionsService.getTransactionsByUserId(),
          this.userService.getUsers()
        ).pipe(
          map((data: [Balance, TransactionCommon[], User[]]) => {
            return data;               
          })).subscribe( dataret => {
            this.balanceCurrent = dataret[0];
            this.transactions = dataret[1];
            this.users = dataret[2];
            this.setOriginalTransactions();   
            this.isEmpty = this.transactions.length <= 0;        
            this.isLoaded = true;                            
          });         
      });
  }

  private setOriginalTransactions() {
    this.filteredTransactions = this.transactions;
  }

  private toggleFilterVisibility(dir: boolean) {
    this.isFilterVisible = dir;
  }

  openFilter() {
    this.toggleFilterVisibility(!this.isFilterVisible);
  }

  FilterCancel() {
    this.toggleFilterVisibility(false);
    this.setOriginalTransactions();
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
    if (this.routeSub) { this.routeSub.unsubscribe(); }
  }

  createTransaction() {
    this.newTransaction = new TransactionCommon('', 0, '', '', '', 0);
    this.isCreating = true;
  }

  cancelingAdd() {
    this.isCreating = false;
  }

  isCreatingDone() {
    this.refreshData();
    this.isCreating = false;
  }

  repeatingTransaction(transaction: TransactionCommon) {
    this.newTransaction = transaction;
    this.isCreating = true;
  }
}
