import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  destination: string;
  startDate: any;
  endDate: any;
  visitors: any;
  hotels: any;

  lat = 37.9829819;
  lng = 23.7697477;
  maxPrice: number;
  minPrice: number;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    titleService.setTitle('Search');
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.destination = data.data.destination;
      this.startDate = data.data.start;
      this.endDate = data.data.end;
      this.visitors = data.data.visitors;
      /* TODO: Molis par8oyn ta data apton router, na ginontai featch
       *  ta 3enodoxeia paginated kai epeita na ginontai feed ta input twn katallhlwn components */
      this.minPrice = 123;
      this.maxPrice = 456;
      this.hotels = [
        {
          id: 1,
          name: 'hotel_1',
          number_of_rooms: 4,
          stars: '4.5',
          lat: '100',
          lng: '100',
          description_short: '--Short Description--',
          description_long: '--Long Description--'
        },

        {
          id: 2,
          name: 'hotel_1',
          number_of_rooms: 5,
          stars: '4.5',
          lat: '100',
          lng: '101',
          description_short: '--Short Description--',
          description_long: '--Long Description--'
        },

        {
          id: 3,
          name: 'hotel_1',
          number_of_rooms: 6,
          stars: '4.5',
          lat: '102',
          lng: '103',
          description_short: '--Short Description--',
          description_long: '--Long Description--'
        }
      ];
    });
  }
}
