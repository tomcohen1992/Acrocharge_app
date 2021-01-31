import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionsService } from './services/transactions.service';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './components/transactions/components/edit/edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/transactions/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    EditComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TransactionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
