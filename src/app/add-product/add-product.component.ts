import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.product= new Product();
  }
 
  save() {
    this.productService.newProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoList();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  gotoList() {
    this.router.navigate(['/productlist']).then(() => {
      window.location.reload();
    });
  }
  

}
