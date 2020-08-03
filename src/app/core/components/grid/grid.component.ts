import { Component, OnInit, Input } from '@angular/core';
import {GridDefinitions} from './objects/grid-definitions';
import { GridService } from './services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [GridService]
})
export class GridComponent implements OnInit {

  @Input()
  definition: GridDefinitions;

  @Input()
  datasource: [] = [];

  checked = false;
  constructor(private gs: GridService) {
   }

  // constructor(private customerService: CustomerService) { }

  ngOnInit() {
    console.log(this.gs.getEx());
  }
  /*
  this.definition.columns.forEach(column => {
      const fieldName: string = column.fieldname;
      this.datasource.forEach(row => {
        column.values.push(this.getValue(fieldName, row));
      });
    });
    this.result = this.getData(this.definition, this.datasource);
  */
  // gets value of given path and object
  // getValue(path, obj) {
  //   return path.split('.').reduce(function(prev, curr) {
  //       return (prev ? prev[curr] : null);
  //   }, obj || self);
  // }
}
