import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isVisible = false;
  messages: string [];
  notifications: string [];

  constructor(
    private auth: AuthenticationService
  ) {
    this.addTestData();
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

  addTestData() {
    // Add test messages:
    this.messages = [];
    this.messages.push('Message 1');
    this.messages.push('Message 2');
    this.messages.push('Message 3');

    // Add test notifications:
    this.notifications = [];
    this.notifications.push('Notification 1');
    this.notifications.push('Notification 2');
    this.notifications.push('Notification 3');
    this.notifications.push('Notification 4');
  }

}
