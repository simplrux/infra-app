import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpCheckboxComponent } from './dp-checkbox.component';

describe('DpCheckboxComponent', () => {
  let component: DpCheckboxComponent;
  let fixture: ComponentFixture<DpCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
