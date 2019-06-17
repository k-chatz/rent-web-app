import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Location } from '@angular/common';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private titleService: Title,
    private location: Location
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'Not found');
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
