import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import * as moment from 'moment';
import {Filters} from '../../../shared/models/filters';
import {PagedResponse} from '../../../shared/models/payload/pagedResponse';
import {Hotel} from '../../../shared/models/hotel';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';
import {RoutingState} from '../../../shared/services/routing-state';
import {environment} from '../../../../environments/environment';
import {LatLngLiteral} from '@agm/core/services/google-maps-types';
import {AgmInfoWindow, MapsAPILoader} from '@agm/core';
import {} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-search',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  destination: string;
  checkin: string;
  checkout: string;
  visitors: number;
  lat: number;
  lng: number;
  radius: number;
  pagedHotels: PagedResponse<Hotel>;
  allHotels: Array<Hotel>;
  maxPrice: number;
  minPrice: number;
  filters: Filters;
  markerIcon = {
    url: '/assets/images/iconfinder_map-marker_285659.svg',
    scaledSize: {
      width: 35,
      height: 35
    }
  };
  infoWindowOpened = null;
  previousInfoWindow = null;

  private geoCoder;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private smooth: SimpleSmoothScrollService,
    private routingState: RoutingState,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'Search');
    this.route.data.subscribe((response: any) => {
      const previousUrl = this.routingState.getPreviousUrl();

      if (previousUrl !== undefined && previousUrl.includes('search')) {
        // this.smooth.smoothScrollToTop({duration: 15, easing: 'easeOutQuint', offset: 0});
      }

      /* Get all the params from the activated route snapshot and add some default values to them if they are not defined */

      this.destination = this.route.snapshot.queryParamMap.get('destination') == null ? '' :
        this.route.snapshot.queryParamMap.get('destination');

      titleService.setTitle(environment.appName + ' :: ' + this.destination);

      this.checkin = this.route.snapshot.queryParamMap.get('checkin') == null ?
        moment(new Date()).format('YYYY-MM-DD') : this.route.snapshot.queryParamMap.get('checkin');

      this.checkout = this.route.snapshot.queryParamMap.get('checkout') == null ?
        moment(new Date()).add(2, 'days').format('YYYY-MM-DD') : this.route.snapshot.queryParamMap.get('checkout');

      this.visitors = this.route.snapshot.queryParamMap.get('visitors') == null ?
        1 : parseInt(this.route.snapshot.queryParamMap.get('visitors'), 10);

      this.lat = this.route.snapshot.queryParamMap.get('lat') == null ?
        37.983810 : parseFloat(this.route.snapshot.queryParamMap.get('lat'));

      this.lng = this.route.snapshot.queryParamMap.get('lng') == null ?
        23.727539 : parseFloat(this.route.snapshot.queryParamMap.get('lng'));

      this.radius = this.route.snapshot.queryParamMap.get('radius') == null ?
        5 : parseFloat(this.route.snapshot.queryParamMap.get('radius'));
      /* Get the hotels from the route data after the resolver fetched them */

      this.allHotels = response.data.allHotels;

      this.pagedHotels = response.data.pagedHotels;

      const minPrice = this.route.snapshot.queryParamMap.get('minPrice');
      const maxPrice = this.route.snapshot.queryParamMap.get('maxPrice');

      this.filters = {
        floorPrice: response.data.floorPrice,
        ceilPrice: response.data.ceilPrice,
        minPrice: minPrice ? minPrice : response.data.floorPrice,
        maxPrice: maxPrice ? maxPrice : response.data.ceilPrice,
        wifi: this.route.snapshot.queryParamMap.get('wifi') === 'true',
        petsAllowed: this.route.snapshot.queryParamMap.get('petsAllowed') === 'true',
        bar: this.route.snapshot.queryParamMap.get('bar') === 'true',
        spa: this.route.snapshot.queryParamMap.get('spa') === 'true',
        gym: this.route.snapshot.queryParamMap.get('gym') === 'true',
        roomService: this.route.snapshot.queryParamMap.get('roomService') === 'true',
        restaurant: this.route.snapshot.queryParamMap.get('restaurant') === 'true',
        parking: this.route.snapshot.queryParamMap.get('parking') === 'true',
        swimmingPool: this.route.snapshot.queryParamMap.get('swimmingPool') === 'true',
      };
    });
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
  }

  hotelNavigate(hotelId) {
    this.router.navigate(['/hotels/', hotelId],
      {
        queryParamsHandling: 'merge'
      });
  }

  onPageIndexChange($event: number) {
    this.router.navigate(['/search'],
      {
        queryParams: {
          page: $event - 1,
          size: 5
        },
        queryParamsHandling: 'merge'
      });
  }

  onCircleRadiusChange(radius: number) {
    this.router.navigate(['/search'],
      {
        queryParams: {
          radius: radius / 1000,
          page: 0
        },
        queryParamsHandling: 'merge'
      });
  }

  onCenterChange(event: LatLngLiteral) {
    this.geoCoder.geocode({location: {lat: event.lat, lng: event.lng}}, (results, status) => {
      if (status === 'OK') {
        results.map((address) => {
          if (address.types.some(r => r === 'administrative_area_level_4')) {
            if (address) {
              this.ngZone.run(() => {
                this.router.navigate(['/search'], {
                  queryParams: {
                    page: 0,
                    destination: address.formatted_address,
                    lat: event.lat,
                    lng: event.lng,
                  },
                  queryParamsHandling: 'merge'
                });
              });
            } else {
              console.error('No results found');
            }
          }
        });
      } else {
        console.error('Geocoder failed due to: ' + status);
        this.ngZone.run(() => {
          this.router.navigate(['/search'], {
            queryParams: {
              page: 0,
              destination: this.destination,
              lat: event.lat,
              lng: event.lng,
            },
            queryParamsHandling: 'merge'
          });
        });
      }
    });
  }

  selectMarker(infoWindow: AgmInfoWindow) {
    if (this.previousInfoWindow == null) {
      this.previousInfoWindow = infoWindow;
    } else {
      this.infoWindowOpened = infoWindow;
      this.previousInfoWindow.close();
    }
    this.previousInfoWindow = infoWindow;
  }

  closeWindow() {
    if (this.previousInfoWindow != null) {
      this.previousInfoWindow.close();
    }
  }
}
