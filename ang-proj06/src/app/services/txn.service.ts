import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TxnService {

  txnApi: string;

  constructor(private httpClient: HttpClient) {
    this.txnApi = environment.txnsApi;
  }

  getAll(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.txnApi);
  }

  getAllByUser(userId:number): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.txnApi}?userId=${userId}`);
  }

  getById(id: number): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`${this.txnApi}/${id}`);
  }

  add(txn: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.txnApi, txn);
  }

  update(txn: Transaction) : Observable<Transaction> {
    return this.httpClient.put<Transaction>(`${this.txnApi}/${txn.id}`, txn);
  }

  deleteById(id: number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.txnApi}/${id}`);
  }
}
}
