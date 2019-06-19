import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import * as moment from 'moment';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {
  @Input() destination;
  @Input() latitude;
  @Input() longitude;
  @Input() radius;
  @Input() visitors;
  @Input() startDate;
  @Input() endDate;

  form: FormGroup;

  // Used by the date range picker, don't touch it:
  endOpen = false;
  progress: boolean;

  placesOptions: {
    types: ['(cities)'],
    componentRestrictions: { country: 'GR' }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        destination: ['', {
          validators: [Validators.required]
        }],
        daterangeGroup: this.fb.group({
          startDate: [null, {
            validators: [Validators.required]
          }],
          endDate: [null, {
            validators: [Validators.required]
          }]
          }
        ),
        lat: [null, {
          validators: [Validators.required]
        }],
        lng: [null, {
          validators: [Validators.required]
        }],
        radius: [null, {
          validators: [Validators.required]
        }],
        visitors: [null, {
          validators: [Validators.min(1), Validators.max(15)]
        }]
      }
    );
  }

  ngOnInit() {
    const start = this.startDate.split('-');
    const end = this.endDate.split('-');
    this.form.get('destination').setValue(this.destination);
    this.form.get('daterangeGroup').get('startDate').setValue(new Date(Number(start[2]), Number(start[1]) - 1, Number(start[0])));
    this.form.get('daterangeGroup').get('endDate').setValue(new Date(Number(end[2]), Number(end[1]) - 1, Number(end[0])));
    this.form.get('visitors').setValue(this.visitors);
    this.form.get('lat').setValue(this.latitude);
    this.form.get('lng').setValue(this.longitude);
    this.form.get('radius').setValue(this.radius);
  }

  onPlaceChange(value: string) {
    if (value === '') {
      this.form.get('lat').setValue(null);
      this.form.get('lng').setValue(null);
    }
  }

  handleCheckAddressChange(address: Address) {
    this.form.get('lat').setValue(address.geometry.location.lat());
    this.form.get('lng').setValue(address.geometry.location.lng());
    this.form.get('destination').setValue(address.formatted_address);
  }

  submit(value: any) {
    console.log(value);
    this.router.navigate(['/search'],
      {
        queryParams: {
          start: moment(new Date(value.daterangeGroup.startDate)).format('DD-MM-YYYY'),
          end: moment(new Date(value.daterangeGroup.endDate)).format('DD-MM-YYYY'),
          destination: value.destination,
          lat: value.lat,
          lng: value.lng,
          radius: value.radius,
          visitors: value.visitors,
        },
        queryParamsHandling: 'merge'
      });
  }

}
