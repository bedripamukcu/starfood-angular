import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedpageComponent } from './acceptedpage.component';

describe('AcceptedpageComponent', () => {
  let component: AcceptedpageComponent;
  let fixture: ComponentFixture<AcceptedpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedpageComponent]
    });
    fixture = TestBed.createComponent(AcceptedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
