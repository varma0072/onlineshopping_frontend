import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductListService } from '../product-list.service';
import { UserServiceService } from '../user-service.service';
import { ProductServiceService } from '../product-service.service';
import { CartService } from '../cart.service';
import { CompareService } from '../compare.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: any;
  searchText:any;

  product: Product = new Product();


  constructor(private data:ProductListService, 
    public userloginservice:UserServiceService, 
    public cartservice:CartService, 
    public productservice:ProductServiceService,
    private router:Router,
    public compareservice:CompareService) { }

  ngOnInit(): void {

    this.data.getProducts().subscribe(data => {
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
      this.addtocompare();
    }
    );
  
  }

  addtocompare(){
    
    this.compareservice.newProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.goto();
  }
  goto() {

    this.router.navigate(['compare']);
  }
  

}
