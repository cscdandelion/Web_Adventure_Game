import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  signin() {
    this.router.navigate(['/login']);
  }

  fade() {
 
      $("#showP").hide();
      $("#div1").fadeIn(1500);
      $("#div2").fadeIn(4500);
      $("#div3").fadeIn(7000);
      $("#div4").fadeIn(9500);
      $("#div5").fadeIn(11500);
      $("#div6").fadeIn(14000);
      $("#out").fadeIn(16000);
    
  }

 
}
