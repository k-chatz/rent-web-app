import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-reviews',
  templateUrl: './hotel-reviews.component.html',
  styleUrls: ['./hotel-reviews.component.scss']
})
export class HotelReviewsComponent implements OnInit {
  reviews = [
    {name: 'Helen', score: 5.0, text: 'I MET MY BOYFRIEND HERE!'},
    {name: 'Toni', score: 4.3, text: 'Excellent hotel.'},
    {name: 'Mary', score: 2.5, text: 'It\'s fucking haunted'},
    {name: 'Nick', score: 1.0, text: 'Shitty experience.'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
