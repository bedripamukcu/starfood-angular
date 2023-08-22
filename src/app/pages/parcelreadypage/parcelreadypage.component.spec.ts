import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelreadypageComponent } from './parcelreadypage.component';

describe('ParcelreadypageComponent', () => {
  let component: ParcelreadypageComponent;
  let fixture: ComponentFixture<ParcelreadypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelreadypageComponent]
    });
    fixture = TestBed.createComponent(ParcelreadypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
