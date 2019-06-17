import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import * as moment from 'moment';
import {AmenitiesCount} from '../../../shared/models/AmenitiesCount';
import {Filters} from '../../../shared/models/Filters';
import {PagedResponse} from '../../../shared/models/payload/PagedResponse';
import {Hotel} from '../../../shared/models/Hotel';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';
import {RoutingState} from '../../../shared/services/routing-state';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  destination: string;
  startDate: string;
  endDate: string;
  visitors: number;
  hotelPagedResults: PagedResponse<Hotel>;
  lat: number;
  lng: number;
  maxPrice: number;
  minPrice: number;
  amenitiesCount: AmenitiesCount;
  filters: Filters;
  mapStyle = [
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape',
      stylers: [
        {
          color: '#0078ff'
        },
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffeabb'
        },
        {
          saturation: 100
        },
        {
          lightness: 35
        },
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape.natural.landcover',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape.natural.terrain',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.business',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.local',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit.station',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private smooth: SimpleSmoothScrollService,
    private routingState: RoutingState
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'Search');
    this.route.data.subscribe((response: any) => {
      if (this.routingState.getPreviousUrl().includes('search')) {
        this.smooth.smoothScrollToTop({duration: 1000, easing: 'easeOutQuint', offset: 600});
      }

      /* Get all the params from the activated route snapshot and add some default values to them if they are not defined */
      this.destination = this.route.snapshot.queryParamMap.get('destination') == null ? '' :
        this.route.snapshot.queryParamMap.get('destination');

      this.startDate = this.route.snapshot.queryParamMap.get('start') == null ?
        moment(new Date()).format('YYYY-MM-DD') : this.route.snapshot.queryParamMap.get('start');

      this.endDate = this.route.snapshot.queryParamMap.get('end') == null ?
        moment(new Date()).add(2, 'days').format('YYYY-MM-DD') : this.route.snapshot.queryParamMap.get('end');
      this.visitors = this.route.snapshot.queryParamMap.get('visitors') == null ?
        1 : parseInt(this.route.snapshot.queryParamMap.get('visitors'), 10);
      this.lat = this.route.snapshot.queryParamMap.get('lat') == null ?
        37.983810 : parseFloat(this.route.snapshot.queryParamMap.get('lat'));
      this.lng = this.route.snapshot.queryParamMap.get('lng') == null ?
        23.727539 : parseFloat(this.route.snapshot.queryParamMap.get('lng'));
      /* Get the hotels from the route data after the resolver fetched them */
      this.hotelPagedResults = response.data.results;
      this.amenitiesCount = response.data.amenitiesCount;
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
      // console.log(this.filters);
    });
  }

  onPageIndexChange($event: number) {
    console.log($event);
    this.router.navigate(['/search'],
      {
        queryParams: {
          page: $event - 1,
          size: 5
        },
        queryParamsHandling: 'merge'
      });
  }
}
