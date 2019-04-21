import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isVisible = false;

  constructor(
    private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  get session$() {
    return this.auth.session$;
  }


  showSignInModal() {
    this.isVisible = true;
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  logout() {
    this.auth.logout();
  }

}
