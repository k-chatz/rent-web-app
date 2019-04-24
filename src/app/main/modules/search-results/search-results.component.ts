import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    titleService.setTitle('Search');
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }
}
