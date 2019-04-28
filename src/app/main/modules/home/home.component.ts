import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {Title} from '@angular/platform-browser';
import {first} from 'rxjs/operators';
import {TextAnimation} from 'ngx-teximate';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
    'standard dummy text ever since the 1500s, when an unknown printer took a galley ' +
    'of type and scrambled it to make a type specimen book. ' +
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' +
    ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ' +
    'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n';

  enterAnimation: TextAnimation = {
    animation: fadeIn,
    delay: 5,
    type: 'letter'
  };

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
