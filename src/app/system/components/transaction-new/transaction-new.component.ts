import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../../../shared/models/user.model';
import { TransactionAdd } from '../../../shared/models/transactionAdd.model';
import { TransactionsService } from '../../../shared/services/transactions.service';
import { TransactionCommon } from 'src/app/shared/models/transactionCommon.model';

@Component({
  selector: 'app-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.css']
})
export class TransactionNewComponent implements OnInit {

  @Input() users: User[] = [];
  @Input() balance: number = 0;
  @Input() transaction: TransactionCommon = new TransactionCommon('', 0, '', '', '', 0);
  @Output() cancelAdd = new EventEmitter<String>();
  @Output() creatingDone = new EventEmitter<String>();
  
  isLoaded = false;
  sub1: Subscription;

  formModel = this.fb.group({
    id: ['', Validators.required],
    value: ['', Validators.required]
  });

  constructor(private transactionsService: TransactionsService,
              private router: Router,
              private fb:FormBuilder) { }

  ngOnInit() {    
    this.formModel = this.fb.group({
      id: ['', Validators.required],
      value: ['', [Validators.required, Validators.min(1), Validators.max(this.balance)]]
    });
    this.formModel.reset();
    //this.formModel.value.id = this.transaction.recipientId;
    //this.formModel.value.value = this.transaction.value;
    this.formModel.controls['id'].setValue(this.transaction.recipientId);
    this.formModel.controls['value'].setValue(this.transaction.value);
    this.isLoaded = true;
  }

  onSubmit() {
    const newTransaction = new TransactionAdd(this.formModel.value.id, this.formModel.value.value);
    this.sub1 = this.transactionsService.addTransaction(newTransaction)
      .subscribe((cnt: number) => {
          if (cnt > 0) {
            this.creatingDone.emit();
          } else {
            throw new Error('От сервера не получен ответ об удачном сохранении новой транзакции.');
          }
        }, error => {
          console.log(error);
          this.router.navigate(['/error'], error);
        }
      );
  }
  
  onCancel() {
    this.cancelAdd.emit();
  }
 }
