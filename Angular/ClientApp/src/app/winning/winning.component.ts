import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-winning',
  templateUrl: './winning.component.html',
  styleUrls: ['./winning.component.css']
})
export class WinningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#ending").fadeIn(6500);
  }

}
