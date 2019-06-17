import {Component, OnInit} from '@angular/core';
import {HotelService} from '../../../shared/services/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';
import {environment} from '../../../../environments/environment';
import {Room} from '../../../shared/models/Room';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  hotel: any;
  rooms: Room[];

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private titleService: Title,
    private smooth: SimpleSmoothScrollService,
  ) {
    this.route.data.subscribe(response => {
      this.hotel = response.data.hotel;
      this.titleService.setTitle(environment.appName + ' :: ' + this.hotel.name);
    });

    this.hotelService.getHotelRooms(1).subscribe((data: any) => {
      this.rooms = data;
    });
  }
}
