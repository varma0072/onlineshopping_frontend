import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
    
  }

  gotoshop() {

    this.router.navigate(['listproducts']);
  }

}
