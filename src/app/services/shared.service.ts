import { Injectable } from '@angular/core';
import { MOCK_DATA } from '../mock/data';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private fs: Firestore) {}

  getExpenses() {
    let expensesCollection = collection(this.fs, 'expenses');
    return collectionData(expensesCollection, { idField: 'id' });
  }
  getMockData() {
    return MOCK_DATA;
  }
}
