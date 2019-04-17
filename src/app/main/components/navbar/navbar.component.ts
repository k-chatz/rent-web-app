import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) {
  }

  ngOnInit() {
  }

  get currentUser$() {
    return this.auth.currentUser$;
  }


}
