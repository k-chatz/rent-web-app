import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {first} from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  login() {
    this.auth.login('test', 'test')
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        });
  }

  logout() {
    this.auth.logout();
  }
}
