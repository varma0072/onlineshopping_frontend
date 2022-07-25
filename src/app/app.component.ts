import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from './user-service.service';
import { RetailerServiceService } from './retailer-service.service';
import { AdminServiceService } from './admin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  name =''
  title = 'Online-Shopping';
  imagePath='/assets/images/shopping.png';

  constructor(
    public userloginService:UserServiceService,
    public retailerloginservice:RetailerServiceService,
    public adminloginservice:AdminServiceService,
    public router:Router) { }

    ngOnInit(): void {

    //  this.router.navigate(['/home']);
    }

  check() {

    if(this.userloginService.isUserLoggedIn()) {

      this.router.navigate(['userprofile',this.userloginService.email]);
    }
  }

  Search() {
    this.router.navigate(['search',this.name]);
  }

}
