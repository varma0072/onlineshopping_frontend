import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get('http://localhost:9095/estore/productcontroller/findAllProducts');
  }

  getProductByCategory(category:string): Observable<any> {

    return this.http.get(`http://localhost:9095/estore/productcontroller/getproductsbycategory/${category}`);

  }

  getProductByName(name:string): Observable<any> {

    return this.http.get(`http://localhost:9095/estore/productcontroller/get/${name}`);

  }
}
