import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementBillsComponent } from './advertisement-bills.component';

describe('AdvertisementBillsComponent', () => {
  let component: AdvertisementBillsComponent;
  let fixture: ComponentFixture<AdvertisementBillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementBillsComponent]
    });
    fixture = TestBed.createComponent(AdvertisementBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
