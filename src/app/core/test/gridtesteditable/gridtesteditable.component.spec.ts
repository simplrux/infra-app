import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridtesteditableComponent } from './gridtesteditable.component';

describe('GridtesteditableComponent', () => {
  let component: GridtesteditableComponent;
  let fixture: ComponentFixture<GridtesteditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridtesteditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridtesteditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
