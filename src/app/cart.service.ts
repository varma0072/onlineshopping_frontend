import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  
  constructor(private http:HttpClient) { }

  getProductsList(): Observable<any> {

    return this.http.get(`http://localhost:9095/estore/cartcontroller/getAllCartItems`);
  }



  deleteProduct(id: string| any): Observable<any> {
    return this.http.delete(`http://localhost:9095/estore/cartcontroller/cartproducts/${id}`, { responseType: 'text' });
  }

  deleteallcartitems(){
     this.http.delete(`http://localhost:9095/estore/cartcontroller/deleteproducts`);
  }

  newProduct(product: Object): Observable<Object> {
    return this.http.post(`http://localhost:9095/estore/cartcontroller/addtocart`, product);
  }
}
