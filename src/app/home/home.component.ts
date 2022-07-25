import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]> | any;
  constructor(private productService: ProductServiceService,  private router: Router) { }

  ngOnInit(): void {

    this.products = this.productService.getProductsList();
  }

  route(){

    this.router.navigate(['/userLogin']);
  }

}
