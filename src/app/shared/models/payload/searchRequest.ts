export class SearchRequest {
  page: number;
  size: number;
  lat: number;
  lng: number;
  radius: number;
  startDate?: string;
  endDate?: string;
  visitors?: number;
  wifi?: boolean;
  swimmingPool?: boolean;
  gym?: boolean;
  spa?: boolean;
  bar?: boolean;
  restaurant?: boolean;
  petsAllowed?: boolean;
  parking?: boolean;
  roomService?: boolean;
  minPrice: number;
  maxPrice: number;

  constructor(
    page: number,
    size: number,
    lat: number,
    lng: number,
    radius: number,
    startDate: string,
    endDate: string,
    visitors: number,
    wifi: boolean,
    swimmingPool: boolean,
    gym: boolean,
    spa: boolean,
    bar: boolean,
    restaurant: boolean,
    petsAllowed: boolean,
    parking: boolean,
    roomService: boolean,
    minPrice: number,
    maxPrice: number
  ) {
    this.page = page;
    this.size = size;
    this.lat = lat;
    this.lng = lng;
    this.radius = radius;
    this.startDate = startDate;
    this.endDate = endDate;
    this.visitors = visitors;
    this.wifi = wifi;
    this.swimmingPool = swimmingPool;
    this.gym = gym;
    this.spa = spa;
    this.bar = bar;
    this.restaurant = restaurant;
    this.petsAllowed = petsAllowed;
    this.parking = parking;
    this.roomService = roomService;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
}
