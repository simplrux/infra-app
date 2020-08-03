import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  ex = [];

  constructor() { }

  getEx() {
    return this.ex;
  }
}
