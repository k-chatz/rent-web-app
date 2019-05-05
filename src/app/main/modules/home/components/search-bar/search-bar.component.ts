import {Component, ElementRef, OnInit} from '@angular/core';
import {differenceInCalendarDays} from 'date-fns';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  ) {
    this.form = this.fb.group(
      {
        daterange: ['', {
          validators: []
        }],
        latitude: [null, {
          validators: [Validators.required]
        }],
        longitude: [null, {
          validators: [Validators.required]
        }],
        visitors: [null, {
          validators: [Validators.min(1), Validators.max(20)]
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
    this.form.get('latitude').setValue(address.geometry.location.lat());
    this.form.get('longitude').setValue(address.geometry.location.lng());
  }

  submit(value: any) {
    console.log(value);
    this.progress = true;
  }

  valuechange(value: string) {
    if (value === '') {
      this.form.get('latitude').setValue(null);
      this.form.get('longitude').setValue(null);
    }
  }
}
