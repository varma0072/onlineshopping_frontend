import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name : any;

  products: any;
  

  constructor( private pservice:ProductListService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    this.pservice.getProductByName(this.name).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );
  }
}
