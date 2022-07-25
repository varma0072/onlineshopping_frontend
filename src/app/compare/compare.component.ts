import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompareService } from '../compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  public products : any = [];

  constructor( public compareservice:CompareService,private router:Router) { }

  ngOnInit(): void {

    this.compareservice.getProductsList().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  reloadData() {
    this.compareservice.getProductsList().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  removeitem(id : string|any) {

    this.compareservice.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoshop() {

    this.router.navigate(["listproducts"]);
  }

}
