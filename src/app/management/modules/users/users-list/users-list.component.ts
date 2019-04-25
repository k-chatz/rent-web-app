import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../shared/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  selected: number;
  users: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log('route data: ', data);
      this.users = data.users;
    });
  }

  userClicked(id: number) {
    this.selected = id;
    this.router.navigate(['management/users', id]);
  }

}
