import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewchildlab1Component } from './viewchildlab1.component';

describe('Viewchildlab1Component', () => {
  let component: Viewchildlab1Component;
  let fixture: ComponentFixture<Viewchildlab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewchildlab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewchildlab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
