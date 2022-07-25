import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RetailerServiceService } from '../retailer-service.service';
import { RetailerClass } from '../retailer-class';

@Component({
  selector: 'app-register-retailer',
  templateUrl: './register-retailer.component.html',
  styleUrls: ['./register-retailer.component.css']
})
export class RegisterRetailerComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai','Hyderabad' ]

  retailer: RetailerClass = new RetailerClass();

  constructor(
    private formBuilder: FormBuilder,private retailerservice: RetailerServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required]],
      phoneNo:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
  });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  changeCity(e: | any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  DealerAddress(): void {
    this.submitted = false;
    this.retailer= new RetailerClass();
  }

  
onSubmit() {
  this.submitted = true;
this.retailer=this.registerForm.value;
  // stop the process here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  
  this.save();
}

save() {

  this.retailerservice.saveRetailer(this.retailer)
    .subscribe(data => console.log(data), error => console.log(error));
  this.retailer= new RetailerClass();
  // this.address=new Address();

  this.gotoList();
}

gotoList() {
  this.router.navigate(['/retailerLogin']);
}

}
