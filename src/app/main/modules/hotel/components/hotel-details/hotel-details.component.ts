import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Hotel} from '../../../../../shared/models/hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  @Input() name;
  @Input() stars;
  @Input() longDescription;

  constructor() { }

  ngOnInit() {
  }


}
