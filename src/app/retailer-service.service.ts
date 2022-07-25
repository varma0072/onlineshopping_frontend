import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {

  private baseUrl = 'http://localhost:9095/retailer/addRetailer';

  constructor(private http:HttpClient) { }

  login(RetailerClass:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/estore/retailercontroller/retailers`,RetailerClass)
  }

  saveRetailer(RetailerClass: Object): Observable<Object> {
    return this.http.post(`http://localhost:9095/estore/retailercontroller/registerRetailer`, RetailerClass);
  }

  isRetailerLoggedIn() {
    let retailer = sessionStorage.getItem('rname')
    console.log(!(retailer === null))
    return !(retailer === null)
  }

  logOut() {
    sessionStorage.removeItem('rname')
  }

  findallretailers() {

    return this.http.get(`http://localhost:9095/estore/retailercontroller/findAllRetailer`)
  }

  private baseUrl1 = 'http://localhost:9095/estore/retailercontroller/retailer';
  deleteretailer( id: any): Observable<any> {

    return this.http.delete(`${this.baseUrl1}/${id}`,{ responseType: 'text' });
  }
}
