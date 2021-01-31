import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { ITransactions } from '../interfaces/transactions.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private url = 'http://localhost:4201';
  constructor(private http: HttpClient) { }

  private listChangeSubject = new BehaviorSubject<any>(true);
  public listChangeSubject$ = this.listChangeSubject.asObservable();


  fetchAll(): Observable<ITransactions[]> {
    return this.http.get<ITransactions[]>(this.url)
      .pipe(tap((_) => console.log('fetch Transactions'))
    );
  }

  getTransaction(id: number): Promise<ITransactions> {
    const params = new HttpParams().append('param', String(id));
    return this.http.get<ITransactions>(`${this.url}/getById`, { params }).toPromise();
  }

  add(transition: ITransactions): Promise<ITransactions> {
    return this.http.post<ITransactions>(`${this.url}/transaction/add/0`, transition).toPromise();
  }

  delete(id: number): Promise<ITransactions[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id,
      },
    };

    return this.http.delete<ITransactions[]>(this.url, options).toPromise();
  }


  update(transition: ITransactions): Promise<ITransactions> {
    return this.http.put<ITransactions>(`${this.url}/update`, transition).toPromise();
  }
}
