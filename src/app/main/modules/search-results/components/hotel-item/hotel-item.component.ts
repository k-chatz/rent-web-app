import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../../../shared/models/hotel';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {

  @Input() hotel: Hotel;

  photoUrl: string;
  petsAllowed: boolean;
  freeWifi: boolean;
  swimmingPool: boolean;
  gym: boolean;
  spa: boolean;
  bar: boolean;
  restaurant: boolean;
  parking: boolean;
  roomService: boolean;

  constructor() {
  }

  ngOnInit() {
    this.photoUrl = this.hotel.hotel_photos[0] !== undefined ?
      this.hotel.hotel_photos[0].fileDownloadUri : '../../../../assets/images/empty.jpg';
    this.petsAllowed = this.hotel.amenities.some(a => a.name === 'petsAllowed');
    this.freeWifi = this.hotel.amenities.some(a => a.name === 'wifi');
    this.swimmingPool = this.hotel.amenities.some(a => a.name === 'swimmingPool');
    this.gym = this.hotel.amenities.some(a => a.name === 'gym');
    this.spa = this.hotel.amenities.some(a => a.name === 'spa');
    this.bar = this.hotel.amenities.some(a => a.name === 'bar');
    this.restaurant = this.hotel.amenities.some(a => a.name === 'restaurant');
    this.parking = this.hotel.amenities.some(a => a.name === 'parking');
    this.roomService = this.hotel.amenities.some(a => a.name === 'roomService');
  }
}
