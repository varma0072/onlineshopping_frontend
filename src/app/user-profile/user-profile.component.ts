import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { UserClass } from '../user-class';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email: any;
  user: UserClass | any;

  constructor(private route: ActivatedRoute,private router: Router,
    private userservice:UserServiceService) { }

  ngOnInit(): void {

    this.user = new UserClass();
 
    this.email = this.route.snapshot.params['email'];

    this.userservice.getUser(this.email)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  cart() {

    this.router.navigate(['cart']);
  }

  wishlist() {

    this.router.navigate(['compare']);
  }

  orders() {

    this.router.navigate(['orders']);
  }

}
