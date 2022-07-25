import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProductListService } from '../product-list.service';
import { ProductServiceService } from '../product-service.service';
import { CartService } from '../cart.service';
import { CompareService } from '../compare.service';
import { Product } from '../product';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {

  products: any;
  product: Product = new Product();
  category = "Gadgets";
  searchText:any;


  constructor(private data:ProductListService,
    private compareservice:CompareService,
    public cartservice:CartService,
    private router:Router,
    public productservice:ProductServiceService) { }

  ngOnInit(): void {

    this.data.getProductByCategory(this.category).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );
  }

  gotocart(id : string | any) {

    this.productservice.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
      this.addtocart();
    }
    );
  
  }

  addtocart(){

    this.cartservice.newProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoc();
  }
  gotoc() {

    this.router.navigate(['cart']);
  }

  gotowishlist(id : string | any) {

    this.productservice.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
      this.addtowishlist();
    }
    );
  
  }

  addtowishlist(){
    
    this.compareservice.newProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.goto();
  }
  goto() {

    this.router.navigate(['compare']);
  }

}
