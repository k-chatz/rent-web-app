import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
import {Profile} from '../../../../shared/models/profile';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  profile: Profile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log('route data: ', data);
      this.profile = data.data;
    });
  }

}
