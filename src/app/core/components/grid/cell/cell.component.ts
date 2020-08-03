import { Component, OnInit, Input } from '@angular/core';
import { GridColumn, GridColumnType } from '../objects/grid-definitions';
import { CheckboxDefinitions } from '../../dp-checkbox/objects/checkbox-definitions';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input()
  row: any;

  @Input()
  column: GridColumn;

  gridColumnTypeEnum = GridColumnType;

  constructor() {}

  createCheckboxDefinition(column: GridColumn) {
    const checkboxDefinition = new CheckboxDefinitions({ binary: true });
    return checkboxDefinition;
  }

  ngOnInit(): void {}
}
