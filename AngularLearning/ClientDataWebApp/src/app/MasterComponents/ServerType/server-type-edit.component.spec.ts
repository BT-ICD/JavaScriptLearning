import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTypeEditComponent } from './server-type-edit.component';

describe('ServerTypeEditComponent', () => {
  let component: ServerTypeEditComponent;
  let fixture: ComponentFixture<ServerTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
