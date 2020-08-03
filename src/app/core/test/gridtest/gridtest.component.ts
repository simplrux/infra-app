import { Component, OnInit } from '@angular/core';
import { GridDefinitions, GridColumnType, GridColumnParams } from '../../components/grid/objects/grid-definitions';
import { GridColumn } from '../../components/grid/objects/grid-definitions';
import { Customer } from '../../../events/models/customer';
import { CustomerService } from '../../../events/services/customerservice';
import { InputNumberProperties } from '../../components/dp-inputnumber/objects/inputnumber-definitions';
import { InputTextProperties } from '../../components/dp-inputtext/objects/inputtext-definitions';
import { CalendarProperties } from '../../components/dp-calendar/objects/calendar-definitions';

@Component({
  selector: 'app-gridtest',
  templateUrl: './gridtest.component.html',
  styleUrls: ['./gridtest.component.css']
})
export class GridtestComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  gridDefinition: GridDefinitions;
  customers: Customer[];
  gridColumnTypeEnum = GridColumnType;

  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();
    this.gridDefinition = new GridDefinitions({ dataKey: 'id', columns: columns });
    this.SetData();
  }

  getColumns() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    columnParams1.addParam(InputTextProperties.mode, 'float');
    columnParams1.addParam(InputTextProperties.floatMessage, 'Name');
    const column1 = new GridColumn({headername: 'Customer Name', fieldname: 'name', columnParams: columnParams1});
    columns.push(column1);

    const column2 = new GridColumn({ headername: 'Is Active', fieldname: 'IsActive', type: this.gridColumnTypeEnum.checkbox });
    columns.push(column2);

    const column3 = new GridColumn({ headername: 'Remarks', fieldname: 'remarksImg', type: this.gridColumnTypeEnum.image });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    columnParams4.addParam(InputNumberProperties.prefix, '$');
    columnParams4.addParam(InputNumberProperties.step, '2');
    const column4 = new GridColumn({headername: 'Orders', fieldname: 'NumOrderInMonth', type: this.gridColumnTypeEnum.inputnumber,
    columnParams: columnParams4});
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'Date', fieldname: 'Date1', type: this.gridColumnTypeEnum.calendar,
      columnParams: columnParams5
    });
    columns.push(column5);

    const column6 = new GridColumn({
      headername: 'brand', fieldname: 'brand',
      type: this.gridColumnTypeEnum.autocomplete,
      columnParams: columnParams5
    });
    columns.push(column6);
    return columns;
  }

  async SetData() {
    this.customers = await this.customerService.getCustomersLarge();
  }

}
