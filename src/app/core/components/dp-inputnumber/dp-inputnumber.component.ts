import { Component, OnInit, Input } from '@angular/core';
import { InputNumberDefinitions, InputNumberProperties } from './objects/inputnumber-definitions';
import { GridColumn } from '../grid/objects/grid-definitions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dp-inputnumber',
  templateUrl: './dp-inputnumber.component.html',
  styleUrls: ['./dp-inputnumber.component.css']
})
export class DpInputnumberComponent implements OnInit {

  constructor() { }

  @Input() definition: InputNumberDefinitions;

  @Input() ngModelDP: any;

  @Input() rowData: any;

  @Input() columnDefinition: GridColumn;

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new InputNumberDefinitions({});
      if (this.columnDefinition.columnParams.params.length > 0) {
        if (this.columnDefinition.columnParams.isKeyExist(InputNumberProperties.prefix)) {
          this.definition.prefix = this.columnDefinition.columnParams.getValueByKey(InputNumberProperties.prefix);
        }

        if (this.columnDefinition.columnParams.isKeyExist(InputNumberProperties.step)) {
          this.definition.step = this.columnDefinition.columnParams.getValueByKey(InputNumberProperties.step);
        }
      }
    }
  }
}
