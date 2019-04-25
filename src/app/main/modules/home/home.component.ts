import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {Title} from '@angular/platform-browser';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private titleService: Title,
  ) {
    titleService.setTitle('RentCube');
  }

  get session$() {
    return this.auth.session$;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  login(email: string) {
    this.auth.login({
      email,
      password: '123456'
    }).pipe(first())
      .subscribe((response: any) => {
          console.log('response', response);
        },
        error => {
          console.error(error);
        });
  }

  logout() {
    this.auth.logout();
  }
}
