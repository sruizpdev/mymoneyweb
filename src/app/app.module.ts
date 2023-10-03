import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { LoginComponent } from './pages/login/login.component';
import { OptionsComponent } from './pages/options/options.component';
import { EditIncomeComponent } from './pages/edit-income/edit-income.component';
import { EditExpenseComponent } from './pages/edit-expense/edit-expense.component';
import { HeaderComponent } from './components/header/header.component';
import { NewExpenseComponent } from './pages/new-expense/new-expense.component';
import { NewIncomeComponent } from './pages/new-income/new-income.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncomesComponent,
    ExpensesComponent,
    LoginComponent,
    OptionsComponent,
    EditIncomeComponent,
    EditExpenseComponent,
    HeaderComponent,
    NewExpenseComponent,
    NewIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
