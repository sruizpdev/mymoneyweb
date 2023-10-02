import { Injectable } from '@angular/core';
import { MOCK_DATA } from '../mock/data';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  getMockData() {
    return MOCK_DATA;
  }
}
