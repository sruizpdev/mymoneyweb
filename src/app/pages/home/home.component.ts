import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  incomes: any[] = [];
  expenses: any[] = [];
  constructor(private data: SharedService) {}

  refreshExpenses() {
    this.data.getExpenses().subscribe((res) => {
      this.expenses = res;
      console.log(this.expenses);

    });
  }

  ngOnInit() {
    // this.incomes = this.data.getMockData();
    // console.log(this.incomes);
    this.refreshExpenses();

  }
}
