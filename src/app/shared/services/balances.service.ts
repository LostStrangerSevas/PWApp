import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Balance } from '../models/balance.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient) { }

  readonly url = environment.linkWebapi;

  getBalanceByUserId(): Observable<Balance> {
    return this.http.get<Balance>(this.url + "/Balances/GetBalanceByUserId");
  }
}