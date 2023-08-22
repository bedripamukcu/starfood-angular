import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworderpageComponent } from './neworderpage.component';

describe('NeworderpageComponent', () => {
  let component: NeworderpageComponent;
  let fixture: ComponentFixture<NeworderpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeworderpageComponent]
    });
    fixture = TestBed.createComponent(NeworderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
