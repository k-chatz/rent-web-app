import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

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
    });
  }
}
