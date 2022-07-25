import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  payment:Payment = new Payment();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public paymentservice:PaymentService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      noc: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      cardno: ['',[ Validators.required]],
      expiry: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      state:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    this.payment=this.registerForm.value;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
  }
  
  this.save();

  }

  save() {

    this.paymentservice.savePayment(this.payment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.payment= new Payment();
    // this.address=new Address();
  
    this.gotoList();
  }

  gotoList() {

    this.router.navigate(["display"]);

  }

}
