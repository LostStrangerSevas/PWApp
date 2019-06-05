import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionCommon } from '../../../shared/models/transactionCommon.model';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent implements OnInit {

  @Input() transaction: TransactionCommon;
  @Input() idx: number;
  @Output() repeat = new EventEmitter<TransactionCommon>();

  fullName: string = '';

  constructor() { }

  ngOnInit() {
    this.fullName = localStorage.getItem('fullName');
  }

  repeatTransaction() {
    this.repeat.emit(this.transaction);
  }

}
