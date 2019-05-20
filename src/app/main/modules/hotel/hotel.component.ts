import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../shared/services/hotel.service';
import { Hotel } from '../../../shared/models/hotel';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private hotelService: HotelService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.hotelService.getHotelDetails(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      // TODO: Server should return not found if the hotel with the given id doesn't exist
      this.hotel = data;
    });
  }

}
