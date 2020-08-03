import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpAutocompleteComponent } from './dp-autocomplete.component';

describe('DpAutocompleteComponent', () => {
  let component: DpAutocompleteComponent;
  let fixture: ComponentFixture<DpAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
