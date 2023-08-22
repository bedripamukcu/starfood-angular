import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedpageComponent } from './completedpage.component';

describe('CompletedpageComponent', () => {
  let component: CompletedpageComponent;
  let fixture: ComponentFixture<CompletedpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedpageComponent]
    });
    fixture = TestBed.createComponent(CompletedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
