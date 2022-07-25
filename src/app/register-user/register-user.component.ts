import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserServiceService } from '../user-service.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai','Hyderabad' ]

  admin: UserClass = new UserClass();

  constructor(
    private formBuilder: FormBuilder,private userservice: UserServiceService,
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
    this.admin= new UserClass();
  }

  
onSubmit() {
  this.submitted = true;
this.admin=this.registerForm.value;
  // stop the process here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  
  this.save();
}

save() {

  this.userservice.saveUser(this.admin)
    .subscribe(data => console.log(data), error => console.log(error));
  this.admin= new UserClass();
  // this.address=new Address();

  this.gotoList();
}

gotoList() {
  this.router.navigate(['/userLogin']);
}

}
