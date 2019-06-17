import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {slideInAnimation} from '../../../shared/animations/slide-in.animation';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AboutComponent implements OnInit {

  public constructor(
    private titleService: Title,
    private location: Location
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'About');
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }
}
