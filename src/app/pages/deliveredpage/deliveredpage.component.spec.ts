import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredpageComponent } from './deliveredpage.component';

describe('DeliveredpageComponent', () => {
  let component: DeliveredpageComponent;
  let fixture: ComponentFixture<DeliveredpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveredpageComponent]
    });
    fixture = TestBed.createComponent(DeliveredpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
