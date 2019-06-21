import {Component, OnInit} from '@angular/core';
import {PagedResponse} from '../../../../shared/models/payload/pagedResponse';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HotelsRouteDataProvider} from '../hotels-route-data.provider';
import {Hotel} from '../../../../shared/models/hotel';
import {HotelService} from '../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  mapOfExpandData: { [key: string]: boolean } = {};
  switchValue = false;
  pageIndex = 1;
  pageSize = 17;
  total = 1;
  hotels = [];
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;
  searchGenderList: string[] = [];
  selected: string;
  pagedResponse: PagedResponse<Hotel>;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
        this.refreshStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private routeDataProvider: HotelsRouteDataProvider
  ) {
  }

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }


  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  ngOnInit(): void {
    this.route.data.subscribe((resolve: any) => {
      this.pagedResponse = resolve.data;
      this.total = this.pagedResponse.totalElements;
      this.pageIndex = this.pagedResponse.page + 1;
      this.pageSize = this.pagedResponse.size;
      this.hotels = this.pagedResponse.content;

      console.log(this.hotels);

      this.loading = false;
      console.log('this.router.url', this.router.url);
      this.selected = this.router.url.substr(19);
      console.log(this.selected);
      if (this.selected !== undefined) {
        const selectedHotel = this.hotels.find(r => r.id === +this.selected);
        console.log('selectedHotel', selectedHotel);
        this.routeDataProvider.setHotel(selectedHotel);
      }
    });
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    const filter = {
      page: this.pageIndex - 1,
      size: this.pageSize
    };

    this.hotelService.getHotelsByProvider(filter).pipe(
      catchError((error: any) => {
        this.loading = false;
        return throwError(error);
      })
    ).subscribe((data: any) => {
      this.hotels = data.content;
        this.total = data.totalElements;
        this.loading = false;
      },
    );
  }

  updateFilter(value: string[]): void {
    console.log('updateFilter', value);
    this.searchGenderList = value;
    this.searchData(true);
  }

  hotelClicked(data: any) {
    console.log('hotelClicked', data);
    this.selected = data.id;
    this.routeDataProvider.setHotel(data);
    this.router.navigate(['management/hotels', data.id]);
  }
}
