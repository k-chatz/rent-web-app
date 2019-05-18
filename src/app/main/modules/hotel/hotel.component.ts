import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../../shared/services/hotel.service';
import {Hotel} from '../../../shared/models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  public hotel: Hotel = {
    id: 0, name: '', stars: '0', description_long: '',
    description_short: '', lat: '', lng: '', number_of_rooms: 0
  };

  constructor(private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.hotelService.getHotelDetails(1).subscribe(data => this.hotel = data);
  }

}
