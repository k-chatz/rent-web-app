import {Component, OnInit} from '@angular/core';
import {differenceInCalendarDays} from 'date-fns';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  private address: Address;

  placesOptions: {
    types: ['(cities)'],
    componentRestrictions: { country: 'GR' }
  };

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group(
      {
        daterange: ['', {
          validators: []
        }],
        destination: ['', {
          validators: [Validators.required]
        }],
        lat: [null, {
          validators: [Validators.required]
        }],
        lng: [null, {
          validators: [Validators.required]
        }],
        visitors: [null, {
          validators: [Validators.min(1), Validators.max(30)]
        }]
      }
    );

  }

  today = new Date();
  progress = false;

  ngOnInit(): void {
  }

  disabledDate(current: Date): boolean {
    return differenceInCalendarDays(current, this.today) < 0 ||
      differenceInCalendarDays(current, this.today) > 60;
  }

  handleCheckAddressChange(address: Address) {
    this.form.get('lat').setValue(address.geometry.location.lat());
    this.form.get('lng').setValue(address.geometry.location.lng());
    this.form.get('destination').setValue(address.formatted_address);
  }

  submit(value: any) {
    this.progress = true;
    this.router.navigate(['search'], {
      queryParams: {
        checkin: moment(value.daterange[0]).format('YYYY-MM-DD'),
        checkout: moment(value.daterange[1]).format('YYYY-MM-DD'),
        destination: value.destination,
        lat: value.lat,
        lng: value.lng,
        radius: 5,
        visitors: (value.visitors == null) ? 1 : value.visitors
      }
    }).catch((e) => {
      this.progress = false;
    });
  }

  onAddressInputChange(value: string) {
    if (value === '') {
      this.form.get('lat').setValue(null);
      this.form.get('lng').setValue(null);
    }
  }

}
