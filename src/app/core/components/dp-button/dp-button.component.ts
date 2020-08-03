import { Component, OnInit, Input } from '@angular/core';
import { ButtonDefinitions } from './objects/button-definitions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dp-button',
  templateUrl: './dp-button.component.html',
  styleUrls: ['./dp-button.component.css']
})
export class DpButtonComponent implements OnInit {

  constructor() { }

  @Input()
  definition: ButtonDefinitions;

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new ButtonDefinitions({ label: 'Click' });
    }
  }

  clickMe() { }

}
