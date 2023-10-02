import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { OptionsComponent } from './pages/options/options.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'incomes', component: IncomesComponent},
  { path: 'expenses', component: ExpensesComponent },
  { path: 'options', component: OptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
