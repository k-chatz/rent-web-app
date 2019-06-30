import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChangeContext, LabelType, Options} from 'ng5-slider';
import {AmenityCount} from '../../../../../shared/models/amenityCount';
import {Filters} from '../../../../../shared/models/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filters: Filters;
  sliderOptions: Options;
  amenities: Array<AmenityCount>;
  manualRefresh: EventEmitter<void> = new EventEmitter<void>();
  progress: boolean;

  petsAllowed = 0;
  wifi = 0;
  swimmingPool = 0;
  gym = 0;
  spa = 0;
  bar = 0;
  restaurant = 0;
  parking = 0;
  roomService = 0;
  amenitiesCount: Array<AmenityCount>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  filter(key) {
    this.router.navigate(['/search'],
      {
        queryParams: {
          page: 0,
          [key]: this.filters[key]
        },
        queryParamsHandling: 'merge'
      });
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
      this.amenitiesCount = response.data.amenities;

      this.petsAllowed = 0;
      this.wifi = 0;
      this.swimmingPool = 0;
      this.gym = 0;
      this.spa = 0;
      this.bar = 0;
      this.restaurant = 0;
      this.parking = 0;
      this.roomService = 0;

      this.amenitiesCount.map((a: AmenityCount) => {
        if (a.amenity === 'petsAllowed') {
          this.petsAllowed = a.count;
        }
        if (a.amenity === 'wifi') {
          this.wifi = a.count;
        }
        if (a.amenity === 'swimmingPool') {
          this.swimmingPool = a.count;
        }
        if (a.amenity === 'gym') {
          this.gym = a.count;
        }
        if (a.amenity === 'spa') {
          this.spa = a.count;
        }

        if (a.amenity === 'bar') {
          this.bar = a.count;
        }

        if (a.amenity === 'restaurant') {
          this.restaurant = a.count;
        }

        if (a.amenity === 'parking') {
          this.parking = a.count;
        }

        if (a.amenity === 'roomService') {
          this.roomService = a.count;
        }
      });
      // console.log('PRICES:', response.data.floorPrice, response.data.ceilPrice);
      this.sliderOptions = {
        floor: response.data.floorPrice,
        ceil: response.data.ceilPrice,
        translate: (value: number, label: LabelType): string => {
          switch (label) {
            case LabelType.Low:
              return '<b>Min price:</b> $' + value;
            case LabelType.High:
              return '<b>Max price:</b> $' + value;
            default:
              return '$' + value;
          }
        }
      };
      this.manualRefresh.emit();
    });
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    console.log('onUserChangeEnd', changeContext);
    if (!changeContext.pointerType) {
      this.filters.floorPrice = changeContext.value;
      this.filter('minPrice');
    } else {
      this.filters.ceilPrice = changeContext.highValue;
      this.filter('maxPrice');
    }
  }
}
