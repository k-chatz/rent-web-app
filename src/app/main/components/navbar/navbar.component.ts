import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isVisible = false;

  constructor(
    private auth: AuthService
  ) {
  }

  ngOnInit() {
  }

  get currentUser$() {
    return this.auth.currentUser$;
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

}
