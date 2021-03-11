import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen582190Component } from './screen582190.component';

describe('Screen582190Component', () => {
  let component: Screen582190Component;
  let fixture: ComponentFixture<Screen582190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen582190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen582190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});