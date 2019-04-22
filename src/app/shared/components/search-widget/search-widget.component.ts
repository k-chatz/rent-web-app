import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {
  destination = '';

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
  startValue: Date | null = null;
  endValue: Date | null = null;
  endOpen = false;

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  }

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  onEndChange(date: Date): void {
    this.endValue = date;
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

  constructor() { }

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
  }

}
