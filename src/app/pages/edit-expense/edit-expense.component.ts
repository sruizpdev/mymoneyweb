import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css'],
})
export class EditExpenseComponent {
  id: any = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
