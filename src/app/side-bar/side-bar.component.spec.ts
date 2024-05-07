import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIdeBarComponent } from './side-bar.component';

describe('SIdeBarComponent', () => {
  let component: SIdeBarComponent;
  let fixture: ComponentFixture<SIdeBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SIdeBarComponent]
    });
    fixture = TestBed.createComponent(SIdeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
