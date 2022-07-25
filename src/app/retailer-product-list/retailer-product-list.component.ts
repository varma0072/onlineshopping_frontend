import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-retailer-product-list',
  templateUrl: './retailer-product-list.component.html',
  styleUrls: ['./retailer-product-list.component.css']
})
export class RetailerProductListComponent implements OnInit {

  products: Observable<Product[]> | any;

  constructor( private productService: ProductServiceService,
    private router:Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductsList();
  }

  productDetails(id: number){
    this.router.navigate(['view', id]);
  }

  editProduct(id: number) {
    this.router.navigate(['updateproduct',id])  // navigate to component from a method
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
