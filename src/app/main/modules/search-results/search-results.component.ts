import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import * as moment from 'moment';
import {AmenitiesCount} from '../../../shared/models/AmenitiesCount';
import {Filters} from '../../../shared/models/Filters';

@Component({
  selector: 'app-search',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  destination: string;
  startDate: string;
  endDate: string;
  visitors: number;
  hotelPagedResults: any;
  lat: number;
  lng: number;
  maxPrice: number;
  minPrice: number;
  amenitiesCount: AmenitiesCount;
  filters: Filters;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    titleService.setTitle('Search');
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
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
      this.filters = {
        floorPrice: 45,//response.data.floorPrice,
        ceilPrice: 78,//response.data.ceilPrice,
        minPrice: response.data.minPrice,
        maxPrice: response.data.maxPrice,
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
      console.log(this.filters);
    });
  }

}
