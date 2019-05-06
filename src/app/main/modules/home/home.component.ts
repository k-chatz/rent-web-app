import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {Title} from '@angular/platform-browser';
import {first, timeout} from 'rxjs/operators';
import {TextAnimation} from 'ngx-teximate';
import {fadeIn} from 'ng-animate';
import {HttpClient} from '@angular/common/http';
import {FileReaderService} from '../../../shared/services/file-reader.service';
import {FileUploaderService} from '../../../shared/services/file-uploader.service';

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
    private http: HttpClient,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private titleService: Title,
    public uploader: FileUploaderService,
    public reader: FileReaderService
  ) {
    titleService.setTitle('RentCube');
  }

  get session$() {
    return this.auth.session$;
  }

  ngOnInit() {
  }

  login(email: string) {
    this.auth.login({
      email,
      password: 'asdfk2.daADd'
    }).pipe(first())
      .subscribe((response: any) => console.log('response', response));
  }

  forceTimeout() {
    this.http.get('https://httpstat.us/200?sleep=5000')
      .subscribe(response => {
        console.log('forceTimeout', response);
      }, (error) => {
        console.log('Error', error);
      });
  }

  onCompleteItem($event) {
    console.log($event);
  }

  logout() {
    this.auth.logout();
  }
}
