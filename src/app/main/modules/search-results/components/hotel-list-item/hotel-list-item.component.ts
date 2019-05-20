import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list-item',
  templateUrl: './hotel-list-item.component.html',
  styleUrls: ['./hotel-list-item.component.scss']
})
export class HotelListItemComponent implements OnInit {

  @Input() hotels;

  constructor() { }

  ngOnInit() {
  }

}
