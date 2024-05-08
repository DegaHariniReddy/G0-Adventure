import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-profitn-losss',
  templateUrl: './trip-profitn-losss.component.html',
  styleUrls: ['./trip-profitn-losss.component.css']
})
export class TripProfitnLosssComponent {
  tripPLform!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formInit();
  }
  formInit() {
    this.tripPLform = this.fb.group({
      tripId: [''],
      tripName: ['', Validators.required],
      tripDate: ['', Validators.required],
      quatedAmt: ['', Validators.required],
      tripLead: ['', Validators.required],
      leadCharges: ['', Validators.required],
      stayBill: ['', Validators.required],
      vechileCharges: ['', Validators.required],
      otherExpensive: ['', Validators.required],

    })
  }
}
