import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-bills',
  templateUrl: './trip-bills.component.html',
  styleUrls: ['./trip-bills.component.css']
})
export class TripBillsComponent {
  tripbillsform!:FormGroup;
  constructor(private fb:FormBuilder){
    this.formInit();
    }
    formInit(){
      this.tripbillsform=this.fb.group({
        billId:[''],
        transctionId:['', Validators.required],
        tripId: ['', Validators.required],
        tripName:['', Validators.required],
        billAmount: ['', Validators.required],
        paidAmount:['', Validators.required],
        dueAmount:['', Validators.required],
        totalAmount:['', Validators.required],
        agentId:['', Validators.required],
        agentName:['', Validators.required],
        agentType:['', Validators.required],
      })

    }
}
