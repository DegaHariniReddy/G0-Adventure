import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBillsComponent } from './trip-bills.component';

describe('TripBillsComponent', () => {
  let component: TripBillsComponent;
  let fixture: ComponentFixture<TripBillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripBillsComponent]
    });
    fixture = TestBed.createComponent(TripBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
