import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  
  constructor(private http:HttpClient) { }

  getProductsList(): Observable<any> {

    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`http://localhost:9095/estore/productcontroller/findAllProducts`);
  }

  getProduct(id: string | any): Observable<any> {
    return this.http.get(`http://localhost:9095/estore/productcontroller/product/${id}`);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:9095/estore/productcontroller/product/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:9095/estore/productcontroller/products/${id}`, { responseType: 'text' });
  }

  newProduct(product: Object): Observable<Object> {
    return this.http.post(`http://localhost:9095/estore/productcontroller/registerProduct`, product);
  }

}
