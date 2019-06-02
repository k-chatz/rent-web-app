export class SearchRequest {
  lat: number;
  lng: number;
  startDate?: string;
  endDate?: string;
  visitors?: number;
  wifi?: boolean;
  // tslint:disable-next-line:variable-name
  swimming_pool?: boolean;
  gym?: boolean;
  spa?: boolean;
  bar?: boolean;
  restaurant?: boolean;
  // tslint:disable-next-line:variable-name
  pets_allowed?: boolean;
  parking?: boolean;
  // tslint:disable-next-line:variable-name
  room_service?: boolean;


  constructor(lat: number, lng: number, startDate: string, endDate: string, visitors: number, wifi: boolean,
              // tslint:disable-next-line:variable-name
              swimming_pool: boolean, gym: boolean, spa: boolean, bar: boolean, restaurant: boolean,
              // tslint:disable-next-line:variable-name
              pets_allowed: boolean, parking: boolean, room_service: boolean) {
    this.lat = lat;
    this.lng = lng;
    this.startDate = startDate;
    this.endDate = endDate;
    this.visitors = visitors;
    this.wifi = wifi;
    this.swimming_pool = swimming_pool;
    this.gym = gym;
    this.spa = spa;
    this.bar = bar;
    this.restaurant = restaurant;
    this.pets_allowed = pets_allowed;
    this.parking = parking;
    this.room_service = room_service;
  }
}
