import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  login() {
    this.auth.signIn();
  }

  logout() {
    this.auth.signOut();
  }
}
