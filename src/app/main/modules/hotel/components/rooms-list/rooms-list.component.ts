import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  rooms = [
    {number: 10, capacity: 2, photo: 'https://s-ec.bstatic.com/images/hotel/max1024x768/101/101482276.jpg',
    description: 'A cozy place for 2 people.'},
    {number: 5, capacity: 3, photo: 'https://s-ec.bstatic.com/images/hotel/max1280x900/101/101482287.jpg',
      description: 'One large bed for 2 and a smaller one.'},
    {number: 4, capacity: 2, photo: 'https://images.hoteliers.com/main/2900/4x3/xlarge/uw-7647-hdr.jpg',
      description: 'Our luxury suites.'}
  ];

  // Angular is fucking stupid, why is this necessary...
  counter(i: number) {
    return new Array(i);
  }

  constructor() { }

  ngOnInit() {
  }

}
