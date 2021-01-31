import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TransactionsService } from '../../../../services/transactions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  @Input() transactions;
  @Output() listChange = new EventEmitter<void>();

  constructor(private transactionsService: TransactionsService) {}


  async OnDelete(id: number): Promise<void> {
    await this.transactionsService.delete(id);
    this.listChange.next();
  }
}
