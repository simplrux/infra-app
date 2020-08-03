import { Component, OnInit, Input } from '@angular/core';
import { InputtextDefinitions, InputTextMode, InputTextProperties } from './objects/inputtext-definitions';
import { GridColumn } from '../grid/objects/grid-definitions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dp-inputtext',
  templateUrl: './dp-inputtext.component.html',
  styleUrls: ['./dp-inputtext.component.css']
})
export class DpInputtextComponent implements OnInit {

  constructor() { }

  inputTextModeEnum = InputTextMode;

  @Input() definition: InputtextDefinitions;

  @Input() ngModelDP: any;

  @Input() rowData: any;

  @Input() columnDefinition: GridColumn;

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new InputtextDefinitions({});
      if (this.columnDefinition.columnParams.params.length > 0) {

        if (this.columnDefinition.columnParams.isKeyExist(InputTextProperties.mode)) {
          this.definition.mode = this.columnDefinition.columnParams.getValueByKey(InputTextProperties.mode);
        }

        if (this.columnDefinition.columnParams.isKeyExist(InputTextProperties.floatMessage)) {
          this.definition.floatMessage = this.columnDefinition.columnParams.getValueByKey(InputTextProperties.floatMessage);
        }
      }
    }
  }
}
