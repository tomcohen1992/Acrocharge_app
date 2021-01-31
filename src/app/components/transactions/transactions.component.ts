import { Component, OnInit } from '@angular/core';
import { ITransactions } from '../../interfaces/transactions.interface';
import { TransactionsService } from '../../services/transactions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions$: Observable<ITransactions[]>;
  constructor(private transactionsService: TransactionsService) { }

  async ngOnInit(): Promise<void> {
    await this.listChangeHandler();
  }

  async listChangeHandler(): Promise<void> {
    this.transactions$ = await this.transactionsService.fetchAll();
  }
}
