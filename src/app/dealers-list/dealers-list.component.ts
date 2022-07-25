import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { RetailerClass } from '../retailer-class';
import { RetailerServiceService } from '../retailer-service.service';

@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.css']
})
export class DealersListComponent implements OnInit {

  retailers: Observable<RetailerClass[]> | any;

  constructor( private retailerService: RetailerServiceService,
    private router:Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.retailers= this.retailerService.findallretailers();
  }

  retailerDetails(id: number){
    this.router.navigate(['productdetails', id]);
  }

  editretailer(id: number) {
    this.router.navigate(['updateproduct',id])  // navigate to component from a method
  }

  deleteretailer(id: number) {
    this.retailerService.deleteretailer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  register() {

    this.router.navigate(['retailerRegister']);
  }

}
