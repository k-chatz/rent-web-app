import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../shared/services/hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotel: any;

  constructor(private hotelService: HotelService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(response => {
      // TODO: Server should return not found if the hotel with the given id doesn't exist
      this.hotel = response.data.hotel;
    });
  }

}
