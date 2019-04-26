import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-reviews',
  templateUrl: './hotel-reviews.component.html',
  styleUrls: ['./hotel-reviews.component.scss']
})
export class HotelReviewsComponent implements OnInit {
  reviews = [
    {name: 'Toni', score: 4.3, text: 'Excellent hotel.'},
    {name: 'Nick', score: 3.2, text: 'Shitty experience.'},
    {name: 'Helen', score: 5.0, text: 'I MET MY BOYFRIEND HERE!'},
    {name: 'Mary', score: 2.5, text: 'It\'s fucking haunted'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
