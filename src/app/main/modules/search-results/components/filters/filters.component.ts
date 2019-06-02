import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ChangeContext, LabelType, Options, PointerType} from 'ng5-slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  form: FormGroup;
  progress: boolean;
  @Input() minPrice: number;
  @Input() maxPrice: number;

  minValue: number;
  maxValue: number;
  options: Options;

  logText = '';
  checked = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group(
      {
        slider: ['', {
          validators: []
        }],
        petsAllowed: ['', {
          validators: []
        }],
        freeWifi: ['', {
          validators: []
        }],
        view: ['', {
          validators: []
        }],
      }
    );
  }

  ngOnInit() {
    this.options = {
      floor: this.minPrice,
      ceil: this.maxPrice,
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
    this.minValue = this.minPrice;
    this.maxValue = this.maxPrice;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    console.log('end', changeContext);
    // TODO change router query params
  }

  submit(value: any) {
  }

}
