import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicaitonNavigationBarComponent } from './applicaiton-navigation-bar.component';

describe('ApplicaitonNavigationBarComponent', () => {
  let component: ApplicaitonNavigationBarComponent;
  let fixture: ComponentFixture<ApplicaitonNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicaitonNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicaitonNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
