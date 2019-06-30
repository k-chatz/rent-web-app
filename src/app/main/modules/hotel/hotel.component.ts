import {Component, OnInit} from '@angular/core';
import {HotelService} from '../../../shared/services/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';
import {environment} from '../../../../environments/environment';
import {Room} from '../../../shared/models/Room';
import * as moment from 'moment';
import {RoutingState} from '../../../shared/services/routing-state';
import {Hotel} from '../../../shared/models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  destination: string;
  checkin: string;
  checkout: string;
  visitors: number;
  lat: number;
  lng: number;
  radius: number;
  markerIcon = {
    url: 'https://maps.google.com/mapfiles/kml/shapes/rec_lodging.png',
    scaledSize: {
      width: 35,
      height: 35
    }
  };
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
  hotel: Hotel;
  rooms: Room[];

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private titleService: Title,
    private routingState: RoutingState,
    private smooth: SimpleSmoothScrollService,
  ) {

    this.route.data.subscribe((response: any) => {
      console.log(response);
      this.hotel = response.data.hotel;
      this.titleService.setTitle(environment.appName + ' :: ' + this.hotel.name);
      const previousUrl = this.routingState.getPreviousUrl();

      /*      if (previousUrl !== undefined && previousUrl.includes('search')) {
                this.smooth.smoothScrollToTop({duration: 10, easing: 'easeOutQuint', offset: 600});
            }*/

      /* Get all the params from the activated route snapshot and add some default values to them if they are not defined */

      this.destination = this.route.snapshot.queryParamMap.get('destination') == null ? '' :
        this.route.snapshot.queryParamMap.get('destination');

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
    });


    this.hotelService.getHotelRooms(1).subscribe((data: any) => {
      this.rooms = data;
    });

  }
}
