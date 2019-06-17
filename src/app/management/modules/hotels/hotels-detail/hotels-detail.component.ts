import {Component, OnDestroy, OnInit} from '@angular/core';
import {Profile} from '../../../../shared/models/profile';
import {User} from '../../../../shared/models/user';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
import {UsersRouteDataProvider} from '../../users/users-route-data.provider';

@Component({
  selector: 'app-hotels-detail',
  templateUrl: './hotels-detail.component.html',
  styleUrls: ['./hotels-detail.component.scss']
})
export class HotelsDetailComponent implements OnInit, OnDestroy {

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
