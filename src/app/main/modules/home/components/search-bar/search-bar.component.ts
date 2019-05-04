import {Component, OnInit} from '@angular/core';
import {differenceInCalendarDays} from 'date-fns';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  today = new Date();
  dateRange = [];

  constructor() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
    console.log('dateRange: ', this.dateRange);
  }

  ngOnInit(): void {
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0 ||
      differenceInCalendarDays(current, this.today) > 60;
  };
}
