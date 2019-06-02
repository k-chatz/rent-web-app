import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {
  @Input() destination;
  @Input() visitors;
  @Input() startDate;
  @Input() endDate;

  form: FormGroup;

  // For the number of adults select:
  adults = [{value: 1, label: '1 adult'}];
  maxAdults = 20;
  selectedAdultsNum = this.adults[0];

  // For the number of children select:
  children = [{value: 0, label: 'No children'}, {value: 1, label: '1 child'}];
  maxChildren = 20;
  selectedChildrenNum = this.children[0];

  // For the number of rooms select:
  rooms = [{value: 1, label: '1 room'}];
  maxRooms = 20;
  selectedRoomsNum = this.rooms[0];

  // This will show options for wifi, parking etc.
  travelingForWork = false;

  // Used by the date range picker, don't touch it:
  endOpen = false;
  progress: boolean;

  constructor(private fb: FormBuilder,
              private router: Router,
  ) {
    this.form = this.fb.group(
      {
        destination: ['', {
          validators: [Validators.required]
        }],
        daterangeGroup: this.fb.group({
            startDate: [null, {validators: []}],
            endDate: [null, {validators: []}]
          }
        ),
        lat: [null, {
          validators: [Validators.required]
        }],
        lng: [null, {
          validators: [Validators.required]
        }],
        visitors: [null, {
          validators: [Validators.min(1), Validators.max(15)]
        }]
      }
    );
  }

  ngOnInit() {
    let i;
    // Create options for adults select menu:
    for (i = 2; i <= this.maxAdults; i++) {
      this.adults.push({value: i, label: i + ' adults'});
    }
    // Create options for children select menu:
    for (i = 2; i <= this.maxChildren; i++) {
      this.children.push({value: i, label: i + ' children'});
    }
    // Create options for rooms select menu:
    for (i = 2; i <= this.maxRooms; i++) {
      this.rooms.push({value: i, label: i + ' rooms'});
    }
    const start = this.startDate.split('-');
    const end = this.endDate.split('-');
    this.form.get('destination').setValue(this.destination);
    this.form.get('daterangeGroup').get('startDate').setValue(new Date(Number(start[2]), Number(start[1]) - 1, Number(start[0])));
    this.form.get('daterangeGroup').get('endDate').setValue(new Date(Number(end[2]), Number(end[1]) - 1, Number(end[0])));
    this.form.get('visitors').setValue(this.visitors);
  }

  /*disabledStartDate(): boolean {
    if (!this.startDate || !this.endDate) {
      return false;
    }
    return this.endDate.getTime() > this.startDate.getTime();
  }

  disabledEndDate(): boolean {
    if (!this.endDate || !this.startDate) {
      return false;
    }
    return this.endDate.getTime() <= this.startDate.getTime();
  }

  onStartChange(date: Date): void {
    this.form.get('daterangeGroup').get('startDate').setValue(date);
  }

  onEndChange(date: Date): void {
    this.form.get('daterangeGroup').get('endDate').setValue(date);
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endOpen = true;
    }
    // console.log('handleStartOpenChange', open, this.endOpen);
  }

  handleEndOpenChange(open: boolean): void {
    // console.log(open);
    this.endOpen = open;
  }

  get startDate() {
    return this.form.get('daterangeGroup').get('startDate').value;
  }

  get endDate() {
    return this.form.get('daterangeGroup').get('endDate').value;
  }
*/
  submit(value: any) {
    console.log(value);
  }


}
