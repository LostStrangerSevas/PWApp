import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TransactionCommon } from '../models/transactionCommon.model';
import { TransactionAdd } from '../models/transactionAdd.model';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  readonly url = environment.linkWebapi;

  getTransactionsByUserId(): Observable<TransactionCommon[]>{
    return this.http.get<TransactionCommon[]>(this.url + "/Balances/GetTransactionsByUserId");
  }

  addTransaction(transaction: TransactionAdd): Observable<number> {
    return this.http.post<number>(this.url + "/Balances/CreateTransaction", transaction);
  }
}