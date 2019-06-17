import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  @Input() name;
  @Input() stars;
  @Input() shortDescription;
  @Input() email;
  @Input() longDescription;

  constructor() {
  }

  ngOnInit() {
  }
}
