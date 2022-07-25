import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number=0;
  product: Product | any;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductServiceService) { }

  ngOnInit(): void {
  
    this.product = new Product();
 
    this.id = this.route.snapshot.params['id'];  /* Snapshot is used to get the Route Parameters */
    
    /**
     * As a publisher, you create an Observable instance that defines a subscriber function. 
     * This is the function that is executed when a consumer calls the subscribe() method. 
     * The subscriber function defines how to obtain or generate values or messages to be published.
     */
    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['productlist']);
  }

}
