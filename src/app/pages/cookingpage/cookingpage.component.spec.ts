import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingpageComponent } from './cookingpage.component';

describe('CookingpageComponent', () => {
  let component: CookingpageComponent;
  let fixture: ComponentFixture<CookingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookingpageComponent]
    });
    fixture = TestBed.createComponent(CookingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
