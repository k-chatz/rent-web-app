import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelListItemComponent implements OnInit {

  @Input() hotel;

  constructor() { }

  ngOnInit() {
  }

}
