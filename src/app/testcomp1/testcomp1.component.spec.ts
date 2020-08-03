import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomp1Component } from './testcomp1.component';

describe('Testcomp1Component', () => {
  let component: Testcomp1Component;
  let fixture: ComponentFixture<Testcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
