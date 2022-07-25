import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RetailerServiceService } from '../retailer-service.service';
@Component({
  selector: 'app-retailer-logout',
  templateUrl: './retailer-logout.component.html',
  styleUrls: ['./retailer-logout.component.css']
})
export class RetailerLogoutComponent implements OnInit {

  constructor(
    private retailerService: RetailerServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.retailerService.logOut();
    this.router.navigate(['retailerLogin']);
  }

}
