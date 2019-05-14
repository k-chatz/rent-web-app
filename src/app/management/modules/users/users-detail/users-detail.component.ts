import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
import {Profile} from '../../../../shared/models/profile';
import {UsersRouteDataProvider} from '../users-route-data.provider';
import {Subscription} from 'rxjs';
import {User} from '../../../../shared/models/user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit, OnDestroy {
  profile: Profile;
  user: User;
  private userSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private routeDataProvider: UsersRouteDataProvider
  ) {
  }

  ngOnInit() {
    this.userSub = this.routeDataProvider.getUser$().subscribe((user: User) => {
      this.user = user;
    });
    this.route.data.subscribe((data: any) => {
      this.profile = data.data;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
