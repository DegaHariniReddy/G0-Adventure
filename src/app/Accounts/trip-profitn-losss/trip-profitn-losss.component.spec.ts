import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripProfitnLosssComponent } from './trip-profitn-losss.component';

describe('TripProfitnLosssComponent', () => {
  let component: TripProfitnLosssComponent;
  let fixture: ComponentFixture<TripProfitnLosssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripProfitnLosssComponent]
    });
    fixture = TestBed.createComponent(TripProfitnLosssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
