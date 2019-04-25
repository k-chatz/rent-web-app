import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  public constructor(
    private titleService: Title,
    private location: Location
  ) {
    titleService.setTitle('About RentCube');
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }
}
