import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionCommon } from '../../../shared/models/transactionCommon.model';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  @Input() transactions: TransactionCommon[] = [];
  @Output() repeat = new EventEmitter<TransactionCommon>();

  constructor() { }

  ngOnInit() {
  }
  
  repeatingTransaction(transaction: TransactionCommon) {
    this.repeat.emit(transaction);
  }
}
