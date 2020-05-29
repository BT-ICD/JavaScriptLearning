import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTypeListComponent } from './server-type-list.component';

describe('ServerTypeListComponent', () => {
  let component: ServerTypeListComponent;
  let fixture: ComponentFixture<ServerTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
