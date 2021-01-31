import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './components/transactions/transactions.component';
import { EditComponent } from './components/transactions/components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  },
  {
    path: 'transaction/add/:id',
    component: EditComponent
  },
  {
    path: 'transaction/edit/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
