import { Component, OnInit } from '@angular/core';
import { GridDefinitions, GridColumnType } from '../../components/grid/objects/grid-definitions';
import { GridColumn } from '../../components/grid/objects/grid-definitions';
import { Customer } from '../../../events/models/customer';
import { CustomerService } from '../../../events/services/customerservice';

@Component({
  selector: 'app-gridtesteditable',
  templateUrl: './gridtesteditable.component.html',
  styleUrls: ['./gridtesteditable.component.css']
})
  export class GridtesteditableComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  gridDefinition: GridDefinitions;
  customers: Customer[];
  gridColumnTypeEnum = GridColumnType;

  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();
    this.gridDefinition = new GridDefinitions({dataKey: 'id', columns: columns, editMode: 'row'});
    this.SetData();
  }

  getColumns() {
    const columns: GridColumn[] = [];
    const column1 = new GridColumn({headername: 'Customer Name', fieldname: 'name'});
    columns.push(column1);

    const column2 = new GridColumn({headername: 'Is Active', fieldname: 'IsActive', type: this.gridColumnTypeEnum.checkbox});
    columns.push(column2);

    const column3 = new GridColumn({headername: 'Remarks', fieldname: 'remarksImg', type: this.gridColumnTypeEnum.image});
    columns.push(column3);

    const column4 = new GridColumn({headername: 'Orders', fieldname: 'NumOrderInMonth', type: this.gridColumnTypeEnum.inputnumber});
    columns.push(column4);

    return columns;
  }

  async SetData() {
    this.customers =  await this.customerService.getCustomersLarge();
  }
}
