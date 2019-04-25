import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
  ) {
  }

  get session$() {
    return this.auth.session$;
  }


  ngOnInit() {
  }

}
