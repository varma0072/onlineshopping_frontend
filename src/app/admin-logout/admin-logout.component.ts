import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(
    private adminService: AdminServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.adminService.logOut();
    this.router.navigate(['adminLogin']);

  }

}
