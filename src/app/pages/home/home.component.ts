import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  incomes: any[] = [];

  constructor(private data: SharedService) {}

  ngOnInit() {
    this.incomes = this.data.getMockData();
    console.log(this.incomes);

  }
}
