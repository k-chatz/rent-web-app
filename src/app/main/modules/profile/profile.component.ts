import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/user';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username = 'antoni4040';
  name = 'Antoni';
  surname = 'Karvelas';
  birthday = '03/05/1998';

  editing = false;

  private user: User;

  public constructor(
    private titleService: Title
  ) {
    titleService.setTitle('Profile');
  }

  ngOnInit() {
  }

}
