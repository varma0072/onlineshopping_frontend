import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminClass } from './admin-class';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  constructor(private http:HttpClient) { }

  login(AdminClass:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/estore/admincontroller/AdminLogin`,AdminClass)
  }

  saveAdmin(AdminClass: Object): Observable<Object> {
    return this.http.post(`http://localhost:9095/estore/admincontroller/registerAdmin`, AdminClass);
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('aname')
    console.log(!(admin === null))
    return !(admin === null)
  }

  logOut() {
    sessionStorage.removeItem('aname')
  }
}
