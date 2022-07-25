import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;

  constructor(private cartService : CartService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.cartService.getProductsList().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );   
  }

  reloadData() {
    this.cartService.getProductsList().subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  ); 
  }

  removeitem(id : string|any) {

    this.cartService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  shopmore() {

    this.router.navigate(["listproducts"]);
  }
  
  checkout() {

  // this.router.navigate(["payment"]);
  //this.cartService.deleteallcartitems();
  // this.http.delete('http://localhost:9095/estore/cartcontroller/deleteproducts')
  // .subscribe(data => '');
    this.router.navigate(["payment"]);
  }

  TotalCost() {
    let total = 0;
    for (var i = 0; i < this.products.length; i++) {
    this.products[i].price;
            this.grandTotal = this.products[i].price * this.products[i].quantity;
            total = total + this.grandTotal
        }

  return total;
}

}
