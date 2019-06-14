import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChangeContext, LabelType, Options} from 'ng5-slider';
import {AmenitiesCount} from '../../../../../shared/models/AmenitiesCount';
import {Filters} from '../../../../../shared/models/Filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filters: Filters;
  @Input() sliderOptions: Options;
  @Input() amenitiesCount: AmenitiesCount;

  manualRefresh: EventEmitter<void> = new EventEmitter<void>();
  progress: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  filter(key) {
    console.log(key, this.filters[key]);
    this.router.navigate(['/search'],
      {
        queryParams: {[key]: this.filters[key]},
        queryParamsHandling: 'merge'
      });
  }

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
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
      this.filters.minPrice = changeContext.value;
      this.filter('minPrice');
    } else {
      this.filters.maxPrice = changeContext.highValue;
      this.filter('maxPrice');
    }
  }
}
