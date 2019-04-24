import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  rate = 4.3;
  hotelName = 'Hotel Name';
  hotelDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
    'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ' +
    'deserunt mollit anim id est laborum.';


  constructor() { }

  ngOnInit() {
    console.log($('.jumbotron'));
  }

}
