import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public constructor(
    private titleService: Title
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'Dashboard');
  }

  ngOnInit() {
  }

}
