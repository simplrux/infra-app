import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpInputtextComponent } from './dp-inputtext.component';

describe('DpInputtextComponent', () => {
  let component: DpInputtextComponent;
  let fixture: ComponentFixture<DpInputtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpInputtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpInputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
