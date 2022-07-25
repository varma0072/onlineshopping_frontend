import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  email : string| any;



  constructor(private http:HttpClient) { }

  login(UserClass:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/estore/usercontroller/userlogin`,UserClass)
  }

  saveUser(UserClass: Object): Observable<Object> {
    return this.http.post(`http://localhost:9095/estore/usercontroller/registerUser`, UserClass);
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    this.email = sessionStorage.getItem('username')
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  
  getUser(email: string): Observable<any> {
    return this.http.get(`http://localhost:9095/estore/usercontroller/useremail/${email}`);
  }

}
