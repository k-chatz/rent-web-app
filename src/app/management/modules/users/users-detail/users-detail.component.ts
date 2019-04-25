import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
import {User} from '../../../../shared/models/user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log('route data: ', data);
      this.user = data.user;
    });
  }

}
