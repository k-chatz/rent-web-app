import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/user';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private user: User;

  public constructor(
    private titleService: Title
  ) {
    titleService.setTitle('Profile');
  }

  ngOnInit() {
  }

}
