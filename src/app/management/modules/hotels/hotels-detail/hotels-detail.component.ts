import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Hotel} from '../../../../shared/models/Hotel';
import {HotelService} from '../../../../shared/services/hotel.service';
import {HotelsRouteDataProvider} from '../hotels-route-data.provider';

@Component({
  selector: 'app-hotels-detail',
  templateUrl: './hotels-detail.component.html',
  styleUrls: ['./hotels-detail.component.scss']
})
export class HotelsDetailComponent implements OnInit, OnDestroy {
  hotel: Hotel;
  private hotelSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HotelService,
    private routeDataProvider: HotelsRouteDataProvider
  ) {
  }

  ngOnInit() {
    this.hotelSub = this.routeDataProvider.getHotel$().subscribe((hotel: Hotel) => {
      // this.hotel = hotel;
    });
    this.route.data.subscribe((data: any) => {
      console.log(data);
      this.hotel = data.data;
    });
  }

  ngOnDestroy(): void {
    this.hotelSub.unsubscribe();
  }
}
