import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ITransactions } from 'src/app/interfaces/transactions.interface';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  err;
  id: number;
  header: string;
  transaction: ITransactions = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    gender: 'Male',
    country: '',
    city: '',
    street: '',
    phone: '',
    total_price: '0.00',
    currency: 'NIO',
    cerdit_card_type: 'jcb',
    cerdit_card_number: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transactionsService: TransactionsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Transaction' : 'Edit Transaction';

    if (this.id !== 0 ) {
      this.transaction = await this.transactionsService.getTransaction(this.id);
    }
  }

  back(): void {
    this.router.navigateByUrl('');
  }

  async onSubmit(form): Promise<void> {
    if (form.status === 'INVALID') {
      this.err = 'Please fill all fields.';

      return;
    };

    this.err = null;
    const transition: ITransactions = {
      id: this.id === 0 ? Math.floor((Math.random() * 10000) + 1) : this.id,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      gender: form.value.gender,
      country: form.value.country,
      city: form.value.city,
      street: form.value.street,
      phone: form.value.phone,
      total_price: form.value.total_price,
      currency: form.value.currency,
      cerdit_card_type: form.value.cerdit_card_type,
      cerdit_card_number: form.value.cerdit_card_number,
    };

    if (this.id === 0) {
      await this.transactionsService.add(transition);
    } else {
      await this.transactionsService.update(transition);
    }

    this.router.navigateByUrl('');
  }
}
