import { Component, OnInit, Input } from '@angular/core';
import {CheckboxDefinitions} from './objects/checkbox-definitions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dp-checkbox',
  templateUrl: './dp-checkbox.component.html',
  styleUrls: ['./dp-checkbox.component.css'],
})
export class DpCheckboxComponent implements OnInit {

  @Input() definition: CheckboxDefinitions;
  @Input() ngModelDP: any;
  @Input() rowData: any;
  @Input() columnDefinition: any;

  constructor() { }

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new CheckboxDefinitions({});
      if (this.columnDefinition.columnParams.length > 0) {
        let i = 0;
        while (i < this.columnDefinition.columnParams.length) {
          if (this.columnDefinition.columnParams[i].key === 'binary') {
            this.definition.binary = this.columnDefinition.columnParams[i].value;
          }

          if (this.columnDefinition.columnParams[i].key === 'disabled') {
            this.definition.disabled = this.columnDefinition.columnParams[i].value;
          }
          i++;
        }
      }
    }
  }

}
