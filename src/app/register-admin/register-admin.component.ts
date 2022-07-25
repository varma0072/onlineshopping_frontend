import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminServiceService } from '../admin-service.service';
import { AdminClass } from '../admin-class';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai','Hyderabad' ]

  admin: AdminClass = new AdminClass();

  constructor(
    private formBuilder: FormBuilder,private adminService: AdminServiceService,
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
    this.admin= new AdminClass();
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

  this.adminService.saveAdmin(this.admin)
    .subscribe(data => console.log(data), error => console.log(error));
  this.admin= new AdminClass();
  // this.address=new Address();

  this.gotoList();
}

gotoList() {
  this.router.navigate(['/adminLogin']);
}

}
